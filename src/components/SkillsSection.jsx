import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    { 
      name: 'Python', 
      category: 'programming', 
      color: '#3776ab', 
      icon: '🐍',
      description: 'Advanced programming for data analysis, algorithms, and scientific computing',
      level: 55,
      position: { x: 25, y: 20 }
    },
    { 
      name: 'Java', 
      category: 'programming', 
      color: '#f89820', 
      icon: '☕',
      description: 'Object-oriented programming, enterprise applications, and software development',
      level: 78,
      position: { x: 70, y: 25 }
    },
    { 
      name: 'C', 
      category: 'programming', 
      color: '#A8B9CC', 
      icon: '⚙️',
      description: 'Low-level programming, system programming, and performance optimization',
      level: 62,
      position: { x: 45, y: 15 }
    },
    { 
      name: 'Git', 
      category: 'tools', 
      color: '#f05032', 
      icon: '📦',
      description: 'Version control, branching strategies, and collaborative development workflows',
      level: 90,
      position: { x: 20, y: 65 }
    },
    { 
      name: 'GitHub', 
      category: 'tools', 
      color: '#181717', 
      icon: '🐙',
      description: 'Repository management, CI/CD, project collaboration, and open source contributions',
      level: 85,
      position: { x: 75, y: 70 }
    },
    { 
      name: 'Numerical Analysis', 
      category: 'mathematics', 
      color: '#8b5cf6', 
      icon: '🔢',
      description: 'Mathematical modeling, computational algorithms, and numerical problem solving',
      level: 82,
      position: { x: 50, y: 75 }
    }
  ];

  // Generate constellation connections based on skill relationships
  const connections = [
    [0, 1], // Python to Java
    [1, 2], // Java to C
    [2, 0], // C to Python (programming triangle)
    [3, 4], // Git to GitHub
    [0, 5], // Python to Numerical Analysis
    [3, 0], // Git to Python
    [4, 1], // GitHub to Java
    [5, 2]  // Numerical Analysis to C
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const section = ref.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, [ref]);

  const getCategoryColor = (category) => {
    switch(category) {
      case 'programming': return '#3b82f6';
      case 'tools': return '#10b981';
      case 'mathematics': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-space-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-orbitron font-bold text-center mb-4 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My constellation of programming languages, development tools, and mathematical expertise
        </motion.p>

        {/* Interactive Galaxy Container */}
        <div className="relative h-[600px] glass-morphism rounded-3xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-space-900 via-cosmic-900/50 to-space-800 opacity-80" />
          
          {/* Mouse Follow Effect */}
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-gradient-radial from-cosmic-400/20 to-transparent pointer-events-none"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          />

          {/* Constellation Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map(([startIdx, endIdx], idx) => {
              const start = skills[startIdx];
              const end = skills[endIdx];
              
              return (
                <motion.line
                  key={idx}
                  x1={`${start.position.x}%`}
                  y1={`${start.position.y}%`}
                  x2={`${end.position.x}%`}
                  y2={`${end.position.y}%`}
                  stroke="url(#constellation-gradient)"
                  strokeWidth="1.5"
                  className="opacity-50"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
                  transition={{ duration: 1.8, delay: idx * 0.3 }}
                />
              );
            })}
            
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="constellation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="33%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="66%" stopColor="#8b5cf6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Skill Orbs */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${skill.position.x}%`,
                top: `${skill.position.y}%`
              }}
              initial={{ 
                opacity: 0, 
                scale: 0,
                rotateY: -180
              }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1,
                rotateY: 0
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.4,
                zIndex: 10
              }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Skill Orb */}
              <motion.div
                className="relative w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle, ${skill.color}50, ${skill.color}25)`,
                  boxShadow: `0 0 25px ${skill.color}70, inset 0 0 25px ${skill.color}40`
                }}
                animate={{
                  boxShadow: [
                    `0 0 25px ${skill.color}70, inset 0 0 25px ${skill.color}40`,
                    `0 0 35px ${skill.color}90, inset 0 0 30px ${skill.color}50`,
                    `0 0 25px ${skill.color}70, inset 0 0 25px ${skill.color}40`
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-3xl filter drop-shadow-lg">{skill.icon}</span>
                
                {/* Skill Level Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="36"
                    fill="none"
                    stroke={`${skill.color}30`}
                    strokeWidth="3"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="36"
                    fill="none"
                    stroke={skill.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                    animate={inView ? { 
                      strokeDashoffset: 2 * Math.PI * 36 * (1 - skill.level / 100) 
                    } : {}}
                    transition={{ duration: 2, delay: index * 0.15 }}
                  />
                </svg>

                {/* Orbiting Particles */}
                <motion.div
                  className="absolute w-3 h-3 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  animate={{ 
                    rotate: 360 
                  }}
                  transition={{ 
                    duration: 4 + index, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{
                    transformOrigin: '40px 40px',
                    backgroundColor: skill.color
                  }}
                />

                {/* Secondary Particle */}
                <motion.div
                  className="absolute w-2 h-2 rounded-full bg-white/60"
                  animate={{ 
                    rotate: -360 
                  }}
                  transition={{ 
                    duration: 3 + index * 0.5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{
                    transformOrigin: '30px 30px'
                  }}
                />
              </motion.div>

              {/* Skill Name */}
              <motion.div
                className="absolute top-24 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.6 }}
              >
                <span className="text-sm font-semibold text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  {skill.name}
                </span>
              </motion.div>

              {/* Skill Level Badge */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 0 10px ${skill.color}80`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 1 }}
              >
                {skill.level}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skill Details Panel */}
        <motion.div
          className="mt-8 h-40 flex items-center justify-center"
          animate={{ opacity: hoveredSkill ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {hoveredSkill && (
            <motion.div
              className="glass-morphism px-8 py-6 rounded-2xl max-w-lg text-center"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              style={{
                boxShadow: `0 0 30px ${hoveredSkill.color}50`
              }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl">{hoveredSkill.icon}</span>
                <h3 className="text-2xl font-orbitron font-semibold text-white">
                  {hoveredSkill.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold" style={{ color: hoveredSkill.color }}>
                    {hoveredSkill.level}%
                  </span>
                  <div className="w-16 h-2 bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: hoveredSkill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${hoveredSkill.level}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {hoveredSkill.description}
              </p>
              
              {/* Category Badge */}
              <div className="flex justify-center">
                <span 
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold capitalize"
                  style={{
                    backgroundColor: `${getCategoryColor(hoveredSkill.category)}25`,
                    color: getCategoryColor(hoveredSkill.category),
                    border: `1px solid ${getCategoryColor(hoveredSkill.category)}50`
                  }}
                >
                  {hoveredSkill.category === 'mathematics' ? 'Mathematics' : hoveredSkill.category}
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Skills Legend */}
        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {['programming', 'tools', 'mathematics'].map((category) => (
            <div key={category} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: getCategoryColor(category) }}
              />
              <span className="text-gray-300 text-sm capitalize">
                {category === 'mathematics' ? 'Mathematics' : category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
