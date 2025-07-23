'use client'
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaAngleRight, FaMapMarkerAlt, FaEnvelope, FaPhone, FaShare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#0D7D43] py-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Column 1 */}
          <div className="flex flex-col">
            <h4 className="text-white text-2xl font-semibold mb-4">
              UC 03 <br /> GULSHAN TOWN
            </h4>
            <p className="text-white">
              Gulshan-e-Iqbal UC-3 is a vibrant and populous locality situated in the heart of Karachi, Pakistan.
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <FaShare className="text-white text-2xl" />
              <a href="#" className="bg-white text-[#29AB87] p-2 rounded-full"><FaFacebookF /></a>
              <a href="#" className="bg-white text-[#29AB87] p-2 rounded-full"><FaTwitter /></a>
              <a href="#" className="bg-white text-[#29AB87] p-2 rounded-full"><FaInstagram /></a>
              <a href="#" className="bg-white text-[#29AB87] p-2 rounded-full"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
            <a href="/about" className="text-white mb-1 hover:underline"><FaAngleRight className="inline-block mr-2" /> About Us</a>
            <a href="/contact" className="text-white mb-1 hover:underline"><FaAngleRight className="inline-block mr-2" /> Contact Us</a>
            <a href="/news-events" className="text-white mb-1 hover:underline"><FaAngleRight className="inline-block mr-2" /> News & Events</a>
            <a href="/team" className="text-white mb-1 hover:underline"><FaAngleRight className="inline-block mr-2" /> Our Team</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h4 className="text-white text-xl font-semibold mb-4">Our Services</h4>
            <a href="/services" className="text-white mb-1 hover:underline"><FaAngleRight className="inline-block mr-2" /> Birth Certificate</a>
            <a href="/services" className="text-white mb-1 hover:underline"><FaAngleRight className="inline-block mr-2" /> Death Certificate</a>
            <a href="/services" className="text-white mb-1 hover:underline"><FaAngleRight className="inline-block mr-2" /> Marriage Certificate</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h4 className="text-white text-xl font-semibold mb-4">Contact Info</h4>
            <a href="https://maps.app.goo.gl/jwHoYw6nKfWg66Z68" className="text-white mb-1 hover:underline"><FaMapMarkerAlt className="inline-block mr-2" />Gulshan-e-Iqbal, Karachi</a>
            <a href="#" className="text-white mb-1 hover:underline"><FaEnvelope className="inline-block mr-2" /> info@uc3gulshantown.com</a>
            <a href="#" className="text-white mb-4 hover:underline"><FaPhone className="inline-block mr-2" /> +92 336 3332468</a>

            <form className="flex flex-col">
              <label htmlFor="email" className="text-white mb-1">Email address</label>
              <input
                type="email"
                id="email"
                className="p-2 rounded border border-gray-300 text-black bg-white mb-3"
                placeholder="name@example.com"
              />
              <button type="submit" className="bg-white text-[#29AB87] font-semibold py-2 rounded hover:bg-gray-200">
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
