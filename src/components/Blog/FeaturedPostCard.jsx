import { Link } from "react-router-dom";
import { Calendar, Star, Clock, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/Card";

export default function FeaturedPostCard({ post, imageUrl, readingTime }) {
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
          <CardTitle className="text-2xl lg:text-5xl mb-4">
            <Link
              to={`/post/${post.slug}`}
              className="text-gray-900 dark:text-gray-200 hover:text-[#850000] dark:hover:text-[#f35454]"
            >
              {post.title.rendered}
            </Link>
          </CardTitle>
          <CardContent className="p-0 flex justify-between flex-col">
            <div
              className="text-gray-700 dark:text-gray-400 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: post.excerpt?.rendered || "", // Default to an empty string
              }}
            />
            <div>
              <Link
                to={`/post/${post.slug}`}
                className="inline-flex items-center text-[#850000] dark:text-[#f35454] font-medium hover:text-[#6b2323] dark:hover:text-[#f35454]"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
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
