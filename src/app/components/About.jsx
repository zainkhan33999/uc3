"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
    <section id="about" className='px-4 sm:px-6 bg-gradient-to-r from-emerald-600 to-green-800 text-white lg:px-8 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row gap-10 lg:gap-16 items-center'>
        
        {/* Map Section */}
       {/* Map Section */}
<motion.div 
  ref={mapRef}
  initial="hidden"
  animate={mapInView ? "visible" : "hidden"}
  variants={mapVariants}
  className='w-full md:w-1/2 relative'
>
  <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-xl overflow-hidden shadow-2xl'>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57901.742161170754!2d67.07973107213579!3d24.902794642700496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b808bfd6b1%3A0x997b1a02c2570822!2sGulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1720682152127!5m2!1sen!2sus"
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute inset-0 w-full h-full border-0"
    ></iframe>
    {/* Only apply gradient to bottom area */}
    <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none' />
  </div>
</motion.div>

        {/* Text Section */}
        <motion.div 
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textVariants}
          className='w-full md:w-1/2 space-y-6'
        >
          <motion.h2 
            className='text-3xl font-extrabold md:text-4xl lg:text-5xl text-white mb-6 text-center md:text-left'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About <span className='font-extrabold'>Gulshan-e-Iqbal UC-3</span>
          </motion.h2>

          <div className='space-y-4'>
            <motion.p 
              className='text-base md:text-lg leading-relaxed md:leading-loose'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Gulshan-e-Iqbal UC-3 is a vibrant and populous locality situated in the heart of Karachi, Pakistan. Known for its dynamic atmosphere and diverse community, this area embodies the bustling spirit of the city.
            </motion.p>
            
            <motion.p 
              className='text-base md:text-lg leading-relaxed md:leading-loose'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Lined with a mix of residential and commercial spaces, Gulshan-e-Iqbal UC-3 offers a wide range of amenities, including markets, parks, and educational institutions. The streets are alive with the hustle and bustle of daily life.
            </motion.p>
            
            <motion.p 
              className='text-base md:text-lg leading-relaxed md:leading-loose'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              People from various walks of life come together here, creating a unique tapestry of cultures and traditions that make this neighborhood truly special.
            </motion.p>
          </div>

          {/* Optional Buttons */}
          {/* <motion.div 
            className='flex flex-wrap gap-4 mt-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <button 
              onClick={() => handleButtonClick("services")}
              className='px-6 py-3 bg-[#0D7D43] hover:bg-transparent border-2 border-white text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]'
            >
              Our Services
            </button>
            <button 
              onClick={() => handleButtonClick("contact")}
              className='px-6 py-3 bg-transparent hover:bg-[#0D7D43] border-2 border-white text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]'
            >
              Contact Us
            </button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default About
