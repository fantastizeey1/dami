// Blog/wordpress.js
import axios from "axios";

const wp = axios.create({
  baseURL: "https://back.local/wp-json/wp/v2",
});

export const getPosts = () => wp.get("/posts");
export const getPostBySlug = (slug) => wp.get(`/posts?slug=${slug}`);
