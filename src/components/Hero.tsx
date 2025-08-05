import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Truck, Headphones, Monitor, Laptop, Gamepad2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted
              <span className="text-yellow-400"> Tech Partner</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover the latest computers, laptops, and tech accessories in Tanzania. 
              From gaming rigs to professional workstations, we have everything 
              you need to power your digital life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('products')}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Shop Now</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('products')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Catalog
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'Warranty', desc: '1-2 Year Protection' },
                { icon: Truck, title: 'Free Delivery', desc: 'All Over Tanzania' },
                { icon: Headphones, title: 'Support', desc: '24/7 Expert Help' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <div className="bg-blue-700 p-2 rounded-lg">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">{feature.title}</div>
                    <div className="text-blue-200 text-sm">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Featured Products */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Featured This Week</h3>
              
              <div className="space-y-4">
                {[
                  { name: 'MacBook Pro M3', price: 'TShs 8,500,000', discount: '12% OFF', icon: Laptop },
                  { name: 'Gaming PC RTX 4080', price: 'TShs 7,200,000', discount: '15% OFF', icon: Monitor },
                  { name: 'ASUS ROG Laptop', price: 'TShs 4,700,000', discount: '10% OFF', icon: Gamepad2 }
                ].map((product, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => onNavigate('products')}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <product.icon className="text-blue-300" size={24} />
                        <div>
                          <div className="font-semibold">{product.name}</div>
                          <div className="text-yellow-400 font-bold">{product.price}</div>
                        </div>
                      </div>
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.discount}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 p-4 rounded-full font-bold text-lg shadow-lg"
            >
              💻
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-green-400 text-white p-4 rounded-full font-bold text-lg shadow-lg"
            >
              🎮
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;