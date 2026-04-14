import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { 
  User, Mail, Calendar, Shield, Trophy, 
  ArrowLeft, Save, Edit2, Target, PieChart, 
  Clock, Award, Star
} from 'lucide-react';

export default function Profile({ session }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({ full_name: '', nickname: '' });
  const [stats, setStats] = useState({
    totalSimulados: 0,
    bestScore: 0,
    avgScore: 0,
    totalCorrect: 0,
    totalQuestions: 0
  });

  const userEmail = session?.user?.email;

  useEffect(() => {
    if (!session) {
      navigate('/');
      return;
    }
    fetchProfileAndStats();
  }, [session]);

  const fetchProfileAndStats = async () => {
    setLoading(true);
    try {
      // 1. Buscar Perfil
      const { data: profileData, error: pError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (pError) throw pError;
      setProfile(profileData);
      setFormData({ 
        full_name: profileData.full_name || '', 
        nickname: profileData.nickname || '' 
      });

      // 2. Buscar Histórico para Estatísticas
      const { data: history, error: hError } = await supabase
        .from('simulator_history')
        .select('*')
        .eq('user_id', session.user.id);
      
      if (hError) throw hError;

      if (history && history.length > 0) {
        const total = history.length;
        const best = Math.max(...history.map(h => h.score));
        const avg = Math.round(history.reduce((acc, curr) => acc + curr.score, 0) / total);
        const correct = history.reduce((acc, curr) => acc + curr.correct_answers, 0);
        const totalQ = history.reduce((acc, curr) => acc + curr.total_questions, 0);

        setStats({
          totalSimulados: total,
          bestScore: best,
          avgScore: avg,
          totalCorrect: correct,
          totalQuestions: totalQ
        });
      }
    } catch (err) {
      console.error("Erro ao carregar perfil:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    // Validação de Nickname (sem espaços, min 3, max 15, alfanumérico)
    const nicknameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (!nicknameRegex.test(formData.nickname)) {
      alert("O apelido deve ter entre 3 e 15 caracteres, sem espaços e usar apenas letras, números ou sublinhado (_).");
      setSaving(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ 
          full_name: formData.full_name,
          nickname: formData.nickname.toLowerCase()
        })
        .eq('id', session.user.id);
      
      if (error) {
        if (error.code === '23505') {
            alert("Este apelido já está sendo usado por outro aventureiro!");
        } else {
            throw error;
        }
        return;
      }
      
      setProfile(prev => ({ 
        ...prev, 
        full_name: formData.full_name,
        nickname: formData.nickname.toLowerCase()
      }));
      alert("Perfil atualizado com sucesso!");
    } catch (err) {
      alert("Erro ao salvar perfil.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mb-4"></div>
        <p className="font-bold text-slate-400">Carregando seus dados...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      {/* Navbar Superior */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex justify-between items-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-colors"
          >
            <ArrowLeft size={20} /> Voltar
          </button>
          <div className="font-black text-xl text-slate-800 tracking-tight">Meu Perfil</div>
          <div className="w-20"></div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card Esquerdo: Informações Básicas */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-10"></div>
                
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-[2rem] flex items-center justify-center font-black text-3xl mx-auto mb-6 shadow-lg border-4 border-white relative z-10">
                    {profile?.full_name?.charAt(0).toUpperCase() || userEmail?.charAt(0).toUpperCase()}
                </div>

                <h2 className="text-xl font-black text-slate-800 mb-1">{profile?.full_name || 'Estudante PL-200'}</h2>
                <p className="text-blue-600 font-black text-sm mb-1">@{profile?.nickname || 'sem_apelido'}</p>
                <p className="text-slate-400 font-bold text-xs mb-6 truncate">{userEmail}</p>

                <div className="flex justify-center gap-2 mb-8">
                    {profile?.is_premium ? (
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black shadow-sm flex items-center gap-1">
                            <Star size={10} fill="currentColor" /> PREMIUM
                        </span>
                    ) : (
                        <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1">
                            <Shield size={10} /> GRÁTIS
                        </span>
                    )}
                </div>

                <div className="space-y-4 text-left border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <Mail size={16} /> {userEmail}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <Calendar size={16} /> Membro desde {new Date(profile?.created_at).toLocaleDateString()}
                    </div>
                </div>
            </div>

            {/* Badges Rápidos */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-lg p-8">
                <h3 className="font-black text-slate-800 mb-6 flex items-center gap-2 text-sm">
                    <Award size={18} className="text-blue-600" /> Próxima Conquista
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="p-2 bg-white rounded-xl shadow-sm"><Trophy size={18} className="text-amber-500" /></div>
                        <div className="flex-1">
                            <p className="text-[10px] font-black text-slate-800 uppercase">Mestre dos Dados</p>
                            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-1">
                                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Card Direito: Edição e Stats */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Formulário de Edição */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl p-8 md:p-10">
                <h3 className="font-black text-2xl text-slate-800 mb-8 flex items-center gap-3">
                    <Edit2 size={24} className="text-blue-600" /> Configurações de Perfil
                </h3>
                
                <form onSubmit={handleSave} className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Seu Apelido Único (Para o Ranking)</label>
                        <div className="relative">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-blue-600">@</span>
                            <input 
                                type="text" 
                                value={formData.nickname}
                                onChange={(e) => setFormData({ ...formData, nickname: e.target.value.replace(/\s/g, '').toLowerCase() })}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-10 pr-5 py-4 font-black text-slate-800 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-300 shadow-sm"
                                placeholder="ex: ninja_pl200"
                                maxLength={15}
                            />
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2 px-1 font-bold italic">Apenas letras, números e sublinhado. Sem espaços!</p>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Seu Nome Completo (Para Certificados)</label>
                        <input 
                            type="text" 
                            value={formData.full_name}
                            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 font-bold text-slate-800 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-300 shadow-sm"
                            placeholder="Ex: Lucas Oliveira"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={saving}
                        className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                        {saving ? 'SALVANDO...' : <><Save size={18} /> SALVAR ALTERAÇÕES</>}
                    </button>
                </form>
            </div>

            {/* Grid de Estatísticas Reais */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl p-8 md:p-10">
                <h3 className="font-black text-2xl text-slate-800 mb-8 flex items-center gap-3">
                    <PieChart size={24} className="text-blue-600" /> Desempenho em Números
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Simulados</p>
                        <p className="text-4xl font-black text-slate-800 tracking-tighter">{stats.totalSimulados}</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Melhor Nota</p>
                        <p className="text-4xl font-black text-emerald-600 tracking-tighter">{stats.bestScore}%</p>
                    </div>
                    <div className="p-6 bg-slate-100 rounded-3xl border border-slate-200">
                        <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Média Geral</p>
                        <p className="text-4xl font-black text-slate-900 tracking-tighter">{stats.avgScore}%</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Questões</p>
                        <p className="text-4xl font-black text-slate-800 tracking-tighter">{stats.totalCorrect}</p>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50/50 rounded-3xl border border-blue-100 flex items-center gap-6">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                        <Target size={32} />
                    </div>
                    <div>
                        <h4 className="font-black text-blue-900 text-lg">Precisão Acumulada</h4>
                        <p className="text-sm font-bold text-blue-700/60 mb-2">Seu índice de acerto em todas as {stats.totalQuestions} questões resolvidas.</p>
                        <div className="w-full bg-blue-100 h-3 rounded-full overflow-hidden">
                            <div className="bg-blue-600 h-full rounded-full transition-all duration-1000" style={{ width: `${stats.totalQuestions > 0 ? (stats.totalCorrect / stats.totalQuestions) * 100 : 0}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
