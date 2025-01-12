import { Link } from "react-router-dom";
import { Calendar, BookOpen, ArrowRight, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";

export default function RegularPostCard({ post, imageUrl, readingTime }) {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/600x400?text=No+Image+Available";

  return (
    <Card className="transition-transform hover:-translate-y-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
      {featuredImage && (
        <img
          src={imageUrl || featuredImage}
          alt={post.title.rendered}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <CardHeader>
        <div className="flex items-center space-x-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 rounded-full text-sm">
            <BookOpen className="w-4 h-4 mr-2" /> Article
          </span>
        </div>
        <CardTitle className="text-xl">
          <Link
            to={`/post/${post.slug}`}
            className="text-gray-900 dark:text-gray-200 hover:text-[#850000] dark:hover:text-[#f35454]"
          >
            {post.title.rendered}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <Calendar className="w-4 h-4" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center justify-between flex-row ">
          <div>
            <Link
              to={`/post/${post.slug}`}
              className="inline-flex items-center text-[#850000] dark:text-[#f35454] font-medium hover:text-[#6b2323] dark:hover:text-[#f35454]"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-black dark:text-gray-200">
            <Clock className="w-4 h-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
