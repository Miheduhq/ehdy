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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 animate-fade-in-left">
            <svg 
              width="79" 
              height="53" 
              viewBox="0 0 79 53" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 sm:h-14 md:h-16 w-auto hover:scale-110 transition-transform duration-300"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M52.8369 10.7098C51.3845 9.82572 49.7111 9.38369 48.0692 9.38369C42.9858 9.38369 39.1023 13.5199 39.1023 18.2875C39.1023 23.0552 42.9858 27.1914 48.0692 27.1914C49.6795 27.1914 51.3845 26.7494 52.8369 25.8653V26.7809H57.4467V0.921875H52.8369V10.7098ZM48.385 22.8342C45.7644 22.8026 43.9331 20.845 43.9331 18.2875C43.9331 15.7616 45.7644 13.7725 48.385 13.7409C51.0056 13.7725 52.8369 15.7616 52.8369 18.2875C52.8369 20.845 51.0056 22.8026 48.385 22.8342ZM5.41286 25.7074V35.2743H0.80307V9.41526H5.41286V19.3611C6.20221 18.6349 7.62304 17.8455 9.64377 17.8455C13.5274 17.8455 16.369 20.7187 16.369 24.4445V35.2112H11.7592V25.4232C11.7592 23.592 10.6857 22.108 8.63341 22.108C6.77054 22.108 5.41286 23.5604 5.41286 25.7074ZM36.0396 31.8643C34.4293 34.1377 31.6824 35.6532 28.3987 35.6532C22.9048 35.6532 19.116 31.5486 19.116 26.7494C19.116 21.9817 22.8101 17.8455 28.3355 17.8455C33.861 17.8455 37.7446 22.1396 37.2394 28.0755H24.0099C24.5151 30.1278 26.2517 31.3591 28.3987 31.3907C30.1037 31.3591 31.6192 30.5698 32.377 29.2437L36.0396 31.8643ZM28.3355 22.0133C26.1569 22.0448 24.6414 23.3078 24.1362 25.0128H32.5664C32.0613 23.4025 30.5141 22.0448 28.3355 22.0133ZM78.6644 9.79415L65.3402 35.369H59.9095L66.1611 23.9393L59.1201 9.79415H64.2351L68.8133 19.2979L73.5494 9.79415H78.6644ZM4.46565 49.009C4.30778 49.3879 3.6763 49.893 2.79223 49.893C1.59242 49.893 0.80307 49.1668 0.80307 48.2512C0.80307 47.3356 1.52927 46.7672 2.50806 46.7672H3.73945C4.11833 46.7672 4.33935 46.5462 4.33935 46.2305C4.33935 45.82 3.89732 45.3148 3.04482 45.3148C2.28704 45.3148 1.81344 45.7253 1.59242 46.2936L0.96094 45.8832C1.27668 45.1254 1.93973 44.557 3.01325 44.557C4.33935 44.557 5.16027 45.4095 5.16027 46.4515V49.7983H4.43407V49.009H4.46565ZM1.65557 48.2512C1.65557 48.7248 2.06603 49.1353 2.79223 49.1353C3.80259 49.1353 4.4025 48.4722 4.4025 47.5566V47.4934H2.53964C2.00288 47.4619 1.65557 47.7776 1.65557 48.2512ZM9.20174 44.5255C9.92794 44.5255 10.591 44.8412 11.0646 45.3464V44.6518H11.8539V49.7983C11.8539 51.3454 10.812 52.5137 9.23331 52.5137C8.22294 52.5137 7.3073 52.0085 6.83369 51.2192L7.55989 50.7771C7.87563 51.3454 8.53868 51.7243 9.23331 51.7243C10.4015 51.7243 11.0646 50.9034 11.0646 49.8299V49.1037C10.591 49.6089 9.92794 49.9246 9.20174 49.9246C7.71776 49.9246 6.48638 48.8195 6.48638 47.2408C6.48638 45.6621 7.71776 44.5255 9.20174 44.5255ZM7.33887 47.2093C7.33887 48.3144 8.1598 49.0721 9.20174 49.0721C10.2437 49.0721 11.0646 48.2828 11.0646 47.2093C11.0646 46.1042 10.2437 45.3148 9.20174 45.3148C8.1598 45.3148 7.33887 46.1042 7.33887 47.2093ZM15.8638 49.893C16.8426 49.893 17.7267 49.3879 18.2003 48.5985L17.5373 48.1881C17.1899 48.7564 16.5585 49.1037 15.8638 49.1037C15.0429 49.1037 14.1588 48.5354 14.001 47.4934H18.3898C18.5792 45.8516 17.3794 44.557 15.8007 44.557C14.222 44.557 13.1485 45.7884 13.1485 47.2408C13.1485 48.6617 14.3167 49.893 15.8638 49.893ZM14.0325 46.7357C14.222 45.9147 14.8535 45.3148 15.8007 45.3148C16.7795 45.3148 17.4741 46.041 17.5057 46.7357H14.0325ZM20.5684 46.8935V49.7668H19.779V44.6518H20.5052V45.4095C20.6946 45.0307 21.263 44.5255 22.1786 44.5255C23.41 44.5255 24.1994 45.4095 24.1994 46.5462V49.7352H23.41V46.7041C23.41 45.82 22.8733 45.2833 22.0523 45.2833C21.1998 45.2833 20.5684 45.9147 20.5684 46.8935ZM28.2092 49.893C29.2196 49.893 30.0721 49.3879 30.5457 48.5985L29.8511 48.1565C29.5353 48.7248 28.9039 49.1037 28.2092 49.1037C27.1673 49.1037 26.3464 48.3144 26.3464 47.2093C26.3464 46.1042 27.1673 45.3148 28.2092 45.3148C28.9039 45.3148 29.5353 45.6937 29.8511 46.262L30.5457 45.82C30.0721 44.9991 29.2196 44.5255 28.2092 44.5255C26.7253 44.5255 25.4939 45.6621 25.4939 47.2093C25.4939 48.7564 26.7253 49.893 28.2092 49.893ZM36.3869 44.6518L32.377 52.3874H31.4298L33.1032 49.1984L30.8299 44.6518H31.7455L33.5768 48.3775L35.4397 44.6518H36.3869Z" fill="white"/>
            </svg>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 animate-fade-in">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-white hover:text-pink-400 transition-all duration-300 text-sm xl:text-base font-medium hover:scale-110 transform"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-pink-400 transition-all duration-300 text-sm xl:text-base font-medium hover:scale-110 transform"
            >
              Services
            </button>
            <button 
              onClick={handleContactClick}
              className="text-white hover:text-pink-400 transition-all duration-300 text-sm xl:text-base font-medium hover:scale-110 transform"
            >
              Contact
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 animate-fade-in-right">
            {/* CTA Button - Hidden on small screens, visible on medium+ */}
            <button 
              onClick={handleContactClick}
              className="hidden md:block bg-white text-gray-900 px-3 lg:px-4 xl:px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 text-xs lg:text-sm xl:text-base whitespace-nowrap hover:scale-105 transform hover:shadow-lg"
            >
              Obtenir un devis
            </button>
            
            {/* Hand logo in white circle */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
              <img 
                src="https://i.ibb.co/0RYfRHYT/image-1.png" 
                alt="Hand logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-8 object-contain"
              />
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-white p-1 hover:bg-white/10 rounded-md transition-all duration-300 hover:scale-110 transform"
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
            <div className="px-2 pt-4 pb-6 space-y-1 bg-black/20 backdrop-blur-md rounded-lg mt-4 border border-white/10">
              <nav className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-white hover:text-pink-400 transition-all duration-300 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-left hover:scale-105 transform"
                >
                  Accueil
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:text-pink-400 transition-all duration-300 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-left hover:scale-105 transform"
                >
                  Services
                </button>
                <button 
                  onClick={handleContactClick}
                  className="text-white hover:text-pink-400 transition-all duration-300 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-left hover:scale-105 transform"
                >
                  Contact
                </button>
                
                {/* Mobile CTA Button */}
                <div className="pt-3 border-t border-white/20">
                  <button 
                    onClick={handleContactClick}
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 text-sm hover:scale-105 transform hover:shadow-lg"
                  >
                    Obtenir un devis
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