// import React, { useState } from 'react';
// // FaExternalLinkAlt
// import { FaGithub } from 'react-icons/fa';

// const projectList = [
//   {
//     title: 'College Hierarchy Tree API',
//     desc: 'Built a 4-level schema (Principal→HOD→Professor→Student) using PostgreSQL joins with soft-delete logic and Jest tests.',
//     tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Jest'],
//     github: 'https://github.com/sailesht/college-hierarchy-api',
//   },
//   {
//     title: 'Auth & User Management API',
//     desc: 'Secure authentication with JWT, OTP-based reset, and input validations using express-validator.',
//     tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
//     github: 'https://github.com/sailesht/auth-api',
//   },
//   {
//     title: 'E-commerce Fashion Backend API',
//     desc: 'E-commerce backend with MongoDB, secure auth (JWT, bcrypt), and custom validations.',
//     tech: ['Node.js', 'MongoDB', 'JWT', 'bcrypt'],
//     github: 'https://github.com/sailesht/ecom-fashion-api',
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
//       <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
//       <div className="grid gap-10">
//         {projectList.map((project) => (
//           <div key={project.title} className="bg-white dark:bg-gray-900 shadow rounded-xl p-6">
//             <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//             <p className="mb-3">{project.desc}</p>
//             <div className="flex flex-wrap gap-2 mb-3">
//               {project.tech.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className="flex gap-4">
//               <a href={project.github} className="text-blue-600 flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
//                 <FaGithub /> GitHub
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import ProjectModal from '../components/Projectmodel';

const projectList = [
  {
    title: 'College Hierarchy Tree API',
    desc: 'Built a 4-level schema (Principal→HOD→Professor→Student) using PostgreSQL joins with soft-delete logic and Jest tests.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Jest'],
    github: 'https://github.com/saileshtuniki/College_api_typescript_joins',
  },
  {
    title: 'Auth & User Management API',
    desc: 'Secure authentication with JWT, OTP-based reset, and input validations using express-validator.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/saileshtuniki/Auth_and_User_Role_Management_Taskhttps://github.com/saileshtuniki/Auth_and_User_Role_Management_Task',
  },
  {
    title: 'Book Review API',
    desc: 'Backend API for book reviews with user auth, book management, and review CRUD using PostgreSQL and JWT.',
    tech: ['Node.js', 'PostgreSQL', 'JWT', 'Express.js'],
    github: 'https://github.com/saileshtuniki/Book_Review_API_Node.js',
  },
  {
    title: 'E-commerce Fashion Backend API',
    desc: 'E-commerce backend with MongoDB, secure auth (JWT, bcrypt), and custom validations.',
    tech: ['Node.js', 'MongoDB', 'JWT', 'bcrypt'],
    github: 'https://github.com/saileshtuniki/Ecommerce_MERN',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
      <div className="grid gap-10">
        {projectList.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-900 shadow rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-3">{project.desc.slice(0, 80)}...</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => openModal(project)}
                className="text-blue-600 hover:underline"
              >
                Learn More
              </button>
              <a
                href={project.github}
                className="text-blue-600 flex items-center gap-1 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}