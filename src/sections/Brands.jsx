import React from 'react'
import { motion } from 'framer-motion'
import accentureLogo from '../assets/accenture.png'
import adpLogo from '../assets/adp.png'
import appleLogo from '../assets/apple-1.png'
import atosLogo from '../assets/atos.png'
import capgeminiLogo from '../assets/capgemini.png'
import deloitteLogo from '../assets/deloitee.png'
import ibmLogo from '../assets/ibm.png'
import infosysLogo from '../assets/infosys.png'
import tcsLogo from '../assets/tcs.png'

function Brands() {
  const brands = [
    { name: 'Accenture', id: 1, logo: accentureLogo },
    { name: 'ADP', id: 2, logo: adpLogo },
    { name: 'Apple', id: 3, logo: appleLogo },
    { name: 'Atos', id: 4, logo: atosLogo },
    { name: 'Capgemini', id: 5, logo: capgeminiLogo },
    { name: 'Deloitte', id: 6, logo: deloitteLogo },
    { name: 'IBM', id: 7, logo: ibmLogo },
    { name: 'Infosys', id: 8, logo: infosysLogo },
    { name: 'TCS', id: 9, logo: tcsLogo },
  ]

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="relative flex items-center justify-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 text-center"
          >
            We Worked With Global Largest Brands
          </motion.h2>
          
          {/* Decorative element - blue circle with green dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute right-0 w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0"
            style={{
              borderColor: '#93C5FD',
            }}
          >
            <div 
              className="w-3 h-3 rounded-full"
              style={{
                background: '#10B981',
              }}
            />
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex items-center gap-12 sm:gap-16"
            animate={{
              x: [0, -(160 + 48) * brands.length], // Move by width of one set (logo width + gap) * number of brands
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="shrink-0 flex items-center justify-center"
                style={{
                  width: '160px',
                  height: '80px',
                }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Brands