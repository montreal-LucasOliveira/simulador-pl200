import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Moon, Sun, Type, 
  Eye, RefreshCw, Smartphone, Monitor,
  Layout, Check, Bell
} from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

export default function Settings() {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'medium');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Aplicar tema no HTML globalmente
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  const handleReset = () => {
    if (window.confirm(t('reset_confirm'))) {
      setTheme('light');
      setFontSize('medium');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      {/* Navbar */}
      <nav className={`border-b sticky top-0 z-40 shadow-sm transition-colors ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'}`}>
        <div className="max-w-5xl mx-auto px-4 h-16 flex justify-between items-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 font-bold hover:scale-105 transition-all text-sm"
          >
            <ArrowLeft size={18} /> {t('back_to_dashboard')}
          </button>
          <div className="font-black text-xl tracking-tighter">{t('ui_settings_title')}</div>
          <div className="w-10"></div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
            <h1 className="text-4xl font-black mb-3">{t('customize_exp')}</h1>
            <p className={`font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{t('customize_desc')}</p>
        </header>

        <div className="grid gap-8">
            {/* Seção de Tema */}
            <section className={`p-8 rounded-[3rem] border transition-all ${theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-2xl-blue' : 'bg-white border-slate-200 shadow-xl'}`}>
                <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-2xl ${theme === 'dark' ? 'bg-white/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                        <Layout size={24} />
                    </div>
                    <div>
                        <h2 className="font-black text-xl">{t('visual_appearance')}</h2>
                        <p className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{t('visual_desc')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => setTheme('light')}
                        className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 relative overflow-hidden ${theme === 'light' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 opacity-60 hover:opacity-100'}`}
                    >
                        <Sun size={32} className={theme === 'light' ? 'text-blue-600' : 'text-slate-400'} />
                        <span className="font-black text-sm uppercase tracking-widest text-slate-800">{t('light_mode')}</span>
                        {theme === 'light' && <div className="absolute top-2 right-2 p-1 bg-blue-600 text-white rounded-full"><Check size={10} /></div>}
                    </button>

                    <button 
                        onClick={() => setTheme('dark')}
                        className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 relative overflow-hidden ${theme === 'dark' ? 'border-blue-500 bg-slate-800' : 'border-slate-100 opacity-60 hover:opacity-100'}`}
                    >
                        <Moon size={32} className={theme === 'dark' ? 'text-blue-400' : 'text-slate-400'} />
                        <span className={`font-black text-sm uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{t('dark_mode')}</span>
                        {theme === 'dark' && <div className="absolute top-2 right-2 p-1 bg-blue-500 text-white rounded-full"><Check size={10} /></div>}
                    </button>
                </div>
            </section>

            {/* Seção de Acessibilidade */}
            <section className={`p-8 rounded-[3rem] border transition-all ${theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-2xl-blue' : 'bg-white border-slate-200 shadow-xl'}`}>
                <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-2xl ${theme === 'dark' ? 'bg-white/10 text-amber-400' : 'bg-amber-50 text-amber-600'}`}>
                        <Eye size={24} />
                    </div>
                    <div>
                        <h2 className="font-black text-xl">{t('accessibility_text')}</h2>
                        <p className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{t('accessibility_desc')}</p>
                    </div>
                </div>

                <div className="flex bg-slate-100 dark:bg-slate-800 p-2 rounded-2xl">
                    {['small', 'medium', 'large'].map((size) => (
                        <button 
                            key={size}
                            onClick={() => setFontSize(size)}
                            className={`flex-1 py-3 rounded-xl font-black text-xs uppercase transition-all ${fontSize === size ? 'bg-white dark:bg-slate-700 shadow-md text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            {size === 'small' ? t('font_small') : size === 'medium' ? t('font_medium') : t('font_large')}
                        </button>
                    ))}
                </div>

                <div className={`mt-6 p-6 rounded-2xl border border-dashed text-center font-medium ${theme === 'dark' ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>
                    <p style={{ fontSize: fontSize === 'small' ? '0.8rem' : fontSize === 'large' ? '1.2rem' : '1rem' }}>
                        {t('test_view')}
                    </p>
                </div>
            </section>

            {/* Ações de Sistema */}
            <section className="flex flex-col md:flex-row gap-4">
                <button 
                    onClick={() => navigate('/dashboard')}
                    className="flex-1 py-5 bg-slate-900 text-white font-black rounded-[2rem] shadow-xl hover:scale-105 transition-all text-sm"
                >
                    {t('save_back')}
                </button>
                <button 
                    onClick={handleReset}
                    className={`flex-1 py-5 border-2 rounded-[2rem] font-bold text-sm transition-all flex items-center justify-center gap-2 ${theme === 'dark' ? 'border-slate-800 text-slate-500 hover:text-white' : 'border-slate-200 text-slate-400 hover:bg-slate-100'}`}
                >
                    <RefreshCw size={18} /> {t('reset_all')}
                </button>
            </section>
        </div>
      </main>
    </div>
  );
}
