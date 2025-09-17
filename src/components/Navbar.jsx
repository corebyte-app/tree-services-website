import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isServicesActive = () => location.pathname.startsWith('/services');

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Quote', path: '/quote' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceItems = [
    { name: 'Tree Removal', path: '/services/tree-removal' },
    { name: 'Tree Trimming', path: '/services/tree-trimming' },
    { name: 'Stump Grinding', path: '/services/stump-grinding' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-tree-green-700">
                {businessConfig.company.name}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Home */}
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-tree-green-700 bg-tree-green-50'
                  : 'text-gray-700 hover:text-tree-green-700 hover:bg-tree-green-50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  isServicesActive()
                    ? 'text-tree-green-700 bg-tree-green-50'
                    : 'text-gray-700 hover:text-tree-green-700 hover:bg-tree-green-50'
                }`}
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(item.path)
                          ? 'text-tree-green-700 bg-tree-green-50'
                          : 'text-gray-700 hover:text-tree-green-700 hover:bg-tree-green-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {mainNavItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-tree-green-700 bg-tree-green-50'
                    : 'text-gray-700 hover:text-tree-green-700 hover:bg-tree-green-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-tree-green-700 focus:outline-none focus:text-tree-green-700"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Home */}
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/')
                    ? 'text-tree-green-700 bg-tree-green-50'
                    : 'text-gray-700 hover:text-tree-green-700 hover:bg-tree-green-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Services Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-800 border-b border-gray-200">
                  Services
                </div>
                {serviceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-6 py-2 rounded-md text-base font-medium ${
                      isActive(item.path)
                        ? 'text-tree-green-700 bg-tree-green-50'
                        : 'text-gray-700 hover:text-tree-green-700 hover:bg-tree-green-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Other Nav Items */}
              {mainNavItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'text-tree-green-700 bg-tree-green-50'
                      : 'text-gray-700 hover:text-tree-green-700 hover:bg-tree-green-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;