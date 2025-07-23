// pages/contact.js
'use client';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Contact() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });
  return (
    <>
      
      {/* Contact Section */}
      <section className="py-16 ">
      <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center text-[#0D7D43] uppercase mb-4"
            initial={{ y: -20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
        <div className="container mx-auto px-6 lg:px-20">
            
          <h3 className="text-xl font-semibold text-slate-500 text-center mb-6">If You Have Any Query Or Complaint, Feel Free To Contact Us</h3>
          <div className="grid lg:grid-cols-3 gap-10">
            <form className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-3 border placeholder:text-gray-500 border-slate-700 rounded" />
              <input type="text" placeholder="Last Name" className="p-3 border placeholder:text-gray-500  border-slate-700 rounded" />
              <input type="tel" placeholder="Phone" className="p-3 border placeholder:text-gray-500 border-slate-700 rounded" />
              <input type="email" placeholder="Email" className="p-3 border  placeholder:text-gray-500 border-slate-700 rounded" />
              <input type="text" placeholder="Subject" className="md:col-span-2 placeholder:text-gray-500 border-slate-700 p-3 border rounded" />
              <textarea placeholder="Message" className=" resize-none md:col-span-2 placeholder:text-gray-500 p-3 border border-slate-700 rounded h-40" />
              <button type="submit" className="bg-green-600 hover:bg-white hover:text-black transition duration-200 text-white py-3 px-6 rounded col-span-2">Send Message</button>
            </form>

            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-2">
                   <FaMapMarkerAlt size={30} className='text-green-800'/>
                </div>
                <h4 className="font-semibold text-slate-800">Our Office</h4>
                <p className='text-slate-500'>Gulshan-e-Iqbal, Karachi</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-2">
                 <FaPhone size={30} className='text-green-800'/> 
                </div>
                <h4 className="font-semibold text-slate-800">Call</h4>
                <p className='text-slate-500'>+92 336 3332468</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-2">
                  <BiLogoGmail size={30} className='text-green-800'/>
                </div>
                <h4 className="font-semibold text-slate-800">Email</h4>
                <p className='text-slate-500'>info@uc3gulshantown.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
