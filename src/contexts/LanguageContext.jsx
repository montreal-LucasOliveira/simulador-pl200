import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '../locales/translations';

export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage, default to 'pt'
    return localStorage.getItem('app_language') || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key) => {
    if (!translations[language] || !translations[language][key]) {
      // Fallback to 'pt' key if missing
      return translations['pt'][key] || key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
