import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, CheckCircle2, ChevronRight, Zap, Trophy, Shield, Users, BarChart3, Loader2, MessageSquare, ShieldCheck } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SupportModal from '../components/SupportModal';

export default function LandingPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showSupport, setShowSupport] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      if (isSignUp) {
        // Validação de Senha (Mín 6 chars, Letras e Números)
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
        if (!passwordRegex.test(password)) {
          throw new Error('A senha deve ter no mínimo 6 caracteres e conter letras e números.');
        }

        // Gerar apelido aleatório inicial
        const randomNum = Math.floor(Math.random() * 9000) + 1000;
        const generatedNickname = `Aluno_${randomNum}`;

        const { data, error } = await supabase.auth.signUp({ 
            email, 
            password,
            options: {
                emailRedirectTo: window.location.origin, // Força o link de e-mail a voltar para o site atual
                data: {
                    isPremium: true, // Modo de Teste: Ativando Premium para todos
                    nickname: generatedNickname
                }
            }
        });
        if (error) throw error;

        // Se a confirmação de e-mail estiver desativada no Supabase, 'data.session' existirá
        if (data.session) {
            navigate('/dashboard');
        } else {
            alert('Cadastro realizado! Verifique seu e-mail para confirmar o acesso.');
            setIsSignUp(false);
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/dashboard');
      }
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-200">
      {/* Header Corporativo */}
      <header className="bg-slate-900 text-white p-4 sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Target size={24} className="text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                PL-200 Premium
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Avaliações</a>
            <button 
              onClick={() => setShowSupport(true)}
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <MessageSquare size={16} /> Suporte
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (Acima da Dobra) */}
      <div className="relative overflow-hidden bg-slate-50 pt-16 pb-24 md:pt-24 md:pb-32 border-b border-slate-200">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 text-xs font-black tracking-widest uppercase mb-6">
                <Zap size={14} className="text-amber-500" fill="currentColor" /> Plataforma de Alta Performance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] mb-6 text-slate-900 tracking-tight">
              Aprove de Primeira na Certificação <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Microsoft PL-200</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl">
              Nossa plataforma não é apenas um simulador estático. É um <strong className="text-slate-800">simulador dinâmico de alta performance</strong> alimentado por 300 questões reais e categorizadas, gamificação e métricas oficiais que imitam o ambiente real da prova.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 font-bold text-slate-700 bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><CheckCircle2 size={20} /></div>
                <span>300 Questões Focadas</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-slate-700 bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><BarChart3 size={20} /></div>
                <span>Dashboard Analytics M365</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-slate-700 bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Shield size={20} /></div>
                <span>Nivelamento (Iniciante ao Avançado)</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-slate-700 bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Trophy size={20} /></div>
                <span>Sistema de Gamificação e Selos</span>
              </div>
            </div>
          </div>
          
          {/* Caixa Suspensa de Autenticação */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-20 animate-pulse"></div>
            <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl border border-slate-100 relative">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-black text-slate-900 mb-2">
                    {isSignUp ? 'Crie sua Conta' : 'Acesse seu Portal'}
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                    {isSignUp ? 'Inicie sua jornada rumo à aprovação.' : 'Faça login para continuar seus estudos.'}
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold rounded-xl animate-shake">
                    ⚠️ {errorMsg}
                </div>
              )}

              <form onSubmit={handleAuth} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">E-mail de Cadastro</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-800"
                    placeholder="ex: voce@empresa.com"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Senha Secreta</label>
                    <button 
                      type="button"
                      onClick={() => navigate('/reset-password')}
                      className="text-xs text-blue-600 font-bold hover:underline"
                    >
                      Esqueci
                    </button>
                  </div>
                  <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-800"
                    placeholder="••••••••"
                  />
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl mt-6 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin" /> : (isSignUp ? 'CADASTRAR AGORA' : 'ENTRAR')} <ChevronRight size={22} />
                </button>
                <div className="text-center mt-6 pt-6 border-t border-slate-100">
                  <span className="text-sm text-slate-500 font-medium">
                    {isSignUp ? 'Já possui conta?' : 'Ainda não é assinante?'}
                  </span> 
                  <button 
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-blue-700 font-black hover:underline ml-1"
                  >
                    {isSignUp ? 'Fazer Login' : 'Criar Conta Grátis'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>

      {/* Social Proof & Depoimentos */}
      <div id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Aprovados pela comunidade técnica</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Nossos alunos reduzem em até 60% o tempo técnico de preparação usando nosso motor inteligente de provas.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex gap-1 mb-4 text-amber-400"><Target size={20} fill="currentColor" /><Target size={20} fill="currentColor" /><Target size={20} fill="currentColor" /></div>
                <p className="text-slate-700 font-medium italic mb-6">"O simulador cobriu exatamente os gaps que eu tinha em Dataverse Security Roles. A plataforma não te deixa apenas errar, ela humilha suas dúvidas mostrando a documentação nas caixas de papo-reto de cada revisão."</p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center font-bold text-indigo-800">CJ</div>
                    <div>
                        <div className="font-bold text-slate-900 text-sm">Carlos Junior</div>
                        <div className="text-xs text-slate-500 font-medium">Consultor Dynamics 365</div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transform md:-translate-y-4 shadow-xl border-blue-100 ring-4 ring-blue-50">
                <div className="flex gap-1 mb-4 text-amber-400"><Target size={20} fill="currentColor" /><Target size={20} fill="currentColor" /><Target size={20} fill="currentColor" /></div>
                <p className="text-slate-700 font-medium italic mb-6">"Fiz a PL-200 semana passada e acertei 840/1000. O nível Avançado do simulador é 100% fiel à tensão do cronômetro real. A gamificação me fez estudar 15 dias seguidos."</p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center font-bold text-emerald-800">MT</div>
                    <div>
                        <div className="font-bold text-slate-900 text-sm">Mariana Telles</div>
                        <div className="text-xs text-slate-500 font-medium">Arquiteta Power Platform</div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex gap-1 mb-4 text-amber-400"><Target size={20} fill="currentColor" /><Target size={20} fill="currentColor" /><Target size={20} fill="currentColor" /></div>
                <p className="text-slate-700 font-medium italic mb-6">"Eu usava PDFs pirateados pra estudar antes e só me confundia. Usar esse SaaS com o histórico de aprovação simulado estilo Microsoft Learn me deu a métrica que eu precisava para saber quando agendar a prova."</p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center font-bold text-orange-800">RD</div>
                    <div>
                        <div className="font-bold text-slate-900 text-sm">Rafael Dantas</div>
                        <div className="text-xs text-slate-500 font-medium">Analista Cidadão (Low-Code)</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-center text-sm font-medium">
        <p>© {new Date().getFullYear()} PL-200 Premium SaaS. Simulador focado na certificação Power Platform Funcional Consultant.</p>
        <div className="mt-4 flex justify-center gap-6 text-slate-600">
          <button onClick={() => setShowSupport(true)} className="hover:text-blue-400 flex items-center gap-2">
            <MessageSquare size={14} /> Fale Conosco & Suporte
          </button>
          <span>|</span>
          <p>Este site não possui afiliação oficial com a Microsoft.</p>
        </div>
      </footer>

      {/* Modal de Suporte */}
      <SupportModal 
        isOpen={showSupport} 
        onClose={() => setShowSupport(false)} 
        userSession={null} 
      />
    </div>
  );
}

// Ícone Utilitário
function XCircle({ size, className }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
}
