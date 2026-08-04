"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.1, rotate: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-amber-200 border-2 border-ink text-ink rounded-full shadow-[3px_3px_0px_rgba(28,28,26,1)] hover:bg-amber-300 transition-colors flex items-center justify-center cursor-pointer group select-none"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} />
          <span className="absolute right-full mr-2 px-2 py-1 bg-white border border-stone-200 rounded text-[11px] font-handwritten text-coral -rotate-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none">
            top ✦
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
