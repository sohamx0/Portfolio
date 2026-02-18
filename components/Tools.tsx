import React from 'react';
import { motion } from 'framer-motion';

const tools = [
    "Python", "C++", "C", "Java",
    "React", "Next.js", "Tailwind", "Git",
    "Figma", "Three.js", "Blender", "SQL"
];

const Tools: React.FC = () => {
  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-16">
            <span className="text-gray-500">Built with</span> Modern Stack
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
                <motion.div
                    key={tool}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
                    className="h-24 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center backdrop-blur-sm group cursor-default"
                >
                    <span className="font-semibold text-gray-400 group-hover:text-white group-hover:text-glow transition-all duration-300">
                        {tool}
                    </span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;