"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images
import ne1 from "../assets/ne1.jpg";
import ne2 from "../assets/ne2.jpg";
import ne3 from "../assets/ne3.jpg";
import ne4 from "../assets/ne4.jpg";
import ne5 from "../assets/ne5.jpeg";
import ne6 from "../assets/ne6.jpg";

const NewsEvents = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  const events = [
    {
      title: "Street Lights",
      description:
        "Street lights in our area enhance safety and visibility during nighttime.",
      image: ne1,
      alt: "Well-lit streets with new lighting infrastructure",
    },
    {
      title: "Protest Demonstration",
      description:
        "Facilitating safe and peaceful protests for community concerns",
      image: ne2,
      alt: "Community members participating in peaceful demonstration",
    },
    {
      title: "Nariyal Bagh Restoration",
      description:
        "Alhamdulillah, Jamaat-e-Islami has successfully restored this historic garden",
      image: ne3,
      alt: "Renovated Nariyal Bagh public space",
    },
    {
      title: "Family Parks Initiative",
      description:
        "Five new family parks opened simultaneously to serve our community",
      image: ne4,
      alt: "Children playing in newly opened family park",
    },
    {
      title: "Neighborhood Cleanup",
      description:
        "Comprehensive street cleaning campaign completed across all areas",
      image: ne5,
      alt: "Clean streets after community cleanup effort",
    },
    {
      title: "Ramadan Sasta Bazar",
      description:
        "Affordable market open daily from 2 PM to 6:30 PM during Ramadan",
      image: ne6,
      alt: "Community members shopping at Ramadan bazar",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="news-events"
      className="bg-white py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-[#0d7d43] uppercase mb-4"
            initial={{ y: -20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Community News & Events
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Stay updated with the latest initiatives and developments in our
            community
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative w-full h-[360px] rounded-[15px] overflow-hidden bg-white flex items-end shadow-md hover:shadow-xl transition-all duration-400 ease-out"
            >
              {/* Background Image */}
              <Image
                src={event.image}
                alt={event.alt}
                fill
                className="absolute inset-0 object-cover rounded-[15px] z-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
                priority={index < 3}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-[15px]" />

              {/* Info */}
              <div className="relative z-20 p-6 text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm tracking-wide mb-4">{event.description}</p>
              
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEvents;
