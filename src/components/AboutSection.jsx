import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Telescope, Atom, Satellite, Rocket } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const icons = [
    { Icon: Telescope, delay: 0.2 },
    { Icon: Atom, delay: 0.4 },
    { Icon: Satellite, delay: 0.6 },
    { Icon: Rocket, delay: 0.8 }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-space-900 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-orbitron font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              From a young age, I've been captivated by the mysteries of the cosmos and the fundamental particles that make up our universe. This lifelong passion has driven me to pursue Computer Science while maintaining a deep focus on astrophysics research.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
             My curiosity drives me to continuously seek knowledge and grow every day. 
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My ultimate goal is to contribute to groundbreaking research in astrophysics, whether it's discovering new particles, understanding dark matter, or exploring the possibilities of interstellar travel. Every line of code I write brings me closer to these cosmic frontiers.
            </p>
          </motion.div>

          {/* 3D Icons */}
          <div className="relative h-96 perspective-1000">
            {icons.map(({ Icon, delay }, index) => (
              <motion.div
                key={index}
                className="absolute w-20 h-20 glass-morphism rounded-2xl flex items-center justify-center text-cosmic-400"
                style={{
                  top: `${20 + (index % 2) * 50}%`,
                  left: `${20 + (index % 2) * 40}%`,
                  transform: `translateZ(${index * 20}px)`
                }}
                initial={{ 
                  opacity: 0, 
                  rotateY: -90,
                  scale: 0.5
                }}
                animate={inView ? { 
                  opacity: 1, 
                  rotateY: 0,
                  scale: 1
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotateY: 180,
                  transition: { duration: 0.3 }
                }}
              >
                <Icon size={32} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
