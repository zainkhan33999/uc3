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
  });

  const [picRef, picInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const picVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const formsVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.1
      }
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleAccept = () => closeModal();
  const handleDecline = () => closeModal();

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
      <section className="py-16 bg-gradient-to-t from-primary to-secondary" id='contact'>
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-primary md:text-4xl font-extrabold text-white uppercase mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
            <h3 className="text-xl font-secondary font-medium text-white/90 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for any questions or inquiries.
            </h3>
          </motion.div>

          {status && (
            <p className={`text-center text-sm mb-8 font-bold ${
              status.includes('success') ? 'text-green-300' : 'text-red-300'
            }`}>
              {status}
            </p>
          )}

          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.form
              ref={formRef}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={formsVariants}
              onSubmit={handleSubmit}
              className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white/90 mb-2 font-medium">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName" 
                    placeholder="Your Name"
                    className="w-full p-3 border-2 placeholder:text-white/50 border-white/20 bg-white/5 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                    value={formData.firstName} 
                    onChange={handleChange} 
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white/90 mb-2 font-medium">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName" 
                    placeholder="Last Name"
                    className="w-full p-3 border-2 placeholder:text-white/50 border-white/20 bg-white/5 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/90 mb-2 font-medium">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    placeholder="Phone"
                    className="w-full p-3 border-2 placeholder:text-white/50 border-white/20 bg-white/5 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                    value={formData.phone} 
                    onChange={handleChange} 
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/90 mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="Email"
                    className="w-full p-3 border-2 placeholder:text-white/50 border-white/20 bg-white/5 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-white/90 mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    placeholder="Subject"
                    className="w-full p-3 border-2 placeholder:text-white/50 border-white/20 bg-white/5 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                    value={formData.subject} 
                    onChange={handleChange} 
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-white/90 mb-2 font-medium">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    placeholder="Your message..."
                    className="w-full resize-none p-3 border-2 placeholder:text-white/50 border-white/20 bg-white/5 text-white rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="w-full cursor-pointer bg-white text-primary hover:bg-white/90 transition duration-300 py-3 px-6 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 active:shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </motion.form>

            <motion.div 
              ref={picRef}
              initial="hidden"
              animate={picInView ? "visible" : "hidden"}
              variants={picVariants}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg h-full flex flex-col">
                <div className="space-y-8 flex-1">
                  <div className="text-center">
                    <div className="bg-white/10 text-white hover:bg-white/20 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 transition-colors duration-300">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Our Office</h4>
                    <p className='text-white/80'>Gulshan-e-Iqbal, Karachi</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/10 text-white hover:bg-white/20 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 transition-colors duration-300">
                      <FaPhone size={24} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Call Us</h4>
                    <p className='text-white/80'>+92 300 9233456</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/10 text-white hover:bg-white/20 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 transition-colors duration-300">
                      <BiLogoGmail size={24} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Email Us</h4>
                    <p className='text-white/80'>gulshantown@gmail.com</p>
                  </div>
                </div>

                <div className="mt-8 rounded-xl overflow-hidden h-64">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.041714724246!2d67.06568231500293!3d24.8719519840504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9b5e5c7e5d%3A0x5b5e5c7e5d5b5e5c!2sGulshan-e-Iqbal%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Modal
        id="terms-modal"
        title="Terms of Service"
        show={isModalOpen}
        onClose={closeModal}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </>
  );
} 