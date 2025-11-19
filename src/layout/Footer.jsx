import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

const AnimatedLetter = ({ letter, index, color = 'text-gray-900', isInView }) => {
  const letterBlurValue = useMotionValue(20);
  const letterBlur = useTransform(letterBlurValue, (value) => `blur(${value}px)`);

  useEffect(() => {
    if (isInView) {
      const blurAnimation = setTimeout(() => {
        animate(letterBlurValue, 0, {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2 + (index * 0.05)
        });
      }, 100);

      return () => clearTimeout(blurAnimation);
    }
  }, [letterBlurValue, index, isInView]);

  return (
    <motion.span
      initial={{ 
        opacity: 0, 
        y: 30,
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
      } : {
        opacity: 0,
        y: 30,
      }}
      transition={{ 
        delay: 0.2 + (index * 0.05),
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{ 
        filter: letterBlur
      }}
      className={`inline-block ${color}`}
    >
      {letter}
    </motion.span>
  );
};

const TextReveal = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const text = "TetraX Ai";
  const letters = text.split('');

  return (
    <div
      ref={textRef}
      style={{ 
        width: '143vw',
        maxWidth: 'none'
      }}
    >
      <h2 className="text-8xl lg:text-9xl font-extrabold font-mono leading-none tracking-tight whitespace-nowrap">
        {letters.map((letter, index) => {
          let color = 'text-gray-900';
          if (index === 5) color = 'text-indigo-600'; // X
          if (index >= 6) color = 'text-fuchsia-300'; // Ai
          
          return (
            <AnimatedLetter 
              key={`letter-${index}`} 
              letter={letter === ' ' ? '\u00A0' : letter} 
              index={index}
              color={color}
              isInView={isInView}
            />
          );
        })}
      </h2>
    </div>
  );
};

const Footer = () => {
  const exploreLinks = [
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
  ];

  const industryLinks = [
    { name: 'Financial Services', path: '/industries/finance' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Media, Entertainment & Gaming', path: '/industries/media' },
    { name: 'Technology Enablement', path: '/industries/technology' },
    { name: 'Telecommunications', path: '/industries/telecommunication' },
    { name: 'Energy', path: '/industries/energy' },
    { name: 'Consumer and Industrial Products', path: '/industries/consumer' },
    { name: 'Transportation and Travel', path: '/industries/transport' },
  ];

  const socialLinks = [
    { icon: Twitter, username: '@tetrax', href: '#', color: 'text-gray-900' },
    { icon: Linkedin, username: '@tetrax', href: '#', color: 'text-blue-600' },
    { icon: Github, username: '@tetrax', href: '#', color: 'text-gray-900' },
    { icon: Mail, username: 'contact@tetrax.ai', href: 'mailto:contact@tetrax.ai', color: 'text-gray-900' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8 relative">
        {/* Top Section - Five Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-6">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <p className="text-gray-900 text-sm leading-relaxed">
              TetraX is an independent technology company and digital transformation partner. We help businesses design, integrate, and scale their digital solutions.
            </p>
          </motion.div>

          {/* Middle-Left Column - Explore */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-semibold text-gray-900 mb-6 text-sm"
            >
              Explore
            </motion.h4>
            <ul className="space-y-4">
              {exploreLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Middle-Right Column - Industries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-semibold text-gray-900 mb-6 text-sm"
            >
              Industries
            </motion.h4>
            <ul className="space-y-4">
              {industryLinks.map((industry, index) => (
                <motion.li
                  key={industry.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                >
                  <Link
                    to={industry.path}
                    className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    {industry.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Follow us & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Follow us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-semibold text-gray-900 mb-6 text-sm"
              >
                Follow us
              </motion.h4>
              <ul className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href={social.href}
                      className="flex items-center gap-2 text-sm text-gray-900 hover:opacity-70 transition-opacity"
                    >
                      <social.icon className={`w-4 h-4 ${social.color}`} />
                      <span>{social.username}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact TetraX */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/contact" className="block">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-red-600 text-sm">Contact TetraX</h4>
                  <motion.div
                    className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
                <p className="text-sm text-gray-900">Let's work together</p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Section - Large Brand Text - Full Width (70% visible) */}
      <div className="pt-4 border-t border-gray-200 w-full">
        <div className="w-full overflow-x-hidden overflow-y-visible">
          <TextReveal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

