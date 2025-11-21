import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bannerImage from '../../assets/indus/bannerr.jpg';
import technologyImage1 from '../../assets/indus/technology1.jpg';
import web from '../../assets/Tech/webdevelopment.jpg';

const WebDevelopment = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('JAVA');

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
            Web Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl lg:text-2xl"
          >
            Build modern, scalable web applications that deliver exceptional user experiences 
            and drive business growth.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: Web Development Content */}
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
              src={web}
              alt="Web Development solutions"
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
          <h2 className="text-orange-600 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-orange-400 mr-2 text-4xl md:text-5xl">:</span>
            Web Development
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Web development is at the core of digital transformation, enabling businesses 
            to create engaging online experiences, streamline operations, and reach customers 
            globally. Modern web applications require robust architecture, responsive design, 
            and seamless integration with backend services.
          </p>
          <p className="text-orange-600 font-bold mt-8">These challenges encompass:</p>
          <ul className="space-y-2 list-none mt-4 text-gray-600 font-medium">
            {[
              "Building responsive and accessible user interfaces",
              "Developing scalable backend architectures and APIs",
              "Implementing modern frameworks and technologies",
              "Ensuring performance optimization and fast load times",
              "Integrating third-party services and payment gateways",
              
            ].map((challenge, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                {challenge}
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 leading-relaxed">
            TetraX AI specializes in full-stack web development using cutting-edge technologies 
            like React, Node.js, and cloud platforms. We deliver custom web applications, 
            progressive web apps, and enterprise solutions that are secure, scalable, and 
            optimized for performance and user experience.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Tabs Section */}
      <div className="px-6 md:px-12 lg:px-36 py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['JAVA', 'PHP', 'ASP . NET', 'WEB API', 'ANGULAR', 'MVC'].map((tab) => (
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
            {activeTab === 'JAVA' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Java Web Development</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI provides enterprise-grade Java web development services using Spring Framework, 
                  Java EE, and modern Java technologies. Our Java solutions enable organizations to build 
                  robust, scalable, and secure web applications that handle high traffic and complex 
                  business logic.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Spring Boot and Spring MVC application development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Enterprise Java applications with J2EE/Jakarta EE</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">RESTful API development and microservices architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Java application security and performance optimization</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'PHP' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">PHP Web Development</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI delivers dynamic PHP web development solutions using modern frameworks like 
                  Laravel, Symfony, and CodeIgniter. Our PHP services help organizations build feature-rich 
                  web applications, content management systems, and e-commerce platforms with rapid 
                  development cycles.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Laravel and Symfony framework application development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Custom PHP web applications and CMS development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">E-commerce solutions with PHP (Magento, WooCommerce)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">PHP API development and database integration</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'ASP . NET' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">ASP.NET Web Development</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI provides comprehensive ASP.NET development services using .NET Core and .NET 
                  Framework. Our ASP.NET solutions enable organizations to build scalable, high-performance 
                  web applications with Microsoft technologies, leveraging the power of C# and the .NET 
                  ecosystem.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">ASP.NET Core MVC and Web API development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Blazor server-side and client-side applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Enterprise .NET application development and migration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Azure integration and cloud-native .NET applications</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'WEB API' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Web API Development</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI specializes in building robust RESTful and GraphQL APIs that enable seamless 
                  integration between applications and services. Our Web API services include API design, 
                  development, documentation, and management to support modern application architectures 
                  and microservices.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">RESTful API design and development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">GraphQL API implementation and schema design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">API security, authentication, and authorization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">API documentation, versioning, and management</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'ANGULAR' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Angular Web Development</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI delivers modern Angular applications using the latest Angular framework versions. 
                  Our Angular services help organizations build dynamic, single-page applications (SPAs) 
                  with rich user interfaces, component-based architecture, and seamless user experiences 
                  across all devices.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Angular application development and architecture design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Component-based UI development with Angular Material</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">RxJS for reactive programming and state management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Angular performance optimization and lazy loading</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'MVC' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">MVC Architecture Development</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI implements Model-View-Controller (MVC) architecture patterns across various 
                  frameworks to build maintainable, scalable web applications. Our MVC services ensure 
                  clean separation of concerns, improved code organization, and easier testing and 
                  maintenance of web applications.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">MVC architecture design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Framework-specific MVC patterns (Spring MVC, ASP.NET MVC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Separation of concerns and code organization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">MVC application testing and refactoring services</span>
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

export default WebDevelopment;
