"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import aboutPic from "../assets/about1.jpg"
import Image from 'next/image'
const About = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  })

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  })

  const textVariants = {
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

  const mapVariants = {
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

  const handleButtonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="about" className='px-4 sm:px-6 bg-gradient-to-r  from-primary to-secondary text-white lg:px-8 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row gap-10 lg:gap-16 items-center'>
        
        {/* Text Section - Now on the left */}
        <motion.div 
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textVariants}
          className='w-full md:w-1/2 space-y-6'
        >
          <motion.h2 
            className='text-3xl font-primary font-extrabold md:text-3 xl lg:text-4xl   text-white mb-6 text-center md:text-left'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About <span className='font-extrabold'>Gulshan-e-Iqbal UC-4 :</span>
          </motion.h2>

          <div className='space-y-4 font-secondary'>
            <motion.p 
              className='text-base md:text-lg leading-relaxed md:leading-loose'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Gulshan-e-Iqbal UC-4 is a vibrant and populous locality situated in the heart of Karachi, Pakistan. 
            </motion.p>
            
            <motion.p 
              className='text-base md:text-lg leading-relaxed md:leading-loose'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Known for its dynamic atmosphere and diverse community, this area embodies the bustling spirit of the city. Lined with a mix of residential and commercial spaces,
            </motion.p>
            
            <motion.p 
              className='text-base md:text-lg leading-relaxed md:leading-loose'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Gulshan-e-Iqbal UC-4 offers a wide range of amenities, including markets, parks, and educational institutions.
            </motion.p>
          </div>

          {/* Optional Buttons */}
          <motion.div 
            className='flex flex-wrap gap-4 mt-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <button 
              onClick={() => handleButtonClick("services")}
              className='px-6 py-3 cursor-pointer  bg-secondary font-secondary hover:bg-transparent border-2 border-white text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]'
            >
              Our Services
            </button>
            <button 
              onClick={() => handleButtonClick("contact")}
              className='px-6 py-3 cursor-pointer bg-secondary font-secondary hover:bg-transparent  border-2 border-white text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]'
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Map Section - Now on the right */}
        <motion.div 
          ref={mapRef}
          initial="hidden"
          animate={mapInView ? "visible" : "hidden"}
          variants={mapVariants}
          className='w-full md:w-1/2 relative'
        >
          <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-xl overflow-hidden shadow-2xl'>
           <Image  alt="img" className='h-full' src={aboutPic}/>
            <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none' />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About