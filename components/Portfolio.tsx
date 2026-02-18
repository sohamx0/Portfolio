import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/sohamx0/Portfolio"
  },
  {
    id: 2,
    title: "Crop Health AI",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/sohamx0/Crop-Health-AI"
  },
  {
    id: 3,
    title: "Weather App",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/sohamx0/Weather-App"
  }
];

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const calculateWidth = () => {
        if (sliderRef.current && containerRef.current) {
            const scrollWidth = sliderRef.current.scrollWidth;
            const offsetWidth = containerRef.current.offsetWidth;
            const computedWidth = scrollWidth - offsetWidth;
            
            setWidth(computedWidth > 0 ? computedWidth + 48 : 0); 
        }
    };

    calculateWidth();
    
    window.addEventListener('resize', calculateWidth);
    
    const resizeObserver = new ResizeObserver(() => {
        calculateWidth();
    });
    
    if (sliderRef.current) {
        resizeObserver.observe(sliderRef.current);
    }
    if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
    }

    return () => {
        window.removeEventListener('resize', calculateWidth);
        resizeObserver.disconnect();
    };
  }, []);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
           <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">Selected Works</h2>
           <p className="text-gray-400">Drag to explore</p>
        </div>
        <div className="hidden md:block w-32 h-[1px] bg-white/20 mb-4"></div>
      </div>

      <div className="w-full pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] overflow-visible">
        <motion.div 
            ref={sliderRef}
            className="flex gap-8 cursor-grab active:cursor-grabbing w-max pr-12 pb-12 touch-pan-y select-none"
            drag="x"
            dragConstraints={{ right: 0, left: -width }} 
            whileTap={{ cursor: "grabbing" }}
        >
            {projects.map((project) => (
                <motion.div 
                    key={project.id}
                    className="relative w-[300px] md:w-[500px] h-[400px] md:h-[600px] rounded-3xl overflow-hidden group shrink-0 border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                >
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full h-full relative"
                        draggable="false"
                        onDragStart={(e) => e.preventDefault()} 
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10" />
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                            draggable="false" 
                        />
                        
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                </div>
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                            <div className="h-[1px] w-0 group-hover:w-full bg-white/30 transition-all duration-700 mt-4" />
                        </div>
                    </a>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;