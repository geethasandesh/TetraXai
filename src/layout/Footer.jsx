import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Phone } from 'lucide-react';

const Footer = () => {
  const exploreLinks = [
    { name: 'Services', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
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

  const technologyLinks = [
    { name: 'AI', path: '/technologies/ai' },
    { name: 'Cloud Computing', path: '/technologies/cloud-computing' },
    { name: 'DevOps', path: '/technologies/devops' },
    { name: 'Big Data', path: '/technologies/big-data' },
    { name: 'Web Development', path: '/technologies/web-development' },
    { name: 'IoT', path: '/technologies/iot' },
  ];

  const socialLinks = [
    { icon: Twitter, username: '@tetrax', href: '#', color: 'text-gray-900' },
    { icon: Linkedin, username: '@tetrax', href: '#', color: 'text-blue-600' },
    { icon: Github, username: '@tetrax', href: '#', color: 'text-gray-900' },
    { icon: Mail, username: 'info@nexusaisol.com', href: 'mailto:info@nexusaisol.com', color: 'text-gray-900' },
    { icon: Phone, username: '+1 (980) 781-9639', href: 'tel:+19807819639', color: 'text-gray-900' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8 relative">
        {/* Top Section - Six Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-6">
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

          {/* Technologies Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="font-semibold text-gray-900 mb-6 text-sm"
            >
              Technologies
            </motion.h4>
            <ul className="space-y-4">
              {technologyLinks.map((technology, index) => (
                <motion.li
                  key={technology.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.55 + index * 0.05 }}
                >
                  <Link
                    to={technology.path}
                    className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    {technology.name}
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
    </footer>
  );
};

export default Footer;

