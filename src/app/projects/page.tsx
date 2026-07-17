"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/Icons";
import ScrapCard from "@/components/ScrapCard";
import Badge from "@/components/Badge";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Sagar Constructions",
      subtitle: "Business Website",
      liveLink: "https://sagar-constructions-web.vercel.app/",
      githubLink: "",
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
      title: "Neighbour",
      subtitle: "Local Resource Rental Platform",
      liveLink: "",
      githubLink: "https://github.com/sagarsonewane",
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
      title: "Streakly",
      subtitle: "Offline-First Habit Tracker Android App",
      liveLink: "",
      githubLink: "https://github.com/sagarsonewane",
      tags: ["Kotlin", "Android Studio", "Room DB"],
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
      title: "AI Hiring Assistant & Dashboard",
      subtitle: "Academic Team Leadership Project",
      liveLink: "",
      githubLink: "https://github.com/sagarsonewane",
      tags: ["Team Lead", "AI Recommendations", "Dashboard", "Python"],
      color: "cream" as const,
      rotation: "rotate-1",
      attachment: "pin" as const,
      points: [
        "Led a 4-member developer squad to prototype an AI recommendation portal connecting students with placements.",
        "Created an administrative training and placement dashboard for posting vacancies, managing applicants, and monitoring statistics.",
        "Integrated basic predictive machine learning templates to identify student skill gaps based on selected careers and suggest key courses."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-10 md:space-y-12"
    >
      {/* Header */}
      <div className="space-y-2 text-center md:text-left">
        <span className="font-handwritten text-lg md:text-xl text-coral block -rotate-1 select-none">
          everything glued in so far
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
          Projects
        </h1>
        <p className="text-ink/70 text-sm md:text-base max-w-2xl leading-relaxed">
          Full-stack and mobile builds — web interfaces, robust database engines, and responsive offline-first Android apps.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-4">
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ScrapCard
              rotation={project.rotation}
              attachment={project.attachment}
              color={project.color}
              className="h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Title & subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm font-handwritten text-coral select-none -rotate-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 select-none pt-1">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={tag} 
                      text={tag} 
                      color={idx % 2 === 0 ? "yellow" : "coral"} 
                      rotation={idx % 2 === 0 ? "rotate-1" : "-rotate-1"} 
                    />
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs md:text-sm text-ink/85 list-disc pl-4 select-text leading-relaxed font-sans font-medium">
                  {project.points.map((pt, index) => (
                    <li key={index}>{pt}</li>
                  ))}
                </ul>
              </div>

              {/* Links Footer */}
              <div className="pt-6 border-t border-dashed border-stone-300/60 mt-6 flex items-center gap-4 select-none">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-ink bg-amber-200/80 border border-amber-300 hover:bg-amber-300 hover:border-amber-400 rounded-md px-3 py-1.5 transition-all group"
                  >
                    <span>Live site</span>
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-ink bg-stone-100 hover:bg-stone-200 border border-stone-300/80 rounded-md px-3 py-1.5 transition-all group"
                  >
                    <Github size={12} />
                    <span>Source code</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                )}
              </div>
            </ScrapCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
