import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Services from './components/Services';
import ImageGallery from './components/ImageGallery';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Product />
      <Services />
      <ImageGallery />
      <Testimonials />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;