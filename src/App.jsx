import React from 'react';
import StarField from './components/StarField';
import FloatingParticles from './components/FloatingParticles';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen bg-space-gradient">
      {/* Background Effects */}
      <StarField />
      <FloatingParticles />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
