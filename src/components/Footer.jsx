import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

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
        <Link href="https://facebook.com" target="_blank" rel="noopener" sx={{ mx: 1, color: 'inherit' }}>
          <Facebook />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener" sx={{ mx: 1, color: 'inherit' }}>
          <Twitter />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener" sx={{ mx: 1, color: 'inherit' }}>
          <Instagram />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener" sx={{ mx: 1, color: 'inherit' }}>
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
