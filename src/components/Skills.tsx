
import React, { useState, useEffect, useRef } from 'react';
import { Code, Brain, Cloud, Briefcase } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'AI/ML & Deep Learning',
      icon: <Brain className="text-cyan-400" size={24} />,
      color: 'cyan',
      skills: [
        { name: 'Machine Learning', level: 95 },
        { name: 'Deep Learning', level: 90 },
        { name: 'Neural Networks', level: 88 },
        { name: 'Computer Vision', level: 85 },
        { name: 'NLP', level: 92 },
        { name: 'LLM Development', level: 87 }
      ]
    },
    {
      title: 'Programming & Frameworks',
      icon: <Code className="text-purple-400" size={24} />,
      color: 'purple',
      skills: [
        { name: 'Python', level: 98 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 82 },
        { name: 'FastAPI', level: 87 }
      ]
    },
    {
      title: 'Data Science & Analytics',
      icon: <Briefcase className="text-green-400" size={24} />,
      color: 'green',
      skills: [
        { name: 'Data Analysis', level: 93 },
        { name: 'Statistical Modeling', level: 88 },
        { name: 'Pandas/NumPy', level: 95 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'SQL', level: 87 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="text-yellow-400" size={24} />,
      color: 'yellow',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 78 },
        { name: 'Git/GitHub', level: 92 },
        { name: 'MLOps', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Linux', level: 82 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'from-cyan-500 to-cyan-600 border-cyan-500/30',
      purple: 'from-purple-500 to-purple-600 border-purple-500/30',
      green: 'from-green-500 to-green-600 border-green-500/30',
      yellow: 'from-yellow-500 to-yellow-600 border-yellow-500/30'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and solving complex problems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-${category.color}-500/30 transition-all duration-500 transform hover:scale-105`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-white ml-3">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Showcase */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Python', 'TensorFlow', 'PyTorch', 'React', 'AWS', 'Docker', 'JavaScript', 'FastAPI'].map((tech, index) => (
              <div 
                key={tech}
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-3 text-white font-medium hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
