import React from "react";

interface TapeProps {
  className?: string;
  variant?: "default" | "coral" | "clear";
  rotation?: string; // e.g. "-rotate-3", "rotate-6", etc.
  width?: string; // e.g. "w-24", "w-16"
}

export default function Tape({
  className = "",
  variant = "default",
  rotation = "rotate-2",
  width = "w-24"
}: TapeProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "coral":
        return "tape-coral";
      case "clear":
        return "bg-white/20 border-l border-r border-dashed border-white/40 backdrop-blur-[0.5px] shadow-sm";
      default:
        return "tape-effect";
    }
  };

  return (
    <div
      className={`absolute h-6 ${width} ${rotation} ${getVariantClass()} pointer-events-none select-none z-10 opacity-80 ${className}`}
      style={{
        clipPath: "polygon(0% 10%, 4% 0%, 96% 0%, 100% 10%, 98% 90%, 95% 100%, 5% 100%, 0% 90%)"
      }}
    />
  );
}
