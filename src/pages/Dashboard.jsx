import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, Target, Flame, Trophy, Play, LogOut, Check, X, Medal, Star, Award, TrendingUp, Settings, User, PieChart, AlertCircle, Shield, Clock, Sun, Users, ChevronRight, Mail, Zap } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { generateCertificate } from '../utils/certificate';
import SupportModal from '../components/SupportModal';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

const RenderCustomTick = ({ payload, x, y, textAnchor, stroke, radius }) => {
  const words = payload.value.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach(word => {
    if ((currentLine + word).length > 15 && currentLine.length > 0) {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    } else {
      currentLine += word + ' ';
    }
  });
  if (currentLine.trim().length > 0) {
      lines.push(currentLine.trim());
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor={textAnchor}
        fill="#64748b"
        fontSize={9}
        fontWeight={700}
      >
        {lines.map((line, index) => (
          <tspan key={index} x={0} dy={index === 0 ? 0 : 11}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

export default function Dashboard({ session }) {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  const [history, setHistory] = useState([]);
  const [streak, setStreak] = useState(0);

  // States Interativos Novos
  const [menuAberto, setMenuAberto] = useState(false);
  const [seloAberto, setSeloAberto] = useState(null);
  const [historicoCompletoAberto, setHistoricoCompletoAberto] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [radarData, setRadarData] = useState([]);
  const [profile, setProfile] = useState(null);
  const [showModeSelector, setShowModeSelector] = useState(false);
  const [ranking, setRanking] = useState([]);
  const [loadingRanking, setLoadingRanking] = useState(true);
  const [showCertificatesModal, setShowCertificatesModal] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [supportSubject, setSupportSubject] = useState('Suporte');

  const fetchHistory = async () => {
    if (!session?.user?.id) return;
    
    setLoadingHistory(true);
    const { data, error } = await supabase
      .from('simulator_history')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Erro ao buscar histórico:", error);
    } else {
      // Map dos tipos para nomes amigáveis
      const mappedData = data.map(h => ({
        id: h.id,
        date: new Date(h.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
        type: h.exam_type.charAt(0).toUpperCase() + h.exam_type.slice(1),
        score: h.score,
        passed: h.passed,
        domain_stats: h.domain_stats
      }));
      setHistory(mappedData);

      // NOVO: Processamento para o Gráfico de Radar (Etapa 3)
      // Agregamos os últimos 5 simulados para ter uma média de desempenho por tema
      const statsAggregator = {};
      const recentTests = data.slice(0, 5);
      
      recentTests.forEach(test => {
         if (test.domain_stats) {
            Object.keys(test.domain_stats).forEach(domain => {
               if (!statsAggregator[domain]) statsAggregator[domain] = { correct: 0, total: 0 };
               statsAggregator[domain].correct += test.domain_stats[domain].correct;
               statsAggregator[domain].total += test.domain_stats[domain].total;
            });
         }
      });

      const chartData = Object.keys(statsAggregator).map(domain => ({
         subject: domain,
         fullMark: 100,
         A: Math.round((statsAggregator[domain].correct / statsAggregator[domain].total) * 100)
      }));

      setRadarData(chartData);

      // NOVO: Cálculo de Ofensiva (Streak) Real
      const calculateStreak = (historyData) => {
        if (!historyData || historyData.length === 0) return 0;
        
        const dates = [...new Set(historyData.map(h => 
          new Date(h.created_at).toISOString().split('T')[0]
        ))].sort().reverse();

        let currentStreak = 0;
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        if (dates[0] !== today && dates[0] !== yesterday) return 0;

        let checkDate = dates[0] === today ? new Date() : new Date(Date.now() - 86400000);
        
        for (let i = 0; i < dates.length; i++) {
          const dateStr = checkDate.toISOString().split('T')[0];
          if (dates.includes(dateStr)) {
            currentStreak++;
            checkDate.setDate(checkDate.getDate() - 1);
          } else {
            break;
          }
        }
        return currentStreak;
      };

      setStreak(calculateStreak(data));
    }
    setLoadingHistory(false);
  };

  const fetchRanking = async () => {
    setLoadingRanking(true);
    try {
        // Busca perfis e tenta cruzar com pontos
        const { data: profilesData, error: pError } = await supabase
            .from('profiles')
            .select('id, nickname, full_name');
        
        if (pError) throw pError;

        const { data: historyData, error: hError } = await supabase
            .from('simulator_history')
            .select('user_id, correct_answers, score');
        
        if (hError) throw hError;

        // Agregador de Pontos
        const userRanking = profilesData.map(p => {
            const userStats = historyData.filter(h => h.user_id === p.id);
            const totalPoints = userStats.reduce((acc, curr) => acc + curr.correct_answers, 0);
            const bestScore = userStats.length > 0 ? Math.max(...userStats.map(h => h.score)) : 0;
            return {
                name: p.nickname || p.full_name || 'Usuário Anônimo',
                points: totalPoints,
                bestScore: bestScore
            };
        }).sort((a, b) => b.points - a.points).slice(0, 5);

        setRanking(userRanking);
    } catch (err) {
        console.error("Erro ao carregar ranking (pode ser coluna ausente):", err);
        setRanking([]); // Garante que a UI não quebre
    } finally {
        setLoadingRanking(false);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
      if (data) setProfile(data);
    };

    fetchHistory();
    fetchProfile();
    fetchRanking();
  }, [session]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const startSimulator = (type, mode = 'tutorial') => {
    navigate(`/simulator/${type}?mode=${mode}`);
  };

  const userEmail = session?.user?.email || 'Aluno';
  const isAdmin = userEmail === 'lucasho94@hotmail.com';
  const isPremium = profile?.is_premium || session?.user?.user_metadata?.isPremium || isAdmin;
  const userInitial = userEmail.charAt(0).toUpperCase();

  const handleStripeCheckout = async (planType) => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: { 
            planType, // 'monthly' ou 'annual'
            userId: session.user.id,
            userEmail: userEmail
        }
      });

      if (error) throw error;
      if (data?.url) window.location.href = data.url;
    } catch (err) {
      console.error("Erro ao iniciar checkout:", err);
      alert("Houve um erro ao conectar com o provedor de pagamento. Tente novamente em instantes.");
    }
  };

  // Badges Dinamicos Reais (Expandidos)
  const selos = [
      { 
          id: 'fogo', 
          icone: <Flame size={28} className={history.length > 0 ? "text-orange-500" : "text-slate-300"} fill={history.length > 0 ? "currentColor" : "none"}/>, 
          titulo: 'Pioneiro', 
          desc: 'Seu primeiro passo na plataforma.', 
          grad: history.length > 0 ? 'from-amber-300 to-orange-500' : 'from-slate-100 to-slate-200',
          conquistado: history.length > 0
      },
      { 
          id: 'livro', 
          icone: <BookOpen size={28} className={history.length >= 10 ? "text-indigo-600" : "text-slate-300"}/>, 
          titulo: 'Maratonista', 
          desc: 'Completou mais de 10 simulados.', 
          grad: history.length >= 10 ? 'from-blue-400 to-indigo-600' : 'from-slate-100 to-slate-200',
          conquistado: history.length >= 10
      },
      { 
          id: 'alvo', 
          icone: <Target size={28} className={history.some(h => h.score >= 70) ? "text-teal-600" : "text-slate-300"}/>, 
          titulo: 'Precisão', 
          desc: 'Nota de corte batida pela primeira vez.', 
          grad: history.some(h => h.score >= 70) ? 'from-emerald-400 to-teal-500' : 'from-slate-100 to-slate-200',
          conquistado: history.some(h => h.score >= 70)
      },
      { 
          id: 'trofeu', 
          icone: <Trophy size={28} className={history.some(h => h.score === 100) ? "text-amber-500" : "text-slate-300"}/>, 
          titulo: 'Perfeccionista', 
          desc: 'Acertou 100% de um simulado.', 
          grad: history.some(h => h.score === 100) ? 'from-yellow-300 to-amber-500' : 'from-slate-100 to-slate-200',
          conquistado: history.some(h => h.score === 100)
      },
      { 
        id: 'clock', 
        icone: <Clock size={28} className={history.some(h => {
             const hr = new Date(h.created_at).getHours();
             return hr >= 22 || hr <= 4;
        }) ? "text-purple-600" : "text-slate-300"}/>, 
        titulo: 'Corujão', 
        desc: 'Estudando madrugada adentro (22h - 04h).', 
        grad: history.some(h => {
            const hr = new Date(h.created_at).getHours();
            return hr >= 22 || hr <= 4;
        }) ? 'from-indigo-400 to-purple-600' : 'from-slate-100 to-slate-200',
        conquistado: history.some(h => {
            const hr = new Date(h.created_at).getHours();
            return hr >= 22 || hr <= 4;
        })
      },
      { 
        id: 'sun', 
        icone: <Sun size={28} className={history.some(h => {
             const hr = new Date(h.created_at).getHours();
             return hr >= 5 && hr <= 9;
        }) ? "text-amber-500" : "text-slate-300"}/>, 
        titulo: 'Madrugador', 
        desc: 'Foco total nas primeiras horas do dia.', 
        grad: history.some(h => {
            const hr = new Date(h.created_at).getHours();
            return hr >= 5 && hr <= 9;
        }) ? 'from-orange-300 to-amber-500' : 'from-slate-100 to-slate-200',
        conquistado: history.some(h => {
            const hr = new Date(h.created_at).getHours();
            return hr >= 5 && hr <= 9;
        })
      },
      { 
        id: 'shield', 
        icone: <Shield size={28} className={streak >= 7 ? "text-blue-600" : "text-slate-300"}/>, 
        titulo: 'Inabalável', 
        desc: '7 dias seguidos de dedicação.', 
        grad: streak >= 7 ? 'from-blue-400 to-blue-700' : 'from-slate-100 to-slate-200',
        conquistado: streak >= 7
      },
       { 
        id: 'award', 
        icone: <Award size={28} className={history.some(h => h.exam_type === 'avançado' && h.passed) ? "text-red-600" : "text-slate-300"}/>, 
        titulo: 'Mestre da Prova', 
        desc: 'Aprovação confirmada no nível Avançado (Simulado Prova Real).', 
        grad: history.some(h => h.exam_type === 'avançado' && h.passed) ? 'from-red-400 to-red-700' : 'from-slate-100 to-slate-200',
        conquistado: history.some(h => h.exam_type === 'avançado' && h.passed)
      },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16 relative">
      {/* Navbar Superior */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-700 font-black text-xl hover:opacity-80 transition-opacity cursor-pointer">
            <Target size={24} /> PL-200 <span className="text-slate-800 hidden md:inline">Dashboard</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 px-4 py-1.5 rounded-full font-bold text-sm shadow-sm border border-orange-100">
              <Flame size={18} className="animate-pulse" fill="currentColor" /> {streak} dias ofensiva
            </div>

            <LanguageSwitcher />
            
            <div className="relative border-l border-slate-200 pl-4 md:pl-6 flex items-center">
              <button 
                onClick={() => setMenuAberto(!menuAberto)}
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-[15px] shadow-md border-2 border-white hover:scale-105 transition-transform"
              >
                {userInitial}
              </button>

              {/* DROPDOWN USER MENU */}
              {menuAberto && (
                  <div className="absolute top-14 right-0 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 z-50 animate-fade-in-up">
                      <div className="px-4 py-3 border-b border-slate-100 mb-2">
                          <p className="text-xs text-slate-400 uppercase font-black tracking-wider">Conta Conectada</p>
                          <p className="font-bold text-slate-800 truncate">{userEmail}</p>
                          <div className="mt-2 flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${isPremium ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                              <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500">
                                  {isPremium ? 'Assinante Premium' : 'Conta Gratuita'}
                              </span>
                          </div>
                      </div>
                      
                      {!isPremium && (
                        <div className="px-2 mb-2">
                            <button 
                                onClick={() => handleStripeCheckout('monthly')}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl font-black text-xs shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                            >
                                <Zap size={14} className="text-amber-400" fill="currentColor" /> SEJA PREMIUM AGORA
                            </button>
                        </div>
                      )}
                      <button 
                        onClick={() => navigate('/profile')}
                        className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                      >
                          <User size={16} /> Meu Perfil
                      </button>
                      <button 
                        onClick={() => {
                            setShowCertificatesModal(true);
                            setMenuAberto(false);
                        }}
                        className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                      >
                          <Award size={16} /> Meus Certificados
                      </button>
                      <button 
                        onClick={() => navigate('/settings')}
                        className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                      >
                          <Settings size={16} /> Configurações de UI
                      </button>
                      <div className="my-2 border-t border-slate-100"></div>
                      <button 
                        onClick={() => {
                          setSupportSubject('Suporte');
                          setShowSupport(true);
                          setMenuAberto(false);
                        }}
                        className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                      >
                          <Mail size={16} /> Fale Conosco
                      </button>
                      <button 
                        onClick={() => {
                          setSupportSubject('Problema');
                          setShowSupport(true);
                          setMenuAberto(false);
                        }}
                        className="w-full text-left px-5 py-2.5 font-bold text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                      >
                          <AlertCircle size={16} /> Relatar Problema
                      </button>
                      <div className="my-2 border-t border-slate-100"></div>
                      <button 
                        onClick={handleLogout} 
                        className="w-full text-left px-5 py-2.5 font-bold text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
                      >
                          <LogOut size={16} /> Encerrar Sessão
                      </button>
                      
                      {isAdmin && (
                        <>
                          <div className="my-2 border-t border-slate-100"></div>
                          <button 
                            onClick={() => navigate('/admin')} 
                            className="w-full text-left px-5 py-2.5 font-black text-xs text-blue-700 hover:bg-blue-50 flex items-center gap-3 transition-colors uppercase tracking-wider"
                          >
                              <Shield size={16} /> Painel de Gestão
                          </button>
                        </>
                      )}
                  </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* OVERLAY para fechar Click fora do Menu */}
      {menuAberto && (
          <div className="fixed inset-0 z-30" onClick={() => setMenuAberto(false)}></div>
      )}

      {/* MODAL DE SELOS GAAMIFICATION */}
      {seloAberto && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl transform transition-all animate-fade-in-up">
                <div className={`h-24 bg-gradient-to-br ${seloAberto.grad} w-full relative flex justify-center items-end pb-3`}>
                    <div className="absolute top-4 right-4 bg-white/20 p-1.5 rounded-full cursor-pointer hover:bg-white/40" onClick={() => setSeloAberto(null)}>
                        <X size={16} className="text-white" />
                    </div>
                </div>
                <div className="flex justify-center -mt-10 mb-4 px-6 relative z-10">
                    <div className="bg-white p-2 rounded-2xl shadow-xl w-20 h-20 flex items-center justify-center border-4 border-slate-50">
                        {seloAberto.icone}
                    </div>
                </div>
                <div className="text-center px-6 pb-8">
                    <h3 className="font-black text-2xl text-slate-800 mb-2">{seloAberto.titulo}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
                        {seloAberto.desc}
                    </p>
                    <button onClick={() => setSeloAberto(null)} className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-colors">
                        Incrível! Voltar ao Painel
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* MODAL DE HISTÓRICO COMPLETO */}
      {historicoCompletoAberto && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-fade-in-up">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h2 className="font-black text-xl flex items-center gap-2"><TrendingUp className="text-blue-600" /> Histórico Pleno</h2>
                    <button onClick={() => setHistoricoCompletoAberto(false)} className="p-2 bg-slate-200 hover:bg-slate-300 rounded-full"><X size={18}/></button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
                    {history.map((h, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                         <div>
                             <span className={`text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md ${h.type === 'Avançado' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>{h.type}</span>
                             <div className="font-bold text-slate-800 mt-1">{h.date}</div>
                         </div>
                         <div className="flex flex-col items-end">
                             <span className={`font-black text-xl ${h.passed ? 'text-emerald-500' : 'text-red-500'}`}>{h.score * 10}</span>
                             <span className="text-[10px] text-slate-400 font-bold uppercase">{h.passed ? 'Passou' : 'Reprovou'}</span>
                         </div>
                     </div>
                    ))}
                    {history.length === 0 && <p className="text-center text-slate-400 font-bold">Nenhum simulado finalizado.</p>}
                </div>
            </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8">
        
        {/* Coluna Central/Esquerda: Banner e Ações */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <Medal className="text-amber-400" size={28} />
                <span className="text-blue-200 font-bold tracking-widest uppercase text-sm">Painel do Aluno</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 animate-fade-in group-hover:scale-[1.01] transition-transform">
               Painel do Especialista Microsoft
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl opacity-90">
               Central de comando para alta performance em exames MS PL-200. Seus dados e evolução em tempo real.
            </p>
              
              {!isPremium ? (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <span className="font-black text-amber-300 block text-lg">Conta Limitada (Freemium)</span>
                    <span className="text-sm text-blue-100 font-medium">Você tem acesso apenas a provas iniciantes incompletas.</span>
                  </div>
                  <button onClick={() => navigate('/')} className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-amber-900 px-6 py-3 rounded-xl font-black text-sm transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-105">Evoluir para Premium</button>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 px-6 rounded-2xl inline-flex items-center gap-3">
                    <Check className="text-emerald-400" size={24} />
                    <span className="font-bold text-white">Assinatura Premium Ativa</span>
                </div>
              )}
            </div>
            
            {/* Decorações do Banner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-10 w-40 h-40 bg-blue-400 opacity-10 rounded-full blur-2xl"></div>
            <Target className="absolute -bottom-16 -right-16 text-white opacity-10 transform rotate-12" size={300} />
          </div>

          {/* Cards de Simulados */}
          <div>
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-slate-800">
                <BookOpen className="text-blue-600" size={28} /> Central de Simulados
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full hover:border-blue-300 relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-black text-xl text-slate-800 group-hover:text-blue-700 transition-colors">Iniciante</h3>
                    <p className="text-sm text-slate-500 mt-2 font-medium">Questões conceituais. Aprenda a base e a nomenclatura MS.</p>
                  </div>
                  <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black px-3 py-1.5 rounded-lg shadow-sm">50 Q.</span>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <button onClick={() => startSimulator('iniciante')} className="w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-bold py-3 text-sm rounded-xl transition-all flex justify-center items-center gap-2 group-hover:shadow-md">
                    <Play size={18} /> Iniciar Treino
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full relative overflow-hidden">
                {!isPremium && <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-center p-4">
                  <Trophy className="text-amber-500 mb-3" size={36} />
                  <span className="font-black text-slate-800 text-lg">Bloqueado Freemium</span>
                  <span className="text-sm text-slate-500 mt-1">Exclusivo Planos Pagos</span>
                </div>}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-black text-xl text-slate-800 group-hover:text-blue-700 transition-colors">Intermediário</h3>
                    <p className="text-sm text-slate-500 mt-2 font-medium">Conceitos práticos profundos, relacionamentos e lógicas.</p>
                  </div>
                  <span className="bg-amber-50 border border-amber-100 text-amber-700 text-xs font-black px-3 py-1.5 rounded-lg shadow-sm">50 Q.</span>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 relative z-0">
                  <button onClick={() => startSimulator('intermediario')} className="w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-bold py-3 text-sm rounded-xl transition-all flex justify-center items-center gap-2">
                    <Play size={18} /> Iniciar Treino
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full relative overflow-hidden transform md:col-span-2">
                 {!isPremium && <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-center p-4">
                  <Trophy className="text-amber-400 mb-3" size={40} />
                  <span className="font-black text-white text-xl">{t('premium_exclusive')}</span>
                  <span className="text-sm text-blue-200 mt-1">{t('premium_required')}</span>
                </div>}
                <div className="flex justify-between items-start mb-6">
                  <div className="max-w-md">
                    <div className="flex items-center gap-2 mb-2">
                        <Flame className="text-orange-400" size={20} />
                        <span className="text-orange-300 font-bold text-xs tracking-wider uppercase">{t('most_chosen')}</span>
                    </div>
                    <h3 className="font-black text-2xl text-white">{t('advanced_sim')}</h3>
                    <p className="text-sm text-blue-100 mt-2 font-medium leading-relaxed">{t('advanced_desc')}</p>
                  </div>
                  <span className="bg-amber-400 text-amber-900 text-sm font-black px-4 py-2 rounded-xl shadow-md border border-amber-300">50 Q.</span>
                </div>
                <div className="mt-auto pt-5 border-t border-blue-600 relative z-0">
                  <button onClick={() => setShowModeSelector(true)} className="w-full bg-white text-blue-800 hover:bg-slate-50 hover:scale-[1.01] font-black py-4 rounded-xl transition-transform shadow-xl flex justify-center items-center gap-2 text-lg">
                    <Play size={20} fill="currentColor" /> {t('start_real_exam')}
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full relative overflow-hidden transform md:col-span-2 hover:border-blue-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="max-w-md">
                    <h3 className="font-black text-xl text-slate-800 group-hover:text-blue-700 transition-colors">{t('study_mode')}</h3>
                    <p className="text-sm text-slate-500 mt-2 font-medium leading-relaxed">{t('study_desc')}</p>
                  </div>
                  <span className="bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black px-3 py-1.5 rounded-lg shadow-sm">250+ Q.</span>
                </div>
                <div className="mt-auto pt-5 border-t border-slate-100 relative z-0">
                  <button onClick={() => startSimulator('geral', 'tutorial')} className="w-full bg-slate-800 hover:bg-slate-900 text-white font-black py-4 rounded-xl transition-all shadow-md flex justify-center items-center gap-2">
                    <BookOpen size={20} /> {t('start_study_mode')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* NOVO: Modal de Seleção de Modo para Avançado (Etapa 5) */}
          {showModeSelector && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4">
               <div className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl animate-fade-in-up">
                  <div className="p-10 text-center">
                     <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Trophy size={40} />
                     </div>
                     <h2 className="text-3xl font-black text-slate-800 mb-3">Como deseja encarar o desafio?</h2>
                     <p className="text-slate-500 font-medium mb-10">O simulado avançado possui 50 questões baseadas no peso oficial da Microsoft. Escolha sua estratégia:</p>
                     
                     <div className="grid gap-4">
                        <button 
                          onClick={() => startSimulator('avancado', 'tutorial')}
                          className="group flex items-center justify-between p-5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl transition-all text-left"
                        >
                           <div className="flex items-center gap-4">
                              <div className="p-3 bg-white rounded-xl text-slate-400 group-hover:text-blue-600 shadow-sm transition-colors">
                                 <BookOpen size={24} />
                              </div>
                              <div>
                                 <p className="font-black text-slate-800">Modo Estudo (Tutorial)</p>
                                 <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Ver resposta na hora + Explicações</p>
                              </div>
                           </div>
                           <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500" />
                        </button>

                        <button 
                          onClick={() => startSimulator('avancado', 'exam')}
                          className="group flex items-center justify-between p-5 bg-slate-900 hover:bg-black border border-slate-800 rounded-2xl transition-all text-left"
                        >
                           <div className="flex items-center gap-4">
                              <div className="p-3 bg-white/10 rounded-xl text-blue-400 shadow-sm">
                                 <Target size={24} />
                              </div>
                              <div>
                                 <p className="font-black text-white">Modo Prova Real (Exam)</p>
                                 <p className="text-xs text-blue-300 font-bold uppercase tracking-wider">Cronômetro rígido • Sem feedback imediato</p>
                              </div>
                           </div>
                           <ChevronRight size={20} className="text-white/30 group-hover:text-white" />
                        </button>
                     </div>

                     <button onClick={() => setShowModeSelector(false)} className="mt-8 text-slate-400 font-black text-xs uppercase tracking-widest hover:text-slate-600 transition-colors">Cancelar e Voltar</button>
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Coluna Direita: Microsoft Style Histórico e Gamificação */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Seção de Conquistas e Gráfico de Radar */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
             
             {/* Gráfico de Radar: Desempenho Setorial */}
             <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-black text-slate-800 flex items-center gap-2 text-sm mb-4 uppercase tracking-wider">
                    <PieChart className="text-blue-600" size={18} /> Performance por Domínio
                </h3>
                
                <div className="h-[250px] w-full">
                    {radarData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="55%" data={radarData}>
                                <PolarGrid stroke="#e2e8f0" />
                                <PolarAngleAxis dataKey="subject" tick={<RenderCustomTick />} />
                                <Radar
                                    name="Seu Desempenho"
                                    dataKey="A"
                                    stroke="#2563eb"
                                    strokeWidth={3}
                                    fill="#3b82f6"
                                    fillOpacity={0.5}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center p-4">
                            <AlertCircle size={32} className="text-slate-300 mb-2" />
                            <p className="text-xs text-slate-400 font-bold">Faça um simulado para gerar seu mapa de competências.</p>
                        </div>
                    )}
                </div>
             </div>

             <div className="flex items-center justify-between mb-5 px-1">
                <h2 className="font-black text-slate-800 flex items-center gap-2 text-lg">
                    <Award className="text-purple-600" size={22} /> Suas Conquistas
                </h2>
                <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2 py-1 rounded-md">{selos.length} Desbloqueadas</span>
             </div>
             
             <div className="grid grid-cols-3 gap-3">
                 {selos.map((s, idx) => (
                    <div key={idx} onClick={() => setSeloAberto(s)} className="flex flex-col items-center gap-1 group cursor-pointer relative">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.grad} p-0.5 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all`}>
                            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                                {s.icone}
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-600 text-center leading-tight mt-1">{s.titulo}</span>
                    </div>
                 ))}
             </div>
              <p className="text-[11px] text-center text-slate-400 font-medium mt-6 pt-4 border-t border-slate-100">Clique nos selos para visualizar detalhes e progresso.</p>
          </div>

          {/* NOVO: Ranking Global (Etapa 6.5) */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
             <div className="flex items-center justify-between mb-6">
                <h2 className="font-black text-slate-800 flex items-center gap-2 text-xl tracking-tight">
                    <Users className="text-blue-600" size={24} /> Ranking Global
                </h2>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-black px-2 py-1 rounded">TOTAL PONTOS</span>
             </div>

             <div className="space-y-4">
                {loadingRanking ? (
                    <div className="py-10 text-center animate-pulse">
                        <div className="h-4 bg-slate-100 rounded-full w-3/4 mx-auto mb-2"></div>
                        <div className="h-4 bg-slate-100 rounded-full w-1/2 mx-auto"></div>
                    </div>
                ) : ranking.length > 0 ? (
                    ranking.map((user, idx) => (
                        <div key={idx} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${idx === 0 ? 'bg-amber-50 border-amber-100 shadow-sm' : 'bg-slate-50 border-slate-100'}`}>
                            <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm
                                    ${idx === 0 ? 'bg-amber-400 text-white' : idx === 1 ? 'bg-slate-300 text-slate-700' : idx === 2 ? 'bg-orange-300 text-white' : 'bg-white text-slate-400'}
                                `}>
                                    {idx + 1}
                                </div>
                                <div>
                                    <p className="font-black text-slate-800 text-sm leading-none">{user.name}</p>
                                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">Best: {user.bestScore}%</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-black text-blue-600 text-lg leading-none">{user.points}</p>
                                <p className="text-[9px] font-black text-slate-300 uppercase">QUESTÕES</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-10 text-center text-slate-400 font-medium">
                        Aguardando competidores...
                    </div>
                )}
             </div>
             
             <p className="text-[10px] text-center text-slate-400 font-bold mt-6 italic">Em caso de empate, o maior "Best Score" prevalece.</p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
            <h2 className="font-black text-xl text-slate-800 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
              <TrendingUp className="text-blue-600" size={24} /> Desempenho PL-200
            </h2>

            {loadingHistory ? (
              <div className="text-center py-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                  <p className="text-xs text-slate-400 font-bold">Consultando banco de dados...</p>
              </div>
            ) : history.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
                  <div className="text-slate-400 mb-3"><Star size={32} className="mx-auto opacity-50" /></div>
                  <p className="text-slate-500 font-medium">Nenhum simulado finalizado ainda.</p>
                  <p className="text-xs text-slate-400 mt-1">Sua jornada começa hoje.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {history.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex flex-col gap-3 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-700 text-sm bg-slate-100 px-2 py-1 rounded-md">{h.date}</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{h.type}</span>
                    </div>
                    <div className="flex items-center gap-5 mt-1">
                      <div className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl shrink-0 ${h.passed ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                        {h.passed ? <Check className="mb-0.5" size={24} /> : <X className="mb-0.5" size={24} />}
                        <span className="text-[11px] font-black uppercase text-center leading-none">{h.passed ? 'Aprovado' : 'Falha'}</span>
                      </div>
                      <div className="flex-1 flex flex-col gap-2 w-full">
                        <div className="flex justify-between items-end">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wide">Pontuação</span>
                            <span className={`text-xl font-black ${h.passed ? 'text-emerald-600' : 'text-slate-700'}`}>{h.score * 10} / 1000</span>
                        </div>
                        <div className="h-2.5 w-full bg-slate-100 rounded-full relative overflow-hidden shadow-inner">
                          <div className={`h-full rounded-full transition-all duration-1000 ${h.passed ? 'bg-emerald-500' : 'bg-slate-400'}`} style={{ width: `${h.score}%` }}></div>
                          <div className="absolute top-0 bottom-0 left-[70%] w-1 bg-white border-l border-red-500/20 z-10" title="Nota de Corte Oficial (700 Pontos)"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {history.length > 0 && (
                <button onClick={() => setHistoricoCompletoAberto(true)} className="w-full mt-6 py-3 bg-slate-50 hover:bg-slate-100 text-blue-700 font-bold rounded-xl transition-colors text-sm border border-slate-200">
                    Ver Histórico Completo
                </button>
            )}
          </div>
        </div>
      </div>

      {/* MODAL DE CERTIFICADOS */}
      {showCertificatesModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-up border border-white/20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white relative">
                    <button 
                        onClick={() => setShowCertificatesModal(false)}
                        className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                            <Trophy size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black">Sua Galeria de Conquistas</h2>
                            <p className="text-blue-100 font-medium text-sm">Certificados oficiais de proficiência PL-200</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 max-h-[60vh] overflow-y-auto">
                    {history.filter(h => h.passed && h.score >= 80).length > 0 ? (
                        <div className="space-y-4">
                            {history.filter(h => h.passed && h.score >= 80).map((cert, i) => (
                                <div key={i} className="group p-5 bg-slate-50 hover:bg-white hover:shadow-xl rounded-3xl border border-slate-100 hover:border-blue-200 transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                            <Award className="text-blue-600" size={28} />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-800">Certificado de Especialista</p>
                                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                                                <span>{cert.date}</span>
                                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                                <span className="text-blue-600">{cert.score}% de Aproveitamento</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => generateCertificate(profile?.nickname || profile?.full_name || userEmail.split('@')[0], cert.score, cert.date)}
                                        className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-200"
                                    >
                                        <TrendingUp size={16} /> DOWNLOAD PDF
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 px-6">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                <Award size={40} />
                            </div>
                            <h3 className="text-lg font-black text-slate-800 mb-2">Nenhum certificado disponível</h3>
                            <p className="text-sm text-slate-500 font-medium max-w-xs mx-auto leading-relaxed">
                                Para conquistar seu certificado, você precisa atingir pelo menos <span className="text-blue-600 font-bold">80% de acerto</span> no Simulado Avançado (Modo Prova Real).
                            </p>
                            <button 
                                onClick={() => {
                                    setShowCertificatesModal(false);
                                    startSimulator('avancado', 'exam');
                                }}
                                className="mt-8 px-8 py-3 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                Iniciar Prova Real Agora
                            </button>
                        </div>
                    )}
                </div>
                
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Plataforma Certificada PL-200 Premium</p>
                </div>
            </div>
        </div>
      )}
      <SupportModal 
        isOpen={showSupport} 
        onClose={() => setShowSupport(false)} 
        userSession={session} 
        initialSubject={supportSubject}
      />
    </div>
  );
}
