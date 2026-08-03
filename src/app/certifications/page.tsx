"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, Trophy, Star, Sparkles, ExternalLink, ShieldCheck, Code2 } from "lucide-react";
import ScrapCard from "@/components/ScrapCard";
import Badge from "@/components/Badge";
import Tape from "@/components/Tape";

type CategoryFilter = "all" | "certifications" | "awards" | "achievements";

export default function CertificationsPage() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const itemsData = [
    {
      id: "cert-1",
      category: "certifications",
      title: "NPTEL Java Programming Certification",
      issuer: "NPTEL & IIT Kharagpur",
      date: "Academic Coursework",
      type: "Professional Certification",
      status: "Verified Elite",
      tags: ["Java", "OOP", "Algorithms", "NPTEL"],
      color: "yellow" as const,
      rotation: "-rotate-1",
      attachment: "tape-top" as const,
      icon: CheckCircle2,
      points: [
        "Mastered object-oriented programming concepts, inheritance, polymorphism, and Java Collections framework.",
        "Passed rigorous proctored examinations conducted by IIT faculty with high distinction marks.",
        "Built modular Java applications demonstrating clean code principles and structured exception handling."
      ],
      linkText: "NPTEL Course Info",
      linkUrl: "https://nptel.ac.in/"
    },
    {
      id: "award-1",
      category: "awards",
      title: "Academic Merit Excellence Award — B.Voc",
      issuer: "J. M. Patel College of Arts, Commerce and Science",
      date: "2022 – 2025",
      type: "Academic Gold Merit",
      status: "CGPA: 9.67",
      tags: ["Rank #1 Scorer", "B.Voc Software Dev", "Academic Gold"],
      color: "coral" as const,
      rotation: "rotate-2",
      attachment: "pin" as const,
      icon: Trophy,
      points: [
        "Ranked top academic performer across all 6 semesters of B.Voc Software Development degree program.",
        "Demonstrated technical mastery in database management, web applications, and software engineering principles.",
        "Commended by academic department heads for exemplary practical project work and consistent performance."
      ],
      note: "* 9.67 CGPA top score! 🏆 *"
    },
    {
      id: "achieve-1",
      category: "achievements",
      title: "LeetCode 100+ Solved & CP Consistency",
      issuer: "LeetCode / Competitive Programming",
      date: "Ongoing",
      type: "Algorithmic Milestone",
      status: "100+ Solved",
      tags: ["Data Structures", "Algorithms", "Problem Solving", "C++ / Java"],
      color: "blue" as const,
      rotation: "-rotate-2",
      attachment: "paperclip" as const,
      icon: Code2,
      points: [
        "Solved 100+ algorithmic problems spanning dynamic programming, binary search, tree traversals, and graphs.",
        "Maintained consistent problem-solving practice to strengthen time and space complexity optimizations.",
        "Applied algorithmic thinking to write clean, high-performance production code in web & mobile apps."
      ],
      linkText: "LeetCode Profile",
      linkUrl: "https://leetcode.com/"
    },
    {
      id: "cert-2",
      category: "certifications",
      title: "Database Systems & SQL Foundations",
      issuer: "Coursera / PostgreSQL Training",
      date: "Course Certificate",
      type: "Technical Specialization",
      status: "Verified Certificate",
      tags: ["SQL", "PostgreSQL", "DBMS", "Relational DB"],
      color: "cream" as const,
      rotation: "rotate-1",
      attachment: "tape-corners" as const,
      icon: CheckCircle2,
      points: [
        "Completed practical training in relational schema design, ER modeling, SQL indexing, and transaction safety.",
        "Engineered complex SQL query joins, aggregation pipelines, and constraint validations.",
        "Applied database fundamentals directly into full-stack projects using PostgreSQL and Supabase."
      ]
    },
    {
      id: "award-2",
      category: "awards",
      title: "MCA Academic Distinction — Semester 1",
      issuer: "G. H. Raisoni College of Engineering and Management",
      date: "2025 (Sem 1)",
      type: "Postgraduate Honors",
      status: "CGPA: 9.64",
      tags: ["MCA", "Data Structures", "Computer Networks", "DBMS"],
      color: "yellow" as const,
      rotation: "-rotate-1",
      attachment: "tape-top" as const,
      icon: Star,
      points: [
        "Achieved outstanding 9.64 CGPA in the first semester of Master of Computer Applications (MCA).",
        "Top scorer in core computer science modules including Advanced DSA, Operating Systems, and DBMS.",
        "Recognized for proactive technical contributions and collaborative lab leadership."
      ],
      note: "* MCA Semester 1 Distinction ✨ *"
    },
    {
      id: "achieve-2",
      category: "achievements",
      title: "Production Client Website Delivery",
      issuer: "Sagar Constructions Client Project",
      date: "2026",
      type: "Full-Stack Deployment",
      status: "95+ Lighthouse Score",
      tags: ["Next.js", "Supabase", "Resend", "Vercel"],
      color: "white" as const,
      rotation: "rotate-2",
      attachment: "pin" as const,
      icon: Sparkles,
      points: [
        "Independently designed, architected, and deployed a production client website with 95+ Lighthouse performance score.",
        "Configured Resend automated mailers and Supabase real-time inquiry database storage.",
        "Zero downtime production deployment hosted on Vercel infrastructure with fast SSR page loads."
      ],
      linkText: "Live Client Site",
      linkUrl: "https://sagar-constructions-web.vercel.app/"
    },
    {
      id: "cert-3",
      category: "certifications",
      title: "Advanced App Development Seminar Certificate",
      issuer: "G. H. Raisoni Technical Symposium",
      date: "2025",
      type: "Symposium & Seminar",
      status: "Completed",
      tags: ["Android", "Kotlin", "Modern Web", "REST APIs"],
      color: "coral" as const,
      rotation: "-rotate-2",
      attachment: "paperclip" as const,
      icon: CheckCircle2,
      points: [
        "Participated in hands-on seminars covering Android jetpack components, Room DB, and Next.js SSR architectures.",
        "Interacted with industry professionals on mobile optimization techniques and offline-first data sync."
      ]
    },
    {
      id: "achieve-3",
      category: "achievements",
      title: "AI Hiring Squad Lead & Prototype Finalist",
      issuer: "Academic Squad Leadership",
      date: "2025",
      type: "Team Leadership",
      status: "Squad Leader",
      tags: ["Team Lead", "AI Assistant", "Placement Portal", "Python"],
      color: "cream" as const,
      rotation: "rotate-1",
      attachment: "tape-corners" as const,
      icon: Award,
      points: [
        "Led a 4-member squad to design and build an AI recommendation engine for student placement matching.",
        "Created an interactive placement analytics dashboard for vacancy tracking and student skill gap evaluations.",
        "Delivered a successful live project presentation commended for clean UI and team execution."
      ]
    }
  ];

  const filteredItems = itemsData.filter(
    (item) => filter === "all" || item.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 85 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-10 md:space-y-12"
    >
      {/* 1. Header & Summary Stats */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-handwritten text-lg md:text-xl text-coral block -rotate-1 select-none">
              credentials & milestones glued in
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans flex items-center justify-center md:justify-start gap-3">
              Certifications & Awards
            </h1>
            <p className="text-ink/70 text-sm md:text-base max-w-2xl leading-relaxed">
              Official certifications, academic gold merit honors, competitive programming achievements, and production milestones earned along my developer journey.
            </p>
          </div>

          {/* Quick Stats Collage Badges */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 select-none">
            <div className="bg-amber-100/90 border border-amber-300 rounded-md p-2.5 text-center -rotate-2 shadow-sm">
              <span className="block font-bold text-lg text-amber-900 leading-none">3+</span>
              <span className="text-[11px] font-semibold text-amber-800 uppercase font-sans">Certifications</span>
            </div>
            <div className="bg-rose-100/90 border border-rose-300 rounded-md p-2.5 text-center rotate-3 shadow-sm">
              <span className="block font-bold text-lg text-rose-900 leading-none">9.67</span>
              <span className="text-[11px] font-semibold text-rose-800 uppercase font-sans">Top CGPA Merit</span>
            </div>
            <div className="bg-sky-100/90 border border-sky-300 rounded-md p-2.5 text-center -rotate-1 shadow-sm">
              <span className="block font-bold text-lg text-sky-900 leading-none">100+</span>
              <span className="text-[11px] font-semibold text-sky-800 uppercase font-sans">LeetCode Solved</span>
            </div>
          </div>
        </div>

        {/* 2. Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2 border-b border-stone-200/80 pb-4 select-none">
          {[
            { id: "all", label: "All Items", icon: Sparkles },
            { id: "certifications", label: "Certifications", icon: CheckCircle2 },
            { id: "awards", label: "Awards & Honors", icon: Trophy },
            { id: "achievements", label: "Achievements", icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as CategoryFilter)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-coral text-white shadow-md -skew-x-3 scale-105"
                    : "bg-white/80 text-ink/80 hover:bg-amber-100/70 border border-stone-200"
                }`}
              >
                <Icon size={14} className={isActive ? "text-white" : "text-coral"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: -10 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.id} variants={itemVariants}>
                <ScrapCard
                  rotation={item.rotation}
                  attachment={item.attachment}
                  color={item.color}
                  className="h-full flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Category tag & status */}
                    <div className="flex items-center justify-between gap-2 border-b border-dashed border-stone-300/80 pb-2">
                      <div className="flex items-center gap-1.5 text-coral font-bold text-xs uppercase tracking-wider">
                        <Icon size={14} />
                        <span>{item.category}</span>
                      </div>
                      <span className="text-xs font-bold text-ink bg-stone-100 border border-stone-200 px-2 py-0.5 rounded shadow-2xs">
                        {item.status}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold font-sans tracking-tight text-ink leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-ink/70 flex items-center justify-between">
                        <span>{item.issuer}</span>
                        <span className="text-[11px] font-handwritten text-coral select-none -rotate-1">
                          {item.date}
                        </span>
                      </p>
                    </div>

                    {/* Tech & Topic Badges */}
                    <div className="flex flex-wrap gap-1.5 select-none pt-1">
                      {item.tags.map((tag, idx) => (
                        <Badge
                          key={tag}
                          text={tag}
                          color={idx % 2 === 0 ? "yellow" : "coral"}
                          rotation={idx % 2 === 0 ? "rotate-1" : "-rotate-1"}
                        />
                      ))}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-ink/85 list-disc pl-4 select-text leading-relaxed font-sans font-medium">
                      {item.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer / Links / Notes */}
                  <div className="pt-4 border-t border-dashed border-stone-300/60 mt-6 flex flex-wrap items-center justify-between gap-2 select-none">
                    {item.note ? (
                      <span className="font-handwritten text-base text-coral -rotate-2">
                        {item.note}
                      </span>
                    ) : (
                      <span className="font-handwritten text-xs text-stone-400">
                        glued & verified 📜
                      </span>
                    )}

                    {item.linkUrl && item.linkText && (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-ink bg-amber-200/80 border border-amber-300 hover:bg-amber-300 rounded px-2.5 py-1 transition-all group"
                      >
                        <span>{item.linkText}</span>
                        <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </ScrapCard>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* 4. Bottom CTA banner */}
      <motion.section variants={itemVariants} className="pt-4">
        <ScrapCard paperStyle="grid" attachment="pin" rotation="rotate-0" color="white" className="max-w-2xl mx-auto text-center p-6">
          <div className="space-y-3">
            <span className="font-handwritten text-2xl text-coral block -rotate-1 select-none">
              want to verify credentials or see real code?
            </span>
            <h3 className="text-xl font-bold font-sans text-ink">
              Check out my projects & code repositories
            </h3>
            <p className="text-xs sm:text-sm text-ink/75 max-w-lg mx-auto">
              All my production websites, native Android codebases, and academic team projects are available on GitHub with live demos.
            </p>
            <div className="pt-2">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-200 border-2 border-ink hover:bg-amber-300 font-bold text-sm text-ink rounded-md shadow-[3px_3px_0px_rgba(28,28,26,1)] hover:translate-y-[-2px] transition-all cursor-pointer"
              >
                <ShieldCheck size={16} />
                <span>Explore Projects & Repos</span>
              </a>
            </div>
          </div>
        </ScrapCard>
      </motion.section>
    </motion.div>
  );
}
