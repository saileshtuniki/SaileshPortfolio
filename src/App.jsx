
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Certifications from '../src/components/Certifications';
import Contact from '../src/components/Contact';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import CertificationsShowcase from './components/CertificationsShowcase';

function App() {
  return (
    <>
    {/* <div className='bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100'> */}

    
    <main className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <Certifications />
      <CertificationsShowcase/>
      <Contact />
    </main>
    {/* </div> */}
    </>
  )
}

export default App
