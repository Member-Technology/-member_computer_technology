import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Monitor, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, cartItemCount, onCartClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 right-6 transform z-50 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-3"
    >
      <div className="grid grid-cols-3 items-center gap-4">
        {/* Logo - Left side */}
        <div className="flex items-center space-x-3 justify-self-start">
          <motion.div 
            className="bg-blue-600 p-2 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('home')}
          >
            <Monitor className="text-white" size={24} />
          </motion.div>
          <div>
            <span 
              className="text-white font-semibold text-lg cursor-pointer hover:text-blue-400 transition-colors"
              onClick={() => onNavigate('home')}
            >
              MEMBER COMPUTER
            </span>
            <div className="text-blue-400 text-xs font-medium">TECHNOLOGY</div>
          </div>
        </div>
        
        {/* Navigation Menu - Center */}
        <div className="hidden md:flex items-center space-x-8 justify-self-center">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm transition-colors ${
                currentPage === item.id
                  ? 'text-blue-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Cart and Auth buttons - Right side */}
        <div className="hidden md:flex items-center space-x-4 justify-self-end">
          <motion.button
            onClick={onCartClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative text-slate-300 hover:text-white transition-colors"
          >
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </motion.button>
          <button 
            onClick={() => onNavigate('login')}
            className="text-slate-300 hover:text-white transition-colors text-sm whitespace-nowrap"
          >
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('products')}
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

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-b-2xl p-4 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;