import React, {useEffect} from 'react';
import CanvasNest from 'canvas-nest.js';
import { motion } from 'framer-motion';
import { image } from 'framer-motion/client';

const projects = [
  {
    title:'BlogSpot',
    description: 'A blogging platform that allows users to create, share, and manage their blogs through Sanity UI.',
    link: 'https://blogged-48qg.vercel.app',
    image: 'assets/images/blogspot.png'
  },
  {
    title: 'TODOLY',
    description: 'TODOLY web app is a user-friendly application designed to help individuals efficiently organize, manage, and track their tasks.',
    link: 'https://todoly.onrender.com',
    image: 'assets/images/todoly-face.PNG' // Replace with actual project image
  },
  {
    title: 'EshelfAfrica',
    description: 'EshelfAfrica is an e-commerce platform that connects buyers and sellers of books.',
    link: 'https://eshelfafrica.onrender.com',
    image: 'assets/images/eshelf-face.PNG' // Replace with actual project image
  },

  {
    title: 'Epiphany',
    description: 'A responsive website for an individual lawyer, built with React and styled with Tailwind CSS.',
    link: 'https://eshelfafrica.onrender.com',
    image: 'assets/images/epiphany-face.PNG' // Replace with actual project image
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
    <section id="projects" className="py-16 font-mono min-h-screen relative md:px-16 ">
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
          className="text-4xl py-4 font-bold text-center text-white mb-12"
        >
          My Projects
        </motion.h2>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover="hover"
              className="flex"
            >
              <div
                style={{
                  background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
                  border: '1px solid rgba(0, 192, 253, 0.2)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
                className="rounded-xl overflow-hidden flex flex-col h-full w-full transition-all duration-300 hover:border-[#00C0FD]/40 hover:shadow-[0_8px_30px_rgba(0,192,253,0.3)]"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-[#00C0FD] transition-colors duration-300"
                    >
                      View Live Demo →
                    </a>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{
                      background: ' #00C0FD',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-2 flex-grow">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00C0FD] hover:text-[#00a8e8] transition-colors duration-300 mt-auto"
                  >
                    Explore Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default ProjectsSection;
