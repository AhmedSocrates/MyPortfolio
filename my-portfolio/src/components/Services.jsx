import { motion } from "framer-motion";

const serviceData = [
  { title: "Web & Mobile", desc: "Full-stack apps.", color: "border-blue-500" },
  { title: "AI Research", desc: "ML/DL & AI Agents.", color: "border-purple-500" },
  { title: "Data Analysis", desc: "PowerBI & Insights.", color: "border-emerald-500" }
];

export default function Services() {
  return (
    <section className="h-screen w-full flex items-center justify-center snap-start bg-slate-900 p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {serviceData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`p-8 rounded-2xl bg-slate-800 border-b-4 ${item.color} shadow-2xl`}
          >
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="text-slate-400 mt-4">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}