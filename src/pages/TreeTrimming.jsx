import React from 'react';
import { Link } from 'react-router-dom';
import { imageConfig } from '../config/imageConfig';
import { businessConfig } from '../config/businessConfig';
import { useSEO } from '../hooks/useSEO';

const TreeTrimming = () => {
  useSEO('treeTrimming');
  const benefits = [
    {
      title: 'Tree Health',
      description: 'Remove dead, diseased, or damaged branches to improve overall tree health'
    },
    {
      title: 'Safety',
      description: 'Eliminate hazardous branches that could fall and cause property damage'
    },
    {
      title: 'Appearance',
      description: 'Enhance the natural shape and beauty of your trees'
    },
    {
      title: 'Growth',
      description: 'Promote healthy growth and improve air circulation'
    }
  ];

  const services = [
    {
      name: 'Crown Thinning',
      description: 'Selective removal of branches to reduce density and allow more light penetration'
    },
    {
      name: 'Crown Raising',
      description: 'Removing lower branches to provide clearance for buildings, vehicles, or pedestrians'
    },
    {
      name: 'Crown Reduction',
      description: 'Reducing the overall size of the tree while maintaining its natural shape'
    },
    {
      name: 'Deadwood Removal',
      description: 'Removing dead, dying, or diseased branches to improve tree health and safety'
    },
    {
      name: 'Structural Pruning',
      description: 'Correcting structural problems and promoting strong branch development'
    },
    {
      name: 'Maintenance Pruning',
      description: 'Regular pruning to maintain tree health and appearance'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-tree-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Tree Trimming & Pruning
              </h1>
              <p className="text-xl text-tree-green-100 mb-8">
                Expert tree trimming services to maintain tree health, enhance beauty,
                and ensure safety for your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="bg-white text-tree-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-tree-green-50 transition-colors text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tree-green-700 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div>
              <img
                src={imageConfig.treeTrimming.hero.url}
                alt={imageConfig.treeTrimming.hero.alt}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Benefits of Professional Tree Trimming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular tree trimming is essential for maintaining healthy, beautiful, and safe trees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">
                    {index === 0 ? '🌳' : index === 1 ? '🛡️' : index === 2 ? '✨' : '🌱'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Trimming & Pruning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive tree trimming services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  to="/quote"
                  className="text-tree-green-600 font-semibold hover:text-tree-green-700 transition-colors"
                >
                  Get Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Professional Techniques & Timing
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Proper tree trimming requires knowledge of tree biology, growth patterns,
                and the right timing for different species.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">📅</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Proper Timing</h4>
                    <p className="text-gray-600">We trim trees at the optimal time for each species</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">✂️</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Clean Cuts</h4>
                    <p className="text-gray-600">Professional tools ensure clean cuts that heal properly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">🎯</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Selective Pruning</h4>
                    <p className="text-gray-600">Strategic removal of specific branches for optimal results</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">🧹</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Complete Cleanup</h4>
                    <p className="text-gray-600">All debris removed and site left clean</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={imageConfig.treeTrimming.techniques.url}
                alt={imageConfig.treeTrimming.techniques.alt}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When to Trim Section */}
      <section className="bg-tree-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              When Should You Trim Your Trees?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Signs You Need Trimming</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  Dead or dying branches
                </li>
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  Branches touching buildings or power lines
                </li>
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  Overgrown or dense canopy
                </li>
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  Broken or damaged branches
                </li>
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  Poor tree structure
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Best Times to Trim</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  Late winter/early spring (dormant season)
                </li>
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  After storms (emergency trimming)
                </li>
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  Summer for deadwood removal
                </li>
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  Species-specific optimal times
                </li>
                <li className="flex items-center">
                  <span className="text-tree-green-600 mr-2">•</span>
                  Regular maintenance schedule
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tree-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Trim Your Trees?
          </h2>
          <p className="text-xl text-tree-green-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for professional tree trimming and pruning services.
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

export default TreeTrimming;