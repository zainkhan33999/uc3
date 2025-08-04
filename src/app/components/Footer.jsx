'use client'
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaAngleRight, FaMapMarkerAlt, FaEnvelope, FaPhone, FaShare } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import Copyright from './Copyright';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const quickLinks = [
    { name: 'About Us', icon: <FaAngleRight className="inline-block mr-2" />, id: 'about' },
    { name: 'Contact Us', icon: <FaAngleRight className="inline-block mr-2" />, id: 'contact' },
    { name: 'News & Events', icon: <FaAngleRight className="inline-block mr-2" />, id: 'news-events' },
    { name: 'Our Team', icon: <FaAngleRight className="inline-block mr-2" />, id: 'team' }
  ];

  const services = [
    { name: 'Birth Certificate', icon: <FaAngleRight className="inline-block mr-2" />, id: 'birth-certificate' },
    { name: 'Death Certificate', icon: <FaAngleRight className="inline-block mr-2" />, id: 'death-certificate' },
    { name: 'Marriage Certificate', icon: <FaAngleRight className="inline-block mr-2" />, id: 'marriage-certificate' }
  ];

  return (
    <div className=" bg-gradient-to-t bg-secondary py-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Column 1 */}
          <div className="flex flex-col">
            <h4 className=" font-primary text-white text-2xl font-semibold mb-4">
              UC 04 <br /> GULSHAN TOWN
            </h4>
            <p className=" font-primary text-white">
              Gulshan-e-Iqbal UC-4 is a vibrant and populous locality situated in the heart of Karachi, Pakistan.
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <FaShare className="text-white  text-2xl" />
              <a href="#" className="bg-white text-slate-500 hover:bg-blue-500 hover:text-white p-2 rounded-full"><FaFacebookF /></a>
              <a href="#" className="bg-white text-slate-500 hover:bg-black p-2 hover:text-white rounded-full"><FaSquareXTwitter /></a>
              <a href="#" className="bg-white text-slate-500 hover:bg-pink-500 hover:text-white p-2 rounded-full"><FaInstagram /></a>
              <a href="#" className="bg-white text-slate-500 hover:bg-blue-600 hover:text-white p-2 rounded-full"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex font-secondary  flex-col">
            <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.id)}
                className="text-white mb-1 hover:underline text-left"
              >
                {link.icon} {link.name}
              </button>
            ))}
          </div>

          {/* Column 3 - Services */}
          <div className="flex font-secondary flex-col">
            <h4 className="text-white text-xl font-semibold mb-4">Our Services</h4>
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(service.id)}
                className="text-white mb-1 hover:underline text-left"
              >
                {service.icon} {service.name}
              </button>
            ))}
          </div>

          {/* Column 4 */}
          <div className="flex font-secondary flex-col">
            <h4 className="text-white text-xl font-semibold mb-4">Contact Info</h4>
            <a href="https://maps.app.goo.gl/jwHoYw6nKfWg66Z68" target="_blank" rel="noopener noreferrer" className="text-white mb-1 hover:underline">
              <FaMapMarkerAlt className="inline-block mr-2" />Gulshan-e-Iqbal, Karachi
            </a>
            <a href="mailto:gulshantown@gmail.com" className="text-white mb-1 hover:underline">
              <FaEnvelope className="inline-block mr-2" /> gulshantown@gmail.com
            </a>
            <a href="tel:+923363332468" className="text-white mb-4 hover:underline">
              <FaPhone className="inline-block mr-2" /> +92 300 9233456
            </a>

          </div>
        </div>
      </div>
  
      <Copyright/>
    </div>
  );
};

export default Footer;