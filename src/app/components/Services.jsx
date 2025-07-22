"use client"
import Image from 'next/image'
import cer1 from "../assets/cer1.jpg"
import cer2 from "../assets/cer2.png"
import cer3 from "../assets/cer3.jpg"

import { motion } from 'framer-motion'
const Services = () => {
 

const services = [

  { 
    service: "Birth Certificate", 
  
    image: cer1,
    alt: "Birth Certificate"
  },
  { 
    service: "Marrige Certificate", 

    image: cer2,
    alt: "Marrige Certificate"
  },
  { 
    service: "Death Certificate", 

    image: cer3,
    alt: "Death Certificate"
  },
  
  
 
];
  
  return (
    <div className=''>

      <motion.h1 
        className='text-3xl md:text-4xl font-bold text-[#0d7d43] text-primary uppercase  p-5 text-center '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      Services
      </motion.h1>
    <div className='flex flex-col md:flex-row shadow-lg  gap-6 w-full px-4 sm:px-6 lg:px-8 py-8'>
      
      {services.map((room, index) => (
        <div key={index} className='h-full w-full flex justify-center  items-center rounded-lg bg-white  overflow-hidden transition-transform duration-300 hover:scale-105'>
          <div className='w-full'>
            <Image 
              className='w-full h-48 sm:h-56 object-cover'
              src={room.image}
              alt="room"
              width={400}
              height={300}
            
            />
            <div className='p-4'>
              <div className='flex justify-between flex-col  gap-5 mb-3'>
                <h1 className=' text-xl text-gray-800 text-left font-bold'>{room.service}</h1>
                <p className='text-sm font-semibold text-[#0d7d43] text-center'>{room.desc}</p>
              </div>
              <div className='flex flex-col gap-3'>
                <button className='py-2 px-5 border-2 cursor-pointer border-[#0d7d43] hover:bg-[#0d7d43] mt-4 text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors duration-300'>
                 Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Services