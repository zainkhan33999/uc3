"use client"
import Image from 'next/image'
import main1 from "../assets/main1.jpg"
import main2 from "../assets/main2.jpg"
import main3 from "../assets/main3.jpg"
import main4 from "../assets/main4.jpeg"
import { motion } from 'framer-motion'
const Services = () => {
 

const services = [

  { 
    service: "Street Lights", 
  
    image: main2,
    alt: "Street Lights"
  },
  { 
    service: "Protest Demonstration", 

    image: main2,
    alt: "Protest Demonstration"
  },
  { 
    service: "Nariyal Bagh", 

    image: main2,
    alt: "Nariyal Bagh"
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
              alt="ff"
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