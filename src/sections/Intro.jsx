import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

function Intro() {
  const stats = [
    { value: '25+', label: 'Enterprise Clients' },
    { value: '100+', label: 'IT Projects Delivered' },
    { value: '4+', label: 'Cloud Platforms' },
  ]

  const tags = [
    { text: 'Cloud Migration', color: 'bg-purple-500' },
    { text: 'Digital Transformation', color: 'bg-orange-500' },
    { text: 'Cybersecurity Solutions', color: 'bg-blue-400' },
    { text: 'DevOps Services', color: 'bg-green-500' },
    { text: 'Data Analytics', color: 'bg-red-500' },
    { text: 'AI Integration', color: 'bg-teal-400' },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* About Company Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2"
                style={{
                  borderColor: '#FB923C',
                  backgroundColor: 'rgba(251, 146, 60, 0.05)',
                }}
              >
                <MessageSquare className="w-4 h-4" style={{ color: '#FB923C' }} />
                <span className="text-sm font-medium text-gray-700">About Company</span>
              </div>
            </motion.div>

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                We're a leading IT consulting team focused on empowering businesses with innovative technology solutions and digital transformation strategies. We believe in technology that transforms — fast, scalable, and reliable. Our goal is to give organizations the tools to achieve digital excellence{' '}
                <span className="text-gray-500">without wasting time or budget.</span>
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Floating Tags */}
          <div className="relative h-[400px] lg:h-[500px]">
            {tags.map((tag, index) => {
              // Scattered positions for floating effect
              const positions = [
                { top: '10%', right: '10%' },
                { top: '25%', right: '30%' },
                { top: '40%', right: '5%' },
                { top: '60%', right: '25%' },
                { top: '75%', right: '15%' },
                { top: '85%', right: '35%' },
              ]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      delay: 0.6 + (index * 0.1),
                    },
                    scale: {
                      duration: 0.5,
                      delay: 0.6 + (index * 0.1),
                      type: "spring",
                      stiffness: 100
                    },
                    y: {
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5 + (index * 0.1)
                    }
                  }}
                  className={`absolute ${tag.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                  style={{
                    top: positions[index].top,
                    right: positions[index].right,
                  }}
                >
                  {tag.text}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
