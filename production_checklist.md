# Guia de Deploy Oficial: PL-200 Premium

Agora que o build foi validado e está estável, siga estes passos para colocar o site no ar.

## Passo 1: Preparação do Repositório
1. Certifique-se de que todos os arquivos (incluindo o novo `netlify.toml`) foram enviados para o seu repositório no GitHub.

## Passo 2: Configuração no Netlify
1. Acesse [app.netlify.com](https://app.netlify.com) e conecte sua conta do GitHub.
2. Selecione o repositório **simulador-pl200-premium**.
3. No campo **Build settings**, confirme se está assim:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

## Passo 3: Variáveis de Ambiente (CRÍTICO)
Antes de clicar em Deploy, vá em **Site Settings > Environment variables** e adicione:
- `VITE_SUPABASE_URL`: (Sua URL do Supabase)
- `VITE_SUPABASE_ANON_KEY`: (Sua Chave Anon do Supabase)

> [!CAUTION]
> Se você esquecer estas variáveis, o site abrirá mas o login e as questões não funcionarão.

## Passo 4: Publicação
1. Clique em **Deploy site**.
2. Após alguns segundos, o Netlify fornecerá uma URL (ex: `nome-do-site.netlify.app`).

---
### Checklist de Segurança Final
- [ ] Script `supabase_support_setup.sql` executado no Supabase.
- [ ] Variáveis de ambiente configuradas no Netlify.
- [ ] Link do site testado em aba anônima.
