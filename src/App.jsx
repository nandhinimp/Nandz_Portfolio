

import React from 'react';
import HeroSection from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;