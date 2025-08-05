import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import PriceComparison from './components/PriceComparison';
import ServiceJourney from './components/ServiceJourney';
import QualitySection from './components/QualitySection';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Product } from './types/Product';
import { CartItem } from './types/Product';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return (
          <ProductGrid 
            selectedCategory={selectedCategory}
            onProductSelect={setSelectedProduct}
            onAddToCart={addToCart}
          />
        );
      case 'about':
        return <QualitySection />;
      case 'contact':
        return <CallToAction />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <ProductCategories onCategorySelect={(category) => {
              setSelectedCategory(category);
              setCurrentPage('products');
            }} />
            <PriceComparison />
            <ServiceJourney />
            <QualitySection />
            <Testimonials />
            <CallToAction />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartItemCount={getTotalItems()}
        onCartClick={() => setShowCart(true)}
      />
      <Header 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onNavigate={setCurrentPage}
      />
      
      {renderPage()}
      
      <Footer />
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;