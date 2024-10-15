import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon

const Navbar = ({menuToggle, setMenuToggle}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = () => {
    const position =window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(position);
    
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    if(scrollPosition > 60){
      setStickyNavbar(true);
    
    }
    else{
      setStickyNavbar(false);
      
    }

    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[menuToggle, scrollPosition, stickyNavbar])

 
  const navLinks = [
    {linkName:'Home',
       routes:'/'
      },
      {linkName:'About',
        routes:'/about'
       },
       {linkName:'Projects',
        routes:'/projects'
       },
       {linkName:'Contact',
        routes:'/contact'
       },
       {linkName:'Tech stack',
        routes:'/tech-stack'
       }
  ]
  const socialLinks = ['GitHubIcon', 'XIcon', 'LinkedInIcon'];
  const [socialLinksIndex, setSocialLinksIndex] = useState(null);

  const icons = {
    GitHubIcon: GitHubIcon,
    XIcon: XIcon,
    LinkedInIcon: LinkedInIcon
  }
  /* {`${stickyNavbar ? 'fixed top-0 left-0 h-auto  w-full  bg-transparent backdrop-blur-sm' : 'w-full'} ${menuToggle ? 'fixed top-0 left-0   w-full  bg-transparent backdrop-blur-sm h-[100%]' : 'w-full'}`} */
  return (
    <div className={`${stickyNavbar ? 'fixed top-0 left-0   w-full  bg-transparent backdrop-blur-sm h-auto overflow-hidden' : 'w-full'} ${menuToggle && stickyNavbar ? ' fixed top-0 bottom-0   h-[100vh] w-full' : 'w-full  '}  ${!menuToggle && stickyNavbar ? '' :  'h-[100vh]' }}`}>
      <nav className='flex justify-between px-4 py-4 md:px-16 md:py-4 xl:px-20 xl:py-8 h-auto  '>
      <div>
        <p className=' font-bold md:text-xl text-2xl' style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 10px rgba(0, 192, 253, 0.8)'
            
          }}>&lt;Igwe <span className='text-white'>Precious</span> /&gt;</p>
      </div>
      <ul className='md:flex gap-16 font-semibold   hidden  '>
        {navLinks.map((item, index) =>{
          return (
          <Link key={index} to={item.routes}
          className='cursor-pointer'
          style={{color: hoveredIndex === index ?  'rgba(0, 192, 253, 0.8)' : 'white',
            textShadow: hoveredIndex === index ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
            background: hoveredIndex === index?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
            
          }}
          onMouseEnter={()=> setHoveredIndex(index)}
          onMouseLeave={()=> setHoveredIndex(null)}>{item.linkName}</Link>
        )
        })}
       
          <li className='flex gap-4 '>
            {socialLinks.map((items, index)=>{
              const IconComponent = icons[items];
              return (
                <Link key={index}   style={{color: socialLinksIndex === index ?  'rgba(0, 192, 253, 0.8)' : 'white',
                  textShadow: socialLinksIndex === index ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
                  background: socialLinksIndex === index ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none'}}
                onMouseEnter={()=> setSocialLinksIndex(index)}
                onMouseLeave={()=> setSocialLinksIndex(null)}>
                <li><IconComponent/></li>
                </Link>
              )
            })}
        </li>
      </ul>
      <button onClick={()=> setMenuToggle(true)} className='md:hidden flex cursor-pointer '>
        <MenuIcon sx={{fontSize: 35}} />
      </button>
      {/* mobile nav */}
      {/* {menuToggle ? 'flex' : 'hidden'} */}
      
  <div className={`${menuToggle ? 'translate-x-0' : 'translate-x-full'} fixed top-0 left-0 flex flex-col  transition-transform duration-300 w-full h-full`} style={{
    backgroundColor: '#222'
  }}>
    <div className='flex justify-between items-center w-full px-4 py-4 border-b border-white'>
    <p className=' font-bold md:text-xl text-2xl' style={{
            background: ' #00C0FD',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 10px rgba(0, 192, 253, 0.8)'
            
          }}>&lt;Igwe <span className='text-white'>Precious</span> /&gt;</p>
          <button onClick={()=> setMenuToggle(false)}>
            <CloseIcon />
          </button>
    </div>
      <div className='   text-2xl'>
        <div className='flex flex-col gap-4 border-white border-b px-4 py-4'>
        {
          navLinks.map((item, index)=>
            (
              <Link key={index}
              to={item.routes}
              style={{color: hoveredIndex === index ?  'rgba(0, 192, 253, 0.8)' : 'white',
                textShadow: hoveredIndex === index ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
                background: hoveredIndex === index?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
                
              }}
              onClick={()=> setMenuToggle(false)}
              onMouseEnter={()=> setHoveredIndex(index)}
              onMouseLeave={()=> setHoveredIndex(null)}
              
              >
                {item.linkName}
                </Link>
          ))
        }
        </div>
        <div className='w-full mt-8'>
        <div className='flex gap-4 w-full items-center justify-center'>
            {socialLinks.map((items, index)=>{
              const IconComponent = icons[items];
              return (
                <Link key={index}   style={{color: socialLinksIndex === index ?  'rgba(0, 192, 253, 0.8)' : 'white',
                  textShadow: socialLinksIndex === index ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none',
                  background: socialLinksIndex === index ?  '0 0 10px rgba(0, 192, 253, 0.8)' : 'none'}}
                onMouseEnter={()=> setSocialLinksIndex(index)}
                onMouseLeave={()=> setSocialLinksIndex(null)}>
                <div><IconComponent sx={{fontSize: 35}}/></div>
                </Link>
              )
            })}
        </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full flex justify-center p-2'>
      <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'gray' }}>
        © 2024 My Portfolio. All Rights Reserved.
      </Typography>
      </div>
</div>

    
    </nav>
    </div>
  );
};

export default Navbar;
