import React, { useState } from "react";
import { createComment } from "../lib/wordpress";

function CommentSection({ postId, comments, onCommentAdded }) {
  const [newComment, setNewComment] = useState({
    author_name: "",
    author_email: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await createComment(postId, {
        ...newComment,
        content: newComment.content,
      });
      setNewComment({ author_name: "", author_email: "", content: "" });
      setSubmitMessage(
        "Comment submitted successfully! It will be visible after moderation."
      );
      onCommentAdded();
    } catch (error) {
      console.error("Error posting comment:", error);
      if (error.response?.data?.code === "rest_comment_login_required") {
        setSubmitMessage(
          "Comments require authentication. Please log in first."
        );
      } else {
        setSubmitMessage("Error posting comment. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Comments</h3>

      {/* Comment List */}
      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {comment.author_name.charAt(0).toUpperCase()}
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">{comment.author_name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(comment.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div
              className="ml-14"
              dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
            />
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
      >
        <h4 className="text-xl font-semibold mb-4">Leave a Comment</h4>
        {submitMessage && (
          <div
            className={`p-4 mb-4 rounded-lg ${
              submitMessage.includes("successfully")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submitMessage}
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              value={newComment.author_name}
              onChange={(e) =>
                setNewComment({ ...newComment, author_name: e.target.value })
              }
              className="w-full px-4 py-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={newComment.author_email}
              onChange={(e) =>
                setNewComment({ ...newComment, author_email: e.target.value })
              }
              className="w-full px-4 py-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Comment</label>
          <textarea
            required
            value={newComment.content}
            onChange={(e) =>
              setNewComment({ ...newComment, content: e.target.value })
            }
            className="w-full px-4 py-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
            rows="4"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {isSubmitting ? "Posting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
}

export default CommentSection;
