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
};

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center p-8 text-white min-h-screen">
  
      <ParticlesBackground />
      
      {/* Image Section */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={imageVariants}
      className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8 z-10 md:h-[90vh] ">
        <img
          src="/assets/images/aboutImage.jpg" // Replace with your image link
          alt="About Me"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* About Me Text Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        className="w-full md:w-2/4"
      >
        <h1 className="md:text-5xl text-3xl font-bold text-blue-500 mb-4" 
          style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
          }}>
          About Me
        </h1>
        <h3 className="md:text-2xl text-xl font-semibold mb-6 italic" style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
          }}>
          Hi there! Let me share a little about my journey and what drives me.
        </h3>
        
        <p className="md:text-lg text-base leading-relaxed mb-4">
          I’m a front-end developer with a passion for creating beautiful, intuitive, and responsive web applications. 
          I’ve always been fascinated by the way code can bring ideas to life and how technology can shape user experiences.
        </p>

        <p className="md:text-lg text-base leading-relaxed mb-4">
          My journey began when I earned my degree in Computer Science. It was during my studies that I discovered my love for web development, particularly front-end design. 
          I thrive on turning creative ideas into interactive websites using technologies like <span className="font-semibold" style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
          }}>HTML</span>, <span className="font-semibold" style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
          }}>CSS</span>, <span className="font-semibold" style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
          }}>JavaScript</span>, and <span className="font-semibold" style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
          }}>React.js</span>.
        </p>

        <p className="md:text-lg text-base leading-relaxed mb-4">
          I love combining clean design with the latest tech to create smooth and engaging user interfaces. Whether I’m developing a simple landing page or a complex web application, my goal is always the same: to create a seamless and delightful user experience.
        </p>

        <p className="md:text-lg text-base leading-relaxed mb-4">
          While I focus on front-end development, I’m also familiar with backend tools and services. 
          Over the years, I’ve explored different platforms and technologies like <span className="font-semibold" style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)'
          }}>Firebase</span> to enhance my projects, particularly when it comes to adding dynamic features like authentication and database management.
        </p>

        <p className="md:text-lg text-base leading-relaxed mb-4">
          Beyond coding, I’m always eager to learn and keep up with the latest trends in web development. I enjoy discovering new tools and techniques that can help me improve my craft. I truly believe that the best web developers are lifelong learners.
        </p>

        <p className="md:text-lg text-base leading-relaxed mb-4">
          In my free time, I like to work on personal projects, experiment with new frameworks, and continuously push myself to grow as a developer. I also love connecting with other professionals in the tech community and sharing knowledge.
        </p>

        <p className="md:text-lg text-base leading-relaxed">
          If you’re looking for someone who is passionate about web design, loves solving problems, and is always up for a challenge, I’d love to chat! Feel free to reach out – I’m always open to exciting collaborations or just talking tech. 😊
        </p>

        {/* Contact Me Button */}
        <button 
        style={{
          background: 'rgb(0, 192, 253)',
          boxShadow: '0 0 15px rgba(0, 192, 253, 0.8)', // Glow effect
          transition: 'box-shadow 0.3s ease-in-out', // Smooth transition
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 192, 253, 1)')} // Stronger glow on hover
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 192, 253, 0.8)')} className='px-4 py-2 rounded-3xl text-black font-bold mt-4 z-50'>
          <Link to="/contact">Contact Me</Link>
        </button>
        
      </motion.div>
    </section>
  );
};

export default About;
