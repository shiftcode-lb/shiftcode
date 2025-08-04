import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets, menuLinks } from '../assets/assests'; // make sure path is correct

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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


  return (
    <div className='border-b border-borderColor py-7'>
    <div className={`flex items-center justify-between  text-[17px]
    w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl
  text-gray-600  relative transition-all`}> 
        <Link to='/'>
        <img src={assets.logo} alt="Navbar Logo" className="h-8" />
        </Link>
        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 
        max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start
        sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 mt-6 sm:mt-0
        ${open ? "max-sm:translate-x-0 bg-background" : "max-sm:translate-x-full"}`}>
            {menuLinks.map((link, index) => (
                <Link key={index} to={link.path} onClick={() => setOpen(false)}> 
                    {link.name}
                </Link>
            ))} 
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
