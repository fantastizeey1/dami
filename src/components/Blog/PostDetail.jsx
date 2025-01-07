import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "./wordpress";
import Loading from "./Loading";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostBySlug(slug);
        setPost(response.data[0]); // WordPress returns an array for `slug`
        document.title = response.data[0]?.title?.rendered || "Post Detail"; // Set dynamic title
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
    return (
      <div className="text-center pt-28  p-10 text-xl">Post not found</div>
    );

  return (
    <div className="max-w-4xl mx-auto pt-28 p-8 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">{post.title.rendered}</h1>
      <div className="mb-6 text-gray-600 dark:text-gray-400">
        <span className="mr-4">
          <strong>Author:</strong> {post.author_name || "Unknown"}
        </span>
        <span>
          <strong>Published on:</strong>{" "}
          {new Date(post.date).toLocaleDateString()}
        </span>
      </div>
      <div
        className="content text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
      <Link
        to="/blog"
        className="text-blue-500 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
      >
        &larr; Back to Blog
      </Link>
    </div>
  );
}

export default PostDetail;
