// Footer.jsx
import React from "react";
import { FiMail, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Logo from "../../Header/Logo";
import CTAButton from "../CTA/CTAButton";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 dark:text-gray-100 text-gray-900 mt-24 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-6">
            <Logo className="w-32 sm:w-40 md:w-48 h-auto" />
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
              Transforming email marketing through innovative solutions and
              data-driven strategies.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-playfair text-base sm:text-lg font-bold dark:text-gray-100 text-gray-900 mb-2 sm:mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Automation", "Analytics", "Campaigns", "Templates"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="nav-hover-btn text-gray-600 dark:text-gray-300 text-xs sm:text-sm transition-all"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-playfair text-base sm:text-lg font-bold dark:text-gray-100 text-gray-900 mb-2 sm:mb-4">
              Contact
            </h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <p className="text-gray-600 dark:text-gray-300">
                123 Marketing Lane
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                New York, NY 10001
              </p>
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all"
              >
                <FiMail className="w-3 h-3 sm:w-4 sm:h-4" />
                info@example.com
              </a>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-playfair text-base sm:text-lg font-bold dark:text-gray-100 text-gray-900 mb-2 sm:mb-4">
              Newsletter
            </h4>
            <form className="space-y-3 sm:space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="flex-shrink-0 animate-float">
                <CTAButton
                  text="Subscribe"
                  className="w-full text-sm sm:text-base"
                  gradientClassName="hover:scale-105"
                  iconClassName="ml-1 sm:ml-2"
                />
              </div>
            </form>
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-4 sm:mt-6">
              {[FiFacebook, FiTwitter, FiInstagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 sm:p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 transition-all"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <p>© 2025 InkyRepertoire. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              <a
                href="#"
                className="hover:text-gray-700 dark:hover:text-gray-200 transition-all"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-700 dark:hover:text-gray-200 transition-all"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
