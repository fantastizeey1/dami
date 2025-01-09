import React, { useState, useEffect } from "react";
import { getPosts, getPostBySlug } from "../lib/wordpress";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>
      ))}
    </div>
  );
}

export default Blog;
