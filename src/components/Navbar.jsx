import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='w-full'>
      <nav className='flex justify-between md:px-16 md:py-4 xl:px-20 xl:py-8  '>
      <div>
        <p>name here</p>
      </div>
      <ul className='md:flex gap-16    hidden  '>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/tech-stack">Tech Stack</Link>
          </li>
          <li className='flex gap-4 '>
          <Link>
          <GitHubIcon />
          </Link>
          <Link>
          <XIcon />
          </Link>
          <Link>
          <LinkedInIcon />
          </Link>
        </li>
      </ul>
      <div className='md:hidden flex'>
        <MenuIcon />
      </div>
      {/* mobile links */}
      {/* <div>
        
      </div> */}
    </nav>
    </div>
  );
};

export default Navbar;
