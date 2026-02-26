import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const BG = "#020817";
const EASE = [0.22, 1, 0.36, 1];

// ─── Data ──────────────────────────────────────────────────────────────────────
const JOURNEY = [
    {
        year: "2020",
        accent: "#3b82f6",
        tagline: "The beginning.",
        items: [
            {
                title: "Frontend Development",
                desc: "Fell in love with building interfaces. Mastered HTML, CSS, and JavaScript fundamentals — learned that design and code are inseparable.",
                badge: null,
            },
            {
                title: "Competitive Programming",
                desc: "Dove into algorithms and data structures. Problem-solving became a second nature. Started thinking in complexity and edge cases.",
                badge: null,
            },
        ],
    },
    {
        year: "2021",
        accent: "#a855f7",
        tagline: "Into intelligence.",
        items: [
            {
                title: "Machine Learning",
                desc: "Discovered the world of AI — from linear regression to neural networks. A new lens for thinking about data and prediction.",
                badge: null,
            },
            {
                title: "IEEEXtreme 15.0 — 6th in Sudan",
                desc: "First serious competitive programming milestone on an international stage. A team effort, a ranked result, a mindset shift.",
                badge: "IEEEXtreme 15.0 · 6th Place in Sudan",
            },
        ],
    },
    {
        year: "2022",
        accent: "#10b981",
        tagline: "Deeper systems.",
        items: [
            {
                title: "Deep Learning",
                desc: "Went deeper into convolutions, transformers, and model training pipelines. Started understanding why things work, not just how.",
                badge: null,
            },
            {
                title: "First Serious Projects",
                desc: "Shipped real projects and felt the difference between tutorials and production code. Bugs became teachers.",
                badge: null,
            },
        ],
    },
    {
        year: "2023",
        accent: "#f59e0b",
        tagline: "Full-stack clarity.",
        items: [
            {
                title: "Backend Development",
                desc: "Node.js, Express, MongoDB, REST APIs. Finally understood the full stack — front to back, request to response.",
                badge: null,
            },
            {
                title: "Complete Software Systems",
                desc: "Connected dots across frontend, backend, and databases. Started thinking in systems, not features.",
                badge: null,
            },
        ],
    },
    {
        year: "2024",
        accent: "#38bdf8",
        tagline: "Professional entry.",
        items: [
            {
                title: "Networks & Security",
                desc: "Deep-dived into system internals, networking fundamentals, and cybersecurity concepts. Infrastructure became legible.",
                badge: null,
            },
            {
                title: "System Analyst at EtoPlay",
                desc: "First professional role — analyzed systems, bridged business logic with engineering execution. Real requirements, real stakes.",
                badge: "System Analyst · EtoPlay",
            },
        ],
    },
    {
        year: "2025",
        accent: "#ec4899",
        tagline: "Production & recognition.",
        items: [
            {
                title: "Mobile Development",
                desc: "Flutter became my weapon of choice. Built full-scale production applications for real users across two countries.",
                badge: null,
            },
            {
                title: "ITMO University Business School — 2nd Place",
                desc: "Built ElevateX in a hackathon setting — a skill-based learning platform. Cross-discipline collaboration under pressure.",
                badge: "2nd Place · ITMO University Business School",
            },
            {
                title: "IndabaX Sudan ML Hackathon — 2nd Place",
                desc: "Applied deep learning in a competitive, research-grade setting. ML from theory into timed execution.",
                badge: "2nd Place · IndabaX Sudan",
            },
            {
                title: "Software Engineer at PureLine RO",
                desc: "Built a production MERN e-commerce platform for a UAE water solutions company. Real clients, live deployments.",
                badge: "Software Engineer · PureLine RO",
            },
            {
                title: "Web Developer at WasteCo",
                desc: "Delivered a polished React + Vite company landing site. Clean execution, production-grade output.",
                badge: "Web Developer · WasteCo",
            },
        ],
    },
];

// ─── Stroke icon: chevron ──────────────────────────────────────────────────────
function ChevronIcon({ open, color }) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ transition: "transform 0.35s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
        >
            <path d="M4 6l4 4 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// ─── Year Node (constellation dot) ────────────────────────────────────────────
function YearNode({ active, accent }) {
    return (
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, flexShrink: 0 }}>
            {/* Outer pulse ring */}
            {active && (
                <motion.div
                    animate={{ scale: [1, 1.9], opacity: [0.4, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                    style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border: `1px solid ${accent}`,
                    }}
                />
            )}
            {/* Core dot */}
            <motion.div
                animate={{ scale: active ? 1 : 0.6, opacity: active ? 1 : 0.3 }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{
                    width: active ? 12 : 8,
                    height: active ? 12 : 8,
                    borderRadius: "50%",
                    background: active ? accent : "#1e293b",
                    border: `2px solid ${active ? accent : "#334155"}`,
                    boxShadow: active ? `0 0 14px ${accent}88` : "none",
                    transition: "width 0.4s, height 0.4s, box-shadow 0.4s",
                }}
            />
        </div>
    );
}

// ─── Animated SVG connector line ───────────────────────────────────────────────
function ConnectorLine({ accent, active }) {
    return (
        <div style={{ width: 2, flex: 1, minHeight: 24, position: "relative", marginLeft: 9 }}>
            {/* Static track */}
            <div style={{ position: "absolute", inset: 0, background: "#1e293b38" }} />
            {/* Animated fill */}
            <motion.div
                animate={{ scaleY: active ? 1 : 0, opacity: active ? 1 : 0 }}
                initial={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to bottom, ${accent}, ${accent}22)`,
                    transformOrigin: "top",
                }}
            />
        </div>
    );
}

// ─── Content item card ─────────────────────────────────────────────────────────
function ContentItem({ item, index, accent }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.38, delay: index * 0.07, ease: EASE }}
            style={{
                padding: "20px 24px",
                background: "#0d1526",
                border: "1px solid #1e293b",
                borderRadius: 14,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Left accent stripe */}
            <div style={{ position: "absolute", left: 0, top: 12, bottom: 12, width: 2, background: accent, borderRadius: 2 }} />

            <h4
                style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#f1f5f9",
                    letterSpacing: "-0.01em",
                    marginBottom: item.desc ? 8 : 0,
                    lineHeight: 1.3,
                }}
            >
                {item.title}
            </h4>

            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.72, fontFamily: "Georgia, serif" }}>
                {item.desc}
            </p>

            {item.badge && (
                <span
                    style={{
                        display: "inline-block",
                        marginTop: 12,
                        padding: "3px 11px",
                        background: `${accent}15`,
                        border: `1px solid ${accent}40`,
                        borderRadius: 9999,
                        fontFamily: "monospace",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        color: accent,
                        textTransform: "uppercase",
                    }}
                >
                    {item.badge}
                </span>
            )}
        </motion.div>
    );
}

// ─── Single Year Row ───────────────────────────────────────────────────────────
function JourneyRow({ data, index, isLast }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.25 });
    const active = inView;

    return (
        <div ref={ref} style={{ display: "flex", gap: 0, width: "100%" }}>
            {/* Left column: node + line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 20, marginTop: 2 }}>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
                >
                    <YearNode active={active} accent={data.accent} />
                </motion.div>
                {!isLast && <ConnectorLine accent={data.accent} active={active} />}
            </div>

            {/* Right column: year + content */}
            <div style={{ flex: 1, paddingLeft: 28, paddingBottom: isLast ? 0 : 56 }}>

                {/* Clickable year header */}
                <motion.button
                    onClick={() => setOpen((v) => !v)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                    transition={{ duration: 0.55, delay: index * 0.08 + 0.05, ease: EASE }}
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 16,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0 0 16px",
                        width: "100%",
                        textAlign: "left",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(36px, 5vw, 60px)",
                            fontWeight: 900,
                            lineHeight: 1,
                            letterSpacing: "-0.04em",
                            color: active ? data.accent : "#1e293b",
                            textShadow: active ? `0 0 48px ${data.accent}44` : "none",
                            transition: "color 0.5s ease, text-shadow 0.5s ease",
                        }}
                    >
                        {data.year}
                    </span>
                    <span
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: 15,
                            color: active ? "#64748b" : "#1e293b",
                            fontStyle: "italic",
                            transition: "color 0.5s ease",
                        }}
                    >
                        {data.tagline}
                    </span>
                    <div style={{ marginLeft: "auto" }}>
                        <ChevronIcon open={open} color={active ? data.accent : "#334155"} />
                    </div>
                </motion.button>

                {/* Expandable cards */}
                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            key="cards"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.42, ease: EASE }}
                            style={{ overflow: "hidden" }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingBottom: 20 }}>
                                {data.items.map((item, i) => (
                                    <ContentItem key={i} item={item} index={i} accent={data.accent} />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// ─── Root export ───────────────────────────────────────────────────────────────
export default function Journey() {
    return (
        <section id="journey" style={{ background: BG, padding: "120px 0 100px", position: "relative" }}>

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: 88, padding: "0 24px" }}
            >
                <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 16 }}>
                    ⟨ My Story ⟩
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                    The{" "}
                    <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #10b981 100%)" }}>
                        Journey
                    </span>
                </h2>
                <p style={{ color: "#64748b", fontSize: 16, fontFamily: "Georgia, serif", maxWidth: 440, margin: "18px auto 0", lineHeight: 1.72 }}>
                    Six years of learning, building, competing, and shipping.
                    Click any year to expand the chapter.
                </p>
            </motion.div>

            {/* Constellation timeline */}
            <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 32px" }}>
                {JOURNEY.map((entry, i) => (
                    <JourneyRow
                        key={entry.year}
                        data={entry}
                        index={i}
                        isLast={i === JOURNEY.length - 1}
                    />
                ))}
            </div>
        </section>
    );
}
