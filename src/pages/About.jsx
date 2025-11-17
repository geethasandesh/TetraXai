import { motion } from 'framer-motion';
import { Users, Target, Zap, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Speed',
      description: 'We believe fast tools enable fast teams. Every millisecond counts.',
    },
    {
      icon: Heart,
      title: 'Developer Experience',
      description: 'Building software should be joyful. We design for delight.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Open source is in our DNA. We grow together.',
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Do one thing exceptionally well. No feature bloat.',
    },
  ];

  const team = [
    { name: 'Alex Chen', role: 'Founder & CEO', avatar: '👨‍💼' },
    { name: 'Sarah Johnson', role: 'CTO', avatar: '👩‍💻' },
    { name: 'Michael Park', role: 'Head of Design', avatar: '👨‍🎨' },
    { name: 'Emma Davis', role: 'Engineering Lead', avatar: '👩‍🔧' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Built by developers,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text">
                for developers
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              TetraX was born from frustration with slow, bloated development tools. 
              We set out to build something better—and we're just getting started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                We're on a mission to make web development faster, more enjoyable, and accessible to everyone.
              </p>
              <p className="text-lg text-gray-600">
                By combining cutting-edge technology with thoughtful design, we help teams ship products 
                that users love—without the usual headaches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-cyan-100 flex items-center justify-center text-6xl">
                🚀
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600">The people making TetraX possible</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Us on This Journey</h2>
            <p className="text-xl text-indigo-100 mb-8">
              We're always looking for talented people who share our passion for great developer tools.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

