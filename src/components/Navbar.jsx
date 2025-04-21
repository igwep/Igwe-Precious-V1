import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Facebook } from '@mui/icons-material';
import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ menuToggle, setMenuToggle }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [socialLinksIndex, setSocialLinksIndex] = useState(null);

  const location = useLocation();

  console.log('Current location:', location.pathname);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(position);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setStickyNavbar(scrollPosition > 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, handleScroll]);

  const navLinks = [
    { linkName: 'Home', routes: '/' },
    { linkName: 'About', routes: '/about' },
    { linkName: 'Projects', routes: '/projects' },
    { linkName: 'Contact', routes: '/contact' },
    { linkName: 'Tech stack', routes: '/tech-stack' },
  ];

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
    LinkedInIcon: LinkedInIcon,
  };

  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuToggle]);

  return (
    <div
      className={`${
        stickyNavbar
          ? 'fixed top-0  left-0 w-full bg-transparent backdrop-blur-sm h-auto overflow-hidden'
          : 'w-full'
      } ${
        menuToggle && stickyNavbar
          ? 'fixed top-0 bottom-0 h-[100vh] w-full'
          : 'w-full'
      }`}
    >
      <nav className="flex items-center font-mono justify-between px-4 py-4 md:px-16 md:py-4 xl:px-20 xl:py-8 h-auto">
        <Link to="/">
          <p
            className="font-bold md:text-xl text-2xl"
            style={{
              background: '#00C0FD',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
            }}
          >
            &lt;Igwe <span className="text-white">Precious</span> /&gt;
          </p>
        </Link>

        {/* Desktop Links */}
        <ul className="md:flex gap-16 font-semibold hidden">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.routes}
                className="cursor-pointer"
                style={{
                  color:
                    hoveredIndex === index || location.pathname === item.routes
                      ? 'rgba(0, 192, 253, 0.8)'
                      : 'white',
                  textShadow:
                    hoveredIndex === index || location.pathname === item.routes
                      ? '0 0 10px rgba(0, 192, 253, 0.8)'
                      : 'none',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.linkName}
              </Link>
            </li>
          ))}
          <li className="flex gap-4">
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
          </li>
        </ul>

        {/* Burger Menu */}
        <button
          style={{
            border: '2px solid rgb(0, 192, 253)',
          }}
          onClick={() => setMenuToggle(true)}
          className="md:hidden items-center px-1 rounded-md flex cursor-pointer transition-transform duration-300 ease-in-out"
          aria-label="Open Menu"
        >
          <MenuIcon
            sx={{
              fontSize: 24,
              transition: '0.3s ease-in-out',
              '&:hover': {
                color: 'rgba(0, 192, 253, 0.8)',
                textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
              },
            }}
          />
        </button>

        {/* Mobile Menu */}
        <div
          style={{ backgroundColor: '#222' }}
          className={`fixed top-0 left-0 w-screen h-screen flex flex-col transition-all duration-500 ease-in-out z-50 ${
            menuToggle
              ? 'translate-x-0 opacity-100 pointer-events-auto'
              : 'translate-x-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex justify-between items-center w-full px-4 py-4 border-b border-white">
            <p
              className="font-bold md:text-xl text-2xl"
              style={{
                background: '#00C0FD',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
              }}
            >
              &lt;Igwe <span className="text-white">Precious</span> /&gt;
            </p>
            <button
              onClick={() => setMenuToggle(false)}
              className="transition-transform duration-300 ease-in-out"
              aria-label="Close Menu"
            >
              <CloseIcon
                sx={{
                  fontSize: 35,
                  transition: '0.3s ease-in-out',
                  '&:hover': {
                    color: 'rgba(0, 192, 253, 0.8)',
                    textShadow: '0 0 10px rgba(0, 192, 253, 0.8)',
                  },
                }}
              />
            </button>
          </div>
          <div className="text-2xl flex-grow">
            <ul className="flex flex-col gap-4 border-white border-b px-4 py-4">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.routes}
                    className="block"
                    style={{
                      color:
                        hoveredIndex === index || location.pathname === item.routes
                          ? 'rgba(0, 192, 253, 0.8)'
                          : 'white',
                      textShadow:
                        hoveredIndex === index || location.pathname === item.routes
                          ? '0 0 10px rgba(0, 192, 253, 0.8)'
                          : 'none',
                    }}
                    onClick={() => setMenuToggle(false)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {item.linkName}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-full mt-8">
              <div className="flex gap-4 w-full items-center justify-center">
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
                      <IconComponent sx={{ fontSize: 35 }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex justify-center p-2">
            <Typography
              variant="body2"
              sx={{ fontSize: '0.75rem', color: 'gray' }}
            >
              © 2024 My Portfolio. All Rights Reserved.
            </Typography>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;