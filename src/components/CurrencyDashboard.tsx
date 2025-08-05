import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Monitor, Laptop, Gamepad2, Smartphone } from 'lucide-react';

const categories = [
  { name: 'Laptops', count: '150+', trend: '+12%', icon: Laptop, color: 'from-blue-400 to-blue-600' },
  { name: 'Desktops', count: '80+', trend: '+8%', icon: Monitor, color: 'from-green-400 to-green-600' },
  { name: 'Gaming PCs', count: '45+', trend: '+25%', icon: Gamepad2, color: 'from-purple-400 to-purple-600' },
  { name: 'Accessories', count: '200+', trend: '+15%', icon: Smartphone, color: 'from-orange-400 to-orange-600' },
];

const ProductCategories = () => {
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
            Extensive{' '}
            <span className="text-blue-400 font-medium">product range</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Browse through our comprehensive collection of computers, laptops, 
            and accessories from top brands worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{category.name}</div>
                    <div className="text-slate-400 text-sm">Available now</div>
                  </div>
                </div>
                <ArrowUpRight className="text-slate-400" size={20} />
              </div>

              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="mb-4"
              >
                <div className="text-2xl font-semibold text-white mb-1">
                  {category.count}
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-blue-400" size={16} />
                  <span className="text-blue-400 text-sm font-medium">
                    {category.trend} this month
                  </span>
                </div>
              </motion.div>

              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Popular Brands Available
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-300">
              <div className="font-medium">Apple</div>
              <div className="font-medium">Dell</div>
              <div className="font-medium">HP</div>
              <div className="font-medium">Lenovo</div>
              <div className="font-medium">ASUS</div>
              <div className="font-medium">Acer</div>
              <div className="font-medium">MSI</div>
              <div className="font-medium">Samsung</div>
               <div className="font-medium">ERAZER MEDION GAMING NOTEBOOK P15603</div>
               <div className="font-medium">GIGABYTE GAMING LAPTOP</div>
               <div className="font-medium">OMEN GEFORCE RTX INVIDIA</div>
               <div className="font-medium">NEC VERSAPRO</div>
            </div>
          </div>
          
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
            Browse All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;