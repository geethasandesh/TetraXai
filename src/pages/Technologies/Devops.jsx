import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bannerImage from '../../assets/indus/bannerr.jpg';
import devops from '../../assets/Tech/devops.jpg';
const Devops = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('CONTINUOUS INTEGRATION');

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
            DevOps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl lg:text-2xl"
          >
            Streamline your development lifecycle with DevOps practices that accelerate 
            delivery, improve quality, and enhance collaboration.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: DevOps Content */}
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
              src={devops}
              alt="DevOps solutions"
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
          <h2 className="text-green-600 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-400 mr-2 text-4xl md:text-5xl">:</span>
            DevOps
          </h2>
          <p className="text-gray-600 leading-relaxed">
            DevOps bridges the gap between development and operations, enabling organizations 
            to deliver software faster, more reliably, and with higher quality. By automating 
            processes and fostering collaboration, DevOps practices transform how teams build, 
            deploy, and maintain applications.
          </p>
          <p className="text-green-600 font-bold mt-8">These challenges encompass:</p>
          <ul className="space-y-2 list-none mt-4 text-gray-600 font-medium">
            {[
              "Implementing CI/CD pipelines for automated deployment",
              "Containerizing applications with Docker and Kubernetes",
              "Establishing infrastructure as code practices",
              "Monitoring and observability for production systems",
              "Ensuring security and compliance in DevOps workflows",
              
            ].map((challenge, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="w-2 h-2 bg-green-600 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                {challenge}
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 leading-relaxed">
            TetraX AI offers comprehensive DevOps consulting and implementation services. 
            We help you establish CI/CD pipelines, implement container orchestration, 
            automate infrastructure provisioning, and build monitoring solutions that 
            enable continuous delivery and rapid innovation.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Tabs Section */}
      <div className="px-6 md:px-12 lg:px-36 py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['CONTINUOUS INTEGRATION', 'CONTINUOUS DELIVERY', 'MICROSERVICES', 'INFRASTRUCTURE AS CODE'].map((tab) => (
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
            {activeTab === 'CONTINUOUS INTEGRATION' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Continuous Integration</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI implements robust Continuous Integration (CI) practices that enable development 
                  teams to merge code changes frequently and automatically test them. Our CI solutions 
                  help detect integration issues early, improve code quality, and accelerate the development 
                  process.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Automated build and test pipeline configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Code quality analysis and automated testing frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Integration with version control systems (Git, SVN)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Automated code review and quality gates implementation</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'CONTINUOUS DELIVERY' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Continuous Delivery</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI delivers comprehensive Continuous Delivery (CD) solutions that automate the 
                  deployment process, enabling organizations to release software updates quickly and reliably. 
                  Our CD services ensure that code changes are always in a deployable state and can be released 
                  to production at any time.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Automated deployment pipelines and release management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Environment provisioning and configuration management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Blue-green and canary deployment strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Rollback mechanisms and deployment monitoring</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'MICROSERVICES' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Microservices</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI helps organizations transition to microservices architecture, enabling them to build 
                  scalable, maintainable, and independently deployable services. Our microservices solutions 
                  include architecture design, containerization, service mesh implementation, and API gateway 
                  configuration.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Microservices architecture design and decomposition strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Container orchestration with Kubernetes and Docker</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Service mesh implementation (Istio, Linkerd)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">API gateway and service discovery solutions</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'INFRASTRUCTURE AS CODE' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Infrastructure as Code</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI implements Infrastructure as Code (IaC) practices that enable organizations to 
                  manage and provision infrastructure through code rather than manual processes. Our IaC solutions 
                  ensure consistency, version control, and automated infrastructure management across environments.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Terraform and CloudFormation infrastructure provisioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Ansible and Puppet configuration management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Infrastructure versioning and change management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Automated infrastructure testing and validation</span>
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

export default Devops;
