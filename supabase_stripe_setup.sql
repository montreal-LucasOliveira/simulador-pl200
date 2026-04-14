-- Script para preparar a tabela de perfis para integração com o Stripe
-- Execute este script no SQL Editor do seu projeto Supabase.

ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
ADD COLUMN IF NOT EXISTS subscription_id TEXT;

-- Garantir que o RLS permita que as Edge Functions atualizem esses campos
-- (As Edge Functions usam a Service Role, então geralmente já possuem acesso, 
-- mas é bom ter os campos prontos).
