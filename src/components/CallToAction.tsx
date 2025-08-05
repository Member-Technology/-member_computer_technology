import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, QrCode, Monitor, Headphones, Shield } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Get expert{' '}
            <span className="text-blue-400 font-medium">tech support</span>{' '}
            and service
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust MEMBER COMPUTER TECHNOLOGY 
            for reliable computers, expert service, and ongoing support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 text-white px-6 py-4 rounded-2xl hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Monitor size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Professional</div>
                  <div className="font-semibold">Computer Setup</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 text-white px-6 py-4 rounded-2xl hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <Headphones size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">24/7</div>
                  <div className="font-semibold">Tech Support</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Why choose MEMBER COMPUTER TECHNOLOGY?
              </h3>
              <div className="space-y-4">
                {[
                  'Genuine products with warranty',
                  'Free delivery across Tanzania',
                  'Professional installation service',
                  'Expert technical support'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="inline-block bg-white p-8 rounded-3xl mb-8 shadow-2xl"
            >
              <div className="w-48 h-48 bg-slate-900 rounded-2xl flex items-center justify-center">
                <Monitor size={120} className="text-blue-400" />
              </div>
            </motion.div>

            <div className="text-white mb-4">
              <div className="text-lg font-semibold mb-2">
                Visit Our Store
              </div>
              <div className="text-slate-400">
                Located in Dar es Salaam, Tanzania
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <Shield className="text-blue-400" size={48} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-3"
          >
            <Monitor size={24} />
            <span>Shop Computers Now</span>
          </motion.button>
          
          <div className="mt-6 text-slate-400">
            Free delivery • Professional setup • 1-2 year warranty
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;