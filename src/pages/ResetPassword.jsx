import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Mail, Lock, Loader2, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

export default function ResetPassword() {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

   useEffect(() => {
    // Verifica se há um sinal de recuperação na memória (localStorage)
    const recoveryMode = localStorage.getItem('sb-recovery-mode');
    if (recoveryMode === 'true') {
      setIsUpdating(true);
    }

    // Escuta eventos de autenticação para detectar recuperação de senha em tempo real
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        setIsUpdating(true);
        localStorage.setItem('sb-recovery-mode', 'true');
      }
    });

    // Fallback: Verifica se há parâmetros na URL
    const hash = window.location.hash;
    if (hash.includes('error_description')) {
      const params = new URLSearchParams(hash.replace('#', '?'));
      const description = params.get('error_description');
      if (description) {
        setErrorMsg(t('reset_link_error').replace('{desc}', description));
      }
    } else if (hash.includes('type=recovery')) {
      setIsUpdating(true);
    }

    return () => subscription.unsubscribe();
  }, []);

  const handleResetRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setMessage(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setMessage(t('reset_link_sent'));
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // Validação de Senha (Mín 6 chars, Letras e Números)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setLoading(false);
      setErrorMsg(t('auth_pass_req'));
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      
      // Limpa o modo de recuperação após sucesso
      localStorage.removeItem('sb-recovery-mode');
      
      alert(t('reset_success_alert'));
      navigate('/');
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800 font-sans">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10">
          <button 
            onClick={() => navigate('/')}
            className="mb-8 flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> {t('reset_back_login')}
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
              {isUpdating ? <ShieldCheck size={32} /> : <Mail size={32} />}
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              {isUpdating ? t('reset_title_new') : t('reset_title_request')}
            </h1>
            <p className="text-sm text-slate-500 font-medium mt-2">
              {isUpdating 
                ? t('reset_desc_new') 
                : t('reset_desc_request')}
            </p>
          </div>

          {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold rounded-2xl animate-shake">
              ⚠️ {errorMsg}
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-bold rounded-2xl flex items-center gap-3">
              <CheckCircle2 size={20} /> {message}
            </div>
          )}

          <form onSubmit={isUpdating ? handlePasswordUpdate : handleResetRequest} className="space-y-5">
            {!isUpdating ? (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('reset_email_label')}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-4 pl-12 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
                    placeholder={t('email_placeholder')}
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('reset_new_pass_label')}</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-4 pl-12 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
                    placeholder={t('pass_placeholder_6')}
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-2 font-medium">{t('reset_pass_hint')}</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-slate-200 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : (isUpdating ? t('reset_btn_update') : t('reset_btn_send'))}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
