# ✂️ Sagar Sonewane | Scrapbook Developer Portfolio

A tactile, personal portfolio website styled like a **physical scrapbook / collage journal** — designed to look as if the page content was cut out, taped, pinned, and glued onto a sheet of paper. 

Built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🎨 Theme & Design System

* **Paper Background & Texture**: Warm off-white paper base (`#FAF7F0`) overlaid with a subtle, custom base64 SVG fractal noise pattern giving a realistic paper grain.
* **Handmade Vibe**: Elements alternate in rotation (`-2deg` to `2deg`), and are "taped" or "pinned" to the grid. Cards straighten, lift, and deepen their shadows on hover.
* **Highlighter Nav Bar**: A fluid navigation header that uses Framer Motion `layoutId` to animate a yellow highlighter indicator behind the active page tab.
* **Notebook Rules Manifesto**: An interactive "Rules for Me" developer manifesto styled like a yellow notebook page torn out and paperclipped to the background.
* **Print-Ready Digital CV**: A complete resume layout styled like a clean CV page. Optimized with custom `@media print` rules, allowing a clean, zero-clutter **Save as PDF** from the browser's print dialog.

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
* **Logic & Types**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/) (configured natively via `@theme` variables and inline utilities inside `globals.css`)
* **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/) (Tactile spring wiggles, floats, transitions, and staggered scroll reveals)
* **Icons**: [Lucide React](https://lucide.dev/) (plus custom brand SVGs for GitHub and LinkedIn)

---

## 🗂️ Project Structure

```bash
├── public/                 # Static assets (favicons, vercel/next icons)
├── src/
│   ├── app/                # Next.js App Router Page directories
│   │   ├── about/          # Biography, education timeline & skills categories
│   │   ├── projects/       # 4 core full-stack & mobile builds
│   │   ├── resume/         # CV view & print-to-PDF button
│   │   ├── globals.css     # Tailwind v4 theme, noise grain overlay & animations
│   │   └── page.tsx        # Homepage (Hero, Polaroid, Manifesto, Blog links, Contact)
│   └── components/         # Reusable scrapbook components
│       ├── Badge.tsx       # Bouncy tag sticker components
│       ├── Icons.tsx       # Custom SVG brand assets (GitHub, LinkedIn)
│       ├── Navbar.tsx      # Client-side highlighted nav menu
│       ├── ScrapCard.tsx   # Wrapper scrap paper (supports tape, pins, paperclips)
│       └── Tape.tsx        # Jagged transparent / amber washi tape overlay
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Sagar-Sonewane/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for production
```bash
npm run build
```

---

## ✏️ Customization Guide

### Replace the Polaroid Avatar
Currently, the polaroid photo renders a clean initials/sparkle placeholder box. To display your real photo:
1. Drop your photo inside the `public/` directory and name it `profile.jpg` (or `profile.png`).
2. Open `src/app/page.tsx` and search for the **Polaroid Photo Section**.
3. Replace the placeholder `div` with an Next.js `<Image>` component pointing to `/profile.jpg`:
   ```tsx
   <Image 
     src="/profile.jpg" 
     alt="Sagar Sonewane" 
     width={220} 
     height={220} 
     className="object-cover rounded-sm"
   />
   ```

### Modifying Content
* **Homepage Details & Manifesto**: Edit `src/app/page.tsx`.
* **Projects Showcase**: Add or update projects inside the `projectsData` array in `src/app/projects/page.tsx`.
* **Biography & Timeline**: Edit `src/app/about/page.tsx`.
* **Full Resume**: Update the layout text fields in `src/app/resume/page.tsx`.

---

## 📄 License

This project is open-source and licensed under the **MIT License**. Feel free to customize and make it your own!
