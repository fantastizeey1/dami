import { useState, useEffect, useCallback } from "react";
import { getCategories, getPosts } from "../../lib/wordpress";

export const usePostsData = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const loadMore = useCallback(() => {
    if (loading) return; // Prevent multiple triggers while loading
    setCurrentPage((prevPage) => prevPage + 1); // Increment page for pagination
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsResponse, categoriesResponse] = await Promise.all([
          getPosts(currentPage, postsPerPage), // Pass currentPage and postsPerPage
          getCategories(),
        ]);
        setPosts(postsResponse.data);
        setCategories(categoriesResponse.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blog content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]); // Re-fetch data when currentPage changes

  return {
    posts,
    categories,
    loading,
    error,
    currentPage,
    setCurrentPage,
    postsPerPage,
    loadMore, // Make loadMore available for the component to use
  };
};
