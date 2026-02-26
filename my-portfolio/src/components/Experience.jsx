import { motion } from "framer-motion";

const BG = "#020817";

const EXPERIENCES = [
    {
        company: "PureLine RO Water Solutions",
        role: "Software Engineer",
        period: "Sep 2025 – Present",
        location: "UAE (Remote)",
        desc: "Architected and built a full-scale MERN e-commerce platform for a water solutions company in the UAE. The system handles product catalog, order management, and client portals — production-grade with real customers.",
        tech: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
        accent: "#38bdf8",
        icon: "💧",
        current: true,
    },
    {
        company: "WasteCo",
        role: "Web Developer",
        period: "Dec 2025 – Feb 2026",
        location: "UAE (Remote)",
        desc: "Designed and delivered a polished company landing page for a waste management firm. Built with React and Vite for blazing-fast load times, Tailwind CSS for responsive design, and integrated a lead-capture form with Formspree.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        accent: "#10b981",
        icon: "♻️",
        current: false,
    },
    {
        company: "EtooPlay Information Technology",
        role: "Software Analyst",
        period: "Sep 2023 - Mar 2024",
        location: "Sudan (Remote)",
        desc: "Analyzed and optimized the full system for a businesses search engine company. Lead a team of combined of front-end and back-end developers. Implemented new features and improved performance.",
        tech: ["Flutter", "Laravel", "MySQL", "REST APIs"],
        accent: "#f59e0b",
        icon: "📱",
        current: false,
    }
];

function ExperienceCard({ exp, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ x: 4 }}
            style={{
                display: "flex",
                gap: 0,
                position: "relative",
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: 20,
                overflow: "hidden",
                transition: "border-color 0.3s",
            }}
        >
            {/* Left accent stripe */}
            <div style={{ width: 4, flexShrink: 0, background: exp.accent, borderRadius: "20px 0 0 20px" }} />

            <div style={{ padding: "32px 32px 28px", flex: 1 }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                        <span style={{ fontSize: 28 }}>{exp.icon}</span>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.01em" }}>
                                    {exp.company}
                                </h3>
                                {exp.current && (
                                    <span style={{ padding: "2px 10px", background: `${exp.accent}22`, border: `1px solid ${exp.accent}55`, borderRadius: 9999, fontFamily: "monospace", fontSize: 9, letterSpacing: "0.2em", color: exp.accent, textTransform: "uppercase" }}>
                                        Current
                                    </span>
                                )}
                            </div>
                            <p style={{ fontFamily: "monospace", fontSize: 12, letterSpacing: "0.15em", color: exp.accent, textTransform: "uppercase", marginTop: 4 }}>
                                {exp.role}
                            </p>
                        </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <p style={{ fontFamily: "monospace", fontSize: 11, color: "#64748b", letterSpacing: "0.05em" }}>{exp.period}</p>
                        <p style={{ fontFamily: "monospace", fontSize: 11, color: "#475569", marginTop: 2 }}>{exp.location}</p>
                    </div>
                </div>

                {/* Description */}
                <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.75, fontFamily: "Georgia, serif", marginBottom: 20 }}>
                    {exp.desc}
                </p>

                {/* Tech chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {exp.tech.map((t) => (
                        <span
                            key={t}
                            style={{
                                padding: "4px 12px",
                                background: `${exp.accent}14`,
                                border: `1px solid ${exp.accent}35`,
                                borderRadius: 9999,
                                fontFamily: "monospace",
                                fontSize: 10,
                                letterSpacing: "0.1em",
                                color: exp.accent,
                                textTransform: "uppercase",
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section id="experience" style={{ background: BG, padding: "120px 0 100px" }}>
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: 72, padding: "0 24px" }}
            >
                <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "#34d399", display: "block", marginBottom: 16 }}>
                    ⟨ Professional Work ⟩
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                    Experience &{" "}
                    <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(135deg, #10b981 0%, #38bdf8 100%)" }}>
                        Impact
                    </span>
                </h2>
                <p style={{ color: "#64748b", fontSize: 16, marginTop: 18, fontFamily: "Georgia, serif", maxWidth: 460, margin: "18px auto 0", lineHeight: 1.7 }}>
                    Real clients. Real products. Real responsibility.
                </p>
            </motion.div>

            {/* Cards */}
            <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 24 }}>
                {EXPERIENCES.map((exp, i) => (
                    <ExperienceCard key={exp.company} exp={exp} index={i} />
                ))}
            </div>
        </section>
    );
}
