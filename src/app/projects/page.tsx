"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/Icons";
import ScrapCard from "@/components/ScrapCard";
import Badge from "@/components/Badge";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "android" | "ai">("all");

  const projectsData = [
    {
      id: 1,
      category: "web",
      title: "Sagar Constructions",
      subtitle: "Production Business Website",
      liveLink: "https://sagar-constructions-web.vercel.app/",
      githubLink: "https://github.com/Sagar-Sonewane/Sagar-ConstructionsWeb",
      status: "production",
      metric: "95+ Lighthouse Score",
      tags: ["Next.js", "React.js", "Supabase", "Resend", "Vercel"],
      color: "white" as const,
      rotation: "-rotate-1",
      attachment: "tape-top" as const,
      points: [
        "Independently designed, built, and deployed a production business website end-to-end for a live construction client.",
        "Built an automated contact-to-email lead pipeline using Resend and configured a persistent Supabase database layer to store customer inquiries.",
        "Optimized page load speed and SEO by leveraging Next.js server-side rendering, achieving a 95+ Lighthouse performance score on production."
      ]
    },
    {
      id: 2,
      category: "web",
      title: "Neighbour",
      subtitle: "Local Resource Rental Platform",
      liveLink: "",
      githubLink: "https://github.com/Sagar-Sonewane/neighbr",
      status: "opensource",
      metric: "8+ Categories Managed",
      tags: ["React.js", "PHP", "MySQL", "JavaScript"],
      color: "yellow" as const,
      rotation: "rotate-2",
      attachment: "paperclip" as const,
      points: [
        "Co-developed a full-stack peer-to-peer sharing marketplace in a 2-member agile team, leading the frontend React development and database integration.",
        "Programmed local discovery filters, secure user auth, and real-time request management modules for 8+ categories of household items.",
        "Designed and consumed REST API endpoints to synchronize live booking requests and availability calendars without delay."
      ]
    },
    {
      id: 3,
      category: "android",
      title: "Streakly",
      subtitle: "Offline-First Habit Tracker Android App",
      liveLink: "",
      githubLink: "https://github.com/Sagar-Sonewane/Streakly",
      status: "opensource",
      metric: "Offline Room DB",
      tags: ["Kotlin", "Android Studio", "Room DB", "Notifications"],
      color: "blue" as const,
      rotation: "-rotate-2",
      attachment: "tape-corners" as const,
      points: [
        "Architected a fully offline-first habit tracking mobile application in native Android (Kotlin) with zero cloud dependency.",
        "Built a custom LeetCode-style contribution heatmap grid calendar to visually trace user streaks and consistency over time.",
        "Engineered reliable local storage using Android Room DB and scheduled daily local notifications for routine habit triggers."
      ]
    },
    {
      id: 4,
      category: "ai",
      title: "AI Hiring Assistant & Dashboard",
      subtitle: "Academic Team Leadership Project",
      liveLink: "",
      githubLink: "https://github.com/Sagar-Sonewane",
      status: "teamlead",
      metric: "4-Member Developer Squad",
      tags: ["Team Lead", "AI Recommendations", "Dashboard", "Python"],
      color: "cream" as const,
      rotation: "rotate-1",
      attachment: "pin" as const,
      points: [
        "Led a 4-member developer squad to prototype an AI recommendation portal connecting students with placement opportunities.",
        "Created an administrative training and placement dashboard for posting vacancies, managing applicants, and monitoring statistics.",
        "Integrated basic predictive machine learning templates to identify student skill gaps based on selected careers and suggest key courses."
      ]
    }
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const categories = [
    { id: "all", label: "All Works" },
    { id: "web", label: "Full-Stack Web" },
    { id: "android", label: "Native Android" },
    { id: "ai", label: "AI & Squad" }
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-10 md:space-y-12"
    >
      {/* Header */}
      <section className="space-y-3 text-center sm:text-left">
        <span className="font-handwritten text-lg sm:text-xl text-coral block -rotate-1 select-none">
          my craft & code repository
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
          Featured Projects & Code
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-ink/75 max-w-2xl leading-relaxed">
          Production business websites, peer-to-peer web platforms, offline-first Android applications, and team leadership projects built with modern frameworks.
        </p>

        {/* Interactive Filter Category Chips */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-4 select-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-md transition-all cursor-pointer ${
                  isActive
                    ? "bg-amber-200 border-2 border-ink text-ink shadow-[2px_2px_0px_rgba(28,28,26,1)] -rotate-1"
                    : "bg-white border border-stone-200 text-ink/70 hover:bg-stone-100 hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <motion.section 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <ScrapCard
                color={project.color}
                rotation={project.rotation}
                attachment={project.attachment}
                className="flex flex-col justify-between w-full"
              >
                <div className="space-y-4">
                  {/* Top Status & Metrics Row */}
                  <div className="flex items-center justify-between gap-2 border-b border-stone-200/80 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      {project.status === "production" ? (
                        <span className="stamp-badge stamp-verified">
                          🟢 Production Live
                        </span>
                      ) : project.status === "teamlead" ? (
                        <span className="stamp-badge stamp-merit">
                          👑 Tech Squad Lead
                        </span>
                      ) : (
                        <span className="stamp-badge stamp-approved">
                          📦 Open Source
                        </span>
                      )}
                    </div>
                    
                    <span className="text-[11px] font-sans font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded border border-stone-200 select-none">
                      {project.metric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-ink font-sans tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-handwritten text-coral select-none -rotate-1 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">
                    {project.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-coral shrink-0 mt-0.5 select-none">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Tech Stack Tags & Actions */}
                <div className="pt-6 space-y-4 border-t border-stone-200/60 mt-4">
                  <div className="flex flex-wrap gap-1.5 select-none">
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        text={tag} 
                        color={i % 2 === 0 ? "cream" : "yellow"} 
                        rotation={i % 2 === 0 ? "rotate-1" : "-rotate-1"} 
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1 select-none">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-coral text-white border border-rose-700 text-xs font-bold rounded shadow-2xs hover:bg-rose-600 transition-colors"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-stone-300 text-ink text-xs font-bold rounded shadow-2xs hover:bg-stone-100 transition-colors"
                      >
                        <Github size={13} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </ScrapCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>
    </motion.div>
  );
}
