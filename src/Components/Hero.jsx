import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [gmailVisible, setGmailVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles data
    const particleData = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(particleData);
  }, []);

  const scrollToProjects = () => {
  const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleGmail = () => {
    setGmailVisible(!gmailVisible);
    if (!gmailVisible) {
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setGmailVisible(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
        {/* Enhanced Background Animations */}
        <div className="absolute inset-0 z-0">
          {/* Floating Orbs */}
          <div className="absolute top-[10%] left-[-10%] w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-400/30 to-purple-600/10 blur-3xl animate-pulse"></div>
          <div className="absolute top-[60%] right-[-5%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-pink-400/30 to-pink-600/10 blur-2xl animate-bounce"></div>
          <div className="absolute bottom-[20%] left-[20%] w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/10 blur-xl animate-pulse"></div>
          <div className="absolute top-[30%] right-[30%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-400/30 to-green-600/10 blur-lg animate-bounce"></div>
          
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map(particle => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-white/80 rounded-full animate-pulse"
                style={{
                  left: `${particle.left}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16 min-h-screen flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Text Content - Enhanced Visibility */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Name with enhanced visibility */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent filter drop-shadow-lg">
                    Nandhini
                  </span>
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 drop-shadow-lg">
                  Full Stack Developer
                </div>
              </div>

              {/* Description with better contrast */}
              <div className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-50 max-w-2xl mx-auto lg:mx-0">
                <p className="drop-shadow-lg font-medium">
                  Crafting digital experiences with cutting-edge technology.
                </p>
                <p className="drop-shadow-lg font-medium">
                  Passionate about creating innovative solutions and bringing ideas to life.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
                <a
                  href="https://github.com/nandhinimp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl"
                >
                  <Github size={20} />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/-nandhini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={20} />
                </a>
                
                {/* Gmail with roll-out feature */}
                <div className="relative">
                  <button
                    onClick={toggleGmail}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl"
                  >
                    <Mail size={20} />
                  </button>
                  
                  {/* Gmail reveal */}
                  <div className={`absolute left-16 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                    gmailVisible ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-4'
                  }`}>
                    <div className="bg-gray-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-white/20 shadow-xl">
                      nandhini.m.0714@gmail.com
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-gray-900/95"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={scrollToProjects}
                  className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 overflow-hidden"
                  aria-label="Scroll to Projects"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Profile Section - Responsive */}
            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Rotating ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin opacity-75 blur-sm"></div>
                
                {/* Profile container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl bg-gradient-to-br from-gray-200 to-gray-400">
                  <img
                    src="/profile.jpg"
                    alt="Nandhini Profile"
                    className="absolute inset-0 w-full h-full object-cover object-top rounded-full"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce text-lg sm:text-xl">
                  ✨
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse text-lg sm:text-xl">
                  💻
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div 
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce hover:scale-110 transition-transform duration-300"
            onClick={scrollToProjects}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs sm:text-sm opacity-80 font-medium">Scroll Down</span>
              <ChevronDown size={20} className="sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default HeroSection;