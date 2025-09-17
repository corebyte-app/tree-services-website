import React from "react";
import { Link } from "react-router-dom";
import { imageConfig } from "../config/imageConfig";
import { businessConfig } from "../config/businessConfig";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.treeRemoval.title'),
      description: t('services.treeRemoval.description'),
      image: imageConfig.services.treeRemoval.url,
      alt: imageConfig.services.treeRemoval.alt,
      link: "/services/tree-removal",
    },
    {
      title: t('services.treeTrimming.title'),
      description: t('services.treeTrimming.description'),
      image: imageConfig.services.treeTrimming.url,
      alt: imageConfig.services.treeTrimming.alt,
      link: "/services/tree-trimming",
    },
    {
      title: t('services.stumpGrinding.title'),
      description: t('services.stumpGrinding.description'),
      image: imageConfig.services.stumpGrinding.url,
      alt: imageConfig.services.stumpGrinding.alt,
      link: "/services/stump-grinding",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tree-green-700 to-tree-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('home.heroTitle')}
              </h1>
              <p className="text-xl mb-8 text-tree-green-100">
                {t('home.heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="bg-white text-tree-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-tree-green-50 transition-colors text-center"
                >
                  {t('home.getQuote')}
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tree-green-700 transition-colors text-center"
                >
                  {t('home.contactUs')}
                </Link>
              </div>
            </div>
            <div>
              <img
                src={imageConfig.hero.main}
                // src="https://unsplash.com/photos/the-lumberjack-working-in-a-forest-harvest-of-timber-firewood-as-a-renewable-energy-source-lumber-industry-theme-people-at-work-LNSrSyNT2E4"
                alt={imageConfig.hero.alt}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.servicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-tree-green-600 font-semibold hover:text-tree-green-700 transition-colors"
                  >
                    {t('services.learnMore')} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-tree-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-tree-green-700 transition-colors"
            >
              {t('home.viewAllServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('home.whyChooseTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('home.licensedTitle')}
              </h3>
              <p className="text-gray-600">
                {t('home.licensedDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('home.experiencedTitle')}
              </h3>
              <p className="text-gray-600">
                {t('home.experiencedDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('home.freeEstimatesTitle')}
              </h3>
              <p className="text-gray-600">
                {t('home.freeEstimatesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tree-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl text-tree-green-100 mb-8 max-w-2xl mx-auto">
            {t('home.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-tree-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-tree-green-50 transition-colors"
            >
              {t('home.requestQuote')}
            </Link>
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tree-green-700 transition-colors"
            >
              {t('home.callNow')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
