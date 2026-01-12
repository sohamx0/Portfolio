'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <motion.div
        className="max-w-4xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-balance"
        >
          Hi, I&apos;m{' '}
          <motion.span
            className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Soham Maid
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
        >
          A CSE(AI) student at VIT Pune, crafting beautiful digital experiences with
          modern web technologies.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Work</span>
            <motion.div
              className="absolute inset-0 bg-gray-800 dark:bg-gray-200"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-24 flex gap-6">
          {[
            { name: 'GitHub', url: 'https://github.com/sohamx0' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/soham-maid-6a738232a/' },
            { name: 'Discord', url: '#' },
          ].map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {social.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
