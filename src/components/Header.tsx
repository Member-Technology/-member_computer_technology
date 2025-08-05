import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onNavigate: (page: string) => void;
}

const categories = [
  { id: 'all', name: 'All Products', icon: '🖥️' },
  { id: 'laptop', name: 'Laptops', icon: '💻' },
  { id: 'desktop', name: 'Desktops', icon: '🖥️' },
  { id: 'gaming', name: 'Gaming', icon: '🎮' },
  { id: 'components', name: 'Components', icon: '🔧' },
  { id: 'accessories', name: 'Accessories', icon: '🖱️' }
];

const Header: React.FC<HeaderProps> = ({ selectedCategory, onCategoryChange, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onNavigate('products');
      // You can add search functionality here
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          Special Offer: Free delivery allover Tanzania! Use code: FreeShipping
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate('home')}
            style={{ cursor: 'pointer' }}
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <Monitor className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                MEMBER COMPUTER
              </h1>
              <p className="text-sm text-blue-600 font-medium">TECHNOLOGY</p>
            </div>
          </motion.div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for computers, laptops, accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              className="ml-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </motion.button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate('login')}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <User size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </motion.button>
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center space-x-8 py-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => {
                  if (category.id !== 'all') onNavigate('products');
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4 space-y-2"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      onCategoryChange(category.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;