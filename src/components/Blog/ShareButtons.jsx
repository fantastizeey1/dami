import React from "react";
import { Twitter, Linkedin, Facebook, Link as LinkIcon } from "lucide-react";

const ShareButtons = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
          )
        }
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-5 h-5" />
      </button>
      <button
        onClick={() =>
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
          )
        }
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </button>
      <button
        onClick={() =>
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
          )
        }
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </button>
      <button
        onClick={copyToClipboard}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        aria-label="Copy link"
      >
        <LinkIcon className="w-5 h-5" />
      </button>
    </div>
  );
};
