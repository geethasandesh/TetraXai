import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bannerImage from '../../assets/indus/bannerr.jpg';
import technologyImage1 from '../../assets/indus/technology1.jpg';
import bigdata from '../../assets/Tech/bigdata.jpg';

const BigData = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('HADOOP');

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
            Big Data
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl lg:text-2xl"
          >
            Harness the power of big data analytics to unlock insights, drive strategic 
            decisions, and transform your business operations.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: Big Data Content */}
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
              src={bigdata}
              alt="Big Data analytics solutions"
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
          <h2 className="text-purple-600 text-2xl md:text-3xl font-bold mb-4">
            <span className="text-purple-400 mr-2 text-4xl md:text-5xl">:</span>
            Big Data
          </h2>
          <p className="text-gray-600 leading-relaxed">
            In today's data-driven world, organizations generate massive volumes of data 
            from multiple sources. Big Data technologies enable businesses to store, 
            process, and analyze this information to extract valuable insights and make 
            informed decisions that drive growth and competitive advantage.
          </p>
          <p className="text-purple-600 font-bold mt-8">These challenges encompass:</p>
          <ul className="space-y-2 list-none mt-4 text-gray-600 font-medium">
            {[
              "Managing and processing large-scale data volumes efficiently",
              "Implementing real-time data analytics and streaming",
              "Building scalable data pipelines and ETL processes",
              "Ensuring data quality, governance, and security",
              "Integrating diverse data sources and formats",
              
            ].map((challenge, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                {challenge}
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 leading-relaxed">
            TetraX AI delivers comprehensive big data solutions including data lake 
            architecture, distributed processing systems, real-time analytics platforms, 
            and advanced data visualization tools. We help you transform raw data into 
            actionable intelligence that powers strategic business decisions.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Tabs Section */}
      <div className="px-6 md:px-12 lg:px-36 py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['HADOOP', 'SPARK', 'KAFKA', 'APACHE HIVE'].map((tab) => (
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
            {activeTab === 'HADOOP' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Apache Hadoop</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI provides comprehensive Hadoop solutions for distributed storage and processing 
                  of large datasets. Our Hadoop services include cluster setup, configuration, optimization, 
                  and management to help organizations efficiently process and analyze massive volumes of 
                  structured and unstructured data.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Hadoop cluster architecture design and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">HDFS (Hadoop Distributed File System) implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">MapReduce and YARN job optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Hadoop ecosystem integration (Hive, Pig, HBase)</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'SPARK' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Apache Spark</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI delivers high-performance Apache Spark solutions for real-time data processing 
                  and analytics. Our Spark services enable organizations to process large-scale data 
                  workloads with speed and efficiency, supporting batch processing, streaming analytics, 
                  and machine learning applications.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Spark cluster setup and performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Spark Streaming for real-time data processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Spark SQL and DataFrame operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">MLlib for machine learning on Spark</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'KAFKA' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Apache Kafka</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI implements robust Apache Kafka solutions for building real-time data streaming 
                  pipelines and event-driven architectures. Our Kafka services help organizations handle 
                  high-throughput, low-latency data streams, enabling real-time analytics and data integration 
                  across distributed systems.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Kafka cluster architecture and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Real-time data streaming and event processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Kafka Connect for data integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Kafka Streams for stream processing applications</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'APACHE HIVE' && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">Apache Hive</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TetraX AI provides Apache Hive solutions for data warehousing and SQL-like querying 
                  of large datasets stored in Hadoop. Our Hive services enable organizations to perform 
                  complex data analysis using familiar SQL syntax, making big data analytics accessible 
                  to business analysts and data scientists.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Hive data warehouse setup and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">HiveQL query optimization and performance tuning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Partitioning and bucketing strategies for data organization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-600">Hive integration with Hadoop ecosystem tools</span>
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

export default BigData;
