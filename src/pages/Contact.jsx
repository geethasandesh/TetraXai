import { motion, useInView } from 'framer-motion';
import { MessageSquare, Phone, MapPin } from 'lucide-react';
import { useState, useRef } from 'react';
import locationImg from '../assets/ppl/location.png';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: 'Jane Smith',
    email: 'jane@framer.com',
    subject: 'Subject',
    message: 'message goes here...',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Cloud-like background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900"
            >
              Get in touch with Us
            </motion.h1>

            {/* Key Benefits */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl font-bold mt-1">*</span>
                <span className="text-gray-700 text-lg">Effortless Assistance: Connect with our team anytime</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl font-bold mt-1">*</span>
                <span className="text-gray-700 text-lg">Book a Demo Today: Experience our platform in action</span>
              </li>
            </motion.ul>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {/* Reach Out to Us Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-purple-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Reach Out to Us</h3>
                <p className="text-gray-600 text-sm mb-3">Need assistance? Drop us a message anytime.</p>
                <a
                  href="mailto:contact@tetrax.ai"
                  className="text-purple-600 underline font-medium hover:text-purple-700 transition-colors"
                >
                  contact@tetrax.ai
                </a>
              </motion.div>

              {/* Call Us Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-purple-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-3">Need help? Give us a call— we're here for you.</p>
                <a
                  href="tel:+1234567890"
                  className="text-purple-600 underline font-medium hover:text-purple-700 transition-colors"
                >
                  +1234567890
                </a>
              </motion.div>
            </div>

            {/* USA Location Section - Under Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Left - Location Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-purple-50 rounded-2xl shadow-xl p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                  <span className="mr-2 bg-purple-600 text-white p-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                  </span>
                  USA
                </h3>
                <div className="space-y-3 text-gray-700 text-sm flex-grow">
                  <p>
                    <strong className="text-gray-900">Address:</strong> Arthicus Global Inc <br />
                    11020 David Taylor Dr #100, Charlotte, NC 28262, USA.
                  </p>
                  <p>
                    <strong className="text-gray-900">Phone:</strong> +91–40–35160930
                  </p>
                  <p>
                    <strong className="text-gray-900">Email:</strong> info@arthicus.com
                  </p>
                </div>
              </motion.div>

              {/* Right - Location Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-purple-50 rounded-2xl shadow-xl p-6"
              >
                <a
                  href="https://www.google.com/maps/place/11020+David+Taylor+Dr+%23100,+Charlotte,+NC+28262,+USA/@35.3398229,-80.765937,17.25z/data=!4m6!3m5!1s0x88541c54f6f8638f:0x1b3f3004bea5c44e!8m2!3d35.3397861!4d-80.7631867!16s%2Fg%2F11qz9_03jj?entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={locationImg}
                    alt="USA Location"
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-purple-50 rounded-2xl shadow-xl p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject of Interest
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-y"
                  required
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
