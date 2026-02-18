import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
    { id: 'design', label: 'Design', x: 70, y: 10 },
    { id: 'strategy', label: 'Strategy', x: 220, y: -90 },
    { id: 'development', label: 'Development', x: -180, y: -60 },
    { id: 'marketing', label: 'Marketing', x: -140, y: 110 },
    { id: 'production', label: 'Production', x: 200, y: 80 },
];

const Collaboration: React.FC = () => {
  return (
    <section className="py-32 relative flex items-center justify-center bg-black overflow-hidden min-h-[800px]">

      <div className="absolute inset-0 pointer-events-none" 
           style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
           }}
      />

      <div className="absolute inset-0 pointer-events-none" 
           style={{ background: 'radial-gradient(circle at center, transparent 20%, #030305 100%)' }}
      />

      <div className="relative w-full max-w-5xl h-[600px] flex items-center justify-center">

        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-10 text-xl font-display font-bold text-gray-500 uppercase tracking-widest text-center"
        >
            Skills Ecosystem
        </motion.h2>

        <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_4px_rgba(223,255,0,0.6)] z-20"
        />
        
        <motion.div 
            animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent/30 rounded-full z-10"
        />

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {nodes.map((node, i) => (
                <motion.line
                    key={`line-${node.id}`}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${node.x}px)`}
                    y2={`calc(50% + ${node.y}px)`}
                    stroke="rgba(223, 255, 0, 0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 + (i * 0.1) }}
                />
            ))}
        </svg>

        {nodes.map((node, i) => (
            <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (i * 0.1), type: "spring", stiffness: 200 }}
                style={{ 
                    left: `calc(50% + ${node.x}px)`,
                    top: `calc(50% + ${node.y}px)`,
                    x: "-50%",
                    y: "-50%"
                }}
                className="absolute flex items-center justify-center px-6 py-3 rounded-full bg-[#0A0A0C] border border-white/10 shadow-xl backdrop-blur-md z-30 group cursor-default"
                whileHover={{ scale: 1.1, borderColor: "rgba(223,255,0,0.5)" }}
            >
                <span className="text-sm font-semibold text-gray-300 tracking-wide group-hover:text-white transition-colors">
                    {node.label}
                </span>
            </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collaboration;