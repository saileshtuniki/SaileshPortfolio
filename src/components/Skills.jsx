import React from 'react';

// FaDatabase
import { FaNodeJs,  FaAws, FaGitAlt, FaReact, FaKey, FaJsSquare, FaJava } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiTailwindcss, SiSwagger, SiPostman, SiJest, SiTypescript, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'Javascript', icon: <FaJsSquare/> },
  { name: 'Typescript', icon: <SiTypescript /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'JWT', icon: <FaKey /> },
  { name: 'OTP', icon: <FaKey /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Swagger', icon: <SiSwagger /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'AWS', icon: <FaAws /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-2xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
          >
            <div className="text-blue-600 text-4xl">{skill.icon}</div>
            <span className="text-base font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


