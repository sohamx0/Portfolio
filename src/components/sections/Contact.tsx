'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s Work Together
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I&apos;m always interested in hearing about new projects and opportunities.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="mailto:sohammaid23@gmail.com"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>

            <motion.a
              href="https://github.com/sohamx0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-lg"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              View GitHub
            </motion.a>
          </motion.div>

          <motion.div 
            className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Or find me on
            </p>
            <div className="flex gap-6 justify-center">
              {[
                { name: 'GitHub', url: 'https://github.com/sohamx0' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/soham-maid-6a738232a/' },
                { name: 'Discord', url: '#' },
                { name: 'Email', url: 'mailto:sohammaid23@gmail.com' },
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className="text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
