import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center snap-start bg-slate-950 relative overflow-hidden">
      
      {/* Background Decorative Element (The "AI Core") */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="text-center px-6"
      >
        <motion.span 
          variants={itemVariants}
          className="text-blue-400 font-mono tracking-tighter text-sm uppercase mb-4 block"
        >
          [ Initializing Portfolio v1.0 ]
        </motion.span>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black text-white leading-none"
        >
          Building Digital <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">
            Intelligence.
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="mt-6 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          I am a Full-Stack Developer and AI Researcher. I bridge the gap between 
          complex Machine Learning architectures and beautiful, user-centric web applications.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-blue-400 transition-colors">
            View My Work
          </button>
          <button className="px-8 py-3 border border-slate-700 text-white font-bold rounded-full hover:bg-slate-800 transition-colors">
            My Research
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <span className="text-slate-500 text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}