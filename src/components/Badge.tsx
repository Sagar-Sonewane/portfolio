"use client";

import React from "react";
import { motion } from "framer-motion";

interface BadgeProps {
  text: string;
  className?: string;
  color?: "yellow" | "coral" | "blue" | "green" | "purple" | "cream";
  rotation?: string;
  floating?: boolean;
}

export default function Badge({
  text,
  className = "",
  color = "cream",
  rotation = "rotate-2",
  floating = false
}: BadgeProps) {
  const getColorClass = () => {
    switch (color) {
      case "yellow":
        return "bg-amber-100 text-amber-900 border-amber-400";
      case "coral":
        return "bg-rose-100 text-rose-900 border-rose-400";
      case "blue":
        return "bg-sky-100 text-sky-900 border-sky-400";
      case "green":
        return "bg-emerald-100 text-emerald-900 border-emerald-400";
      case "purple":
        return "bg-purple-100 text-purple-900 border-purple-400";
      default:
        return "bg-paper-dark text-ink border-stone-400";
    }
  };

  // Convert rotation to style custom property for float animation
  const rotationValue = rotation.includes("rotate-") 
    ? (rotation.includes("-") ? `-${rotation.replace("-rotate-", "")}deg` : `${rotation.replace("rotate-", "")}deg`)
    : "2deg";

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className={`inline-block px-3 py-1 text-xs md:text-sm font-semibold border-2 border-ink rounded-full shadow-[2px_2px_0px_rgba(28,28,26,1)] pointer-events-auto select-none ${rotation} ${getColorClass()} ${
        floating ? "animate-[float_6s_ease-in-out_infinite]" : ""
      } ${className}`}
      style={{
        "--sticker-angle": rotationValue
      } as React.CSSProperties}
    >
      {text}
    </motion.div>
  );
}
