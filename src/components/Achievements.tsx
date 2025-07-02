import React from 'react';
import { Trophy, Award, Star, Calendar } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Hackathon Champion',
      description: 'Won multiple hackathons with innovative AI/ML solutions',
      icon: <Trophy className="text-yellow-400" size={32} />,
      date: '2023-2024',
      details: [
        'First place in AI Innovation Challenge',
        'Best ML Solution Award at TechFest',
        'Outstanding Problem Solving Recognition'
      ],
      color: 'yellow'
    },
    {
      title: 'Acting Excellence Award',
      description: 'Recognized for outstanding performance in theater',
      icon: <Star className="text-purple-400" size={32} />,
      date: '2022',
      details: [
        'Best Actor Award in Regional Competition',
        'Creative Excellence in Performance',
        'Leadership in Drama Society'
      ],
      color: 'purple'
    },
    {
      title: 'Technical Innovation',
      description: 'Recognition for groundbreaking technical contributions',
      icon: <Award className="text-cyan-400" size={32} />,
      date: '2023',
      details: [
        'Published research on LLM architectures',
        'Open-source contributions to ML community',
        'Mentored junior developers in AI/ML'
      ],
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      yellow: 'border-yellow-500/30 hover:border-yellow-500/50',
      purple: 'border-purple-500/30 hover:border-purple-500/50',
      cyan: 'border-cyan-500/30 hover:border-cyan-500/50'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <section id="achievements" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones that reflect dedication, innovation, and excellence in both technical and creative domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${getColorClasses(achievement.color)} transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700/50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {achievement.title}
                </h3>
                <div className="flex items-center justify-center text-gray-400 text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  {achievement.date}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {achievement.description}
                </p>
              </div>

              <div className="space-y-3">
                {achievement.details.map((detail, detailIndex) => (
                  <div 
                    key={detailIndex}
                    className="flex items-start space-x-3 group/item"
                  >
                    <div className={`w-2 h-2 bg-${achievement.color}-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}></div>
                    <span className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl text-gray-300 font-light italic leading-relaxed mb-6">
              "Excellence is not a destination but a continuous journey of learning, 
              growing, and pushing the boundaries of what's possible."
            </blockquote>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <span className="text-cyan-400 font-medium">Personal Philosophy</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15+', label: 'Projects Completed' },
            { number: '5+', label: 'Hackathons Won' },
            { number: '3+', label: 'Years Experience' },
            { number: '10+', label: 'Technologies Mastered' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;