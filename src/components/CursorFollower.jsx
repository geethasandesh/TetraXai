import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 6); // Center the dot (12px / 2 = 6px)
      cursorY.set(e.clientY - 6);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Initialize on first mouse move
    const initMouseMove = (e) => {
      handleMouseMove(e);
      window.removeEventListener('mousemove', initMouseMove);
    };

    window.addEventListener('mousemove', initMouseMove);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', initMouseMove);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[99999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        opacity: {
          duration: 0.2,
        },
      }}
    />
  );
};

export default CursorFollower;

