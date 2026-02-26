import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

// ─── Project image imports ────────────────────────────────────────────────────
import signLinggoImg from "../assets/images/signlinggo-logo.jpg";
import elevateXImg from "../assets/images/elevatex-logo.jpg";
import pureLineImg from "../assets/images/Pureline-logo.png";
import wasteCoImg from "../assets/images/wasteco-logo.jpg";
import campusQuestImg from "../assets/images/campusquest-logo.jpg";

const EASE = [0.22, 1, 0.36, 1];

// ─── Project data ──────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        name: "SignLinggo",
        tagline: "Sign-language translation for the modern world.",
        desc: "A mobile application that bridges communication between deaf and hearing communities using real-time sign-language recognition. Features dedicated Learning and Communication modes, powered by a locally-run YOLO model. Built on the largest sign-language dataset compiled in Malaysia for this use case.",
        features: [
            "Real-time gesture recognition via on-device YOLO inference",
            "Dual-mode UX: Learning mode and live Communication mode",
            "Largest Malaysian sign-language dataset compiled for the field",
            "Cross-platform mobile, synced via Firebase and Supabase backends",
        ],
        tags: ["Flutter", "Firebase", "Supabase", "YOLO", "ML"],
        accent: "#a855f7",
        featured: true,
        role: "Lead Developer",
        impact: "Largest MY dataset",
        github: "https://github.com/SECJ3104-03/signLinggo",
        image: signLinggoImg,
    },
    {
        name: "ElevateX",
        tagline: "Skill-based learning, built in 48 hours.",
        desc: "A full-stack learning platform built for the ITMO University Business School Hackathon, where it placed 2nd. ElevateX maps personal skill gaps and serves curated learning quests. Designed and engineered under pressure — from whiteboard to deployed prototype in under two days.",
        features: [
            "Skill gap analysis engine with personalized quest assignment",
            "Flutter mobile client with smooth state management",
            "Node.js + Express REST API with MongoDB persistence",
            "Delivered from zero to demo in a 48-hour hackathon window",
        ],
        tags: ["Flutter", "Node.js", "Express", "MongoDB"],
        accent: "#f59e0b",
        featured: true,
        role: "Lead Developer",
        impact: "2nd · ITMO Hackathon",
        github: "https://github.com/AhmedSocrates/ElevateX",
        image: elevateXImg,
    },
    {
        name: "PureLine RO",
        tagline: "Production e-commerce for a UAE water solutions company.",
        desc: "A full-scale MERN e-commerce platform serving PureLine RO Water Solutions in the UAE. Handles product catalog, cart and checkout flow, order management, and a client portal. Built to production standards with real customers and live transactions.",
        features: [
            "Full e-commerce flow: catalog, cart, checkout, order tracking",
            "Admin dashboard for product and order management",
            "MongoDB + Express API with authentication and role-based access",
            "Deployed and live — real users, real transactions",
        ],
        tags: ["MongoDB", "Express", "React", "Node.js"],
        accent: "#38bdf8",
        featured: true,
        role: "Software Engineer",
        impact: "Production · UAE",
        github: "https://github.com/AhmedSocrates/PureLine",
        image: pureLineImg,
    },
    {
        name: "WasteCo",
        tagline: "A clean landing for a waste management company.",
        desc: "Company landing page for a waste management firm. Fast, responsive, and production-ready with integrated lead capture. Built with React, TypeScript, and Vite for optimal performance and developer experience.",
        features: [
            "Precise, responsive layout for marketing and brand clarity",
            "Formspree-powered lead capture with validation",
            "Tailwind CSS v4 for tight typographic and spacing control",
            "Production deployed — live, indexed, and accessible",
        ],
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        accent: "#10b981",
        featured: false,
        role: "Web Developer",
        impact: "Production · Live",
        github: "https://github.com/AhmedSocrates/WasteCo",
        image: wasteCoImg,
    },
    {
        name: "AI Agents & Automation",
        tagline: "Custom AI workflows for real business operations.",
        desc: "End-to-end AI agent systems designed and deployed for companies and individuals. Covers chatbots, decision-support tools, internal automation, and CRM integrations — all orchestrated through n8n and powered by LLM APIs.",
        features: [
            "Custom chatbots with business context and memory",
            "n8n-based workflow automation for internal operations",
            "Integrations across APIs, CRMs, and messaging platforms",
            "Focus on productivity, business decision support, and scale",
        ],
        tags: ["n8n", "OpenAI", "APIs", "CRM"],
        accent: "#ec4899",
        featured: false,
        role: "AI Engineer",
        impact: "Client Deployments",
        github: null,
    },
    {
        name: "NileCare",
        tagline: "A mental health hub for university students.",
        desc: "A web platform connecting UTM students to mental health resources, peer support, and professional guidance. Designed with a calm aesthetic and low-friction UX to reduce barriers to access.",
        features: [
            "Resource directory and guided onboarding flow",
            "Thymeleaf server-side rendering with Spring Boot backend",
            "Calm, accessible design — intentionally minimal",
            "Authentication and personalized resource recommendations",
        ],
        tags: ["Spring Boot", "Thymeleaf", "MySQL"],
        accent: "#3b82f6",
        featured: false,
        role: "Full-Stack Dev",
        impact: "Student Platform",
        github: null,
    },
    {
        name: "CampusQuest",
        tagline: "A Java platformer where your GPA is the mechanic.",
        desc: "A 2D Mario-style game built entirely in Java, where academic performance (GPA) translates directly into in-game power and character state. An exploration of OOP design, game loops, collision systems, and creative programming.",
        features: [
            "GPA-driven character stats and level progression",
            "Custom game loop with collision detection and physics",
            "State machine for player and enemy behavior",
            "Built with clean OOP architecture — no game engine",
        ],
        tags: ["Java", "OOP", "Game Dev"],
        accent: "#f59e0b",
        featured: false,
        role: "Game Developer",
        impact: "Academic Project",
        github: "https://github.com/AhmedSocrates/Mario",
        image: campusQuestImg,
    },
    {
        name: "Memory Simulator",
        tagline: "Visualizing OS memory allocation in real time.",
        desc: "A Python-based interactive visualizer for classic memory management algorithms. Demonstrates First-Fit and Next-Fit allocation strategies with real-time stats, helping learners internalize OS fundamentals through visual feedback.",
        features: [
            "First-Fit and Next-Fit algorithm visualizations",
            "Real-time block allocation and deallocation display",
            "Fragmentation statistics and memory utilization tracking",
            "Built in Python with a minimal, readable interface",
        ],
        tags: ["Python", "Algorithms", "OS Concepts"],
        accent: "#10b981",
        featured: false,
        role: "Systems Dev",
        impact: "Educational Tool",
        github: "https://github.com/AhmedSocrates/Memory-Management",
    },
    {
        name: "Flappy Ahmed",
        tagline: "A personal spin on a classic — built in Java.",
        desc: "A custom Flappy Bird-inspired game with original character art, environment design, and gameplay modifications. Built as a creative exploration of Java 2D graphics, physics simulation, and game architecture.",
        features: [
            "Custom-drawn characters and scrolling environment",
            "Adjustable difficulty and physics parameters",
            "Score persistence and game state management",
            "Java 2D graphics with frame-based animation",
        ],
        tags: ["Java", "2D Graphics", "Game Dev"],
        accent: "#a855f7",
        featured: false,
        role: "Game Developer",
        impact: "Creative Build",
        github: null,
    },
];

// ─── Stroke Icons ─────────────────────────────────────────────────────────────
function IconExternal({ color = "#64748b" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 1h4v4M13 1L6 8M5 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3"
                stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconClose({ color = "#64748b" }) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 3 3 13M3 3l10 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

// ─── Image Placeholder / Renderer ─────────────────────────────────────────────
function ImagePlaceholder({ accent, name, compact = false, src = null }) {
    if (src) {
        return (
            <div
                style={{
                    width: "100%",
                    height: compact ? 160 : 200,
                    borderRadius: compact ? 10 : 14,
                    overflow: "hidden",
                    border: `1px solid ${accent}40`,
                    flexShrink: 0,
                    position: "relative",
                    background: "#0d1526"
                }}
            >
                <img
                    src={src}
                    alt={`${name} screenshot`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                    }}
                />
            </div>
        );
    }

    return (
        <div
            style={{
                width: "100%",
                height: compact ? 160 : 200,
                background: `linear-gradient(135deg, #0d1526 0%, ${accent}12 100%)`,
                border: `1px solid ${accent}25`,
                borderRadius: compact ? 10 : 14,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
            }}
        >
            {/* Grid lines for "screenshot" feel */}
            <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
                {[20, 40, 60, 80].map(y => <line key={y} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke={accent} strokeWidth="1" />)}
                {[20, 40, 60, 80].map(x => <line key={x} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke={accent} strokeWidth="1" />)}
            </svg>

            {/* Corner brackets */}
            {[[0, 0, "0 0 8px 0", "tl"], [0, 0, "0 8px 0 0", "tr"], [0, 0, "8px 0 0 0", "bl"], [0, 0, "0 0 0 8px", "br"]].map(([_a, _b, _r, pos]) => (
                <div
                    key={pos}
                    style={{
                        position: "absolute",
                        width: 18, height: 18,
                        ...(pos === "tl" ? { top: 12, left: 12, borderTop: `1.5px solid ${accent}`, borderLeft: `1.5px solid ${accent}` } : {}),
                        ...(pos === "tr" ? { top: 12, right: 12, borderTop: `1.5px solid ${accent}`, borderRight: `1.5px solid ${accent}` } : {}),
                        ...(pos === "bl" ? { bottom: 12, left: 12, borderBottom: `1.5px solid ${accent}`, borderLeft: `1.5px solid ${accent}` } : {}),
                        ...(pos === "br" ? { bottom: 12, right: 12, borderBottom: `1.5px solid ${accent}`, borderRight: `1.5px solid ${accent}` } : {}),
                    }}
                />
            ))}

            <span
                style={{
                    fontFamily: "monospace",
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: `${accent}77`,
                }}
            >
                {name} · Screenshot
            </span>
            <span
                style={{
                    fontFamily: "monospace",
                    fontSize: 8,
                    letterSpacing: "0.15em",
                    color: "#1e293b",
                    textTransform: "uppercase",
                }}
            >
                [ Replace with actual image ]
            </span>
        </div>
    );
}

// ─── Project Modal ────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
    // Close on ESC
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isMobile ? 0.15 : 0.25 }}
            onClick={onClose}
            style={{
                position: "fixed", inset: 0, zIndex: 1000,
                background: "rgba(2,8,23,0.82)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "24px",
                overflowY: "auto",
            }}
        >
            <motion.div
                key="panel"
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 10 }}
                transition={{ duration: isMobile ? 0.25 : 0.38, ease: EASE }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "100%",
                    maxWidth: 680,
                    background: "#0a0f1e",
                    border: `1px solid ${project.accent}33`,
                    borderRadius: 22,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${project.accent}18`,
                }}
            >
                {/* Top accent bar */}
                <div style={{ height: 2, background: `linear-gradient(90deg, ${project.accent}, ${project.accent}44, transparent)` }} />

                {/* Header */}
                <div style={{ padding: "28px 32px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: 1, paddingRight: 16 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                            <span
                                style={{
                                    fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em",
                                    color: project.accent, textTransform: "uppercase",
                                    background: `${project.accent}15`, border: `1px solid ${project.accent}35`,
                                    padding: "3px 10px", borderRadius: 9999,
                                }}
                            >
                                {project.role}
                            </span>
                            {project.impact && (
                                <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.1em", color: "#475569" }}>
                                    {project.impact}
                                </span>
                            )}
                        </div>
                        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 900, color: "#f8fafc", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                            {project.name}
                        </h2>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#64748b", marginTop: 8, fontStyle: "italic" }}>
                            {project.tagline}
                        </p>
                    </div>
                    <motion.button
                        onClick={onClose}
                        whileHover={{ background: "#1e293b" }}
                        style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #1e293b", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, transition: "background 0.2s" }}
                    >
                        <IconClose color="#64748b" />
                    </motion.button>
                </div>

                {/* Image placeholder / renderer */}
                <div style={{ padding: "24px 32px 0" }}>
                    <ImagePlaceholder accent={project.accent} name={project.name} src={project.image} compact={false} />
                </div>

                {/* Body */}
                <div style={{ padding: "24px 32px 32px", display: "flex", flexDirection: "column", gap: 24 }}>

                    {/* Overview */}
                    <p style={{ fontFamily: "Georgia, serif", fontSize: 15, color: "#94a3b8", lineHeight: 1.78 }}>
                        {project.desc}
                    </p>

                    {/* Key features */}
                    <div>
                        <h3 style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: project.accent, letterSpacing: "0.08em", marginBottom: 14, textTransform: "uppercase" }}>
                            Key Features
                        </h3>
                        <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0, margin: 0 }}>
                            {project.features.map((f, i) => (
                                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: project.accent, flexShrink: 0, marginTop: 7 }} />
                                    <span style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#64748b", lineHeight: 1.65 }}>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech stack */}
                    <div>
                        <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em", color: project.accent, textTransform: "uppercase", marginBottom: 12 }}>
                            Tech Stack
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        padding: "5px 13px",
                                        background: `${project.accent}14`,
                                        border: `1px solid ${project.accent}35`,
                                        borderRadius: 9999,
                                        fontFamily: "monospace",
                                        fontSize: 11,
                                        letterSpacing: "0.1em",
                                        color: project.accent,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* GitHub link */}
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex", alignItems: "center", gap: 8,
                                fontFamily: "monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                                color: project.accent, textDecoration: "none",
                                padding: "10px 20px",
                                border: `1px solid ${project.accent}40`,
                                borderRadius: 9999,
                                alignSelf: "flex-start",
                                transition: "background 0.2s",
                            }}
                        >
                            View Repository
                            <IconExternal color={project.accent} />
                        </a>
                    ) : (
                        <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.15em", color: "#334155", textTransform: "uppercase" }}>
                            Repository — Private / Not yet public
                        </p>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onOpen }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.35 : 0.52, delay: (index % 3) * 0.09, ease: EASE }}
            viewport={{ once: true, amount: 0.12 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ y: -6 }}
            onClick={() => onOpen(project)}
            style={{
                background: "#0f172a",
                border: `1px solid ${hovered ? project.accent + "44" : "#1e293b"}`,
                borderRadius: 18,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "border-color 0.28s, box-shadow 0.28s",
                boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${project.accent}22` : "none",
                position: "relative",
            }}
        >
            {/* Image placeholder — brightens on hover */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0.75 }}
                transition={{ duration: 0.28 }}
            >
                <ImagePlaceholder accent={project.accent} name={project.name} src={project.image} compact />
            </motion.div>

            {/* Card body */}
            <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>

                {/* Featured + role row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                    <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.14em", color: project.accent, textTransform: "uppercase" }}>
                        {project.role}
                    </span>
                    {project.featured && (
                        <span
                            style={{
                                padding: "2px 9px",
                                background: `${project.accent}18`,
                                border: `1px solid ${project.accent}40`,
                                borderRadius: 9999,
                                fontFamily: "monospace",
                                fontSize: 9,
                                letterSpacing: "0.18em",
                                color: project.accent,
                                textTransform: "uppercase",
                            }}
                        >
                            Featured
                        </span>
                    )}
                </div>

                {/* Name */}
                <h3
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 20,
                        fontWeight: 900,
                        color: "#f1f5f9",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                    }}
                >
                    {project.name}
                </h3>

                {/* Description — capped at 2 lines */}
                <p
                    style={{
                        color: "#64748b",
                        fontSize: 13,
                        lineHeight: 1.68,
                        fontFamily: "Georgia, serif",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        flex: 1,
                    }}
                >
                    {project.desc}
                </p>

                {/* Tech row */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: "3px 9px",
                                borderRadius: 9999,
                                background: `${project.accent}12`,
                                border: `1px solid ${project.accent}30`,
                                fontFamily: "monospace",
                                fontSize: 9,
                                letterSpacing: "0.1em",
                                color: project.accent,
                                textTransform: "uppercase",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span style={{ fontFamily: "monospace", fontSize: 9, color: "#334155", letterSpacing: "0.1em", alignSelf: "center" }}>
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>

                {/* "View details" hint on hover */}
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
                    transition={{ duration: 0.22 }}
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                    <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: project.accent }}>
                        View Details
                    </span>
                    <IconExternal color={project.accent} />
                </motion.div>
            </div>

            {/* Bottom gradient line reveal */}
            <motion.div
                animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${project.accent}, ${project.accent}22)`,
                    transformOrigin: "left",
                }}
            />
        </motion.div>
    );
}

// ─── Root export ───────────────────────────────────────────────────────────────
export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);
    const close = useCallback(() => setActiveProject(null), []);

    return (
        <>
            <section id="projects" style={{ background: "#0a0f1e", padding: "120px 0 100px" }}>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.45 : 0.7, ease: EASE }}
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
                    <p style={{ color: "#64748b", fontSize: 16, fontFamily: "Georgia, serif", maxWidth: 440, margin: "18px auto 0", lineHeight: 1.72 }}>
                        From hackathon wins to production systems. Click any card to explore.
                    </p>
                </motion.div>

                {/* Grid */}
                <div
                    style={{
                        maxWidth: 1100,
                        margin: "0 auto",
                        padding: "0 24px",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 20,
                    }}
                >
                    {PROJECTS.map((project, i) => (
                        <ProjectCard
                            key={project.name}
                            project={project}
                            index={i}
                            onOpen={setActiveProject}
                        />
                    ))}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {activeProject && (
                    <ProjectModal project={activeProject} onClose={close} />
                )}
            </AnimatePresence>
        </>
    );
}
