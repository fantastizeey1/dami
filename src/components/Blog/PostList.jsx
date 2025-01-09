import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts, getCategories } from "../lib/wordpress";
import Loading from "./Loading";
import {
  FeaturedPostCard,
  RegularPostCard,
  NewsletterCard,
} from "./Blog-specific-Card ";
import { ArrowLeft, ArrowRight, Search, X, Filter } from "lucide-react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const postsPerPage = 6;

  const extractImageUrl = (content) => {
    const imageUrlMatch = content.match(/<img.*?src="(.*?)"/);
    return imageUrlMatch ? imageUrlMatch[1] : null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsResponse, categoriesResponse] = await Promise.all([
          getPosts(),
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
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.rendered
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((catId) => post.categories.includes(catId));
    return matchesSearch && matchesCategories;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts
    .slice(indexOfFirstPost, indexOfLastPost)
    .map((post) => ({
      ...post,
      imageUrl: extractImageUrl(post.content.rendered),
    }));

  const featuredPost = currentPosts[0];
  const regularPosts = currentPosts.slice(featuredPost ? 1 : 0);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-purple-900 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-8 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300 pt-16">
      {/* Header Section */}
      <header className="container mx-auto px-4 pt-12 lg:pt-20">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Explore Our Blog
          </h1>
          <p className="text-lg max-w-2xl text-gray-700 dark:text-gray-300">
            Discover our latest thoughts, Articles, guides, how-tos and
            resources to give you strategic edge in marketing..
          </p>
        </div>

        {/* Search and Filter Section */}
        {/* <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search articles..."
                className="w-full px-4 py-2 pl-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 dark:text-gray-500" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <button
              onClick={() => setIsFilterMenuOpen(true)}
              className="flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter by Category
            </button>
          </div>
        </div> */}

        {/* Featured Post */}
        {featuredPost && (
          <FeaturedPostCard
            post={featuredPost}
            imageUrl={featuredPost.imageUrl}
          />
        )}
      </header>

      {/* Latest Articles Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold">Latest Articles</h2>
          <div className="text-gray-700 dark:text-gray-400">
            {filteredPosts.length} articles found
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <RegularPostCard
              key={post.id}
              post={post}
              imageUrl={post.imageUrl}
            />
          ))}
          <NewsletterCard />
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default PostList;
