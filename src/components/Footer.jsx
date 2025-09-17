import React from 'react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-tree-green-400 mb-4">
              {businessConfig.company.name}
            </h3>
            <p className="text-gray-300 mb-4">
              {t('footer.tagline')}. {businessConfig.company.tagline}.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-300">📞 {businessConfig.contact.phone}</span>
            </div>
            <div className="mt-2">
              <span className="text-gray-300">✉️ {businessConfig.contact.email}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.ourServices')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/tree-removal" className="text-gray-300 hover:text-tree-green-400">
                  {t('services.treeRemoval.title')}
                </Link>
              </li>
              <li>
                <Link to="/services/tree-trimming" className="text-gray-300 hover:text-tree-green-400">
                  {t('services.treeTrimming.title')}
                </Link>
              </li>
              <li>
                <Link to="/services/stump-grinding" className="text-gray-300 hover:text-tree-green-400">
                  {t('services.stumpGrinding.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-tree-green-400">
                  {t('footer.allServices')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-tree-green-400">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-300 hover:text-tree-green-400">
                  {t('footer.getQuote')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-tree-green-400">
                  {t('footer.contactUs')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 {businessConfig.company.name}. {t('footer.allRights')}
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              {t('footer.licensed')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;