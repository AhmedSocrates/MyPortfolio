import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

export const SERVICES_DATA = [
  {
    id: "software-consultation",
    title: "Software Consultation & System Analysis",
    shortDescription: "Architectural blueprints and system designs to prevent expensive coding mistakes.",
    accent: "#38bdf8",
    special: true,
    slides: [
      {
        headline: "Great Ideas Fail Because of Bad Foundations.",
        body: "You have a brilliant vision for a software product, but the technical landscape is overwhelming. Making the wrong choices early on—picking the wrong database, a rigid architecture, or an incompatible tech stack—can lead to months of expensive rewrites down the road. I step in to prevent that."
      },
      {
        headline: "Blueprinting Your Software's Future.",
        body: "Before a single line of code is written, we need a blueprint. I analyze your business requirements to design a system that can handle your expected user load. Whether that means starting with a clean, manageable Monolith to get to market quickly, or planning for a decoupled architecture as you scale, I ensure your system is built to breathe and grow."
      },
      {
        headline: "System Design in Action: E-Commerce & Real-Time Apps.",
        body: "Imagine you are building a scalable marketplace. If we tightly couple your inventory system with your payment gateway, a crash in one takes down the other. By applying the right system design, we can separate these concerns. If traffic spikes during a flash sale, your frontend stays lightning-fast while the backend safely queues the heavy processing."
      },
      {
        headline: "Solving Problems with Proven Patterns.",
        body: "I don't reinvent the wheel; I use industry-standard software design patterns to keep your codebase clean, testable, and maintainable. Depending on your system's needs, I implement patterns like MVC for clean UI separation, Observer for real-time event handling, Singleton for efficient resource management, and the Repository Pattern to cleanly manage data access."
      },
      {
        headline: "Picking the Right Tool for the Job.",
        body: "I don't force a 'one size fits all' framework. I tailor the tech stack to your exact use case: MERN Stack for dynamic, fast startup MVPs. Java Spring Boot for secure, enterprise-level backend systems. Flutter + Node.js/Firebase for high-performance, cross-platform mobile apps."
      },
      {
        headline: "Build with Confidence.",
        body: "Don't guess your way through technical decisions. You provide the business logic, and I will provide the technical roadmap, documentation standards, and architectural guidance to make it a reality."
      }
    ]
  },
  {
    id: "full-stack-saas",
    title: "Full-Stack & SaaS Systems",
    shortDescription: "Designing and building complete software systems — from MVPs to production-grade SaaS platforms.",
    accent: "#10b981",
    slides: [{
        headline: "Don't Build What Nobody Wants.",
        body: "The biggest mistake founders make is rushing into development. Building a full SaaS platform is an investment, and spending months coding features your users don't actually need is a guaranteed way to burn through your budget. I help you avoid the 'build trap.'"
      },
      {
        headline: "Honest Feedback Before the First Line of Code.",
        body: "Before we build, we validate. I conduct technical and market research on your idea to see if it actually has legs. We will look at competitors, assess the market gap, and I will give you a candid, objective assessment of whether the product is viable and worth your investment to build."
      },
      {
        headline: "Scoping the Perfect MVP.",
        body: "We don't build everything at once. I help you map out your feature wishlist based on two vital metrics: Complexity vs. Uniqueness/Value. We ruthlessly cut high-complexity, low-value features to define a lean, powerful Minimum Viable Product (MVP). We focus only on the core features that solve the user's main problem, getting you to market—and generating feedback—faster."
      },
      {
        headline: "Powering Your Platform.",
        body: "Once the MVP is scoped, we select the perfect backend architecture. Node.js & Express (MERN): The ideal choice for fast-paced startups; lightweight, flexible, and perfect for real-time apps. Java Spring Boot: If we are building an enterprise-grade platform with complex business rules, strict security, or heavy data processing, this is the heavy-duty engine we will use."
      },
      {
        headline: "Interfaces Your Users Will Love.",
        body: "A SaaS is only as good as its user experience. React: For complex web platforms, dashboards, and admin panels, I build highly interactive and responsive UIs. Flutter + Firebase / Supabase: If your SaaS needs to be mobile-first, I build beautiful, natively compiled apps for both iOS and Android from a single codebase, backed by real-time cloud databases."
      },
      {
        headline: "From Concept to Revenue-Ready.",
        body: "You get a technical partner who cares about your product's success. From the initial market analysis to the final launch of your complete frontend, backend, and database, I build full-stack systems designed to attract users and scale smoothly."
      }]
  },
  {
    id: "deployment-integration",
    title: "Deployment & Integration Services",
    shortDescription: "Handling deployment pipelines, domain setup, hosting, CI/CD, and third-party integrations.",
    accent: "#6366f1",
    slides: [{
        headline: "\"It Works on My Machine\" Isn't Good Enough.",
        body: "You’ve spent months building a fantastic application, but getting it live on the internet can be a nightmare of configuration files, broken dependencies, and security risks. I take the stress out of launch day by handling the entire deployment pipeline, ensuring your app runs just as flawlessly in the real world as it did in development."
      },
      {
        headline: "Where Should Your App Live?",
        body: "Not every app needs a massive, expensive server, and not every app can survive on a basic shared hosting plan. I analyze your traffic expectations, budget, and tech stack to choose the perfect hosting environment. We will decide whether a managed platform (PaaS) or full cloud infrastructure (IaaS) is the right home for your code."
      },
      {
        headline: "Built for Speed and Global Reach.",
        body: "If you have a frontend-heavy application (like React) or rely on serverless architecture, we don't need to configure raw servers. Vercel is perfect for modern web apps, offering zero-configuration deployments and a global Edge Network. Cloudflare is excellent for security, caching, and running lightweight Edge workers to keep your app blazing fast and protected."
      },
      {
        headline: "Ultimate Power and Customization.",
        body: "If your system involves complex backend logic (like Spring Boot or Node.js), heavy databases, or AI model processing, we need raw power. Using AWS & Google Cloud Platform (GCP), I set up virtual servers, secure cloud storage, and managed databases. This gives you total control over your environment and custom microservices."
      },
      {
        headline: "Never Manually Upload Files Again.",
        body: "Deployment shouldn't be a manual, error-prone chore. I set up automated CI/CD pipelines (Continuous Integration / Continuous Deployment). Every time you push new code to your GitHub repository, the system will automatically test it and deploy the updates to your live server without any downtime."
      },
      {
        headline: "Scalable, Secure, and Live.",
        body: "From buying the domain to connecting the SSL certificates and routing the DNS, I handle the DevOps so you can focus on your business. Your application will be live, secure, and ready to handle its first user or its millionth."
      }]
  },
  {
    id: "ai-agents-automation",
    title: "AI Agents & Automation",
    shortDescription: "Building custom AI agents and automation workflows using tools like n8n and modern AI APIs.",
    accent: "#f59e0b",
    special: true,
    slides: [{
        headline: "Stop Paying Humans to Do Machine Work.",
        body: "Is your team drowning in repetitive tasks? Copy-pasting data across platforms, manually qualifying leads, or spending hours digging through internal documents? These bottlenecks kill productivity. I build intelligent AI agents that handle the heavy lifting, allowing your team to focus on high-value, creative work."
      },
      {
        headline: "Beyond Simple Chatbots.",
        body: "A standard chatbot just talks to you. An AI Agent actually does things. I build systems equipped with specific 'tools'—the ability to read your emails, query your secure databases, browse the web, and trigger actions in your other software. They don't just generate text; they execute workflows."
      },
      {
        headline: "Connecting Your Existing Apps Seamlessly.",
        body: "When you need to connect popular SaaS tools quickly, I use n8n. It is a powerful workflow automation tool that lets us wire AI directly into your current ecosystem. It's perfect for automated email triage, extracting data from invoices, or building a Slack bot that automatically summarizes daily Jira tickets."
      },
      {
        headline: "Complex Reasoning and Custom Data.",
        body: "When off-the-shelf tools aren't enough, I build custom AI architectures from scratch using LangChain (and Python/Node.js). This is ideal for specialized agents that need deep context, like an agent that uses RAG to read thousands of your proprietary PDFs, understand complex queries, and write highly technical reports with accurate citations."
      },
      {
        headline: "Real-World Use Cases.",
        body: "Matching the tool to the task: The Customer Support Triage (n8n) reads incoming tickets, categorizes urgency using an LLM, and instantly replies or routes to a human. The Financial Analyst Agent (LangChain) connects to your private database, interprets queries like 'Why did Q3 revenue drop?', writes the SQL, runs the analysis, and graphs the results."
      },
      {
        headline: "Scale Your Operations Without Scaling Your Headcount.",
        body: "Whether you need a simple visual workflow to speed up your sales pipeline or a complex, multi-agent system to revolutionize your internal R&D, I can build your automated AI workforce."
      }]
  },
  {
    id: "research-assistance",
    title: "Research Assistance (AI & Quantum)",
    shortDescription: "Assisting with research, experimentation, and technical documentation in artificial intelligence and quantum computing.",
    accent: "#ec4899",
    slides: [{
        headline: "Great Science Needs Great Software.",
        body: "You are pushing the boundaries of Artificial Intelligence or Quantum Computing, but translating complex mathematical theories and dense academic papers into efficient, working code is slowing you down. Messy scripts and unoptimized data pipelines lead to frustrating delays and unreproducible results. I step in to engineer your research."
      },
      {
        headline: "From ArXiv to PyTorch.",
        body: "I help researchers and R&D teams implement cutting-edge machine learning models. Whether it is a new neural network architecture from a recent paper or custom deep learning algorithms, I write clean, optimized, and heavily documented code (using PyTorch, TensorFlow, etc.) so you can run your experiments faster and at a larger scale."
      },
      {
        headline: "Navigating the Quantum Frontier.",
        body: "Quantum computing is transitioning from pure theory to practical experimentation. I assist teams in writing and testing quantum algorithms using frameworks like Qiskit. I help translate classical problems into quantum circuits, set up simulations, and manage the technical overhead of running experiments on quantum hardware or simulators."
      },
      {
        headline: "Experiment Tracking & Data Pipelines.",
        body: "In research, an experiment is useless if it can't be reproduced. I don't just write scripts; I build robust data pipelines. I set up professional tracking tools to monitor model training metrics, manage massive datasets cleanly, and ensure every variable is logged, making your eventual publication or product launch bulletproof."
      },
      {
        headline: "Organizing the Chaos of Innovation.",
        body: "Innovation requires digesting a massive amount of existing research. I assist by conducting technical literature reviews, summarizing complex methodologies, and writing clear, comprehensive documentation for the codebases we build. When it is time to publish or present to stakeholders, your technical foundation will be flawless."
      },
      {
        headline: "Focus on the Science, I'll Handle the Code.",
        body: "Let’s accelerate your R&D timeline. You bring the domain expertise and theoretical vision, and I will provide the software engineering rigor to turn those concepts into tangible, testable realities."
      }]
  },
  {
    id: "career-branding",
    title: "Career & Technical Branding",
    shortDescription: "Crafting professional CVs, cover letters, and LinkedIn profiles for technical professionals.",
    accent: "#22c55e",
    slides: [
      {
        headline: "Writing Code and Writing a Resume are Two Different Skills.",
        body: "You might be a brilliant programmer who builds highly scalable systems, but if your resume doesn't reflect that, you will get filtered out before a human ever sees it. The modern tech hiring process is brutal, and getting lost in the 'ATS Black Hole' (Applicant Tracking Systems) is the #1 reason great engineers get ghosted. I fix that."
      },
      {
        headline: "Beating the Bots and Impressing the Engineering Manager.",
        body: "I don't write fluffy resumes; I write technical documents designed to convert. I restructure your CV to pass strict ATS filters while highlighting what engineering managers actually care about: quantifiable impact. We will translate 'worked on the backend' into 'architected a Node.js microservice that reduced API latency by 40%.'"
      },
      {
        headline: "Show, Don't Just Tell.",
        body: "A recruiter might read your resume, but a Senior Engineer is going to look at your GitHub. A repository full of undocumented code or generic tutorials is a red flag. I help you curate a professional technical portfolio. We will structure your best projects, write compelling README.md files with architecture diagrams, and ensure your code is presentable and production-like."
      },
      {
        headline: "Turning Your Profile into a Recruiter Magnet.",
        body: "Tech recruiters actively hunt for talent using specific keyword searches (e.g., 'React', 'Spring Boot', 'AWS'). I optimize your LinkedIn profile's SEO so you rank higher in those searches. From a strong technical headline to a compelling 'About' section that tells your engineering story, I make sure opportunities come to you."
      },
      {
        headline: "Translating Tech into Business Value.",
        body: "Companies don't just hire you to write code; they hire you to solve business problems. I help you craft targeted cover letters and professional summaries that connect your technical skills to real-world outcomes. Whether you are a junior developer looking for your first break or a mid-level engineer aiming for a senior role, we will perfect your professional narrative."
      },
      {
        headline: "Stop Getting Ghosted. Get Hired.",
        body: "Don't let a poorly formatted document stand between you and your dream tech job. Let's build a cohesive, powerful personal brand that showcases your true technical depth and lands you the interviews you actually deserve."
      }
    ]
  }
];

function ServiceModal({ service, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const hasSlides = service.slides && service.slides.length > 0;
  const isLastSlide = hasSlides ? currentSlide === service.slides.length - 1 : true;

  const handleNext = () => {
    if (isLastSlide && hasSlides) {
      onClose();
      // Scroll to #contact
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (hasSlides && currentSlide < service.slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }
    })
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(2, 8, 23, 0.6)",
          backdropFilter: "blur(12px)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: 24,
            width: "100%",
            maxWidth: 600,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            maxHeight: "90vh"
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          {/* Header */}
          <div style={{ padding: "30px 30px 0 30px" }}>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 24,
                fontWeight: 900,
                color: service.accent,
                marginBottom: 12,
              }}
            >
              {service.title}
            </h3>
          </div>

          {/* Slider Content */}
          <div style={{ position: "relative", flex: 1, minHeight: 250, display: "flex", alignItems: "center", overflow: "hidden", padding: "20px 30px" }}>
            {hasSlides ? (
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ width: "100%" }}
                >
                  <h4 style={{ fontSize: 20, fontWeight: "bold", color: "#fff", marginBottom: 16 }}>
                    {service.slides[currentSlide].headline}
                  </h4>
                  <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.6 }}>
                    {service.slides[currentSlide].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div style={{ color: "#94a3b8", padding: "20px 0" }}>
                Detailed service information is currently being updated. Please check back later or contact me directly!
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div style={{ padding: "20px 30px 30px 30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 12 }}>
              {hasSlides && currentSlide > 0 ? (
                <button
                  onClick={handlePrev}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  Previous
                </button>
              ) : <div />}
            </div>

            {hasSlides ? (
              <button
                onClick={handleNext}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  background: isLastSlide ? "linear-gradient(135deg, #3b82f6, #a855f7)" : "rgba(255,255,255,0.1)",
                  color: "#fff",
                  fontWeight: 600,
                  transition: "opacity 0.2s",
                  cursor: "pointer"
                }}
              >
                {isLastSlide ? "Hire Me" : "Next"}
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #3b82f6, #a855f7)",
                  color: "#fff",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Hire Me
              </button>
            )}
          </div>

          {/* Progress Indicator */}
          {hasSlides && (
            <div style={{ position: "absolute", bottom: 15, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
              {service.slides.map((_, i) => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === currentSlide ? service.accent : "rgba(255,255,255,0.2)" }} />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section
      id="services"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#020817",
        padding: "80px 24px",
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
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={service.id}
            onClick={() => setActiveService(service)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, boxShadow: `0 0 20px ${service.accent}40`, borderColor: service.accent }}
            transition={{ delay: index * 0.1, duration: isMobile ? 0.35 : 0.5 }}
            style={{
              flex: "1 1 300px",
              maxWidth: 340,
              position: "relative",
              padding: 36,
              borderRadius: 24,
              background: "#0f172a",
              border: "1px solid #1e293b",
              boxShadow: `0 8px 40px rgba(0,0,0,0.4)`,
              overflow: "hidden",
              boxSizing: "border-box",
              cursor: "pointer"
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
                {service.shortDescription}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeService && (
          <ServiceModal
            service={activeService}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}