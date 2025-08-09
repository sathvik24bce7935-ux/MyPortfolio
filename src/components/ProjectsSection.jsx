import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      title: 'Vaidya',
      description: 'A 3D visualization tool for cosmic ray interactions in Earth\'s atmosphere using WebGL and advanced physics calculations.',
      tech: ['JavaScript', 'HTML', 'CSS','Tailwind'],
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
      category: 'HealthCare',
      demoUrl: 'https://hack-orbit-git-main-dheerajs60s-projects.vercel.app/',
      githubUrl: '#'
    },
		{
      title: 'My Portfolio Website',
      description: 'I am a Computer Science student and aspiring astrophysicist, deeply fascinated by the mysteries of the universe. Since childhood, my passion for particle physics has driven me to explore, learn, and push beyond the boundaries of conventional knowledge. My curiosity fuels my journey to merge technology and science, with the ultimate goal of contributing to groundbreaking research in astrophysics and particle physics—advancing our understanding of the cosmos, one discovery at a time.',
      tech: ['JavaScript', 'React','Tailwind'],
      image: 'https://www.digitalsilk.com/wp-content/uploads/2023/09/website-launch-checklist-hero-image.jpg',
      category: 'Portfolio',
      demoUrl: 'https://lio-website-w3lx-alphaproject.netlify.app',
      githubUrl: 'https://github.com/sathvik24bce7935-ux/MyPortfolio'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-space-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-orbitron font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group perspective-1000"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="relative glass-morphism rounded-2xl overflow-hidden transform-style-3d cursor-pointer h-96"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing border animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cosmic-500 via-nebula-purple to-nebula-cyan opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-space-800 rounded-2xl h-full p-6 m-1">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-900/80 to-transparent" />
                  </div>

                  <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-cosmic-500/20 text-cosmic-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-cosmic-400 hover:text-cosmic-300 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cosmic-400 hover:text-cosmic-300 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
