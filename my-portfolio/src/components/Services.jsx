import { motion } from "framer-motion";

const serviceData = [
  { 
    title: "Web & Mobile", 
    desc: "Full-stack ecosystems built with React & React Native.", 
    icon: "🌐",
    glow: "shadow-blue-500/20" 
  },
  { 
    title: "AI Research & Agents", 
    desc: "ML/DL Research, custom AI Agents, and Bot Assistants.", 
    icon: "🤖",
    glow: "shadow-purple-500/40",
    special: true // We'll give this extra flair
  },
  { 
    title: "Data Intelligence", 
    desc: "Deep-dive analysis and PowerBI storytelling.", 
    icon: "📊",
    glow: "shadow-emerald-500/20" 
  }
];

export default function Services() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center snap-start bg-slate-950 p-6">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-12"
      >
        My Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {serviceData.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl ${service.glow}`}
          >
            {/* The "Neural" Pulse for AI service */}
            {service.special && (
              <motion.div 
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute inset-0 bg-purple-500 rounded-3xl filter blur-xl"
              />
            )}

            <div className="relative z-10">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}