import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ReasonItem = ({ reason, index, totalReasons, scrollYProgress }) => {
  // Calculate scroll progress for each reason
  const startProgress = index / totalReasons;
  const endProgress = (index + 1) / totalReasons;
  
  // Smoother transitions with better easing
  const transitionRange = 0.15; // Larger transition range for smoother effect
  
  // Opacity: fade in/out based on scroll position
  const opacity = useTransform(
    scrollYProgress,
    [
      startProgress - transitionRange, 
      startProgress, 
      endProgress - transitionRange, 
      endProgress
    ],
    [0, 1, 1, 0]
  );
  
  // Y position: slide in from bottom, slide out to top - smoother
  const y = useTransform(
    scrollYProgress,
    [
      startProgress - transitionRange, 
      startProgress, 
      endProgress - transitionRange, 
      endProgress
    ],
    [80, 0, 0, -80]
  );
  
  // Scale: subtle zoom effect
  const scale = useTransform(
    scrollYProgress,
    [
      startProgress - transitionRange, 
      startProgress, 
      endProgress - transitionRange, 
      endProgress
    ],
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      className="flex items-center justify-center px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
            {reason.title}
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            {reason.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedArcNumber = ({ index, totalReasons, scrollYProgress, position, rotation, number }) => {
  const startProgress = index / totalReasons;
  const endProgress = (index + 1) / totalReasons;
  const transitionRange = 0.15;
  
  // Calculate if this number is active - smoother transitions
  const isActiveProgress = useTransform(
    scrollYProgress,
    [
      startProgress - transitionRange, 
      startProgress, 
      endProgress - transitionRange, 
      endProgress
    ],
    [0, 1, 1, 0]
  );
  
  // Dot radius - smoother animation
  const dotRadius = useTransform(
    isActiveProgress,
    [0, 1],
    [4, 6]
  );
  
  // Font size - smoother animation
  const fontSize = useTransform(
    isActiveProgress,
    [0, 1],
    [24, 32]
  );
  
  // Color based on scroll position - smoother color transitions
  const dotColor = useTransform(
    scrollYProgress,
    [
      0, 
      startProgress - transitionRange, 
      startProgress, 
      endProgress, 
      endProgress + transitionRange, 
      1
    ],
    ["#d1d5db", "#d1d5db", "#1f2937", "#1f2937", "#9ca3af", "#9ca3af"]
  );
  
  const textColor = useTransform(
    scrollYProgress,
    [
      0, 
      startProgress - transitionRange, 
      startProgress, 
      endProgress, 
      endProgress + transitionRange, 
      1
    ],
    ["#d1d5db", "#d1d5db", "#1f2937", "#1f2937", "#9ca3af", "#9ca3af"]
  );

  // Position text directly on the arc line for all numbers
  // Minimal offset to keep text readable but aligned with arc
  const textX = position.x + (index === 0 ? 8 : index === 4 ? -8 : 0);
  const textY = position.y + (index === 0 ? -5 : index === 4 ? 8 : 5);

  return (
    <g>
      {/* Dot */}
      <motion.circle
        cx={position.x}
        cy={position.y}
        r={dotRadius}
        fill={dotColor}
        style={{
          transition: 'all 0.3s ease-out'
        }}
      />
      
      {/* Number */}
      <motion.text
        x={textX}
        y={textY}
        fontSize={fontSize}
        fontWeight="bold"
        fill={textColor}
        textAnchor={index === 0 ? "start" : index === 4 ? "end" : "middle"}
        transform={`rotate(${rotation} ${position.x} ${position.y})`}
        className="font-sans"
        style={{
          transition: 'all 0.3s ease-out'
        }}
      >
        {number}
      </motion.text>
    </g>
  );
};

const AnimatedArc = ({ scrollYProgress, reasons }) => {
  // Semi-circle arc path - flipped to face left (curves left)
  // Positioned at the right edge of viewBox
  const centerX = 180; // Positioned to align with right edge
  const centerY = 300;
  const radius = 180; // Reduced from 250 to make it smaller
  
  // Semi-circle arc path - changed sweep flag from 1 to 0 to curve left
  const arcPath = `M ${centerX} ${centerY - radius} A ${radius} ${radius} 0 0 0 ${centerX} ${centerY + radius}`;
  
  // Calculate positions along the semi-circular arc
  // 5 points evenly distributed along 180 degrees (0° to 180°)
  // Flipped to curve left instead of right
  const positions = Array.from({ length: reasons.length }, (_, i) => {
    // Angle from 0° (top) to 180° (bottom)
    const angle = (i / (reasons.length - 1)) * Math.PI; // 0 to π (180°)
    // Flip the x calculation to curve left
    const x = centerX - radius * Math.sin(angle);
    const y = centerY - radius * Math.cos(angle);
    return { x, y };
  });

  // Rotations for text alignment - adjusted for left-facing arc
  const rotations = positions.map((pos, i) => {
    const angle = (i / (reasons.length - 1)) * Math.PI;
    // Rotate text to be perpendicular to the arc (flipped for left-facing)
    return 90 - (angle * 180) / Math.PI; // Convert to degrees and adjust for left curve
  });

  return (
    <div className="relative hidden lg:block w-full h-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMaxYMid meet"
      >
        {/* Semi-circle Arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Animated Numbers along the arc */}
        {reasons.map((reason, i) => {
          const number = String(i + 1).padStart(2, '0');
          
          return (
            <AnimatedArcNumber
              key={i}
              index={i}
              totalReasons={reasons.length}
              scrollYProgress={scrollYProgress}
              position={positions[i]}
              rotation={rotations[i]}
              number={number}
            />
          );
        })}
      </svg>
    </div>
  );
};

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const reasons = [
    {
      title: 'Expertise',
      description: 'Proven track record with cutting-edge technology solutions and industry best practices',
    },
    {
      title: 'Innovation',
      description: 'Forward-thinking approach that transforms businesses through innovative digital strategies',
    },
    {
      title: 'Reliability',
      description: 'Consistent delivery of high-quality solutions with unwavering commitment to excellence',
    },
    {
      title: 'Interaction',
      description: 'Persistent information and multi-touch surface for seamless user experiences',
    },
    {
      title: 'Partnership',
      description: 'Long-term collaborative relationships built on trust, transparency, and shared success',
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative bg-gray-50 h-[500vh]"
    >
      {/* Fixed viewport container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Animated Arc - Always visible on right side, completely at right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-end z-10">
          <AnimatedArc scrollYProgress={scrollYProgress} reasons={reasons} />
        </div>

        {/* Content Items */}
        {reasons.map((reason, index) => (
          <ReasonItem
            key={index}
            reason={reason}
            index={index}
            totalReasons={reasons.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
