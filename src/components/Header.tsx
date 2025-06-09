import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  openContactModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, openContactModal }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    openContactModal();
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 animate-fade-in-left">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Hedy
              </span>
              <span className="text-white ml-1">Agency</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 animate-fade-in">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-white/80 hover:text-white transition-all duration-300 text-base font-medium hover:scale-110 transform"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-white transition-all duration-300 text-base font-medium hover:scale-110 transform"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white/80 hover:text-white transition-all duration-300 text-base font-medium hover:scale-110 transform"
            >
              Portfolio
            </button>
            <button 
              onClick={handleContactClick}
              className="text-white/80 hover:text-white transition-all duration-300 text-base font-medium hover:scale-110 transform"
            >
              Contact
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 animate-fade-in-right">
            {/* CTA Button - Hidden on small screens, visible on medium+ */}
            <button 
              onClick={handleContactClick}
              className="hidden md:block bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 text-sm whitespace-nowrap hover:scale-105 transform"
            >
              Devis gratuit
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-all duration-300 hover:scale-110 transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-slide-down">
            <div className="px-2 pt-4 pb-6 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-4 border border-white/10">
              <nav className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-white hover:text-orange-400 transition-all duration-300 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-left hover:scale-105 transform"
                >
                  Accueil
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:text-orange-400 transition-all duration-300 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-left hover:scale-105 transform"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-white hover:text-orange-400 transition-all duration-300 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-left hover:scale-105 transform"
                >
                  Portfolio
                </button>
                <button 
                  onClick={handleContactClick}
                  className="text-white hover:text-orange-400 transition-all duration-300 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-left hover:scale-105 transform"
                >
                  Contact
                </button>
                
                {/* Mobile CTA Button */}
                <div className="pt-3 border-t border-white/20">
                  <button 
                    onClick={handleContactClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm hover:scale-105 transform"
                  >
                    Devis gratuit
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;