"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "about", path: "/about" },
    { name: "resume", path: "/resume" }
  ];

  return (
    <header className="w-full py-6 px-4 md:px-8 border-b border-stone-200/60 bg-paper/85 backdrop-blur-[2px] sticky top-0 z-50 transition-all select-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight text-ink font-sans relative">
            sagar<span className="text-coral group-hover:rotate-45 transition-transform duration-300 inline-block">✦</span>
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-tape-yellow rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </span>
        </Link>

        {/* Navigation Items */}
        <nav className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative text-sm md:text-base font-semibold text-ink/80 hover:text-ink transition-colors font-sans py-1 px-2"
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Active highlighter background indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-amber-200/60 rounded-sm -skew-x-6 z-0"
                    style={{
                      border: "1px dashed rgba(232, 196, 104, 0.6)"
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Underline on hover when not active */}
                {!isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-coral/50 scale-x-0 hover:scale-x-100 transition-transform duration-250 origin-left" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
