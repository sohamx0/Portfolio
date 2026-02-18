import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const yGrid = useTransform(scrollY, [0, 500], [0, 200]);
  const yTitle = useTransform(scrollY, [0, 500], [0, 150]);
  const ySubtitle = useTransform(scrollY, [0, 500], [0, -100]);
  const yAccent = useTransform(scrollY, [0, 500], [0, 100]);
  const yButtons = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={ref} id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 overflow-hidden">
      <motion.div 
        style={{ y: yGrid, opacity: opacityFade }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="z-10 text-center px-4 max-w-7xl mx-auto relative">
        <motion.div
          style={{ y: ySubtitle, opacity: opacityFade }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="h-[1px] w-12 bg-gray-500/50"></span>
            <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-semibold">Creative Developer</p>
            <span className="h-[1px] w-12 bg-gray-500/50"></span>
          </motion.div>
        </motion.div>

        <motion.h1
          style={{ y: yTitle, opacity: opacityFade }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl lg:text-[12rem] leading-none font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)] select-none relative z-0"
        >
          PORTFOLIO
        </motion.h1>

        <motion.div
            style={{ y: yAccent, opacity: opacityFade }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 md:-mt-12 md:mr-40 flex justify-end relative z-10"
        >
            <p className="font-handwriting text-accent text-3xl md:text-4xl -rotate-6 neon-glow">
                SM
            </p>
        </motion.div>

        <motion.div
            style={{ y: yButtons, opacity: opacityFade }}
            className="relative z-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
            >
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 hover:bg-accent transition-all duration-300">
                  Let&#39;s Connect
                </button>
                <button className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                    View Work <ArrowDown size={18} />
                </button>
            </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;