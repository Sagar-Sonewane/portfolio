"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Printer } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import ScrapCard from "@/components/ScrapCard";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="space-y-8 md:space-y-10"
    >
      {/* Header and Download CTA (no-print) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 no-print">
        <div className="space-y-2 text-center md:text-left">
          <span className="font-handwritten text-lg md:text-xl text-coral block -rotate-1 select-none">
            my credentials
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
            Resume
          </h1>
          <p className="text-ink/70 text-sm md:text-base max-w-md leading-normal">
            View my structured qualifications, or download a clean print-ready PDF version.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-amber-200 border-2 border-ink hover:bg-amber-300 font-bold text-sm md:text-base text-ink rounded-md shadow-[4px_4px_0px_rgba(28,28,26,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(28,28,26,1)] transition-all cursor-pointer"
          >
            <Printer size={18} />
            <span>Download / Print PDF</span>
          </button>
          
          <span className="text-xs font-handwritten text-coral rotate-2 max-w-[150px] leading-tight text-center md:text-left select-none hidden sm:block">
            * opens print dialog — choose &apos;Save as PDF&apos;! *
          </span>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto">
        <ScrapCard
          rotation="rotate-0"
          attachment="paperclip"
          paperStyle="clean"
          color="white"
          className="print-card p-6 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative double line border for resume look */}
          <div className="border border-stone-200 p-4 md:p-8 h-full space-y-8 select-text">
            
            {/* Header / Contact Info */}
            <div className="text-center space-y-3 pb-6 border-b border-stone-300">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-ink uppercase tracking-wide">
                Sagar Sonewane
              </h2>
              
              <p className="text-sm md:text-base font-semibold text-coral font-sans tracking-wide">
                Full-Stack & Mobile Developer — MCA Student
              </p>
              
              {/* Contact Metadata */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-ink/75">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-ink/60" />
                  Nagpur, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={14} className="text-ink/60" />
                  +91 95884 59145
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-ink/60" />
                  sagarsonewane2511@gmail.com
                </span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-ink/75 pt-1">
                <a 
                  href="https://github.com/sagarsonewane" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-coral transition-colors font-semibold"
                >
                  <Github size={14} />
                  github.com/sagarsonewane
                </a>
                <a 
                  href="https://linkedin.com/in/sagarsonewane" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-coral transition-colors font-semibold"
                >
                  <Linkedin size={14} />
                  linkedin.com/in/sagarsonewane
                </a>
              </div>
            </div>

            {/* Profile / Summary */}
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-ink border-b border-stone-200 pb-1">
                Summary
              </h3>
              <p className="text-xs md:text-sm text-ink/80 leading-relaxed font-sans font-medium">
                Aspiring Master of Computer Applications (MCA) student with a solid background in Software Development (B.Voc.). Experienced in building full-stack web products end-to-end (React/Next.js/Supabase) and offline-first mobile applications (native Android with Kotlin/Room DB). Comfortable working across frontend, backend databases, and API development, with a strong focus on clean code and reliable performance.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-ink border-b border-stone-200 pb-1">
                Education
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs md:text-sm text-ink">
                      Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-xs text-ink/70">
                      G. H. Raisoni College of Engineering and Management, Nagpur
                    </p>
                    <p className="text-xs text-ink/60 italic">
                      Coursework: Data Structures & Algorithms, Object Oriented Programming, DBMS, Operating Systems, Computer Networks
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="text-xs font-bold text-ink block">2025 – 2027</span>
                    <span className="text-xs font-semibold text-coral bg-rose-50 border border-rose-200 px-2 py-0.5 rounded inline-block mt-1">
                      CGPA: 9.64 (Sem 1)
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs md:text-sm text-ink">
                      B.Voc. Software Development
                    </h4>
                    <p className="text-xs text-ink/70">
                      J. M. Patel College of Arts, Commerce and Science, Bhandara
                    </p>
                    <p className="text-xs text-ink/60 italic">
                      Acquired strong foundation in Java, Database design, and Full-Stack web principles
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="text-xs font-bold text-ink block">2022 – 2025</span>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded inline-block mt-1">
                      CGPA: 9.67
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex justify-between items-center p-2 bg-stone-50 border border-stone-150 rounded">
                    <div>
                      <span className="font-bold text-xs block">Higher Secondary Certificate (HSC)</span>
                      <span className="text-[10px] text-ink/60">Class XII - Science stream</span>
                    </div>
                    <span className="text-xs font-bold text-ink bg-white border border-stone-200 px-1.5 py-0.5 rounded">57.38%</span>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-stone-50 border border-stone-150 rounded">
                    <div>
                      <span className="font-bold text-xs block">Secondary School Certificate (SSC)</span>
                      <span className="text-[10px] text-ink/60">Class X - Matriculation</span>
                    </div>
                    <span className="text-xs font-bold text-ink bg-white border border-stone-200 px-1.5 py-0.5 rounded">74.40%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-ink border-b border-stone-200 pb-1">
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs md:text-sm font-medium text-ink/85">
                <div>
                  <span className="font-bold text-ink block text-xs uppercase tracking-wider text-stone-500">Languages:</span>
                  <span>Java, Python, C++, C#, PHP, Kotlin, Dart, SQL</span>
                </div>
                <div>
                  <span className="font-bold text-ink block text-xs uppercase tracking-wider text-stone-500">Frontend Web:</span>
                  <span>React.js, Next.js, Tailwind CSS, HTML5, CSS3, Responsive Design</span>
                </div>
                <div>
                  <span className="font-bold text-ink block text-xs uppercase tracking-wider text-stone-500">Mobile Development:</span>
                  <span>Android (Kotlin), Flutter, Android Studio</span>
                </div>
                <div>
                  <span className="font-bold text-ink block text-xs uppercase tracking-wider text-stone-500">Databases & Cloud:</span>
                  <span>MySQL, PostgreSQL, Supabase, Vercel, Resend</span>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-ink border-b border-stone-200 pb-1">
                Projects
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-xs md:text-sm text-ink flex items-center gap-1.5">
                      Sagar Constructions — Business Website
                    </h4>
                    <span className="text-xs text-stone-500 font-sans italic">Next.js, Supabase, Resend</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 mt-1 text-xs md:text-sm text-ink/80 font-sans font-medium">
                    <li>Built production website for a live contractor client, routing inquiries to a Supabase database.</li>
                    <li>Connected dynamic client forms to email pipelines using Resend api notifications.</li>
                    <li>Achieved 95+ Lighthouse score through SSR content pre-fetching on Vercel hosting.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-xs md:text-sm text-ink">
                      Streakly — Habit Tracker Android App
                    </h4>
                    <span className="text-xs text-stone-500 font-sans italic">Kotlin, Android Room DB</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 mt-1 text-xs md:text-sm text-ink/80 font-sans font-medium">
                    <li>Developed an offline-first mobile app using local alarm schedulers and Room DB storage.</li>
                    <li>Programmed a grid-based contribution calendar tracking habits with color-coded streak visualizer.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-xs md:text-sm text-ink">
                      Neighbour — Peer Resource Marketplace
                    </h4>
                    <span className="text-xs text-stone-500 font-sans italic">React, PHP, MySQL</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 mt-1 text-xs md:text-sm text-ink/80 font-sans font-medium">
                    <li>Co-built a resource rental hub, handling user sessions and filterable search catalogs across 8+ categories.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications / achievements */}
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-ink border-b border-stone-200 pb-1">
                Certifications & Extracurriculars
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-xs md:text-sm text-ink/80 font-sans font-medium">
                <li>100+ Algorithm problems solved on LeetCode</li>
                <li>NPTEL Course Certificate in Java Programming (National Programme on Technology Enhanced Learning)</li>
                <li>Coursera certification in Database Management (PostgreSQL/SQL foundations)</li>
              </ul>
            </div>

          </div>
        </ScrapCard>
      </div>
    </motion.div>
  );
}
