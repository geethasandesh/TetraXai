import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bannerImage from '../../assets/indus/bannerr.jpg';
import cloud from '../../assets/Tech/cloud.jpg';

const CloudComputing = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('AWS CLOUD');

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
            Cloud Computing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl lg:text-2xl"
          >
            Accelerate your digital transformation with scalable cloud infrastructure 
            that enhances agility, reduces costs, and enables innovation.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: Cloud Computing Content */}
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
              src={cloud}
              alt="Cloud Computing solutions"
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
          <h2 className="text-blue-600 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-blue-400 mr-2 text-4xl md:text-5xl">:</span>
            Cloud Computing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cloud computing has become the foundation of modern IT infrastructure, enabling 
            businesses to scale rapidly, reduce operational costs, and access cutting-edge 
            technologies. Organizations are migrating to the cloud to improve flexibility, 
            enhance security, and accelerate innovation cycles.
          </p>
          <p className="text-blue-600 font-bold mt-8">These challenges encompass:</p>
          <ul className="space-y-2 list-none mt-4 text-gray-600 font-medium">
            {[
              "Migrating legacy systems to cloud infrastructure",
              "Designing scalable and resilient cloud architectures",
              "Implementing multi-cloud and hybrid cloud strategies",
              "Ensuring cloud security and compliance",
              "Optimizing cloud costs and resource utilization",
              
            ].map((challenge, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                {challenge}
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 leading-relaxed">
            TetraX AI provides end-to-end cloud computing services including cloud strategy 
            consulting, migration planning, infrastructure design, and managed cloud services. 
            We help you leverage AWS, Azure, and GCP to build robust, scalable solutions 
            that drive business value and operational excellence.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Tabs Section */}
      <div className="px-6 md:px-12 lg:px-36 py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['AWS CLOUD', 'MICROSOFT AZURE', 'SAAS', 'PAAS'].map((tab) => (
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
            {activeTab === 'AWS CLOUD' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">AWS Cloud Services</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI provides comprehensive Amazon Web Services (AWS) cloud solutions that help 
                  organizations leverage the full power of AWS infrastructure. Our AWS services include 
                  cloud migration, architecture design, managed services, and optimization to maximize 
                  performance and cost efficiency.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">AWS cloud migration and modernization strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">EC2, S3, Lambda, and AWS service implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">AWS security, compliance, and governance setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Cost optimization and AWS Well-Architected Framework implementation</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'MICROSOFT AZURE' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Microsoft Azure Cloud Services</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI delivers enterprise-grade Microsoft Azure solutions that enable organizations 
                  to build, deploy, and manage applications seamlessly. Our Azure services cover cloud 
                  migration, hybrid cloud solutions, Azure DevOps integration, and comprehensive managed 
                  services for optimal cloud performance.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Azure cloud migration and hybrid cloud architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Azure Virtual Machines, App Services, and Functions deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Azure Active Directory and identity management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Azure DevOps and CI/CD pipeline implementation</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'SAAS' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Software as a Service (SaaS)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI helps organizations leverage Software as a Service (SaaS) solutions to reduce 
                  IT overhead, improve scalability, and accelerate time-to-market. Our SaaS services include 
                  SaaS application development, integration, customization, and migration services to help 
                  businesses maximize the value of cloud-based software solutions.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Custom SaaS application development and architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">SaaS platform integration and API development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Multi-tenant architecture design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">SaaS migration and legacy application modernization</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'PAAS' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Platform as a Service (PaaS)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI provides Platform as a Service (PaaS) solutions that enable developers to build, 
                  deploy, and scale applications without managing underlying infrastructure. Our PaaS services 
                  include platform selection, application deployment, database management, and development 
                  environment setup for streamlined application development.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">PaaS platform selection and architecture design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Application deployment and scaling on PaaS platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Database and middleware services configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">PaaS security, monitoring, and performance optimization</span>
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

export default CloudComputing;
