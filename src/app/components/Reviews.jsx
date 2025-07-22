"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.jpg"
const Reviews = () => {
  const testimonials = [
    {
      quote: "Gulshan Iqbal is UC (Union Council) No. 3 of Karachi. It is a civic body that typically has an analytical, administrative, and advocacy role for the citizenry.",
      author: "Ubraid Imran",
      role: "Block - 3 Gulshan-e-Iqbal, Karachi",
      img: avatar1, // Added missing img property
    },
    {
      quote: "Gulshan Iqbal is UC (Union Council) No. 3 of Karachi. It is a civic body that typically has an analytical, administrative, and advocacy role for the citizenry..",
      author: "Khuzaima Ayaz",
      role: "Block - 5 Gulshan-e-Iqbal, Karachi",
      img: avatar2 // Added missing img property
    },
    {
      quote: "Gulshan Iqbal is UC (Union Council) No. 3 of Karachi. It is a civic body that typically has an analytical, administrative, and advocacy role for the citizenry.",
      author: "Ibrahim Asif",
      role: "Block - 2 Gulshan-e-Iqbal, Karachi",
      img: avatar3 // Added missing img property
    },
    
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.div
      ref={textRef}
      animate={textInView ? "visible" : "hidden"}
      variants={textVariants}
      className="bg-gray-50  dark:bg-gray-800 py-12"
    >
      <motion.h1 
        className='text-3xl md:text-4xl font-bold text-white text-primary uppercase p-5 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
     Testimonial    
      </motion.h1>
      <div className="  mx-auto text-center">
        <section className="bg-white p-15 flex flex-col gap-5 dark:bg-gray-900 shadow-lg rounded-lg max-w-4xl mx-auto">
          <figcaption className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-[#0d7d43]">
                <Image
                  src={testimonials[currentTestimonial].img}
                  alt='pic'
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-gray-900 dark:text-white font-medium">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                {testimonials[currentTestimonial].role}
              </div>
            </div>
          </figcaption>
          <figure className="max-w-3xl mx-auto">
            <blockquote>
              <p className={`text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                &quot;{testimonials[currentTestimonial].quote}&quot;
              </p>
            </blockquote>
          </figure>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentTestimonial(index);
                    setFade(true);
                  }, 500);
                }}
                className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-[#0d7d43]' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Reviews;