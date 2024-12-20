import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ menuToggle, setMenuToggle }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (scrollPosition > 140) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const navLinks = [
    { linkName: 'Home', routes: '/' },
    { linkName: 'About', routes: '/about' },
    { linkName: 'Projects', routes: '/projects' },
    { linkName: 'Contact', routes: '/contact' },
    { linkName: 'Tech stack', routes: '/tech-stack' },
  ];

  const socialLinks = ['GitHubIcon', 'XIcon', 'LinkedInIcon'];
  const [socialLinksIndex, setSocialLinksIndex] = useState(null);

  const icons = {
    GitHubIcon: GitHubIcon,
    XIcon: XIcon,
    LinkedInIcon: LinkedInIcon,
  };

  return (
    <div
      className={`${stickyNavbar ? 'fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm h-auto overflow-hidden' : 'w-full'} ${
        menuToggle && stickyNavbar ? 'fixed top-0 bottom-0 h-[100vh] w-full' : 'w-full'
      }`}
    >
      <nav className='flex items-center justify-between px-4 py-4 md:px-16 md:py-4 xl:px-20 xl:py-8 h-auto'>
        <Link to="/">
          <p
            className='font-bold md:text-xl text-2xl'
            style={{
              background: ' #00C0FD',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
            }}
          >
            &lt;Igwe <span className='text-white'>Precious</span> /&gt;
          </p>
        </Link>

        {/* Desktop Links */}
        <ul className='md:flex gap-16 font-semibold hidden'>
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.routes}
              className='cursor-pointer'
              style={{
                color: hoveredIndex === index ? 'rgba(0, 192, 253, 0.8)' : 'white',
                textShadow: hoveredIndex === index ? '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.linkName}
            </Link>
          ))}
          <li className='flex gap-4'>
            {socialLinks.map((items, index) => {
              const IconComponent = icons[items];
              return (
                <Link
                  key={index}
                  style={{
                    color: socialLinksIndex === index ? 'rgba(0, 192, 253, 0.8)' : 'white',
                    textShadow: socialLinksIndex === index ? '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
                  }}
                  onMouseEnter={() => setSocialLinksIndex(index)}
                  onMouseLeave={() => setSocialLinksIndex(null)}
                >
                  <li>
                    <IconComponent />
                  </li>
                </Link>
              );
            })}
          </li>
        </ul>

        {/* Burger Menu */}
        <button 
        style={{
          border: '2px solid rgb(0, 192, 253)'
        }}
          onClick={() => setMenuToggle(true)}
          className='md:hidden items-center px-1  rounded-md flex cursor-pointer transition-transform duration-300 ease-in-out'
        >
          <MenuIcon  sx={{
      fontSize: 24,
      transition: '0.3s ease-in-out', // Smooth transition
      '&:hover': {
        color: 'rgba(0, 192, 253, 0.8)', // Change color on hover
        textShadow: '0 0 10px rgba(0, 192, 253, 0.8)', // Add glowing effect
      },
    }} />
        </button>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
<div
  style={{ backgroundColor: '#222' }}
  className={`fixed top-0 left-0 w-screen h-screen flex flex-col transition-transform  duration-600 ease-in-out z-50 ${
    menuToggle ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'
  }`}
>
  <div className='flex justify-between items-center w-full px-4 py-4 border-b border-white'>
    <p
      className='font-bold md:text-xl text-2xl'
      style={{
        background: ' #00C0FD',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
      }}
    >
      &lt;Igwe <span className='text-white'>Precious</span> /&gt;
    </p>
    <button onClick={() => setMenuToggle(false)} className='transition-transform duration-300 ease-in-out'>
      <CloseIcon
        sx={{
          fontSize: 35,
          transition: '0.3s ease-in-out', // Smooth transition
          '&:hover': {
            color: 'rgba(0, 192, 253, 0.8)', // Change color on hover
            textShadow: '0 0 10px rgba(0, 192, 253, 0.8)', // Add glowing effect
          },
        }}
      />
    </button>
  </div>
  <div className='text-2xl'>
    <div className='flex flex-col gap-4 border-white border-b px-4 py-4'>
      {navLinks.map((item, index) => (
        <Link
          key={index}
          to={item.routes}
          style={{
            color: hoveredIndex === index ? 'rgba(0, 192, 253, 0.8)' : 'white',
            textShadow: hoveredIndex === index ? '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
          }}
          onClick={() => setMenuToggle(false)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {item.linkName}
        </Link>
      ))}
    </div>
    <div className='w-full mt-8'>
      <div className='flex gap-4 w-full items-center justify-center'>
        {socialLinks.map((items, index) => {
          const IconComponent = icons[items];
          return (
            <Link
              key={index}
              style={{
                color: socialLinksIndex === index ? 'rgba(0, 192, 253, 0.8)' : 'white',
                textShadow: socialLinksIndex === index ? '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
              }}
              onMouseEnter={() => setSocialLinksIndex(index)}
              onMouseLeave={() => setSocialLinksIndex(null)}
            >
              <div>
                <IconComponent sx={{ fontSize: 35 }} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
  <div className='absolute bottom-0 w-full flex justify-center p-2'>
    <Typography variant='body2' sx={{ fontSize: '0.75rem', color: 'gray' }}>
      © 2024 My Portfolio. All Rights Reserved.
    </Typography>
  </div>
</div>

      </nav>
    </div>
  );
};

export default Navbar;
