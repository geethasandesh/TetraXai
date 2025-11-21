import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bannerImage from '../../assets/indus/bannerr.jpg';
import ai from '../../assets/Tech/ai.jpg'

const Ai = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('RPA');

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
        <div className="absolute inset-0"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Artificial Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl lg:text-2xl"
          >
            Transform your business with cutting-edge AI solutions that drive intelligent 
            decision-making and automate complex processes.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: AI Content */}
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
              src={ai}
              alt="Artificial Intelligence solutions"
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
          <h2 className="text-indigo-600 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-indigo-400 mr-2 text-4xl md:text-5xl">:</span>
            AI
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Artificial Intelligence is revolutionizing how businesses operate, enabling 
            intelligent automation, predictive analytics, and enhanced customer experiences. 
            Organizations are leveraging AI to gain competitive advantages, optimize operations, 
            and unlock new opportunities for growth and innovation.
          </p>
          <p className="text-indigo-600 font-bold mt-8">These challenges encompass:</p>
          <ul className="space-y-2 list-none mt-4 text-gray-600 font-medium">
            {[
              "Implementing machine learning models for predictive analytics",
              "Building intelligent automation and workflow optimization",
              "Developing natural language processing solutions",
              "Ensuring AI model accuracy and reliability",
              "Integrating AI capabilities with existing systems",
              
            ].map((challenge, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                {challenge}
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 leading-relaxed">
            TetraX AI specializes in developing custom AI solutions tailored to your business 
            needs. Our expertise includes machine learning model development, AI integration, 
            intelligent automation, and data-driven decision support systems that transform 
            how you operate and compete in the market.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Tabs Section */}
      <div className="px-6 md:px-12 lg:px-36 py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['RPA', 'BLOCKCHAIN', 'CLOUD PROFESSIONAL SERVICES', 'DATA ANALYTICS', 'MOBILITY', 'IOT', 'ADVANCED ANALYTICS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 border ${
                  activeTab === tab
                    ? 'bg-blue-400 text-white border-black-300 shadow-lg'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            {activeTab === 'RPA' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Robotic Process Automation (RPA)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI delivers comprehensive RPA solutions that automate repetitive business processes, 
                  reducing manual effort and improving operational efficiency. Our RPA services help organizations 
                  streamline workflows, minimize errors, and free up valuable resources for strategic initiatives.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Automated workflow design and implementation for business processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Integration with existing enterprise systems and applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Intelligent document processing and data extraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">RPA bot monitoring, maintenance, and optimization services</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'BLOCKCHAIN' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Blockchain Solutions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI provides enterprise blockchain solutions that enhance transparency, security, and trust 
                  in business transactions. Our blockchain services enable organizations to build decentralized 
                  applications, smart contracts, and secure digital ecosystems.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Blockchain platform development and architecture design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Smart contract development and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Cryptocurrency and tokenization solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Supply chain transparency and traceability systems</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'CLOUD PROFESSIONAL SERVICES' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Cloud Professional Services</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI offers comprehensive cloud professional services to help organizations migrate, 
                  optimize, and manage their cloud infrastructure. Our expert team provides end-to-end 
                  cloud consulting, implementation, and managed services across AWS, Azure, and GCP.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Cloud strategy consulting and migration planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Multi-cloud and hybrid cloud architecture design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Cloud security, compliance, and governance implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">24/7 cloud infrastructure monitoring and optimization</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'DATA ANALYTICS' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Data Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI transforms raw data into actionable insights through advanced analytics solutions. 
                  Our data analytics services help organizations make data-driven decisions, identify trends, 
                  and uncover opportunities for business growth and optimization.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Business intelligence and data visualization dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Data warehousing and ETL pipeline development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Real-time analytics and reporting solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Data governance, quality, and master data management</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'MOBILITY' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Mobility Solutions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI develops innovative mobile applications and enterprise mobility solutions that 
                  enable businesses to connect with customers and empower employees on-the-go. Our mobility 
                  services span native, hybrid, and cross-platform mobile app development.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Native iOS and Android application development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Cross-platform mobile apps using React Native and Flutter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Enterprise mobile app integration and API development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Mobile app security, testing, and deployment services</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'IOT' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Internet of Things (IoT)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI delivers end-to-end IoT solutions that connect devices, sensors, and systems to 
                  create intelligent networks. Our IoT services enable real-time monitoring, predictive maintenance, 
                  and data-driven insights that transform business operations.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">IoT device connectivity and sensor integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Edge computing and real-time data processing platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">IoT analytics and dashboard development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">IoT security, device management, and monitoring solutions</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'ADVANCED ANALYTICS' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Advanced Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI provides advanced analytics solutions powered by machine learning, predictive modeling, 
                  and statistical analysis. Our advanced analytics services help organizations forecast trends, 
                  optimize operations, and make strategic decisions based on deep data insights.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Predictive analytics and forecasting models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Machine learning model development and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Prescriptive analytics and optimization solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Real-time analytics and streaming data processing</span>
                  </li>
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Ai;
