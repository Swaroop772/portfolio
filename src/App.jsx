import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/ui/CustomCursor';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';

import Contact from './components/Contact';
import Footer from './components/Footer';

import Background from './components/Background';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-slate-900 dark:text-white overflow-hidden transition-colors duration-500 bg-gray-50 dark:bg-background">
        <CustomCursor />
        <Background />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
