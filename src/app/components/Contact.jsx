"use client";
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Modal from './Modal';
export default function Contact() {
  const [formRef, formInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: '-50px 0px'
    })
  
    const [picRef, picInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: '-50px 0px'
    })
  
    const picVariants = {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    }
  
    const formsVariants = {
      hidden: { opacity: 0, x: 30, scale: 0.95 },
      visible: { 
        opacity: 1, 
        x: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.1
        }
      }
    }
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // for success/error feedback

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

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleAccept = () => {
   
    closeModal();
  };
  const handleDecline = () => {
   
    closeModal();
  };  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok) {
        openModal()
        setStatus('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus(result.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('Something went wrong. Try again later.');
    }
  };
  
  return (
    <>
      <section className="py-16" id='contact'>
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0D7D43] uppercase mb-4"
          initial={{ y: -20 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <div className="container mx-auto px-6 lg:px-20">
          <h3 className="text-xl font-semibold text-slate-500 text-center mb-6">
            If You Have Any Query Or Complaint, Feel Free To Contact Us
          </h3>

          {status && <p className="text-center text-sm mb-4 text-green-600">{status}</p>}

          <div className="grid   sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.form
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={formsVariants}
              onSubmit={handleSubmit}
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-800"
            >
              <input type="text" name="firstName" placeholder="Your Name"
                className="p-3 border placeholder:text-gray-500 border-slate-700 rounded"
                value={formData.firstName} onChange={handleChange} />

              <input type="text" name="lastName" placeholder="Last Name"
                className="p-3 border placeholder:text-gray-500 border-slate-700 rounded"
                value={formData.lastName} onChange={handleChange} />

              <input type="tel" name="phone" placeholder="Phone"
                className="p-3 border placeholder:text-gray-500 border-slate-700 rounded"
                value={formData.phone} onChange={handleChange} />

              <input type="email" name="email" placeholder="Email"
                className="p-3 border placeholder:text-gray-500 border-slate-700 rounded"
                value={formData.email} onChange={handleChange} />

              <input type="text" name="subject" placeholder="Subject"
                className="md:col-span-2 col-span-2 placeholder:text-gray-500 border-slate-700 p-3 border rounded"
                value={formData.subject} onChange={handleChange} />

              <textarea name="message" placeholder="Message"
                className="resize-none md:col-span-2 col-span-2 placeholder:text-gray-500 p-3 border border-slate-700 rounded h-40"
                value={formData.message} onChange={handleChange} />

              <button type="submit"
                className="bg-gradient-to-l from-emerald-600 to-green-800 cursor-pointer *:transition duration-200 border border-[#0D7D43] text-white py-3 px-6 rounded col-span-2">
                Send Message
              </button>
            </motion.form>

            <motion.div 
            ref={picRef}
            initial="hidden"
            animate={picInView ? "visible" : "hidden"}
            variants={picVariants}
            className="space-y-6">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-2">
                  <FaMapMarkerAlt size={30} className='text-green-800' />
                </div>
                <h4 className="font-semibold text-slate-800">Our Office</h4>
                <p className='text-slate-500'>Gulshan-e-Iqbal, Karachi</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-2">
                  <FaPhone size={30} className='text-green-800' />
                </div>
                <h4 className="font-semibold text-slate-800">Call</h4>
                <p className='text-slate-500'>+92 336 3332468</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-2">
                  <BiLogoGmail size={30} className='text-green-800' />
                </div>
                <h4 className="font-semibold text-slate-800">Email</h4>
                <p className='text-slate-500'>info@uc3gulshantown.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
      <Modal
        id="terms-modal"
        title="Terms of Service"
        show={isModalOpen}
        onClose={closeModal}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
      </section>
    </>
  );
}
