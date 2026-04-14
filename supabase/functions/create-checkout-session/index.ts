import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@11.1.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2022-11-15',
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { planType, userId, userEmail } = await req.json()

    // 1. Criar ou buscar cliente no Stripe
    const customers = await stripe.customers.list({ email: userEmail, limit: 1 })
    let customerId = customers.data.length > 0 ? customers.data[0].id : null

    if (!customerId) {
      const customer = await stripe.customers.create({ email: userEmail, metadata: { supabase_user_id: userId } })
      customerId = customer.id
    }

    // 2. Definir IDs de Preço (Você deve substituir pelos IDs reais do seu painel Stripe)
    const priceId = planType === 'annual' 
      ? 'YOUR_STRIPE_ANNUAL_PRICE_ID' // Substitua pelo ID do plano R$ 598,80
      : 'YOUR_STRIPE_MONTHLY_PRICE_ID' // Substitua pelo ID do plano R$ 69,90

    // 3. Criar Sessão de Checkout
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${req.headers.get('origin')}/dashboard?checkout=success`,
      cancel_url: `${req.headers.get('origin')}/dashboard?checkout=cancel`,
      payment_method_types: ['card', 'pix'], // Habilita Pix e Cartão
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
