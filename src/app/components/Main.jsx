"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import main1 from "../assets/main1.jpg"
import main2 from "../assets/main2.jpg"
import main3 from "../assets/main3.jpg"
import main4 from "../assets/main4.jpeg"
import { motion, AnimatePresence } from 'framer-motion'

const Main = () => {
  const slides = [
    {
      image: main1,
      alt: "SIR SYED UNIVERSITY KARACHI",
      heading: "SIR SYED UNIVERSITY KARACHI",
      subheading: "Your Home Away From Home"
    },
    {   
      image: main2,
      alt: "MAZAR -E- QUIAD",
      heading: "MAZAR -E- QUIAD",
      subheading: "Where Luxury Meets Comfort"
    },
    {
      image: main4,
      alt: "HOCKEY STADIUM NEPA",
      heading: "HOCKEY STADIUM NEPA",
      subheading: "Relax and Rejuvenate"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlebuttonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const textVariants = {
    enter: (direction) => {
      return {
        y: direction > 0 ? -50 : 50,
        opacity: 0
      };
    },
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        y: direction < 0 ? 50 : -50,
        opacity: 0
      };
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-lora">
      {/* Background images with fade animation */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image 
            src={slides[currentIndex].image} 
            fill
            className="object-cover brightness-50"
            alt={slides[currentIndex].alt}
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Text content with coordinated animation */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2 items-center"
          >
            <motion.section>
              <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4">
                {slides[currentIndex].heading}
              </h1>
            </motion.section>
            <motion.section>
              {/* <p className='text-white opacity-89 text-center'>
                {slides[currentIndex].subheading}
              </p> */}
            </motion.section>
            <section className='text-[#f5f5f5]  flex gap-5 mt-5 cursor-pointer'>
              <button onClick={() => handlebuttonClick("about")} className='cursor-pointer border-2 bg-[#0D7D43] hover:bg-transparent  hover:border-white transition-all duration-300 rounded pt-2 pb-2 pl-5 pr-5'>
               COMPLAINT
              </button>
              <button onClick={() => handlebuttonClick("tarrif")} className='cursor-pointer border-2 bg-[#0D7D43] hover:bg-transparent hover:border-white transition-all duration-300 rounded pt-2 pb-2 pl-5 pr-5'>
             CONTACT US
              </button>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>  
  )
}

export default Main