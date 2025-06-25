import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <FaGithub /> GitHub Repo
        </a>
      </div>
    </div>
  );
}


