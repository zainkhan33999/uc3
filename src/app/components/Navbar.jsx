"use client"
import * as React from 'react';
import NextLink from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const navItems = [
  { label: 'Home', path: 'main' },
  { label: 'About', path: 'about' },
  { label: 'News', path: 'news' },
  { label: 'Services', path: 'services' },
  { label: 'Projects', path: 'projects' },
  { label: 'Team', path: 'team' },
  { label: 'Reviews', path: 'reviews' },
  { label: 'Contact', path: 'contact' },
];

export default function Navbar() {
  const [navState, setNavState] = React.useState(false)
    
  const handleNavClick = (sectionId) => {
      setNavState(false); // Close mobile menu on click
      const element = document.getElementById(sectionId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex-grow  ">
      <nav className="text-white fixed top-0 bg-primary w-full  z-50">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Left side - Logo and mobile menu */}
          <div className="flex items-center">
            <button 
              className="mr-4 md:hidden"
              aria-label="Open menu"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <IoMdClose size={25} className='font-[900]' />
              ) : (
                <GiHamburgerMenu size={25} className='font-[900]' />
              )}
            </button>
            <h1 className="text-xl md:text-2xl  font-primary font-bold min-w-[300px]">
              UC-4 GULSHAN TOWN
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <ul
              key={item.path}>
              <li
              onClick={() => handleNavClick(item.path)}
              
             
              className="px-2 py- cursor-pointer hover:bg-blue-700 rounded transition-colors"
              >
                {item.label}
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary-dark">
            <ul className="flex flex-col items-center py-2  ">
              {navItems.map((item) => (
                <React.Fragment key={item.path}>
                  <li className="w-full text-center   border-b border-white">
                    <NextLink
                      href={item.path}
                      className="block px-4 py-2 hover:bg-secondary font-secondary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NextLink>
                  </li>
                  <li className="w-full px-4">
                
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}