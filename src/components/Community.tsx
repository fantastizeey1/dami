import React, { useState } from "react";
import { Rocket, Github, Twitter, Zap, Shield, Heart } from "lucide-react";

const Community = () => {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400 dark:text-yellow-300" />,
      title: "Lightning Fast",
      description:
        "Experience blazing fast performance with our optimized platform",
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600 dark:text-green-300" />,
      title: "Secure by Design",
      description:
        "Built with security first, ensuring your data stays protected",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    alert("Thanks for subscribing! We'll keep you posted.");
  };

  return (
    <section>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 pt-24 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border bg-white/60 border-white/40 dark:bg-white/10 dark:border-white/20">
            <div className="flex justify-center mb-8">
              <Rocket className="w-16 h-16 text-purple-600 dark:text-white animate-bounce" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-gray-800 dark:text-white">
              Something Awesome is Coming Soon
            </h1>

            <p className="text-xl text-center mb-12 text-gray-600 dark:text-white/80">
              We're building the next generation platform that will change
              everything.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                  alt="Abstract Visualization"
                  className="w-full h-64 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-white/40 hover:bg-white/60 dark:bg-white/5 dark:hover:bg-white/10"
                  >
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border bg-white/60 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/50"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 dark:bg-white dark:text-purple-600 dark:hover:bg-white/90"
                >
                  Notify Me
                </button>
              </div>
            </form>

            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 dark:text-white/80 dark:hover:text-white"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 dark:text-white/80 dark:hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
