import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

const serviceData = [
  {
    title: "Software Consultation & System Analysis",
    desc: "Providing architectural guidance, documentation standards, and system analysis to help individuals, startups, and companies design scalable and maintainable software solutions.",
    accent: "#38bdf8",
    special: true,
  },
  {
    title: "Full-Stack & SaaS Systems",
    desc: "Designing and building complete software systems — from MVPs to production-grade SaaS platforms — covering frontend, backend, databases, and system integration.",
    accent: "#10b981",
  },
  {
    title: "Deployment & Integration Services",
    desc: "Handling deployment pipelines, domain setup, hosting, CI/CD, and third-party integrations to ensure systems are reliable, secure, and production-ready.",
    accent: "#6366f1",
  },
  {
    title: "AI Agents & Automation",
    desc: "Building custom AI agents and automation workflows using tools like n8n and modern AI APIs to streamline operations, decision-making, and internal processes.",
    accent: "#f59e0b",
    special: true,
  },
  {
    title: "Research Assistance (AI & Quantum)",
    desc: "Assisting with research, experimentation, and technical documentation in artificial intelligence, machine learning, and quantum computing–related topics.",
    accent: "#ec4899",
  },
  {
    title: "Career & Technical Branding",
    desc: "Crafting professional CVs, cover letters, and LinkedIn profiles, along with full career portfolios tailored for software engineers and technical professionals.",
    accent: "#22c55e",
  },
];

export default function Services() {
  return (
    <section
      style={{
        minHeight: "100vh", // Changed from fixed height so it doesn't break on short screens
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#020817",
        padding: "80px 24px", // Added top/bottom padding so it never touches the edges
        boxSizing: "border-box",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: isMobile ? 0.4 : 0.6 }}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 900,
          color: "#ffffff",
          marginBottom: 56,
          letterSpacing: "-0.02em",
          textAlign: "center",
        }}
      >
        My Services
      </motion.h2>

      {/* CHANGED TO FLEXBOX FOR PERFECT CENTERING */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 28,
          maxWidth: 1100,
          width: "100%",
        }}
      >
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ delay: index * 0.1, duration: isMobile ? 0.35 : 0.5 }}
            style={{
              flex: "1 1 300px", // Allows cards to grow and shrink beautifully
              maxWidth: 340, // Prevents them from stretching too wide
              position: "relative",
              padding: 36,
              borderRadius: 24,
              background: "#0f172a",
              border: "1px solid #1e293b",
              boxShadow: `0 8px 40px rgba(0,0,0,0.4)`,
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Glow accent top-left */}
            <div
              style={{
                position: "absolute",
                top: -40,
                left: -40,
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: service.accent,
                filter: "blur(60px)",
                opacity: 0.15,
                pointerEvents: "none",
              }}
            />

            {/* Neural pulse for special card */}
            {service.special && (
              <motion.div
                animate={{ opacity: [0.06, 0.18, 0.06] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: service.accent,
                  borderRadius: 24,
                  filter: "blur(28px)",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Icon */}
              <div style={{ fontSize: 40, marginBottom: 16 }}>{service.icon}</div>

              {/* Accent bar */}
              <div
                style={{
                  width: 32,
                  height: 3,
                  borderRadius: 9999,
                  background: service.accent,
                  marginBottom: 16,
                }}
              />

              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#ffffff",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                  lineHeight: 1.7,
                  fontFamily: "Georgia, serif",
                }}
              >
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}