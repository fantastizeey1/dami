import { useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  Twitter,
  Instagram,
  Mail,
  Send,
  Loader2,
} from "lucide-react";
import { SEO } from "../SEO"; // Adjust path if needed
import { cn } from "@/lib/utils";

// Define the time interface
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Comingsoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  // Timer Logic
  useEffect(() => {
    const targetDate = new Date("2026-05-15T00:00:00Z");

    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTime());

    const interval = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // 1. Send data to Formspree
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        // Success!
        setIsJoined(true);
        setEmail("");
      } else {
        // Handle errors (optional: show an alert)
        console.error("Submission failed");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <SEO
        title="Coming Soon"
        description="We are building something extraordinary. Join the waitlist to get early access."
      />

      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

        <motion.main
          className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Back Button */}
          <motion.div
            variants={itemVariants}
            className="absolute top-0 left-6 md:left-0 -mt-20 md:-mt-0"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back Home</span>
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6 pt-16 md:pt-0"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-semibold tracking-wide uppercase border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-3 h-3" />
              In Development
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white"
          >
            We are cooking <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-300% animate-gradient">
              something exquisite.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            The ultimate email marketing platform for creators is on its way.
            Don't miss the launch.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="flex flex-col items-center p-4 md:p-6 rounded-2xl bg-white/40 dark:bg-gray-900/40 border border-white/50 dark:border-gray-800 backdrop-blur-sm shadow-sm"
              >
                {/* Font Mono ensures numbers don't jump width as they change */}
                <span className="text-4xl md:text-5xl font-bold font-mono text-gray-800 dark:text-gray-100 tabular-nums">
                  {value.toString().padStart(2, "0")}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-2 text-[10px] md:text-xs">
                  {unit}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Lead Capture Form */}
          <motion.div
            variants={itemVariants}
            className="max-w-md mx-auto mb-16"
          >
            {!isJoined ? (
              <form
                onSubmit={handleSubscribe}
                className="relative flex items-center"
              >
                <Mail className="absolute left-4 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-32 py-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all shadow-lg text-gray-900 dark:text-white placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:scale-105 active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Notify Me"
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>You're on the list! Watch your inbox.</span>
              </motion.div>
            )}
          </motion.div>

          {/* Social Footer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-sm text-gray-500 font-medium">
              Follow our journey
            </span>
            <div className="flex gap-4">
              {[
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: Send, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-all hover:-translate-y-1 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}
