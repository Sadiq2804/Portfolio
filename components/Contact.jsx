import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'sadiqansari1918@gmail.com',
      href: 'mailto:sadiqansari1918@gmail.com',
      icon: '✉️',
    },
    {
      label: 'GitHub',
      value: 'github.com/Sadiq2804',
      href: 'https://github.com/Sadiq2804',
      icon: '💻',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sadiq-hussain-ansari',
      href: 'https://linkedin.com/in/sadiq-hussain-ansari',
      icon: '🔗',
    },
    {
      label: 'Phone',
      value: '+91-9632915703',
      href: 'tel:+919632915703',
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            I'm actively seeking AI Engineer roles at innovative startups. Let's connect and build something amazing together.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group p-6 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl mb-3">{link.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">
                {link.label}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-400 break-all">
                {link.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="text-center p-8 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Great</h3>
          <p className="text-lg mb-6 opacity-90">
            Available for full-time AI Engineer roles starting immediately.
          </p>
          <motion.a
            href="mailto:sadiqansari1918@gmail.com"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Download Resume */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Want to see my detailed background?
          </p>
          <motion.a
            href="/resume.pdf"
            className="inline-block px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume (PDF)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
