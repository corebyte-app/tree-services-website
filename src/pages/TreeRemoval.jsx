import React from 'react';
import { Link } from 'react-router-dom';
import { imageConfig } from '../config/imageConfig';
import { businessConfig } from '../config/businessConfig';

const TreeRemoval = () => {
  const reasons = [
    'Diseased or dying trees',
    'Storm-damaged trees',
    'Trees too close to structures',
    'Overgrown or unwanted trees',
    'Construction site clearing',
    'Safety hazards'
  ];

  const process = [
    {
      step: 'Assessment',
      description: 'We evaluate the tree, surrounding area, and potential risks'
    },
    {
      step: 'Planning',
      description: 'Develop a safe removal strategy and equipment plan'
    },
    {
      step: 'Removal',
      description: 'Carefully remove the tree using professional techniques'
    },
    {
      step: 'Cleanup',
      description: 'Complete site cleanup and debris removal'
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
                Professional Tree Removal Services
              </h1>
              <p className="text-xl text-tree-green-100 mb-8">
                Safe, efficient, and professional tree removal for any situation.
                Licensed and insured with years of experience.
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
                src={imageConfig.treeRemoval.hero.url}
                alt={imageConfig.treeRemoval.hero.alt}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Tree Removal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                When You Need Tree Removal
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tree removal is sometimes necessary for safety, health, or property reasons.
                Our expert team can safely remove trees of any size in any location.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-tree-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={imageConfig.treeRemoval.process.url}
                alt={imageConfig.treeRemoval.process.alt}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Tree Removal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure safe and efficient tree removal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-tree-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.step}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Equipment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://via.placeholder.com/500x400?text=Professional+Equipment"
                alt="Professional Equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Safety First, Always
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We use state-of-the-art equipment and follow strict safety protocols
                to ensure every tree removal is completed safely and efficiently.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">🔧</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Professional Equipment</h4>
                    <p className="text-gray-600">Cranes, chainsaws, and specialized rigging equipment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">🛡️</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Safety Protocols</h4>
                    <p className="text-gray-600">OSHA-compliant safety procedures and protective gear</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">📋</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Licensed & Insured</h4>
                    <p className="text-gray-600">Fully licensed and insured for your protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tree-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Tree Removed?
          </h2>
          <p className="text-xl text-tree-green-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for professional tree removal services.
            Available for emergency situations.
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
              Emergency: {businessConfig.contact.emergencyPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreeRemoval;