import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id='hero' className="min-h-screen flex flex-col justify-center items-center text-center">
    {/* // <section id='hero' className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100"> */}
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sailesh Tuniki – Backend Developer
      </motion.h1>
      <p className="text-xl mb-6">Building robust APIs & scalable backend systems</p>
      <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View My Projects
      </a>
    </section>
  );
}

