import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Mwalimu',
    role: 'Business Owner',
    country: 'Dar es Salaam',
    rating: 5,
    text: 'MEMBER COMPUTER TECHNOLOGY provided excellent service. My new laptop works perfectly and the setup was professional.',
    avatar: '👨‍💼'
  },
  {
    name: 'Grace Kimaro',
    role: 'Student',
    country: 'Arusha',
    rating: 5,
    text: 'Great prices and genuine products. The gaming PC I bought runs all my games smoothly. Highly recommended!',
    avatar: '👩‍🎓'
  },
  {
    name: 'David Mbwana',
    role: 'Graphic Designer',
    country: 'Mwanza',
    rating: 5,
    text: 'Professional service and quality computers. The iMac I purchased is perfect for my design work.',
    avatar: '👨‍🎨'
  },
  {
    name: 'Amina Hassan',
    role: 'Teacher',
    country: 'Dodoma',
    rating: 5,
    text: 'Excellent customer service and fast delivery. The laptop arrived in perfect condition with all accessories.',
    avatar: '👩‍🏫'
  },
  {
    name: 'Peter Msigwa',
    role: 'IT Consultant',
    country: 'Mbeya',
    rating: 5,
    text: 'Reliable computers and honest pricing. I always recommend MEMBER COMPUTER TECHNOLOGY to my clients.',
    avatar: '👨‍💻'
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Trusted by{' '}
            <span className="text-blue-400 font-medium">thousands</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            See what our customers across Tanzania are saying about 
            MEMBER COMPUTER TECHNOLOGY.
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-800 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-800 to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex space-x-6"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-blue-400 fill-current" />
                  ))}
                </div>

                <Quote className="text-slate-600 mb-4" size={24} />

                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.role} • {testimonial.country}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-blue-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="text-slate-400">
              Based on 2,500+ reviews
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;