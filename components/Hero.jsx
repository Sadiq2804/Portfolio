import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-4xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            Available for AI Engineer roles
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block mb-2">AI Engineer</span>
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Building Gen AI Products
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
        >
          I build full-stack Generative AI applications using LLMs, FastAPI, and React. Currently focused on automating content creation and project intelligence with production-ready systems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/Sadiq2804"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sadiq-hussain-ansari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:sadiqansari1918@gmail.com" className="hover:text-blue-500 transition-colors">
            Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
