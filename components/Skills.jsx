import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Generative AI & LLMs',
      skills: ['LangChain', 'OpenAI API (GPT-4)', 'Gemini API', 'Prompt Engineering', 'RAG', 'Fine-tuning (LoRA/PEFT)', 'Embeddings'],
      icon: '🤖',
    },
    {
      title: 'Vector Databases',
      skills: ['FAISS', 'ChromaDB', 'Pinecone', 'Semantic Search', 'Similarity Indexing'],
      icon: '🔍',
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-Learn', 'XGBoost', 'Random Forest', 'Deep Learning', 'NLP', 'Intent Recognition', 'Text Classification'],
      icon: '📊',
    },
    {
      title: 'Backend',
      skills: ['FastAPI', 'Python', 'REST APIs', 'Pandas', 'NumPy', 'Pydantic'],
      icon: '⚙️',
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Framer Motion'],
      icon: '🎨',
    },
    {
      title: 'Report Automation',
      skills: ['python-pptx', 'ReportLab', 'PDF Generation', 'PowerPoint Automation'],
      icon: '📄',
    },
    {
      title: 'Cloud & Deployment',
      skills: ['Hugging Face Spaces', 'Firebase', 'Git/GitHub', 'Google Colab', 'Vercel'],
      icon: '☁️',
    },
    {
      title: 'Mobile',
      skills: ['Android Studio', 'Kotlin', 'Firebase Auth', 'Firebase Realtime DB', 'Firebase Storage'],
      icon: '📱',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-2xl">
            Specialized in full-stack Gen AI development with expertise across LLMs, backend systems, and cloud deployment.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold mb-4 group-hover:text-blue-500 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-sm text-gray-700 dark:text-gray-400 flex items-start">
                    <span className="mr-2 text-blue-500">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-blue-200 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">GitHub Activity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1-4</div>
              <p className="text-gray-700 dark:text-gray-400">Commits per week</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Public</div>
              <p className="text-gray-700 dark:text-gray-400">Repository visibility</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <p className="text-gray-700 dark:text-gray-400">Active projects</p>
            </div>
          </div>
          <motion.a
            href="https://github.com/Sadiq2804"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View GitHub Profile →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
