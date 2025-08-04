"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

// Import your images (replace with actual paths)
import CleaningImg from '../assets/cleaning.jpg'
import SewerageImg from '../assets/sewarage.jpg'
import LightingImg from '../assets/lightt.jpg'

const Projects = () => {
  const tabContent = [
    {
      value: "cleaning",
      title: "Cleaning",
      description: "A clean space promotes health and productivity. Regular sweeping, dusting, and waste removal prevent dirt buildup. Attention to detail ensures every corner stays fresh. Good habits maintain order and comfort in homes and workplaces.",
      image: CleaningImg,
      alt: "Professional cleaning service team at work"
    },
    {
      value: "sewerage",
      title: "Sewerage Lines",
      description: "Proper sewerage systems protect community health. Well-maintained pipes prevent blockages and contamination. Regular checks avoid overflows and environmental harm. Modern solutions make waste management efficient and eco-friendly.",
      image: SewerageImg,
      alt: "Sewerage system maintenance work"
    },
    {
      value: "lighting",
      title: "Lighting",
      description: "Good lighting enhances safety and mood. Natural light boosts energy, while artificial options provide flexibility. Smart systems save energy and adapt to needs. The right lighting transforms spaces, making them functional and inviting.",
      image: LightingImg,
      alt: "Modern lighting installation"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12"
    id='projects'>
      <motion.h1
        className="font-primary uppercase text-3xl md:text-4xl font-bold text-center mb-12 text-secondary "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Projects
      </motion.h1>

      <Tabs defaultValue="cleaning" className="w-full">
        <TabsList className="grid w-full  grid-cols-3  bg-gray-100 h-full rounded-lg p-1">
          {tabContent.map((tab) => (
            <TabsTrigger 
              key={tab.value}
              value={tab.value}
              className="py-3 px-4 font-primary rounded-md transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm "
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabContent.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <motion.div
              className="mt-6 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={tab.image}
                    alt={tab.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={tab.value === "cleaning"}
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-primary font-semibold mb-4 text-gray-800">{tab.title}</h2>
                  <p className="text-gray-600 font-secondary leading-relaxed">{tab.description}</p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default Projects