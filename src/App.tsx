import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/CurrencyDashboard';
import PriceComparison from './components/FeeCalculator';
import ServiceJourney from './components/TransactionJourney';
import QualitySection from './components/SecuritySection';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import { Product } from './types/Product';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Hero />
      <ProductCategories />
      <PriceComparison />
      <ServiceJourney />
      <QualitySection />
      <Testimonials />
      <CallToAction />
      <ProductGrid 
        selectedCategory={selectedCategory}
        onProductSelect={setSelectedProduct}
      />
      <Footer />
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;