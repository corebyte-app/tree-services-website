import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import { businessConfig } from '../config/businessConfig';

const Quote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    serviceType: '',
    urgency: '',
    description: '',
    photos: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Initialize EmailJS
      emailjs.init(emailConfig.publicKey);

      // Prepare email template parameters
      const templateParams = {
        to_email: emailConfig.ownerEmail,
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.zipCode}`,
        service_type: formData.serviceType,
        urgency: formData.urgency,
        description: formData.description,
        reply_to: formData.email
      };

      // Handle file attachments if any photos were uploaded
      if (formData.photos && formData.photos.length > 0) {
        // Convert FileList to array and add to template params
        const attachments = Array.from(formData.photos).map(file => ({
          name: file.name,
          path: file
        }));
        templateParams.attachments = attachments;
      }

      // Send email using EmailJS with attachments support
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      );

      console.log('Quote request submitted successfully:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending quote request:', error);
      setSubmitError('Failed to send quote request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Quote Request Submitted!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your quote request. We'll review your information and contact you within 24 hours to schedule a free consultation.
            </p>
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What happens next?</h3>
              <div className="text-left max-w-md mx-auto space-y-2">
                <p className="text-gray-600">• We'll call you within 24 hours</p>
                <p className="text-gray-600">• Schedule a free on-site consultation</p>
                <p className="text-gray-600">• Provide a detailed written estimate</p>
                <p className="text-gray-600">• Answer any questions you may have</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-600">
                Need immediate assistance? Call us at{' '}
                <a href={`tel:${businessConfig.contact.phone}`} className="text-tree-green-600 font-semibold">
                  {businessConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Request a Free Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a professional assessment and detailed quote for your tree service needs.
            All consultations are free with no obligation.
          </p>
        </div>

        {/* Quote Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Property Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Service Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Service *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
                  >
                    <option value="">Select service type</option>
                    <option value="tree-removal">Tree Removal</option>
                    <option value="tree-trimming">Tree Trimming/Pruning</option>
                    <option value="stump-grinding">Stump Grinding</option>
                    <option value="land-clearing">Land Clearing</option>
                    <option value="emergency">Emergency Services</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="consultation">Consultation Only</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="emergency">Emergency (ASAP)</option>
                    <option value="within-week">Within 1 Week</option>
                    <option value="within-month">Within 1 Month</option>
                    <option value="flexible">Flexible Timeline</option>
                    <option value="planning">Planning Ahead</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Please describe your tree service needs in detail. Include information about tree size, location, any challenges, and specific concerns."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label htmlFor="photos" className="block text-sm font-medium text-gray-700 mb-2">
                Photos (Optional)
              </label>
              <input
                type="file"
                id="photos"
                name="photos"
                multiple
                accept="image/*"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Adding photos helps us provide a more accurate estimate. You can upload multiple images.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              {submitError && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  {submitError}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-tree-green-500 focus:ring-offset-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-tree-green-600 text-white hover:bg-tree-green-700'
                }`}
              >
                {isSubmitting ? 'Sending Quote Request...' : 'Submit Quote Request'}
              </button>
              <p className="text-sm text-gray-500 text-center mt-3">
                * Required fields. We'll email you a confirmation and contact you within 24 hours.
              </p>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Response</h3>
            <p className="text-gray-600">We respond to all quote requests within 24 hours</p>
          </div>

          <div className="text-center">
            <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Consultation</h3>
            <p className="text-gray-600">All on-site consultations and estimates are completely free</p>
          </div>

          <div className="text-center">
            <div className="bg-tree-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Detailed Estimate</h3>
            <p className="text-gray-600">Receive a comprehensive written estimate with no hidden fees</p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-tree-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Emergency Tree Services?</h2>
          <p className="text-tree-green-100 mb-4">
            For urgent tree emergencies, storm damage, or safety hazards, call us immediately.
          </p>
          <a
            href={`tel:${businessConfig.contact.emergencyPhone}`}
            className="bg-white text-tree-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-tree-green-50 transition-colors inline-block"
          >
            Emergency Line: {businessConfig.contact.emergencyPhone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quote;