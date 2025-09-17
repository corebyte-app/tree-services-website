import React from 'react';
import { businessConfig } from '../config/businessConfig';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const Contact = () => {
  const { t } = useLanguage();
  useSEO('contact');
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-tree-green-700 text-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-tree-green-100 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <div className="py-8 lg:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.getInTouch')}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-lg mr-2">📞</span>
                    <h3 className="font-semibold text-gray-800">{t('contact.phone')}</h3>
                  </div>
                  <a href={`tel:${businessConfig.contact.phone}`} className="text-tree-green-600 font-semibold hover:text-tree-green-700">
                    {businessConfig.contact.phone}
                  </a>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-lg mr-2">✉️</span>
                    <h3 className="font-semibold text-gray-800">{t('contact.email')}</h3>
                  </div>
                  <a href={`mailto:${businessConfig.contact.email}`} className="text-tree-green-600 font-semibold hover:text-tree-green-700">
                    {businessConfig.contact.email}
                  </a>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-lg mr-2">🕒</span>
                    <h3 className="font-semibold text-gray-800">{t('contact.businessHours')}</h3>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>{businessConfig.hours.weekdays}</p>
                    <p>{businessConfig.hours.saturday}</p>
                    <p>Sunday: {businessConfig.hours.sunday}</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm md:col-span-2">
                  <div className="flex items-center mb-2">
                    <span className="text-lg mr-2">📍</span>
                    <h3 className="font-semibold text-gray-800">{t('contact.serviceArea')}</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {t('contact.serviceAreaDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.whyChooseTitle')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-tree-green-600 mr-2 text-lg">✓</span>
                    <span className="text-sm text-gray-700">{t('contact.licensed')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-tree-green-600 mr-2 text-lg">✓</span>
                    <span className="text-sm text-gray-700">{t('contact.freeConsult')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-tree-green-600 mr-2 text-lg">✓</span>
                    <span className="text-sm text-gray-700">{t('contact.certified')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-tree-green-600 mr-2 text-lg">✓</span>
                    <span className="text-sm text-gray-700">{t('contact.equipment')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-tree-green-600 mr-2 text-lg">✓</span>
                    <span className="text-sm text-gray-700">{t('contact.cleanup')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-tree-green-600 mr-2 text-lg">✓</span>
                    <span className="text-sm text-gray-700">{t('contact.professional')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-tree-green-600 text-white py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.ctaTitle')}
          </h2>
          <p className="text-xl text-tree-green-100 mb-8 max-w-2xl mx-auto">
            {t('contact.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="bg-white text-tree-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-tree-green-50 transition-colors"
            >
              {t('contact.callPhone')}
            </a>
            <a
              href={`mailto:${businessConfig.contact.email}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tree-green-700 transition-colors"
            >
              {t('contact.emailUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;