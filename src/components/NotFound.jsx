import React from "react";
import { useInView } from "./Services/useInView";
import { MoveLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [ref, isVisible] = useInView();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto px-6 py-16 text-center transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Search className="w-24 h-24 mx-auto mb-8 text-blue-600 dark:text-blue-400 animate-bounce" />
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Oops! Looks like this page took a coffee break ☕
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Don't worry, even the best pages need a little downtime. Let's get you
          back to where the action is!
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform"
        >
          <MoveLeft className="w-5 h-5" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
