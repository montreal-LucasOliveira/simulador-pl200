import React, { useContext } from 'react';
import { Globe } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button 
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-sm font-bold shadow-sm
        ${language === 'pt' 
          ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100' 
          : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
        }`}
    >
      <Globe size={16} />
      <span className="uppercase tracking-wider">
        {language === 'pt' ? 'PT-BR' : 'EN-US'}
      </span>
    </button>
  );
}
