import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: 'www.linkedin.com/in/damasani-nagasathvik-810753332', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Mail, href: 'dnagasathvik@gmail.com', label: 'Email' }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-space-gradient relative overflow-hidden">
      {/* 3D Animated Planet */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cosmic-400 to-cosmic-600 opacity-20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Orbiting Satellites */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-32 right-20 w-4 h-4 bg-cosmic-300 rounded-full"
          animate={{ 
            rotate: 360
          }}
          transition={{ 
            duration: 10 + (i * 2), 
            repeat: Infinity, 
            ease: "linear"
          }}
          style={{
            transformOrigin: `${40 + (i * 20)}px 40px`
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-orbitron font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="glass-morphism rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-orbitron font-semibold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <motion.input
                  type="text"
                  placeholder="D Naga Sathvik"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-space-800/50 border border-cosmic-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cosmic-400 focus:ring-2 focus:ring-cosmic-400/20 transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <motion.input
                  type="email"
                  placeholder="dnagasathvik@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-space-800/50 border border-cosmic-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cosmic-400 focus:ring-2 focus:ring-cosmic-400/20 transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <motion.textarea
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-space-800/50 border border-cosmic-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cosmic-400 focus:ring-2 focus:ring-cosmic-400/20 transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cosmic-500 to-cosmic-600 text-white font-semibold rounded-lg hover:from-cosmic-600 hover:to-cosmic-700 transition-all duration-300 flex items-center justify-center gap-2 glow-effect"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-orbitron font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm always excited to discuss new opportunities, collaborate on research projects, or simply chat about the wonders of the universe. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="text-cosmic-400" size={20} />
                  <span>dnagasathvik@gmail.com</span>
                </div>
                <div className="text-gray-300">
                  <span className="font-semibold">Research Interests:</span> Particle Physics, Dark Matter, Exoplanet Detection
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-xl font-orbitron font-semibold text-white mb-6">
                Connect on Social
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 p-3 bg-space-800/50 rounded-lg text-gray-300 hover:text-cosmic-400 hover:bg-cosmic-500/10 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
