"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.png"
import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa'
import { FaInstagram, FaX } from 'react-icons/fa6'

const Team = () => {
  const teamMembers = [
    {
      name: "Majid Khan",
      role: "UC Chairman",
      description: "Leading our community with vision and dedication for sustainable development.",
      image: team1,
      social: {
        facebook: "#",
        twitter: "#",
        github: "#",
        dribbble: "#"
      }
    },
    {
      name: "Ibrahim Siddiqui",
      role: "UC Vice Chairman",
      description: "Working closely with the chairman to implement community initiatives.",
      image: team2,
      social: {
        facebook: "#",
        twitter: "#",
        github: "#",
        dribbble: "#"
      }
    },
    {
      name: "Ejaz Ali Laghari",
      role: "Secetory ",
      description: "Ensuring smooth operations and communication within our community.",
      image: team3,
      social: {
        facebook: "#",
        twitter: "#",
        github: "#",
        dribbble: "#"
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="team" className="bg-gradient-to-t from-emerald-600 to-green-800 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our <span className="text-[#0dcz]">Leadership</span> Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated individuals working tirelessly for our community's progress
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-whiteq border border-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
              
             
                  quality={90}
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <span className="text-slate-900 text-sm font-medium">
                  {member.role}
                </span>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {member.description}
                </p>
                
                <div className="flex space-x-4 mt-6">
                  <a 
                    href={member.social.facebook} 
                    className="text-white0 hover:text-[#0d7d43] dark:hover:text-[#1db954] transition-colors"
                    aria-label={`${member.name} Facebook`}
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-white0 hover:text-[#0d7d43] dark:hover:text-[#1db954] transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <FaX className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.github} 
                    className="text-white0 hover:text-[#0d7d43] dark:hover:text-[#1db954] transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.dribbble} 
                    className="text-white0 hover:text-[#0d7d43] dark:hover:text-[#1db954] transition-colors"
                    aria-label={`${member.name} Dribbble`}
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team