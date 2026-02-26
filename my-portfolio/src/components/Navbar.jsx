import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 30));

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 5vw, 60px)",
          height: 64,
          background: scrolled
            ? "rgba(2, 8, 23, 0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
        }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 24,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          AE
        </motion.a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              whileHover={{ color: "#93c5fd" }}
              style={{
                fontFamily: "monospace",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#94a3b8",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
                padding: "4px 0",
              }}
            >
              {link.label}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollTo("#contact")}
            whileHover={{ scale: 1.04, opacity: 0.9 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "9px 24px",
              background: "linear-gradient(135deg, #3b82f6, #a855f7)",
              color: "#fff",
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: 9999,
              border: "none",
              cursor: "pointer",
            }}
          >
            Hire Me
          </motion.button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
          className="hamburger-btn"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 7 }
                    : i === 2
                    ? { rotate: -45, y: -7 }
                    : { opacity: 0 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#94a3b8",
                borderRadius: 2,
                transformOrigin: "center",
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "72vw",
          maxWidth: 320,
          background: "rgba(10, 15, 30, 0.97)",
          backdropFilter: "blur(24px)",
          zIndex: 190,
          display: "flex",
          flexDirection: "column",
          padding: "80px 36px 40px",
          gap: 32,
          borderLeft: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <motion.button
            key={link.label}
            initial={{ opacity: 0, x: 20 }}
            animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: i * 0.06 }}
            onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 28,
              fontWeight: 900,
              color: "#e2e8f0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {link.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(2,8,23,0.6)",
            zIndex: 185,
          }}
        />
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
