'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const experiences = [
  {
    title: 'CSE(AI) Student',
    company: 'VIT Pune',
    period: '2024 - Present',
    description:
      'Pursuing Computer Science with specialization in Artificial Intelligence, focusing on modern web development and AI/ML technologies.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Personal Projects',
    period: '2025 - Present',
    description:
      'Building innovative web applications and AI-powered solutions, including crop health monitoring systems.',
  },
  {
    title: 'Open Source Contributor',
    company: 'GitHub',
    period: '2025 - Present',
    description:
      'Contributing to open source projects and sharing knowledge with the developer community.',
  },
];

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              className="border-l-2 border-gray-200 dark:border-gray-800 pl-8 pb-8 relative"
            >
              <motion.div
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black dark:bg-white"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + 0.3,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.5 }}
              />

              <motion.div 
                className="flex flex-col md:flex-row md:items-center md:justify-between mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                <motion.h3 
                  className="text-2xl font-semibold"
                  whileHover={{ x: 5 }}
                >
                  {exp.title}
                </motion.h3>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                  {exp.period}
                </span>
              </motion.div>

              <motion.p 
                className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {exp.company}
              </motion.p>

              <motion.p 
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                {exp.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
