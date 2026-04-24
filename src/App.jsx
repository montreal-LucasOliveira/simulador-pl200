import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Simulator from './pages/Simulator';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ResetPassword from './pages/ResetPassword';
import { supabase } from './lib/supabase';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca sessão inicial
    const initSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          if (error.message.includes('refresh_token_not_found') || error.message.includes('Invalid Refresh Token')) {
            console.warn("Sessão expirada ou inválida. Limpando...");
            await supabase.auth.signOut();
            setSession(null);
          } else {
            throw error;
          }
        } else {
          setSession(session);
        }
      } catch (err) {
        console.error("Erro ao carregar sessão:", err);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    initSession();

    // Escuta mudanças de autenticação (Login/Logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      
      // Se for um erro de refresh, força o logout para limpar cookies
      if (event === 'TOKEN_REFRESH_FAILED') {
        console.warn("Falha no refresh do token. Redirecionando para login.");
        await supabase.auth.signOut();
        setSession(null);
      }

      // Se for um evento de recuperação de senha, salva na memória temporária
      if (event === 'PASSWORD_RECOVERY') {
        localStorage.setItem('sb-recovery-mode', 'true');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="h-screen bg-slate-50 flex items-center justify-center">Carregando Plataforma...</div>;
  }

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={!session ? <LandingPage setMockSession={setSession} /> : <Navigate to="/dashboard" replace />} 
          />
          <Route 
            path="/dashboard" 
            element={session ? <Dashboard session={session} setMockSession={setSession} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/profile" 
            element={session ? <Profile session={session} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/settings" 
            element={session ? <Settings session={session} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/simulator/:type" 
            element={session ? <Simulator session={session} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/admin" 
            element={session ? <Admin session={session} /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/reset-password" 
            element={<ResetPassword />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}