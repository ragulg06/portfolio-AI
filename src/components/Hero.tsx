
import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'AI/ML Engineer',
    'Deep Learning Enthusiast', 
    'Innovation Builder',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, phrases]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-emerald-900/10"></div>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Tech Icons */}
        <div className="flex justify-center space-x-8 mb-12 opacity-70">
          <div className="p-3 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20">
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <div className="p-3 bg-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20">
            <Zap className="w-8 h-8 text-emerald-400" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-white mb-4">Hello, I'm</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-pulse text-white/60">|</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Crafting intelligent systems that push the boundaries of what's possible. 
          <br />
          <span className="text-blue-400">Building tomorrow's AI solutions</span> with passion and precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-10 py-4 border-2 border-emerald-400 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        <div className="animate-bounce">
          <button 
            onClick={scrollToNext}
            className="text-gray-500 hover:text-blue-400 transition-colors duration-300 group"
          >
            <ArrowDown size={40} className="group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
