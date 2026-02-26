import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

const CONTACT_LINKS = [
    {
        label: "Email",
        value: "ahmedelfaki512@gmail.com",
        href: "mailto:ahmedelfaki512@gmail.com",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        accent: "#3b82f6",
        sublabel: "Say Hello",
    },
    {
        label: "GitHub",
        value: "ahmedsocrates",
        href: "https://github.com/ahmedsocrates",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
        accent: "#a855f7",
        sublabel: "See the Code",
    },
    {
        label: "LinkedIn",
        value: "Ahmed Elfaki",
        href: "www.linkedin.com/in/ahmed-elfaki-645251196",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        accent: "#38bdf8",
        sublabel: "Let's Connect",
    },
];

function ContactCard({ link, index }) {
    return (
        <motion.a
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.35 : 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ y: -8, borderColor: `${link.accent}66` }}
            style={{
                flex: "1 1 220px",
                maxWidth: 300,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 16,
                padding: "36px 28px",
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: 20,
                textDecoration: "none",
                transition: "border-color 0.3s",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
            }}
        >
            {/* Glow */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at 50% 0%, ${link.accent}18 0%, transparent 60%)`,
                    pointerEvents: "none",
                }}
            />

            {/* Icon */}
            <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: `${link.accent}18`,
                    border: `1px solid ${link.accent}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: link.accent,
                    zIndex: 1,
                }}
            >
                {link.icon}
            </motion.div>

            <div style={{ zIndex: 1 }}>
                <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: link.accent, marginBottom: 6 }}>
                    {link.sublabel}
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 900, color: "#f1f5f9", marginBottom: 6 }}>
                    {link.label}
                </h3>
                <p style={{ fontFamily: "monospace", fontSize: 12, color: "#64748b", wordBreak: "break-all" }}>
                    {link.value}
                </p>
            </div>
        </motion.a>
    );
}

export default function Contact() {
    return (
        <section id="contact" style={{ background: "#020817", padding: "120px 0 80px", position: "relative", overflow: "hidden" }}>
            {/* Ambient blobs */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", left: "10%", bottom: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }}
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                style={{ position: "absolute", right: "5%", top: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #ec4899 0%, transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }}
            />

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.45 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: 72, padding: "0 24px", position: "relative", zIndex: 1 }}
            >
                <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "#34d399", display: "block", marginBottom: 16 }}>
                    ⟨ Ready for deployment ⟩
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 20 }}>
                    Let's Build{" "}
                    <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(135deg, #f59e0b, #ec4899)" }}>
                        Your Vision.
                    </span>
                </h2>
                <p style={{ color: "#94a3b8", fontSize: "clamp(15px, 1.6vw, 18px)", maxWidth: 520, margin: "0 auto", lineHeight: 1.75, fontFamily: "Georgia, serif" }}>
                    Whether it's a production system, a mobile app, or an AI-powered tool —
                    I bring end-to-end technical execution and design craft.
                </p>
            </motion.div>

            {/* Contact cards */}
            <div
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    padding: "0 24px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 20,
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {CONTACT_LINKS.map((link, i) => (
                    <ContactCard key={link.label} link={link} index={i} />
                ))}
            </div>

            {/* Footer */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                style={{
                    textAlign: "center",
                    fontFamily: "monospace",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: "#334155",
                    marginTop: 80,
                    textTransform: "uppercase",
                }}
            >
                © 2025 Ahmed Elfaki · Designed & Engineered with intent.
            </motion.p>
        </section>
    );
}
