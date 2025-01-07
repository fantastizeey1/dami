import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./wordpress";
import Loading from "./Loading";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <Loading />;

  return (
    <div className="max-w-5xl mx-auto pt-28  min-h-screen p-8 dark:bg-gray-900 dark:text-white">
      <h1 className="text-5xl font-extrabold text-center mb-12">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                <Link
                  to={`/post/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {post.title.rendered}
                </Link>
              </h2>
              <div
                className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Link
                to={`/post/${post.slug}`}
                className="inline-block text-blue-500 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
              >
                Read More &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default PostList;
