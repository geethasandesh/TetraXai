import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

const NavLink = ({ link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={link.path}
        className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors relative flex items-center pb-1 border-b-2 border-transparent hover:border-indigo-600"
      >
        {link.name}
      </Link>
    </motion.div>
  );
};

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

const technologyLinks = [
  
  { name: 'AI', path: '/technologies/ai' },
  { name: 'Cloud Computing', path: '/technologies/cloud-computing' },
  { name: 'DevOps', path: '/technologies/devops' },
  { name: 'Big Data', path: '/technologies/big-data' },
  { name: 'Web Development', path: '/technologies/web-development' },
  { name: 'IoT', path: '/technologies/iot' },
];

const IndustriesDropdown = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to="/industries"
        className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors relative flex items-center cursor-pointer pb-1 border-b-2 border-transparent hover:border-indigo-600"
      >
        Industries
      </Link>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
            style={{
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            {industryLinks.map((industry) => (
              <Link
                key={industry.path}
                to={industry.path}
                className="block px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 border-l-2 border-transparent hover:border-indigo-600"
                style={{
                  transition: 'all 0.2s ease',
                }}
              >
                {industry.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TechnologyDropdown = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to="/technologies"
        className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors relative flex items-center cursor-pointer pb-1 border-b-2 border-transparent hover:border-indigo-600"
      >
        Technology
      </Link>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
            style={{
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            {technologyLinks.map((technology) => (
              <Link
                key={technology.path}
                to={technology.path}
                className="block px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 border-l-2 border-transparent hover:border-indigo-600"
                style={{
                  transition: 'all 0.2s ease',
                }}
              >
                {technology.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MobileIndustriesDropdown = ({ onLinkClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-gray-100">
      <div className="flex items-center justify-between px-4 py-2">
        <Link
          to="/industries"
          onClick={onLinkClick}
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
        >
          Industries
        </Link>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
          aria-label="Toggle industry links"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-8 pr-4 pb-3 space-y-2"
          >
            {industryLinks.map((industry) => (
              <Link
                key={industry.path}
                to={industry.path}
                onClick={onLinkClick}
                className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors py-1"
              >
                {industry.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileTechnologyDropdown = ({ onLinkClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-gray-100">
      <div className="flex items-center justify-between px-4 py-2">
        <Link
          to="/technologies"
          onClick={onLinkClick}
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
        >
          Technology
        </Link>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
          aria-label="Toggle technology links"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-8 pr-4 pb-3 space-y-2"
          >
            {technologyLinks.map((technology) => (
              <Link
                key={technology.path}
                to={technology.path}
                onClick={onLinkClick}
                className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors py-1"
              >
                {technology.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
    <Link to="/contact">
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
    </Link>
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
    { name: 'Services', path: '/features' },
    { name: 'Industries', path: null },
    { name: 'Technology', path: null },
    { name: 'Clients', path: '/clients' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
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
            <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div>
              <h1 className="font-extrabold tracking-tight text-lg">
                Tetra<span className="text-indigo-600">X</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Design · Integrate · Scale</p>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => {
              if (link.name === 'Industries') {
                return <IndustriesDropdown key={link.name} index={index} />;
              }
              if (link.name === 'Technology') {
                return <TechnologyDropdown key={link.name} index={index} />;
              }
              return <NavLink key={link.name} link={link} index={index} />;
            })}
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
                {navLinks.map((link) => {
                  if (link.name === 'Industries') {
                    return <MobileIndustriesDropdown key={link.name} onLinkClick={() => setIsMenuOpen(false)} />;
                  }
                  if (link.name === 'Technology') {
                    return <MobileTechnologyDropdown key={link.name} onLinkClick={() => setIsMenuOpen(false)} />;
                  }
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 border-b-2 border-transparent hover:border-indigo-600"
                    >
                      {link.name}
                    </Link>
                  );
                })}
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

