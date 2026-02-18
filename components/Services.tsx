import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { id: 1, title: 'Website Design', desc: 'Immersive digital experiences that convert.' },
  { id: 2, title: 'Graphic Design', desc: 'Bold visual identities for modern brands.' },
  { id: 4, title: '3D Modeling', desc: 'Next-gen visuals for the spatial web.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">My Expertise</h2>
            <h3 className="text-2xl text-gray-400 max-w-lg">
                I am a second-year CSE (AI) student at VIT Pune, building immersive digital experiences and futuristic interfaces.
            </h3>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div key={service.id} className="group border-t border-white/10 py-12 cursor-pointer transition-colors duration-500 hover:bg-white/5 px-4 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gray-600 group-hover:bg-white transition-all duration-500 uppercase leading-none">
                        {service.title}
                    </h2>
                    
                    <div className="flex items-center gap-6 opacity-0 md:translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        <p className="text-gray-400 text-sm md:text-base max-w-xs text-right hidden md:block">
                            {service.desc}
                        </p>
                        <div className="w-16 h-16 rounded-full bg-accent text-black flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                            <ArrowUpRight size={32} />
                        </div>
                    </div>
                </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Services;