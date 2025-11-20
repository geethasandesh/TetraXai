import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bannerImage from '../../assets/indus/bannerr.jpg';
import healthcareImage1 from '../../assets/indus/healthcare1.jpg';
import healthcareImage2 from '../../assets/indus/healthcare2.jpg';

const HealthCare = () => {
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
            Healthcare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl lg:text-2xl"
          >
            Revolutionize patient care with innovative healthcare technology solutions 
            that improve outcomes and streamline operations.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: Healthcare Content */}
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
              src={healthcareImage1}
              alt="Healthcare innovation"
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
            Healthcare
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The healthcare industry is experiencing rapid digital transformation, driven by 
            patient expectations, regulatory requirements, and the need for improved care 
            delivery. Healthcare organizations face complex challenges in managing patient 
            data, ensuring interoperability, and delivering quality care efficiently.
          </p>
          <p className="text-sky-600 font-bold mt-8">These challenges encompass:</p>
          <ul className="space-y-2 list-none mt-4 text-gray-600 font-medium">
            {[
              "Ensuring HIPAA compliance and data security",
              "Integrating Electronic Health Records (EHR) systems",
              "Implementing telemedicine and remote patient monitoring",
              "Improving patient engagement and experience",
              "Managing interoperability between healthcare systems",
              
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
            Our expertise spans EHR integration, telemedicine 
            platforms, patient engagement systems, and healthcare analytics.
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
            TetraX Healthcare Solutions
          </h2>
          {[
            {
              title: "EHR integration and interoperability:",
              description:
                "Our team will create seamless integrations between Electronic Health Records and other healthcare systems.",
            },
            {
              title: "Telemedicine platform development:",
              description:
                "Leverage modern telemedicine technologies to expand care delivery and improve patient access.",
            },
            {
              title: "Patient portal and engagement systems:",
              description:
                "We integrate seamlessly with healthcare systems, appointment schedulers, and billing services while implementing intuitive patient interfaces.",
            },
            {
              title: "Healthcare analytics and reporting:",
              description:
                "We automate, analyze, and optimize healthcare data to improve clinical outcomes and operational efficiency.",
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
              src={healthcareImage2}
              alt="TetraX healthcare solutions"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthCare;
