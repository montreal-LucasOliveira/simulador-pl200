import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@11.1.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2022-11-15',
})
const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return new Response('Sem assinatura', { status: 400 })
  }

  try {
    const body = await req.text()
    const event = stripe.webhooks.constructEvent(body, signature, endpointSecret!)

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        const customerId = session.customer as string
        const subscriptionId = session.subscription as string
        
        // Buscar o usuário pelo customerId ou pelo email
        const { data: customerData } = await stripe.customers.retrieve(customerId)
        const userId = customerData.metadata.supabase_user_id

        await supabase
          .from('profiles')
          .update({ 
            is_premium: true, 
            stripe_customer_id: customerId,
            subscription_id: subscriptionId 
          })
          .eq('id', userId)
        
        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        await supabase
          .from('profiles')
          .update({ is_premium: false })
          .eq('subscription_id', subscription.id)
        break
      }
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 })
  } catch (err) {
    return new Response(`Erro no Webhook: ${err.message}`, { status: 400 })
  }
})
