import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

// Import logos for clients that have them
import accentureLogo from '../assets/accenture.png';
import adpLogo from '../assets/adp.png';
import appleLogo from '../assets/apple-1.png';
import atosLogo from '../assets/atos.png';
import capgeminiLogo from '../assets/capgemini.png';
import deloitteLogo from '../assets/deloitee.png';
import ibmLogo from '../assets/ibm.png';
import infosysLogo from '../assets/infosys.png';
import tcsLogo from '../assets/tcs.png';
import worldMapBg from '../assets/Worlddot.jpg';
import worldLocationBg from '../assets/wolrdlocation.jpg';
import Wipro from '../assets/wipro.png';

const Clients = () => {
  const clients = [
    // Technology
    { name: 'APPLE', logo: appleLogo },
    { name: 'IBM', logo: ibmLogo },
    { name: 'META', logo: null },
    { name: 'AMAZON', logo: null },
    { name: 'NVIDIA', logo: null },
    { name: 'HTC', logo: null },
    
    // Consulting & IT Services
    { name: 'INFOSYS', logo: infosysLogo },
    { name: 'ACCENTURE', logo: accentureLogo },
    { name: 'TCS', logo: tcsLogo },
    { name: 'CAPGEMINI', logo: capgeminiLogo },
    { name: 'DELOITTE', logo: deloitteLogo },
    { name: 'ATOS', logo: atosLogo },
    { name: 'WIPRO', logo: Wipro },
    { name: 'HCL', logo: null },
    
    // Financial Services
    { name: 'BANK OF AMERICA', logo: null },
    { name: 'WELLS FARGO', logo: null },
    { name: 'CAPITAL ONE', logo: null },
    { name: 'CREDIT ONE', logo: null },
    { name: 'PNC BANK', logo: null },
    { name: 'USA BANK', logo: null },
    { name: 'TRUIST', logo: null },
    { name: 'LPL FINANCIAL', logo: null },
    { name: 'MASTER CARD', logo: null },
    { name: 'FREDDIE MAC', logo: null },
    
    // Healthcare
    { name: 'HUMANA', logo: null },
    { name: 'CVS', logo: null },
    { name: 'ASCENSION', logo: null },
    
    // Other Industries
    { name: 'ADP', logo: adpLogo },
    { name: 'SEI', logo: null },
    { name: 'CENTERPOINT', logo: null },
    { name: 'UMG', logo: null },
    { name: 'WALMART', logo: null },
  ];

  const stats = [
    { icon: Building2, value: '32+', label: 'Enterprise Clients' },
    { icon: TrendingUp, value: 'Fortune 500', label: 'Industry Leaders' },
    { icon: Users, value: 'Global', label: 'Worldwide Presence' },
    { icon: Award, value: 'Trusted', label: 'Partnerships' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-white">
      {/* Hero Section with Light Blue Gradient */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-cyan-50 to-blue-50 text-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-indigo-600" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-sans mb-4"
            >
              Trusted by Industry
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text">
                Leaders Worldwide
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 mb-8"
            >
              We partner with Fortune 500 companies and industry leaders to deliver 
              exceptional technology solutions and digital transformation services.
            </motion.p>
          </motion.div>

          {/* Compact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Wall - Clean Grid Layout */}
      <section className="relative py-12 lg:py-16 bg-white overflow-hidden">
        {/* World Map Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${worldMapBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Our Valued Clients
            </h2>
            <p className="text-gray-600">
              32 prestigious companies trust us with their digital transformation
            </p>
          </motion.div>

          {/* Client Wall Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.03,
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                className="group relative"
              >
                <div className="h-24 lg:h-28 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-cyan-50/0 group-hover:from-indigo-50/50 group-hover:to-cyan-50/30 transition-all duration-300 rounded-xl" />
                  
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {client.logo ? (
                      <motion.img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                        whileHover={{ scale: 1.1 }}
                      />
                    ) : (
                      <motion.span
                        className="text-sm lg:text-base font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        {client.name}
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact CTA Section */}
      <section className="relative py-16 overflow-hidden">
        {/* World Location Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${worldLocationBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-indigo-800/60 to-cyan-900/70" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Client Portfolio?
            </h2>
            <p className="text-lg text-indigo-100 mb-6">
              Partner with us to transform your business with cutting-edge technology solutions.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-white text-indigo-600 font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
