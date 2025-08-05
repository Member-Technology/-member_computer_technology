import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Truck, CheckCircle2 } from 'lucide-react';

const qualityFeatures = [
  {
    icon: Shield,
    title: 'Genuine Products',
    description: 'All our computers and accessories are 100% genuine with manufacturer warranty.'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Every product is tested and verified before delivery to ensure perfect condition.'
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Safe and secure delivery across Tanzania with professional handling.'
  }
];

const QualitySection = () => {
  return (
    <section className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Quality you can{' '}
            <span className="text-blue-400 font-medium">trust</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            At MEMBER COMPUTER TECHNOLOGY, we guarantee the authenticity and quality 
            of every product. Your satisfaction is our commitment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-blue-400/10 border border-blue-400/30 rounded-2xl mb-6"
              >
                <feature.icon className="text-blue-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Trusted across Tanzania
            </h3>
            <p className="text-slate-400">
              We serve customers in all major cities and regions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Cities served', value: '20+' },
              { label: 'Happy customers', value: '5,000+' },
              { label: 'Products delivered', value: '10,000+' },
              { label: 'Years in business', value: '8+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center mt-12 space-x-4"
        >
          <CheckCircle2 className="text-blue-400" size={24} />
          <span className="text-slate-300 text-lg">
            All products come with manufacturer warranty and our quality guarantee
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default QualitySection;