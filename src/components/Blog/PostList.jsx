import React, { Suspense, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "./Loading";
import { Search, X, Filter } from "lucide-react";
import SEOHead from "./SEOHead";

const LoadMore = ({ onLoadMore, loading }) => {
  return (
    <button onClick={onLoadMore} disabled={loading}>
      {loading ? "Loading..." : "Load More"}
    </button>
  );
};

const FeaturedPostCard = React.lazy(() => import("./FeaturedPostCard"));

const RegularPostCard = React.lazy(() => import("./RegularPostCard"));
const NewsletterCard = React.lazy(() => import("./NewsletterCard"));

const CategoryFilterModal = React.lazy(() => import("./CategoryFilterModal"));
const ShareButtons = React.lazy(() => import("./ShareButtons"));
const RelatedPosts = React.lazy(() => import("./RelatedPosts"));

// Custom hooks
import { usePostsData } from "./hooks/usePostsData";
import { usePostFilters } from "./hooks/usePostFilters";
import { useDebounce } from "./hooks/useDebounce";
import {
  usePerformanceMonitor,
  estimateReadingTime,
} from "./hooks/usePerformanceMonitor";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="text-center py-12">
    <h3 className="text-2xl font-bold mb-4">Something went wrong</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{error.message}</p>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
    >
      Try again
    </button>
  </div>
);

const OptimizedImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={className}
    onError={(e) => {
      e.target.src = "/fallback-image.jpg";
    }}
  />
);

const PostList = () => {
  usePerformanceMonitor();

  const extractImageUrl = (content) => {
    const imageUrlMatch = content.match(/<img.*?src="(.*?)"/);
    return imageUrlMatch ? imageUrlMatch[1] : null;
  };

  const {
    posts,
    categories,
    loading,
    error,
    currentPage,
    setCurrentPage,
    postsPerPage,
    loadMore,
  } = usePostsData();

  const {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    isFilterMenuOpen,
    setIsFilterMenuOpen,
    filteredPosts,
    toggleCategory,
    clearFilters,
  } = usePostFilters(posts, categories);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ErrorFallback
        error={{ message: error }}
        resetErrorBoundary={() => window.location.reload()}
      />
    );
  }

  const currentPosts = filteredPosts
    .slice(0, currentPage * postsPerPage)
    .map((post) => ({
      ...post,
      imageUrl: extractImageUrl(post.content.rendered),
    }));
  const featuredPost = currentPosts[0];
  const regularPosts = currentPosts.slice(featuredPost ? 1 : 0);

  return (
    <>
      <SEOHead />
      <div className="w-full max-w-7xl mx-auto px-8 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300 pt-16">
        <header className="container mx-auto px-4 pt-12 lg:pt-20">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Learn</h1>
            <p className="text-lg max-w-2xl text-gray-700 dark:text-gray-300">
              This is our free resource library to all things email marketing.
              Read about tool comparisons, methods, metrics to measure,
              marketing insights, list building, lead generation and more.
            </p>
          </div>

          {/* <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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

          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loading />}>
              {featuredPost && (
                <div>
                  <FeaturedPostCard
                    post={featuredPost}
                    imageUrl={featuredPost.imageUrl}
                    readingTime={estimateReadingTime(
                      featuredPost.content.rendered
                    )}
                  />
                </div>
              )}
            </Suspense>
          </ErrorBoundary>
        </header>

        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold">Latest Articles</h2>
            <div className="text-gray-700 dark:text-gray-400">
              {filteredPosts.length} articles found
            </div>
          </div>

          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loading />}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <RegularPostCard
                    key={post.id}
                    post={post}
                    imageUrl={post.imageUrl}
                    readingTime={estimateReadingTime(post.content.rendered)}
                  />
                ))}
                <NewsletterCard />
              </div>
            </Suspense>
          </ErrorBoundary>

          {/* {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            </div>
          ) : (
            <LoadMore onLoadMore={loadMore} loading={loading} />
          )} */}
        </section>

        <Suspense fallback={<div>Loading...</div>}>
          <CategoryFilterModal
            isOpen={isFilterMenuOpen}
            onClose={() => setIsFilterMenuOpen(false)}
            categories={categories}
            selected={selectedCategories}
            onToggle={toggleCategory}
          />
        </Suspense>
      </div>
    </>
  );
};

export default PostList;
