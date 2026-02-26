import { motion } from "framer-motion";

const BG = "#020817";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const timelineData = [
    {
        year: "2020",
        accent: "#3b82f6",
        items: [
            { icon: "💻", title: "Frontend Development", desc: "Fell in love with building interfaces. Mastered HTML, CSS, and JavaScript fundamentals." },
            { icon: "🏆", title: "Competitive Programming", desc: "Dove into algorithms and data structures. Problem-solving became a second nature." },
        ],
    },
    {
        year: "2021",
        accent: "#a855f7",
        items: [
            { icon: "🧠", title: "Machine Learning", desc: "Discovered the world of AI — from linear regression to neural networks." },
            {
                icon: "🥇",
                title: "IEEEXtreme 15.0",
                desc: "6th Place in Sudan. First serious competitive programming milestone on an international stage.",
                badge: "🥇 IEEEXtreme 15.0 · 6th in Sudan",
            },
        ],
    },
    {
        year: "2022",
        accent: "#10b981",
        items: [
            { icon: "🔬", title: "Deep Learning", desc: "Went deeper into convolutions, transformers, and model training pipelines." },
            { icon: "🚀", title: "First Serious Projects", desc: "Shipped my first real projects — felt the difference between tutorials and production code." },
        ],
    },
    {
        year: "2023",
        accent: "#f59e0b",
        items: [
            { icon: "⚙️", title: "Backend Development", desc: "Node.js, Express, MongoDB, REST APIs. Finally understood the full stack." },
            { icon: "📐", title: "Full Software Stack", desc: "Connected dots across frontend, backend, and databases. Started building complete systems." },
        ],
    },
    {
        year: "2024",
        accent: "#38bdf8",
        items: [
            { icon: "🌐", title: "Networks & Security", desc: "Deep-dived into system internals, networking fundamentals, and cybersecurity concepts." },
            { icon: "🏢", title: "System Analyst at EtoPlay", desc: "First professional role — analyzed systems, bridged business logic with engineering execution.", badge: "💼 System Analyst · EtoPlay" },
        ],
    },
    {
        year: "2025",
        accent: "#ec4899",
        items: [
            { icon: "📱", title: "Mobile Development", desc: "Flutter became my weapon of choice. Built full-scale production applications." },
            {
                icon: "🥈",
                title: "ITMO University Hackathon",
                desc: "2nd Place at ITMO University Business School. Built ElevateX — a skill-based learning platform.",
                badge: "🥈 ITMO Business School Hackathon",
            },
            {
                icon: "🥈",
                title: "IndabaX Sudan",
                desc: "2nd Place at IndabaX Sudan ML Hackathon. Applied deep learning in a competitive, research-grade setting.",
                badge: "🥈 IndabaX Sudan · ML Hackathon",
            },
            { icon: "💻", title: "Software Engineer at PureLine", desc: "Built a production MERN e-commerce platform for a UAE water solutions company.", badge: "💼 Software Engineer · PureLine RO" },
            { icon: "🌱", title: "Web Developer at WasteCo", desc: "Delivered a polished React + Vite company landing site.", badge: "💼 Web Developer · WasteCo" },
        ],
    },
];

// ─── Timeline Entry ────────────────────────────────────────────────────────────
function TimelineEntry({ year, accent, items, index }) {
    const isEven = index % 2 === 0;

    return (
        <div style={{ display: "flex", gap: 0, width: "100%", position: "relative" }} className="timeline-entry">
            {/* Year label — left side on desktop */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                    width: "clamp(60px, 12vw, 120px)",
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    paddingRight: 32,
                    paddingTop: 6,
                }}
                className="year-label"
            >
                <span
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(28px, 4vw, 48px)",
                        fontWeight: 900,
                        color: accent,
                        lineHeight: 1,
                        textShadow: `0 0 40px ${accent}55`,
                    }}
                >
                    {year}
                </span>
            </motion.div>

            {/* Center line + dot */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    viewport={{ once: true }}
                    style={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: accent,
                        boxShadow: `0 0 18px ${accent}`,
                        flexShrink: 0,
                        zIndex: 1,
                        marginTop: 8,
                    }}
                />
                <div style={{ flex: 1, width: 2, background: `linear-gradient(to bottom, ${accent}88, transparent)`, minHeight: 60 }} />
            </div>

            {/* Content cards */}
            <div style={{ flex: 1, paddingLeft: 28, paddingBottom: 56, display: "flex", flexDirection: "column", gap: 16 }}>
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ x: 4, borderColor: `${accent}55` }}
                        style={{
                            background: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: 16,
                            padding: "22px 26px",
                            transition: "border-color 0.3s",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Left accent stripe */}
                        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: accent, borderRadius: "16px 0 0 16px" }} />

                        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: item.desc ? 10 : 0 }}>
                            <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                            <div>
                                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 6 }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, fontFamily: "Georgia, serif" }}>
                                    {item.desc}
                                </p>
                                {item.badge && (
                                    <span
                                        style={{
                                            display: "inline-block",
                                            marginTop: 10,
                                            padding: "4px 12px",
                                            background: `${accent}22`,
                                            border: `1px solid ${accent}55`,
                                            borderRadius: 9999,
                                            fontFamily: "monospace",
                                            fontSize: 11,
                                            letterSpacing: "0.12em",
                                            color: accent,
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// ─── Root export ───────────────────────────────────────────────────────────────
export default function Journey() {
    return (
        <section
            id="journey"
            style={{ background: BG, padding: "120px 0 80px", position: "relative" }}
        >
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: 80, padding: "0 24px" }}
            >
                <span
                    style={{
                        fontFamily: "monospace",
                        fontSize: 11,
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        color: "#60a5fa",
                        display: "block",
                        marginBottom: 16,
                    }}
                >
                    ⟨ My Story ⟩
                </span>
                <h2
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(36px, 5vw, 64px)",
                        fontWeight: 900,
                        color: "#ffffff",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                    }}
                >
                    The{" "}
                    <span
                        style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #10b981 100%)",
                        }}
                    >
                        Journey
                    </span>
                </h2>
                <p
                    style={{
                        color: "#64748b",
                        fontSize: 16,
                        marginTop: 18,
                        fontFamily: "Georgia, serif",
                        maxWidth: 480,
                        margin: "18px auto 0",
                        lineHeight: 1.7,
                    }}
                >
                    Five years of learning, building, competing, and shipping. Each year a chapter.
                </p>
            </motion.div>

            {/* Timeline */}
            <div
                style={{
                    maxWidth: 820,
                    margin: "0 auto",
                    padding: "0 24px",
                    position: "relative",
                }}
            >
                {timelineData.map((entry, i) => (
                    <TimelineEntry key={entry.year} {...entry} index={i} />
                ))}
            </div>
        </section>
    );
}
