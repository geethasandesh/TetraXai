import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  const Component = hover ? motion.div : 'div';
  const hoverProps = hover ? {
    whileHover: { y: -8 },
    transition: { duration: 0.2 }
  } : {};
  
  return (
    <Component
      className={`p-6 bg-white rounded-2xl border border-gray-200 shadow-lg ${className}`}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;

