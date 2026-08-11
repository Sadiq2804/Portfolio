import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'MindMatrix, Bengaluru',
      period: 'Feb 2026 – May 2026',
      description: 'Developed Hasta Kala Shop, a full-featured Android e-commerce application in Kotlin with Firebase integration, implementing authentication, product catalogue, shopping cart, and order management systems.',
      highlights: [
        'Built production-ready Android app using Kotlin and Android Studio',
        'Implemented Firebase Auth and Realtime Database integration',
        'Created complete e-commerce features: product catalog, cart, orders',
        'Performed end-to-end testing across multiple Android device configurations',
        'Participated in full SDLC: requirements, design, coding, testing, deployment',
      ],
      tech: ['Kotlin', 'Android Studio', 'Firebase Auth', 'Firebase Realtime DB', 'Firebase Storage'],
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence & Machine Learning',
      institution: 'KNS Institute of Technology, Bangalore',
      period: 'Expected June 2026',
      cgpa: 'CGPA: 8.13/10',
      achievements: [
        'Specialized in Gen AI and ML systems',
        'Strong foundation in algorithms and data structures',
        'Capstone projects in AI automation and computer vision',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">Experience & Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Work */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-8 p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
                whileHover={{ boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Contributions:</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-400 flex items-start">
                        <span className="mr-2 text-blue-500 mt-1">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
                whileHover={{ boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                  {edu.period}
                </p>
                <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/30">
                  <p className="text-blue-900 dark:text-blue-300 font-semibold">{edu.cgpa}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Focus Areas:</p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-400 flex items-start">
                        <span className="mr-2 text-blue-500 mt-1">→</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Certifications & Continuous Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">
                Introduction to Artificial Intelligence
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Amplify Platform • June 2026 – Present
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">
                Amplify Your Communication Skills with AI
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Amplify Platform • June 2026 – Present
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
