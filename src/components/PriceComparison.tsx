import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle, Monitor, Laptop, Gamepad2 } from 'lucide-react';

const PriceComparison = () => {
  const [selectedProduct, setSelectedProduct] = useState('laptop');

  const products = {
    laptop: {
      name: 'Dell XPS 13 Plus',
      memberPrice: 3200000,
      competitorPrice: 3800000,
      image: '💻',
      specs: ['Intel i7 Processor', '16GB RAM', '512GB SSD', '13.4" OLED Display']
    },
    desktop: {
      name: 'Custom Gaming PC',
      memberPrice: 7200000,
      competitorPrice: 8500000,
      image: '🖥️',
      specs: ['AMD Ryzen 7', '32GB RAM', 'RTX 4080', '2TB NVMe SSD']
    },
    gaming: {
      name: 'ASUS ROG Laptop',
      memberPrice: 4700000,
      competitorPrice: 5400000,
      image: '🎮',
      specs: ['Intel i7-13650HX', '16GB DDR5', 'RTX 4060', '240Hz Display']
    }
  };

  const currentProduct = products[selectedProduct];
  const savings = currentProduct.competitorPrice - currentProduct.memberPrice;
  const savingsPercentage = Math.round((savings / currentProduct.competitorPrice) * 100);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Compare{' '}
            <span className="text-blue-400 font-medium">our prices</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            See how much you save with MEMBER COMPUTER TECHNOLOGY compared to other retailers. 
            We offer competitive prices on genuine products.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Calculator className="text-blue-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">
                Price Comparison Tool
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {Object.entries(products).map(([key, product]) => (
                <motion.button
                  key={key}
                  onClick={() => setSelectedProduct(key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedProduct === key
                      ? 'border-blue-400 bg-blue-400/10'
                      : 'border-slate-600 hover:border-slate-500'
                  }`}
                >
                  <div className="text-4xl mb-2">{product.image}</div>
                  <div className="text-white font-semibold text-sm">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">
                {currentProduct.name}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {currentProduct.specs.map((spec, index) => (
                  <div key={index} className="text-slate-400 text-sm">
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-400/10 to-blue-600/10 border-2 border-blue-400/30 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl" />
              <div className="relative">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="text-blue-400" size={24} />
                  <h3 className="text-2xl font-semibold text-white">MEMBER COMPUTER</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Product Price</span>
                    <span className="text-white">TShs {formatPrice(currentProduct.memberPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Warranty</span>
                    <span className="text-white">1-2 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Delivery</span>
                    <span className="text-white">Free</span>
                  </div>
                  <div className="border-t border-slate-600 pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-white">Total Price</span>
                      <span className="text-blue-400">TShs {formatPrice(currentProduct.memberPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Other Retailers
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Product Price</span>
                  <span className="text-white">TShs {formatPrice(currentProduct.competitorPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Warranty</span>
                  <span className="text-white">3-6 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Delivery</span>
                  <span className="text-white">TShs 50,000</span>
                </div>
                <div className="border-t border-slate-600 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-white">Total Price</span>
                    <span className="text-red-400">TShs {formatPrice(currentProduct.competitorPrice + 50000)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-8 p-6 bg-blue-400/10 border border-blue-400/30 rounded-2xl"
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">
              You save TShs {formatPrice(savings + 50000)}
            </div>
            <div className="text-slate-300">
              That's {savingsPercentage}% savings plus free delivery and better warranty
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;