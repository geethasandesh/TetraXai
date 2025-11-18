import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, MoreVertical, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import ibmLogo from '../assets/ibm.png';
import accentureLogo from '../assets/accenture.png';
import appleLogo from '../assets/apple.png';

const Testimonials = () => {
  const testimonials = [
    {
      company: 'IBM',
      logo: ibmLogo,
      rating: 5,
      quote: 'Working with TetraX has been a game-changer for our organization. Their strategic approach to digital transformation and commitment to excellence is unmatched in the industry. Their team is professional, knowledgeable, and truly understands our business needs. Whether it\'s for a complex workflow or a lightweight self-service feature, the user experience always feels effortless and refined.',
      author: 'Michael Chen',
      title: 'VP of Technology at IBM',
      avatar: '👨‍💼',
      linkedin: '#'
    },
    {
      company: 'ACCENTURE',
      logo: accentureLogo,
      rating: 5,
      quote: 'TetraX\'s consulting services helped us streamline our operations and achieve significant cost savings. Their team is professional, knowledgeable, and truly understands our business needs.',
      author: 'Emma Davis',
      title: 'Director of Operations',
      avatar: '👩‍🔧',
      linkedin: '#'
    },
    {
      company: 'SQUIRE',
      logo: null,
      rating: 5,
      quote: 'Robin consistently delivers clean, intuitive designs that strike the perfect balance between aesthetic and usability. Whether it\'s for a complex workflow or a lightweight self-service feature, the user experience always feels effortless and refined.',
      author: 'Dave Salvant',
      title: 'Co-founder of Squire',
      avatar: '👨‍💼',
      linkedin: '#'
    },
    {
      company: 'APPLE',
      logo: appleLogo,
      rating: 5,
      quote: 'TetraX transformed our digital infrastructure with exceptional attention to detail and innovative solutions. Their team\'s expertise in cloud migration and system integration exceeded our expectations.',
      author: 'Sarah Johnson',
      title: 'CTO at Apple',
      avatar: '👩‍💻',
      linkedin: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotation with pause on hover
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000); // 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const getCardPosition = (index) => {
    const relativeIndex = (index - currentIndex + testimonials.length) % testimonials.length;
    
    if (relativeIndex === 0) {
      return { zIndex: 30, scale: 1, y: 0, opacity: 1, x: 0, rotate: 0 };
    } else if (relativeIndex === 1) {
      return { zIndex: 20, scale: 0.96, y: 12, opacity: 0.85, x: 8, rotate: -1 };
    } else if (relativeIndex === 2) {
      return { zIndex: 10, scale: 0.92, y: 24, opacity: 0.7, x: 16, rotate: -2 };
    } else {
      return { zIndex: 0, scale: 0.88, y: 36, opacity: 0.5, x: 24, rotate: -3 };
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="py-8 sm:py-12 lg:py-24 relative overflow-hidden bg-gray-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Stacked Company Cards */}
        <div className="relative h-[80px] sm:h-[100px] lg:h-[120px] flex items-start justify-center mb-6 sm:mb-8 lg:mb-12">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
            {testimonials.map((testimonial, index) => {
              const position = getCardPosition(index);
              
              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={position}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="absolute inset-0"
                  style={{
                    transformOrigin: 'top center'
                  }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg border border-gray-200/50 p-3 sm:p-4 lg:p-6 h-[70px] sm:h-[85px] lg:h-[100px] flex items-center justify-between">
                    {/* Company Logo and Name */}
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-1 min-w-0">
                      {testimonial.logo ? (
                        <img 
                          src={testimonial.logo} 
                          alt={testimonial.company}
                          className="h-6 w-auto sm:h-8 lg:h-10 object-contain flex-shrink-0"
                        />
                      ) : (
                        <div className="h-6 w-12 sm:h-8 sm:w-16 lg:h-10 lg:w-20 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-[10px] sm:text-xs font-bold text-gray-500">{testimonial.company}</span>
                        </div>
                      )}
                      <h3 className="font-bold text-sm sm:text-lg lg:text-2xl text-gray-900 uppercase tracking-tight truncate">
                        {testimonial.company}
                      </h3>
                    </div>
                    
                    {/* Menu Icon */}
                    <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                      <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Star Ratings */}
        <motion.div
          key={`rating-${currentIndex}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-0.5 sm:gap-1 mb-4 sm:mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
            />
          ))}
        </motion.div>

        {/* Testimonial Quote Section */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 lg:mb-12 relative"
        >
          {/* Decorative Quote Icons - Hidden on mobile */}
          <Quote className="hidden sm:block absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 text-indigo-200/50 rotate-180" />
          <Quote className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 text-indigo-200/50" />
          
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed text-center max-w-4xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
            {currentTestimonial.quote}
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-12">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-indigo-600" />
          </button>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-indigo-600 w-6 sm:w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-indigo-600" />
          </button>
        </div>

        {/* Author Section */}
        <motion.div
          key={`author-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Avatar with layered effect */}
            <div className="relative">
              {/* Background layers */}
              <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-200/30 blur-sm -z-10" />
              <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-300/20 blur-md -z-20 scale-110" />
              
              {/* Main avatar */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 flex items-center justify-center text-lg sm:text-xl lg:text-2xl shadow-lg relative z-10">
                {currentTestimonial.avatar}
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-gray-900 text-base sm:text-lg">{currentTestimonial.author}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{currentTestimonial.title}</p>
            </div>
          </div>
          
          {/* LinkedIn Icon */}
          <a
            href={currentTestimonial.linkedin}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
