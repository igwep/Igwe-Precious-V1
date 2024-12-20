import React, {useEffect} from 'react';
import CanvasNest from 'canvas-nest.js';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One, highlighting the main features and technologies used.',
    link: '#',
    image: 'https://via.placeholder.com/300' // Replace with actual project image
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two, highlighting the main features and technologies used.',
    link: '#',
    image: 'https://via.placeholder.com/300' // Replace with actual project image
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three, highlighting the main features and technologies used.',
    link: '#',
    image: 'https://via.placeholder.com/300' // Replace with actual project image
  },
];

const ParticlesBackground = () => {
  useEffect(() => {
    const canvasNest = new CanvasNest(document.getElementById('canvasContainer'), {
      color: '255, 255, 255', // White color for visibility
      opacity: 3,           // Adjust opacity
      count: 150,             // Increase the number of particles
      zIndex: 0.5,              // Ensure particles are below other content
    });

    return () => {
      canvasNest.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div  className='md:h-[100%] h-[150vh]'
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
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: 'easeInOut' }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: 'easeInOut' }
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};
const ProjectsSection = () => {
  return (
    <section  id="projects" className="py-16 min-h-screen ">
      <ParticlesBackground />
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
        initial="hidden"
        whileInView="visible"
       
        viewport={{ once: true }}
        variants={imageVariants} 
        style={{
          background: ' #00C0FD',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
        }}
        className="text-4xl py-4 font-bold text-center text-white mb-8" >
          My Projects
        </motion.h2>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}
            style={{
              backgroundColor: '#222'
            }}
            className=" rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-400 hover:text-blue-600">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
