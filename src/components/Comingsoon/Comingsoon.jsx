import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Mail, Instagram, Twitter, Sparkles } from "lucide-react";

function Comingsoon() {
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    "Days-left": 0,
    "Hours to go": 0,
    "Minutes remaining": 0,
    "Seconds ticking": 0,
  });

  // Launch date is set to 30 days from now
  useEffect(() => {
    const targetDate = new Date("2026-05-15T00:00:00Z"); // Set your event's fixed date

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        "Days-left": Math.floor(distance / (1000 * 60 * 60 * 24)),
        "Hours to go": Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        "Minutes remaining": Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        "Seconds ticking": Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}
    >
      <motion.main
        className="max-w-7xl mx-auto px-8 pt-24 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <Sparkles className="w-12 h-12 text-purple-500" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-center text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
        >
          Something Amazing
          <br />
          Is Coming Soon
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-center text-xl mb-16 text-gray-600 dark:text-gray-300"
        >
          Innovation is in the works. Get ready for an unforgettable experience.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                {value}
              </div>
              <div className="text-center mt-2 capitalize text-gray-500 dark:text-gray-400">
                {unit}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        {/* <motion.div
          variants={itemVariants}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Get Notified</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold">
              Notify Me
            </button>
          </div>
        </motion.div> */}

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-16"
        >
          {[
            { icon: Twitter, link: "#" },
            { icon: Instagram, link: "#" },
            { icon: Mail, link: "#" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.main>
    </div>
  );
}

export default Comingsoon;
