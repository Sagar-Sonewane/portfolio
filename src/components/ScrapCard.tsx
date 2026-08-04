"use client";

import React from "react";
import { motion } from "framer-motion";
import Tape from "./Tape";

interface ScrapCardProps {
  children: React.ReactNode;
  className?: string;
  rotation?: string; // e.g. "rotate-1", "-rotate-2", "rotate-0"
  paperStyle?: "clean" | "lined" | "grid" | "torn";
  attachment?: "pin" | "paperclip" | "tape-top" | "tape-corners" | "none";
  color?: "white" | "yellow" | "coral" | "blue" | "cream";
}

export default function ScrapCard({
  children,
  className = "",
  rotation = "rotate-1",
  paperStyle = "clean",
  attachment = "tape-top",
  color = "white"
}: ScrapCardProps) {
  // Map paper style to classes
  const getPaperStyleClass = () => {
    switch (paperStyle) {
      case "lined":
        return "bg-lined";
      case "grid":
        return "bg-grid-paper";
      default:
        return "";
    }
  };

  // Map background colors
  const getColorClass = () => {
    switch (color) {
      case "yellow":
        return "bg-amber-50 text-ink border-amber-200";
      case "coral":
        return "bg-rose-50 text-ink border-rose-200";
      case "blue":
        return "bg-sky-50 text-ink border-sky-200";
      case "cream":
        return "bg-paper-dark text-ink border-stone-200";
      default:
        return "bg-white text-ink border-stone-100";
    }
  };

  // Border style (e.g. rough, torn, or standard)
  const getBorderClass = () => {
    if (paperStyle === "torn") {
      return "border-2 border-dashed border-stone-300";
    }
    return "border border-stone-200/60";
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.02, 
        rotate: 0, 
        y: -6,
        boxShadow: "0 20px 25px -5px rgba(28,28,26,0.1), 0 10px 10px -5px rgba(28,28,26,0.04)"
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`relative p-4 sm:p-6 max-sm:rotate-0 ${rotation} ${getColorClass()} ${getBorderClass()} ${getPaperStyleClass()} shadow-[3px_3px_10px_rgba(0,0,0,0.06)] rounded-sm ${className}`}
    >
      {/* Attachments */}
      {attachment === "tape-top" && (
        <Tape 
          variant="default" 
          rotation="-rotate-2" 
          width="w-20" 
          className="left-1/2 -translate-x-1/2 -top-3" 
        />
      )}

      {attachment === "tape-corners" && (
        <>
          <Tape variant="clear" rotation="-rotate-12" width="w-14" className="-left-4 -top-2" />
          <Tape variant="clear" rotation="rotate-12" width="w-14" className="-right-4 -top-2" />
        </>
      )}

      {attachment === "pin" && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20 pointer-events-none select-none">
          {/* Metallic red pushpin */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Pin head */}
            <div className="w-5 h-5 bg-red-600 rounded-full border border-red-700 shadow-sm relative z-10 flex items-center justify-center">
              {/* Highlight */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
            </div>
            {/* Pin shaft */}
            <div className="w-1.5 h-3 bg-stone-400 absolute top-4 transform origin-top rotate-12 shadow-[1px_1px_1px_rgba(0,0,0,0.3)]" />
            {/* Shadow of pin head */}
            <div className="w-3 h-3 bg-black/20 rounded-full absolute top-5 left-6 filter blur-[1px]" />
          </div>
        </div>
      )}

      {attachment === "paperclip" && (
        <div className="absolute left-6 -top-4 z-20 pointer-events-none select-none transform rotate-12">
          {/* Metallic paperclip */}
          <svg width="24" height="38" viewBox="0 0 24 38" fill="none" className="filter drop-shadow-[1px_2px_2px_rgba(0,0,0,0.2)]">
            <path
              d="M12 2C8.686 2 6 4.686 6 8V30C6 33.314 8.686 36 12 36C15.314 36 18 33.314 18 30V12C18 9.79 16.21 8 14 8C11.79 8 10 9.79 10 12V28H12V12C12 10.89 12.89 10 14 10C15.11 10 16 10.89 16 12V30C16 32.21 14.21 34 12 34C9.79 34 8 32.21 8 30V8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8V26H18V8C18 4.686 15.314 2 12 2Z"
              fill="#94A3B8"
              stroke="#475569"
              strokeWidth="0.75"
            />
          </svg>
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-0">{children}</div>
    </motion.div>
  );
}
