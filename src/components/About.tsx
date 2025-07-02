
import React from 'react';
import { Star, Heart, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                <Heart className="mr-3 text-red-400" size={24} />
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm an AI/ML Engineer passionate about building intelligent systems that make a real difference. 
                My journey combines deep technical expertise with creative problem-solving, inspired by the 
                unwavering determination of Karna from the Mahabharata.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From developing LLMs from scratch to winning hackathons, I believe in pushing boundaries 
                and turning complex challenges into innovative solutions.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <Target className="mr-3" size={24} />
                My Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To create AI systems that not only solve technical problems but also contribute to social good. 
                I envision a future where artificial intelligence empowers every individual and organization 
                to achieve their highest potential while maintaining ethical standards and human values.
              </p>
            </div>
          </div>

          {/* Right Column - Personality & Strengths */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                <Star className="mr-3" size={24} />
                What Drives Me
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Continuous Learning</h4>
                    <p className="text-gray-400 text-sm">Always exploring new technologies and methodologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Problem-Solving</h4>
                    <p className="text-gray-400 text-sm">Turning complex challenges into elegant solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Innovation</h4>
                    <p className="text-gray-400 text-sm">Building tomorrow's technology today</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <Award className="mr-3" size={24} />
                Fun Facts
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎭</span>
                  <span>Acting background brings creativity to problem-solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <span>Hackathon champion with multiple wins</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧠</span>
                  <span>Built LLM models from scratch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌟</span>
                  <span>Inspired by Karna's determination and excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
