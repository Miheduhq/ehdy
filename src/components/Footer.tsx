import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#0A090F' }} className="border-t border-gray-800 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section - Full width on mobile, spans 2 cols on larger screens */}
          <div className="sm:col-span-2 lg:col-span-1 animate-fade-in-up animation-delay-100">
            <div className="flex items-center mb-4 sm:mb-6">
              <svg 
                width="144" 
                height="96" 
                viewBox="0 0 144 96" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 sm:h-10 w-auto hover:scale-110 transition-transform duration-300"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M95.8334 18.3676C93.1839 16.7353 90.0582 15.9191 87.0686 15.9191C77.6927 15.9191 70.5587 23.5367 70.5587 32.3106C70.5587 41.0845 77.6927 48.7021 87.0686 48.7021C90.0582 48.7021 93.1839 47.886 95.8334 46.2536V47.954H104.326V0.34375H95.8334V18.3676ZM87.6122 40.6764C82.7882 40.6084 79.391 37.0036 79.391 32.3106C79.391 27.6856 82.7882 24.0128 87.6122 23.9448C92.4362 24.0128 95.8334 27.6856 95.8334 32.3106C95.8334 37.0036 92.4362 40.6084 87.6122 40.6764ZM8.49545 45.9587V63.5522H0V16.0025H8.49545V34.3431C9.92265 32.9845 12.5733 31.558 16.3112 31.558C23.4474 31.558 28.6806 36.8564 28.6806 43.7172V63.5522H20.1851V45.4833C20.1851 42.0869 18.2142 39.3697 14.4083 39.3697C11.0101 39.3697 8.49545 42.019 8.49545 45.9587ZM64.9027 57.3028C61.9125 61.5144 56.8833 64.2993 50.8345 64.2993C40.708 64.2993 33.7077 56.7593 33.7077 47.9287C33.7077 39.166 40.5041 31.558 50.6986 31.558C60.8933 31.558 68.0296 39.4377 67.0778 50.3741H42.7469C43.6984 54.1781 46.8926 56.4197 50.8345 56.4876C53.9608 56.4197 56.7473 54.9932 58.1746 52.5478L64.9027 57.3028ZM50.6986 39.166C46.6887 39.2339 43.9023 41.5434 42.9508 44.6681H58.4467C57.5629 41.7472 54.7084 39.2339 50.6986 39.166ZM143.381 16.6673L118.854 63.7336H108.866L120.349 42.7168L107.372 16.6673H116.815L125.241 34.147L133.937 16.6673H143.381ZM6.73604 88.8955C6.44318 89.5653 5.27168 90.5066 3.66089 90.5066C1.44344 90.5066 0 89.1467 0 87.4728C0 85.7995 1.35976 84.7326 3.15883 84.7326H5.41812C6.10846 84.7326 6.54777 84.314 6.54777 83.7285C6.54777 82.9965 5.75283 82.0552 4.14204 82.0552C2.71952 82.0552 1.88275 82.829 1.48528 83.8541L0.33471 83.1011C0.920455 81.6993 2.1547 80.6324 4.14204 80.6324C6.58964 80.6324 8.07486 82.222 8.07486 84.1262V90.2764H6.73604V88.8955ZM1.56895 87.4728C1.56895 88.3519 2.30113 89.0839 3.66089 89.0839C5.52272 89.0839 6.61051 87.8914 6.61051 86.1553V86.0297H3.17975C2.21746 86.0297 1.56895 86.6361 1.56895 87.4728ZM15.4516 80.6324C16.7904 80.6324 18.0037 81.197 18.8614 82.1598V80.8627H20.3258V90.3601C20.3258 93.2259 18.4221 95.3387 15.4725 95.3387C13.6316 95.3387 11.9162 94.4184 11.0585 92.9328L12.3765 92.1171C12.9412 93.184 14.1755 93.8742 15.4725 93.8742C17.6063 93.8742 18.8614 92.3683 18.8614 90.3601V89.0001C18.0037 89.9415 16.7904 90.5066 15.4516 90.5066C12.7111 90.5066 10.4728 88.4565 10.4728 85.5902C10.4728 82.7034 12.7111 80.6324 15.4516 80.6324ZM12.0417 85.5902C12.0417 87.5984 13.527 89.042 15.4516 89.042C17.3552 89.042 18.8614 87.5984 18.8614 85.5902C18.8614 83.561 17.3552 82.097 15.4516 82.097C13.527 82.097 12.0417 83.561 12.0417 85.5902ZM27.725 90.5066C29.545 90.5066 31.1559 89.5862 32.0136 88.1007L30.8211 87.3268C30.1936 88.3937 29.0011 89.042 27.725 89.042C26.198 89.042 24.5662 87.9751 24.3152 86.0506H32.3901C32.7666 83.0174 30.5283 80.6324 27.6204 80.6324C24.6917 80.6324 22.7253 82.9127 22.7253 85.5692C22.7253 88.2472 24.88 90.5066 27.725 90.5066ZM24.378 84.6907C24.7127 83.2058 25.8632 82.0761 27.6204 82.0761C29.4404 82.0761 30.6747 83.3936 30.7793 84.6907H24.378ZM36.4161 84.9837V90.2764H34.9517V80.8627H36.2906V82.243C36.6253 81.5737 37.6712 80.6324 39.3448 80.6324C41.625 80.6324 43.0685 82.2639 43.0685 84.3767V90.2764H41.6041V84.6907C41.6041 83.0802 40.5999 82.0552 39.0938 82.0552C37.5666 82.0552 36.4161 83.2058 36.4161 84.9837ZM50.4524 90.5066C52.2932 90.5066 53.904 89.5862 54.7617 88.1007L53.4857 87.285C52.8999 88.3519 51.7493 89.042 50.4524 89.042C48.5278 89.042 47.0425 87.5774 47.0425 85.5692C47.0425 83.561 48.5278 82.097 50.4524 82.097C51.7493 82.097 52.8999 82.7872 53.4857 83.8541L54.7617 83.0383C53.904 81.5528 52.2932 80.6324 50.4524 80.6324C47.7119 80.6324 45.4735 82.7034 45.4735 85.5692C45.4735 88.4356 47.7119 90.5066 50.4524 90.5066ZM65.5254 80.8627L58.1409 95.1294H56.4045L59.5008 89.2513L55.2958 80.8627H56.9694L60.3584 87.703L63.7893 80.8627H65.5254Z" fill="url(#paint0_linear_0_195)"/>
                <defs>
                  <linearGradient id="paint0_linear_0_195" x1="-26.4544" y1="80.6574" x2="127.353" y2="44.8485" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stopColor="white"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed max-w-md">
              Nous créons des sites vitrines exceptionnels qui transforment 
              votre présence en ligne en véritable outil de croissance. 
              Votre partenaire de confiance pour votre réussite digitale.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="sm:col-span-1 lg:col-span-1 animate-fade-in-up animation-delay-200">
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Nos Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  Sites Vitrines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  Design Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  Référencement SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  Hébergement Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="sm:col-span-1 lg:col-span-1 animate-fade-in-up animation-delay-300">
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">L'Agence</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  Notre équipe
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  Nos réalisations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-2 transform block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="sm:col-span-2 lg:col-span-1 animate-fade-in-up animation-delay-400">
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Nous Contacter</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    contact@hedyagency.fr
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    +33 1 23 45 67 89
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    123 Avenue des Entrepreneurs<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 animate-fade-in-up animation-delay-500">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Hedy Agency. Tous droits réservés.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:scale-110 transform"
              >
                Politique de confidentialité
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:scale-110 transform"
              >
                Conditions générales
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:scale-110 transform"
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