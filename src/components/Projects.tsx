
import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Real-Time AI Interview Assistant',
      description: 'An intelligent system that provides real-time feedback during interviews using NLP and speech recognition.',
      image: '/api/placeholder/400/250',
      tags: ['Python', 'NLP', 'Machine Learning', 'FastAPI'],
      category: 'AI/ML',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Custom GPT Model from Scratch',
      description: 'Built a transformer-based language model from ground up, implementing attention mechanisms and training pipeline.',
      image: '/api/placeholder/400/250',
      tags: ['PyTorch', 'Transformers', 'Deep Learning', 'NLP'],
      category: 'Deep Learning',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Student Performance Analyzer',
      description: 'ML system analyzing student performance patterns and providing personalized learning recommendations.',
      image: '/api/placeholder/400/250',
      tags: ['Python', 'Scikit-learn', 'Data Analysis', 'Visualization'],
      category: 'Data Science',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Credit Score Prediction Model',
      description: 'Advanced ML model for credit scoring using ensemble methods and feature engineering techniques.',
      image: '/api/placeholder/400/250',
      tags: ['Python', 'XGBoost', 'Feature Engineering', 'ML'],
      category: 'Machine Learning',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Object Detection & Tracking',
      description: 'Real-time object detection and tracking system using YOLO and computer vision techniques.',
      image: '/api/placeholder/400/250',
      tags: ['Python', 'OpenCV', 'YOLO', 'Computer Vision'],
      category: 'Computer Vision',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Speech Emotion Classification',
      description: 'Deep learning model that classifies emotions from speech audio using CNN and LSTM architectures.',
      image: '/api/placeholder/400/250',
      tags: ['TensorFlow', 'Audio Processing', 'CNN', 'LSTM'],
      category: 'Deep Learning',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'AI/ML', 'Deep Learning', 'Data Science', 'Machine Learning', 'Computer Vision'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative AI/ML solutions and applications that demonstrate technical expertise and creative problem-solving
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-lg'
                  : 'text-gray-300 border-gray-600 hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
