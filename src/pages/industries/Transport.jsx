import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bannerImage from '../../assets/indus/bannerr.jpg';
import transportImage1 from '../../assets/indus/transport1.jpg';
import transportImage2 from '../../assets/indus/transport2.jpg';

const Transport = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div>
      {/* Section 1: Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-black py-20 px-6 md:px-12 lg:px-36 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Transportation and Travel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl lg:text-2xl"
          >
            Revolutionize mobility and travel experiences with innovative technology 
            solutions that connect people and destinations seamlessly.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: Transportation Content */}
      <div ref={sectionRef} className="px-6 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:w-1/2 mb-6 lg:mb-0"
        >
          <div className="w-full md:w-4/5 lg:w-5/6 h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={transportImage1}
              alt="Transportation and travel innovation"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-xl"
        >
          <h2 className="text-sky-600 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-sky-400 mr-2 text-4xl md:text-5xl">:</span>
            Transportation and Travel
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The transportation and travel industry is rapidly evolving with mobility-as-a-service, 
            smart logistics, and digital booking platforms. Companies face challenges in managing 
            complex operations, optimizing routes, and delivering exceptional customer experiences 
            across multiple touchpoints.
          </p>
          <p className="text-sky-600 font-bold mt-8">These challenges encompass:</p>
          <ul className="space-y-2 list-none mt-4 text-gray-600 font-medium">
            {[
              "Optimizing route planning and logistics operations",
              "Implementing booking and reservation systems",
              "Enhancing customer experience across channels",
              "Managing fleet and asset tracking",
       
              
            ].map((challenge, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="w-2 h-2 bg-sky-600 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                {challenge}
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Our expertise spans booking platforms, 
            fleet management, route optimization, and customer engagement systems.
          </p>
        </motion.div>
      </div>

      {/* Section 3: TetraX Solutions */}
      <div className="px-6 md:px-12 lg:px-36 py-12 lg:flex lg:space-x-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl mb-6 lg:mb-0"
        >
          <h2 className="text-sky-600 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-sky-400 mr-2 text-4xl md:text-5xl">:</span>
            TetraX Transportation & Travel Solutions
          </h2>
          {[
            {
              title: "Booking and reservation platforms:",
              description:
                "Our team will create comprehensive booking solutions tailored to your service delivery and customer engagement needs.",
            },
            {
              title: "Fleet and asset management systems:",
              description:
                "Leverage advanced tracking technologies to optimize fleet operations and improve asset utilization.",
            },
            {
              title: "Route optimization and logistics:",
              description:
                "We integrate seamlessly with GPS systems, traffic data, and third-party services while implementing efficient routing algorithms.",
            },
           
          ].map((solution, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mt-5 text-gray-600 leading-relaxed"
            >
              <span className="text-sky-600 font-bold">{solution.title}</span> {solution.description}
            </motion.p>
          ))}
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:w-1/2"
        >
          <div className="w-full md:w-4/5 lg:w-5/6 h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={transportImage2}
              alt="TetraX transport solutions"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Transport;
