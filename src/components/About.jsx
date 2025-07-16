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




//Canva ai code

// import React from 'react';

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-4 max-w-3xl mx-auto text-center md:text-left">
//       <h2 className="text-4xl font-bold mb-4 text-indigo-600">About Me</h2>
//       <div className="flex flex-col md:flex-row items-center justify-center">
//         <img
//           src="/preview.png.png"
//           alt="Portrait placeholder"
//           className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-6 shadow-lg"
//         />
//         <p className="text-lg leading-relaxed">
//           Hi there! I'm Sailesh Tuniki, a backend developer who loves crafting API-first designs using Node.js, Express, and PostgreSQL. My passion lies in building secure authentication systems and integrating automated testing for robust, scalable applications. I'm always excited about the next big challenge!
//         </p>
//       </div>
//     </section>
//   );
// }


// export default function About() {
//   return (
//     <section id="about" className="py-20 px-4 max-w-3xl mx-auto text-center md:text-left bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
//       <h2 className="text-4xl font-bold mb-4">Meet Sailesh</h2>
//       <div className="flex flex-col md:flex-row items-center justify-center">
//         <img
//           src="/preview.png.png"
//           alt="Portrait placeholder"
//           className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-6 shadow-lg border-4 border-white"
//         />
//         <div className="text-lg leading-relaxed">
//           <p>Hey there! I'm a backend developer who loves crafting API-first designs using Node.js, Express, and PostgreSQL.</p>
//           <p>My passion lies in building secure authentication systems and integrating automated testing for robust, scalable applications. I'm always excited about the next big challenge!</p>
//           <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-purple-600 hover:text-white transition-colors duration-300">Learn More</button>
//         </div>
//       </div>
//     </section>
//   );
// }
