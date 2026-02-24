import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const BG = "#020817";
const BG2 = "#0a0f1e";

const storyChapters = [
  {
    id: "origin",
    label: "Chapter 01 — The Pivot",
    headline: "From Circuits\nto Code.",
    body: "My engineering journey began in Sudan, studying Electrical Engineering. When war forced a change of plans, I didn't stop building—I pivoted. I relocated to Malaysia, joined UTM, and channeled my engineering mindset into Software Development.",
    accent: "#f59e0b", // Amber/Gold (Energy/Resilience)
    icon: "⚡",
  },
  {
    id: "web",
    label: "Chapter 02 — The Web",
    headline: "Architecting\nthe Web.",
    body: "I build responsive, high-performance web platforms. I've successfully delivered multiple custom websites for diverse clients across the UAE, focusing on scalable code and user-centric design that drives real business value.",
    accent: "#3b82f6", // Blue
    icon: "🌐",
  },
  {
    id: "mobile",
    label: "Chapter 03 — The Apps",
    headline: "Production\nReady Apps.",
    body: "Web is only half the story. I specialize in building seamless, cross-platform mobile experiences using Flutter. From state management to backend integration, I engineer full-stack applications and ship them to production.",
    accent: "#10b981", // Emerald/Green
    icon: "📱",
  },
  {
    id: "future",
    label: "Chapter 04 — The Builder",
    headline: "Always\nShipping.",
    body: "Currently in my third year of Software Engineering at UTM. I combine rigorous academic computer science with real-world freelancing experience. I'm not just a student; I'm an engineer who pushes code to production.",
    accent: "#a855f7", // Purple
    icon: "🚀",
  }
];

// ─── Global styles injected once ─────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${BG}; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 5px; background: ${BG}; }
  ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
`;

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
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
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

  // Translate based on the number of cards
  const xPx = useTransform(scrollYProgress, [0, 1], [0, -(totalCards - 1) * CARD_WIDTH]);
  const smoothX = useSpring(xPx, { stiffness: 70, damping: 22, restDelta: 0.001 });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={trackRef} style={{ height: `${totalCards * 100}vh`, position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", background: BG2 }}>
        
        {/* Progress bar */}
        <motion.div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, zIndex: 50, originX: 0, scaleX, background: "linear-gradient(90deg, #3b82f6 0%, #a855f7 33%, #10b981 66%, #f59e0b 100%)" }} />

        {/* Sliding track - FIXED CENTERING HERE */}
        <motion.div
          style={{
            display: "flex",
            height: "100%",
            width: "max-content", // Allows the track to be as wide as it needs
            paddingLeft: `calc(50vw - ${CARD_WIDTH / 2}px)`, // Pushes the first card to the exact center
            paddingRight: `calc(50vw - ${CARD_WIDTH / 2}px)`, // Ensures the last card stops in the center
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

  return (
    <section style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: BG, position: "relative", overflow: "hidden" }}>
      <Particles />

      {/* Glow blobs */}
      <motion.div animate={{ scale: [1, 1.35, 1], opacity: [0.07, 0.18, 0.07] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, #3b82f6 0%, #a855f7 55%, transparent 100%)", filter: "blur(130px)", zIndex: 0, pointerEvents: "none" }} />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.13, 0.05] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }} style={{ position: "absolute", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, #10b981 0%, transparent 70%)", filter: "blur(100px)", zIndex: 0, pointerEvents: "none", right: "5%", bottom: "10%" }} />

      <motion.div variants={container} initial="hidden" animate="visible" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px", maxWidth: 900, width: "100%", margin: "0 auto" }}>
        <motion.span variants={item} style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 24 }}>
          ⟨ Ahmed Mohamed • Software Engineer ⟩
        </motion.span>

        <motion.h1 variants={item} style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(56px, 9vw, 110px)", fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 8 }}>
          Building Without{" "}
          <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #a855f7 45%, #10b981 85%)" }}>
            Borders.
          </span>
        </motion.h1>

        <motion.p variants={item} style={{ color: "#94a3b8", fontSize: "clamp(15px, 1.8vw, 19px)", maxWidth: 580, margin: "28px auto 0", lineHeight: 1.75, fontFamily: "Georgia, serif" }}>
          Software Engineering Student @ UTM · Flutter Developer · Web Architect.{" "}
          <span style={{ color: "#cbd5e1" }}>
            I engineer resilient web platforms for UAE clients and ship production-ready mobile apps from Malaysia.
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: BG, position: "relative", overflow: "hidden" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} style={{ textAlign: "center", padding: "0 24px", position: "relative", zIndex: 1 }}>
        
        <span style={{ fontFamily: "monospace", fontSize: 11, color: "#34d399", letterSpacing: "0.35em", textTransform: "uppercase", display: "block", marginBottom: 24 }}>
          ⟨ Ready for deployment ⟩
        </span>

        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 28 }}>
          Let's Build{" "}
          <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(135deg, #f59e0b, #ec4899)" }}>
            Your Next App.
          </span>
        </h2>

        <p style={{ color: "#94a3b8", fontSize: 17, maxWidth: 480, margin: "0 auto 44px", lineHeight: 1.75, fontFamily: "Georgia, serif" }}>
          Whether you need a high-performance Flutter mobile app, a scalable web platform, or an engineer who knows how to adapt and deliver—let's talk.
        </p>

        <button style={{ padding: "16px 40px", background: "linear-gradient(135deg, #f59e0b, #ec4899)", color: "#020817", fontWeight: 800, fontSize: 14, letterSpacing: "0.04em", border: "none", borderRadius: 9999, cursor: "pointer" }}>
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
// ─── Root export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <style>{GLOBAL_CSS}</style>
      {/* ADDED: width: "100%" and overflowX: "hidden" to lock the width! */}
      <div style={{ background: BG, fontFamily: "system-ui, sans-serif", width: "100%", overflowX: "hidden" }}>
        <Hero />
        <HorizontalStory />
        <FinalCTA />
      </div>
    </>
  );
}