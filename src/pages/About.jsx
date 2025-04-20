import React, { useEffect } from 'react';
import CanvasNest from 'canvas-nest.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  useEffect(() => {
    const canvasNest = new CanvasNest(document.getElementById('canvasContainer'), {
      color: '255, 255, 255', // White particles for visibility
      opacity: 3,           // Adjust opacity
      count: 150,             // Increase the number of particles
      zIndex: 1,              // Ensure particles are below other content
    });

    return () => {
      canvasNest.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className='md:h-[100%] h-[190vh]'
      id="canvasContainer" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 1,
        pointerEvents: 'none'
      }} 
    />
  );
};

/* const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeInOut' }
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
}; */

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 text-white overflow-hidden">
    <ParticlesBackground />
    
    {/* Floating particles overlay */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-[#00C0FD] rounded-full opacity-20 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  
    <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16  relative z-10">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/3 relative group"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,192,253,0.3)]">
          <img
            src="/assets/images/aboutImage.jpg"
            alt="About Me"
            className="w-full h-auto rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00C0FD] rounded-2xl transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 rounded-2xl" />
        </div>
      </motion.div>
  
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 bg-gradient-to-br from-[#1a1a1a]/90 to-[#2d2d2d]/90 p-8 md:p-12 rounded-3xl backdrop-blur-lg border border-[#ffffff15] shadow-2xl"
      >
        <motion.h1
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00C0FD] via-[#00a8e8] to-[#0096d3] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,192,253,0.5)]"
        >
          About Me
        </motion.h1>
  
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-semibold mb-8 italic bg-gradient-to-r from-[#00C0FD] to-[#00a8e8] bg-clip-text text-transparent"
        >
          Hi there! Let me share a little about my journey and what drives me.
        </motion.h3>
  
        <div className="space-y-6">
          {[
            (
              "I'm a passionate software developer with a love for creating innovative solutions. My journey in tech began with a fascination for how things work, and it has evolved into a career where I can turn ideas into reality."
            ),
            (
              "I specialize in web development, focusing on building responsive and user-friendly applications. I enjoy the challenge of solving complex problems and continuously learning new technologies."
            ),
            (
              "When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying outdoor adventures."
            ),
            (
              "I'm excited to connect with like-minded individuals and collaborate on projects that make a difference. Let's create something amazing together!"
            )
            // Your paragraphs array here (copy existing content)
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="text-lg leading-relaxed text-gray-200/90"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
  
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 text-black font-bold rounded-full transition-all duration-300 
            bg-gradient-to-r from-[#00C0FD] to-[#00a8e8] 
            hover:bg-gradient-to-l hover:from-[#00C0FD] hover:to-[#00a8e8]
            shadow-[0_0_25px_rgba(0,192,253,0.4)] hover:shadow-[0_0_40px_rgba(0,192,253,0.6)] 
            transform hover:scale-105"
          >
            Contact Me
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  
    {/* TechSpan component (add at top of file) */}
    <style jsx>{`
      .tech-span {
        @apply font-semibold bg-gradient-to-r from-[#00C0FD] to-[#00a8e8] bg-clip-text text-transparent;
        text-shadow: 0 0 8px rgba(0,192,253,0.4);
        transition: all 0.3s ease;
      }
      .tech-span:hover {
        text-shadow: 0 0 15px rgba(0,192,253,0.6);
      }
    `}</style>
  </section>
  );
};

export default About;
