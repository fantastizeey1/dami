import React from "react";

const RelatedPosts = ({ currentPost, allPosts }) => {
  const related = allPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        post.categories.some((cat) => currentPost.categories.includes(cat))
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((post) => (
          <div
            key={post.id}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title.rendered}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                {post.title.rendered}
              </h4>
              <p
                className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt?.rendered || "", // Default to an empty string
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
