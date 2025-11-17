import { motion } from 'framer-motion';
import Features from '../sections/Features';
import CTA from '../sections/CTA';

const FeaturesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Powerful Features for
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text">
                Modern Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale world-class applications. No compromises.
            </p>
          </motion.div>
        </div>
      </section>

      <Features />
      <CTA />
    </div>
  );
};

export default FeaturesPage;

