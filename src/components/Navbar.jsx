// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const navLinks = [
//   { name: 'Home', href: '#hero' },
//   { name: 'About', href: '#about' },
//   { name: 'Skills', href: '#skills' },
//   {name: 'Experience', href: '#experience'},
//   { name: 'Projects', href: '#projects' },
//   { name: 'Certifications', href: '#certifications' },
//   { name: 'Contact', href: '#contact' },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-blue-600">Sailesh.dev</h1>
//         <nav className="hidden md:flex gap-6">
//           {navLinks.map((link) => (
//             <a key={link.name} href={link.href} className="hover:text-blue-600">
//               {link.name}
//             </a>
//           ))}
//         </nav>
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
//           <nav className="flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-blue-600"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }



import React, { useState, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Sailesh.dev</h1>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-600 dark:text-white">
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 rounded-md bg-gray-200 dark:bg-zinc-800 dark:text-white"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl dark:text-white"
            title="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 dark:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
