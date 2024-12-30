import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#222',
        color: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
      
      }}
    >
      {/* Social Media Links */}
      <Box mb={2}>
        <Link href="https://www.facebook.com/precious.igwe.9828?mibextid=LQQJ4d" target="_blank" rel="noopener" sx={{ mx: 1, color: 'inherit' }}>
          <Facebook />
        </Link>
       
        <Link href="https://github.com/igwep" target="_blank" rel="noopener" sx={{ mx: 1, color: 'inherit' }}>
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/precious-igwe-454244317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener" sx={{ mx: 1, color: 'inherit' }}>
          <LinkedIn />
        </Link>
      </Box>

      {/* Navigation Links */}
      <Box mb={3}>
        <Link href="#about" underline="none" sx={{ mx: 2, color: 'inherit', fontSize: '0.875rem' }}>
          About Me
        </Link>
        <Link href="#projects" underline="none" sx={{ mx: 2, color: 'inherit', fontSize: '0.875rem' }}>
          Projects
        </Link>
        <Link href="#contact" underline="none" sx={{ mx: 2, color: 'inherit', fontSize: '0.875rem' }}>
          Contact
        </Link>
        <Link href="#blog" underline="none" sx={{ mx: 2, color: 'inherit', fontSize: '0.875rem' }}>
          Blog
        </Link>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'gray' }}>
        © 2024 My Portfolio. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
