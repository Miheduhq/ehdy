import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#0B0B0F' }} className="border-t border-gray-800 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 animate-fade-in-up animation-delay-100">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  Hedy
                </span>
                <span className="text-white ml-1">Agency</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed max-w-md">
              Nous créons des sites vitrines exceptionnels qui transforment 
              votre présence en ligne en véritable outil de croissance. 
              Votre partenaire de confiance pour votre réussite digitale.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="sm:col-span-1 lg:col-span-1 animate-fade-in-up animation-delay-200">
            <h3 className="text-white font-semibold mb-6 text-lg">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  Sites Vitrines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  Design Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  Référencement SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  Hébergement Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="sm:col-span-1 lg:col-span-1 animate-fade-in-up animation-delay-300">
            <h3 className="text-white font-semibold mb-6 text-lg">L'Agence</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  Notre équipe
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  Nos réalisations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-base hover:translate-x-2 transform block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="sm:col-span-2 lg:col-span-1 animate-fade-in-up animation-delay-400">
            <h3 className="text-white font-semibold mb-6 text-lg">Nous Contacter</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-base">
                    contact@hedyagency.fr
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-base">
                    +33 1 23 45 67 89
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-base">
                    123 Avenue des Entrepreneurs<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 animate-fade-in-up animation-delay-500">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Hedy Agency. Tous droits réservés.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 text-sm transition-all duration-300 hover:scale-110 transform"
              >
                Politique de confidentialité
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 text-sm transition-all duration-300 hover:scale-110 transform"
              >
                Conditions générales
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 text-sm transition-all duration-300 hover:scale-110 transform"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;