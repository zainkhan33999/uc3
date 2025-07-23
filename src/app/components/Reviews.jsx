"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.jpg";

const testimonials = [
  {
    quote: "Gulshan Iqbal is UC (Union Council) No. 3 of Karachi. It is a civic body that typically has an analytical, administrative, and advocacy role for the citizenry.",
    author: "Ubraid Imran",
    role: "Block - 3 Gulshan-e-Iqbal, Karachi",
    img: avatar1,
  },
  {
    quote: "Gulshan Iqbal is UC (Union Council) No. 3 of Karachi. It is a civic body that typically has an analytical, administrative, and advocacy role for the citizenry.",
    author: "Khuzaima Ayaz",
    role: "Block - 5 Gulshan-e-Iqbal, Karachi",
    img: avatar2,
  },
  {
    quote: "Gulshan Iqbal is UC (Union Council) No. 3 of Karachi. It is a civic body that typically has an analytical, administrative, and advocacy role for the citizenry.",
    author: "Ibrahim Asif",
    role: "Block - 2 Gulshan-e-Iqbal, Karachi",
    img: avatar3,
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setShow(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (index) => {
    
    setShow(false);
    setTimeout(() => {
      setCurrent(index);
      setShow(true);
    }, 300);
  };

  const testimonial = testimonials[current];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className=" bg-[#0D7D43] py-12 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-white  uppercase text-center mb-10">
        Testimonials
      </h2>

      <div
        className="border border-w   shadow-md rounded-xl p-8 max-w-4xl mx-auto transition-opacity duration-500"
        aria-live="polite"
      >
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4 rounded-full border-2 border-white  overflow-hidden">
              <Image
                src={testimonial.img}
                alt={`${testimonial.author} picture`}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-4">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {testimonial.author}
            </div>
            <div className="text-xs text-white0 dark:text-gray-400">
              {testimonial.role}
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-3 h-3 rounded-full focus:outline-none ring-1 ring-offset-2 ring-[#0d7d43] ${
                index === current ? 'bg-gray-300' : 'bg-[#0d7d43]'
              }`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;
