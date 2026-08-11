import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Sadiq Hussain Ansari | AI Engineer | Gen AI Products</title>
        <meta name="description" content="AI Engineer building full-stack Generative AI applications. Specializing in LLMs, FastAPI, and production-ready AI systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-weight='bold' fill='%233B82F6'>SA</text></svg>" />
        <meta property="og:title" content="Sadiq Hussain Ansari | AI Engineer" />
        <meta property="og:description" content="Building full-stack Gen AI products. ProjectPulse AI, Creator Flow AI, and more." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-white dark:bg-primary text-gray-900 dark:text-white transition-colors duration-300">
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
