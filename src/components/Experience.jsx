import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiPostgresql, SiTypescript, SiNodedotjs, SiExpress, SiJsonwebtokens } from "react-icons/si";
import ProjectModal from "../components/Projectmodel";

export default function Experience() {
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = () => {
    setShowModal(true);
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-zinc-900">
    {/* // <section id="experience" className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100"> */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>

        <motion.div
          className="bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-6 transition-all hover:shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Backend Developer Intern</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Doitup Innovative Technologies · Dec 2024 – Present
            </p>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Worked on building secure and scalable user authentication systems using modern backend technologies.
          </p>

          <div className="flex flex-wrap gap-2 mb-4 text-blue-600 dark:text-blue-400 text-xl">
            <SiNodedotjs title="Node.js" />
            <SiExpress title="Express.js" />
            <SiPostgresql title="PostgreSQL" />
            <SiTypescript title="TypeScript" />
            <SiJsonwebtokens title="JWT Auth" />
          </div>

          <button
            onClick={handleLearnMore}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Learn More
          </button>

          {showModal && (
            <ProjectModal
              title="Authentication & User Management API"
              description="A secure backend API with JWT authentication, OTP reset logic, and express-validator input validation. Built with PostgreSQL and TypeScript."
              techStack={["Node.js", "Express", "PostgreSQL", "JWT", "OTP", "TypeScript"]}
              githubLink="https://github.com/sailesht/auth-api"
              onClose={() => setShowModal(false)}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
