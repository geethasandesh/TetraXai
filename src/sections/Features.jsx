import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { DollarSign, Heart, Film, Cpu, Phone, Battery, Package, Plane } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.3 + index * 0.15,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        y: 80,
        scale: 0.95,
      }}
      animate={cardInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1,
      } : {
        opacity: 0,
        y: 80,
        scale: 0.95,
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      }}
      style={{
        boxShadow: '0 4px 20px rgba(135, 206, 250, 0.3)',
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { 
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Animated light blue shadow behind */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
        className="absolute -inset-1 rounded-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(135, 206, 250, 0.2), rgba(173, 216, 230, 0.2))',
          filter: 'blur(8px)',
          zIndex: -1,
        }}
      />

      {/* Icon - Black square with light sky blue round gradient */}
      <motion.div
        variants={iconVariants}
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
        className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4 overflow-hidden"
      >
        {/* Light sky blue round gradient background */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={cardInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'radial-gradient(circle, rgba(135, 206, 250, 0.3), rgba(173, 216, 230, 0.2))',
          }}
        />
        {/* Black square on top */}
        <motion.div
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={cardInView ? { scale: 1 } : { scale: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.5 + index * 0.15
            }}
          >
            <service.icon className="w-6 h-6 text-white" strokeWidth={2} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Title with arrow */}
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.6 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="font-semibold text-lg mb-3 text-gray-900 flex items-center gap-2 group-hover:text-gray-700 transition-colors"
      >
        <span>
          {service.title}
        </span>
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
          transition={{ duration: 0.6, delay: 0.7 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ x: 5 }}
          className="text-gray-400 group-hover:text-gray-600 transition-colors"
        >
          →
        </motion.span>
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.8 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-gray-600 leading-relaxed text-sm"
      >
        {service.description}
      </motion.p>

      {/* Hover effect overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 pointer-events-none"
      />
    </motion.div>
  );
};

const Features = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Comprehensive technology solutions for banking, insurance, and financial institutions. Secure, compliant, and scalable systems that drive digital transformation.',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Innovative healthcare technology solutions that improve patient care, streamline operations, and ensure regulatory compliance across medical facilities.',
    },
    {
      icon: Film,
      title: 'Media, Entertainment & Gaming',
      description: 'Cutting-edge digital platforms and immersive experiences for content creation, distribution, and interactive entertainment across all channels.',
    },
    {
      icon: Cpu,
      title: 'Technology Enablement',
      description: 'Strategic technology consulting and implementation services that empower businesses to leverage cutting-edge solutions and drive innovation.',
    },
    {
      icon: Phone,
      title: 'Telecommunications',
      description: 'Advanced network infrastructure, cloud communications, and connectivity solutions for telecom providers and enterprise communications.',
    },
    {
      icon: Battery,
      title: 'Energy',
      description: 'Smart energy management systems, renewable energy solutions, and grid optimization technologies for sustainable power infrastructure.',
    },
    {
      icon: Package,
      title: 'Consumer and Industrial Products',
      description: 'Digital transformation solutions for manufacturing, supply chain optimization, and product lifecycle management across consumer and industrial sectors.',
    },
    {
      icon: Plane,
      title: 'Transportation and Travel',
      description: 'Integrated mobility solutions, logistics platforms, and travel technology systems that enhance efficiency and customer experiences.',
    },
  ];

  // Parallax transform for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={sectionRef} className="bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </motion.div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center mb-16 pt-8"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-sans mb-4 text-gray-900"
          >
            Services Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Industry-focused technology solutions and consulting services tailored to your business needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
          
          {/* Empty div to help with grid layout for 8 items (3 columns = 3, 3, 2) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Features;
