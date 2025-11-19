import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Building2, Plane, GraduationCap, Zap, Shield, Truck, Heart, ShoppingBag, Radio, Fuel, ShoppingCart, FileText } from 'lucide-react';
import people1 from '../assets/ppl/peopple1.jpg';
import men1 from '../assets/ppl/men1.jpg';
import girl2 from '../assets/ppl/girl2.jpg';

const AnimatedWord = ({ word, index, isLast }) => {
  const wordBlurValue = useMotionValue(10);
  const wordBlur = useTransform(wordBlurValue, (value) => `blur(${value}px)`);

  useEffect(() => {
    const blurAnimation = setTimeout(() => {
      animate(wordBlurValue, 0, {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3 + (index * 0.1)
      });
    }, 100);

    return () => clearTimeout(blurAnimation);
  }, [wordBlurValue, index]);

  return (
    <motion.span
      initial={{ 
        opacity: 0, 
        y: 20,
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{ 
        delay: 0.3 + (index * 0.1),
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{ 
        color: '#2D1B0E',
        filter: wordBlur
      }}
      className="inline-block"
    >
      {word}{!isLast && '\u00A0'}
    </motion.span>
  );
};

const ContactUsButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [textKey, setTextKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTextKey(prev => prev + 1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Link
        to="/contact"
        className="group px-8 py-3 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #60A5FA, #3B82F6)',
        }}
      >
      {/* Text with roll up animation */}
      <div className="relative h-5 overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={textKey}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="block whitespace-nowrap"
          >
            Contact Us
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Arrow/Sparkle animation */}
      <div className="relative w-5 h-5 flex items-center justify-center overflow-visible">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="arrow"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="sparkle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
    </motion.div>
  );
};

const Hero = () => {
  const headlineText = "Transform your business with expert IT consulting solutions";
  const words = headlineText.split(" ");
  const industrySectionRef = useRef(null);
  const isIndustryInView = useInView(industrySectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      className="relative overflow-hidden flex items-center pt-4"
      style={{
        background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.3) 0%, rgba(219, 234, 254, 0.2) 50%, rgba(239, 246, 255, 0.1) 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 lg:py-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge with "New" and "Introducing TetraX AI" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mb-3"
          >
            {/* Outer pill container with light blue background and border */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{
                background: 'rgba(219, 234, 254, 0.5)',
                borderColor: 'rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Inner "New" badge with transparent background */}
              <div 
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(96, 165, 250, 0.15)',
                }}
              >
                {/* Blue dot */}
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: '#60A5FA',
                  }}
                />
                {/* "New" text in blue */}
                <span 
                  className="text-sm font-medium"
                  style={{
                    color: '#3B82F6',
                  }}
                >
                  New
                </span>
              </div>
              
              {/* "IT Consulting Services" text */}
              <span 
                className="text-sm font-mono"
                style={{
                  color: '#2D1B0E',
                }}
              >
               Introducing TetraX AI
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-3 flex flex-wrap justify-center items-center">
            {words.map((word, index) => (
              <AnimatedWord 
                key={index} 
                word={word} 
                index={index} 
                isLast={index === words.length - 1}
              />
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            We provide comprehensive IT consulting services to help businesses optimize their technology infrastructure, streamline operations, and achieve digital transformation goals.
          </motion.p>

          {/* Contact Us Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4"
          >
            <ContactUsButton />
          </motion.div>

          {/* Review Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center mb-12 w-full"
          >
            {/* Left horizontal line */}
            <div 
              className="h-px flex-1"
              style={{
                background: 'rgba(0, 0, 0, 0.1)',
              }}
            />
            
            {/* Outer pill container with light blue background and border */}
            <div 
              className="inline-flex items-center gap-4 px-4 py-2 rounded-full border shrink-0 mx-4"
              style={{
                background: 'rgba(219, 234, 254, 0.5)',
                borderColor: 'rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Profile Pictures */}
              <div className="flex -space-x-3">
                {[people1, men1, girl2].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Reviewer ${i + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                  />
                ))}
              </div>
              
              {/* Review Text and Rating */}
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-semibold">2.4k+ Reviews</span>
              </div>
              
              <div className="flex items-center gap-1">
                <span className="text-gray-700 font-bold text-lg">5.0</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right horizontal line */}
            <div 
              className="h-px flex-1"
              style={{
                background: 'rgba(0, 0, 0, 0.1)',
              }}
            />
          </motion.div>

          {/* Our Industry Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="w-full mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              Our Industry Experience
            </motion.h2>
            
            <div ref={industrySectionRef} className="flex flex-row items-center justify-center gap-6 w-full flex-wrap">
              {[
                { name: "Banking & Finance", icon: Building2, rotation: -3, delay: 0.05 },
                { name: "Travel & Hospitality", icon: Plane, rotation: 2, delay: 0.1 },
                { name: "Education", icon: GraduationCap, rotation: -2, delay: 0.15 },
                { name: "Energy & Utility", icon: Zap, rotation: 4, delay: 0.2 },
                { name: "Government", icon: Shield, rotation: -4, delay: 0.25 },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    rotate: industry.rotation * 2,
                    y: 80
                  }}
                  animate={isIndustryInView ? { 
                    opacity: 1, 
                    scale: 1,
                    rotate: industry.rotation,
                    y: 0
                  } : {
                    opacity: 0,
                    scale: 0.8,
                    rotate: industry.rotation * 2,
                    y: 80
                  }}
                  transition={{ 
                    delay: industry.delay,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: industry.rotation + (index % 2 === 0 ? 5 : -5),
                    y: -10,
                    z: 50
                  }}
                  className="bg-transparent rounded-xl p-4 sm:p-6 transition-all cursor-pointer flex flex-col items-center justify-center gap-3 text-center w-[140px] sm:w-[160px]"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-transparent border-2 flex items-center justify-center"
                    style={{
                      borderColor: '#3B82F6'
                    }}
                  >
                    <industry.icon 
                      className="w-6 h-6" 
                      style={{
                        color: '#3B82F6',
                        filter: 'blur(0.8px)'
                      }} 
                    />
                  </motion.div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 leading-tight">
                    {industry.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

