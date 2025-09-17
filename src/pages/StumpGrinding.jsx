import React from 'react';
import { Link } from 'react-router-dom';
import { imageConfig } from '../config/imageConfig';
import { businessConfig } from '../config/businessConfig';
import { useSEO } from '../hooks/useSEO';

const StumpGrinding = () => {
  useSEO('stumpGrinding');
  const benefits = [
    'Eliminates trip hazards',
    'Prevents pest infestations',
    'Reclaims valuable yard space',
    'Improves property appearance',
    'Allows for new landscaping',
    'Removes root sprouting'
  ];

  const equipment = [
    {
      name: 'Track Units',
      description: 'Self-propelled units for accessible areas with minimal lawn damage'
    },
    {
      name: 'Walk-Behind Grinders',
      description: 'Compact units perfect for tight spaces and backyard access'
    },
    {
      name: 'Large Grinders',
      description: 'High-powered units for large stumps and commercial projects'
    }
  ];

  const process = [
    {
      step: 'Site Assessment',
      description: 'We evaluate the stump, surrounding area, and access requirements'
    },
    {
      step: 'Equipment Selection',
      description: 'Choose the appropriate grinder for your specific situation'
    },
    {
      step: 'Grinding Process',
      description: 'Grind the stump below ground level (typically 6-12 inches)'
    },
    {
      step: 'Cleanup & Mulch',
      description: 'Remove debris and provide wood chips for mulch if desired'
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
                Professional Stump Grinding Services
              </h1>
              <p className="text-xl text-tree-green-100 mb-8">
                Complete stump removal and grinding to reclaim your outdoor space
                and eliminate safety hazards from your property.
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
                src={imageConfig.stumpGrinding.hero.url}
                alt={imageConfig.stumpGrinding.hero.alt}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Remove Stumps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Remove Tree Stumps?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tree stumps can be more than just an eyesore - they pose several practical problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={imageConfig.stumpGrinding.equipment.url}
                alt={imageConfig.stumpGrinding.equipment.alt}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-tree-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-600 mt-6">
                Professional stump grinding eliminates these issues while providing
                valuable wood chips for mulch and soil improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Equipment */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Grade Equipment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the right equipment for every job, from small residential stumps to large commercial projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚜</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Stump Grinding Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Efficient and thorough stump removal with minimal impact to your property
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

      {/* Before & After */}
      <section className="bg-tree-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Complete Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the difference professional stump grinding makes to your property
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Include:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">🌳</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Complete Stump Removal</h4>
                    <p className="text-gray-600">Grind stump 6-12 inches below ground level</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">🌿</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Root System Treatment</h4>
                    <p className="text-gray-600">Remove major surface roots and prevent sprouting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">🧹</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Site Cleanup</h4>
                    <p className="text-gray-600">Remove all debris or provide wood chips for mulch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tree-green-600 mr-3 text-xl mt-1">🏡</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Property Protection</h4>
                    <p className="text-gray-600">Careful operation to protect surrounding landscape</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={imageConfig.stumpGrinding.beforeAfter.url}
                alt={imageConfig.stumpGrinding.beforeAfter.alt}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                How deep do you grind stumps?
              </h3>
              <p className="text-gray-600">
                We typically grind stumps 6-12 inches below ground level, which is sufficient for most landscaping needs and prevents regrowth.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                What happens to the wood chips?
              </h3>
              <p className="text-gray-600">
                You can keep the wood chips for mulch around your property, or we can remove them completely - your choice at no extra cost.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Will grinding damage my lawn?
              </h3>
              <p className="text-gray-600">
                We use track units that minimize lawn damage and are careful to protect your existing landscape during the grinding process.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Can you grind stumps in tight spaces?
              </h3>
              <p className="text-gray-600">
                Yes! We have compact walk-behind grinders that can access tight spaces and backyard locations with minimal access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tree-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Remove Those Stumps?
          </h2>
          <p className="text-xl text-tree-green-100 mb-8 max-w-2xl mx-auto">
            Get a free estimate for professional stump grinding services. Reclaim your yard space today!
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

export default StumpGrinding;