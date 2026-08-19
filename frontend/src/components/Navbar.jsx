import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { assets, menuLinks } from '../assets/assets';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const goTo = (link) => {
    setOpen(false);

    if (link.name === 'Home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const section = document.getElementById(link.path.replace('#', ''));

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const goToContact = () => {
    setOpen(false);

    const section = document.getElementById('contact-us');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const goHome = () => {
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-background/90
        backdrop-blur-md
        border-b
        border-borderColor
      "
    >
      {/* Main Navbar */}
      <div
        className="
          section-x
          w-full
          h-[72px]
          flex
          items-center
          justify-between
          relative
        "
      >
        {/* Logo */}
        <button
          type="button"
          onClick={goHome}
          className="
            flex
            items-center
            shrink-0
            bg-transparent
            border-none
            p-0
            cursor-pointer
          "
          aria-label="Go to home"
        >
          <img
            src={assets.logo}
            alt="ShiftCode"
            className="h-8 w-auto logo-green"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {menuLinks.map((link, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(link)}
              className="
                relative
                cursor-pointer
                bg-transparent
                border-none
                outline-none
                text-muted
                hover:text-text
                transition-colors
                duration-300
                group
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-primary
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </button>
          ))}
        </nav>

        {/* Desktop Start Project */}
        <button
          type="button"
          onClick={goToContact}
          className="
            hidden
            lg:inline-flex
            items-center
            justify-center
            px-5
            py-2.5
            text-primary
            border-1
            border-primary
            rounded-2xl
            text-md
            font-semibold
            hover:bg-coprimary
            hover:text-primary
            transition-colors
            duration-300
            cursor-pointer
            shrink-0
          "
        >
          Contact Us
        </button>

        {/* Mobile / Tablet Burger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="
            lg:hidden
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-lg
            bg-transparent
            border-none
            cursor-pointer
            shrink-0
          "
        >
          <img
            src={open ? assets.close_icon : assets.menu_icon}
            alt=""
            aria-hidden="true"
            className="
              w-6
              h-6
              object-contain
              brightness-0
              invert
            "
          />
        </button>
      </div>

      {/* Mobile / Tablet Dropdown */}
      <div
        className={`
          lg:hidden
          w-full
          bg-background
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            open
              ? 'max-h-[32rem] opacity-100 border-t border-borderColor'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <nav
          className="
            w-full
            flex
            flex-col
            items-center
            justify-center
            text-center
            gap-2
            py-7
            px-4
          "
        >
          {menuLinks.map((link, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(link)}
              className="
                w-full
                flex
                items-center
                justify-center
                text-center
                text-muted
                hover:text-primary
                transition-colors
                duration-300
                text-lg
                py-3.5
                cursor-pointer
                bg-transparent
                border-none
              "
            >
              {link.name}
            </button>
          ))}

          <button
            type="button"
            onClick={goToContact}
            className="
              mt-4
              px-7
              py-3
              bg-primary
              text-background
              rounded-full
              text-sm
              font-semibold
              hover:bg-light
              transition-colors
              duration-300
              cursor-pointer
            "
          >
            Start Project
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;