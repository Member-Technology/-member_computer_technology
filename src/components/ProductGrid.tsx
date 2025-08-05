import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Eye, Heart, Filter } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types/Product';

interface ProductGridProps {
  selectedCategory: string;
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ selectedCategory, onProductSelect, onAddToCart }) => {
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatPriceWithCurrency = (price: number) => {
    return `TShs ${formatPrice(price)}`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'all' ? 'All Products' : 
               selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} products found
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-lg p-6 mb-8 shadow-sm border"
          >
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tshs {priceRange[0]}</span>
                    <span>Tshs {priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {product.isOnSale && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      SALE
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      OUT OF STOCK
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onProductSelect(product)}
                    className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
                  >
                    <Eye size={16} className="text-blue-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors"
                  >
                    <Heart size={16} className="text-red-500" />
                  </motion.button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="text-sm text-blue-600 font-medium mb-1">
                  {product.brand}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">
                    {formatPriceWithCurrency(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPriceWithCurrency(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onAddToCart(product, 1)}
                  disabled={!product.inStock}
                  className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-colors ${
                    product.inStock
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart size={18} />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;