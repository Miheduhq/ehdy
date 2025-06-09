import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;