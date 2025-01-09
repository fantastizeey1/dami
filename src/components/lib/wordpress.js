import axios from "axios";

// Base configuration for Axios instance
const wp = axios.create({
  baseURL: "https://back.local/wp-json/wp/v2",
});

// Function to set the authentication token dynamically
export const setAuthToken = (token) => {
  wp.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Fetch all posts, including embedded data (e.g., featured images, author info)
export const getPosts = () => wp.get("/posts?_embed");

// Fetch a specific post by slug, including embedded data
export const getPostBySlug = (slug) => wp.get(`/posts?slug=${slug}&_embed`);

// Fetch comments for a specific post by its ID
export const getComments = (postId) => wp.get(`/comments?post=${postId}`);

// Create a new comment for a specific post
export const createComment = (postId, comment) =>
  wp.post(`/comments`, {
    post: postId,
    ...comment, // Spreads comment fields like `author_name`, `author_email`, `content`
  });

// Fetch categories (adjust baseURL dynamically if necessary)
export const getCategories = async () => {
  const response = await wp.get("/categories");
  return response.data; // Returns parsed JSON data for categories
};
