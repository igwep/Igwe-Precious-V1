import React, { useEffect } from 'react';
import { Grid, Paper, Typography, Box, Container } from '@mui/material';
import { GitHub, Javascript } from '@mui/icons-material';
import CanvasNest from 'canvas-nest.js';
import { motion } from 'framer-motion';

// SVG imports
import HtmlLogo from '../components/svg/HtmlLogo';
import { CssLogo } from '../components/svg/CssLogo';
import { FirebaseLogo } from '../components/svg/FirebaseLogo';
import { ReactLogo } from '../components/svg/React';

const techStack = [
  { name: 'React', icon: <ReactLogo style={{ width: 'auto', height: '60px' }} />, description: 'A JavaScript library for building user interfaces.' },
  { name: 'HTML5', icon: <HtmlLogo style={{ width: 'auto', height: '60px' }} />, description: 'The standard markup language for creating web pages.' },
  { name: 'CSS3', icon: <CssLogo style={{ width: 'auto', height: '60px' }} />, description: 'Style sheet language used for describing the presentation of a document.' },
  { name: 'JavaScript', icon: <Javascript sx={{ fontSize: 60, color: '#F0DB4F' }} />, description: 'A versatile programming language primarily used for web development.' },
  { name: 'GitHub', icon: <GitHub sx={{ fontSize: 60, color: 'white' }} />, description: 'A distributed version control system to track changes in source code.' },
  { name: 'Firebase', icon: <FirebaseLogo style={{ width: 'auto', height: '60px' }} />, description: 'A platform for building mobile and web applications.' },
];

const ParticlesBackground = () => {
  useEffect(() => {
    const canvasNest = new CanvasNest(document.getElementById('canvasContainer'), {
      color: '255, 255, 255', // White color for visibility
      opacity: 3,             // Adjust opacity
      count: 150,             // Increase the number of particles
      zIndex: 0.5,            // Ensure particles are below other content
    });

    return () => {
      canvasNest.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="md:h-[100%] h-[180vh]"
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
const TechStack = () => {
  return (
    <Box sx={{ backgroundColor: '', color: 'white', py: 8 }}>
      <ParticlesBackground />
      <motion.div initial="hidden"
         whileInView="visible"
        
         viewport={{ once: true }}
         variants={imageVariants}>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{
            fontWeight: 'bold',
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 4px rgba(0, 192, 253, 0.8)',
          }}>
            My Tech Stack
          </Typography>
      </motion.div>
      <motion.div 
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
       variants={textVariants}
       className="relative z-10">
        <Container maxWidth="lg">
          
          <Grid container spacing={4} justifyContent="center">
            {techStack.map((tech, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: '#1e1e1e',
                    p: 4,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>{tech.icon}</Box>
                  <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                    {tech.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ color: 'white' }}>
                    {tech.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>
    </Box>
  );
};

export default TechStack;
