import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Shield, User, Star, Check, X, ArrowLeft, Users, Trophy, Mail, Calendar, Trash2, MessageSquare, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

export default function Admin({ session }) {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [supportRequests, setSupportRequests] = useState([]);
  const [stats, setStats] = useState({ total: 0, premium: 0 });
  const [activeTab, setActiveTab] = useState('users'); // 'users' ou 'support'

  const isAdmin = session?.user?.email === 'lucasho94@hotmail.com';

  useEffect(() => {
    if (isAdmin) {
      fetchAdminData();
      fetchSupportRequests();
    }
  }, [isAdmin]);

  const fetchSupportRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('support_requests')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error) setSupportRequests(data || []);
    } catch (err) {
      console.error("Erro ao buscar chamados:", err);
    }
  };

  const resolveRequest = async (id) => {
    const { error } = await supabase
      .from('support_requests')
      .delete()
      .eq('id', id);

    if (!error) {
      setSupportRequests(prev => prev.filter(r => r.id !== id));
      alert(t('request_archived_ok'));
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl animate-fade-in-up">
            <div className="w-20 h-20 bg-red-500/20 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Shield size={40} />
            </div>
            <h1 className="text-2xl font-black text-white mb-2 tracking-tight">{t('restricted_access')}</h1>
            <p className="text-slate-400 font-medium mb-8">{t('restricted_desc')}</p>
            <button 
                onClick={() => navigate('/dashboard')}
                className="w-full py-4 bg-white text-slate-900 font-black rounded-2xl shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
            >
                <ArrowLeft size={18} /> {t('back_to_dashboard')}
            </button>
        </div>
      </div>
    );
  }

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      // 1. Buscar todos os perfis
      const { data: profiles, error: pError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (pError) throw pError;

      // 2. Buscar histórico para calcular melhores notas
      const { data: history, error: hError } = await supabase
        .from('simulator_history')
        .select('user_id, score');

      if (hError) throw hError;

      // 3. Cruzar dados
      const userList = profiles.map(p => {
        const userHistory = history.filter(h => h.user_id === p.id);
        const bestScore = userHistory.length > 0 ? Math.max(...userHistory.map(h => h.score)) : 0;
        return {
          ...p,
          bestScore
        };
      });

      setUsers(userList);
      setStats({
        total: userList.length,
        premium: userList.filter(u => u.is_premium).length
      });
    } catch (err) {
      console.error("Erro no Admin:", err);
    } finally {
      setLoading(false);
    }
  };

  const togglePremium = async (userId, currentStatus) => {
    const { error } = await supabase
      .from('profiles')
      .update({ is_premium: !currentStatus })
      .eq('id', userId);

    if (error) {
      alert(t('profile_error'));
    } else {
      setUsers(prev => prev.map(u => u.id === userId ? { ...u, is_premium: !currentStatus } : u));
      setStats(prev => ({ ...prev, premium: prev.premium + (!currentStatus ? 1 : -1) }));
    }
  };

  const deleteUser = async (userId, userEmail) => {
    const confirmed = window.confirm(t('delete_user_confirm').replace('{email}', userEmail));
    
    if (!confirmed) return;
    
    setLoading(true);
    try {
      // 1. Remover Histórico (Foreign Key)
      const { error: hError } = await supabase
        .from('simulator_history')
        .delete()
        .eq('user_id', userId);
        
      if (hError) throw hError;
      
      // 2. Remover Perfil
      const { error: pError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);
        
      if (pError) throw pError;
      
      alert(t('user_deleted_ok'));
      setUsers(prev => prev.filter(u => u.id !== userId));
      setStats(prev => ({ 
        total: prev.total - 1, 
        premium: users.find(u => u.id === userId)?.is_premium ? prev.premium - 1 : prev.premium 
      }));
    } catch (err) {
      console.error("Erro ao excluir usuário:", err);
      alert(t('error_delete_user'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      {/* Header */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-black">A</div>
             <span className="font-black text-slate-900 uppercase tracking-tighter">{t('admin_backoffice')}</span>
          </div>
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-sm font-bold text-slate-500 hover:text-blue-600 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={16} /> {t('back_to_dashboard')}
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">{t('total_students')}</p>
            <h2 className="text-3xl font-black text-slate-900">{stats.total}</h2>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-emerald-500 font-bold text-xs uppercase tracking-widest mb-1">{t('premium_members')}</p>
            <h2 className="text-3xl font-black text-emerald-600">{stats.premium}</h2>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-1">{t('conv_rate')}</p>
            <h2 className="text-3xl font-black text-blue-600">
              {stats.total > 0 ? Math.round((stats.premium / stats.total) * 100) : 0}%
            </h2>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-3xl text-white shadow-lg flex items-center gap-5">
            <div className="p-4 bg-white/20 rounded-2xl"><Trophy size={32}/></div>
            <div>
              <p className="text-blue-100 font-bold text-xs uppercase tracking-widest">{t('active_panel')}</p>
              <h2 className="text-3xl font-black">v2.0</h2>
            </div>
          </div>
        </div>

        {/* Tabs de Navegação */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('users')}
            className={`px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 transition-all ${activeTab === 'users' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'}`}
          >
            <Users size={18} /> {t('users_tab')}
          </button>
          <button 
            onClick={() => setActiveTab('support')}
            className={`px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 transition-all relative ${activeTab === 'support' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'}`}
          >
            <MessageSquare size={18} /> {t('support_tab')}
            {supportRequests.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-black animate-pulse">
                {supportRequests.length}
              </span>
            )}
          </button>
        </div>

        {activeTab === 'users' ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h2 className="font-black text-2xl text-slate-800">{t('community_pl200')}</h2>
              <button onClick={fetchAdminData} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl text-sm transition-colors">{t('update_data')}</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 text-[11px] font-black uppercase tracking-[0.2em]">
                    <th className="px-8 py-4">{t('table_student')}</th>
                    <th className="px-8 py-4">{t('table_date')}</th>
                    <th className="px-8 py-4">{t('table_best_score')}</th>
                    <th className="px-8 py-4 text-center">{t('table_actions')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-6 text-sm font-bold text-slate-800">{user.email}</td>
                      <td className="px-8 py-6 text-sm text-slate-500 font-medium">{new Date(user.created_at).toLocaleDateString()}</td>
                      <td className="px-8 py-6 text-lg font-black text-blue-600">{user.bestScore}%</td>
                      <td className="px-8 py-6 text-center space-x-2">
                        <button 
                          onClick={() => togglePremium(user.id, user.is_premium)}
                          className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                            user.is_premium 
                            ? 'bg-red-50 text-red-600' 
                            : 'bg-blue-600 text-white'
                          }`}
                        >
                          {user.is_premium ? t('remove_pro') : t('make_premium')}
                        </button>
                        <button 
                          onClick={() => deleteUser(user.id, user.email)}
                          className="p-2.5 bg-slate-100 text-slate-400 hover:text-red-600 rounded-xl transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
             <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
                <h2 className="font-black text-2xl text-slate-800 mb-6 flex items-center gap-3">
                   <MessageSquare className="text-blue-600" /> {t('support_requests_title')}
                </h2>
                <div className="space-y-4">
                  {supportRequests.map((req) => (
                    <div key={req.id} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <h4 className="font-black text-slate-800">{req.subject}: {req.user_email}</h4>
                             <p className="text-[10px] text-slate-400 font-bold uppercase">{new Date(req.created_at).toLocaleString()}</p>
                          </div>
                          <button onClick={() => resolveRequest(req.id)} className="bg-emerald-500 text-white p-2 rounded-lg"><CheckCircle size={18} /></button>
                       </div>
                       <p className="text-slate-600 font-medium bg-white p-4 rounded-xl border border-slate-100">{req.message}</p>
                    </div>
                  ))}
                  {supportRequests.length === 0 && <p className="text-center text-slate-400 py-10">{t('no_pending_requests')}</p>}
                </div>
             </div>
          </div>
        )}

        {loading && <div className="text-center py-20 font-bold text-slate-400">{t('loading_data')}</div>}
      </main>
    </div>
  );
}
