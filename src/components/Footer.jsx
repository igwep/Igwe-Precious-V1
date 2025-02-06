import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Facebook,  LinkedIn } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const [socialLinksIndex, setSocialLinksIndex] = useState(null);
  
  const socialLinks = [
    {
      name: 'GitHubIcon',
      url: 'https://github.com/igwep',
      label: 'GitHub',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/precious.igwe.9828?mibextid=LQQJ4d',
      label: 'Facebook',
    },
    {
      name: 'LinkedInIcon',
      url: 'https://www.linkedin.com/in/precious-igwe-454244317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      label: 'LinkedIn',
    },
  ];

  const icons = {
    GitHubIcon: GitHubIcon,
    Facebook: Facebook,
    LinkedInIcon: LinkedIn,
  };
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#222',
        color: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
      
      }}
    >
      {/* Social Media Links */}
      <div  className='flex justify-center gap-4'>
      {socialLinks.map((item, index) => {
              const IconComponent = icons[item.name];
              return (
                <a
                  key={index}
                  href={item.url}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color:
                      socialLinksIndex === index
                        ? 'rgba(0, 192, 253, 0.8)'
                        : 'white',
                    textShadow:
                      socialLinksIndex === index
                        ? '0 0 10px rgba(0, 192, 253, 0.8)'
                        : 'none',
                  }}
                  onMouseEnter={() => setSocialLinksIndex(index)}
                  onMouseLeave={() => setSocialLinksIndex(null)}
                >
                  <IconComponent />
                </a>
              );
            })}
      </div>

      {/* Navigation Links */}
      <div className='flex justify-center gap-4'>
        <Link to="/about" underline="none" sx={{ mx: 2, color: 'inherit', fontSize: '0.875rem' }} className='hover:text-mainColor'>
          About Me
        </Link>
        <Link to="/projects" underline="none" sx={{ mx: 2, color: 'inherit', fontSize: '0.875rem' }} className='hover:text-mainColor'>
          Projects
        </Link>
        <Link to="/contact" underline="none" sx={{ mx: 2, color: 'inherit', fontSize: '0.875rem' }} className='hover:text-mainColor'>
          Contact
        </Link>
        <Link href="#blog" underline="none" sx={{ mx: 2, color: 'inherit', fontSize: '0.875rem' }} className='hover:text-mainColor'>
          Blog
        </Link>
      </div>

      {/* Copyright */}
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'gray' }}>
        © 2024 My Portfolio. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
