import { useState, useMemo } from "react";

export const usePostFilters = (posts = [], categories = []) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title.rendered
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategories =
        selectedCategories.length === 0 ||
        selectedCategories.some((catId) => post.categories.includes(catId));
      return matchesSearch && matchesCategories;
    });
  }, [posts, searchTerm, selectedCategories]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    isFilterMenuOpen,
    setIsFilterMenuOpen,
    filteredPosts,
    toggleCategory,
    clearFilters,
  };
};
