import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

interface HeroProps {
  openContactModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openContactModal }) => {
  return (
    <>
      <section id="accueil" className="relative z-10 w-full px-6 sm:px-6 py-28 sm:py-32 overflow-hidden">
        {/* Background Gradient Texture - Version blanche de l'illustration */}
        <div className="absolute inset-0 opacity-10">
          <svg 
            className="absolute right-0 top-0 h-full w-auto hidden lg:block animate-float" 
            width="845" 
            height="814" 
            viewBox="0 0 845 814" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#f8f9fa" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            <g>
              <path d="M48.39,122.68c18.57.92,36.79-5.18,50.69-16.99,17.62-16.84,27.02-33.1,28.82-49.75,1.27-7.51.66-15.21-1.77-22.45-2.43-7.25-6.62-13.84-12.23-19.24-5.61-5.4-12.47-9.46-20.03-11.83-7.56-2.38-15.6-3.01-23.46-1.85C31.55,4.13-1.19,39.56.2,76.25c.21,12.19,5.35,23.84,14.33,32.49,8.98,8.66,21.12,13.65,33.87,13.94Z" fill="url(#whiteGradient)"/>
              <path d="M6.2,272.25v-1.96c0-4.26-.02-8.56-.03-12.87-.05-19.24-.11-38.88.06-58.22.1-8.15,1.85-13.85,5.47-17.31,3.62-3.46,9.3-5.11,17.51-5.55,89.26-4.67,150.11-62.91,155.12-148.34.9-15.99,7.19-21.71,24.04-21.85,25.57-.25,51.73-.17,76.36-.05,10.42.15,17.61,2.11,21.39,5.72,3.77,3.61,5.42,10.09,5.13,19.64-2.31,71.7-30.68,134.64-84.25,187.09-53.9,49.82-118.86,76.54-192.84,79.02-10.84.39-17.97-1.33-21.98-4.86-4.01-3.54-5.93-10.24-5.98-20.46Z" fill="url(#whiteGradient)"/>
              <path d="M296.68,376.42c-36.63-19.35-75.06-35.41-114.78-47.98l-.67-.2c-8.45-2.77-10.11-3.88-10.55-7-.19-1.05-.08-2.14.29-3.14.38-1.01,1.02-1.9,1.86-2.6,2.13-1.85,4.51-3.41,7.09-4.62,24.88-12.56,48.08-27.97,69.07-45.87,71.24-61.83,109.16-139.89,112.7-231.98.82-21.71,6.24-26.69,28.91-26.77,18.51-.02,37.01-.02,55.52,0l13.68-.02c12.15.02,20.08,2.01,23.83,5.75,3.75,3.73,5.4,10.8,5.01,21.63-4.28,118.87-49.48,219.7-138.19,308.22-3.03,2.5-6.32,5.16-9.82,7.96-1.12.92-2.27,1.85-3.43,2.79-8.7,7.07-18.3,14.86-27.79,22.89-4.26,3.58-6.68,4.22-12.73.93Z" fill="url(#whiteGradient)"/>
              <path d="M671.03,486.6c6.32,2.06,8.97,4.59,9.3,6.19.3,1.42-.92,4.47-5.42,8.42-4.44,2.63-9.12,5.23-13.87,7.86-11.91,6.37-23.4,13.42-34.43,21.09-87.31,63.65-133.58,148.86-137.4,253.24-.69,18.93-6.91,24.73-26.63,24.78h-5.13c-22.91.05-46.58.1-69.84-.05-9.53-.07-16.56-2.28-20.24-5.94-3.66-3.66-5.39-9.67-5.1-17.9,4.37-122.73,50.43-226.65,137.19-309.62,12.14-11.61,25.06-22.79,38.77-33.54,7.19-5.65,11.13-5.97,19.19-1.6,36.23,19.1,74.27,34.87,113.62,47.07Z" fill="url(#whiteGradient)"/>
              <path d="M457.85,295.16l5.32,6.16c10.62,12.83,21.92,25.13,33.87,36.86,89.98,82.65,198.21,126.19,321.69,129.46,9.52.22,16.05-1.4,19.98-5.06l.16-.15c3.9-3.73,5.83-10.09,5.88-19.42l.02-.66c.1-24.16.16-49.26,0-73.67-.23-14.95-7.44-21.85-23.34-22.32-102.05-2.55-187.45-41.3-253.93-115.14-15.87-18.06-29.67-37.71-41.14-58.59-4.55-8.03-7.34-9.38-11.01-9.11-3.67.27-4.47,1.96-7.37,10.19-13.41,38.49-30.41,75.74-50.82,111.31-2.82,4.86-2.28,6.65.69,10.14Z" fill="url(#whiteGradient)"/>
              <path d="M31.01,346.8c145.79,4.67,266.26,60.92,358.03,167.15,6.68,7.76,7.09,11.98,2.06,20.43-19.19,32.99-34.99,67.68-47.2,103.58l-.9,2.68c-2.95,8.82-4.16,9.82-7.52,10.04-4.99.39-7.14-2.21-12.36-11.57-15.82-28.39-36.03-54.33-59.93-76.96-63.68-59.67-140.92-91.3-229.59-93.98-21.8-.66-27.42-6.14-27.42-26.72l-.03-17.8c-.05-17.5-.04-35.01.03-52.52.05-8.99,2.08-15.49,6.03-19.28l.21-.2c3.83-3.51,10.07-5.16,18.59-4.86Z" fill="url(#whiteGradient)"/>
              <path d="M845.08,560.41c-.03-7.82-.04-15.66-.03-23.5.13-2.83-.36-5.66-1.43-8.3-1.08-2.64-2.72-5.04-4.81-7.05-4.16-3.68-9.8-5.35-18.54-5.21-71.9,0-143.64,29.61-196.66,80.32-53.16,50.83-83.67,119.29-83.51,187.9-.02,17.02,6.66,23.4,24.57,23.5,27.1.22,53.75.17,79.22-.07,15.66-.24,22.23-6.14,23.16-21.31,5.24-86.34,64.97-143.41,155.82-149,15.27-.91,21.93-7.17,22.04-21.07.23-18.54.32-37.55.18-56.21Z" fill="url(#whiteGradient)"/>
              <path d="M540.03,31.14c2.03,61.51,22.52,115.98,60.8,161.77,56.43,67.48,130.98,102.77,221.6,104.9,3.02.5,6.13.31,9.06-.56,2.94-.87,5.62-2.38,7.82-4.42,2.2-2.04,3.87-4.55,4.87-7.32,1-2.77,1.3-5.73.87-8.64.39-27.58.39-54.39-.02-79.78-.23-13.58-6.94-20.23-20.6-20.33-41.83-.35-81.85-16.44-111.37-44.79-29.52-28.35-46.18-66.68-46.37-106.69,0-15.37-11.12-18.83-20.36-18.93-17.17-.31-34.58-.3-51.78-.29h-.02s-.01,0-.01,0c-4.9,0-9.78,0-14.64,0l-20.08.1c-2.65-.04-5.28.44-7.73,1.41-2.46.97-4.67,2.4-6.52,4.22-4.32,4.37-5.96,9.97-5.52,19.37Z" fill="url(#whiteGradient)"/>
              <path d="M306.02,802.51c-3.96,3.83-10.66,5.67-20.93,5.67-24.39.1-50.38.2-76.36-.24-17.46,0-23.55-5.67-24.47-22.76-4.6-83.81-66.76-143.11-154.66-147.46-17.13-.81-23.24-6.65-23.42-22.39-.26-24.31-.15-48.96.05-75.63.13-8.42,1.72-14.12,5.65-17.88,3.93-3.76,10.14-5.38,19.21-5.35,73.87.12,146.78,32.66,210.97,94.05,41.62,40.93,66.73,103.5,69.1,171.82.46,9.92-1.18,16.35-5.13,20.18Z" fill="url(#whiteGradient)"/>
              <path d="M95.01,811.19c-7.05,2.36-14.55,3.25-21.99,2.62-36.16-1.92-69.39-32.66-72.6-66.91-1-7.48-.24-15.08,2.22-22.24,2.46-7.16,6.55-13.72,11.98-19.18l.62-.59c5.9-5.22,12.97-9.09,20.66-11.31,7.7-2.22,15.82-2.74,23.76-1.51,17.54,2.14,32.38,9.7,47.97,24.6,12.01,11.93,19.23,27.53,20.39,44.05.77,7.1-.07,14.27-2.46,21.03-2.39,6.76-6.28,12.95-11.38,18.14l-.26.25c-5.41,4.93-11.85,8.7-18.91,11.06Z" fill="url(#whiteGradient)"/>
            </g>
          </svg>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 py-8 sm:py-20">
          <div className="ml-0 sm:ml-8 md:ml-16 lg:ml-24">
            <h1 className="text-gray-900 leading-tight mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium animate-fade-in-up" style={{
              fontFamily: 'Inter',
              letterSpacing: '-2px'
            }}>
              Votre site vitrine{' '}
              <span className="animate-gradient-text" style={{
                background: 'linear-gradient(50deg, #9333ea -0.73%, #ec4899 365.51%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700'
              }}>
                professionnel
              </span>
              <br />
              en 24h dès{' '}
              <span className="animate-gradient-text" style={{
                background: 'linear-gradient(50deg, #9333ea -0.73%, #ec4899 365.51%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700'
              }}>
                100€
              </span>{' '}
              par mois
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed font-inter max-w-xl lg:max-w-2xl animate-fade-in-up animation-delay-200">
              Créez votre présence digitale avec notre solution tout-en-un. 
              Design moderne, développement rapide, hébergement et maintenance inclus.
            </p>

            <button 
              onClick={openContactModal}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-inter animate-fade-in-up animation-delay-400 hover:animate-pulse-gentle"
            >
              Obtenir mon{' '}
              <span className="text-yellow-200">
                devis gratuit
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Votre succès digital section */}
      <section id="services" className="py-16 md:py-24 bg-white/50 backdrop-blur-sm overflow-hidden">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Left Image - Desktop only */}
            <div className="hidden lg:block lg:col-span-3 animate-slide-in-left">
              <img 
                src="https://i.ibb.co/Zp6Xgvbn/637c87196877b65904186aec-hedy-home-01-p-800-webp.png" 
                alt="Team collaboration" 
                className="w-full h-auto block hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg"
              />
            </div>

            {/* Center Content */}
            <div className="lg:col-span-6 text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-text-reveal">
                Votre succès digital{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-text">
                  commence ici
                </span>
                .
              </h2>
              
              <div className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                <p className="mb-4">
                  Vous connaissez votre métier mieux que personne.{' '}
                  <span className="font-semibold text-gray-900">
                    Cette expertise est précieuse pour créer votre site vitrine
                  </span>{' '}
                  : parce qu'un site efficace, ça se construit ensemble.
                </p>
                
                <p className="mb-4">
                  C'est pourquoi chaque projet démarre par un échange approfondi et que nous avons développé une méthodologie de{' '}
                  <span className="font-semibold text-gray-900">co-création</span>{' '}
                  éprouvée.
                </p>
                
                <p>
                  Vous impliquer à chaque étape, c'est vous garantir un site qui vous ressemble vraiment.
                </p>
              </div>

              <button 
                onClick={openContactModal}
                className="inline-flex items-center justify-center text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-400 hover:animate-bounce-gentle bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                style={{
                  width: '252px',
                  height: '60px',
                  padding: '17px 55.597px 18px 55.797px'
                }}
              >
                Démarrer mon projet
              </button>
            </div>

            {/* Right Image - Desktop only */}
            <div className="hidden lg:block lg:col-span-3 animate-slide-in-right">
              <img 
                src="https://i.ibb.co/C3CgTmCd/637c87196877b65904186aec-hedy-home-01-p-1080-webp.png" 
                alt="Digital collaboration" 
                className="w-full h-auto block hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ils nous ont fait confiance section */}
      <section className="py-16 md:py-20 animate-fade-in-up bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto sm:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 animate-text-reveal">
              Ils nous ont
              <br />
              fait confiance
            </h2>
          </div>

          {/* Desktop Logo Grid */}
          <div className="hidden md:grid grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
            {/* Row 1 */}
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-100 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img1} alt="Logo 1" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-200 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img2} alt="Logo 2" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-300 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img3} alt="Logo 3" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-400 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img4} alt="Logo 4" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-500 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img5} alt="Logo 5" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>

            {/* Row 2 */}
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-600 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img6} alt="Logo 6" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-700 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img7} alt="Logo 7" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-800 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img8} alt="Logo 8" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-900 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img9} alt="Logo 9" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-1000 hover:scale-110 transition-transform duration-300 shadow-md">
              <img src={img10} alt="Logo 10" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
          </div>

          {/* Mobile Sliding Logos */}
          <div className="md:hidden overflow-hidden w-full">
            <div className="flex animate-scroll space-x-6 w-max">
              {/* First set of logos */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img1} alt="Logo 1" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img2} alt="Logo 2" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img3} alt="Logo 3" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img4} alt="Logo 4" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img5} alt="Logo 5" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img6} alt="Logo 6" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img7} alt="Logo 7" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img8} alt="Logo 8" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img9} alt="Logo 9" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img10} alt="Logo 10" className="object-contain w-20 h-20" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img1} alt="Logo 1" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img2} alt="Logo 2" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img3} alt="Logo 3" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img4} alt="Logo 4" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img5} alt="Logo 5" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img6} alt="Logo 6" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img7} alt="Logo 7" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img8} alt="Logo 8" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img9} alt="Logo 9" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-md">
                  <img src={img10} alt="Logo 10" className="object-contain w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 md:py-20 animate-fade-in-up bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-text-reveal">
              Apprécié par des centaines de{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-text">
                clients
              </span>
            </h2>
          </div>

          {/* Desktop testimonials grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-100 hover:scale-105">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 animate-star-twinkle" style={{ animationDelay: `${i * 0.1}s` }}>
                    <g clipPath="url(#clip0_2_216)">
                      <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_216">
                        <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                      </clipPath>
                    </defs>
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed text-base">
                Site vitrine parfait pour notre restaurant. Design moderne et professionnel qui reflète parfaitement notre image de marque. Nos clients trouvent facilement nos informations.
              </p>
              <p className="font-semibold text-gray-900 text-sm">Marie Dubois - Restaurant Le Gourmet</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-200 hover:scale-105">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 animate-star-twinkle" style={{ animationDelay: `${i * 0.1}s` }}>
                    <g clipPath="url(#clip0_2_216)">
                      <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_216">
                        <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                      </clipPath>
                    </defs>
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed text-base">
                Excellent service ! Notre site vitrine a été livré en 24h comme promis. L'équipe est très professionnelle et à l'écoute. Nos nouveaux clients nous trouvent facilement maintenant.
              </p>
              <p className="font-semibold text-gray-900 text-sm">Pierre Martin - Cabinet d'Avocat</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-300 hover:scale-105">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 animate-star-twinkle" style={{ animationDelay: `${i * 0.1}s` }}>
                    <g clipPath="url(#clip0_2_216)">
                      <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_216">
                        <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                      </clipPath>
                    </defs>
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed text-base">
                Rapport qualité-prix imbattable ! Pour 100€/mois, nous avons un site vitrine complet avec maintenance incluse. Je recommande vivement cette solution !
              </p>
              <p className="font-semibold text-gray-900 text-sm">Sophie Laurent - Salon de Coiffure</p>
            </div>
          </div>

          {/* Mobile testimonials slider */}
          <div className="md:hidden overflow-hidden w-full">
            <div className="flex animate-scroll space-x-6 w-max">
              {/* First set */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-200 hover:scale-105 transition-transform duration-300 shadow-md">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 animate-star-twinkle" style={{ animationDelay: `${i * 0.1}s` }}>
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Site vitrine parfait pour notre restaurant. Design moderne et professionnel qui reflète parfaitement notre image de marque.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Marie Dubois</p>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-200 hover:scale-105 transition-transform duration-300 shadow-md">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 animate-star-twinkle" style={{ animationDelay: `${i * 0.1}s` }}>
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Excellent service ! Notre site vitrine a été livré en 24h comme promis. L'équipe est très professionnelle et à l'écoute.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Pierre Martin</p>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-200 hover:scale-105 transition-transform duration-300 shadow-md">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 animate-star-twinkle" style={{ animationDelay: `${i * 0.1}s` }}>
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Rapport qualité-prix imbattable ! Pour 100€/mois, nous avons un site vitrine complet avec maintenance incluse.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Sophie Laurent</p>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-200 hover:scale-105 transition-transform duration-300 shadow-md">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 animate-star-twinkle" style={{ animationDelay: `${i * 0.1}s` }}>
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Site vitrine parfait pour notre restaurant. Design moderne et professionnel qui reflète parfaitement notre image de marque.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Marie Dubois</p>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-200 hover:scale-105 transition-transform duration-300 shadow-md">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 animate-star-twinkle" style={{ animationDelay: `${i * 0.1}s` }}>
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Excellent service ! Notre site vitrine a été livré en 24h comme promis. L'équipe est très professionnelle et à l'écoute.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Pierre Martin</p>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-200 hover:scale-105 transition-transform duration-300 shadow-md">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 animate-star-twinkle" style={{ animationDelay: `${i * 0.1}s` }}>
                        <g clipPath="url(#clip0_2_216)">
                          <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="#FFC247"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_216">
                            <rect width="24" height="24" fill="white" transform="translate(0.59375 0.897949)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 leading-relaxed text-sm">
                    Rapport qualité-prix imbattable ! Pour 100€/mois, nous avons un site vitrine complet avec maintenance incluse.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">Sophie Laurent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;