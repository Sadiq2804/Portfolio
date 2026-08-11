import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ProjectPulse AI',
      description: 'AI-powered project health reporting agent that analyzes Excel workbooks and generates executive summaries, PDF reports, and PowerPoint presentations using RAG scoring and Gemini API.',
      tech: ['Python', 'FastAPI', 'React', 'Gemini API', 'RAG', 'python-pptx'],
      metrics: ['80% time saved', '98% accuracy', 'Production-ready'],
      links: {
        github: 'https://github.com/Sadiq2804/ProjectPulse-AI',
        demo: 'https://project-pulse-ai-beta.vercel.app',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Creator Flow AI',
      description: 'End-to-end content automation platform that generates video scripts using GPT-4 and LangChain, with human-in-the-loop review system. Reduces manual scripting effort by ~70%.',
      tech: ['Python', 'OpenAI GPT-4', 'LangChain', 'FastAPI', 'Hugging Face Spaces'],
      metrics: ['70% automation', '24/7 availability', 'Multi-platform'],
      links: {
        space: 'https://huggingface.co/spaces/Sadiq28/Creator-Flow',
        github: 'https://github.com/Sadiq2804/Creator-Flow',
      },
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Face Detection System',
      description: 'Computer vision project implementing real-time face detection and recognition using Python and modern ML techniques for practical applications.',
      tech: ['Python', 'OpenCV', 'Deep Learning', 'TensorFlow', 'Computer Vision'],
      metrics: ['Real-time processing', 'High accuracy', 'Deployable'],
      links: {
        github: 'https://github.com/Sadiq2804/face-detection-project',
      },
      color: 'from-green-500 to-teal-500',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-2xl">
            Full-stack AI applications that showcase production-ready systems, from backend architecture to frontend user experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative p-8">
                <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white text-xs font-semibold mb-4`}>
                  Featured
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      ✓ {metric}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  )}
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                  {project.links.space && (
                    <motion.a
                      href={project.links.space}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      HF Space
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other notable projects */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Other Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50">
              <h4 className="font-bold mb-2">Fraud Detection System</h4>
              <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">
                ML pipeline using XGBoost and Random Forest, achieving 98.5% precision on imbalanced transaction data.
              </p>
              <span className="text-xs bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent font-semibold">
                Python • XGBoost • Scikit-Learn • SMOTE
              </span>
            </div>

            <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50">
              <h4 className="font-bold mb-2">Smart Home Automation (IoT + NLP)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">
                Voice-controlled system using NLP for intent recognition, 35% reduction in command misclassification.
              </p>
              <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                Python • NLP • MQTT • IoT • REST APIs
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
