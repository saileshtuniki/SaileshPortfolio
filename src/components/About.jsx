import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-3xl mx-auto">
    {/* // <section id="about" className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100"> */}
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/preview.png.png"
          alt="Portrait placeholder"
          className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-6"
        />
        <p className="text-lg">
          I'm Sailesh Tuniki, a backend developer passionate about crafting API-first designs using Node.js, Express, and PostgreSQL. I focus on building secure authentication systems and integrating automated testing for robust, scalable applications.
        </p>
      </div>
    </section>
  );
}

