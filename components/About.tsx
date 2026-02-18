/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto md:mx-0 max-w-md w-full"
            >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <img 
                        src="https://github.com/sohamx0.png" 
                        alt="Soham Maid" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                    />

                    <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                        <span className="text-accent font-display font-bold block">VIT Pune</span>
                        <span className="text-white text-sm">Student Developer</span>
                    </div>
                </div>

                <div className="absolute -inset-4 border border-white/5 rounded-2xl -z-10 translate-x-4 translate-y-4" />
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl -z-20 blur-xl opacity-50" />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Who I Am</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    Crafting digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">precision & passion.</span>
                </h3>
                
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                    <p>
                        Hi, I&#39;m <span className="text-white font-medium">Soham Maid</span>. I am currently a CSE (AI) student at <span className="text-white font-medium">VIT Pune</span>, where I bridge the gap between creative design and technical engineering.
                    </p>
                    <p>
                        My focus lies in building immersive web applications, exploring AI-driven solutions, and designing interfaces that feel futuristic yet intuitive. I believe in code that is as clean as the design it powers.
                    </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a 
                        href="https://github.com/sohamx0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-accent transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(223,255,0,0.5)]"
                    >
                        <Github size={20} />
                        <span>GitHub Profile</span>
                    </a>
                    
                    <a 
                        href="#contact" 
                        className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300 group"
                    >
                        <span>Let&#39;s Connect</span>
                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                    <div>
                        <h4 className="text-2xl md:text-3xl font-display font-bold text-white">2+</h4>
                        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-1">Years Coding</p>
                    </div>
                    <div>
                        <h4 className="text-2xl md:text-3xl font-display font-bold text-white">5+</h4>
                        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-1">Projects</p>
                    </div>
                    <div>
                        <h4 className="text-2xl md:text-3xl font-display font-bold text-white">100%</h4>
                        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-1">Dedication</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default About;