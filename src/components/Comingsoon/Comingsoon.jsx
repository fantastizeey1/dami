import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Mail,
  Instagram,
  Twitter,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

function Comingsoon() {
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    "Days Left": 0,
    "Hours To Go": 0,
    "Minutes Remaining": 0,
    "Seconds Ticking": 0,
  });

  // Fixed launch date
  useEffect(() => {
    const targetDate = new Date("2026-05-15T00:00:00Z");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          "Days Left": 0,
          "Hours To Go": 0,
          "Minutes Remaining": 0,
          "Seconds Ticking": 0,
        });
        return;
      }

      setTimeLeft({
        "Days Left": Math.floor(distance / (1000 * 60 * 60 * 24)),
        "Hours To Go": Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        "Minutes Remaining": Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        "Seconds Ticking": Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 
      dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-300 relative overflow-hidden`}
    >
      <motion.main
        className="max-w-6xl mx-auto px-6 md:px-8 py-12 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Back to Home Button */}
        <motion.div variants={itemVariants} className="absolute top-6 left-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm 
                       shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back Home</span>
          </Link>
        </motion.div>

        {/* Icon */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <Sparkles className="w-14 h-14 text-purple-500 drop-shadow-md" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold mb-6 
                     bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text leading-tight"
        >
          Something Amazing
          <br />
          Is Coming Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-16 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Innovation is in the works. <br className="hidden md:block" />
          Get ready for an unforgettable experience.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto mb-20"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                {value}
              </div>
              <div className="text-center mt-2 capitalize text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {unit}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-8"
        >
          {[
            { icon: Twitter, link: "#" },
            { icon: Instagram, link: "#" },
            { icon: Mail, link: "#" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              aria-label={social.icon.name}
              className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm 
                         hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </motion.a>
          ))}
        </motion.div>
      </motion.main>

      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/20 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 blur-[120px] -z-10" />
    </div>
  );
}

export default Comingsoon;
