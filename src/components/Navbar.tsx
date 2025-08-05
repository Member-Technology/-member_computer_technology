import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Monitor } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 right-6 transform z-50 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-3"
    >
      <div className="grid grid-cols-3 items-center gap-4">
        {/* Logo - Left side */}
        <div className="flex items-center space-x-3 justify-self-start">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Monitor className="text-white" size={24} />
          </div>
          <div>
            <span className="text-white font-semibold text-lg">MEMBER COMPUTER</span>
            <div className="text-blue-400 text-xs font-medium">TECHNOLOGY</div>
          </div>
        </div>
        
        {/* Navigation Menu - Center */}
        <div className="hidden md:flex items-center space-x-8 justify-self-center">
          <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Laptops</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Desktops</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Gaming</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Support</a>
        </div>

        {/* Auth buttons - Right side */}
        <div className="hidden md:flex items-center space-x-4 justify-self-end">
          <button className="text-slate-300 hover:text-white transition-colors text-sm whitespace-nowrap">
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Shop Now
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;