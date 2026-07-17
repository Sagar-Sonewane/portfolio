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
      className={`relative p-6 ${rotation} ${getColorClass()} ${getBorderClass()} ${getPaperStyleClass()} shadow-[3px_3px_10px_rgba(0,0,0,0.06)] rounded-sm ${className}`}
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
        <div className="absolute left-6 -top-5 z-20 pointer-events-none select-none transform rotate-12">
          {/* Metallic paperclip */}
          <svg width="24" height="48" viewBox="0 0 24 48" fill="none" className="filter drop-shadow-[2px_2px_1px_rgba(0,0,0,0.15)]">
            <path
              d="M12 4C8.686 4 6 6.686 6 10V38C6 41.314 8.686 44 12 44C15.314 44 18 41.314 18 38V14C18 11.79 16.21 10 14 10C11.79 10 10 11.79 10 14V36H12V14C12 12.89 12.89 12 14 12C15.11 12 16 12.89 16 14V38C16 40.21 14.21 42 12 42C9.79 42 8 40.21 8 38V10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10V34H18V10C18 6.686 15.314 4 12 4Z"
              fill="#A0A0A0"
              stroke="#505050"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-0 h-full">{children}</div>
    </motion.div>
  );
}
