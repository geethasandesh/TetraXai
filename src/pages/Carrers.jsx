import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Mail, Phone, FileText, Send, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/indus/bannerr.jpg';

const Carrers = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const getApiBaseUrl = () =>
    import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3001/api' : '/api');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const API_URL = getApiBaseUrl();
      const response = await fetch(`${API_URL}/careers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your application has been submitted successfully.' });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit application. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Header Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-36 overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay with blur */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
              Home
            </Link>
            <span className="text-white/80 mx-2">/</span>
            <span className="text-white text-sm md:text-base">Careers</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Careers
          </motion.h1>
        </div>
      </motion.div>

      {/* Section 2: Main Content - Two Column Layout */}
      <div ref={sectionRef} className="px-6 md:px-12 lg:px-36 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Join Our Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Join Us Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-blue-500 font-semibold"
            >
              <PenTool className="w-5 h-5" />
              <span>Join Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            >
              Join Our Journey
            </motion.h2>

            {/* For Clients Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-500">For Clients</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Partner with TetraX AI to transform your business through cutting-edge technology solutions and expert IT consulting services. We deliver innovative digital strategies that drive growth and operational excellence.
              </p>
            </motion.div>

            {/* For Candidates Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-500">For Candidates</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Join a dynamic team of innovators and problem-solvers. At TetraX AI, you'll work on exciting projects, collaborate with industry experts, and grow your career in a supportive environment that values creativity and excellence.
              </p>
            </motion.div>

            {/* For Partners Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-500">For Partners</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Collaborate with us to deliver exceptional value to clients. We build strategic partnerships that combine our technical expertise with your domain knowledge, creating solutions that exceed expectations and drive mutual success.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name and Last Name - Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </motion.div>
              </div>

              {/* Email Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </motion.div>

              {/* Phone Number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Subject
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Write Your Message
                </label>
                <div className="relative">
                  <PenTool className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-y"
                    required
                  ></textarea>
                </div>
              </motion.div>

              {/* Submit Status Message */}
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg text-sm ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send a Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Carrers;
