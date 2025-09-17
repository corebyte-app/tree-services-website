import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getSEOData } from '../config/seoConfig';
import { businessConfig } from '../config/businessConfig';

export const useSEO = (pageKey) => {
  const { language } = useLanguage();

  useEffect(() => {
    try {
      const seoData = getSEOData(language, pageKey);

      // Update document title
      if (seoData.title || seoData.siteName) {
        document.title = seoData.title || seoData.siteName;
      }

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && (seoData.description || seoData.siteDescription)) {
        metaDescription.setAttribute('content', seoData.description || seoData.siteDescription);
      }

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }

      const keywords = seoData.keywords ? seoData.keywords.join(', ') : '';
      metaKeywords.setAttribute('content', keywords);

      // Update language attribute
      if (language) {
        document.documentElement.lang = language;
      }

      // Update Open Graph tags
      updateOpenGraphTags(seoData, language);

      // Update structured data
      updateStructuredData(seoData, language);

    } catch (error) {
      console.error('SEO update error:', error);
      // Don't break the page if SEO fails
    }
  }, [language, pageKey]);
};

const updateOpenGraphTags = (seoData, language) => {
  try {
    const ogTags = [
      { property: 'og:title', content: seoData.title || seoData.siteName || '' },
      { property: 'og:description', content: seoData.description || seoData.siteDescription || '' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: language === 'zh' ? 'zh_NZ' : 'en_NZ' },
      { property: 'og:site_name', content: businessConfig?.company?.name || 'Skyline Tree Services' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoData.title || seoData.siteName || '' },
      { name: 'twitter:description', content: seoData.description || seoData.siteDescription || '' }
    ];

    ogTags.forEach(tag => {
      try {
        const selector = tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`;
        let element = document.querySelector(selector);

        if (!element) {
          element = document.createElement('meta');
          if (tag.property) {
            element.setAttribute('property', tag.property);
          } else {
            element.setAttribute('name', tag.name);
          }
          document.head.appendChild(element);
        }

        element.setAttribute('content', tag.content);
      } catch (error) {
        console.warn('Error updating OG tag:', tag, error);
      }
    });
  } catch (error) {
    console.error('Error updating Open Graph tags:', error);
  }
};

const updateStructuredData = (seoData, language) => {
  try {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create new structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://skylinetreeservices.co.nz",
      "name": businessConfig?.company?.name || "Skyline Tree Services",
      "description": seoData?.siteDescription || "Professional tree services in Auckland",
      "url": "https://skylinetreeservices.co.nz",
      "telephone": businessConfig?.contact?.phone || "0212782898",
      "email": businessConfig?.contact?.email || "93676779@qq.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Auckland",
      "addressRegion": "Auckland",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-36.8485",
      "longitude": "174.7633"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Auckland",
        "sameAs": "https://en.wikipedia.org/wiki/Auckland"
      },
      {
        "@type": "Place",
        "name": "North Shore"
      },
      {
        "@type": "Place",
        "name": "West Auckland"
      },
      {
        "@type": "Place",
        "name": "South Auckland"
      },
      {
        "@type": "Place",
        "name": "East Auckland"
      }
    ],
    "serviceType": [
      "Tree Removal",
      "Tree Trimming",
      "Tree Pruning",
      "Stump Grinding",
      "Arborist Services"
    ],
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00"
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "NZD",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tree Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Removal",
            "description": "Professional tree removal services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Trimming",
            "description": "Expert tree trimming and pruning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stump Grinding",
            "description": "Complete stump removal and grinding"
          }
        }
      ]
    }
  };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  } catch (error) {
    console.error('Error updating structured data:', error);
  }
};