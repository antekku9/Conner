import { motion } from 'motion/react';
import { Zap, Shield, TrendingUp, Users, Lightbulb, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures to protect your data and ensure business continuity.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Scale seamlessly as your business grows with our flexible and robust platform.',
      color: 'from-green-400 to-emerald-600',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together efficiently with powerful collaboration tools designed for modern teams.',
      color: 'from-purple-400 to-pink-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Stay ahead with continuous updates and access to the latest features and technologies.',
      color: 'from-amber-400 to-red-500',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your business worldwide with our globally distributed infrastructure.',
      color: 'from-cyan-400 to-blue-600',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed in today's digital world, all in one comprehensive platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
