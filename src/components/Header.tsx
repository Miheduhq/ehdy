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
    <header className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 animate-fade-in-left">
           <svg width="153" height="65" viewBox="0 0 153 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.8496 56.4008H26.0384L14.7565 42.4408V56.4008H5.29346V10.5535H14.7579V36.6437L25.5851 23.1418H36.7909L23.0116 39.7713L37.851 56.4008H37.8496Z" fill="#0A090F"/>
<path d="M50.6448 22.3008C41.1057 22.3008 33.3067 30.0822 33.3067 39.77C33.3067 49.4577 41.1057 57.2405 50.6448 57.2405C60.1839 57.2405 68.059 49.4591 68.059 39.77C68.059 30.0808 60.2599 22.3008 50.6448 22.3008ZM50.6448 48.7726C45.7233 48.7726 41.7871 44.7287 41.7871 39.77C41.7871 34.8112 45.7233 30.7687 50.6448 30.7687C55.5664 30.7687 59.5786 34.8112 59.5786 39.77C59.5786 44.7287 55.5664 48.7726 50.6448 48.7726Z" fill="#0A090F"/>
<path d="M109.451 37.1237C107.506 37.4 105.746 37.2427 104.166 36.8078C105.553 27.5645 104.611 17.673 101.678 11.8116C98.856 6.17454 94.886 5.3335 92.7713 5.3335C89.226 5.3335 86.2563 7.16055 84.6207 10.3483C82.7286 14.0353 82.7327 19.4453 84.3343 24.8991C78.5441 27.1789 74.4464 32.4207 72.8217 36.2444C70.513 41.6763 70.6161 47.2108 73.1108 51.8263C75.3137 55.9044 79.1169 58.6805 83.5457 59.4436C84.4103 59.5927 85.2641 59.6665 86.1029 59.6665C90.791 59.6665 95.0203 57.3663 98.2086 53.0189C99.9812 50.6037 101.379 47.6375 102.424 44.3841C105.025 45.0597 107.753 45.2183 110.525 44.8258L109.451 37.1237ZM92.0017 48.3965C89.3088 52.0684 86.6268 52.0834 84.846 51.7771C82.7626 51.4188 80.956 50.0813 79.8892 48.108C78.5495 45.6286 78.559 42.501 79.9177 39.3036C80.9764 36.8119 83.8511 33.3698 87.395 32.0665C87.8823 32.9158 88.4103 33.7472 88.9749 34.55C90.8453 37.2072 93.0034 39.3939 95.3719 41.0719C94.5521 43.9054 93.4309 46.4477 92.0017 48.3965ZM96.9368 32.1322C96.2745 31.4032 95.7193 30.688 95.2741 30.0535C91.1602 24.2058 89.9712 16.8579 91.4778 13.919C91.7954 13.2995 92.0981 13.1108 92.7713 13.1108C93.3332 13.1108 94.1042 13.9559 94.7855 15.3153C96.6939 19.1239 97.4404 25.628 96.9368 32.1322Z" fill="#0A090F"/>
<path d="M144.224 50.2974C141.044 54.4931 135.971 57.2391 130.292 57.2391C120.752 57.2391 112.954 49.4577 112.954 39.77C112.954 30.0822 120.752 22.3008 130.292 22.3008C139.833 22.3008 147.707 30.1588 147.707 39.77C147.707 42.0592 147.176 44.0422 147.176 44.0422H122.493C124.008 46.8648 126.96 48.7712 130.292 48.7712C132.942 48.7712 135.365 47.55 136.955 45.7202L144.224 50.2974ZM122.495 35.4991H138.167C136.653 32.753 133.701 30.7687 130.294 30.7687C126.887 30.7687 124.009 32.7517 122.495 35.4991Z" fill="#0A090F"/>
</svg>

          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 animate-fade-in">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-black hover:text-gray-600 transition-all duration-300 font-medium hover:scale-110 transform"
              style={{
                fontFamily: 'Prompt, sans-serif',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-black hover:text-gray-600 transition-all duration-300 font-medium hover:scale-110 transform"
              style={{
                fontFamily: 'Prompt, sans-serif',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-black hover:text-gray-600 transition-all duration-300 font-medium hover:scale-110 transform"
              style={{
                fontFamily: 'Prompt, sans-serif',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              Portfolio
            </button>
            <button 
              onClick={handleContactClick}
              className="text-black hover:text-gray-600 transition-all duration-300 font-medium hover:scale-110 transform"
              style={{
                fontFamily: 'Prompt, sans-serif',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              Contact
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 animate-fade-in-right">
            {/* CTA Button - Hidden on small screens, visible on medium+ */}
            <button 
              onClick={handleContactClick}
              className="hidden md:block hover:scale-105 transition-all duration-300 hover:shadow-lg"
              style={{
                display: 'flex',
                padding: '12px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '15px',
                border: '4px solid #404040',
                background: 'linear-gradient(180deg, #1F1F1F 0%, #000 100%)',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: 'Prompt, sans-serif',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Devis gratuit
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-black p-1 hover:bg-black/10 rounded-md transition-all duration-300 hover:scale-110 transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-slide-down">
            <div className="px-2 pt-4 pb-6 space-y-1 bg-white/90 backdrop-blur-md rounded-lg mt-4 border border-gray-200">
              <nav className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-black hover:text-gray-600 transition-all duration-300 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-left hover:scale-105 transform"
                  style={{
                    fontFamily: 'Prompt, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  Accueil
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-black hover:text-gray-600 transition-all duration-300 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-left hover:scale-105 transform"
                  style={{
                    fontFamily: 'Prompt, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-black hover:text-gray-600 transition-all duration-300 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-left hover:scale-105 transform"
                  style={{
                    fontFamily: 'Prompt, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  Portfolio
                </button>
                <button 
                  onClick={handleContactClick}
                  className="text-black hover:text-gray-600 transition-all duration-300 px-3 py-2 rounded-md font-medium hover:bg-gray-100 text-left hover:scale-105 transform"
                  style={{
                    fontFamily: 'Prompt, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  Contact
                </button>
                
                {/* Mobile CTA Button */}
                <div className="pt-3 border-t border-gray-200">
                  <button 
                    onClick={handleContactClick}
                    className="w-full hover:scale-105 transition-all duration-300 hover:shadow-lg"
                    style={{
                      display: 'flex',
                      padding: '16px 24px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '15px',
                      border: '4px solid #404040',
                      background: 'linear-gradient(180deg, #1F1F1F 0%, #000 100%)',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '600',
                      fontFamily: 'Prompt, sans-serif',
                      cursor: 'pointer'
                    }}
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