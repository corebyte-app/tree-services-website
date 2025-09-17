import React from 'react';
import { Link } from 'react-router-dom';
import { imageConfig } from '../config/imageConfig';
import { businessConfig } from '../config/businessConfig';

const Services = () => {
  const services = [
    {
      title: 'Tree Removal',
      description: 'Safe and efficient removal of unwanted, diseased, or dangerous trees using professional equipment and techniques.',
      image: imageConfig.services.treeRemoval.url,
      alt: imageConfig.services.treeRemoval.alt,
      features: ['Emergency tree removal', 'Hazardous tree assessment', 'Complete cleanup', 'Stump removal available'],
      link: '/services/tree-removal'
    },
    {
      title: 'Tree Trimming & Pruning',
      description: 'Professional pruning and trimming services to maintain tree health, improve appearance, and ensure safety.',
      image: imageConfig.services.treeTrimming.url,
      alt: imageConfig.services.treeTrimming.alt,
      features: ['Crown thinning', 'Dead wood removal', 'Shape enhancement', 'Health maintenance'],
      link: '/services/tree-trimming'
    },
    {
      title: 'Stump Grinding',
      description: 'Complete stump removal and grinding services to reclaim your outdoor space and eliminate trip hazards.',
      image: imageConfig.services.stumpGrinding.url,
      alt: imageConfig.services.stumpGrinding.alt,
      features: ['Below-grade grinding', 'Cleanup included', 'Mulch available', 'Root system removal'],
      link: '/services/stump-grinding'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-tree-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Tree Services
          </h1>
          <p className="text-xl text-tree-green-100 max-w-3xl mx-auto">
            Comprehensive tree care solutions for residential and commercial properties.
            Licensed, insured, and committed to excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="text-tree-green-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      to={service.link}
                      className="bg-tree-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-tree-green-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/quote"
                      className="border-2 border-tree-green-600 text-tree-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-tree-green-600 hover:text-white transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, straightforward steps to get your tree service completed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-tree-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-gray-600">Call or fill out our quote form to get started</p>
            </div>

            <div className="text-center">
              <div className="bg-tree-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Assessment</h3>
              <p className="text-gray-600">We visit your property for a free consultation</p>
            </div>

            <div className="text-center">
              <div className="bg-tree-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quote & Schedule</h3>
              <p className="text-gray-600">Receive your quote and schedule the work</p>
            </div>

            <div className="text-center">
              <div className="bg-tree-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Service</h3>
              <p className="text-gray-600">Expert completion with full cleanup</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tree-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Tree Services?
          </h2>
          <p className="text-xl text-tree-green-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for any of our professional tree services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-tree-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-tree-green-50 transition-colors"
            >
              Request Free Quote
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

export default Services;