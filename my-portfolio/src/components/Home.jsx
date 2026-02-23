import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// ─── Horizontal Story Panel ───────────────────────────────────────────────────
const storyChapters = [
  {
    id: "origin",
    label: "Chapter 01 — Origin",
    headline: "Born From\nCuriosity.",
    body: "It started with a question: what if machines could think? Not just calculate — but understand. That single obsession sent me down a rabbit hole of code, mathematics, and systems too beautiful to ignore.",
    accent: "#3b82f6",
    icon: "⚡",
  },
  {
    id: "fullstack",
    label: "Chapter 02 — The Builder",
    headline: "Frontend.\nBackend.\nEverything.",
    body: "I learned to build the full stack — from pixel-perfect React UIs to distributed APIs, cloud infrastructure, and databases. If it could be engineered, I engineered it. Shipped to production, zero apologies.",
    accent: "#a855f7",
    icon: "🏗️",
  },
  {
    id: "ai",
    label: "Chapter 03 — The Intelligence",
    headline: "Teaching\nMachines to\nSee.",
    body: "Neural networks. Transformers. Diffusion models. I stopped using AI as a tool and started building it from scratch — training models, designing architectures, deploying intelligent systems that actually work in the real world.",
    accent: "#10b981",
    icon: "🧠",
  },
  {
    id: "quantum",
    label: "Chapter 04 — The Frontier",
    headline: "Quantum\nIs the\nNext Gate.",
    body: "Classical bits are a ceiling. I'm reaching for qubits. My next chapter: Quantum Machine Learning — where superposition meets gradient descent, and the impossible becomes computable. The future runs on quantum.",
    accent: "#f59e0b",
    icon: "⚛️",
  },
  {
    id: "mission",
    label: "Chapter 05 — The Mission",
    headline: "Build What\nDoesn't\nExist Yet.",
    body: "I am a Full-Stack developer, AI researcher, and soon — a quantum computing engineer. I don't chase trends. I build the infrastructure of tomorrow, one breakthrough at a time.",
    accent: "#ec4899",
    icon: "🚀",
  },
];

// ─── Particle Background ──────────────────────────────────────────────────────
function Particles() {
  const dots = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            opacity: 0.15,
          }}
          animate={{ opacity: [0.05, 0.3, 0.05], scale: [1, 1.5, 1] }}
          transition={{ duration: d.duration, repeat: Infinity, delay: d.delay }}
        />
      ))}
    </div>
  );
}

// ─── Story Chapter Card ───────────────────────────────────────────────────────
function ChapterCard({ chapter }) {
  return (
    <div
      className="flex-shrink-0 w-[85vw] md:w-[600px] h-full flex flex-col justify-center px-12 py-16 relative"
      style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Top accent line */}
      <div
        className="w-16 h-[3px] mb-10 rounded-full"
        style={{ background: chapter.accent }}
      />

      <span
        className="font-mono text-xs tracking-[0.25em] uppercase mb-6"
        style={{ color: chapter.accent, opacity: 0.8 }}
      >
        {chapter.label}
      </span>

      <h2
        className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-8 whitespace-pre-line"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
      >
        {chapter.headline}
      </h2>

      <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
        {chapter.body}
      </p>

      {/* Icon watermark */}
      <div
        className="absolute bottom-12 right-12 text-7xl"
        style={{ opacity: 0.08 }}
      >
        {chapter.icon}
      </div>
    </div>
  );
}

// ─── Horizontal Scroll Section ────────────────────────────────────────────────
function HorizontalStory() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Map scroll to horizontal translation
  const totalWidth = storyChapters.length * 600; // approx px per card
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(storyChapters.length - 1) * 100 / storyChapters.length}%`]);
  const smoothX = useSpring(x, { stiffness: 80, damping: 20 });

  // Progress bar
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    /* Sticky container — height controls how much scroll = how far we travel */
    <div
      ref={trackRef}
      style={{ height: `${storyChapters.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Progress bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] z-50 origin-left"
          style={{
            scaleX,
            background: "linear-gradient(90deg, #3b82f6, #a855f7, #10b981, #f59e0b, #ec4899)",
          }}
        />

        {/* Chapter counter */}
        <motion.div
          className="absolute top-8 right-8 z-50 font-mono text-xs text-slate-500 tracking-widest"
        >
          {storyChapters.map((_, i) => (
            <motion.span
              key={i}
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [i / storyChapters.length - 0.05, i / storyChapters.length + 0.05],
                  [0.2, 1]
                ),
              }}
            >
              {i < storyChapters.length - 1 ? `0${i + 1} · ` : `0${i + 1}`}
            </motion.span>
          ))}
        </motion.div>

        {/* Horizontal track */}
        <motion.div
          className="flex h-full"
          style={{ x: smoothX, width: `${storyChapters.length * 100}vw` }}
        >
          {storyChapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-slate-600 text-xs tracking-widest uppercase font-mono">
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ←
          </motion.span>
          scroll to navigate
          <motion.span
            animate={{ x: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.span>
        </div>
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center snap-start bg-slate-950 relative overflow-hidden">
      <Particles />

      {/* Ambient glow blobs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] rounded-full -z-10 blur-[160px]"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, #a855f7 60%, transparent 100%)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        className="absolute w-[400px] h-[400px] rounded-full -z-10 blur-[100px] translate-x-64 translate-y-32"
        style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)" }}
      />

      {/* Scanline texture overlay */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center px-6 max-w-5xl"
      >
        <motion.span
          variants={itemVariants}
          className="font-mono text-blue-400 text-xs tracking-[0.35em] uppercase mb-6 block"
        >
          ⟨ Initializing Portfolio v∞ ⟩
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-9xl font-black text-white leading-none mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.03em" }}
        >
          Building{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #a855f7 40%, #10b981 80%)",
            }}
          >
            Futures.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Full-Stack Engineer · AI Researcher · Quantum ML Aspirant.{" "}
          <span className="text-slate-300">
            I build intelligent systems today, and train myself for the quantum frontier of tomorrow.
          </span>
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 flex gap-4 justify-center flex-wrap">
          <button
            className="px-8 py-3.5 font-bold rounded-full text-slate-950 text-sm tracking-wide transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #60a5fa, #a78bfa)" }}
          >
            View My Work
          </button>
          <button
            className="px-8 py-3.5 font-bold rounded-full text-white text-sm tracking-wide border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 transition-all"
          >
            My Research ⚛️
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs uppercase tracking-[0.3em] font-mono">
          Scroll to read my story
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-10 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ─── Final CTA Section ────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="text-center px-6"
      >
        <span className="font-mono text-xs text-emerald-400 tracking-[0.35em] uppercase mb-6 block">
          ⟨ Transmission Complete ⟩
        </span>

        <h2
          className="text-6xl md:text-8xl font-black text-white mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.03em" }}
        >
          What Gets{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #f59e0b, #ec4899)",
            }}
          >
            Built Next?
          </span>
        </h2>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          A quantum-classical hybrid model? A production AI platform? Whatever the problem,
          I build the solution. Let's make something impossible.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className="px-10 py-4 font-bold rounded-full text-slate-950 text-sm tracking-wide transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)" }}
          >
            Get In Touch
          </button>
          <button className="px-10 py-4 font-bold rounded-full text-white text-sm tracking-wide border border-slate-700 hover:bg-slate-800/50 transition-all">
            GitHub ↗
          </button>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-slate-950" style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
      `}</style>

      <Hero />
      <HorizontalStory />
      <FinalCTA />
    </main>
  );
}