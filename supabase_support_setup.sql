-- Criação da tabela de chamados de suporte
CREATE TABLE IF NOT EXISTS support_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_id UUID REFERENCES auth.users(id),
    user_email TEXT NOT NULL,
    subject TEXT NOT NULL, -- 'Suporte' ou 'Problema'
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pendente' NOT NULL -- 'pendente', 'em_analise', 'resolvido'
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE support_requests ENABLE ROW LEVEL SECURITY;

-- Política: Criadores podem inserir suas próprias mensagens (mesmo deslogados)
CREATE POLICY "Anyone can insert a support request" 
ON support_requests FOR INSERT 
WITH CHECK (true);

-- Política: Apenas o Admin (lucasho94@hotmail.com) pode ver todas as mensagens
CREATE POLICY "Admins can view all support requests" 
ON support_requests FOR SELECT 
USING (
  auth.jwt() ->> 'email' = 'lucasho94@hotmail.com'
);
