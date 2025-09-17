import React, { createContext, useContext, useState } from 'react';
import { translations } from '../config/languageConfig';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const t = (key) => {
    const keys = key.split('.');
    let current = translations[language];

    for (const k of keys) {
      if (current && current[k]) {
        current = current[k];
      } else {
        return key;
      }
    }

    return current || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      toggleLanguage,
      t,
      isEnglish: language === 'en',
      isChinese: language === 'zh'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};