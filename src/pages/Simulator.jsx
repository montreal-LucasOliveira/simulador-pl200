import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, Menu, X, RotateCcw, AlertCircle, Lightbulb, BookOpen, Target, Clock, Trophy, Pause, Play } from 'lucide-react';
import { questionsData } from '../questions';
import { questionsDataEn } from '../questions_en';
import { LanguageContext } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { generateCertificate } from '../utils/certificate';
import { useSearchParams } from 'react-router-dom';

export default function Simulator({ session }) {
  const { type } = useParams(); // 'iniciante', 'intermediario', 'avancado', 'geral'
  const navigate = useNavigate();
  const { language, t } = React.useContext(LanguageContext);
  
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'tutorial'; // 'tutorial' ou 'exam'
  const [showExplanation, setShowExplanation] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null); 
  const [timeExpired, setTimeExpired] = useState(false);
  const [simuladorFinalizado, setSimuladorFinalizado] = useState(false);
  const [profile, setProfile] = useState(null);
  const [paywallReached, setPaywallReached] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const userEmail = session?.user?.email || '';
  const isAdmin = userEmail === 'lucasho94@hotmail.com';
  const isPremium = profile?.is_premium || session?.user?.user_metadata?.isPremium || isAdmin;

  // Guarda de Rota (Segurança por URL)
  useEffect(() => {
    const loadSimulator = async () => {
      setLoading(true);
      
      // Buscar perfil atualizado para checar Premium
      const { data: profileData } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
      if (profileData) setProfile(profileData);

      // Redirecionamento de segurança (Shield)
      const currentPremium = profileData?.is_premium || session?.user?.user_metadata?.isPremium || isAdmin;
      if (!currentPremium && type !== 'iniciante') {
        navigate('/dashboard');
        return;
      }

      // Inicializa a prova baseada no Tipo
      let selectedQuestions = [];

      // Shuffle helper (Fisher-Yates)
      const shuffleArray = (array) => {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      };

      const sourceQuestions = language === 'en' ? questionsDataEn : questionsData;

      const getTheme = (ptQuery, enQuery) => {
        return shuffleArray(sourceQuestions.filter(q => {
          const domainMatch = q.domain.includes(ptQuery) || (enQuery && q.domain.includes(enQuery));
          const isNotBeginner = q.difficulty !== 'iniciante' && q.difficulty !== 'beginner';
          return domainMatch && isNotBeginner;
        }));
      };

      if (type === 'geral') {
        selectedQuestions = sourceQuestions; // Carrega todas (250+)
        setTimeLeft(null); // Sem limite
        
        // Busca progresso salvo no banco
        const { data: progressData } = await supabase
          .from('study_progress')
          .select('*')
          .eq('user_id', session.user.id)
          .single();
          
        if (progressData) {
          setProgress(progressData.answers || {});
          setCurrentQuestionIndex(progressData.last_question_index || 0);
        }
      } else if (type === 'avancado') {
        // Algoritmo de Pesos Oficiais PL-200 (Prova de 50 questoes)
        // Dataverse: 12, P.Apps: 10, Automate: 10, Pages/BI: 10, Agents/Env: 8
        const pDataverse = getTheme("Dataverse", "Dataverse").slice(0, 12);
        const pApps = getTheme("Aplicativos do Microsoft Power", "Microsoft Power Apps").slice(0, 10);
        const pAutomate = getTheme("Automate", "Power Automate").slice(0, 10);
        const pPagesBI = getTheme("Power BI", "Power BI").concat(getTheme("Pages", "Power Pages")).slice(0, 10);
        const pAgentsEnv = getTheme("Chatbot", "Copilot Studio").concat(getTheme("Ambiente", "Environments")).slice(0, 8);
        
        let basePool = [...pDataverse, ...pApps, ...pAutomate, ...pPagesBI, ...pAgentsEnv];
        
        // Fallback pra garantir 50
        if(basePool.length < 50) {
           const diff = 50 - basePool.length;
           const alreadyInIds = new Set(basePool.map(q => q.id));
           const others = shuffleArray(sourceQuestions.filter(q => !alreadyInIds.has(q.id) && q.difficulty !== 'iniciante' && q.difficulty !== 'beginner'));
           basePool = [...basePool, ...others.slice(0, diff)];
        }
        basePool = shuffleArray(basePool); // Randomiza a ordem pra prova
        
        selectedQuestions = basePool;
        setTimeLeft(7200); 
      } else {
        // Filtrar por dificuldade (Iniciante / Intermediario normal)
        let difficultyFilter = type;
        const filtered = sourceQuestions.filter(q => 
          q.difficulty === difficultyFilter || 
          (difficultyFilter === 'iniciante' && q.difficulty === 'beginner') ||
          (difficultyFilter === 'intermediario' && q.difficulty === 'intermediate')
        );
        selectedQuestions = shuffleArray(filtered).slice(0, 50);
        
        if(selectedQuestions.length < 50) {
            const others = shuffleArray(sourceQuestions.filter(q => 
                q.difficulty !== difficultyFilter && 
                !(difficultyFilter === 'iniciante' && q.difficulty === 'beginner') &&
                !(difficultyFilter === 'intermediario' && q.difficulty === 'intermediate')
            ));
            selectedQuestions = [...selectedQuestions, ...others.slice(0, 50 - selectedQuestions.length)];
        }
        setTimeLeft(7200); 
      }


      setQuestions(selectedQuestions);
      setLoading(false);
    };

    loadSimulator();
  }, [type, session.user.id, isAdmin, navigate]);

  // Proteção Anti-Cópia (Etapa 5)
  useEffect(() => {
    const preventActions = (e) => {
      e.preventDefault();
      // alert("Proteção de Conteúdo: A cópia e o menu de contexto estão desativados neste simulador.");
    };

    document.addEventListener('contextmenu', preventActions);
    document.addEventListener('copy', preventActions);
    
    return () => {
      document.removeEventListener('contextmenu', preventActions);
      document.removeEventListener('copy', preventActions);
    };
  }, []);

  // Cronometro Logic
  useEffect(() => {
    if (timeLeft === null || simuladorFinalizado || isPaused) return;

    if (timeExpired && type === 'avancado') return; // Para no avancado

    const timerInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (timeExpired) return prev + 1; // Contagem crescente
        if (prev <= 1) return 0; // Segura no 0 pro useEffect disparar o alerta
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft, simuladorFinalizado, timeExpired, isPaused, type]);

  // Disparador de Alerta de Tempo
  useEffect(() => {
    if (timeLeft === 0 && !timeExpired) {
      handleTimeExpiration();
    }
  }, [timeLeft, timeExpired]);

  const handleTimeExpiration = () => {
    setTimeExpired(true);
    if (type === 'avancado') {
      // Auto submit no avancado
      finalizarSimulado();
      alert("Tempo Esgotado! Seu simulado foi submetido automaticamente.");
    } else {
      // Iniciante e Intermediario apenas muda cor do relogio
      alert("Seu tempo ideal acabou! O cronômetro ficará vermelho, mas você pode continuar para fins didáticos.");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Restaura opcao atual se ja foi respondida
  useEffect(() => {
    if(!currentQuestion) return;
    
    // Verificacao Paywall
    if (!isPremium && type === 'iniciante' && currentQuestionIndex >= 25) {
      setPaywallReached(true);
      return;
    } else {
      setPaywallReached(false);
    }

    const answeredData = progress[currentQuestion.id];
    if (answeredData) {
      setSelectedOption(answeredData.selectedOption);
      // No modo Prova Real (exam), NUNCA mostramos a explicação durante o teste
      setShowExplanation(mode === 'exam' ? false : true);
    } else {
      setSelectedOption(null);
      setShowExplanation(false);
    }
  }, [currentQuestionIndex, progress, currentQuestion, isPremium, type, mode]);

  const handleOptionSelect = (index) => {
    if ((showExplanation && mode === 'tutorial') || paywallReached || simuladorFinalizado || timeExpired || isPaused) return;
    setSelectedOption(index);
  };

  // Keyboard Shortcuts (UX)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showExplanation || paywallReached || simuladorFinalizado || timeExpired || isPaused) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        const optionIndex = parseInt(e.key) - 1;
        if (currentQuestion?.options[optionIndex]) {
          handleOptionSelect(optionIndex);
        }
      } else if (e.key === 'Enter') {
        if (selectedOption !== null && !showExplanation) {
          handleVerify();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showExplanation, paywallReached, simuladorFinalizado, currentQuestion, selectedOption, timeExpired, mode]);

  const handleVerify = () => {
    if (selectedOption === null || paywallReached || simuladorFinalizado) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    setProgress(prev => ({
      ...prev,
      [currentQuestion.id]: {
        selectedOption,
        isCorrect
      }
    }));

    // No modo Prova Real, avançamos direto sem mostrar a explicação
    if (mode === 'exam') {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            finalizarSimulado();
        }
    } else {
        setShowExplanation(true);
    }

    // Persistência Se for Modo Geral (Salva no Banco de Dados)
    if (type === 'geral') {
      const updateDB = async () => {
          const newProgress = {
            ...progress,
            [currentQuestion.id]: {
              selectedOption,
              isCorrect
            }
          };

          const { error } = await supabase
            .from('study_progress')
            .upsert({
              user_id: session.user.id,
              last_question_index: currentQuestionIndex,
              answers: newProgress,
              updated_at: new Date().toISOString()
            });
          
          if (error) console.error("Erro ao salvar progresso:", error);
      };
      updateDB();
    }
  };

  const resetProgressGeral = async () => {
    if (!window.confirm('Tem certeza que deseja zerar sua evolução no Modo Geral e começar do zero?')) return;
    
    const { error } = await supabase
      .from('study_progress')
      .delete()
      .eq('user_id', session.user.id);
    
    if (error) {
       alert("Erro ao zerar progresso.");
    } else {
       setProgress({});
       setCurrentQuestionIndex(0);
       alert("Progresso zerado com sucesso!");
    }
  };

  const finalizarSimulado = () => {
    setSimuladorFinalizado(true);
    
    // Calcula nota
    const answeredKeysCount = Object.keys(progress).length;
    const correctAnswersCount = Object.keys(progress).filter(key => progress[key].isCorrect).length;
    const percentageScore = questions.length > 0 ? Math.round((correctAnswersCount / questions.length) * 100) : 0;
    const isPassed = percentageScore >= 70; // Corte padrão Microsoft

    // Cálculo de estatísticas por domínio (Etapa 3)
    const statsByDomain = {};
    questions.forEach(q => {
        const domainName = q.domain || "Outros";
        if (!statsByDomain[domainName]) {
            statsByDomain[domainName] = { correct: 0, total: 0 };
        }
        statsByDomain[domainName].total += 1;
        if (progress[q.id]?.isCorrect) {
            statsByDomain[domainName].correct += 1;
        }
    });
    
    // Salvamento em Nuvem (Supabase)
    const salvarResultado = async () => {
        const { error } = await supabase
            .from('simulator_history')
            .insert({
                user_id: session.user.id,
                exam_type: type,
                score: percentageScore,
                passed: isPassed,
                total_questions: questions.length,
                correct_answers: correctAnswersCount,
                domain_stats: statsByDomain
            });
        
        if (error) console.error("Erro ao salvar:", error);
        
        setFinalScore(percentageScore);
        setIsReviewing(true);
    };

    salvarResultado();
  };

  // Formatador de relógio (MM:SS)
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if(h > 0) return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Melhoria de espaçamento inteligente (Parser Textual)
  const formatQuestionText = (text) => {
    if (!text) return text;
    let formatted = text
      .replace(/\] Cenario:/gi, ']\nCenário:') // Casos de bracket
      .replace(/(?<=\? )|(?<=:\s)/g, '\n\n') // Adiciona quebra após dois pontos ou interrogação
      .replace(/\s?- /g, '\n  • ') // transforma  hífens soltos em bullets
      .replace(/(Você precisa |Qual |Como você |O que você |Como deve |Selecione |Por que |Qual a )/g, '\n$1') // quebra quando tem diretiva de ação
      .replace(/\n\n+/g, '\n\n')
      .trim();
    return formatted;
  };

  if (loading || !currentQuestion) {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-slate-50 gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <p className="font-black text-slate-400 animate-pulse uppercase tracking-[0.2em] text-xs">Carregando Simulado de Alta Performance...</p>
        </div>
    );
  }

  // Estatísticas ao vivo
  const answeredKeys = Object.keys(progress);
  const totalAnswered = answeredKeys.length;
  const correctCount = answeredKeys.filter(key => progress[key].isCorrect).length;

  // ICONES LOCAIS (PARA EVITAR ERRO DE IMPORT NÃO ENCONTRADO)
  const ListChecks = (props) => <CheckCircle2 {...props} />;
  const ArrowLeft = (props) => <ChevronLeft {...props} />;
  const Check = (props) => <CheckCircle2 {...props} />;

  return (
    <div className={`flex h-screen bg-slate-50 font-sans text-slate-800 no-copy ${isReviewing ? 'overflow-hidden' : ''}`}>
      
      {/* SIDEBAR */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-blue-700 text-white">
          <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 hover:bg-blue-600 px-2 py-1 rounded transition-colors text-sm font-bold">
            <ChevronLeft size={16} /> Voltar
          </button>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <div className="flex justify-between items-end mb-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Respondidas</span>
              <span className="text-sm font-black text-slate-700">{totalAnswered} / {questions.length}</span>
            </div>
            
            <div className={`flex flex-col items-end text-right ${mode === 'exam' && !simuladorFinalizado ? 'hidden' : ''}`}>
                <span className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Acertos</span>
                <span className="text-xl font-black text-emerald-600 leading-none">
                    {totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0}%
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase mt-0.5">
                    ({correctCount} de {totalAnswered})
                </span>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${(totalAnswered / questions.length) * 100}%` }}></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {questions.map((q, idx) => {
            const isAnswered = progress[q.id];
            const isCorrect = isAnswered?.isCorrect;
            const isCurrent = currentQuestionIndex === idx;
            const isLocked = !isPremium && type === 'iniciante' && idx >= 25;

            return (
              <button
                key={q.id}
                onClick={() => {
                  if(!isLocked) {
                    setCurrentQuestionIndex(idx);
                    setSidebarOpen(false);
                  } else {
                    setPaywallReached(true);
                  }
                }}
                className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-colors 
                    ${isLocked ? 'opacity-50 bg-slate-100 cursor-not-allowed' :
                    isCurrent ? 'bg-blue-50 border border-blue-200 shadow-sm' : 
                    'hover:bg-slate-100 border border-transparent'}`}
              >
                <div className="flex flex-col">
                  <span className={`text-sm font-bold ${isCurrent ? 'text-blue-700' : 'text-slate-700'}`}>
                    Questão {idx + 1}
                  </span>
                </div>
                {isAnswered && !isLocked && (
                  (mode === 'exam' && !simuladorFinalizado) ? (
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  ) : (
                    isCorrect ? <CheckCircle2 size={16} className="text-emerald-500" /> : <XCircle size={16} className="text-red-500" />
                  )
                )}
              </button>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-200">
          <button
            onClick={finalizarSimulado}
            disabled={simuladorFinalizado}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-white bg-slate-800 hover:bg-slate-900 shadow-md rounded-xl font-bold transition-all disabled:opacity-50"
          >
            <CheckCircle2 size={18} />
            Finalizar Simulado
          </button>
          
          {type === 'geral' && (
            <button
              onClick={resetProgressGeral}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 mt-2 text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 rounded-xl font-bold transition-all"
            >
              <RotateCcw size={18} />
              Zerar Estudo Geral
            </button>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative no-copy">
        
        {/* TELA DE REVISÃO FINAL (Etapa 5) */}
        {isReviewing && (
          <div className="absolute inset-0 z-[60] bg-slate-50 overflow-y-auto animate-fade-in no-copy">
             <div className="max-w-4xl mx-auto px-6 py-12 pb-40">
                <div className="bg-white rounded-[3rem] p-12 text-center shadow-xl border border-slate-200 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Trophy size={200} /></div>

                    <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center text-white shadow-lg ${finalScore >= 70 ? 'bg-emerald-500' : 'bg-red-500'}`}>
                        {finalScore >= 70 ? <Trophy size={48} /> : <Target size={48} />}
                    </div>
                    
                    <h1 className="text-4xl font-black text-slate-900 mb-2">Relatório de Desempenho</h1>
                    <p className="text-slate-500 font-medium mb-8 uppercase tracking-widest text-xs">Simulado {type} • Modo {mode === 'exam' ? 'Prova Real' : 'Estudo'}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Nota Final</p>
                            <p className={`text-3xl font-black ${finalScore >= 70 ? 'text-emerald-600' : 'text-red-600'}`}>
                                {finalScore * 10} <span className="text-sm font-bold text-slate-400">/ 1000</span>
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Status</p>
                            <p className={`text-[10px] font-black p-1 rounded-lg ${finalScore >= 70 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                {finalScore >= 70 ? 'APROVADO' : 'REPROVADO'}
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Acertos</p>
                            <p className="text-3xl font-black text-slate-800">{correctCount}</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total</p>
                            <p className="text-3xl font-black text-slate-800">{questions.length}</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => navigate('/dashboard')}
                            className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-black transition-all shadow-lg flex items-center gap-2 text-sm"
                        >
                            <ArrowLeft size={18} /> Voltar ao Painel
                        </button>
                        
                        {finalScore >= 80 && mode === 'exam' && (
                            <button 
                                onClick={() => generateCertificate(profile?.full_name || userEmail.split('@')[0], finalScore, new Date().toLocaleDateString())}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center gap-2 text-sm"
                            >
                                <Trophy size={18} /> Baixar Certificado PDF
                            </button>
                        )}
                        
                        <button 
                            onClick={() => {
                                const el = document.getElementById('detalhes-revisao');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 bg-white text-slate-600 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-2 text-sm"
                        >
                            <BookOpen size={18} /> Revisar Questões
                        </button>
                    </div>
                </div>

                <div id="detalhes-revisao" className="space-y-8 no-copy pb-32">
                    <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                        <ListChecks size={28} className="text-blue-600" /> Revisão de Questões
                    </h2>
                    {questions.map((q, idx) => {
                        const answer = progress[q.id];
                        const isCorrect = answer?.isCorrect;
                        return (
                            <div key={idx} className={`bg-white rounded-3xl border ${isCorrect ? 'border-emerald-100' : 'border-red-100'} shadow-sm overflow-hidden`}>
                                <div className={`px-6 py-4 flex justify-between items-center ${isCorrect ? 'bg-emerald-50' : 'bg-red-50'}`}>
                                    <span className="font-black text-slate-800 text-sm">Questão {idx + 1}</span>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black ${isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-red-200 text-red-800'}`}>
                                        {isCorrect ? 'ACERTO' : 'ERRO'}
                                    </span>
                                </div>
                                <div className="p-8">
                                    <p className="font-medium text-slate-800 mb-6 leading-relaxed whitespace-pre-wrap text-base no-copy">{formatQuestionText(q.text)}</p>
                                    
                                    <div className="space-y-3 mb-8">
                                        {q.options.map((opt, i) => (
                                            <div key={i} className={`p-4 rounded-xl border flex items-center gap-4 ${
                                                i === q.correctAnswer ? 'border-emerald-500 bg-emerald-50' :
                                                i === answer?.selectedOption && !isCorrect ? 'border-red-500 bg-red-50' :
                                                'border-slate-100 opacity-60'
                                            }`}>
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                                    i === q.correctAnswer ? 'bg-emerald-500 border-emerald-500' :
                                                    i === answer?.selectedOption ? 'bg-red-500 border-red-500' : 'border-slate-300'
                                                }`}>
                                                    {i === q.correctAnswer && <Check size={12} className="text-white" />}
                                                    {i === answer?.selectedOption && !isCorrect && <X size={12} className="text-white" />}
                                                </div>
                                                <span className="text-sm font-bold text-slate-700">{opt}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                                        <h4 className="font-black text-blue-900 mb-1 flex items-center gap-2 text-sm">
                                            <Lightbulb size={18} /> Explicação Detalhada
                                        </h4>
                                        <div className="space-y-4">
                                            {typeof q.explanation === 'string' ? (
                                                <p className="text-sm text-slate-600 leading-relaxed no-copy">{q.explanation}</p>
                                            ) : (
                                                <>
                                                    {q.explanation?.papoReto && (
                                                        <div className="bg-white/60 p-4 rounded-xl border border-blue-100/50">
                                                            <p className="text-xs font-black text-blue-800 uppercase mb-2">Papo Reto</p>
                                                            <p className="text-sm text-slate-600 leading-relaxed no-copy">{q.explanation.papoReto}</p>
                                                        </div>
                                                    )}
                                                    {q.explanation?.puloDoGato && (
                                                        <div className="bg-amber-100/30 p-4 rounded-xl border border-amber-100">
                                                            <p className="text-xs font-black text-amber-800 uppercase mb-2">Pulo do Gato</p>
                                                            <p className="text-sm text-amber-900/80 leading-relaxed no-copy">{q.explanation.puloDoGato}</p>
                                                        </div>
                                                    )}
                                                    {q.explanation?.cascasDeBanana && (
                                                        <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
                                                            <p className="text-xs font-black text-red-800 uppercase mb-2">Cascas de Banana</p>
                                                            <div className="space-y-2">
                                                                {Array.isArray(q.explanation.cascasDeBanana) ? (
                                                                    q.explanation.cascasDeBanana.map((item, i) => (
                                                                        <p key={i} className="text-[13px] text-red-900/70 leading-relaxed no-copy">• {item}</p>
                                                                    ))
                                                                ) : (
                                                                    <p className="text-[13px] text-red-900/70 leading-relaxed no-copy">• {q.explanation.cascasDeBanana}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                    {q.explanation?.dicaOuro && (
                                                        <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-4 rounded-xl border border-amber-200">
                                                            <p className="text-xs font-black text-amber-700 uppercase mb-1 flex items-center gap-2">
                                                                <Trophy size={14} /> Dica de Ouro
                                                            </p>
                                                            <p className="text-sm text-amber-900 font-bold leading-relaxed no-copy">{q.explanation.dicaOuro}</p>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
             </div>
          </div>
        )}

        {/* Top Navbar Context */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-slate-200 shadow-sm z-10 relative">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="text-slate-600 md:hidden bg-slate-100 p-2 rounded-lg">
              <Menu size={20} />
            </button>
            <div>
              <h2 className="font-bold text-slate-800 flex items-center gap-2 capitalize">
                <Target className="text-blue-600" size={20} /> 
                Simulado {type} {mode === 'exam' && <span className="text-[10px] bg-slate-800 text-white px-2 py-0.5 rounded ml-2 uppercase tracking-tighter shadow-sm font-black">PROVA REAL</span>}
              </h2>
            </div>
          </div>
          
          {/* Cronometro */}
          {timeLeft !== null && (
            <div className={`flex items-center gap-2 font-mono font-bold text-lg px-4 py-1.5 rounded-full border shadow-sm transition-colors
                ${timeExpired ? 'bg-red-50 text-red-600 border-red-200' : 'bg-slate-50 text-slate-700 border-slate-200'}
            `}>
                <Clock size={18} />
                {formatTime(timeLeft)}
            </div>
          )}

          <button 
            onClick={() => setIsPaused(!isPaused)}
            className={`p-2 rounded-lg border transition-all ${isPaused ? 'bg-amber-100 border-amber-300 text-amber-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}
          >
            {isPaused ? <Play size={20} fill="currentColor" /> : <Pause size={20} fill="currentColor" />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-32 md:pb-40 relative no-copy">
          
          {isPaused && (
            <div className="absolute inset-0 z-[55] bg-white/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-amber-100 p-6 rounded-full mb-6 text-amber-600 shadow-inner animate-pulse"><Pause size={48} /></div>
                <h2 className="text-3xl font-black text-slate-800 mb-2">Simulado Pausado</h2>
                <p className="text-slate-600 max-w-sm mb-8">Pausar é importante, mas o foco agora é sua certificação. Clique abaixo para continuar.</p>
                <button onClick={() => setIsPaused(false)} className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform">RETOMAR AGORA</button>
            </div>
          )}

          {paywallReached ? (
            <div className="max-w-2xl mx-auto mt-20 p-8 bg-white border border-slate-200 rounded-3xl shadow-xl text-center">
                <Target size={64} className="text-amber-500 mx-auto mb-6" />
                <h2 className="text-3xl font-black text-slate-800 mb-4">Limite Gratuito Atingido</h2>
                <p className="text-slate-600 text-lg mb-8 font-medium">As próximas questões fazem parte do conjunto Premium do simulador. Não pare agora, você está no caminho da aprovação!</p>
                <button onClick={() => navigate('/')} className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg w-full py-4 rounded-xl font-bold transition-colors">
                    Fazer Meu Upgrade Para Premium
                </button>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
                {/* Header da Questão */}
                <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-black rounded-full uppercase tracking-wider">
                        Questão {currentQuestionIndex + 1} de {questions.length}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-tight">
                        {currentQuestion.domain || 'Microsoft Power Platform'}
                    </span>
                </div>
                <div className="text-[1.15rem] text-slate-800 whitespace-pre-wrap leading-relaxed font-medium no-copy">
                    {formatQuestionText(currentQuestion.text)}
                </div>
                </div>

                {/* Opções */}
                <div className="space-y-3 mb-8 no-copy">
                {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrectAnswer = currentQuestion.correctAnswer === idx;

                    let optionClasses = "w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-4 ";

                    if (!showExplanation) {
                    optionClasses += isSelected
                        ? "border-blue-500 bg-blue-50 shadow-md transform scale-[1.01]"
                        : "border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm";
                    } else {
                    if (isCorrectAnswer) {
                        optionClasses += "border-emerald-500 bg-emerald-50";
                    } else if (isSelected && !isCorrectAnswer) {
                        optionClasses += "border-red-500 bg-red-50";
                    } else {
                        optionClasses += "border-slate-100 bg-white opacity-40";
                    }
                    }

                    return (
                    <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        disabled={showExplanation || simuladorFinalizado}
                        className={optionClasses}
                    >
                        <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-sm 
                        ${!showExplanation && isSelected ? "border-blue-500 bg-blue-500" :
                        showExplanation && isCorrectAnswer ? "border-emerald-500 bg-emerald-500" :
                            showExplanation && isSelected ? "border-red-500 bg-red-500" :
                            "border-slate-300 bg-white"
                        }`}>
                        {!showExplanation && isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                        {showExplanation && (isCorrectAnswer ? <Check size={14} className="text-white" /> : isSelected && <X size={14} className="text-white" />)}
                        </div>
                        <span className={`text-base font-bold leading-snug no-copy ${showExplanation && isCorrectAnswer ? 'text-emerald-900' : 'text-slate-700'}`}>
                        {option}
                        </span>
                    </button>
                    );
                })}
                </div>

                {/* Ações / Explicação */}
                {(!showExplanation || mode === 'exam') && (
                <button
                    onClick={handleVerify}
                    disabled={selectedOption === null || simuladorFinalizado}
                    className={`py-4 px-10 rounded-2xl font-black text-white shadow-xl transition-all ${selectedOption !== null
                    ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-2xl translate-y-0 transform hover:-translate-y-1'
                    : 'bg-slate-300 opacity-50 cursor-not-allowed'
                    }`}
                >
                    {mode === 'exam' ? (currentQuestionIndex === questions.length - 1 ? 'Finalizar Prova Real' : 'Próxima Questão') : 'Confirmar Resposta'}
                </button>
                )}

                {showExplanation && mode !== 'exam' && (
                <div className="animate-fade-in-up mt-8 border-t border-slate-200 pt-8 pb-10 no-copy">
                    
                    <div className={`p-5 rounded-2xl mb-8 flex items-center gap-4 font-black text-xl shadow-lg
                        ${selectedOption === currentQuestion.correctAnswer
                        ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white'
                        : 'bg-gradient-to-r from-red-400 to-red-500 text-white'
                        }`}>
                    {selectedOption === currentQuestion.correctAnswer ? (
                        <><Check size={32} /> ACERTO EXATO!</>
                    ) : (
                        <><X size={32} /> VOCÊ ERROU</>
                    )}
                    </div>

                    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden mb-10">
                        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
                            <BookOpen className="text-blue-600" size={24} />
                            <h3 className="font-black text-slate-800 text-xl">Análise da Questão</h3>
                        </div>

                        <div className="p-6 space-y-6 text-slate-700">
                            {typeof currentQuestion.explanation === 'string' ? (
                                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                                    <p className="whitespace-pre-wrap leading-relaxed no-copy font-medium">{currentQuestion.explanation}</p>
                                </div>
                            ) : (
                                <>
                                    {/* Introdução ao Cenário */}
                                    {currentQuestion.explanation?.intro && (
                                        <div className="px-2 mb-2 italic text-slate-500 font-medium leading-relaxed">
                                            {currentQuestion.explanation.intro}
                                        </div>
                                    )}

                                    {/* Papo Reto (Resumo) */}
                                    {currentQuestion.explanation?.papoReto && (
                                    <div className="bg-blue-50 shadow-sm p-6 rounded-2xl border border-blue-100">
                                        <h4 className="font-black text-blue-900 flex items-center gap-2 mb-3">
                                            <Target size={20} className="text-blue-600" /> Traduzindo para o "Papo Reto"
                                        </h4>
                                        <p className="whitespace-pre-wrap leading-relaxed no-copy font-medium text-slate-700">{currentQuestion.explanation.papoReto}</p>
                                    </div>
                                    )}

                                    {/* Pulo do Gato (Por que esta é a certa?) */}
                                    {currentQuestion.explanation?.puloDoGato && (
                                    <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200">
                                        <h4 className="font-black text-amber-900 flex items-center gap-2 mb-3">
                                            <Lightbulb size={20} className="text-amber-600" /> O Pulo do Gato (Por que essa é a certa?)
                                        </h4>
                                        <p className="whitespace-pre-wrap leading-relaxed no-copy font-medium text-amber-900/80">{currentQuestion.explanation.puloDoGato}</p>
                                    </div>
                                    )}

                                    {/* Cascas de Banana (Por que as outras estão erradas?) */}
                                    {currentQuestion.explanation?.cascasDeBanana && (
                                    <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                        <h4 className="font-black text-red-900 flex items-center gap-2 mb-3">
                                            <AlertCircle size={20} className="text-red-600" /> Cascas de Banana (Por que as outras estão erradas?)
                                        </h4>
                                        <div className="space-y-3">
                                            {Array.isArray(currentQuestion.explanation.cascasDeBanana) ? (
                                                currentQuestion.explanation.cascasDeBanana.map((item, i) => (
                                                    <div key={i} className="flex gap-3 text-red-900/70 font-medium text-sm">
                                                        <span className="text-red-400 mt-0.5">•</span>
                                                        <p className="no-copy">{item}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-red-900/70 font-medium text-sm no-copy">{currentQuestion.explanation.cascasDeBanana}</p>
                                            )}
                                        </div>
                                    </div>
                                    )}

                                    {/* Dica de Ouro (Conselho Final) */}
                                    {currentQuestion.explanation?.dicaOuro && (
                                    <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm">
                                        <h4 className="font-black text-amber-900 mb-2 flex items-center gap-2">
                                            <Trophy size={20} className="text-amber-600" /> Dica de Ouro para a prova:
                                        </h4>
                                        <p className="text-amber-900 font-bold text-lg leading-relaxed no-copy">{currentQuestion.explanation.dicaOuro}</p>
                                    </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Botão de Próxima Questão no Modo Tutorial */}
                    {currentQuestionIndex < questions.length - 1 && (
                        <button 
                            onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                            className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-black shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group"
                        >
                            PRÓXIMA QUESTÃO <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    )}
                </div>
                )}

            </div>
          )}

            {/* Navigation Floater Bottom */}
          {!paywallReached && mode !== 'exam' && (
            <div className="fixed bottom-0 left-0 right-0 md:left-72 bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
                <div className="max-w-3xl mx-auto flex justify-between items-center">
                    <button
                        onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                        disabled={currentQuestionIndex === 0}
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 px-4 py-2 rounded-xl disabled:opacity-30 transition-all font-bold text-xs"
                    >
                        <ArrowLeft size={16} /> QUESTÃO ANTERIOR
                    </button>

                    <button
                    onClick={() => {
                        if (currentQuestionIndex < questions.length - 1) {
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                            const mainContent = document.querySelector('.flex-1.overflow-y-auto');
                            if(mainContent) mainContent.scrollTo({ top: 0, behavior: 'auto' });
                        } else {
                            finalizarSimulado();
                        }
                    }}
                    disabled={!progress[currentQuestion.id] && !showExplanation} 
                    className="flex items-center gap-2 py-3 px-8 bg-slate-900 hover:bg-black disabled:bg-slate-300 text-white rounded-xl font-black shadow-lg transition-all text-xs"
                    >
                    {currentQuestionIndex < questions.length - 1 ? 'PRÓXIMA QUESTÃO' : 'FINALIZAR SIMULADO'} <ChevronRight size={16} />
                    </button>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
