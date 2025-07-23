"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import cer1 from "../assets/cer1.jpg";
import cer2 from "../assets/cer2.png";
import cer3 from "../assets/cer3.jpg";

const services = [
  {
    service: "Birth Certificate",
    image: cer1,
    alt: "Birth Certificate",
    desc: "Official document of birth registration",
  },
  {
    service: "Marriage Certificate",
    image: cer2,
    alt: "Marriage Certificate",
    desc: "Legal proof of marital status",
  },
  {
    service: "Death Certificate",
    image: cer3,
    alt: "Death Certificate",
    desc: "Document confirming an individual's passing",
  },
];

const Services = () => {
  return (
    <div className="w-full bg-white py-10">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#0d7d43] uppercase text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h1>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 px-4 sm:px-6 lg:px-8">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          
          >
            <Image
              src={item.image}
              alt={item.alt}
              className="w-full hover:scale-[1.2] transition duration-200 h-56 object-cover"
              width={400}
              height={224}
              
            />

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.service}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {item.desc || "Learn more about this service."}
              </p>

              <button className="w-full py-2 px-5 border-2 border-[#0d7d43] text-[#0d7d43] hover:bg-[#0d7d43] hover:text-white font-medium rounded-md transition-colors duration-300">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
