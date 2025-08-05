import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle, Package, Truck, Wrench, Headphones } from 'lucide-react';

const serviceSteps = [
  {
    location: 'Order Online',
    action: 'Browse & Select',
    description: 'Choose from our wide range of computers',
    icon: Package,
    color: 'from-blue-400 to-blue-600'
  },
  {
    location: 'Fast Delivery',
    action: 'Free Shipping',
    description: 'Delivered safely across Tanzania',
    icon: Truck,
    color: 'from-green-400 to-green-600'
  },
  {
    location: 'Professional Setup',
    action: 'Installation',
    description: 'Expert setup and configuration',
    icon: Wrench,
    color: 'from-purple-400 to-purple-600'
  },
  {
    location: 'Ongoing Support',
    action: '24/7 Help',
    description: 'Technical support whenever you need',
    icon: Headphones,
    color: 'from-orange-400 to-orange-600'
  }
];

const ServiceJourney = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Complete{' '}
            <span className="text-blue-400 font-medium">service journey</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From selection to ongoing support, we provide a complete service experience 
            that ensures your satisfaction at every step.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Journey Path */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-green-400 via-purple-400 to-orange-400 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {serviceSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Node */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 z-10 hidden lg:block" />

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-4`}>
                    <step.icon className="text-white" size={32} />
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <MapPin className="text-slate-400" size={16} />
                    <span className="text-slate-400 text-sm">{step.location}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.action}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4">
                    {step.description}
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-blue-400">
                    <CheckCircle size={16} />
                    <span className="text-sm">Guaranteed</span>
                  </div>
                </motion.div>

                {/* Mobile Arrow */}
                {index < serviceSteps.length - 1 && (
                  <div className="flex justify-center my-6 lg:hidden">
                    <ArrowRight className="text-slate-400" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Why choose our service?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400 mb-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span className="text-sm">Free delivery nationwide</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span className="text-sm">Professional installation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span className="text-sm">1-2 year warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span className="text-sm">24/7 technical support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span className="text-sm">Friendly customer care</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span className="text-sm">Affordable prices</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Start Shopping Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceJourney;