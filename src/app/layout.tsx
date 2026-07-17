import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sagar Sonewane | Full-Stack & Mobile Developer Portfolio",
  description: "Personal portfolio website of Sagar Sonewane, MCA student and full-stack & mobile developer specializing in React, Next.js, Kotlin, and Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink relative selection:bg-amber-200">
        {/* Physical Paper Grain Texture Overlay */}
        <div className="bg-grain" />

        {/* Global Navbar */}
        <Navbar />

        {/* Decorative margin elements - scrapbook style doodles / tape */}
        <div className="absolute top-28 left-4 hidden xl:block pointer-events-none select-none z-10">
          <div className="font-handwritten text-coral -rotate-6 text-base max-w-[120px] leading-tight">
            * handmade look *
          </div>
        </div>
        
        <div className="absolute top-44 right-6 hidden xl:block pointer-events-none select-none z-10">
          <div className="bg-white/80 border border-stone-200 text-ink/70 text-xs px-2.5 py-1 rounded shadow-sm rotate-3 flex items-center gap-1 font-semibold">
            <span>📍 Nagpur, India</span>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 md:py-12 relative">
          {children}
        </main>

        {/* Page Footer */}
        <footer className="w-full py-8 px-4 border-t border-stone-200/60 bg-paper-dark/50 text-center text-xs md:text-sm text-ink/60 font-sans mt-12 select-none">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span>✂️ Cut, taped & glued with Next.js & Framer Motion</span>
            </div>
            <div className="font-handwritten text-lg text-coral -rotate-2">
              sagar sonewane — 2026 ✌️
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
