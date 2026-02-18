import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Move, RefreshCcw, Loader2 } from 'lucide-react';

const InteractionShowcase: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Interactions</h2>
            <p className="text-gray-400 max-w-xl">
                Micro-interactions are the soul of digital products. They provide feedback, guide tasks, and enhance the sense of direct manipulation.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <motion.div 
                className="aspect-square rounded-3xl bg-black border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="z-10">
                    <h3 className="text-xl font-bold">Physics Hover</h3>
                    <p className="text-xs text-gray-500 mt-1">Move your mouse</p>
                </div>
                <div className="flex items-center justify-center h-full z-10">
                    <motion.div 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="w-16 h-16 bg-white rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer"
                    />
                </div>
                <MousePointer2 className="absolute bottom-6 right-6 text-gray-700" />
            </motion.div>

            <motion.div 
                className="aspect-square rounded-3xl bg-black border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden"
            >
                <div className="z-10">
                    <h3 className="text-xl font-bold">Click Feedback</h3>
                    <p className="text-xs text-gray-500 mt-1">Tap the button</p>
                </div>
                <div className="flex items-center justify-center h-full z-10">
                    <motion.button 
                        onClick={() => setClickCount(c => c + 1)}
                        whileTap={{ scale: 0.85 }}
                        className="px-6 py-3 bg-accent text-black font-bold rounded-lg shadow-[0_0_15px_rgba(223,255,0,0.4)] relative overflow-hidden"
                    >
                        <span className="relative z-10">Click Me ({clickCount})</span>
                        <motion.div 
                           className="absolute inset-0 bg-white"
                           initial={{ x: '-100%' }}
                           whileHover={{ x: '100%' }}
                           transition={{ duration: 0.4 }}
                        />
                    </motion.button>
                </div>
                <Loader2 className={`absolute bottom-6 right-6 text-gray-700 ${clickCount > 0 ? 'animate-spin' : ''}`} />
            </motion.div>

             <motion.div 
                className="aspect-square rounded-3xl bg-black border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden"
            >
                <div className="z-10">
                    <h3 className="text-xl font-bold">Drag Constraint</h3>
                    <p className="text-xs text-gray-500 mt-1">Pull the circle</p>
                </div>
                <div className="flex items-center justify-center h-full z-10 relative">
                    <div className="w-48 h-48 border-2 border-dashed border-white/10 rounded-full absolute flex items-center justify-center">
                        <motion.div 
                            drag
                            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                            dragElastic={0.2}
                            className="w-12 h-12 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-grab active:cursor-grabbing"
                        />
                    </div>
                </div>
                <Move className="absolute bottom-6 right-6 text-gray-700" />
            </motion.div>

             <motion.div 
                className="aspect-square rounded-3xl bg-black border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden"
            >
                <div className="z-10">
                    <h3 className="text-xl font-bold">Infinite Loop</h3>
                    <p className="text-xs text-gray-500 mt-1">Always moving</p>
                </div>
                <div className="flex items-center justify-center h-full z-10">
                    <motion.div 
                        animate={{ 
                            rotate: 360,
                            borderRadius: ["20%", "50%", "20%"],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="w-16 h-16 border-4 border-accent"
                    />
                </div>
                <RefreshCcw className="absolute bottom-6 right-6 text-gray-700" />
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InteractionShowcase;