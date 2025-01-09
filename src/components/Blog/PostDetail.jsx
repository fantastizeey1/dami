import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostBySlug, getComments } from "../lib/wordpress";
import Loading from "./Loading";
import CommentSection from "./CommentSection";
import { Calendar, User, Clock, ArrowLeft, Tag } from "lucide-react";
import TrendingSection from "./TrendingSection";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async (postId) => {
    try {
      const response = await getComments(postId);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostBySlug(slug);
        const postData = response.data[0];
        setPost(postData);
        document.title = postData?.title?.rendered || "Post Detail";
        if (postData) {
          fetchComments(postData.id);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <Loading />;

  if (!post)
    return <div className="text-center pt-28 p-10 text-xl">Post not found</div>;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const tags = post._embedded?.["wp:term"]?.[1] || [];
  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

  return (
    <div>
      <article className="max-w-4xl prose dark:prose-invert mx-auto pt-28 px-4 sm:px-6 lg:px-8 pb-16 dark:bg-gray-900 dark:text-white">
        <div className="mb-8">
          <Link
            to="/learn"
            className="inline-flex items-center text-blue-500 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        <header className="mb-12">
          <div className="text-sm text-blue-600 dark:text-blue-400 mb-4 font-medium">
            {category}
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post._embedded?.author?.[0]?.name || "Unknown"}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{new Date(post.date).toLocaleTimeString()}</span>
            </div>
          </div>
        </header>

        {featuredImage && (
          <div className="mb-12">
            <img
              src={featuredImage}
              alt={post.title.rendered}
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <CommentSection
          postId={post.id}
          comments={comments}
          onCommentAdded={() => fetchComments(post.id)}
        />
      </article>
      <TrendingSection />
    </div>
  );
}

export default PostDetail;
