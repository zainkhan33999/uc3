"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Team = () => {
  const teamMembers = [
    {
      name: "Fayaz ul Huda",
      role: "UC Chairman",
     
      image: team1,
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#"
      }
    },
    {
      name: "Asif Azad",
      role: "UC Vice Chairman",
     
      image: team2,
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#"
      }
    },
    {
      name: "HAQ NAWAZ",
      role: "Secretary",
      
      image: team3,
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#"
      }
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  }

  return (
    <section id="team" className="relative py-24 overflow-hidden bg-gradient-to-b from-primary to-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10" />
      
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-white bg-white/20 px-4 py-1 rounded-full mb-4">
            Our Leadership
          </span>
          <h2 className="text-3xl font-primary md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Our Elected Representatives
          </h2>
          <p className="text-lg text-white/80 font-secondary max-w-3xl mx-auto">
            Dedicated professionals committed to serving our community with integrity and innovation
          </p>
        </motion.div>

        {/* Circular Team Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-16 lg:gap-24"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative flex flex-col items-center"
            >
              {/* Circular Profile */}
              <div className="relative w-48 h-48 rounded-full border-4 border-white/20 group-hover:border-primary transition-all duration-500 shadow-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={100}
                  priority={index < 2}
                />
                
                {/* Social icons - appear on hover */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                  {Object.entries(member.social).map(([platform, url]) => {
                    const Icon = 
                      platform === 'linkedin' ? FaLinkedin :
                      platform === 'twitter' ? FaX :
                      platform === 'facebook' ? FaFacebook :
                      FaInstagram;
                    
                    return (
                      <a
                        key={platform}
                        href={url}
                        className="bg-white/90 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                        style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              {/* Info Panel */}
              <div className="mt-6 text-center bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-xs transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-10 z-10">
                <h3 className="text-xl font-bold font-primary text-gray-900 mb-1">{member.name}</h3>
                <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                  {member.role}
                </span>
                <p className="text-gray-600 text-sm font-secondary">{member.description}</p>
              </div>
              
              {/* Always visible name/role */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold font-primary text-white">{member.name}</h3>
                <p className="text-white/80 font-secondary">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team