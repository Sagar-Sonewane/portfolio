"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Tape from "./Tape";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "certifications", path: "/certifications" },
    { name: "about", path: "/about" },
    { name: "resume", path: "/resume" }
  ];

  return (
    <header className="w-full py-4 md:py-6 px-4 md:px-8 border-b border-stone-200/60 bg-paper/85 backdrop-blur-[2px] sticky top-0 z-50 transition-all select-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center gap-1"
        >
          <span className="text-2xl font-bold tracking-tight text-ink font-sans relative">
            sagar<span className="text-coral group-hover:rotate-45 transition-transform duration-300 inline-block">✦</span>
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-tape-yellow rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </span>
        </Link>

        {/* Desktop Navigation Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative text-sm lg:text-base font-semibold text-ink/80 hover:text-ink transition-colors font-sans py-1 px-2 capitalize"
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

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-amber-100/90 border border-amber-300 rounded text-ink text-sm font-semibold hover:bg-amber-200 transition-colors shadow-sm cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <span className="font-handwritten text-coral text-base leading-none">menu</span>
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-paper-dark/95 border-b border-stone-200/80 mt-3 pt-2 pb-4 px-4 shadow-lg rounded-b-md relative"
          >
            <Tape variant="default" rotation="-rotate-3" width="w-20" className="right-4 -top-2" />
            <nav className="flex flex-col space-y-2 pt-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-md text-base font-semibold transition-all capitalize ${
                      isActive 
                        ? "bg-amber-200/80 text-ink border border-amber-300 shadow-sm" 
                        : "text-ink/80 hover:bg-stone-200/50 hover:text-ink"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="font-handwritten text-coral text-sm select-none">
                        glued ✦
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
