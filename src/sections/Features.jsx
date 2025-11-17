import { motion } from 'framer-motion';
import { Code2, Layout, Boxes, Terminal, Sparkles, Rocket, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Rust-powered builds with fine-grained caching for blazing-fast development.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Layout,
      title: 'Beautiful Components',
      description: 'Accessible UI primitives and layouts designed for modern web applications.',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      icon: Boxes,
      title: 'Smart Integrations',
      description: 'Seamless auth, analytics, and storage adapters that work out of the box.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Terminal,
      title: 'Developer CLI',
      description: 'Powerful command-line tools and generators for rapid development.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Code2,
      title: 'Type Safety',
      description: 'Full TypeScript support with intelligent auto-completion and error checking.',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security best practices and compliance-ready features.',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Tools',
      description: 'Intelligent code suggestions and automated optimization recommendations.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'One-Click Deploy',
      description: 'Deploy to any platform with a single command. No configuration needed.',
      color: 'from-orange-400 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Everything you need to
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text"> build modern apps</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features that help you build, deploy, and scale your applications with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Ready to experience the difference?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

