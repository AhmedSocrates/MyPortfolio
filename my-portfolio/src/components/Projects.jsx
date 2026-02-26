import { motion } from "framer-motion";
import { useState } from "react";

const BG = "#020817";

const PROJECTS = [
    {
        name: "SignLinggo",
        desc: "Mobile sign-language translation app with Learning & Communication modes. The largest dataset for this use case in Malaysia.",
        tags: ["Flutter", "Firebase", "Supabase", "YOLO", "ML"],
        accent: "#a855f7",
        icon: "🤟",
        featured: true,
        role: "Lead Developer",
        impact: "Largest MY dataset",
    },
    {
        name: "ElevateX",
        desc: "Skill-based learning platform that won 2nd place at ITMO University Business School Hackathon.",
        tags: ["Flutter", "Node.js", "Express", "MongoDB"],
        accent: "#f59e0b",
        icon: "🥈",
        featured: true,
        role: "Full-Stack Dev",
        impact: "2nd · ITMO Hackathon",
    },
    {
        name: "PureLine Website",
        desc: "Full e-commerce platform for a UAE water solutions company. Production-level MERN system handling real orders.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        accent: "#38bdf8",
        icon: "💧",
        featured: true,
        role: "Software Engineer",
        impact: "Production · UAE",
    },
    {
        name: "WasteCo Website",
        desc: "Company landing portfolio for a waste management firm built with modern React and Vite.",
        tags: ["React", "TypeScript", "Vite"],
        accent: "#10b981",
        icon: "♻️",
        role: "Web Developer",
        impact: "Production · Live",
    },
    {
        name: "AI Agents & Automation",
        desc: "Custom AI agent workflows for companies: chatbots, internal tools, CRM integrations, and productivity automation via n8n.",
        tags: ["n8n", "OpenAI", "APIs", "CRM"],
        accent: "#ec4899",
        icon: "🤖",
        role: "AI Engineer",
        impact: "Client Deployments",
    },
    {
        name: "NileCare",
        desc: "Mental health hub for UTM students, connecting them to resources and support in a calm, accessible interface.",
        tags: ["Spring Boot", "Thymeleaf", "MySQL"],
        accent: "#3b82f6",
        icon: "🧘",
        role: "Full-Stack Dev",
        impact: "Student Platform",
    },
    {
        name: "CampusQuest",
        desc: "2D Mario-style Java game where your GPA is the game mechanic. Built with OOP principles and a custom engine.",
        tags: ["Java", "OOP", "Game Dev"],
        accent: "#f59e0b",
        icon: "🎮",
        role: "Game Developer",
        impact: "Academic Project",
    },
    {
        name: "Memory Management Simulator",
        desc: "Python visualizer demonstrating First-Fit & Next-Fit memory allocation algorithms with real-time stats.",
        tags: ["Python", "Algorithms", "OS Concepts"],
        accent: "#10b981",
        icon: "💾",
        role: "Systems Dev",
        impact: "Educational Tool",
    },
    {
        name: "Flappy Ahmed",
        desc: "A custom Flappy Bird-inspired Java game with original characters, environment art, and gameplay tweaks.",
        tags: ["Java", "2D Graphics", "Game Dev"],
        accent: "#a855f7",
        icon: "🐦",
        role: "Game Developer",
        impact: "Fun + Learning",
    },
];

function TechBadge({ tag, accent }) {
    return (
        <span
            style={{
                display: "inline-block",
                padding: "3px 10px",
                borderRadius: 9999,
                background: `${accent}18`,
                border: `1px solid ${accent}40`,
                fontFamily: "monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: accent,
                textTransform: "uppercase",
            }}
        >
            {tag}
        </span>
    );
}

function ProjectCard({ project, index }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.15 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ y: -8 }}
            style={{
                background: "#0f172a",
                border: `1px solid ${hovered ? project.accent + "55" : "#1e293b"}`,
                borderRadius: 20,
                padding: "28px 28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s",
                cursor: "default",
            }}
        >
            {/* Glow top-right */}
            <motion.div
                animate={{ opacity: hovered ? 0.18 : 0.07 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    top: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: project.accent,
                    filter: "blur(48px)",
                    pointerEvents: "none",
                }}
            />

            {/* Featured badge */}
            {project.featured && (
                <span
                    style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        padding: "3px 10px",
                        background: `${project.accent}22`,
                        border: `1px solid ${project.accent}55`,
                        borderRadius: 9999,
                        fontFamily: "monospace",
                        fontSize: 9,
                        letterSpacing: "0.2em",
                        color: project.accent,
                        textTransform: "uppercase",
                    }}
                >
                    Featured
                </span>
            )}

            {/* Icon + Name */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, zIndex: 1 }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{project.icon}</span>
                <div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                        {project.name}
                    </h3>
                    <div style={{ display: "flex", gap: 8, marginTop: 5, flexWrap: "wrap" }}>
                        {project.role && (
                            <span style={{ fontFamily: "monospace", fontSize: 10, color: project.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                {project.role}
                            </span>
                        )}
                        {project.impact && (
                            <>
                                <span style={{ color: "#334155", fontSize: 10 }}>·</span>
                                <span style={{ fontFamily: "monospace", fontSize: 10, color: "#64748b", letterSpacing: "0.08em" }}>
                                    {project.impact}
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Description */}
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, fontFamily: "Georgia, serif", zIndex: 1 }}>
                {project.desc}
            </p>

            {/* Tech badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, zIndex: 1, marginTop: 4 }}>
                {project.tags.map((tag) => (
                    <TechBadge key={tag} tag={tag} accent={project.accent} />
                ))}
            </div>

            {/* Bottom accent line */}
            <motion.div
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${project.accent}, transparent)`,
                    transformOrigin: "left",
                }}
            />
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" style={{ background: "#0a0f1e", padding: "120px 0 100px" }}>
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: 72, padding: "0 24px" }}
            >
                <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 16 }}>
                    ⟨ What I've Built ⟩
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                    Selected{" "}
                    <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)" }}>
                        Projects
                    </span>
                </h2>
                <p style={{ color: "#64748b", fontSize: 16, marginTop: 18, fontFamily: "Georgia, serif", maxWidth: 480, margin: "18px auto 0", lineHeight: 1.7 }}>
                    From hackathon wins to production systems — projects that push boundaries.
                </p>
            </motion.div>

            {/* Grid */}
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    padding: "0 24px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: 24,
                }}
            >
                {PROJECTS.map((project, i) => (
                    <ProjectCard key={project.name} project={project} index={i} />
                ))}
            </div>
        </section>
    );
}
