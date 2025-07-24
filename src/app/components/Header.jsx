'use client'

import React, { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Header = () => {
  const [navState, setNavState] = useState(false);
  
  const handleHeadClick = (sectionId) => {
    setNavState(false); // Close mobile menu if open
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const HeadItems = [
    { 
      name: 'Find a Location', 
      icon: <FaMapLocationDot className="text-white" />, 
      id: 'about' 
    },
    { 
      name: '+92 336 3332468', 
      icon: <FaPhoneAlt className="text-white" />, 
      id: 'contact' 
    },
    { 
      name: 'info@uc3gulshantown.com', 
      icon: <MdEmail className="text-white" />, 
      id: 'contact' 
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookSquare size={20} className="text-white hover:text-blue-400 transition-colors" />, url: '#' },
    { icon: <FaSquareXTwitter size={20} className="text-white hover:text-black transition-colors" />, url: '#' },
    { icon: <FaLinkedin size={20} className="text-white hover:text-blue-600 transition-colors" />, url: '#' },
    { icon: <FaInstagramSquare size={20} className="text-white hover:text-pink-500 transition-colors" />, url: '#' },
  ];

  return (
    <div>
      {/* Desktop Header */}
      <div className="w-full bg-[#212529] p-3 text-white px-5 hidden md:block">
        <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
          <section>
            <div className="flex gap-5 flex-wrap">
              {HeadItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-2 items-center hover:text-gray-300 transition-colors cursor-pointer"
                  onClick={() => handleHeadClick(item.id)}
                >
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex gap-5 flex-wrap">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Mobile Header - Add your mobile implementation here */}
      {/* You can use the navState to control mobile menu visibility */}
    </div>
  );
};

export default Header;