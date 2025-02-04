import React, { useState, useEffect } from "react";
import { X, ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Trap focus within modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    const payload = {
      "form-name": "contact",
      ...formData,
    };

    const encodedData = new URLSearchParams(payload).toString();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => onClose(), 2000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const labelClassName =
    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";
  const inputClassName = `
    w-full px-4 py-2 
    border border-gray-300 dark:border-gray-600 
    rounded-lg 
    focus:ring-2 focus:ring-purple-500 focus:border-transparent 
    hover:border-gray-400 dark:hover:border-gray-500
    dark:bg-gray-700 dark:text-white 
    transition-all duration-200
    placeholder-gray-400 dark:placeholder-gray-500
    disabled:opacity-60 disabled:cursor-not-allowed
    ${errors ? "focus:ring-red-500" : "focus:ring-purple-500"}
  `;
  const errorClassName = "text-red-500 dark:text-red-400 text-sm mt-1";
  const requiredIndicator = (
    <span className="text-red-500 dark:text-red-400 ml-1">*</span>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      >
        <motion.div
          variants={formVariants}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-lg relative shadow-xl"
          role="dialog"
          aria-labelledby="contact-form-title"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <h2
            id="contact-form-title"
            className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Let's Connect
          </h2>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded-lg flex items-center"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Message sent successfully!
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded-lg flex items-center"
            >
              <AlertCircle className="w-5 h-5 mr-2" />
              Failed to send message. Please try again.
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClassName}>
                  Name {requiredIndicator}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClassName}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Your name"
                  disabled={isLoading}
                />
                {errors.name && (
                  <p id="name-error" className={errorClassName} role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClassName}>
                  Email {requiredIndicator}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClassName}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="your@email.com"
                  disabled={isLoading}
                />
                {errors.email && (
                  <p id="email-error" className={errorClassName} role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className={labelClassName}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClassName}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  placeholder="+1 (555) 000-0000"
                  disabled={isLoading}
                />
                {errors.phone && (
                  <p id="phone-error" className={errorClassName} role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="company" className={labelClassName}>
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Your company"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={labelClassName}>
                Subject {requiredIndicator}
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={inputClassName}
                required
                aria-required="true"
                placeholder="What's this about?"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClassName}>
                Message {requiredIndicator}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={inputClassName}
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Your message here..."
                disabled={isLoading}
              />
              {errors.message && (
                <p id="message-error" className={errorClassName} role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full group inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-gradient-to-r from-brand-maroon via-purple-600 to-pink-600 rounded-xl hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
