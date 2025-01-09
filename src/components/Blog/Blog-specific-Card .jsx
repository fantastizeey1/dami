import { Link } from "react-router-dom";
import { Calendar, Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/Card";

export function FeaturedPostCard({ post, imageUrl }) {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/600x400?text=No+Image+Available";

  return (
    <Card className="bg-[#850000] dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-all">
      <div className="flex flex-col md:flex-row p-6">
        <div className="flex-1 pr-6 h-auto flex flex-col justify-between">
          <div className="flex items-center space-x-4 mb-4">
            <span className="inline-flex items-center px-3 py-1 bg-purple-900/10 dark:bg-purple-900/20 rounded-full text-sm">
              <Star className="w-4 h-4 mr-2" /> Featured
            </span>
          </div>
          <CardTitle className="text-5xl mb-4">
            <Link
              to={`/post/${post.slug}`}
              className="text-gray-900 dark:text-gray-200 hover:text-[#850000] dark:hover:text-[#f35454]"
            >
              {post.title.rendered}
            </Link>
          </CardTitle>
          <CardContent className="p-0">
            <div
              className="text-gray-700 dark:text-gray-400 mb-4 line-clamp-3 "
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </CardContent>
          <CardFooter className="p-0">
            <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </CardFooter>
        </div>
        {featuredImage && (
          <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={imageUrl || featuredImage}
              alt={post.title.rendered}
              className="rounded-lg object-cover w-full aspect-auto"
            />
          </div>
        )}
      </div>
    </Card>
  );
}

import { BookOpen, ArrowRight } from "lucide-react";

export function RegularPostCard({ post, imageUrl }) {
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
        <Link
          to={`/post/${post.slug}`}
          className="inline-flex items-center text-[#850000] dark:text-[#f35454] font-medium hover:text-[#6b2323] dark:hover:text-[#f35454]"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </CardContent>
    </Card>
  );
}

export function NewsletterCard() {
  return (
    <Card className="bg-blue-500 text-white dark:bg-gray-800 dark:text-gray-200 transition-all">
      <CardHeader>
        <CardTitle className="text-white dark:text-gray-200">
          Subscribe to our blog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-100 dark:text-gray-400">
          Stay up to date with our latest articles, tutorials, and insights
          delivered straight to your inbox.
        </p>
        <button className="text-blue-500 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
          Subscribe Now
        </button>
      </CardContent>
    </Card>
  );
}
