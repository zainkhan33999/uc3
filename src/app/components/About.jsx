"use client"
import React from 'react'
import Image from 'next/image'
import aboutpic from "../assets/uc3 office.jpg"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const handlebuttonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='px-4 sm:px-6 bg-[#101828] text-[#99A1AF] lg:px-8 py-8 max-w-7xl mx-auto '>
    
      
      <div className='flex flex-col  md:flex-row gap-8'>
        <motion.section 
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={imageVariants}
          className='w-full md:w-1/2 flex justify-center'
        >
          <div className='relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden'>
            <Image 
              alt='Hotel interior' 
              src={aboutpic}
              className='w-[90vw] h-[30vh] md:w-[50vw] md:h-[80vh]'
             
            />
          </div>
        </motion.section>
        <motion.section 
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textVariants}
          className='w-full md:w-1/2'
        >
            <motion.h1 
        className='text-3xl md:text-4xl font-sans font-extrabold  text-white text-primary  mb-6 md:mb-8 text-center '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
          <p className='text-base md:text-lg leading-relaxed'>
          Gulshan-e-Iqbal UC-3 is a vibrant and populous locality situated in the heart of Karachi, Pakistan. Known for its dynamic atmosphere and diverse community, this area embodies the bustling spirit of the city. Lined with a mix of residential and commercial spaces, Gulshan-e-Iqbal UC-3 offers a wide range of amenities, including markets, parks, and educational institutions. The streets are alive with the hustle and bustle of daily life, where people from various walks of life come together, creating a unique tapestry of cultures and traditions.
          </p>
          {/* <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <button 
              onClick={() => handlebuttonClick("clients")} 
              className='border-2 cursor-pointer border-primary bg-primary text-white hover:bg-transparent hover:text-primary transition-all duration-300 rounded py-2 px-6 text-sm sm:text-base'
            >
              Clients
            </button>
            <button 
              onClick={() => handlebuttonClick("owned")} 
              className='border-2 cursor-pointer border-primary bg-primary text-white hover:bg-transparent hover:text-primary transition-all duration-300 rounded py-2 px-6 text-sm sm:text-base'
            >
              Owned
            </button>
          </div> */}
        </motion.section>

      </div>
    </div>
  )
}

export default About