"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, MapPin, Sparkles, BookOpen, Award } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";
import ScrapCard from "@/components/ScrapCard";
import Badge from "@/components/Badge";
import Tape from "@/components/Tape";

export default function Home() {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-12 md:space-y-16"
    >
      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative min-h-[400px]">
        {/* Main Hero Card */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-2 space-y-6"
        >
          <div className="space-y-2">
            <span className="font-handwritten text-lg md:text-xl text-coral block -rotate-1 select-none">
              hey there! my name is
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink font-sans relative leading-tight">
              Sagar Sonewane
              <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-coral/45 rounded-full select-none" />
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-ink/80 flex flex-wrap items-center gap-2">
              <span>Full-Stack & Mobile Developer</span>
              <span className="text-xs md:text-sm font-handwritten px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded -rotate-2 select-none">
                MCA Student
              </span>
            </h2>

            <p className="text-base md:text-lg text-ink/80 max-w-xl leading-relaxed">
              &quot;Shipping full-stack and mobile products end-to-end — from React and Next.js on the web to native Kotlin on Android.&quot;
            </p>
          </div>

          {/* Location & Quote Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-1 text-xs sm:text-sm text-ink/70 bg-stone-100/80 border border-stone-200/60 rounded px-2.5 py-1 select-none">
              <MapPin size={14} className="text-coral shrink-0" />
              <span>Nagpur, India</span>
            </div>
            
            {/* Taped Quote */}
            <div className="relative pl-5 pr-3 py-1.5 sm:py-2 border-l-2 border-dashed border-stone-300/80 bg-paper-dark/30 rounded-r-md italic text-xs sm:text-sm text-ink/70 max-w-sm">
              <Tape variant="clear" width="w-12" rotation="-rotate-6" className="-top-3 left-4" />
              &quot;good software is just good decisions, shipped.&quot;
            </div>
          </div>

          {/* Floating Sticker Badges */}
          <div className="pt-3 space-y-2 select-none">
            <span className="font-handwritten text-sm text-ink/50 block">some tools I use daily:</span>
            <div className="flex flex-wrap gap-2.5">
              <Badge text="React.js" color="blue" rotation="-rotate-3" floating />
              <Badge text="Next.js" color="cream" rotation="rotate-2" floating />
              <Badge text="Kotlin" color="purple" rotation="-rotate-1" floating />
              <Badge text="PHP/MySQL" color="yellow" rotation="rotate-3" floating />
              <Badge text="Supabase" color="green" rotation="-rotate-2" floating />
            </div>
          </div>
        </motion.div>

        {/* 2. PHOTO SECTION (Polaroid Card) */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center lg:justify-end pt-2 lg:pt-0"
        >
          <div className="relative">
            <Tape variant="default" rotation="rotate-6" width="w-24" className="right-4 -top-3" />
            
            <div className="bg-white p-4 pb-8 shadow-xl border border-stone-200/60 rotate-2 sm:rotate-2 max-w-[240px] sm:max-w-[260px] flex flex-col items-center group">
              {/* Photo Box */}
              <div className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] bg-stone-100 border border-stone-200 relative overflow-hidden shadow-inner">
                <Image
                  src="/sagarphoto.jpg"
                  alt="Sagar Sonewane"
                  fill
                  sizes="(max-width: 640px) 200px, 220px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                
                {/* Subtle shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/10 via-transparent to-white/10 pointer-events-none" />
              </div>
              
              {/* Handwritten polaroid caption */}
              <div className="font-handwritten text-2xl text-ink mt-4 -rotate-2 select-none">
                that&apos;s me! 👋
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. FEATURED CERTIFICATIONS & HONORS BANNER */}
      <motion.section variants={itemVariants} className="pt-2">
        <ScrapCard paperStyle="grid" attachment="pin" rotation="rotate-1" color="yellow" className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-1 sm:p-2">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="font-handwritten text-base sm:text-lg text-coral block -rotate-1 select-none">
                honors & verified credentials
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-ink flex items-center justify-center sm:justify-start gap-2">
                <Award size={22} className="text-coral shrink-0" />
                Certifications, Awards & Achievements
              </h3>
              <p className="text-xs sm:text-sm text-ink/75 max-w-xl leading-relaxed">
                NPTEL Java Certified, B.Voc Gold Merit Scorer (9.67 CGPA), MCA Distinction (9.64 CGPA), and 100+ LeetCode CP problems solved.
              </p>
            </div>
            <Link
              href="/certifications"
              className="shrink-0 px-4 py-2 bg-coral text-white border border-rose-700 font-bold text-xs sm:text-sm rounded shadow-[3px_3px_0px_rgba(28,28,26,1)] hover:bg-rose-600 hover:translate-y-[-2px] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Honors</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrapCard>
      </motion.section>

      {/* 4. RULE BOOK & WRITING SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Notebook Lined Rule Book */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-3"
        >
          <ScrapCard paperStyle="lined" attachment="paperclip" rotation="-rotate-1" color="yellow">
            <div className="space-y-4">
              <div className="border-b-2 border-coral/30 pb-2">
                <span className="font-handwritten text-sm text-coral select-none">my development manifesto</span>
                <h3 className="text-2xl font-bold font-sans tracking-tight text-ink">Rules for Me</h3>
              </div>
              
              <ol className="list-decimal pl-4 space-y-3.5 text-xs sm:text-sm font-semibold text-ink/80 select-text leading-relaxed">
                <li>build the smallest working version first, then iterate.</li>
                <li>ship things real users touch — side projects should have a live link.</li>
                <li>offline-first and fast beats feature-rich and fragile.</li>
                <li>own it end-to-end: design, build, deploy, and the bugs at 2am.</li>
                <li>learn the framework&apos;s defaults before fighting them.</li>
                <li>stay a student — CGPA is a snapshot, not the ceiling.</li>
              </ol>

              <div className="text-right font-handwritten text-xl text-coral select-none pt-2">
                — sagar ✌️
              </div>
            </div>
          </ScrapCard>
        </motion.div>

        {/* Writing/Blog Cards */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 space-y-6"
        >
          <div className="space-y-1">
            <span className="font-handwritten text-sm text-coral select-none">thoughts on building</span>
            <h3 className="text-2xl font-bold font-sans tracking-tight text-ink flex items-center gap-2">
              <BookOpen size={20} className="text-ink" />
              Notebook
            </h3>
          </div>

          <div className="space-y-4">
            <ScrapCard attachment="none" rotation="rotate-2" color="cream" className="hover:scale-[1.03]">
              <Link href="/about" className="group space-y-2 block">
                <span className="text-xs font-handwritten text-coral select-none block">Android / Kotlin</span>
                <h4 className="font-bold text-sm sm:text-base group-hover:text-coral transition-colors font-sans">
                  Building an offline-first Android app with Room DB
                </h4>
                <div className="flex items-center gap-1 text-xs text-ink/60 font-semibold select-none pt-2">
                  <span>read it</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrapCard>

            <ScrapCard attachment="none" rotation="-rotate-1" color="white" className="hover:scale-[1.03]">
              <Link href="/projects" className="group space-y-2 block">
                <span className="text-xs font-handwritten text-coral select-none block">Next.js / SSR</span>
                <h4 className="font-bold text-sm sm:text-base group-hover:text-coral transition-colors font-sans">
                  SSR performance wins with Next.js on Vercel
                </h4>
                <div className="flex items-center gap-1 text-xs text-ink/60 font-semibold select-none pt-2">
                  <span>read it</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrapCard>
          </div>
        </motion.div>
      </section>

      {/* 5. CONTACT / CTA SECTION */}
      <motion.section 
        variants={itemVariants}
        className="pt-4"
      >
        <ScrapCard attachment="pin" rotation="rotate-0" color="white" paperStyle="grid" className="max-w-3xl mx-auto">
          <div className="text-center py-4 sm:py-6 space-y-6 max-w-xl mx-auto">
            <div className="space-y-2">
              <span className="font-handwritten text-xl sm:text-2xl text-coral select-none block -rotate-2">
                let&apos;s build something together!
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-ink">Get in touch</h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-ink/75 leading-relaxed">
              Whether you want to build a business website, discuss full-stack React architectures, offline Android development, or just chat, drop me a message!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left max-w-xl mx-auto pt-2 select-text">
              <a 
                href="mailto:sagarsonewane2511@gmail.com" 
                className="flex items-center gap-3 p-3 bg-stone-50 border border-stone-200/80 hover:bg-amber-50 hover:border-amber-300 rounded-md group transition-all min-w-0"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-ink/50 font-sans block">Email</span>
                  <span className="text-xs sm:text-sm font-semibold block truncate">sagarsonewane2511@gmail.com</span>
                </div>
              </a>

              <a 
                href="https://github.com/Sagar-Sonewane" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-stone-50 border border-stone-200/80 hover:bg-sky-50 hover:border-sky-300 rounded-md group transition-all min-w-0"
              >
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-900 group-hover:scale-110 transition-transform shrink-0">
                  <Github size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-ink/50 font-sans block">GitHub</span>
                  <span className="text-xs sm:text-sm font-semibold block truncate">github.com/Sagar-Sonewane</span>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/sagar-sonewane/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-stone-50 border border-stone-200/80 hover:bg-rose-50 hover:border-rose-300 rounded-md group transition-all min-w-0"
              >
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-900 group-hover:scale-110 transition-transform shrink-0">
                  <Linkedin size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-ink/50 font-sans block">LinkedIn</span>
                  <span className="text-xs sm:text-sm font-semibold block truncate">linkedin.com/in/sagar-sonewane</span>
                </div>
              </a>

              <a 
                href="tel:+919588459145" 
                className="flex items-center gap-3 p-3 bg-stone-50 border border-stone-200/80 hover:bg-emerald-50 hover:border-emerald-300 rounded-md group transition-all min-w-0"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 group-hover:scale-110 transition-transform shrink-0">
                  <Phone size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-ink/50 font-sans block">Phone</span>
                  <span className="text-xs sm:text-sm font-semibold block truncate">+91 95884 59145</span>
                </div>
              </a>
            </div>
          </div>
        </ScrapCard>
      </motion.section>
    </motion.div>
  );
}
