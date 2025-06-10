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
      <section id="accueil\" className="relative z-10 w-full px-6 sm:px-6 py-28 sm:py-52\" style={{ 
        background: 'linear-gradient(135deg, #FFFFD6 0%, #FFFFFF 100%)'
      }}>
        {/* Subtle pattern overlay inspired by the image */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}>
          </div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 py-8 sm:py-52">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="leading-tight mb-8 animate-fade-in-up">
              <div style={{
                color: '#0A090F',
                textAlign: 'center',
                fontFamily: 'Prompt, sans-serif',
                fontSize: 'clamp(60px, 8vw, 100px)',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '1.1',
                letterSpacing: '-2px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
              }}>
                Votre site clé en mains en 24h
              </div>
              
              <div style={{
                color: '#0A090F',
                fontFamily: 'Prompt, sans-serif',
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.1',
                letterSpacing: '-2px',
                marginTop: '0.5rem',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
              }}>
                À partir de 100€ par mois
              </div>
            </h1>

            <button 
              onClick={openContactModal}
              className="animate-fade-in-up animation-delay-400 hover:scale-105 transition-all duration-300 hover:shadow-xl"
              style={{
                display: 'flex',
                width: '565px',
                height: '112px',
                padding: '16px 68.15px 16px 69.85px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                borderRadius: '15px',
                border: '8px solid #404040',
                background: 'linear-gradient(180deg, #1F1F1F 0%, #000 100%)',
                color: 'white',
                fontSize: '24px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
                cursor: 'pointer',
                maxWidth: '100%',
                margin: '0 auto'
              }}
            >
              Obtenir un devis
            </button>
          </div>
        </div>
      </section>

      {/* Votre succès digital section */}
      <section id="services" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Center Content - Now spans full width */}
            <div className="lg:col-span-12 text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-text-reveal">
                Votre succès digital{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
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
                className="inline-flex items-center justify-center text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-400 hover:animate-bounce-gentle"
                style={{
                  width: '252px',
                  height: '60px',
                  padding: '17px 55.597px 18px 55.797px',
                  background: 'linear-gradient(90deg, #D95DB0 0%, #3344DC 100%)'
                }}
              >
                Démarrer mon projet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ils nous ont fait confiance section */}
      <section className="py-16 md:py-20 animate-fade-in-up" style={{ backgroundColor: '#F4F4F4' }}>
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
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-100 hover:scale-110 transition-transform duration-300">
              <img src={img1} alt="Logo 1" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-200 hover:scale-110 transition-transform duration-300">
              <img src={img2} alt="Logo 2" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-300 hover:scale-110 transition-transform duration-300">
              <img src={img3} alt="Logo 3" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-400 hover:scale-110 transition-transform duration-300">
              <img src={img4} alt="Logo 4" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-500 hover:scale-110 transition-transform duration-300">
              <img src={img5} alt="Logo 5" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>

            {/* Row 2 */}
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-600 hover:scale-110 transition-transform duration-300">
              <img src={img6} alt="Logo 6" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-700 hover:scale-110 transition-transform duration-300">
              <img src={img7} alt="Logo 7" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-800 hover:scale-110 transition-transform duration-300">
              <img src={img8} alt="Logo 8" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-900 hover:scale-110 transition-transform duration-300">
              <img src={img9} alt="Logo 9" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg flex items-center justify-center animate-fade-in-up animation-delay-1000 hover:scale-110 transition-transform duration-300">
              <img src={img10} alt="Logo 10" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
          </div>

          {/* Mobile Sliding Logos */}
          <div className="md:hidden overflow-hidden w-full">
            <div className="flex animate-scroll space-x-6 w-max">
              {/* First set of logos */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img1} alt="Logo 1" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img2} alt="Logo 2" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img3} alt="Logo 3" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img4} alt="Logo 4" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img5} alt="Logo 5" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img6} alt="Logo 6" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img7} alt="Logo 7" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img8} alt="Logo 8" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img9} alt="Logo 9" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img10} alt="Logo 10" className="object-contain w-20 h-20" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img1} alt="Logo 1" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img2} alt="Logo 2" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img3} alt="Logo 3" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img4} alt="Logo 4" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img5} alt="Logo 5" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img6} alt="Logo 6" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img7} alt="Logo 7" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img8} alt="Logo 8" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img9} alt="Logo 9" className="object-contain w-20 h-20" />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src={img10} alt="Logo 10" className="object-contain w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 md:py-20 animate-fade-in-up" style={{ backgroundColor: '#0A090F' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-text-reveal">
              Apprécié par des centaines de{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                clients
              </span>
            </h2>
          </div>

          {/* Desktop testimonials grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-100 hover:scale-105">
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
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-200 hover:scale-105">
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
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-300 hover:scale-105">
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
                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100 hover:scale-105 transition-transform duration-300">
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

                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100 hover:scale-105 transition-transform duration-300">
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

                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100 hover:scale-105 transition-transform duration-300">
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
                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100 hover:scale-105 transition-transform duration-300">
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

                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100 hover:scale-105 transition-transform duration-300">
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

                <div className="bg-white rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-100 hover:scale-105 transition-transform duration-300">
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