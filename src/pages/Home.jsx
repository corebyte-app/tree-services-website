import React from 'react';
import { Link } from 'react-router-dom';
import { imageConfig } from '../config/imageConfig';
import { businessConfig } from '../config/businessConfig';

const Home = () => {
  const services = [
    {
      title: 'Tree Removal',
      description: 'Safe and efficient removal of unwanted or dangerous trees',
      image: imageConfig.services.treeRemoval.url,
      alt: imageConfig.services.treeRemoval.alt,
      link: '/services/tree-removal'
    },
    {
      title: 'Tree Trimming',
      description: 'Professional pruning and trimming to maintain tree health',
      image: imageConfig.services.treeTrimming.url,
      alt: imageConfig.services.treeTrimming.alt,
      link: '/services/tree-trimming'
    },
    {
      title: 'Stump Grinding',
      description: 'Complete stump removal and grinding services',
      image: imageConfig.services.stumpGrinding.url,
      alt: imageConfig.services.stumpGrinding.alt,
      link: '/services/stump-grinding'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tree-green-700 to-tree-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Tree Services You Can Trust
              </h1>
              <p className="text-xl mb-8 text-tree-green-100">
                {businessConfig.company.tagline}.
                {businessConfig.company.description}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="bg-white text-tree-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-tree-green-50 transition-colors text-center"
                >
                  Get Free Quote
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tree-green-700 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <img
                src={imageConfig.hero.main}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive tree care services to keep your property safe and beautiful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-tree-green-600 font-semibold hover:text-tree-green-700 transition-colors"
                  >
                    Learn More →
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
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose {businessConfig.company.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Fully licensed and insured for your peace of mind and protection
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Years of experience in professional tree care and safety practices
              </p>
            </div>

            <div className="text-center">
              <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Free Estimates
              </h3>
              <p className="text-gray-600">
                No-obligation consultations and competitive pricing for all services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tree-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-tree-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're here to help with all your tree care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-tree-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-tree-green-50 transition-colors"
            >
              Request Quote
            </Link>
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tree-green-700 transition-colors"
            >
              Call {businessConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;