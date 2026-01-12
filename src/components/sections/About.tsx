'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            About
          </motion.h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {[
              "I&apos;m a Computer Science student specializing in Artificial Intelligence at VIT Pune. I focus on building elegant and performant web applications with a keen eye for design and clean code.",
              "My expertise spans modern frontend technologies, AI/ML integration, and full-stack development. I&apos;m always exploring new tools and frameworks to stay at the forefront of web development.",
              "When I&apos;m not coding, you&apos;ll find me contributing to open source projects, learning about emerging technologies, or working on innovative AI solutions."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div 
            className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Python',
                'TensorFlow',
                'Node.js',
                'AI/ML',
                'C',
                'C++',
                'Java',
                'Git',
                'GitHub',
                'MongoDB',
                'SQL',
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7 + i * 0.05,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
