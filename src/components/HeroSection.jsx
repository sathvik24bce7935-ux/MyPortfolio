import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Satellite } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-space-gradient overflow-hidden">
      {/* Floating space elements */}
      <motion.div
        className="absolute top-20 left-10 text-cosmic-400"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Satellite size={40} />
      </motion.div>

      <motion.div
        className="absolute top-32 right-20 text-nebula-pink"
        animate={{ 
          y: [0, 25, 0],
          x: [0, 15, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Rocket size={35} />
      </motion.div>

      {/* Floating astronaut */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-cosmic-400 to-cosmic-600 rounded-full flex items-center justify-center text-white text-4xl"
        animate={{ 
          y: [0, -40, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🚀
      </motion.div>

      {/* Main content */}
      <div className="z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-orbitron font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gradient">D Naga Sathvik</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-cosmic-200 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Computer Science Student | Aspiring Astrophysicist
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Passionate about particle physics and driven to push the boundaries of our understanding of the universe.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cosmic-500 to-cosmic-600 text-white font-semibold rounded-full hover:from-cosmic-600 hover:to-cosmic-700 transition-all duration-300 glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          
          <motion.button
            className="px-8 py-4 glass-morphism text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-cosmic-400" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
