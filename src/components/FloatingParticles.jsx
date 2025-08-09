import React, { useEffect, useRef } from 'react';

const FloatingParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
      
      const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = `radial-gradient(circle, ${color}, transparent)`;
      
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="floating-particles" />;
};

export default FloatingParticles;
