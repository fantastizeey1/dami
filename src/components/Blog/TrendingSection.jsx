import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import { getPosts, getComments } from "../lib/wordpress";

const extractImageFromContent = (content) => {
  const div = document.createElement("div");
  div.innerHTML = content;
  const img = div.querySelector("img");
  return img ? img.src : "/api/placeholder/400/300";
};

const TrendingSection = ({ readingTime }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const postsResponse = await getPosts();
        const postsWithComments = await Promise.all(
          postsResponse.data.map(async (post) => {
            const commentsResponse = await getComments(post.id);
            return {
              ...post,
              comment_count: commentsResponse.data.length,
            };
          })
        );

        // Sort posts by comment count in descending order
        postsWithComments.sort((a, b) => b.comment_count - a.comment_count);

        // Only take the top 3 posts
        setPosts(postsWithComments.slice(0, 3));
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blog content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold dark:text-white">Trending</h2>
        <TrendingUp className="w-6 h-6 text-orange-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const imageUrl = extractImageFromContent(post.content.rendered);
          const commentCount = post.comment_count || 0;

          return (
            <Card
              key={post.id}
              className="group relative overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)} // Navigate on click
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={post.title.rendered}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3
                    className="text-lg font-semibold mb-3 text-gray-900 dark:text-white"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  {/* <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </div> */}
                  <div className="flex items-center justify-between mb-2 space-x-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{readingTime} min read</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {commentCount} {commentCount === 1 ? "Comment" : "Comments"}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingSection;
