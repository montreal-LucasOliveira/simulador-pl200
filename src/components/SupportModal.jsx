import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { X, Send, AlertCircle, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

export default function SupportModal({ isOpen, onClose, userSession, initialSubject = 'Suporte' }) {
  const { t } = useContext(LanguageContext);
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState(userSession?.user?.email || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from('support_requests')
        .insert([
          {
            user_id: userSession?.user?.id || null,
            user_email: email,
            subject: subject,
            message: message,
            status: 'pendente'
          }
        ]);

      if (insertError) throw insertError;

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setMessage('');
        if (!userSession) setEmail('');
      }, 3000);

    } catch (err) {
      console.error('Erro ao enviar suporte:', err);
      setError(t('support_error_desc'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4">
      <div className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl animate-fade-in-up relative">
        
        {/* Header */}
        <div className="bg-slate-50 p-6 sm:p-8 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <MessageSquare size={24} />
            </div>
            <div>
              <h2 className="font-black text-xl text-slate-800">Fale Conosco</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Suporte Direto & Relatos</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-slate-200 hover:bg-slate-300 text-slate-500 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {success ? (
            <div className="py-10 text-center animate-bounce-subtle">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-2">{t('support_success_title')}</h3>
              <p className="text-slate-500 font-medium">{t('support_success_desc')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold rounded-2xl flex items-center gap-3">
                  <AlertCircle size={20} /> {error}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">{t('subject_label')}</label>
                  <select 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-slate-700"
                  >
                    <option value="Suporte">{t('subject_support')}</option>
                    <option value="Problema">{t('subject_problem')}</option>
                    <option value="Financeiro">{t('subject_finance')}</option>
                    <option value="Sugestão">{t('subject_suggestion')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">{t('email_label')}</label>
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    readOnly={!!userSession}
                    placeholder="ex@email.com"
                    className={`w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-slate-700 ${userSession ? 'opacity-60 cursor-not-allowed' : ''}`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">{t('message_label')}</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  placeholder={t('message_placeholder')}
                  className="w-full p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-700 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-slate-200 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Send size={20} /> {t('send_request')}</>}
              </button>
              
              <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-tighter">
                {t('email_secure_note')}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
