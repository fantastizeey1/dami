import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-40">
      {/* Animated spinner */}
      <div className="w-20 h-20 border-4 border-blue-500 dark:border-blue-400 border-t-transparent rounded-full animate-spin mb-6"></div>

      {/* Catchphrase */}
      <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 animate-bounce">
        Good things take time... Almost there!
      </p>

      {/* Subtext */}
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Loading awesome content for you
      </p>

      {/* Optional decorative animation */}
      <div className="absolute bottom-10 w-16 h-16 bg-blue-500 dark:bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
    </div>
  );
}

export default Loading;
