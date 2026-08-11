import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Projects Built', value: '5+' },
    { label: 'Tech Stack', value: 'Gen AI' },
    { label: 'Focus Area', value: 'Full-Stack' },
    { label: 'Graduation', value: 'June 2026' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm an AI Engineer passionate about building production-ready Generative AI applications. With a B.Tech in AI & Machine Learning from KNS Institute of Technology, I combine academic knowledge with practical engineering.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                My focus is on full-stack AI systems: from LLM prompt engineering and RAG systems to FastAPI backends and React frontends. I've built content automation platforms that reduce manual work by ~70% and project intelligence systems that generate executive reports in seconds.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently seeking AI Engineer roles at innovative startups where I can contribute to scalable, production-grade AI products.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                  <div className="text-gray-700 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
