import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

const NavLink = ({ link, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={link.path}
        className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.span
          className="text-gray-700 group-hover:text-indigo-600"
          animate={{ 
            x: isHovered ? -8 : 0,
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          [
        </motion.span>
        <span className="mx-1.5">{link.name}</span>
        <motion.span
          className="text-gray-700 group-hover:text-indigo-600"
          animate={{ 
            x: isHovered ? 8 : 0,
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          ]
        </motion.span>
      </Link>
    </motion.div>
  );
};

const GetStartedButton = ({ isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [textKey, setTextKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Trigger text roll up and immediate return
    setTextKey(prev => prev + 1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${isMobile ? 'flex' : 'hidden md:flex'} items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-gray-200 relative overflow-hidden transition-all duration-300 ${isMobile ? 'get-started-btn-mobile' : 'get-started-btn'}`}
    >
      {/* Glossy overlay effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        }}
      />
      
      {/* Icon - Sparkles to Arrow */}
      <div className="relative z-10 w-4 h-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="sparkles"
              initial={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute"
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="arrow"
              initial={{ opacity: 0, rotate: 90, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="absolute"
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Text with roll up animation */}
      <div className="relative z-10 h-5 overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={textKey}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="block whitespace-nowrap"
          >
            Get Started
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          
          // Only trigger if scrolled more than 10px to reduce sensitivity
          if (scrollDifference > 10) {
            // Show header when scrolling up or at the top
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
              setIsVisible(true);
            } 
            // Hide header when scrolling down and past 100px
            else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
              setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
          }
          
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Clients', path: '/clients' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <style>{`
        .get-started-btn {
          background: linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 100%);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset;
          border-bottom: 2px solid rgba(59, 130, 246, 0.8);
        }
        .get-started-btn:hover {
          box-shadow: 0 6px 30px rgba(59, 130, 246, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.3) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset;
          border-bottom: 2px solid rgba(96, 165, 250, 1);
        }
        .get-started-btn-mobile {
          background: linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 100%);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset;
          border-bottom: 2px solid rgba(59, 130, 246, 0.8);
        }
        .get-started-btn-mobile:hover {
          box-shadow: 0 6px 30px rgba(59, 130, 246, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.3) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset;
          border-bottom: 2px solid rgba(96, 165, 250, 1);
        }
      `}</style>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="sticky top-0 z-50"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0) 100%)',
        }}
      >
      <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center relative">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div>
              <h1 className="font-extrabold tracking-tight text-lg">
                Tetra<span className="text-indigo-600">X</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Design · Integrate · Scale</p>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => (
              <NavLink key={link.name} link={link} index={index} />
            ))}
          </nav>

          {/* Get Started Button - Right */}
          <div className="ml-auto flex items-center gap-4">
            <GetStartedButton />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center"
                  >
                    <span>[</span>
                    <span className="mx-1.5">{link.name}</span>
                    <span>]</span>
                  </Link>
                ))}
                <div className="mt-2">
                  <GetStartedButton isMobile={true} />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
    </>
  );
};

export default Header;

