import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const BG = "#020817";
const BG2 = "#0a0f1e";

const storyChapters = [
  {
    id: "fullstack",
    label: "Chapter 01 — The Architect",
    headline: "Web. Mobile.\nEcosystems.",
    body: "I build the foundation. From pixel-perfect React frontends to robust, scalable backends. I don't just write code; I engineer seamless, cross-platform experiences that users actually want to interact with.",
    accent: "#3b82f6",
    icon: "📱",
  },
  {
    id: "ai",
    label: "Chapter 02 — The Intelligence",
    headline: "Researching\nDeep Learning.",
    body: "AI isn't just an API call to me. I dive deep into Machine Learning and Deep Learning architectures. I provide dedicated research assistance to build the 'brains' behind complex, data-driven systems.",
    accent: "#a855f7",
    icon: "🧠",
  },
  {
    id: "data",
    label: "Chapter 03 — The Analyst",
    headline: "Data Told\nThrough PowerBI.",
    body: "Raw data is useless without a narrative. I specialize in transforming complex datasets into clear, actionable PowerBI dashboards. I find the signal in the noise and turn numbers into strategic insights.",
    accent: "#10b981",
    icon: "📊",
  },
  {
    id: "brand",
    label: "Chapter 04 — The Strategist",
    headline: "Brands Built\nWith AI Agents.",
    body: "A great product needs an identity. I bridge the gap by building complete brand strategies powered by custom AI bot assistants. I create digital agents that act as the living, breathing voice of your company.",
    accent: "#f59e0b",
    icon: "🤖",
  },
];

// ─── Particles ────────────────────────────────────────────────────────────────
function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 55 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        duration: Math.random() * 7 + 4,
        delay: Math.random() * 5,
        color: ["#3b82f6", "#a855f7", "#10b981", "#f59e0b"][Math.floor(Math.random() * 4)],
      })),
    []
  );

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {dots.map((d) => (
        <motion.div
          key={d.id}
          style={{
            position: "absolute",
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            borderRadius: "50%",
            background: d.color,
            opacity: 0.12,
          }}
          animate={{ opacity: [0.04, 0.28, 0.04], scale: [1, 1.8, 1] }}
          transition={{ duration: d.duration, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ─── Chapter Card ─────────────────────────────────────────────────────────────
function ChapterCard({ chapter }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 600,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "64px 56px",
        position: "relative",
        borderRight: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ width: 56, height: 3, borderRadius: 9999, background: chapter.accent, marginBottom: 32 }} />
      <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: chapter.accent, opacity: 0.85, marginBottom: 20, display: "block" }}>
        {chapter.label}
      </span>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 62, fontWeight: 900, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.02em", whiteSpace: "pre-line", marginBottom: 28 }}>
        {chapter.headline}
      </h2>
      <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.75, maxWidth: 440, fontFamily: "Georgia, serif" }}>
        {chapter.body}
      </p>
      <div style={{ position: "absolute", bottom: 48, right: 48, fontSize: 96, opacity: 0.06, pointerEvents: "none", userSelect: "none" }}>
        {chapter.icon}
      </div>
    </div>
  );
}

// ─── Horizontal Story ─────────────────────────────────────────────────────────
const CARD_WIDTH = 600;

function HorizontalStory() {
  const trackRef = useRef(null);
  const totalCards = storyChapters.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const xPx = useTransform(scrollYProgress, [0, 1], [0, -(totalCards - 1) * CARD_WIDTH]);
  const smoothX = useSpring(xPx, { stiffness: 70, damping: 22, restDelta: 0.001 });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div id="about" ref={trackRef} style={{ height: `${totalCards * 100}vh`, position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", background: BG2 }}>
        <motion.div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, zIndex: 50, originX: 0, scaleX, background: "linear-gradient(90deg, #3b82f6 0%, #a855f7 33%, #10b981 66%, #f59e0b 100%)" }} />
        <motion.div
          style={{
            display: "flex",
            height: "100%",
            width: "max-content",
            paddingLeft: `calc(50vw - ${CARD_WIDTH / 2}px)`,
            paddingRight: `calc(50vw - ${CARD_WIDTH / 2}px)`,
            x: smoothX,
            willChange: "transform",
          }}
        >
          {storyChapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.22, delayChildren: 0.25 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  };

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: BG, position: "relative", overflow: "hidden" }}>
      <Particles />
      <motion.div animate={{ scale: [1, 1.35, 1], opacity: [0.07, 0.18, 0.07] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, #3b82f6 0%, #a855f7 55%, transparent 100%)", filter: "blur(130px)", zIndex: 0, pointerEvents: "none" }} />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.13, 0.05] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }} style={{ position: "absolute", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, #10b981 0%, transparent 70%)", filter: "blur(100px)", zIndex: 0, pointerEvents: "none", right: "5%", bottom: "10%" }} />

      <motion.div variants={container} initial="hidden" animate="visible" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px", maxWidth: 900, width: "100%", margin: "0 auto" }}>
        <motion.span variants={item} style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 24 }}>
          ⟨ Ahmed Elfaki — Software Engineer ⟩
        </motion.span>

        <motion.h1 variants={item} style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(52px, 9vw, 110px)", fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 8 }}>
          Engineering{" "}
          <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #a855f7 45%, #10b981 85%)" }}>
            Solutions.
          </span>
        </motion.h1>

        <motion.p variants={item} style={{ color: "#94a3b8", fontSize: "clamp(15px, 1.8vw, 19px)", maxWidth: 580, margin: "28px auto 0", lineHeight: 1.75, fontFamily: "Georgia, serif" }}>
          3rd-year Software Engineering student building{" "}
          <span style={{ color: "#cbd5e1" }}>
            full-stack systems, mobile apps, and AI-powered solutions
          </span>
          {" "}— with deep CS fundamentals and a creative edge.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 44 }}>
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "14px 36px",
              background: "linear-gradient(135deg, #3b82f6, #a855f7)",
              color: "#ffffff",
              fontFamily: "monospace",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: 9999,
              border: "none",
              cursor: "pointer",
            }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "14px 36px",
              background: "rgba(255,255,255,0.04)",
              color: "#e2e8f0",
              fontFamily: "monospace",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={item}
          style={{ marginTop: 60, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#64748b" }}>
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="6.5" y="1" width="3" height="5" rx="1.5" fill="#64748b" />
            <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="#64748b" />
            <path d="M8 14l-3 3h6l-3-3z" fill="#64748b" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: BG, fontFamily: "system-ui, sans-serif" }}>
      <Hero />
      <HorizontalStory />
    </div>
  );
}