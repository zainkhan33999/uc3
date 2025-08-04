"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.jpg";

const testimonials = [
  {
    quote: "   Gulshan-e-Iqbal Karachi ka UC (Union Council) No. 4 hai. Yeh ek shehri idaara hai jo aam taur   par aik tajziyaati, idaari, aur kaanuni wakil ke zariye shehri hawala se munsalik",
    author: "Ubraid Imran",
    role: "Block - 3 Gulshan-e-Iqbal, Karachi",
    img: avatar1,
  },
  {
    quote: "   Gulshan-e-Iqbal Karachi ka UC (Union Council) No. 4 hai. Yeh ek shehri idaara hai jo aam taur    par aik tajziyaati, idaari, aur kaanuni wakil ke zariye shehri hawala se munsalik",
    author: "Khuzaima Ayaz",
    role: "Block - 5 Gulshan-e-Iqbal, Karachi",
    img: avatar2,
  },
  {
    quote: "   Gulshan-e-Iqbal Karachi ka UC (Union Council) No. 4 hai. Yeh ek shehri idaara hai jo aam taur  par aik tajziyaati, idaari, aur kaanuni wakil ke zariye shehri hawala se munsalik",
    author: "Ibrahim Asif",
    role: "Block - 2 Gulshan-e-Iqbal, Karachi",
    img: avatar3,
  },
];

const Reviews = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id='reviews'
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-t py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
         <motion.h1
                className="font-primary uppercase text-3xl md:text-4xl font-bold text-center mb-12 text-secondary "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                What residents say
              </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden mr-4">
                    <Image
                      src={testimonial.img}
                      alt={`${testimonial.author} picture`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-primary text-gray-800">{testimonial.author}</h3>
                    <p className="text-sm font-secondary text-primary">{testimonial.role}</p>
                  </div>
                </div>
                <p className=" font-secondary text-gray-600 mb-6 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex justify-end">
                  <svg className="w-8 h-8 text-primary opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Reviews;