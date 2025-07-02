
import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              AI.Portfolio
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building intelligent systems that make a difference. 
              Passionate about AI, ML, and creating solutions for tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Quick Navigation</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 mx-auto"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Chennai, Tamil Nadu, India</p>
              <a 
                href="mailto:ai.engineer@example.com"
                className="block hover:text-cyan-400 transition-colors duration-300"
              >
                ai.engineer@example.com
              </a>
              <a 
                href="tel:+911234567890"
                className="block hover:text-cyan-400 transition-colors duration-300"
              >
                +91 12345 67890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-400 w-4 h-4" />
              <span>and</span>
              <Code className="text-cyan-400 w-4 h-4" />
              <span>and lots of</span>
              <Coffee className="text-yellow-400 w-4 h-4" />
            </div>
            
            <div className="text-gray-400 text-center">
              <p>&copy; {currentYear} AI Portfolio. All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Inspired by Karna's Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-110 transition-all duration-300 z-50"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
