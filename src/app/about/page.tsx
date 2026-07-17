"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, CheckSquare, BrainCircuit, ExternalLink } from "lucide-react";
import ScrapCard from "@/components/ScrapCard";

export default function About() {
  const educationTimeline = [
    {
      year: "2017",
      category: "school",
      title: "Secondary School Certificate (SSC)",
      institution: "State Board School",
      grade: "74.40%",
      rotation: "rotate-1",
      color: "white" as const,
      icon: GraduationCap
    },
    {
      year: "2019",
      category: "school",
      title: "Higher Secondary Certificate (HSC)",
      institution: "Junior College",
      grade: "57.38%",
      rotation: "-rotate-2",
      color: "cream" as const,
      icon: GraduationCap
    },
    {
      year: "2022 – 2025",
      category: "college",
      title: "B.Voc. Software Development",
      institution: "J. M. Patel College of Arts, Commerce and Science, Bhandara",
      grade: "CGPA: 9.67",
      details: "Where the full-stack software development foundation was built.",
      rotation: "rotate-2",
      color: "yellow" as const,
      icon: GraduationCap
    },
    {
      year: "2025 – 2027",
      category: "college (ongoing)",
      title: "Master of Computer Applications (MCA)",
      institution: "G. H. Raisoni College of Engineering and Management, Nagpur",
      grade: "CGPA: 9.64 (Sem 1)",
      details: "Core Coursework: Data Structures & Algorithms, Object Oriented Programming, DBMS, Operating Systems, Computer Networks.",
      rotation: "-rotate-1",
      color: "blue" as const,
      icon: GraduationCap
    },
    {
      year: "Future 🚀",
      category: "work",
      title: "Software Engineering Intern",
      institution: "Looking for Opportunities",
      grade: "Ready to start",
      details: "Seeking hands-on software development internship to apply full-stack and mobile skills in production environments.",
      rotation: "rotate-2",
      color: "white" as const,
      icon: Briefcase,
      isPlaceholder: true
    }
  ];

  const skillsCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C++", "C#", "PHP", "Kotlin", "Dart", "SQL"],
      color: "yellow" as const
    },
    {
      title: "Frontend (Web)",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
      color: "blue" as const
    },
    {
      title: "Mobile",
      skills: ["Android (Kotlin)", "Flutter", "Android Studio"],
      color: "coral" as const
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Supabase"],
      color: "cream" as const
    },
    {
      title: "Cloud & Deployment",
      skills: ["Vercel", "Supabase", "Resend"],
      color: "yellow" as const
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "GitHub", "REST APIs", "Agile / Scrum Collaboration"],
      color: "cream" as const
    }
  ];

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
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-12 md:space-y-16"
    >
      {/* 1. Page Header & Intro Letter */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1 space-y-3">
          <span className="font-handwritten text-lg md:text-xl text-coral block -rotate-1 select-none">
            about the builder
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
            My Journey
          </h1>
          <p className="text-ink/70 text-sm leading-relaxed">
            A look into my academic pathway, technical skill sets, and certifications.
          </p>
        </div>

        <motion.div variants={itemVariants} className="lg:col-span-2">
          <ScrapCard paperStyle="clean" attachment="paperclip" rotation="rotate-0" color="white" className="p-8">
            <div className="space-y-4">
              <span className="font-handwritten text-2xl text-coral block -rotate-1 select-none">
                dear visitor,
              </span>
              <p className="text-sm md:text-base text-ink/85 leading-relaxed font-sans font-medium">
                I am an MCA student and full-stack/mobile developer who thrives on transforming software requirements into production-ready, reliable systems. From structuring responsive UI layouts in React and Next.js, to programming native, offline-first Android apps with Kotlin and Room DB, I design layouts that are performant and robust.
              </p>
              <p className="text-sm md:text-base text-ink/85 leading-relaxed font-sans font-medium">
                I enjoy owning products end-to-end, solving critical logic puzzles, and continually learning framework defaults. Feel free to explore my educational path and skills stack below!
              </p>
              <div className="text-right font-handwritten text-xl text-coral -rotate-2 select-none pt-2">
                — Sagar Sonewane 🧑‍💻
              </div>
            </div>
          </ScrapCard>
        </motion.div>
      </section>

      {/* 2. Educational & Career Path Timeline */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-sans text-ink flex items-center gap-2 border-b-2 border-dashed border-stone-200 pb-2">
          <GraduationCap size={22} className="text-coral" />
          Education & Career Path
        </h2>

        {/* Timeline representation */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-dashed border-stone-300 space-y-10 py-4 select-text">
          {educationTimeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Timeline node marker */}
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-paper border-2 border-ink flex items-center justify-center shadow-sm z-10">
                  <Icon size={12} className="text-ink" />
                </div>
                
                {/* Handwritten Year Tag in margin */}
                <div className="absolute -left-[120px] top-1 hidden md:block select-none text-right w-16 font-handwritten text-lg text-coral rotate-6">
                  {item.year.split(" ")[0]}
                </div>

                <ScrapCard
                  rotation={item.rotation}
                  attachment={index === 0 ? "tape-top" : "none"}
                  color={item.color}
                  className="max-w-2xl"
                >
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="md:hidden font-semibold text-xs text-coral bg-coral/10 px-2 py-0.5 rounded select-none">
                          {item.year}
                        </span>
                        <span className="font-handwritten text-xs text-stone-500 uppercase select-none">
                          {item.category}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-ink bg-stone-100 border border-stone-200 rounded px-2 py-0.5 w-fit">
                        {item.grade}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-sans text-ink leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-ink/70">
                      {item.institution}
                    </p>

                    {item.details && (
                      <p className="text-xs md:text-sm text-ink/80 leading-relaxed font-sans pt-2 border-t border-dashed border-stone-200 mt-2">
                        {item.details}
                      </p>
                    )}

                    {item.isPlaceholder && (
                      <div className="mt-3 font-handwritten text-sm text-coral -rotate-1 select-none">
                        * looking for the next step! 🚀 *
                      </div>
                    )}
                  </div>
                </ScrapCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Skills Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-sans text-ink flex items-center gap-2 border-b-2 border-dashed border-stone-200 pb-2">
          <BrainCircuit size={22} className="text-coral" />
          Glued Skills Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-2">
          {skillsCategories.map((cat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <ScrapCard
                rotation={idx % 2 === 0 ? "rotate-1" : "-rotate-1"}
                attachment="none"
                color={cat.color}
                className="h-full border border-stone-200/40"
              >
                <div className="space-y-3">
                  <h3 className="text-base font-bold font-sans text-ink border-b border-dashed border-stone-300 pb-1.5 uppercase tracking-wide">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 select-none">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-white/70 text-ink/85 border border-stone-200 rounded font-semibold hover:border-stone-400 hover:bg-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrapCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Certifications & Competitive Programming */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-2">
        <motion.div variants={itemVariants}>
          <ScrapCard paperStyle="grid" attachment="pin" rotation="-rotate-1" color="white" className="h-full">
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-sans text-ink flex items-center gap-2 border-b border-dashed border-stone-200 pb-2">
                <Award size={18} className="text-coral" />
                Competitive Programming
              </h3>
              
              <div className="space-y-3 text-sm text-ink/80 select-text leading-relaxed font-sans font-medium">
                <p>
                  Active on coding platforms, focusing on problem-solving consistency, data structures, and algorithms.
                </p>
                <div className="flex items-center gap-3 p-3 bg-stone-50 border border-stone-200 rounded-md">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-900 select-none">
                    100+
                  </div>
                  <div>
                    <span className="font-semibold block text-xs text-ink/60">LeetCode Profile</span>
                    <a 
                      href="https://leetcode.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm font-bold text-coral hover:underline inline-flex items-center gap-1 group select-none"
                    >
                      <span>100+ Problems Solved</span>
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrapCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ScrapCard paperStyle="grid" attachment="paperclip" rotation="rotate-2" color="yellow" className="h-full">
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-sans text-ink flex items-center gap-2 border-b border-dashed border-stone-200 pb-2">
                <CheckSquare size={18} className="text-coral" />
                Certifications
              </h3>

              <div className="space-y-3 text-sm text-ink/80 select-text leading-relaxed font-sans font-medium">
                <p>
                  Continual professional training and certifications completed during academic coursework:
                </p>
                <ul className="list-disc pl-4 space-y-2 text-xs md:text-sm font-semibold text-ink/80 leading-normal">
                  <li>NPTEL Course Certification in Java Programming</li>
                  <li>Coursera Foundation Courses in Database Systems (SQL)</li>
                  <li>Advanced Application Development Seminar Certificate (G. H. Raisoni)</li>
                </ul>
              </div>
            </div>
          </ScrapCard>
        </motion.div>
      </section>
    </motion.div>
  );
}
