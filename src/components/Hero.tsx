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
      <section id="accueil\" className="relative min-h-screen flex items-center justify-center overflow-hidden\" style={{ backgroundColor: '#0B0B0F' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-float animation-delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Créons votre
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                site vitrine
              </span>
              <br />
              ensemble
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Nous transformons vos idées en sites web exceptionnels qui captivent vos visiteurs et développent votre activité
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
              <button 
                onClick={openContactModal}
                className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-pink-700"
              >
                Démarrer mon projet
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="py-20 md:py-32" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nos
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour votre présence digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Site Vitrine</h3>
              <p className="text-gray-600 mb-6">
                Un site élégant et professionnel qui présente votre activité et convertit vos visiteurs en clients.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Design responsive</li>
                <li>• Optimisation SEO</li>
                <li>• Formulaire de contact</li>
                <li>• Hébergement inclus</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design UX/UI</h3>
              <p className="text-gray-600 mb-6">
                Une expérience utilisateur optimale avec un design moderne qui reflète votre identité de marque.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Interface intuitive</li>
                <li>• Identité visuelle</li>
                <li>• Prototypage</li>
                <li>• Tests utilisateurs</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance</h3>
              <p className="text-gray-600 mb-6">
                Des sites ultra-rapides et optimisés pour offrir la meilleure expérience à vos visiteurs.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Temps de chargement optimisé</li>
                <li>• Optimisation mobile</li>
                <li>• Sécurité renforcée</li>
                <li>• Maintenance continue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio section */}
      <section id="portfolio" className="py-20 md:py-32" style={{ backgroundColor: '#0B0B0F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> réalisations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets qui ont marqué nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/20 to-pink-600/20 p-1 animate-fade-in-up animation-delay-100">
              <div className="bg-gray-900 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl mb-6"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Restaurant Le Gourmet</h3>
                <p className="text-gray-300 mb-6">
                  Site vitrine élégant pour un restaurant gastronomique avec système de réservation intégré.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Design</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Réservation</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">SEO</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1 animate-fade-in-up animation-delay-200">
              <div className="bg-gray-900 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Cabinet Avocat Martin</h3>
                <p className="text-gray-300 mb-6">
                  Site professionnel pour un cabinet d'avocat avec présentation des services et prise de rendez-vous.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Professionnel</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Contact</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Responsive</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-600/20 p-1 animate-fade-in-up animation-delay-300">
              <div className="bg-gray-900 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl mb-6"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Salon Beauté Sophie</h3>
                <p className="text-gray-300 mb-6">
                  Site vitrine moderne pour un salon de beauté avec galerie photos et système de réservation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Beauté</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Galerie</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Booking</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-400">
            <button 
              onClick={openContactModal}
              className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Voir plus de projets
            </button>
          </div>
        </div>
      </section>

      {/* Clients section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ils nous font
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> confiance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 200 clients satisfaits nous font confiance pour leur présence digitale
            </p>
          </div>

          {/* Desktop Logo Grid */}
          <div className="hidden md:grid grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
            {/* Row 1 */}
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-100 hover:scale-110 transition-transform duration-300">
              <img src={img1} alt="Logo 1" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-200 hover:scale-110 transition-transform duration-300">
              <img src={img2} alt="Logo 2" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-300 hover:scale-110 transition-transform duration-300">
              <img src={img3} alt="Logo 3" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-400 hover:scale-110 transition-transform duration-300">
              <img src={img4} alt="Logo 4" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-500 hover:scale-110 transition-transform duration-300">
              <img src={img5} alt="Logo 5" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>

            {/* Row 2 */}
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-600 hover:scale-110 transition-transform duration-300">
              <img src={img6} alt="Logo 6" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-700 hover:scale-110 transition-transform duration-300">
              <img src={img7} alt="Logo 7" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-800 hover:scale-110 transition-transform duration-300">
              <img src={img8} alt="Logo 8" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-900 hover:scale-110 transition-transform duration-300">
              <img src={img9} alt="Logo 9" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center animate-fade-in-up animation-delay-1000 hover:scale-110 transition-transform duration-300">
              <img src={img10} alt="Logo 10" className="object-contain w-20 h-20 lg:w-24 lg:h-24" />
            </div>
          </div>

          {/* Mobile Sliding Logos */}
          <div className="md:hidden overflow-hidden w-full">
            <div className="flex animate-scroll space-x-6 w-max">
              {/* First set of logos */}
              <div className="flex space-x-6 flex-shrink-0">
                {images.map((img, index) => (
                  <div key={index} className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                    <img src={img} alt={`Logo ${index + 1}`} className="object-contain w-16 h-16" />
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-6 flex-shrink-0">
                {images.map((img, index) => (
                  <div key={`duplicate-${index}`} className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                    <img src={img} alt={`Logo ${index + 1}`} className="object-contain w-16 h-16" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#0B0B0F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ce que disent nos
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> clients</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des témoignages authentiques de clients satisfaits
            </p>
          </div>

          {/* Desktop testimonials grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 animate-fade-in-up animation-delay-100">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-orange-400">
                    <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="currentColor"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-base">
                "Site vitrine parfait pour notre restaurant. Design moderne et professionnel qui reflète parfaitement notre image de marque. Nos clients trouvent facilement nos informations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <p className="font-semibold text-white">Marie Dubois</p>
                  <p className="text-gray-400 text-sm">Restaurant Le Gourmet</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 animate-fade-in-up animation-delay-200">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-orange-400">
                    <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="currentColor"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-base">
                "Excellent service ! Notre site vitrine a été livré en 24h comme promis. L'équipe est très professionnelle et à l'écoute. Nos nouveaux clients nous trouvent facilement maintenant."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  P
                </div>
                <div>
                  <p className="font-semibold text-white">Pierre Martin</p>
                  <p className="text-gray-400 text-sm">Cabinet d'Avocat</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 animate-fade-in-up animation-delay-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-orange-400">
                    <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="currentColor"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-base">
                "Rapport qualité-prix imbattable ! Pour 100€/mois, nous avons un site vitrine complet avec maintenance incluse. Je recommande vivement cette solution !"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="font-semibold text-white">Sophie Laurent</p>
                  <p className="text-gray-400 text-sm">Salon de Coiffure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile testimonials slider */}
          <div className="md:hidden overflow-hidden w-full">
            <div className="flex animate-scroll space-x-6 w-max">
              {/* First set */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="bg-gray-900 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-800">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-orange-400">
                        <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="currentColor"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    "Site vitrine parfait pour notre restaurant. Design moderne et professionnel qui reflète parfaitement notre image de marque."
                  </p>
                  <p className="font-semibold text-white text-sm">Marie Dubois</p>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-800">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-orange-400">
                        <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="currentColor"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    "Excellent service ! Notre site vitrine a été livré en 24h comme promis. L'équipe est très professionnelle et à l'écoute."
                  </p>
                  <p className="font-semibold text-white text-sm">Pierre Martin</p>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-800">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-orange-400">
                        <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="currentColor"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    "Rapport qualité-prix imbattable ! Pour 100€/mois, nous avons un site vitrine complet avec maintenance incluse."
                  </p>
                  <p className="font-semibold text-white text-sm">Sophie Laurent</p>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-6 flex-shrink-0">
                <div className="bg-gray-900 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-800">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-orange-400">
                        <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="currentColor"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    "Site vitrine parfait pour notre restaurant. Design moderne et professionnel qui reflète parfaitement notre image de marque."
                  </p>
                  <p className="font-semibold text-white text-sm">Marie Dubois</p>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-800">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-orange-400">
                        <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="currentColor"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    "Excellent service ! Notre site vitrine a été livré en 24h comme promis. L'équipe est très professionnelle et à l'écoute."
                  </p>
                  <p className="font-semibold text-white text-sm">Pierre Martin</p>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 w-80 flex-shrink-0 border border-gray-800">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-orange-400">
                        <path d="M10.8438 16.5579L17.1737 20.3779L15.4937 13.1679L21.0837 8.32795L13.7137 7.68795L10.8438 0.897949L7.96375 7.69795L0.59375 8.32795L6.18375 13.1679L4.50375 20.3779L10.8438 16.5579Z" fill="currentColor"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    "Rapport qualité-prix imbattable ! Pour 100€/mois, nous avons un site vitrine complet avec maintenance incluse."
                  </p>
                  <p className="font-semibold text-white text-sm">Sophie Laurent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Prêt à créer votre
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> site vitrine</span> ?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Rejoignez plus de 200 clients satisfaits et donnez vie à votre projet dès aujourd'hui
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={openContactModal}
                className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Démarrer mon projet
              </button>
              
              <div className="text-center">
                <p className="text-gray-500 text-sm">À partir de</p>
                <p className="text-3xl font-bold text-gray-900">100€<span className="text-lg text-gray-500">/mois</span></p>
                <p className="text-gray-500 text-sm">Tout inclus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;