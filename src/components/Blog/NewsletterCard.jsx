import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";

export default function NewsletterCard() {
  return (
    <Card className="bg-blue-500 text-black dark:bg-gray-800 dark:text-gray-200 transition-all">
      <CardHeader>
        <CardTitle className="text-black dark:text-gray-200 mb-2">
          Subscribe to our blog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          Stay up to date with our latest articles, tutorials, and insights
          delivered straight to your inbox.
        </p>
        <button className="bg-[#850000]  font-medium text-white px-4 py-2 rounded-lg   transition-colors">
          Subscribe Now
        </button>
      </CardContent>
    </Card>
  );
}
