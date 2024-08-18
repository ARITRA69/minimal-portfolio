"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4"
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
      exit={{ scale: isVisible ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
    >
      {isVisible && (
        <button
          type="button"
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </motion.div>
  );
};

export default ScrollToTopButton;
