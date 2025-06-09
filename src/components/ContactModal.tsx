import React, { useState } from 'react';
import { Send, User, Mail, Phone, Globe, MessageSquare, CheckCircle, AlertCircle, X, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  description: string;
  features: string[];
  hasExistingSite: string;
  currentSite: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    description: '',
    features: [],
    hasExistingSite: '',
    currentSite: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const projectTypes = [
    'Site vitrine classique',
    'Site vitrine premium',
    'Landing page',
    'Site portfolio',
    'Site institutionnel',
    'Refonte de site vitrine',
    'Site événementiel',
    'Autre'
  ];

  const featureOptions = [
    'Design responsive',
    'SEO optimisé',
    'Formulaire de contact',
    'Galerie photos',
    'Blog intégré',
    'Multilingue',
    'Google Maps',
    'Réseaux sociaux',
    'Analytics',
    'Chat en direct'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const webhookUrl = 'https://discord.com/api/webhooks/1381351238444257371/eHCrUI0NJ_4lhkXZ1eaiP7-X-4VcxfK_VH8nWzLQ9aLcbU-nYice94Oo2rC_0XeAI532';
      
      const embed = {
        title: "🚀 Nouvelle demande de site vitrine - À partir de 100€/mois",
        color: 0xF97316,
        fields: [
          {
            name: "👤 Informations client",
            value: `**Nom:** ${formData.name}\n**Email:** ${formData.email}\n**Téléphone:** ${formData.phone || 'Non renseigné'}\n**Entreprise:** ${formData.company || 'Non renseigné'}`,
            inline: false
          },
          {
            name: "🎯 Détails du projet",
            value: `**Type:** ${formData.projectType}`,
            inline: false
          },
          {
            name: "📝 Description",
            value: formData.description || 'Aucune description fournie',
            inline: false
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Hedy Agency - Rappel client dans les 24h"
        }
      };

      if (formData.features.length > 0) {
        embed.fields.push({
          name: "⚡ Fonctionnalités souhaitées",
          value: formData.features.join(', '),
          inline: false
        });
      }

      if (formData.hasExistingSite === 'oui' && formData.currentSite) {
        embed.fields.push({
          name: "🌐 Site existant",
          value: formData.currentSite,
          inline: false
        });
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed]
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          description: '',
          features: [],
          hasExistingSite: '',
          currentSite: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fade-in">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-75 animate-fade-in"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl sm:my-16 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 animate-slide-down">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Votre site vitrine en{' '}
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent animate-gradient-text">
                  24h
                </span>
              </h2>
              <p className="text-gray-600 mt-2">
                À partir de 100€/mois - Design + Développement + Hébergement + Maintenance
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110 transform hover:rotate-90"
            >
              <X size={24} />
            </button>
          </div>

          {/* Guarantee Banner */}
          <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-lg animate-fade-in-up animation-delay-200">
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 animate-pulse" />
              <div>
                <h3 className="font-semibold text-gray-900">Garantie de rappel sous 24h</h3>
                <p className="text-sm text-gray-600">
                  Notre équipe vous contactera dans les 24 heures pour discuter de votre site vitrine et vous proposer une solution personnalisée.
                </p>
              </div>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 animate-bounce-in">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-green-800 font-medium">
                  Merci ! Votre demande a été envoyée avec succès.
                </p>
                <p className="text-green-700 text-sm">
                  Nous vous recontacterons dans les 24 heures pour discuter de votre site vitrine.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3 animate-shake">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-800">
                Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 max-h-96 overflow-y-auto pr-2">
            {/* Informations personnelles */}
            <div className="animate-fade-in-up animation-delay-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-orange-500" />
                Vos informations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300"
                    placeholder="Votre nom et prénom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>
            </div>

            {/* Détails du projet */}
            <div className="animate-fade-in-up animation-delay-400">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-orange-500" />
                Votre site vitrine
              </h3>
              
              <div className="mb-4">
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de site vitrine *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300"
                >
                  <option value="">Sélectionnez</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description de votre activité *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300"
                  placeholder="Décrivez votre activité, vos services, votre cible..."
                />
              </div>

              {/* Fonctionnalités */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Fonctionnalités souhaitées pour votre site vitrine
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {featureOptions.map(feature => (
                    <label key={feature} className="flex items-center space-x-2 cursor-pointer text-sm hover:scale-105 transition-transform duration-200">
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                        className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 transition-all duration-200"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Site existant */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Avez-vous déjà un site web ?
                </label>
                <div className="flex space-x-6 mb-3">
                  <label className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-200">
                    <input
                      type="radio"
                      name="hasExistingSite"
                      value="oui"
                      checked={formData.hasExistingSite === 'oui'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-700">Oui</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-200">
                    <input
                      type="radio"
                      name="hasExistingSite"
                      value="non"
                      checked={formData.hasExistingSite === 'non'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-700">Non</span>
                  </label>
                </div>
                {formData.hasExistingSite === 'oui' && (
                  <input
                    type="url"
                    name="currentSite"
                    value={formData.currentSite}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300 animate-slide-down"
                    placeholder="https://votre-site-actuel.com"
                  />
                )}
              </div>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in-up animation-delay-500">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-500">
                <p className="font-medium text-gray-700">Site vitrine à partir de 100€/mois</p>
                <p>Design + Développement + Hébergement + Maintenance inclus</p>
              </div>
              
              <button
                type="submit"
                form="contact-form"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;