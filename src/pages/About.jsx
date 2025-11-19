import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl lg:text-6xl font-sans text-gray-900 mb-6"
            >
              About TetraX
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We're a passionate team of technology experts and innovators, building cutting-edge 
              software solutions with excellence at our core.
            </motion.p>
          </motion.div>

          {/* Cards - Single Column */}
          <div ref={sectionRef} className="space-y-6 lg:space-y-8 max-w-5xl mx-auto">
            {/* Our Story Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl shadow-lg p-8 lg:p-10"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
              >
                Our Story
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4 text-gray-700 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  What started as a vision to transform businesses through innovative technology 
                  has evolved into something extraordinary. We bonded over a shared passion for 
                  creating software that makes a real difference in the digital landscape.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Instead of taking the conventional path, we decided to build something meaningful 
                  together. We founded TetraX with a simple yet powerful mission: to deliver 
                  exceptional software solutions while maintaining the highest standards of 
                  quality and innovation.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Today, we're proud to be a growing technology company that combines technical 
                  excellence with human-centered design, always remembering where we started and 
                  the values that drive us forward.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Our Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl shadow-lg p-8 lg:p-10"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
              >
                Our Mission
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4 text-gray-700 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  At TetraX, we believe that great software should not only solve problems but 
                  also respect users, protect privacy, and contribute positively to society. 
                  Our mission is to:
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="list-disc list-inside space-y-2 ml-2"
                >
                  {[
                    "Design, integrate, and scale digital solutions that transform businesses",
                    "Deliver exceptional technology services with integrity and innovation",
                    
                    "Create sustainable solutions that drive long-term success"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>

            {/* Our Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl shadow-lg p-8 lg:p-10"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
              >
                Our Values
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4 text-gray-700 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Our values are the foundation of everything we do. They guide our decisions, 
                  shape our culture, and define how we work with our clients and partners.
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-3"
                >
                  {[
                    { label: "Excellence", text: "We strive for the highest quality in every project and interaction." },
                    { label: "Innovation", text: "We embrace cutting-edge technologies and creative solutions." },
                    { label: "Integrity", text: "We conduct business with honesty, transparency, and ethical practices." },
                   
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="font-semibold text-gray-900 mr-2">• {item.label}:</span>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>

            {/* Our Mission to You Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl shadow-lg p-8 lg:p-10"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
              >
                Our Mission to You
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-4 text-gray-700 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  We're committed to being your trusted technology partner, dedicated to helping 
                  you achieve your business goals through innovative digital solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Our mission to you is to provide:
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="list-disc list-inside space-y-2 ml-2"
                >
                  {[
                    "Tailored solutions that address your unique business challenges",
                    "Expert guidance and support throughout your digital transformation journey",
                    "Scalable technologies that grow with your business",
                   
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  We're here to help you navigate the complexities of modern technology and 
                  unlock your organization's full potential.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* FAQ Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 lg:mb-16"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
              {/* Left: Title */}
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-sans text-gray-900"
              >
                FAQ's
              </motion.h2>

              {/* Right: Description and Button */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-end gap-6 lg:gap-8 flex-1">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-700 text-base lg:text-lg max-w-md"
                >
                  We're here to help you and solve objections. Find answers to the most common questions below.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-b from-purple-600 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    Contact  Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Cards Grid */}
          <FAQAccordion />
        </div>
      </section>

      {/* Contact Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pt-6 pb-8 text-center bg-gradient-to-br from-purple-50 via-white to-purple-50"
      >
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <Mail className="w-5 h-5" />
          <span>Feel free to mail us for any enquiries : </span>
          <a
            href="mailto:contact@tetrax.ai"
            className="underline hover:text-purple-600 transition-colors"
          >
            contact@tetrax.ai
          </a>
        </div>
      </motion.div>
    </div>
  );
};

// FAQ Accordion Component
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 'faq-1',
      question: "What industries do you serve?",
      answer: "We provide technology solutions across multiple industries including Financial Services, Healthcare, Media & Entertainment, Technology Enablement, Telecommunications, Energy, Consumer & Industrial Products, and Transportation & Travel. Our industry-focused approach ensures tailored solutions that address specific sector challenges."
    },
    {
      id: 'faq-2',
      question: "Do you offer solutions for financial institutions?",
      answer: "Yes, we specialize in comprehensive technology solutions for banking, insurance, and financial institutions. Our services include secure, compliant, and scalable systems that drive digital transformation while meeting strict regulatory requirements and security standards."
    },
    {
      id: 'faq-3',
      question: "Can you help with healthcare technology solutions?",
      answer: "Absolutely! We provide innovative healthcare technology solutions that improve patient care, streamline operations, and ensure regulatory compliance across medical facilities. Our solutions are designed to enhance efficiency while maintaining the highest standards of patient data security."
    },
    {
      id: 'faq-4',
      question: "What technology enablement services do you provide?",
      answer: "Our Technology Enablement services include strategic technology consulting and implementation that empower businesses to leverage cutting-edge solutions. We help organizations identify opportunities, implement modern technologies, and drive innovation across their operations."
    },
    {
      id: 'faq-5',
      question: "Do you work with telecommunications companies?",
      answer: "Yes, we provide advanced network infrastructure, cloud communications, and connectivity solutions for telecom providers and enterprise communications. Our solutions help optimize network performance, enhance connectivity, and improve communication systems."
    },
    {
      id: 'faq-6',
      question: "Can you help with energy management solutions?",
      answer: "We offer smart energy management systems, renewable energy solutions, and grid optimization technologies for sustainable power infrastructure. Our solutions help organizations optimize energy consumption, reduce costs, and support sustainability goals."
    },
    {
      id: 'faq-7',
      question: "What solutions do you provide for manufacturing and supply chain?",
      answer: "We deliver digital transformation solutions for manufacturing, supply chain optimization, and product lifecycle management. Our Consumer and Industrial Products solutions help streamline operations, improve efficiency, and enhance visibility across the entire supply chain."
    },
    {
      id: 'faq-8',
      question: "Do you offer transportation and travel technology solutions?",
      answer: "Yes, we provide integrated mobility solutions, logistics platforms, and travel technology systems that enhance efficiency and customer experiences. Our solutions help transportation and travel companies optimize operations, improve customer satisfaction, and drive growth."
    }
  ];

  const handleToggle = (clickedIndex) => {
    setOpenIndex((currentOpenIndex) => {
      // If the clicked item is already open, close it. Otherwise, open the clicked item.
      if (currentOpenIndex === clickedIndex) {
        return null;
      }
      return clickedIndex;
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.id}
            className="bg-gradient-to-br from-white to-purple-50/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className={`font-medium pr-4 group-hover:text-purple-700 transition-colors ${isOpen ? 'text-purple-600' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-5 h-5 text-purple-600" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
