import React, { useEffect } from 'react';
import { GitHub, Javascript } from '@mui/icons-material';
import CanvasNest from 'canvas-nest.js';
import { motion } from 'framer-motion';

// SVG imports
import HtmlLogo from '../components/svg/HtmlLogo';
import { CssLogo } from '../components/svg/CssLogo';
import { FirebaseLogo } from '../components/svg/FirebaseLogo';
import { ReactLogo } from '../components/svg/React';
import TailwindLogo from '../components/svg/TailwindLogo';
import TypeScriptLogo from '../components/svg/TypescriptLogo';
import NextSvg from '../components/svg/NextJsLogo';

const techStack = [
  { name: 'HTML5', icon: <HtmlLogo style={{ width: 'auto', height: '60px' }} />, description: 'The standard markup language for creating web pages.' },
  { name: 'CSS3', icon: <CssLogo style={{ width: 'auto', height: '60px' }} />, description: 'Style sheet language used for describing the presentation of a document.' },
  { name: 'Tailwind CSS', icon: <TailwindLogo style={{ width: 'auto', height: '60px' }} />, description: 'A utility-first CSS framework for rapidly building custom designs.' },
  { name: 'JavaScript', icon: <Javascript style={{ fontSize: '50px', color: '#F0DB4F' }} />, description: 'A versatile programming language primarily used for web development.' },
  { name: 'TypeScript', icon: <TypeScriptLogo style={{ width: 'auto', height: '60px' }} />, description: 'A statically typed superset of JavaScript that adds types.' },
  { name: 'Next.js', icon: <NextSvg  />, description: 'A React framework for production with server-side rendering and more.' },
  { name: 'React', icon: <ReactLogo />, description: 'A JavaScript library for building user interfaces.' },
  { name: 'GitHub', icon: <GitHub style={{ fontSize: '50px', color: 'white' }} />, description: 'A distributed version control system to track changes in source code.' },
  { name: 'Firebase', icon: <FirebaseLogo  />, description: 'A platform for building mobile and web applications.' },
  
  
];

const ParticlesBackground = () => {
  useEffect(() => {
    const canvasNest = new CanvasNest(document.getElementById('canvasContainer'), {
      color: '255, 255, 255',
      opacity: 3,
      count: 150,
      zIndex: 0.5,
    });

    return () => canvasNest.destroy();
  }, []);

  return (
    <div 
      className="md:h-[100%] h-[180vh]"
      id="canvasContainer"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

const TechStack = () => {
  return (
    <div style={{ 
      backgroundColor: 'rgba(0,0,0,0.3)', 
      color: 'white', 
      padding: '4rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <ParticlesBackground />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <motion.h1
          style={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #00C0FD, #00a8e8)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 15px rgba(0, 192, 253, 0.5)',
            textAlign: 'center',
            fontSize: '3rem',
            marginBottom: '3rem',
            letterSpacing: '1px'
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          My Tech Stack
        </motion.h1>
      </motion.div>
    
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 2rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          justifyContent: 'center'
        }}>
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                ease: 'easeInOut',
                delay: index * 0.1
              }}
              style={{
                background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease-in-out',
                border: '1px solid rgba(0, 192, 253, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 30px rgba(0, 192, 253, 0.3)',
                borderColor: 'rgba(0, 192, 253, 0.4)'
              }}
            >
              <div style={{ 
                marginBottom: '1.5rem', 
                display: 'flex', 
                justifyContent: 'center',
                filter: 'drop-shadow(0 0 8px rgba(0, 192, 253, 0.3))'
              }}>
                {React.cloneElement(tech.icon, {
                  style: {
                    ...tech.icon.props.style,
                    transition: 'all 0.3s ease',
                  },
                  className: 'hover:scale-110'
                })}
              </div>
              <h6 style={{ 
                color: '#00C0FD',
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}>
                {tech.name}
              </h6>
              <p style={{ 
                color: 'rgba(255,255,255,0.9)', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                minHeight: '4.5rem',
                background: 'linear-gradient(transparent 90%, rgba(0,192,253,0.1))'
              }}>
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-[#00C0FD] rounded-full opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;