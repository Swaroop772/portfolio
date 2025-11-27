import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
