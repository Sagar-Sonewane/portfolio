"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";
import ScrapCard from "./ScrapCard";
import Tape from "./Tape";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Full-Stack Web Project",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const topicOptions = [
    "Full-Stack Web Project",
    "Mobile App (Android/Kotlin)",
    "Job / Internship Opportunity",
    "General Discussion / Hello"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMsg("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMsg("Please enter your name!");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address!");
      return;
    }
    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please write a short message!");
      return;
    }

    setStatus("submitting");

    // Simulate interactive sending
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      topic: "Full-Stack Web Project",
      message: ""
    });
    setStatus("idle");
    setErrorMsg("");
  };

  const mailtoUrl = `mailto:sagarsonewane2511@gmail.com?subject=${encodeURIComponent(
    `[${formData.topic}] Inquiry from ${formData.name || "Portfolio Visitor"}`
  )}&body=${encodeURIComponent(
    `Hi Sagar,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
  )}`;

  return (
    <ScrapCard
      paperStyle="grid"
      attachment="pin"
      rotation="rotate-0"
      color="white"
      className="p-6 sm:p-8 max-w-xl mx-auto shadow-xl border border-stone-200/80"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-1 text-center">
          <span className="font-handwritten text-xl sm:text-2xl text-coral block -rotate-2 select-none">
            leave a note in my scrapbook
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-sans text-ink">
            Send Me a Message
          </h3>
          <p className="text-xs sm:text-sm text-ink/70 max-w-md mx-auto">
            Have a project in mind, a question, or an opportunity? Drop your details below!
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            /* Success Note View */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-6 px-4 bg-amber-50 border-2 border-dashed border-amber-300 rounded-md text-center space-y-4 relative"
            >
              <Tape variant="default" rotation="-rotate-3" width="w-20" className="left-1/2 -translate-x-1/2 -top-3" />
              
              <div className="w-12 h-12 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={24} />
              </div>

              <div className="space-y-1.5">
                <span className="font-handwritten text-xl text-coral block select-none">
                  message glued & sent! ✦
                </span>
                <h4 className="font-bold text-lg text-ink font-sans">
                  Thanks for reaching out, {formData.name}!
                </h4>
                <p className="text-xs sm:text-sm text-ink/75 max-w-sm mx-auto leading-relaxed">
                  Your message regarding <span className="font-semibold text-ink">&quot;{formData.topic}&quot;</span> has been recorded. I will reply to <span className="font-semibold text-ink">{formData.email}</span> shortly!
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 select-none">
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-coral text-white border border-rose-700 text-xs sm:text-sm font-bold rounded shadow-sm hover:bg-rose-600 transition-colors"
                >
                  <Mail size={14} />
                  <span>Open Mail Client Direct</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2 bg-white border border-stone-300 text-ink text-xs sm:text-sm font-bold rounded hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            </motion.div>
          ) : (
            /* Form View */
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 text-left select-text"
            >
              {/* Error Banner */}
              {status === "error" && (
                <div className="p-3 bg-rose-50 border border-rose-300 rounded text-rose-800 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0 text-coral" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-1">
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-600 font-sans">
                  Your Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Rivera"
                  className="w-full px-3.5 py-2.5 bg-stone-50/80 border border-stone-200 rounded-md text-sm text-ink placeholder:text-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200/60 font-sans transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-600 font-sans">
                  Your Email <span className="text-coral">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-3.5 py-2.5 bg-stone-50/80 border border-stone-200 rounded-md text-sm text-ink placeholder:text-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200/60 font-sans transition-all"
                />
              </div>

              {/* Topic Select Field */}
              <div className="space-y-1">
                <label htmlFor="topic" className="block text-xs font-bold uppercase tracking-wider text-stone-600 font-sans">
                  What are we building?
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-stone-50/80 border border-stone-200 rounded-md text-sm text-ink focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200/60 font-sans transition-all cursor-pointer"
                >
                  {topicOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-600 font-sans">
                  Your Message <span className="text-coral">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your project, ideas, or questions..."
                  className="w-full px-3.5 py-2.5 bg-stone-50/80 border border-stone-200 rounded-md text-sm text-ink placeholder:text-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200/60 font-sans transition-all resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-amber-200 border-2 border-ink hover:bg-amber-300 font-bold text-sm text-ink rounded-md shadow-[4px_4px_0px_rgba(28,28,26,1)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_rgba(28,28,26,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Gluing Note...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Note ✈️</span>
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </ScrapCard>
  );
}
