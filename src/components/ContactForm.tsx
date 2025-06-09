import React, { useState } from 'react';
import { Send, User, Mail, Phone, Globe, Calendar, DollarSign, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  features: string[];
  hasExistingSite: string;
  currentSite: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: [],
    hasExistingSite: '',
    currentSite: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const projectTypes = [
    'Site vitrine',
    'E-commerce',
    'Application web',
    'Refonte de site existant',
    'Landing page',
    'Blog/Magazine',
    'Portfolio',
    'Autre'
  ];

  const budgetRanges = [
    'Moins de 1 000€',
    '1 000€ - 3 000€',
    '3 000€ - 5 000€',
    '5 000€ - 10 000€',
    '10 000€ - 20 000€',
    'Plus de 20 000€'
  ];

  const timelineOptions = [
    'Urgent (moins d\'1 mois)',
    '1-2 mois',
    '2-3 mois',
    '3-6 mois',
    'Plus de 6 mois',
    'Pas de contrainte'
  ];

  const featureOptions = [
    'Design responsive',
    'SEO optimisé',
    'Système de paiement',
    'Espace membre',
    'Blog intégré',
    'Multilingue',
    'Réservation en ligne',
    'Chat en direct',
    'Analytics avancés',
    'API tierces'
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
        title: "🚀 Nouvelle demande de projet",
        color: 0xD95DB0,
        fields: [
          {
            name: "👤 Informations client",
            value: `**Nom:** ${formData.name}\n**Email:** ${formData.email}\n**Téléphone:** ${formData.phone || 'Non renseigné'}\n**Entreprise:** ${formData.company || 'Non renseigné'}`,
            inline: false
          },
          {
            name: "🎯 Détails du projet",
            value: `**Type:** ${formData.projectType}\n**Budget:** ${formData.budget}\n**Délai:** ${formData.timeline}`,
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
          text: "Hedy Agency - Nouveau lead"
        }
      ];

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
          budget: '',
          timeline: '',
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

  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Parlons de votre{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              projet
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Décrivez-nous votre vision et nous vous accompagnerons dans sa réalisation. 
            Plus vous nous en direz, mieux nous pourrons vous conseiller.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800">
                Merci ! Votre demande a été envoyée avec succès. Nous vous recontacterons dans les plus brefs délais.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-800">
                Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informations personnelles */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-pink-500" />
                Vos informations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>
            </div>

            {/* Détails du projet */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-pink-500" />
                Votre projet
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de projet *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget estimé *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Délai souhaité *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez</option>
                    {timelineOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  placeholder="Décrivez votre projet, vos objectifs, votre cible, vos besoins spécifiques..."
                />
              </div>

              {/* Fonctionnalités */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Fonctionnalités souhaitées
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {featureOptions.map(feature => (
                    <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                        className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Site existant */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Avez-vous déjà un site web ?
                </label>
                <div className="flex space-x-6 mb-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasExistingSite"
                      value="oui"
                      checked={formData.hasExistingSite === 'oui'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                    />
                    <span className="text-sm text-gray-700">Oui</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasExistingSite"
                      value="non"
                      checked={formData.hasExistingSite === 'non'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="https://votre-site-actuel.com"
                  />
                )}
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{
                  background: isSubmitting ? '#9CA3AF' : 'linear-gradient(90deg, #D95DB0 0%, #3344DC 100%)'
                }}
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
              <p className="text-sm text-gray-500 mt-4">
                Nous nous engageons à vous répondre sous 24h
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;