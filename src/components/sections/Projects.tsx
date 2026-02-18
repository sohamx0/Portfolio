'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const projects = [
  {
    title: 'Crop Health AI',
    description:
      'AI-powered crop health monitoring system with disease detection and treatment recommendations.',
    tech: ['Next.js', 'TensorFlow', 'Python'],
    link: 'https://github.com/sohamx0/Crop-Health-AI',
  },
  {
    title: 'Weather App',
    description:
      'Responsive weather app with city search, current location support, and OpenWeatherMap-powered data.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    link: 'https://github.com/sohamx0/Weather-App',
  },
];

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16"
        >
          Selected Work
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-75 hover:shadow-2xl bg-white/50 dark:bg-black/50 backdrop-blur-sm"
            >
              <motion.h3 
                className="text-2xl font-semibold mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                {project.title}
              </motion.h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.08 + i * 0.03 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.div 
                className="mt-6 flex items-center text-sm font-medium"
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
              >
                View Project
                <motion.svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
