import React from "react";
import { X } from "lucide-react";

const CategoryFilterModal = ({
  isOpen,
  onClose,
  categories,
  selected,
  onToggle,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Filter by Category</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2 max-h-[60vh] overflow-y-auto">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(category.id)}
                onChange={() => onToggle(category.id)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-gray-700 dark:text-gray-200">
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterModal;
