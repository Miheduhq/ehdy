import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        openContactModal={() => setIsContactModalOpen(true)}
      />
      <Hero openContactModal={() => setIsContactModalOpen(true)} />
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <Footer />
    </div>
  );
}

export default App;