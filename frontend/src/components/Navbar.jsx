import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets, menuLinks } from '../assets/assests'; // make sure path is correct
import { Link as ScrollLink } from 'react-scroll';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
  if (open) {
    document.body.style.overflow = 'hidden'; // disables scroll (x + y)
  } else {
    document.body.style.overflowX = 'hidden'; // reapply only x hidden
    document.body.style.overflowY = 'auto';   // re-enable vertical scroll
  }

  return () => {
    document.body.style.overflowX = 'hidden'; // cleanup on unmount
    document.body.style.overflowY = 'auto';
  };
}, [open]);

useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true); // always show near top
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down hide
      } else {
        setShowNavbar(true); // scrolling up show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`border-b border-borderColor py-7 fixed top-0 w-full bg-background z-50 transition-transform duration-300
      ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
    <div className={`flex items-center justify-between  text-[17px]
    w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl
  text-gray-600  relative transition-all`}> 
        <img
  src={assets.logo}
  alt="Navbar Logo"
  className="h-8 cursor-pointer"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
/>
        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 
        max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start
        sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 mt-6 sm:mt-0
        ${open ? "max-sm:translate-x-0 bg-background" : "max-sm:translate-x-full"}`}>
            {menuLinks.map((link, index) => {
  return (
    <button
      key={index}
      onClick={() => {
        setOpen(false);
        const section = document.getElementById(link.path.replace('#', ''));
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className="your-styles cursor-pointer bg-transparent border-none outline-none"
    >
      {link.name}
    </button>
  );
})}
        </div>
        
        <button className='sm:hidden cursor-pointer'> 
            <img 
            onClick={() => setOpen(!open)}
            src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
        </button>

    </div>
    </div>
  )
};

export default Navbar;
