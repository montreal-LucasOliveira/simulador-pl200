export const questionsData = [
    {
        "id": "q1_topic1",
        "text": "O proprietário de uma empresa precisa saber quem faz login no sistema (auditoria de acesso). Você precisa garantir que o proprietário possa visualizar os logs de auditoria de usuários. Onde cada ação deve ser configurada: 1. Ativar a auditoria de usuários e 2. Visualizar os logs de auditoria de usuários? Selecione a combinação correta:",
        "options": [
            "1. Configurações Pessoais (Personal Settings) | 2. Localização Avançada (Advanced Find)",
            "1. Conformidade do Microsoft 365 (M365 Compliance) | 2. Conformidade do Microsoft 365",
            "1. Configurações do Sistema (System Settings) | 2. Conformidade do Microsoft 365 (M365 Compliance)",
            "1. Personalizar o Sistema (Customize the System) | 2. Registro individual (Individual record)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão testa o conhecimento sobre como a auditoria de acesso do usuário é gerenciada no ecossistema do Dataverse/Power Platform.",
            "papoReto": "Para começar a vigiar quem entra no sistema, você precisa ligar o 'interruptor principal' (Configurações do Sistema). Depois que ele tá ligado, os registros de quem entrou vão lá para o painel de segurança e conformidade geral da Microsoft (Microsoft 365 Compliance / Purview).",
            "respostaCerta": "1. Configurações do Sistema (System Settings) | 2. Conformidade do Microsoft 365 (M365 Compliance)",
            "puloDoGato": "'Ativar auditoria' é sempre configurado no nível de administração do ambiente (System Settings / Power Platform Admin Center). Já para 'Ler logs de auditoria de acesso' no Dataverse, o sistema atualmente redireciona você para o portal de Conformidade do Microsoft 365, que é o lugar que centraliza todos os logs do tenant.",
            "cascasDeBanana": [
                "Configurações Pessoais: Auditoria de sistema afeta todo mundo, então não pode ser ligada no nível pessoal do usuário.",
                "Localização Avançada: Você pode usar a Localização Avançada para buscar dados de negócios (contas, contatos), mas os logs de acesso de usuário ficam no portal de conformidade."
            ],
            "dicaOuro": "Ativar auditoria = System Settings (Admin). Ler auditoria de login = M365 Compliance."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q2_topic1",
        "text": "Sua organização não permite o uso de código personalizado (custom code) para a criação de soluções. Você precisa criar uma visualização (view) de uma tabela que possa ser vista por todos os usuários da organização em um aplicativo orientado por modelo (model-driven app). Onde você deve criar essa visualização?",
        "options": [
            "Na exibição de lista da entidade diretamente no aplicativo (List view of the entity).",
            "No Microsoft Visual Studio.",
            "No Portal do Criador (Maker Portal / make.powerapps.com).",
            "Na área de Modelos (Templates area) do Centro de Administração."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão clássica sobre onde as customizações 'No-Code/Low-Code' devem ser feitas na arquitetura moderna da Power Platform.",
            "papoReto": "Onde a gente constrói as coisas hoje em dia no Power Apps sem usar código? No portal do criador (Maker Portal). Como a visualização é para 'todos os usuários da organização', estamos falando de uma 'Visualização do Sistema' (System View) ou 'Visualização Pública' (Public View), que são configuradas na raiz da tabela, e não de uma visualização pessoal.",
            "respostaCerta": "No Portal do Criador (Maker Portal / make.powerapps.com).",
            "puloDoGato": "Para criar uma view pública que todos vejam e que faça parte de uma Solução da empresa (para ser transportada de Desenvolvimento para Produção), você deve ir no Maker Portal (make.powerapps.com) > Soluções > selecionar sua Tabela > Exibições (Views) e criar por lá.",
            "cascasDeBanana": [
                "Na exibição de lista da entidade diretamente no aplicativo: Lá o usuário final consegue criar e salvar 'Visualizações Pessoais' (Personal Views), mas elas não são para 'toda a organização' por padrão e não fazem parte da personalização base do sistema.",
                "No Microsoft Visual Studio: O enunciado diz expressamente que a organização 'não permite o uso de código personalizado'."
            ],
            "dicaOuro": "Palavras-chave na prova: 'Vista por todos os usuários' ou 'Parte da solução' = Public View / System View. 'Criado sem código' ou 'Interface moderna' = Maker Portal (make.powerapps.com)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q3_topic1",
        "text": "Você cria um portal do Power Pages (Power Apps portal) para fornecer treinamento e documentação para alunos. Os alunos criam um perfil no portal e, em seguida, selecionam e pagam pelos cursos. Você planeja adicionar cursos gratuitos ao portfólio de treinamento. Os cursos gratuitos devem estar automaticamente disponíveis para todos os alunos após eles entrarem no sistema (fizerem login). Você precisa atribuir permissões padrão aos alunos. O que você deve fazer?",
        "options": [
            "Criar uma função da web (web role) de Alunos e definir a opção 'Função de Usuários Autenticados' como verdadeira. Atribuir a função da web manualmente a cada usuário registrado.",
            "Criar uma tabela para gerenciar cursos gratuitos. Criar registros de permissão de tabela e atribuir as permissões diretamente aos usuários quando eles se registrarem no portal pela primeira vez.",
            "Criar uma tabela para gerenciar cursos gratuitos. Criar uma função da web (web role) de Alunos e definir a opção 'Função de Usuários Autenticados' como verdadeira. Criar permissões de tabela para acessar os registros e atribuir essas permissões à função da web.",
            "Atribuir a função de segurança de Administrador do Sistema do Dataverse para todos os usuários que se registrarem no portal."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Essa questão testa seu conhecimento sobre segurança e permissões específicas de Portais (Power Pages).",
            "papoReto": "Imagine que o portal é um clube VIP. Você não quer ter o trabalho de dar uma chave de acesso (permissão) na mão de cada pessoa que entra (opção 1 ou 2). Em vez disso, você cria uma regra na porta do clube: 'Todo mundo que está logado (Usuário Autenticado) ganha automaticamente a pulseira VIP que dá acesso aos cursos gratuitos'.",
            "respostaCerta": "Criar uma tabela para gerenciar cursos gratuitos. Criar uma função da web e definir a opção 'Função de Usuários Autenticados' como verdadeira. Criar permissões de tabela e atribuí-las à função.",
            "puloDoGato": "No Power Pages, a opção 'Authenticated Users Role' (Função de Usuários Autenticados) faz todo o trabalho duro por você. Se você marca essa opção em uma Web Role, o sistema automaticamente aplica essa função a qualquer usuário que fizer login. Você não precisa atribuir nada manualmente usuário por usuário!",
            "cascasDeBanana": [
                "Atribuir a função da web manualmente a cada usuário registrado: Errado e trabalhoso. Se a opção de 'Usuários Autenticados' está ativada, a atribuição manual é redundante.",
                "Atribuir as permissões diretamente aos usuários: Pegadinha clássica! Em Portais, permissões de tabela são SEMPRE associadas a Funções da Web (Web Roles), nunca diretamente ao registro do contato."
            ],
            "dicaOuro": "Portais (Power Pages) usam 'Web Roles' (Funções da Web). Dataverse (Model-driven) usa 'Security Roles' (Funções de Segurança). Além disso, a permissão no portal é sempre ligada à Web Role!"
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q4_topic1",
        "text": "Você cria fluxos de trabalho (workflows) para automatizar processos de negócios. Você precisa configurar um fluxo de trabalho para atender aos seguintes requisitos: 1. Ser acionado quando uma condição for atendida. 2. Executar imediatamente. 3. Executar uma ação quando a condição for atendida. Você precisa criar um fluxo de trabalho que envie e-mails automaticamente com base em um modelo de mala direta (mail merge). Selecione a combinação correta de opções para atender aos requisitos na ordem (1, 2 e 3):",
        "options": [
            "1. Disparar quando um botão do Power Automate for pressionado | 2. Configurar o fluxo para executar agora | 3. Exibir gráfico",
            "1. Publicar fluxo de trabalho | 2. Aprovar o fluxo de trabalho | 3. Atualizar um direito de acesso",
            "1. Assunto contém dados | 2. Configurar o fluxo de trabalho para executar agora | 3. Enviar um e-mail",
            "1. Assunto contém dados | 2. Aprovar o fluxo de trabalho | 3. Enviar um e-mail"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Essa questão aborda a criação de um fluxo de trabalho (workflow) clássico do Dynamics 365 focado no envio imediato de e-mails.",
            "papoReto": "Se você quer que um e-mail seja disparado assim que o sistema perceber que uma informação foi preenchida, você precisa de três passos: um 'gatilho' (a condição de que o Assunto tem algum dado), definir que isso tem que acontecer na mesma hora ('run now' - tempo real), e a ação final que é literalmente 'enviar o e-mail'.",
            "respostaCerta": "1. Assunto contém dados | 2. Configurar o fluxo de trabalho para executar agora | 3. Enviar um e-mail",
            "puloDoGato": "Fluxos de trabalho em tempo real (Real-time workflows) são configurados para 'executar agora' (run now) em contraste com fluxos em segundo plano. 'Assunto contém dados' é a condição que atende ao requisito de acionamento do gatilho.",
            "cascasDeBanana": [
                "Disparar quando um botão do Power Automate for pressionado: Botões requerem ação manual, e a questão pede 'quando uma condição for atendida' automaticamente.",
                "Aprovar o fluxo de trabalho: Aprovação não faz um fluxo rodar imediatamente, ela é apenas uma etapa de pausa/verificação."
            ],
            "dicaOuro": "Sempre que a prova falar de 'Mail Merge template' (mala direta) ou 'Run Immediately' (executar imediatamente) em fluxos internos de e-mail, eles geralmente estão se referindo aos Workflows Clássicos rodando em tempo real (síncronos)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q5_topic1",
        "text": "Você é um administrador do Dynamics 365 Customer Service. Você precisa configurar a seguinte automação para a equipe de vendas: 1. Enviar um e-mail quando o status mudar em uma Oportunidade. 2. Enviar um SMS (mensagem de texto) ao gerente de vendas quando uma Oportunidade for criada. 3. Criar uma tarefa no aplicativo 'Wunderlist' quando uma Oportunidade estiver aberta há 30 dias. Qual ferramenta você deve usar para CADA requisito, respectivamente?",
        "options": [
            "1. Fluxo de Trabalho (Workflow) do Dynamics 365 | 2. Fluxo de Trabalho (Workflow) do Dynamics 365 | 3. Fluxo de Processo Empresarial (BPF)",
            "1. Microsoft Flow (Power Automate) | 2. Fluxo de Trabalho (Workflow) do Dynamics 365 | 3. Microsoft Flow (Power Automate)",
            "1. Fluxo de Trabalho (Workflow) do Dynamics 365 | 2. Microsoft Flow (Power Automate) | 3. Microsoft Flow (Power Automate)",
            "1. Fluxo de Processo Empresarial (BPF) | 2. Microsoft Flow (Power Automate) | 3. Fluxo de Trabalho (Workflow) do Dynamics 365"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Essa questão exige que você saiba quando usar a automação nativa clássica (Workflows) e quando usar o Power Automate (antigo Microsoft Flow) para se conectar com o mundo externo.",
            "papoReto": "Regra básica: se a automação acontece 'dentro de casa' (tipo enviar um e-mail simples usando o próprio Dynamics), o Workflow resolve. Mas se você precisa 'sair de casa' para mandar um SMS pro celular de alguém ou criar uma tarefa em um aplicativo de fora (Wunderlist), você precisa chamar o carteiro moderno: o Power Automate.",
            "respostaCerta": "1. Fluxo de Trabalho (Workflow) do Dynamics 365 | 2. Microsoft Flow (Power Automate) | 3. Microsoft Flow (Power Automate)",
            "puloDoGato": "O Microsoft Flow (Power Automate) brilha com conectores de terceiros. SMS requer um conector externo (como Twilio) e Wunderlist é um app externo. Ambos exigem Power Automate. Enviar um e-mail ao mudar o status internamente é perfeitamente tratado pelo Dynamics 365 Workflow clássico.",
            "cascasDeBanana": [
                "Fluxos de Processo Empresarial (BPF): BPFs servem para guiar o usuário visualmente por etapas na tela (ex: Qualificar > Desenvolver > Propor). Eles não servem para enviar SMS ou criar tarefas em sistemas externos de forma autônoma."
            ],
            "dicaOuro": "Apareceu sistema de fora da Microsoft ou comunicação externa complexa (SMS, postar no Twitter, criar card no Trello/Wunderlist)? A resposta é 100% Power Automate (Microsoft Flow)."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q6_topic1",
        "text": "Uma empresa usa o Microsoft Dataverse para gerenciar prospects. A empresa tem um Fluxo de Processo Empresarial (BPF) chamado 'BPFA' associado à tabela Prospect. Você adiciona uma coluna 'Categoria' à tabela Prospect e cria novos BPFs que são aplicados com base na categoria selecionada. Os usuários podem alternar para os novos BPFs, mas eles NÃO devem mais usar ou conseguir ver o BPFA antigo. Quais são as DUAS maneiras de atingir esse objetivo?",
        "options": [
            "A) Remover todos os privilégios de acesso (security roles) do BPFA. E B) Mudar a ordem de exibição do BPFA para o final da lista.",
            "A) Usar uma regra de negócios para impedir os usuários de alternar para o BPFA. E B) Desativar o BPFA.",
            "A) Mudar a ordem de exibição do BPFA para o final da lista. E B) Usar uma regra de negócios para impedir o acesso.",
            "A) Desativar o BPFA. E B) Remover todos os privilégios de acesso (security roles) do BPFA."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Uma questão importante sobre como o Dataverse gerencia a visibilidade e o ciclo de vida dos Fluxos de Processo Empresarial (Business Process Flows).",
            "papoReto": "Se você tem um processo na tela (aquelas barrinhas de progresso no topo) que você quer aposentar de vez e sumir com ele, você tem dois caminhos: ou você 'desliga a tomada' dele (Desativar) ou você confisca a 'chave' que permite que as pessoas o vejam (Remover os privilégios de acesso das Funções de Segurança).",
            "respostaCerta": "A) Desativar o BPFA. E B) Remover todos os privilégios de acesso (security roles) do BPFA.",
            "puloDoGato": "BPFs são tratados pelo sistema como Entidades (Tabelas). Portanto, eles têm configurações de segurança (Ler, Criar, Atualizar). Se você tirar o direito de 'Leitura' do BPF 'BPFA' em todas as funções de segurança, ele some para os usuários. Desativar o BPF também é a maneira direta de aposentá-lo globalmente.",
            "cascasDeBanana": [
                "Usar uma regra de negócios (Business Rule): Regras de negócios mexem em campos do formulário (ocultar, mostrar, tornar obrigatório). Elas não conseguem bloquear ou esconder um Fluxo de Processo Empresarial.",
                "Mudar a ordem de exibição: Isso apenas joga o BPFA pro final da fila caso existam vários BPFs na mesma tela, mas o usuário ainda poderia clicar no botão 'Alternar Processo' e escolhê-lo manualmente."
            ],
            "dicaOuro": "Para esconder completamente um BPF da tela dos usuários: Desative-o OU remova as Permissões de Leitura dele na aba 'Fluxos do Processo Empresarial' dentro da Função de Segurança (Security Role)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q7_topic1",
        "text": "Você está criando uma regra de negócios (business rule) para implementar uma lógica nova. Você precisa aplicar a lógica da regra de negócios para um aplicativo de tela (canvas app) que usa um único ambiente chamado Server1. Você precisa configurar o escopo da regra de negócios. Qual escopo você deve usar?",
        "options": [
            "Server1",
            "Entidade (Entity)",
            "Todos os Formulários (All Forms)",
            "Global"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão foca em como o escopo de uma Regra de Negócios afeta onde ela será executada, especialmente quando saímos do mundo dos aplicativos orientados por modelo (Model-driven) e entramos no mundo dos aplicativos de tela (Canvas Apps).",
            "papoReto": "Regras de negócios geralmente rodam 'na tela' (no formulário) de um Model-driven app. Mas um Canvas app não usa os formulários padrão do Dataverse. Então, se você quer que a regra funcione mesmo quando o dado é alterado por um Canvas App (ou por uma integração de fora), a regra tem que rodar 'lá no fundo', no servidor, diretamente na tabela. O nome desse escopo que roda no servidor é 'Entidade'.",
            "respostaCerta": "Entidade (Entity)",
            "puloDoGato": "Sempre que a questão falar que a Regra de Negócios precisa funcionar para 'Canvas Apps', 'Power Pages (Portais)', 'Plugins' ou 'Integrações Externas', o escopo TEM que ser 'Entity' (Entidade/Tabela). Qualquer outro escopo roda apenas no cliente (navegador) dentro de um formulário de Model-driven app.",
            "cascasDeBanana": [
                "Todos os Formulários (All Forms): Este escopo faz a regra rodar em qualquer formulário daquela tabela, mas APENAS dentro de aplicativos Model-driven.",
                "Server1: Escopos de regras de negócios não são nomeados com o nome do ambiente."
            ],
            "dicaOuro": "Canvas App + Business Rule = Escopo de Entidade (Entity Scope). Isso garante que a regra seja executada no lado do servidor do Dataverse."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q8_topic1",
        "text": "Você é um administrador do Dynamics 365 Customer Service. Você tem uma instância de Produção e uma instância de Sandbox (área de testes). Os usuários testam o recurso de produção na instância de Sandbox. Você precisa garantir que a equipe use os mesmos dados da instância de Produção. Qual função de segurança precisa ser editada para impedir o acesso à instância Sandbox? (Indique qual área do sistema e qual função devem ser configuradas, respectivamente)",
        "options": [
            "Área do Aplicativo: Dynamics 365 Sandbox instance | Função de Segurança: Licenças (Licenses)",
            "Área do Aplicativo: Microsoft 365 admin center | Função de Segurança: Licenças (Licenses)",
            "Área do Aplicativo: Microsoft 365 admin center | Função de Segurança: Grupos (Groups)",
            "Área do Aplicativo: Dynamics 365 Sandbox instance | Função de Segurança: Papéis/Funções (Roles)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão aborda como gerenciar quem pode entrar em instâncias (ambientes) específicos, uma prática crucial ao clonar um ambiente de Produção para Sandbox.",
            "papoReto": "Imagina que você tirou uma cópia exata do ambiente da na empresa (Produção) para fazer testes (Sandbox). A cópia leva tudo, inclusive os usuários. Mas você não quer que todos os funcionários entrem no ambiente de teste por engano. Para barrar a entrada logo na 'porta do prédio' (antes mesmo de entrar no Dynamics), você cria um Grupo de Segurança lá no painel geral do Microsoft 365 e diz que só quem tá nesse grupo pode entrar no Sandbox.",
            "respostaCerta": "Área do Aplicativo: Microsoft 365 admin center | Função de Segurança: Grupos (Groups)",
            "puloDoGato": "A melhor e mais recomendada forma de restringir acesso a um ambiente inteiro (instância) é atribuindo um Grupo de Segurança (Security Group) a esse ambiente através do Power Platform Admin Center (que herda os grupos do Microsoft 365 Admin Center / Microsoft Entra ID).",
            "cascasDeBanana": [
                "Dynamics 365 Sandbox instance / Roles (Funções): Remover as funções (roles) dos usuários dentro do Dynamics também impediria o acesso, mas se você acabou de clonar a Produção, teria que remover o acesso de centenas de usuários um por um. O Grupo de Segurança no Microsoft 365 corta o acesso na raiz de uma vez só."
            ],
            "dicaOuro": "Controle de acesso 'no nível da porta' do Ambiente (Environment/Instance) = Security Groups (Grupos de Segurança) configurados no Microsoft 365 / Admin Center."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q9_topic1",
        "text": "Você deve criar uma nova entidade (tabela) para dar suporte a um novo recurso em um aplicativo. Os registros da entidade devem ser associados a um usuário específico e seguir exatamente as regras de segurança da unidade de negócios (business unit) à qual o usuário pertence. Você precisa configurar a segurança da entidade. Qual tipo de propriedade da entidade você deve usar?",
        "options": [
            "De propriedade do usuário ou da equipe (User or team owned)",
            "De propriedade da organização (Organization-owned)",
            "Nenhuma (None)",
            "De propriedade da unidade de negócios (Business owned)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão avalia o entendimento dos dois principais modelos de propriedade (Ownership) ao criar uma tabela no Dataverse.",
            "papoReto": "Quando você cria uma tabela nova, o sistema pergunta: 'Quem vai ser o dono desses registros?'. Se os dados são globais e todo mundo da empresa pode ver (tipo lista de CEPs ou Cidades), é 'Organização'. Agora, se os dados têm dono, como 'Minhas Tarefas' ou 'Meus Clientes', e dependem do departamento do cara (unidade de negócios), tem que ser propriedade de 'Usuário ou Equipe'.",
            "respostaCerta": "De propriedade do usuário ou da equipe (User or team owned)",
            "puloDoGato": "Sempre que a questão mencionar que a segurança precisa respeitar hierarquias de 'Business Unit' (unidade de negócios) ou falar que o registro pertence a 'um usuário específico', a tabela OBRIGATORIAMENTE deve ser criada como 'User or team owned'.",
            "cascasDeBanana": [
                "De propriedade da organização (Organization-owned): Se escolher isso, os níveis de privilégio (aquele gráfico de fatias amarelas nas funções de segurança) somem. A regra vira 'ou você tem acesso a tudo na empresa, ou não tem acesso a nada'. Não dá para restringir por departamento.",
                "De propriedade da unidade de negócios: Esse tipo de propriedade não existe na criação de tabelas. Os registros pertencem a usuários ou equipes, que por sua vez pertencem a uma Business Unit."
            ],
            "dicaOuro": "Criar tabela com segurança baseada em nível de hierarquia (Usuário > BU > Organização) = Escolher sempre Ownership: 'User or Team'."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q10_topic1",
        "text": "Você precisa garantir que existem leads (clientes potenciais) duplicados para um cliente antes de criar uma nova oportunidade para esse cliente. Como você pode usar a regra de detecção de duplicidades para atingir esse objetivo? Selecione as opções corretas para o Tipo de Registro Base (Base record type) e Campo do Registro Base (Base record field), respectivamente:",
        "options": [
            "Tipo de Registro Base: Lead | Campo do Registro Base: Originating Lead",
            "Tipo de Registro Base: Opportunity | Campo do Registro Base: Account",
            "Tipo de Registro Base: Opportunity | Campo do Registro Base: Topic",
            "Tipo de Registro Base: Account | Campo do Registro Base: Originating Lead"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma questão sobre como configurar regras de detecção de duplicidades (Duplicate Detection Rules) no Dataverse quando cruzamos dados de tabelas diferentes.",
            "papoReto": "Você está na tela para criar uma Oportunidade. Antes de salvar, você quer que o sistema grite: 'Ei, já existe uma oportunidade aberta para esse Cliente (Account)!'. Para o sistema fazer isso, a tabela que está sendo criada agora (Base) é a Oportunidade. E o campo que vai ser checado para ver se bate com outra Oportunidade já existente é o campo do Cliente (Account).",
            "respostaCerta": "Tipo de Registro Base: Opportunity | Campo do Registro Base: Account",
            "puloDoGato": "A regra de detecção de duplicidades sempre parte do 'Base record type' (o registro que você está criando ou editando no momento). Como o objetivo final é 'criar uma nova oportunidade', a base é a Opportunity. A checagem será feita se já existe outra oportunidade com o mesmo 'Account' (Cliente/Conta).",
            "cascasDeBanana": [
                "Tipo de Registro Base: Lead: A questão diz 'antes de criar uma nova *oportunidade*'. A ação de criação acontece na tabela Oportunidade, não no Lead.",
                "Campo do Registro Base: Topic: O tópico (nome da oportunidade) pode ser parecido, mas o enunciado foca em garantir que não haja duplicidade 'para um cliente' (Account), então o campo a ser validado é a Conta (Account)."
            ],
            "dicaOuro": "'Base Record Type' é sempre a tabela onde o usuário está ativamente tentando salvar/criar o dado no momento."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q11_topic1",
        "text": "Você tem dois ambientes (environments) da Microsoft Power Platform. Os usuários de um ambiente não devem ser capazes de ver o outro ambiente. Você precisa conceder aos vendedores acesso ao ambiente da empresa de vendas. O que você deve fazer?",
        "options": [
            "Adicionar os vendedores a um grupo de segurança do Office 365 (Office 365 security group).",
            "Adicionar os vendedores a um direito de acesso (security role).",
            "Definir privilégios (Set privileges).",
            "Definir a segurança do aplicativo (Set app security)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão aborda o controle de acesso no nível mais alto da arquitetura: o Ambiente (Environment).",
            "papoReto": "Se você tem dois 'prédios' (ambientes) e quer que o vendedor só tenha a chave da porta da frente do prédio de vendas e nem saiba que o outro prédio existe, você configura isso lá no painel geral de TI. Você cria um Grupo de Segurança no Office 365/Microsoft Entra, atrela esse grupo ao ambiente de Vendas, e coloca os vendedores lá dentro.",
            "respostaCerta": "Adicionar os vendedores a um grupo de segurança do Office 365.",
            "puloDoGato": "Restringir acesso a um *Ambiente* inteiro é feito vinculando o Ambiente a um Grupo de Segurança (Security Group) do Microsoft 365. Os 'Security roles' (Direitos de acesso) controlam o que o usuário faz *depois* que ele já conseguiu entrar no ambiente.",
            "cascasDeBanana": [
                "Adicionar a um direito de acesso (security role): Isso dita se ele pode ler/escrever registros *dentro* do ambiente, mas não bloqueia a visibilidade do ambiente na lista do admin center.",
                "Definir a segurança do aplicativo: Isso controla quem vê um aplicativo específico (como o app de Vendas), mas o usuário ainda conseguiria acessar o ambiente e ver outros apps."
            ],
            "dicaOuro": "Controle de acesso a AMBIENTES inteiros = Security Groups (Grupos de Segurança do M365). Controle de acesso a TABELAS/DADOS = Security Roles (Direitos de Acesso)."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q12_topic1",
        "text": "Uma clínica veterinária planeja usar a Power Platform para otimizar as experiências dos clientes. O cliente cria um aplicativo para gerenciar consultas. No formulário de consulta de clientes, há um campo suspenso (dropdown) para os clientes selecionarem o tipo de animal de estimação. Se um cliente selecionar a opção 'Outro' (Other), o veterinário deseja que um campo de texto apareça para que detalhes adicionais possam ser adicionados. Você precisa criar um campo dinamicamente visível. O que você deve configurar?",
        "options": [
            "Fluxo de trabalho (Workflow)",
            "Fluxo de processo empresarial (Business process flow)",
            "Regra de negócios (Business rule)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão clássica sobre automação de interface de usuário (UI) sem usar código no Dataverse.",
            "papoReto": "Se você precisa que um campo apareça ou suma da tela dependendo do que o usuário respondeu na pergunta anterior (Ex: escolheu 'Outro', abre a caixa de texto 'Qual?'), a ferramenta nativa para brincar de 'esconde-esconde' com os campos no formulário é a Regra de Negócios.",
            "respostaCerta": "Regra de negócios (Business rule)",
            "puloDoGato": "Atenção a um detalhe: na prova original em inglês, o texto diz que o cliente criou um 'canvas app', o que é um ERRO de digitação frequente nas provas da Microsoft. Visibilidade em Canvas App é feita por fórmulas. Mas, pelas opções fornecidas, eles estão claramente testando o conceito de formulários Model-driven/Dataverse, onde a resposta exata para 'visibilidade dinâmica' é Business Rule.",
            "cascasDeBanana": [
                "Fluxo de trabalho (Workflow): Roda no servidor ('no fundo') para processar dados (como enviar e-mails), não altera a interface da tela em tempo real para o usuário.",
                "Fluxo de processo empresarial (BPF): É a barra de progresso em etapas no topo da tela (ex: Triagem > Consulta > Exame). Não serve para ocultar/mostrar campos dinamicamente no meio do formulário."
            ],
            "dicaOuro": "Ocultar/Mostrar campos, Tornar campo Obrigatório, ou Mostrar Erro de Validação direto no formulário = Business Rule (Regras de Negócios)."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q13_topic1",
        "text": "Você cria um aplicativo para a equipe de vendas de uma empresa. Os membros da equipe de vendas não conseguem acessar o aplicativo. Você precisa garantir que os membros da equipe de vendas possam acessar o aplicativo. Onde você deve configurar as permissões do aplicativo?",
        "options": [
            "Centro de administração do Dynamics (Dynamics administration center)",
            "Gerenciar Funções (Manage Roles)",
            "Funções de Segurança (Security Roles)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão trata do compartilhamento e da visibilidade de aplicativos orientados por modelo (Model-driven apps).",
            "papoReto": "Você construiu um app excelente e os vendedores dizem que o ícone dele não aparece. O que faltou? Você precisa ir nas opções do Aplicativo que você criou, clicar nele e usar a opção de associar o app às funções (roles) que a galera de vendas tem. O nome clássico desse botão na interface do Power Apps para definir quem vê o app é 'Manage Roles'.",
            "respostaCerta": "Gerenciar Funções (Manage Roles)",
            "puloDoGato": "Embora os usuários precisem de um 'Security Role' (Direito de Acesso) para ler e escrever os dados, a ação específica de VINCULAR o aplicativo a essa função para que o app apareça na lista do usuário é feita selecionando o App e clicando em 'Manage Roles' (Gerenciar Funções ou Compartilhar).",
            "cascasDeBanana": [
                "Funções de Segurança (Security Roles): É lá que você cria e define as permissões (ex: Vendedor tem acesso de leitura de contatos). Mas a pergunta foca em 'onde configurar as permissões DO APLICATIVO', ou seja, amarrar o app à função já criada.",
                "Centro de administração do Dynamics: Você não gerencia o compartilhamento de um aplicativo específico no centro de administração global."
            ],
            "dicaOuro": "Para um usuário ver um Model-Driven App, ele precisa de duas coisas: 1) Acesso aos dados (Security Role) e 2) O App precisa estar associado a essa função de segurança (via 'Manage Roles' / 'Share')."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q14_topic1",
        "text": "Você cria uma entidade (tabela) pai e uma entidade filha. A entidade pai tem um relacionamento 1:N (Um para Muitos) com a entidade filha. Você precisa garantir que, quando o proprietário (owner) mudar no registro pai, todos os registros filhos sejam atribuídos ao novo proprietário automaticamente. Você precisa configurar o tipo de comportamento do relacionamento (relationship behavior type). O que você deve usar?",
        "options": [
            "Referencial (Referential)",
            "Referencial, Restringir Exclusão (Referential, Restrict Delete)",
            "Parental",
            "Personalizado (Custom)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão testa o conhecimento sobre Comportamento de Relacionamento (Relationship Behaviors) entre tabelas no Dataverse.",
            "papoReto": "Imagina que você tem a tabela 'Conta' (pai) e 'Contatos' (filhos). Se o vendedor João for demitido e você passar a conta da 'na empresa' para a vendedora Maria, você quer que todos os contatos vinculados a essa conta também passem a ser da Maria automaticamente. Esse comportamento de 'passar adiante em cascata' (cascading) é a marca registrada do relacionamento 'Parental'.",
            "respostaCerta": "Parental",
            "puloDoGato": "O comportamento 'Parental' significa dependência total. Qualquer ação feita no registro pai (Atribuir a outro dono, Compartilhar, Repassar, Excluir) desce em cascata (cascade) e é aplicada automaticamente a todos os registros filhos.",
            "cascasDeBanana": [
                "Referencial: Significa que as tabelas apenas estão ligadas, mas são independentes. Se mudar o dono do pai, não muda o do filho.",
                "Referencial, Restringir Exclusão: Impede que o registro pai seja apagado se houver filhos vinculados a ele, mas não transfere a propriedade (owner) em cascata."
            ],
            "dicaOuro": "Ação no Pai = Ação automática no Filho? A resposta é sempre 'Parental' (ou 'Cascata Tudo' em regras customizadas)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q15_topic1",
        "text": "Você precisa atribuir funções (roles) aos usuários para executar tarefas de administração. A solução deve usar o princípio do menor privilégio (least privilege). Qual função você deve atribuir para as seguintes tarefas, respectivamente: 1. Criar novos usuários. 2. Atribuir direitos de acesso (roles) aos usuários dentro do Dynamics. 3. Realizar backups de uma instância.",
        "options": [
            "1. Office 365 global administrator | 2. Dynamics 365 system administrator | 3. Dynamics 365 service administrator",
            "1. Dynamics 365 system administrator | 2. Office 365 global administrator | 3. Dynamics 365 service administrator",
            "1. Office 365 service administrator | 2. Dynamics 365 system administrator | 3. Office 365 global administrator",
            "1. Office 365 global administrator | 2. Dynamics 365 service administrator | 3. Dynamics 365 system administrator"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão essencial sobre a separação dos papéis de administração no ecossistema Microsoft (Microsoft 365 vs Dynamics 365 / Power Platform).",
            "papoReto": "A criação de contas de usuário (pagar licença, criar e-mail, gerar senha) é responsabilidade do TI geral, lá no portal do Office 365. Agora, dizer que esse usuário novo é um 'Vendedor' dentro do Dynamics, é responsabilidade do Administrador do Sistema do próprio Dynamics. E quem faz o backup do sistema sem precisar ter acesso aos dados comerciais ou de TI? O Administrador de Serviço (Service Administrator).",
            "respostaCerta": "1. Office 365 global administrator | 2. Dynamics 365 system administrator | 3. Dynamics 365 service administrator",
            "puloDoGato": "'Criar usuário' sempre acontece FORA do Dynamics (no Microsoft Entra ID / Microsoft 365 Admin Center). Já 'Atribuir funções de segurança' (Security Roles) acontece DENTRO do Dynamics (Power Platform Admin Center / Ambiente).",
            "cascasDeBanana": [
                "Achar que o Administrador do Sistema (System Admin) do Dynamics pode criar o usuário. Ele não pode! Ele só enxerga o usuário no Dynamics DEPOIS que o TI criou a conta e atribuiu a licença no Office 365."
            ],
            "dicaOuro": "Criação de conta e licenciamento = Office 365 Admin. Permissões dentro do App/Banco de dados = Dynamics System Admin."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q16_topic1",
        "text": "Você está projetando um aplicativo para um banco. Você deve criar entidades (tabelas) e configurar os relacionamentos entre elas. Selecione os tipos de relacionamento corretos para os seguintes requisitos na ordem: 1. A coluna de e-mail do 'Solicitante do Empréstimo' deve ser um campo de pesquisa (lookup) para buscar o Contato. 2. Os solicitantes podem ter mais de um pedido de empréstimo (Loan) ativo ao mesmo tempo. 3. O pedido de empréstimo (Loan) deve ser aplicado para uma única propriedade (Imóvel).",
        "options": [
            "1. N:1 | 2. 1:N | 3. N:1",
            "1. 1:N | 2. N:N | 3. 1:N",
            "1. N:1 | 2. N:N | 3. 1:1",
            "1. 1:1 | 2. 1:N | 3. N:1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão focada na modelagem de dados do Dataverse e como as regras de negócio se traduzem em relacionamentos (1:N, N:1, N:N).",
            "papoReto": "- Requisito 1: Um campo de 'Pesquisa' (Lookup) é SEMPRE o lado 'Muitos' de um relacionamento. Muitos solicitantes podem apontar para o mesmo contato. Logo, N:1. - Requisito 2: Um solicitante (João) pode ter vários pedidos de empréstimos (carro, casa, viagem). Um (João) para Muitos (Empréstimos). Logo, 1:N. - Requisito 3: Vários pedidos de empréstimos diferentes (Muitos/N) podem ser feitos para comprar a mesma Propriedade. Logo, N:1.",
            "respostaCerta": "1. N:1 | 2. 1:N | 3. N:1",
            "puloDoGato": "Memorize a regra de essencial do Dataverse: Todo campo 'Lookup' (Pesquisa) criado em uma tabela A apontando para uma tabela B cria automaticamente um relacionamento N:1 (onde A é o lado 'N' e B é o lado '1'). O Requisito 1 entrega a resposta de graça por usar a palavra 'look-up'.",
            "cascasDeBanana": [
                "Achar que 'um empréstimo é para uma única propriedade' significa relacionamento 1:1. No Dataverse, relacionamentos estritos 1:1 não existem nativamente na interface (você os simula com N:1). Além disso, vários clientes diferentes poderiam tentar financiar a mesma casa, então a casa pode ter vários pedidos de empréstimo (N) ao longo do tempo."
            ],
            "dicaOuro": "Sempre que a prova falar que um campo deve ser um 'Lookup', o relacionamento da tabela atual para a tabela alvo é N:1."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q17_topic1",
        "text": "[Série de Questões 1/3] Nota: Na prova, esta questão faz parte de uma série que apresenta o mesmo cenário. Você não poderá voltar a ela depois de responder. Cenário: Você administra os ambientes do Microsoft 365 e Power Platform para a sua empresa. A empresa possui um aplicativo orientado por modelo (model-driven app) que é usado em um ambiente Dataverse customizado. Quando um gerente é adicionado ao sistema, você precisa conceder a ele acesso ao aplicativo garantindo o princípio do menor privilégio. Solução Proposta: Você atribui ao gerente o direito de acesso de 'Criador de Ambiente' (Environment Maker). Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta é uma típica questão de 'Série' da Microsoft, onde o cenário se repete, mas a solução proposta muda.",
            "papoReto": "O gerente só precisa *usar* o aplicativo. Se você der a ele a função de 'Criador de Ambiente', você está basicamente dando a chave da oficina inteira para quem só quer dirigir o carro. Ele vai poder criar e modificar aplicativos no ambiente, o que fere totalmente a regra do 'menor privilégio'.",
            "respostaCerta": "Não",
            "puloDoGato": "A função de 'Environment Maker' (Criador de Ambiente) concede permissões para criar recursos (aplicativos, fluxos, conexões) dentro do ambiente. Ela NÃO concede automaticamente os privilégios de leitura/escrita nos dados de negócios (tabelas) que o aplicativo consome.",
            "cascasDeBanana": [
                "Achar que 'Environment Maker' dá acesso VIP a tudo. Não dá. E mesmo que desse, daria poder excessivo, violando o requisito do menor privilégio."
            ],
            "dicaOuro": "Nas questões de 'Série', leia a solução com muito cuidado. Só responda 'Sim' quando a solução atacar exatamente o problema sem dar poderes a mais."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q18_topic1",
        "text": "[Série de Questões 2/3] Cenário: Você administra os ambientes do Microsoft 365 e Power Platform para a sua empresa. A empresa possui um aplicativo orientado por modelo (model-driven app) que é usado em um ambiente Dataverse customizado. Quando um gerente é adicionado ao sistema, você precisa conceder a ele acesso ao aplicativo garantindo o princípio do menor privilégio. Solução Proposta: Você adiciona o gerente a um grupo de segurança (security group) que está atribuído ao ambiente. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Segunda tentativa da Microsoft de te enganar no mesmo cenário.",
            "papoReto": "Lembra da analogia do prédio? Colocar o gerente no Grupo de Segurança do Ambiente dá a ele a chave da porta da rua do prédio. Legal, ele entrou no prédio (ambiente). Mas o aplicativo é uma 'sala' trancada lá dentro. Ele ainda precisa da chave da sala e permissão para ler os papéis (dados) que estão lá.",
            "respostaCerta": "Não",
            "puloDoGato": "Apenas adicionar um usuário ao Grupo de Segurança do Ambiente garante que ele consegue *acessar o ambiente*. No entanto, para rodar um Model-driven app, ele precisa de um Direito de Acesso (Security Role) específico do Dataverse para poder ver o aplicativo e ter privilégios nas tabelas que o app usa.",
            "cascasDeBanana": [
                "Achar que Grupo de Segurança resolve tudo. O Grupo de Segurança é o controle de acesso de 'nível 1' (Ambiente). O Model-driven app exige controle de 'nível 2' (Security Role)."
            ],
            "dicaOuro": "Ambiente (Environment) usa Grupo de Segurança. Aplicativos e Dados (Apps/Data) usam Direitos de Acesso (Security Roles)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q19_topic1",
        "text": "[Série de Questões 3/3] Cenário: Você administra os ambientes do Microsoft 365 e Power Platform para a sua empresa. A empresa possui um aplicativo orientado por modelo (model-driven app) que é usado em um ambiente Dataverse customizado. Quando um gerente é adicionado ao sistema, você precisa conceder a ele acesso ao aplicativo garantindo o princípio do menor privilégio. Solução Proposta: Você compartilha o aplicativo com o gerente e atribui a ele um direito de acesso (security role) que está associado ao aplicativo. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A terceira e última parte da série de questões de acesso a aplicativos. Aqui temos a solução correta.",
            "papoReto": "Agora sim! Você fez exatamente o que precisava: pegou o aplicativo, compartilhou com o gerente e deu a ele um 'crachá' (Direito de Acesso) que permite usar aquele app e ver os dados certinhos. Sem superpoderes de criador, apenas o necessário.",
            "respostaCerta": "Sim",
            "puloDoGato": "Para um usuário comum usar um aplicativo orientado por modelo, são necessários dois passos fundamentais dentro do ambiente: 1. Compartilhar (Share) o aplicativo ou associar o app à função do usuário. 2. Atribuir ao usuário o Direito de Acesso (Security Role) correspondente que dá privilégios às tabelas.",
            "cascasDeBanana": [],
            "dicaOuro": "Compartilhar App + Atribuir Security Role = Receita do sucesso para acesso a Model-driven apps no Dataverse."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q20_topic1",
        "text": "Você precisa criar um gráfico para a tabela 'Conta' (Account). O gráfico deve exibir uma contagem de contas agrupadas por Proprietário (Owner) e, em seguida, exibir as contas por 'Estado/Província' (Address 1: State/Province) para cada proprietário. Como você deve configurar as opções do gráfico? Selecione a combinação correta (Série/Campo | Série/Agregação | 1º Agrupamento | 2º Agrupamento):",
        "options": [
            "Série: Conta (Account) | Agregação: Count:All | 1º Agrupamento: Proprietário (Owner) | 2º Agrupamento: Estado/Província",
            "Série: Proprietário (Owner) | Agregação: Count:All | 1º Agrupamento: Conta (Account) | 2º Agrupamento: Estado/Província",
            "Série: Conta (Account) | Agregação: Soma (Sum) | 1º Agrupamento: Estado/Província | 2º Agrupamento: Proprietário (Owner)",
            "Série: Proprietário (Owner) | Agregação: Count:All | 1º Agrupamento: Estado/Província | 2º Agrupamento: Conta (Account)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Essa questão exige que você saiba traduzir um requisito de negócio em configurações de Gráfico (Chart) nativo do Dynamics 365 / Dataverse.",
            "papoReto": "Vamos fatiar a frase do problema: 'Exibir uma contagem de contas': O que estou medindo? Contas. Como estou medindo? Contando. Então a 'Série' (Legend Entries) é 'Account' e a agregação é 'Count'. 'Agrupadas por Proprietário': O eixo principal (Horizontal Axis) é o Proprietário. Esse é o 1º Agrupamento. 'E em seguida exibir por Estado': O eixo secundário (subcategoria) é o Estado. Esse é o 2º Agrupamento.",
            "respostaCerta": "Série: Conta (Account) | Agregação: Count:All | 1º Agrupamento: Proprietário (Owner) | 2º Agrupamento: Estado/Província",
            "puloDoGato": "Nos gráficos do Dataverse: - Entradas de Legenda / Séries (Legend Entries/Series) = O valor numérico que você está calculando (Soma, Contagem, Média). - Rótulos do Eixo Horizontal / Categoria (Horizontal Axis Labels) = Como você está separando as barras do gráfico (Por Vendedor, Por Mês, Por Cidade).",
            "cascasDeBanana": [
                "Inverter Série e Agrupamento: Você não pode usar 'Proprietário' como Série com agregação 'Count:All' neste contexto se o requisito pede a contagem de CONTAS.",
                "Usar 'Soma' (Sum): Você não consegue somar um registro de conta (texto/ID), você só pode CONTAR contas (Count)."
            ],
            "dicaOuro": "Identifique primeiro o 'O QUÊ' vai ser contado ou somado. Isso é a sua Série. O 'POR QUEM' ou 'POR ONDE' são os seus Agrupamentos (Categorias)."
        },
        "difficulty": "intermediario",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q21_topic1",
        "text": "Uma empresa pretende utilizar uma base de dados do Common Data Service (Dataverse) já existente. Você precisa garantir que o usuário consiga criar aplicativos de tela (canvas apps) que consumam dados do Dataverse. Você não deve conceder mais permissões do que as estritamente necessárias (princípio do menor privilégio). Qual direito de acesso (security role) padrão (padr�o) deve atribuir ao usuário?",
        "options": [
            "Administrador de Ambiente (Environment Admin)",
            "Personalizador de Sistema (System Customizer)",
            "Usuário do Common Data Service (Common Data Service User / Basic User)",
            "Criador de Ambiente (Environment Maker)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Esta questão foca na delegação de permissões de construção (maker) sem dar acesso excessivo aos dados ou configurações globais.",
            "papoReto": "Se o colaborador só precisa de 'desenhar' os telas do aplicativo (Canvas App) e ligá-los aos dados, ele é apenas um construtor. Não precisa de ser o dono da base de dados nem administrar tudo. O papel 'Criador de Ambiente' dá a ele a caixa de ferramentas para criar Apps e Fluxos, mas mantém a base de dados segura.",
            "respostaCerta": "Criador de Ambiente (Environment Maker)",
            "puloDoGato": "A função de 'Environment Maker' permite aos usuários criar recursos no ambiente (como Canvas Apps, fluxos do Power Automate e conexões), mas NÃO lhes dá privilégios automáticos para acessar ou alterar a estrutura das tabelas do Dataverse. É a opção exata para o menor privilégio ao criar apps.",
            "cascasDeBanana": [
                "Personalizador de Sistema (System Customizer): Dá poder para alterar a estrutura das tabelas e acessar a todos os dados personalizados. É demasiado poder para quem só precisa criar Canvas Apps.",
                "Usuário do Common Data Service (agora Basic User): Permite ler e escrever dados nas tabelas para usar o app, mas NÃO permite criar os aplicativos."
            ],
            "dicaOuro": "Criar Canvas Apps / Fluxos sem acessar a tudo = Environment Maker. Alterar tabelas do Dataverse = System Customizer."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q22_topic1",
        "text": "Uma empresa implementa vários aplicativos orientados por modelo (model-driven apps) em dispositivos partilhados no armazém. Os dispositivos estão sempre ligados. Um usuário afastou-se recentemente de um dispositivo sem terminar a sessão e outro usuário acessou à sua conta. Além disso, a empresa quer impedir o upload de arquivos com extensões perigosas. Você precisa configurar a solução para evitar estes incidentes de segurança. Selecione as ações corretas para cada requisito, respectivamente: 1. Prevenir acesso não autorizado aos dispositivos deixados ligados. 2. Prevenir que os usuários façam upload de um tipo específico de arquivo.",
        "options": [
            "1. Configurar controles de acesso no Azure Active Directory | 2. Inserir os tipos de arquivo restritos no SharePoint admin center",
            "1. Definir um limite de inatividade (timeout) no Power Platform admin center | 2. Inserir os tipos de arquivo restritos no Power Platform admin center",
            "1. Definir um limite de inatividade na política de grupo (group policy) do usuário | 2. Inserir os tipos de arquivo permitidos no Power Platform admin center",
            "1. Configurar um fluxo do Power Automate para verificar inatividade | 2. Inserir os tipos de arquivo restritos no SharePoint admin center"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão lida com configurações de segurança a nível de Ambiente no Power Platform Admin Center (PPAC).",
            "papoReto": "Colega esqueceu-se do PC ligado no armazém? A sessão dele tem que cair sozinha depois de X minutos (Timeout de Sessão). Pessoal anda a anexar vírus (.exe) no sistema? Tem que se bloquear essa extensão. E o melhor de tudo: você configura ambas as coisas no mesmo lugar: o Power Platform Admin Center.",
            "respostaCerta": "1. Definir um limite de inatividade no Power Platform Admin Center | 2. Inserir os tipos de arquivo restritos no Power Platform Admin Center",
            "puloDoGato": "A funcionalidade de 'Session Timeout' (Tempo limite de sessão) encerra automaticamente a sessão do usuário após um período de inatividade. O bloqueio de extensões de anexos (Block specific file extensions) impede uploads indesejados. Ambas são Definições de Ambiente (Environment Settings) configuradas diretamente no PPAC.",
            "cascasDeBanana": [
                "Usar Azure AD ou Políticas de Grupo do Windows: O requisito foca na segurança da solução Dynamics/Power Platform, logo a configuração nativa do PPAC (Session timeout) é a abordagem correta e direta da prova.",
                "SharePoint admin center: Embora o SharePoint possa armazenar documentos, a restrição de anexos na interface do Dataverse/Model-driven é gerida no centro de administração da Power Platform."
            ],
            "dicaOuro": "Sessões esquecidas (Timeout) e Anexos proibidos (Blocked extensions) = Resolve-se nas 'Definições do Ambiente' (Environment Settings) no Power Platform Admin Center."
        },
        "difficulty": "avancado",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q23_topic1",
        "text": "A equipe de vendas de uma empresa quer uma forma simplificada de gerenciar as oportunidades no Dynamics 365 Sales, sem adicionar código personalizado. Você tem de fornecer uma solução para cada requisito. Quais soluções deve fornecer na seguinte ordem? 1. Arrastar e soltar (drag and drop) oportunidades para mudar de fase. 2. Mostrar a cada vendedor as suas oportunidades na vista de Calendário e Kanban. 3. Mostrar o número de oportunidades abertas por fase numa vista padrão.",
        "options": [
            "1. Adicionar o controle Kanban | 2. Adicionar ambos os controles (Calendário e Kanban) à vista 'As Minhas Oportunidades' | 3. Utilizar o painel de gráficos (chart pane) na vista",
            "1. Adicionar a Linha do Tempo (Timeline) | 2. Adicionar os controles a uma vista customizada | 3. Utilizar a vista de Lista",
            "1. Adicionar o controle Kanban | 2. Adicionar um controle em 'Todas as Oportunidades' e outro numa vista customizada | 3. Utilizar o controle Editable Grid",
            "1. Adicionar Grade Editável (Editable Grid) | 2. Adicionar ambos os controles à vista 'As Minhas Oportunidades' | 3. Utilizar o painel de gráficos"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma ótima questão sobre como melhorar a interface e a experiência de usuário (UX) com controles visuais padr�o (nativos).",
            "papoReto": "Se os vendedores querem arrastar os 'cartões' de oportunidades pelas colunas (fases) tal como se faz no Trello, isso chama-se 'Kanban'. Se eles querem que isso apareça só para as oportunidades deles, adicionamos esses controles visuais (Kanban e Calendário) diretamente na vista 'As Minhas Oportunidades'. E para ver gráficos rápidos de quantas vendas estão em cada fase? Basta abrir a gaveta de gráficos (Chart pane) que já vem colada ao lado da lista.",
            "respostaCerta": "1. Adicionar o controle Kanban | 2. Adicionar ambos os controles (Calendário e Kanban) à vista 'As Minhas Oportunidades' | 3. Utilizar o painel de gráficos (chart pane) na vista",
            "puloDoGato": "O controle Kanban no Dynamics 365 permite a funcionalidade de arrastar e soltar (Drag and Drop) baseada no Fluxo de Processo Empresarial (BPF) ou no Status da Oportunidade. Ao configurar controles, podemos adicioná-los a vistas específicas (como 'My Opportunities') em vez de a todas as vistas.",
            "cascasDeBanana": [
                "Editable Grid (Grade Editável): Permite editar campos rapidamente como no Excel, mas NÃO permite 'arrastar e soltar' entre colunas/fases.",
                "Timeline (Linha de Tempo): Serve para registar e-mails, tarefas e notas cronologicamente, não para gerenciar as fases das oportunidades."
            ],
            "dicaOuro": "Arrastar e soltar (Drag and Drop) oportunidades = Controle Kanban. Ver dados resumidos em barras/pizza sem sair da lista = Chart Pane (Painel de Gráficos)."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q24_topic1",
        "text": "[Série de Questões] Cenário: Você administra os ambientes do Microsoft 365 e Power Platform para a sua empresa. A empresa possui um aplicativo orientado por modelo (model-driven app) para rastrear interações com clientes. Uma usuária chamada Elisabeth Rice entra no aplicativo usando o nome de login: Elisabeth.Rice@contoso.com. Após casar, a Elisabeth muda o seu nome legal para Elisabeth Mueller. Você precisa atualizar o nome de login da usuária sem perder nenhum histórico do aplicativo. Solução Proposta: Nas Configurações do Dynamics 365, selecione 'Configuração de Email' (Email Configuration). Na caixa de correio ativa da usuária, atualize o nome. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma questão sobre gestão de identidade de usuários no ecossistema da Power Platform.",
            "papoReto": "Mudar o nome de login de uma pessoa é um assunto para a equipe de TI resolver lá no 'RH' do sistema (o portal do Microsoft 365 / Microsoft Entra ID). Tentar mudar isso nas configurações de envio de e-mail do Dynamics não vai alterar em nada o login dela para entrar no sistema.",
            "respostaCerta": "Não",
            "puloDoGato": "Todos os usuários do Dataverse/Dynamics são geridos de forma centralizada pelo Microsoft Entra ID (antigo Azure AD). Para alterar o UPN (User Principal Name / nome de login), o administrador deve ir ao Microsoft 365 Admin Center, alterar lá, e o Dataverse sincronizará essa alteração mantendo todo o histórico da Elisabeth intacto.",
            "cascasDeBanana": [
                "Achar que alterar o nome na 'Caixa de Correio' (Mailbox) afeta o login. A configuração de e-mail serve apenas para permitir que o Dynamics envie/receba e-mails em nome dela usando a sincronização do servidor, não gere a identidade ou o login de acesso."
            ],
            "dicaOuro": "Sempre que a questão pedir para alterar Identidade, Login ou Senha, a resposta correta DEVE envolver o Microsoft 365 Admin Center ou o Microsoft Entra ID."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q25_topic1",
        "text": "Você planeia implementar o Microsoft Dataverse. Você deve rastrear as alterações feitas a duas colunas específicas na tabela Conta (Account). Você tem de manter um log histórico destas alterações e rastrear APENAS o necessário. Você já ativou as definições globais de auditoria da organização. Você precisa configurar o sistema para rastrear estas duas colunas. Qual combinação de ações deve executar?",
        "options": [
            "1. Ativar o controle de alterações (change tracking) para a tabela Conta E 2. Ativar a auditoria (auditing) para as colunas.",
            "1. Ativar a auditoria (auditing) para a tabela Conta E 2. Ativar a auditoria para as duas colunas específicas.",
            "1. Ativar a auditoria (auditing) para a tabela Conta E 2. Ativar o controle de alterações (change tracking) para as colunas.",
            "1. Ativar o controle de alterações (change tracking) para a tabela Conta E 2. Para as colunas específicas."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão testa a diferença crucial entre 'Auditing' (Auditoria) e 'Change Tracking' (Controle de Alterações) no Dataverse.",
            "papoReto": "Quer saber 'quem mudou o campo Telefone, a que horas, e qual era o número antigo'? O nome disso é Auditoria (Auditing). Para ela funcionar nestas duas colunas, o sistema é como um quadro elétrico: você liga o disjuntor da casa (já ligado na organização), depois liga o disjuntor da sala (ativar na Tabela Conta) e, por fim, liga as tomadas (ativar nas Colunas).",
            "respostaCerta": "1. Ativar a auditoria (auditing) para a tabela Conta E 2. Ativar a auditoria para as duas colunas específicas.",
            "puloDoGato": "A Auditoria de Tabela é um pré-requisito obrigatório para a Auditoria de Coluna. Se não ligar na Tabela, o Dataverse ignora a configuração da coluna. 'Change Tracking' (Controle de alterações) é uma configuração totalmente diferente, usada apenas nos bastidores para exportar/sincronizar dados para fora do Dataverse (ex: Azure Synapse), e não mantém o histórico detalhado visualizável por coluna para os usuários.",
            "cascasDeBanana": [
                "Confundir Auditing com Change Tracking. A prova faz isso de propósito. Falou em 'manter um log histórico' (ver o que mudou na interface) = Auditing.",
                "Achar que o Change Tracking pode ser ativado no nível da coluna. O Change Tracking só é ativado no nível da Tabela inteira."
            ],
            "dicaOuro": "Manter histórico de alterações legível = Auditing. Sincronizar dados com um armazém de dados externo = Change Tracking."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q26_topic1",
        "text": "[Série de Questões] Cenário: Num registro de Contato, um usuário cria um registro de Anotação (Note) que contém a palavra 'running' (a correr). Uma semana depois, o usuário relata que não consegue encontrar o Contato associado àquela Anotação. Você precisa encontrar a anotação. Solução Proposta: Usar a Pesquisa Categorizada (Categorized Search) para pesquisar pela palavra 'run'. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão aborda as diferenças entre os mecanismos de pesquisa disponíveis no Dataverse (Categorized Search vs Dataverse Search/Relevance Search).",
            "papoReto": "A 'Pesquisa Categorizada' é 'quadrada': se o usuário digitou a palavra exata 'run', ela vai procurar exatamente 'run'. Ela não é inteligente o suficiente para perceber que 'run' e 'running' vêm da mesma raiz de palavra. Como a anotação tem 'running', pesquisar por 'run' usando este tipo de pesquisa vai falhar redondamente.",
            "respostaCerta": "Não",
            "puloDoGato": "Para que a pesquisa compreenda conjugações ou radicais de palavras (lemmatization/stemming) como 'run' para achar 'running', ou para pesquisar eficientemente dentro de Anexos/Anotações (Notes), a funcionalidade correta e moderna a ser ativada e usada é a Pesquisa do Dataverse (Dataverse Search - antigamente chamada de Relevance Search).",
            "cascasDeBanana": [
                "Achar que a Pesquisa Categorizada usa inteligência artificial. Ela usa apenas correspondências de prefixos simples do SQL (ex: buscar por 'run*' com um asterisco até funcionaria, mas não foi isso que a solução propôs)."
            ],
            "dicaOuro": "Pesquisa que entende conjugações verbais (running = run) e que pesquisa dentro de documentos PDF anexados = Dataverse Search (Pesquisa do Dataverse). Pesquisa Categorizada NÃO faz isso."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q27_topic1",
        "text": "[Série de Questões] Cenário: Num registro de Contato, um usuário cria uma Anotação (Note) que contém a palavra 'running'. Uma semana depois, não consegue encontrar o Contato associado àquela Anotação. Ele precisa encontrar a Anotação. Solução Proposta: Usar a Pesquisa de Relevância (Relevance Search / Dataverse Search) para pesquisar pela palavra 'run'. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Continuação da série sobre os mecanismos de pesquisa no Dataverse. Desta vez, com a ferramenta correta!",
            "papoReto": "Lembra-se da questão 26? A Pesquisa de Relevância (agora chamada Pesquisa do Dataverse) é a pesquisa inteligente da plataforma. Se digitar 'run', ela sabe perfeitamente que 'running' é da mesma família de palavras (flexão verbal) e vai trazer-lhe a anotação que procura.",
            "respostaCerta": "Sim",
            "puloDoGato": "A Relevance Search (Dataverse Search) possui inteligência baseada no Azure Cognitive Search. Ela aplica o conceito de 'lemmatization' (lematização), o que significa que pesquisar por palavras na sua forma base (run) traz resultados com as suas flexões (running, ran). Além disso, ela pesquisa dentro de anexos e anotações nativamente.",
            "cascasDeBanana": [],
            "dicaOuro": "Pesquisa inteligente que entende raízes de palavras e pesquisa dentro de arquivos e anexos = Relevance Search / Dataverse Search."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q28_topic1",
        "text": "[Série de Questões] Cenário: Num registro de Contato, um usuário cria uma Anotação (Note) que contém a palavra 'running'. Uma semana depois, não consegue encontrar o Contato associado àquela Anotação. Ele precisa encontrar a Anotação. Solução Proposta: Usar a Localização Rápida (Quick Find) na lista de Anotações para pesquisar pela palavra 'run'. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mais uma da série de pesquisas. Agora tentando usar a Localização Rápida (Quick Find).",
            "papoReto": "A Localização Rápida é aquela barra de pesquisa que fica no canto superior direito de uma lista (view). Tal como a Pesquisa Categorizada, ela é 'quadrada' e literal. Se procurar por 'run', ela vai procurar a palavra exata (ou palavras começadas por 'run' se usar um asterisco). Ela não tem a inteligência de associar a 'running'.",
            "respostaCerta": "Não",
            "puloDoGato": "O Quick Find (Localização Rápida) baseia-se em consultas SQL diretas na base de dados. Ele requer correspondência exata ou a utilização de curingas (*), mas não tem inteligência linguística e semântica para associar radicais de palavras.",
            "cascasDeBanana": [
                "Achar que o Quick Find é inteligente o suficiente. Lembre-se: a inteligência textual e linguística existe apenas na Relevance Search (Dataverse Search)."
            ],
            "dicaOuro": "Quick Find e Categorized Search = Pesquisa literal/exata. Relevance Search = Pesquisa inteligente/semântica."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q29_topic1",
        "text": "Você está a implementar um aplicativo orientado por modelo (model-driven app) e precisa aplicar lógica de negócios em vários locais sem escrever código personalizado. Selecione o método correto para cada requisito, respectivamente: 1. Tornar um campo só de leitura (read-only) até que um valor pré-determinado seja excedido. 2. Enviar um e-mail automaticamente quando o status de um registro for alterado para desativado. 3. Usar o valor anterior (previous value) de um campo quando o valor for automaticamente atualizado.",
        "options": [
            "1. Fluxo de Trabalho (Workflow) | 2. Regra de Negócios (Business Rule) | 3. Regra de Negócios",
            "1. Regra de Negócios | 2. Fluxo de Trabalho em Tempo Real (Real-time workflow) | 3. Fluxo de Trabalho em Tempo Real",
            "1. Regra de Negócios | 2. Fluxo Instantâneo (Instant flow) | 3. Fluxo de Trabalho em Tempo Real",
            "1. Fluxo Instantâneo | 2. Regra de Negócios | 3. Fluxo Instantâneo"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma excelente questão para diferenciar as várias ferramentas de automação low-code/no-code disponíveis no Dataverse.",
            "papoReto": "Tornar um campo só de leitura no tela é trabalho exclusivo para a Regra de Negócios (Business Rule). Mandar um e-mail automaticamente quando o status muda é automação de backend (Real-time Workflow). E para conseguir ver 'qual era o valor antes da alteração' (o famoso 'before and after'), apenas os Workflows clássicos em tempo real conseguem capturar com facilidade essa imagem antes de se gravar na base de dados.",
            "respostaCerta": "1. Regra de Negócios | 2. Fluxo de Trabalho em Tempo Real | 3. Fluxo de Trabalho em Tempo Real",
            "puloDoGato": "Regras de negócios controlam o comportamento da Interface de Usuário (formulário). Os Workflows em tempo real operam de forma síncrona (no servidor) e conseguem capturar o estado exato dos dados ('pre-image') antes da transação ser confirmada na base de dados, o que responde perfeitamente ao requisito 3 de usar o valor 'anterior'.",
            "cascasDeBanana": [
                "Power Automate Instant Flow (Fluxo Instantâneo): Este fluxo é disparado manualmente (quando alguém clica ativamente num botão). Não serve para automatizar uma reação em segundo plano imediata a uma mudança de status."
            ],
            "dicaOuro": "Ações no tela/formulário (Ocultar, Bloquear, Tornar Obrigatório) = Business Rule. Capturar o 'valor anterior' do campo numa automação síncrona = Real-time Workflow."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q30_topic1",
        "text": "A sua organização não permite o uso de código personalizado para soluções. Você precisa criar uma visualização (view) que possa ser vista por todos os usuários na organização. Onde deve criar a visualização?",
        "options": [
            "Localização Avançada (Advanced Find)",
            "No componente de Entidades dentro de uma Solução (Entities component of a solution)",
            "Modelo do Microsoft Excel (Microsoft Excel template)",
            "Área de Modelos (Templates area)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão é uma variação exata da Questão 2 deste simulador, mas com opções de resposta ligeiramente diferentes. A Microsoft adora fazer isto!",
            "papoReto": "Se a visualização é para *todos*, é uma Visualização Pública (Public View). Onde é que construímos e guardamos as coisas para a empresa inteira usar de forma consolidada e estruturada? Dentro de uma Solução, acedendo à seção de Tabelas/Entidades. Nada de criar visualizações pessoais isoladas.",
            "respostaCerta": "No componente de Entidades dentro de uma Solução (Entities component of a solution)",
            "puloDoGato": "Para criar componentes globais sem usar código, deve criar ou editar a Tabela (Entidade) diretamente nas configurações do sistema ou através de uma Solução no portal do criador (make.powerapps.com). Nas opções dadas, 'Componente de Entidades dentro de uma solução' é a única resposta que descreve a customização oficial da arquitetura do sistema.",
            "cascasDeBanana": [
                "Localização Avançada (Advanced Find): Permite criar visualizações *pessoais*. Para partilhar com toda a empresa daria imenso trabalho (teria que partilhar a view manualmente com cada equipe/usuário) e não faria parte da customização base do sistema (Solution)."
            ],
            "dicaOuro": "Visualizações para 'todos os usuários' (Public Views) devem ser sempre criadas através de uma Solução no componente da Entidade (Tabela)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q31_topic1",
        "text": "Você desenvolve um aplicativo Power Apps (model-driven). Os usuários relatam que o formulário principal não exibe dados de outras entidades (tabelas) nem lhes permite editar dados de outras entidades. Você precisa de incorporar (embed) informações de outras entidades no formulário e permitir que os usuários editem os dados. Quais ações deve executar? Selecione a opção correta para cada requisito na ordem: 1. Editar dados (Edit data). 2. Visualizar dados (View data).",
        "options": [
            "1. Adicionar uma subgrade (sub-grid) | 2. Adicionar um painel de referência (reference panel)",
            "1. Adicionar um formulário de criação rápida (quick create form) | 2. Adicionar uma visualização rápida (quick view)",
            "1. Adicionar um formulário móvel (mobile form) | 2. Adicionar uma entidade virtual (virtual entity)",
            "1. Adicionar uma visualização rápida (quick view) | 2. Adicionar um formulário de criação rápida (quick create form)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão aborda como mostrar e introduzir dados de tabelas relacionadas dentro do formulário principal de uma tabela no Dynamics 365 / Dataverse.",
            "papoReto": "Se está a olhar para a ficha de uma Conta e quer ver os dados do Contato Principal sem sair da página, adiciona um 'Formulário de Visualização Rápida' (Quick View Form). E se, a partir dessa mesma Conta, quiser introduzir rapidamente os dados de um novo registro relacionado (ex: um novo Caso/Ocorrência) sem ter de navegar para outro tela, utiliza o 'Formulário de Criação Rápida' (Quick Create Form).",
            "respostaCerta": "1. Adicionar um formulário de criação rápida (quick create form) | 2. Adicionar uma visualização rápida (quick view)",
            "puloDoGato": "Os formulários 'Quick View' são sempre de leitura (read-only) e servem para mostrar dados de um registro pai/relacionado. Para permitir a introdução/edição simplificada e rápida de novos dados sem perder o contexto da página atual, o Microsoft Learn recomenda nativamente os 'Quick Create Forms'.",
            "cascasDeBanana": [
                "Inverter a ordem (Visualização Rápida para editar e Criação Rápida para visualizar): A Visualização Rápida (Quick View) não permite editar campos, apenas visualizá-los.",
                "Sub-grid (Subgrade): Embora as subgrades permitam a edição e adição de registros, as opções de resposta no exame original (hotspot) focavam no par nativo 'Quick View' para leitura e 'Quick Create' para introdução ágil."
            ],
            "dicaOuro": "Visualizar dados de outro registro no formulário = Quick View Form (Formulário de Visualização Rápida). Introduzir dados rapidamente sem sair da página = Quick Create Form."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q32_topic1",
        "text": "Uma empresa utiliza um canvas app (aplicativo de tela) para gerenciar recursos de produção numa região específica. Os colaboradores devem estar nas instalações da empresa para utilizar o aplicativo. Devido a uma necessidade repentina de trabalho remoto, os colaboradores deixaram de se deslocar a um local específico e não conseguem acessar ao canvas app. Você deve reconfigurar o aplicativo para garantir que os colaboradores apenas acedem a partir de um número limitado de localizações. Quais componentes deve configurar para cada requisito, respectivamente? 1. Garantir que os colaboradores só podem acessar a partir de uma região específica. 2. Especificar as localizações a partir das quais um usuário pode acessar ao aplicativo.",
        "options": [
            "1. Definições do Canvas app | 2. Política de Conformidade (Compliance policy)",
            "1. Power Platform admin center | 2. Política de Segurança Local (Local Security policy)",
            "1. Azure Active Directory | 2. Política de Acesso Condicional (Conditional Access policy)",
            "1. Office 365 admin center | 2. Direito de Acesso (Security role)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão fundamental sobre a segurança baseada na localização (geofencing) e quem é responsável por essa barreira no ecossistema Microsoft.",
            "papoReto": "O Power Apps por si só não sabe proibir alguém de entrar com base na endereço ou no IP. Quem faz o papel de 'segurança do edifício' a verificar a sua identidade e a localização de onde está a tentar entrar é o Azure Active Directory (atualmente Microsoft Entra ID). Lá dentro, o segurança tem um manual de regras chamado 'Política de Acesso Condicional', onde diz: 'Se ele não estiver na região X, bloqueia a entrada'.",
            "respostaCerta": "1. Azure Active Directory | 2. Política de Acesso Condicional (Conditional Access policy)",
            "puloDoGato": "O acesso condicional (Conditional Access) avalia sinais como o local (endereço IP), o estado do dispositivo e o usuário para tomar decisões de segurança (ex: exigir MFA ou bloquear o acesso). Esta funcionalidade é exclusiva do Microsoft Entra ID (Azure AD), e não é configurada no Power Platform Admin Center nem dentro do próprio Canvas App.",
            "cascasDeBanana": [
                "Definições do Canvas app: O Canvas app não gere políticas de segurança de rede ou identidade.",
                "Direito de Acesso (Security Role): O Security Role diz o que o usuário pode fazer com os dados DEPOIS de entrar. O Acesso Condicional diz SE ele pode entrar com base de onde ele vem."
            ],
            "dicaOuro": "Qualquer requisito que envolva 'bloquear acesso com base no IP, Região, Localização ou Forçar MFA (Autenticação Multifator)' = Azure Active Directory (Microsoft Entra ID) + Conditional Access Policy."
        },
        "difficulty": "avancado",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q33_topic1",
        "text": "Você tenta desativar várias moedas (currencies) num ambiente do Microsoft Dataverse. Você não consegue desativar a moeda dólar americano (US dollar). Você precisa determinar o motivo pelo qual não consegue desativar a moeda. Qual é o motivo?",
        "options": [
            "A. Você não é o proprietário (owner) do registro da moeda.",
            "B. A moeda é utilizada por um processo de negócio ativo.",
            "C. A moeda é a moeda base (base currency).",
            "D. A moeda é usada por outro registro."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão testa um conceito estrutural sobre como o Dataverse gere a componente financeira na sua arquitetura inicial.",
            "papoReto": "Quando se cria um ambiente novo no Dataverse, o sistema obriga-o a escolher qual vai ser a moeda 'oficial' ou principal desse ambiente (a Moeda Base). Todas as transações e taxas de conversão de câmbio vão usar essa moeda como âncora. Por ser o alicerce financeiro de toda a base de dados, a Microsoft simplesmente não permite que a desative ou a elimine.",
            "respostaCerta": "C. A moeda é a moeda base (base currency).",
            "puloDoGato": "A Base Currency (Moeda Base) é definida de forma definitiva no momento da criação da base de dados do ambiente. Esta moeda não pode ser apagada nem desativada. As restantes moedas transacionais que você criar depois podem ser desativadas se deixarem de ser usadas.",
            "cascasDeBanana": [
                "D. A moeda é usada por outro registro: Se uma moeda secundária (ex: Euro) for usada noutro registro (ex: uma Oportunidade), você ainda a pode desativar. Isso fará com que não seja mais possível escolhê-la em novas transações, mas não bloqueia a desativação da moeda em si.",
                "A. Não é o proprietário: Registros de moeda (Currency) são propriedade da Organização (Organization-owned), não têm um usuário como 'owner'."
            ],
            "dicaOuro": "A Moeda Base (Base Currency) de um ambiente NUNCA pode ser alterada, eliminada ou desativada após o ambiente ser aprovisionado."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q34_topic1",
        "text": "Um usuário tem acesso a uma base de dados existente do Microsoft Dataverse. Você precisa garantir que o usuário consiga criar aplicativos de tela (canvas apps) que consumam dados do Dataverse. Você não deve conceder permissões que não sejam necessárias (princípio do menor privilégio). Qual direito de acesso (security role) padrão (padr�o) deve atribuir ao usuário?",
        "options": [
            "Administrador de Ambiente (Environment Admin)",
            "Usuário Básico (Basic User)",
            "Criador de Ambiente (Environment Maker)",
            "Personalizador de Sistema (System Customizer)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Atenção: Esta questão testa exatamente o mesmo conceito da Questão 21! A Microsoft costuma repetir conceitos centrais no exame com enunciados ligeiramente diferentes.",
            "papoReto": "Tal como vimos antes, se a pessoa só vai 'desenhar' e construir aplicativos de tela (Canvas Apps) sem precisar de criar ou alterar as tabelas da base de dados, damos-lhe o 'kit de ferramentas' de construtor: o papel de Criador de Ambiente.",
            "respostaCerta": "Criador de Ambiente (Environment Maker)",
            "puloDoGato": "A função de 'Environment Maker' permite aos usuários criar recursos no ambiente (como Canvas Apps, fluxos do Power Automate e conexões), mas NÃO lhes dá privilégios administrativos sobre as tabelas do Dataverse. É a aplicação perfeita do 'menor privilégio'.",
            "cascasDeBanana": [
                "Personalizador de Sistema (System Customizer): Dá poder para alterar a estrutura de todas as tabelas (entidades), o que excede o requisito de apenas 'criar canvas apps'.",
                "Usuário Básico (Basic User): Permite apenas ler/escrever dados nos aplicativos, mas não criar recursos novos."
            ],
            "dicaOuro": "Criar Canvas Apps ou Fluxos + Menor Privilégio = Environment Maker."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q35_topic1",
        "text": "Você está a configurar a segurança do Microsoft Dataverse e planeia atribuir usuários a Equipes (Teams). A propriedade de registros (ownership) e as permissões baseiam-se em requisitos de negócio. Você precisa determinar qual tipo de equipe deve usar para cada requisito. Selecione a combinação correta para os seguintes requisitos na ordem: 1. Capacidade de ser a proprietária (owner) de registros no Dataverse. 2. Fornece permissões aos membros sem ter um direito de acesso (security role) atribuído à própria equipe.",
        "options": [
            "1. Equipe de Acesso (Access team) | 2. Equipe de Grupo do Azure AD (AAD group team)",
            "1. Equipe do Microsoft Teams | 2. Equipe de Proprietário (Owner team)",
            "1. Equipe de Grupo do Azure AD (AAD group team) | 2. Equipe de Acesso (Access team)",
            "1. Equipe de Proprietário (Owner team) | 2. Equipe de Grupo do Azure AD (AAD group team)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão essencial sobre os Tipos de Equipes (Team Types) disponíveis na arquitetura de segurança do Dataverse.",
            "papoReto": "Se quer que uma equipe seja 'dona' de um cliente ou fatura, tem de ser uma Equipe de Proprietário (Owner Team) ou uma Equipe ligada ao Azure AD (AAD Group Team). Agora, se quer apenas juntar 5 pessoas de departamentos diferentes para lerem e editarem um registro específico, sem ter de lhes dar uma nova função de segurança complexa, você junta-os numa 'Equipe de Acesso' (Access Team) e partilha o registro com eles.",
            "respostaCerta": "1. Equipe de Grupo do Azure AD (AAD group team) | 2. Equipe de Acesso (Access team)",
            "puloDoGato": "No Dataverse, APENAS as 'Owner Teams' (Equipes de Proprietários) e as 'AAD Group Teams' (Equipes de Grupo do Azure AD) podem ser donas de registros e TÊM de ter um Security Role atribuído à equipe. As 'Access Teams' (Equipes de Acesso) NÃO são donas de registros e NÃO têm Security Roles atribuídos; os privilégios vêm da partilha (sharing) direta do registro com essa equipe de acesso baseando-se nos privilégios individuais de cada membro.",
            "cascasDeBanana": [
                "Inverter os conceitos: Se atribuir uma Access Team para ser dona de um registro, o sistema dará erro, pois as Equipes de Acesso não foram feitas para Ownership (propriedade)."
            ],
            "dicaOuro": "Own records (ser dono) = Owner Team ou Azure AD Group Team. Sem Security Role atribuído à equipe (só partilha) = Access Team."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q36_topic1",
        "text": "Uma empresa tem localizações nos Estados Unidos, Brasil, Índia e Japão e realiza transações financeiras em todas estas regiões. As transações financeiras no Brasil vão ser descontinuadas durante os próximos meses. Os usuários já não devem ser capazes de criar registros associados à moeda brasileira (Real). No entanto, os registros históricos devem permanecer intactos. Você precisa configurar o Microsoft Dataverse para cumprir este requisito. O que deve fazer?",
        "options": [
            "Desativar o pacote de idioma (language pack) brasileiro.",
            "Renomear a moeda brasileira.",
            "Excluir (Delete) o registro da moeda brasileira.",
            "Desativar (Deactivate) o registro da moeda brasileira."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Esta questão trata da manutenção de integridade de dados históricos versus a interrupção de novas transações.",
            "papoReto": "Se o Brasil vai parar de operar vendas, não queremos que as pessoas continuem a lançar vendas em Reais. Mas se apagarmos a moeda do sistema (Delete), todas as vendas passadas que usaram o Real vão ficar quebradas ou perder a referência financeira. A solução? 'Congelar' a moeda. Nós Desativamo-la.",
            "respostaCerta": "Desativar (Deactivate) o registro da moeda brasileira.",
            "puloDoGato": "O Dataverse não permite excluir (Delete) moedas que já estejam em uso por outros registros (como Oportunidades ou Faturas antigas). Desativar (Deactivate) um registro de moeda impede que ela seja selecionada em novas transações, mas mantém perfeitamente a integridade e os cálculos de todos os registros históricos.",
            "cascasDeBanana": [
                "Excluir (Delete): O sistema bloquearia esta ação devido a dependências (relacionamentos com registros antigos), e se não bloqueasse, causaria perda de dados.",
                "Desativar o pacote de idioma: O idioma afeta apenas a tradução da interface do usuário (telas, botões), não tem absolutamente nada a ver com as regras de moedas (Currency) para valores financeiros."
            ],
            "dicaOuro": "Parar de usar sem perder o histórico = Desativar (Deactivate). Nunca 'Excluir' (Delete) dados transacionais ou moedas usadas."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q37_topic1",
        "text": "[Série de Questões] Cenário: Uma empresa possui uma equipe de vendas e uma equipe de gestão. As equipes pertencem à mesma unidade de negócios, mas são equipes diferentes. A equipe de gestão precisa de visualizar os dados da equipe de vendas, e a equipe de vendas precisa de visualizar os dados da equipe de gestão. Selecione as ações corretas para cada requisito na ordem: 1. Garantir que a equipe de gestão consegue ver os dados da equipe de vendas. 2. Garantir que a equipe de vendas consegue ver os dados da equipe de gestão.",
        "options": [
            "1. Configurar uma hierarquia de posições (Position hierarchy) | 2. Adicionar a equipe de vendas ao modelo de equipe de acesso (access team) da gestão.",
            "1. Alterar o direito de acesso da gestão | 2. Alterar o direito de acesso das vendas.",
            "1. Adicionar a gestão a uma equipe de acesso | 2. Configurar uma hierarquia de posições.",
            "1. Configurar uma hierarquia de gestores (Manager hierarchy) | 2. Configurar uma hierarquia de gestores."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão foca nos modelos avançados de segurança do Dataverse: Hierarquias (Hierarchical Security) e Equipes de Acesso (Access Teams).",
            "papoReto": "Para a chefia ver os dados de quem está abaixo deles de forma automática, ativamos a 'Hierarquia' (a chefia herda a visão dos subordinados). Mas a hierarquia só funciona de cima para baixo! Se os vendedores (que estão em baixo) precisam de ver dados da gestão (que estão em cima), a hierarquia não ajuda. Aí temos de usar as 'Equipes de Acesso' (Access Teams) para partilhar registros específicos com eles de forma dinâmica.",
            "respostaCerta": "1. Configurar uma hierarquia de posições (Position hierarchy) | 2. Adicionar a equipe de vendas ao modelo de equipe de acesso da gestão.",
            "puloDoGato": "A segurança hierárquica (Manager ou Position Hierarchy) permite que os usuários num nível superior acedam aos dados dos usuários num nível inferior de forma automática. O inverso não é verdadeiro. Para partilhar dados lateralmente ou de baixo para cima de forma ágil e caso a caso, as Equipes de Acesso (Access Teams) são a melhor prática nativa.",
            "cascasDeBanana": [
                "Alterar os direitos de acesso (Security Roles): Como pertencem à mesma Business Unit, dar permissões de leitura no nível da Unidade de Negócios faria com que todos vissem absolutamente tudo de todos, o que violaria o isolamento e as regras de restrição base do cenário.",
                "Usar hierarquia para vendas ver gestão: A hierarquia nunca concede acesso a quem está num nível inferior para ver os dados de quem está no topo."
            ],
            "dicaOuro": "Acesso automático de Cima para Baixo = Hierarquia (Hierarchy). Acesso Lateral, partilha de registros pontuais ou de Baixo para Cima = Equipes de Acesso (Access Teams)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q38_topic1",
        "text": "Você gere um ambiente do Dynamics 365 e cria um conjunto de opções global (global option set / choice) para uma solução personalizada. Mais tarde, repara que o prefixo padrão (default prefix) está incorreto e que os valores numéricos das opções (option values) são demasiado longos. Você precisa de alterar o valor numérico do conjunto de opções e garantir que o prefixo fica correto. Quais são as DUAS ações conjugadas que deve executar?",
        "options": [
            "A) Alterar o prefixo nas definições do sistema E B) Editar o conjunto de opções diretamente.",
            "A) Alterar o prefixo do publicador (publisher's prefix) E B) Excluir (Delete) e recriar o conjunto de opções.",
            "A) Alterar o prefixo do publicador E B) Editar o conjunto de opções diretamente.",
            "A) Alterar o prefixo nas definições do sistema E B) Excluir (Delete) e recriar o conjunto de opções."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão avalia o conhecimento sobre como as soluções (Solutions), os publicadores (Publishers) e os valores internos das colunas funcionam no Dataverse.",
            "papoReto": "Quando cria um campo de escolha (Option Set), o sistema gera um valor numérico oculto (ex: 100000001). Esse '10000' é o prefixo que vem do Publicador da Solução em que está a trabalhar. Se esse número ficou errado ou é demasiado longo, não dá para simplesmente clicar e editar. Tem de se excluir o campo, consertar o prefixo no cadastro do Publicador da Solução, e criar o campo de novo a partir do zero.",
            "respostaCerta": "A) Alterar o prefixo do publicador (publisher's prefix) E B) Excluir (Delete) e recriar o conjunto de opções.",
            "puloDoGato": "No Dataverse, NÃO é possível alterar o valor numérico base (value) de um Global Option Set após a sua criação (embora possa alterar o texto visível/label). Para corrigir um prefixo ou um valor numérico gerado, a única solução é excluir o campo e recriar. O prefixo (tanto de texto como 'cr435_' quanto o prefixo numérico base de opções) é definido exclusivamente nas propriedades do Publicador (Publisher) da solução.",
            "cascasDeBanana": [
                "Editar o conjunto de opções: O sistema bloqueia a edição do valor numérico base após a criação para garantir a integridade da base de dados.",
                "Alterar nas definições do sistema: O prefixo não é uma configuração global do sistema, é controlado pela Solução/Publicador específico onde o componente está a ser criado."
            ],
            "dicaOuro": "Errou o prefixo (nome ou número) de um Option Set (Choice)? A única solução do sistema é Delete & Recreate (Excluir e Recriar). Definir Prefixos = Configurações do Publicador (Publisher)."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q39_topic1",
        "text": "Você precisa de exibir a receita (revenue) de todas as oportunidades associadas a uma Conta (Account) específica diretamente no formulário da própria Conta. Qual tipo de campo (coluna) deve criar?",
        "options": [
            "Campo Calculado (Calculated field)",
            "Campo de Pesquisa (Lookup field)",
            "Conjunto de opções (Option set)",
            "Campo de Consolidação (Rollup field)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Uma questão fundamental e muito frequente no exame sobre agregação de dados entre tabelas relacionadas (1:N) no Dataverse.",
            "papoReto": "Imagine a Conta como uma capa de um dossier. Dentro dela existem várias folhas, que são as Oportunidades de negócio. Se você quer somar o valor em euros de todas essas folhas e mostrar o Total na capa do dossier, tem de 'enrolar'/'consolidar' os valores de baixo para cima. A coluna que faz isso chama-se Campo de Consolidação (Rollup field).",
            "respostaCerta": "Campo de Consolidação (Rollup field)",
            "puloDoGato": "Rollup Fields (Campos de Consolidação) são utilizados para agregar valores matemáticos de múltiplos registros filhos (relação 1:N). Eles fazem operações como Sum (soma), Min, Max ou Count. Eles são calculados de forma assíncrona (a cada 12 horas ou por clique manual).",
            "cascasDeBanana": [
                "Campo Calculado (Calculated field): Um campo calculado consegue fazer matemática dentro do MESMO registro (Ex: Quantidade * Preço Unitário), ou ir a um registro Pai buscar um dado, mas NÃO consegue olhar para 'baixo' e somar múltiplos registros filhos. Para N registros, tem de ser sempre Rollup."
            ],
            "dicaOuro": "Somar/Contar NÚMEROS de vários registros filhos (1:N) = Rollup Field (Campo de Consolidação). Lógica/Matemática na mesma linha = Calculated Field."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q40_topic1",
        "text": "Você precisa configurar uma tabela personalizada (custom table) para ser utilizada na Aplicação do Dynamics 365 para Outlook (App for Outlook). Quais as definições que deve ativar nas propriedades da tabela para cumprir os requisitos? Selecione as ações corretas, respectivamente: 1. Garantir que os usuários possam rastrear (track / Set Regarding) e-mails do Outlook para a tabela personalizada. 2. Garantir que a tabela personalizada fica visível e pode ser pesquisada na App for Outlook.",
        "options": [
            "1. Ativar para atividades (Enable for activities) | 2. Ativar para celular (Enable for mobile)",
            "1. Ativar envio de e-mail (Send email) | 2. Ativar painel de referência (Enable reference panel)",
            "1. Ativar ligações (Enable connections) | 2. Ativar pesquisa de relevância (Enable relevance search)",
            "1. Ativar para atividades (Enable for activities) | 2. Ativar Grade Editável (Enable editable grid)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão explora os pré-requisitos técnicos ocultos para que as integrações nativas com o Outlook funcionem.",
            "papoReto": "Para o Dynamics permitir que você guarde um e-mail do Outlook a apontar para o seu registro personalizado (ex: guardar e-mail num 'Contrato'), essa tabela do Contrato TEM de estar configurada para aceitar anexar 'Atividades'. Além disso, como o painel lateral da App do Outlook é construído com base nas regras do celular, a tabela tem de estar obrigatoriamente ativada para a interface 'Mobile', caso contrário, nem aparece no painel de pesquisa do Outlook.",
            "respostaCerta": "1. Ativar para atividades (Enable for activities) | 2. Ativar para celular (Enable for mobile)",
            "puloDoGato": "A App do Dynamics 365 para Outlook é desenvolvida sobre a Interface Unificada (Unified Interface). Para que as tabelas apareçam lá, elas devem estar explicitamente ativadas no cliente Mobile ('Enable for mobile'). Para permitir o rastreamento (tracking) de e-mails, compromissos ou tarefas contra a tabela, é imperativo ativar as Atividades ('Enable for activities'). IMPORTANTE: Ativar 'Atividades' é uma ação irreversível na tabela!",
            "cascasDeBanana": [
                "Ativar envio de e-mail (Send email): Isto apenas adiciona o campo primário de e-mail ao formulário para que o próprio Dynamics possa enviar e-mails a partir dali. Não habilita a tabela a receber o vínculo (Set Regarding) através da App do Outlook."
            ],
            "dicaOuro": "Aparecer na lista do Outlook = 'Enable for Mobile'. Receber e-mails vinculados (Track/Set Regarding) = 'Enable for Activities'."
        },
        "difficulty": "intermediario",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q41_topic1",
        "text": "[Série de Questões] Cenário: Num registro de Contato, um usuário cria uma Anotação (Note) que contém a palavra 'running'. Uma semana depois, não consegue encontrar o Contato associado àquela Anotação. Ele precisa encontrar a Anotação. Solução Proposta: Usar a Pesquisa do Dataverse (Dataverse Search) para pesquisar pela palavra 'run'. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é a versão moderna e correta da nossa já conhecida série de perguntas sobre pesquisa no sistema.",
            "papoReto": "A Pesquisa do Dataverse (Dataverse Search) é o nome novo da antiga 'Relevance Search'. É a pesquisa inteligente da plataforma, alimentada por IA. Se procurar 'run', ela sabe que 'running' é a mesma coisa (da mesma família morfológica) e encontra o anexo ou a nota na hora.",
            "respostaCerta": "Sim",
            "puloDoGato": "A Dataverse Search suporta 'lemmatization' (lematização: encontrar palavras com a mesma raiz morfológica) e pesquisa perfeitamente dentro de notas e anexos em múltiplas tabelas ao mesmo tempo. É a solução mais avançada e eficaz para este cenário.",
            "cascasDeBanana": [
                "Na prova, tenha cuidado para não confundir 'Dataverse Search' com 'Categorized Search' ou 'Quick Find'. Apenas a Dataverse Search tem esta inteligência linguística profunda em inglês e em vários outros idiomas."
            ],
            "dicaOuro": "Dataverse Search = Inteligência artificial, lematização, procura em PDFs e Anexos = Sucesso total na pesquisa por variações de palavras."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q42_topic1",
        "text": "Você está a utilizar o assistente de Importação de Dados (Data import wizard) para importar registros de contas a partir de um arquivo CSV. O mapeamento é o seguinte: - A coluna 'Name' no CSV representa o nome da conta e mapeia para a coluna 'Account Name'. - A coluna 'Parent Name' no CSV representa a empresa holding (Conta Pai) com subsidiárias associadas. Os registros importados apenas têm relação com outros registros que também estão dentro do próprio arquivo CSV. Você precisa configurar a importação para que as relações (pais e filhos) sejam criadas automaticamente entre estes registros. O que deve fazer?",
        "options": [
            "Mapear 'Parent Name' do CSV para a coluna 'Parent Account'. Selecionar 'Account Name' como critério de pesquisa (lookup criteria).",
            "Mapear 'Parent Name' do CSV para a coluna 'Parent Account'. Selecionar 'Parent Account' como critério de pesquisa.",
            "Criar uma chave alternativa (alternate key) na tabela usando 'Account Name'. Não mapear 'Parent Name' do arquivo.",
            "Procurar os IDs dos registros no Dataverse. Adicionar os IDs como uma nova coluna no arquivo e mapear essa coluna para 'Parent Account'."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão técnica excelente sobre a importação de dados complexos (com relacionamentos na mesma tabela) usando o Assistente de Importação nativo.",
            "papoReto": "Tem um arquivo Excel/CSV com uma lista de empresas. Algumas são 'filhas' de outras que também estão nessa mesma lista. Para o sistema ligar a filha à mãe durante a importação, tem de lhe dizer: 'A coluna *Parent Name* do Excel vai ligar-se à coluna *Parent Account* do sistema. E para encontrar qual é a empresa mãe certa dentro do arquivo, procura pelo nome dela (*Account Name*)'.",
            "respostaCerta": "Mapear 'Parent Name' do CSV para a coluna 'Parent Account'. Selecionar 'Account Name' como critério de pesquisa (lookup criteria).",
            "puloDoGato": "Como os registros estão todos no mesmo arquivo (pais e filhos), o Assistente de Importação de Dados do Dynamics é suficientemente inteligente para processar isto, mas precisa que o Lookup Criteria (critério de busca) seja exato. O campo 'Parent Account' é um Lookup. O Lookup precisa de saber que campo textual vai usar para encontrar o registro. Como no CSV só temos Nomes (não temos GUIDs), o critério de pesquisa TEM de ser o 'Account Name' (Nome da Conta principal).",
            "cascasDeBanana": [
                "Procurar IDs no Dataverse (opção D): Daria um trabalho infernal e nem funcionaria bem porque as contas mães ainda não existem no sistema (estão a ser importadas simultaneamente no mesmo arquivo).",
                "Selecionar 'Parent Account' como critério de pesquisa (opção B): Errado. Você procura a empresa mãe pelo seu Nome (Account Name), e não pelo nome do pai da mãe."
            ],
            "dicaOuro": "Ao importar dados com relacionamentos internos (Conta Pai/Filho no mesmo CSV), mapeie a coluna do Pai para o campo Lookup e use SEMPRE o Campo Principal (Primary Name Column) como o Critério de Pesquisa (Lookup Criteria)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q43_topic1",
        "text": "Você precisa garantir que um usuário possa executar tarefas administrativas. A solução deve utilizar o princípio do menor privilégio (least privilege). Qual função (role) deve atribuir a cada requisito? Selecione a combinação correta para as seguintes ações, respectivamente: 1. Criar novos usuários. 2. Atribuir funções (roles) aos usuários dentro do sistema. 3. Executar backups de uma instância.",
        "options": [
            "1. Administrador Global do Office 365 | 2. Administrador de Sistema do Dynamics 365 | 3. Administrador de Serviço do Dynamics 365",
            "1. Administrador de Sistema do Dynamics 365 | 2. Administrador Global do Office 365 | 3. Administrador de Serviço do Dynamics 365",
            "1. Administrador Global do Office 365 | 2. Administrador de Serviço do Dynamics 365 | 3. Administrador de Sistema do Dynamics 365",
            "1. Administrador de Serviço do Office 365 | 2. Administrador de Sistema do Dynamics 365 | 3. Administrador Global do Office 365"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Nota: Esta questão testa o mesmo conceito da Questão 15! A Microsoft repete frequentemente perguntas de segurança fundamentais nos seus bancos de exames.",
            "papoReto": "Criar usuários e pagar as suas licenças é feito no portal geral (Office 365 / Microsoft Entra). Dar permissões de leitura/escrita a esses usuários no Dataverse é trabalho do Administrador do Sistema do Dynamics. Por fim, quem faz cópias de segurança (backups) do ambiente é o Administrador de Serviço do Dynamics (ou Power Platform Admin), que gere a infraestrutura sem acessar necessariamente aos dados dos clientes.",
            "respostaCerta": "1. Administrador Global do Office 365 | 2. Administrador de Sistema do Dynamics 365 | 3. Administrador de Serviço do Dynamics 365",
            "puloDoGato": "Criação de Identidade (Usuário) = Microsoft 365 / Entra ID. Atribuição de Permissões de Dados = Dynamics 365 / Dataverse. Gestão de Ambientes/Backups = Service Admin / Power Platform Admin.",
            "cascasDeBanana": [
                "Pensar que o Administrador do Dynamics consegue criar novos usuários do zero. O Dynamics apenas 'lê' os usuários que já foram criados e licenciados no Microsoft 365."
            ],
            "dicaOuro": "Criação de conta = Office 365. Permissões de Tabela = Dynamics System Admin. Backups = Service Admin."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q44_topic1",
        "text": "Você está a configurar um ambiente no Microsoft Dataverse. Você precisa garantir que os acessos estão configurados corretamente para os seguintes requisitos: 1. Garantir que um usuário consiga acessar a um aplicativo (App) específico. 2. Garantir que um usuário consiga visualizar uma entidade (Tabela) específica. Quais ações deve executar, respectivamente?",
        "options": [
            "1. Gerenciar Funções (Manage Roles) do aplicativo | 2. Atribuir um direito de acesso (Security Role) ao usuário",
            "1. Atribuir um direito de acesso (Security Role) ao usuário | 2. Partilhar o registro (Share record)",
            "1. Partilhar o registro (Share record) | 2. Gerenciar Funções (Manage Roles) da entidade",
            "1. Adicionar o usuário a uma Equipe de Acesso (Access Team) | 2. Gerenciar Funções (Manage Roles) do aplicativo"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão fundamental sobre a diferença entre a visibilidade de um Aplicativo (App) e a visibilidade de Dados (Tabelas/Entidades).",
            "papoReto": "Se um colega não vê o ícone do aplicativo na página inicial, você tem de ir às configurações do App e ligá-lo à função dele (Gerenciar Funções / Manage Roles). Se ele consegue abrir o aplicativo, mas não vê a tabela 'Clientes' lá dentro (ou recebe um erro de permissão), ele precisa de um Direito de Acesso (Security Role) que lhe dê permissão de Leitura nessa entidade.",
            "respostaCerta": "1. Gerenciar Funções (Manage Roles) do aplicativo | 2. Atribuir um direito de acesso (Security Role) ao usuário",
            "puloDoGato": "O acesso à Interface (o Model-driven app em si) é gerido partilhando o aplicativo e associando-o a Security Roles (Manage Roles). O acesso aos Dados (as Tabelas/Entidades) é gerido através da atribuição desses mesmos Security Roles diretamente ao Usuário ou à sua Equipe.",
            "cascasDeBanana": [
                "Partilhar o registro (Share record): Isto dá acesso a uma única linha de dados (ex: o cliente João), mas não dá acesso à Entidade inteira de forma estrutural nem ao Aplicativo."
            ],
            "dicaOuro": "Acesso ao App = Manage Roles (no App). Acesso à Entidade/Tabela = Assign Security Role (ao Usuário)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q45_topic1",
        "text": "Uma empresa utiliza o Microsoft Dynamics 365 Customer Service. Você precisa recomendar tipos de pesquisa aos usuários baseando-se nas suas necessidades. Qual tipo de pesquisa deve recomendar para cada cenário? (Selecione a combinação correta na ordem) 1. Encontrar registros que contêm erros ortográficos (misspellings) de nomes de Contatos e Contas. 2. Encontrar texto específico dentro de um anexo (attachment).",
        "options": [
            "1. Pesquisa de Relevância (Relevance Search) | 2. Pesquisa de Relevância (Relevance Search)",
            "1. Pesquisa Categorizada (Categorized Search) | 2. Localização Rápida (Quick Find)",
            "1. Localização Rápida (Quick Find) | 2. Pesquisa de Relevância (Relevance Search)",
            "1. Pesquisa de Relevância (Relevance Search) | 2. Pesquisa Categorizada (Categorized Search)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão confirma a supremacia da Pesquisa do Dataverse (anteriormente Relevance Search) face aos métodos de pesquisa antigos.",
            "papoReto": "Se a pessoa escreveu 'Andssson' em vez de 'Anderson', a única pesquisa inteligente o suficiente para entender o erro ortográfico é a Pesquisa de Relevância (impulsionada por IA do Azure). Da mesma forma, se quiser pesquisar o texto que está escrito DENTRO de um PDF ou Word anexado a um cliente, só a Pesquisa de Relevância consegue ler dentro dos arquivos.",
            "respostaCerta": "1. Pesquisa de Relevância (Relevance Search) | 2. Pesquisa de Relevância (Relevance Search)",
            "puloDoGato": "A 'Relevance Search' (agora chamada Dataverse Search) é o único mecanismo nativo que suporta tolerância a erros ortográficos (fuzzy logic / fuzzy matching), lematização e pesquisa profunda dentro de documentos e anexos nas tabelas do Dataverse.",
            "cascasDeBanana": [
                "Localização Rápida e Pesquisa Categorizada: Ambas exigem que a ortografia esteja correta (ou que se usem asteriscos *) e nenhuma das duas consegue 'ler' o conteúdo dentro de anexos de arquivos."
            ],
            "dicaOuro": "Erros ortográficos (Fuzzy matching), flexões verbais ou Pesquisa em Anexos = Relevance Search (Dataverse Search)."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q46_topic1",
        "text": "Você está a criar um aplicativo para uma clínica de massagens. Os registros de Contato representam os pacientes da clínica. Os formulários devem cumprir os seguintes requisitos: - Tipo de Caso A: Um usuário visualiza informações detalhadas sobre um registro principal. - Tipo de Caso B: Um usuário visualiza registros num formulário que se adapta (escala) para ser usado num dispositivo móvel. - Tipo de Caso C: Um usuário cria rapidamente um registro sem sair do tela atual. Qual o tipo de formulário que deve utilizar para cada requisito? Selecione a combinação correta na ordem (A, B e C):",
        "options": [
            "1. Formulário Principal (Main) | 2. Formulário Principal (Main) | 3. Criação Rápida (Quick Create)",
            "1. Formulário Principal (Main) | 2. Formulário Móvel (Mobile Form) | 3. Criação Rápida (Quick Create)",
            "1. Formulário Principal (Main) | 2. Visualização Rápida (Quick View) | 3. Criação Rápida (Quick Create)",
            "1. Visualização Rápida (Quick View) | 2. Formulário Principal (Main) | 3. Cartão (Card)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão essencial sobre os tipos de formulários disponíveis no Model-driven App e as suas responsabilidades.",
            "papoReto": "Se precisa de ver toda a informação da Conta, usa o formulário 'Principal' (Main). E se for para usar no celular? Hoje em dia não precisa criar um formulário à parte! A Interface Unificada (Unified Interface) faz com que o formulário 'Principal' se adapte automaticamente ao celular. E se quiser criar um registro super rápido sem sair do tela onde está? 'Criação Rápida' (Quick Create).",
            "respostaCerta": "1. Formulário Principal (Main) | 2. Formulário Principal (Main) | 3. Criação Rápida (Quick Create)",
            "puloDoGato": "Historicamente, o Dynamics exigia o design de um 'Mobile Form'. Hoje, com a Unified Interface, o Formulário Principal (Main Form) é totalmente responsivo e escala para baixo (scales down) para caber num tela de dispositivo móvel. Já para pop-ups laterais ou superiores que não fecham a janela principal, usa-se o Quick Create Form.",
            "cascasDeBanana": [
                "Formulário Móvel (Mobile Form): É uma pegadinha que apanha quem estudou por documentação antiga do Dynamics CRM. Na arquitetura atual, o Main Form resolve o mobile.",
                "Visualização Rápida (Quick View): Serve apenas para visualizar dados de um registro *relacionado* em modo de leitura (read-only), não para detalhar o registro principal."
            ],
            "dicaOuro": "Ver detalhes = Main Form. Responsivo para celular = Main Form. Criar sem sair da página = Quick Create Form."
        },
        "difficulty": "avancado",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q47_topic1",
        "text": "Você é um programador/configurador do Dynamics 365 Customer Service. Um vendedor cria uma nova Oportunidade. Você precisa garantir que o vendedor preenche todos os campos necessários antes de guardar o registro. Você precisa de exibir uma mensagem de aviso/erro aos usuários se um campo específico for deixado em branco. Você deve impor este requisito sem escrever código personalizado. Quais as DUAS ações que deve executar em sequência?",
        "options": [
            "1. Criar um Fluxo de Trabalho (Workflow) e configurar a condição. 2. Selecionar a ação 'Parar Fluxo de Trabalho' com o status Cancelado.",
            "1. Criar uma Regra de Negócios (Business Rule) e configurar a condição. 2. Selecionar a ação 'Mostrar Mensagem de Erro' (Show error message).",
            "1. Criar um Fluxo do Power Automate e configurar o gatilho. 2. Selecionar a ação 'Enviar E-mail'.",
            "1. Criar uma Regra de Negócios (Business Rule) e configurar a condição. 2. Selecionar a ação 'Definir Recomendação' (Set Recommendation)."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão foca na forma correta de validar a entrada de dados (data validation) diretamente na interface do usuário, sem recurso a código (JavaScript).",
            "papoReto": "O vendedor esqueceu-se de preencher um campo crítico? Não precisa de chamar um programador para colocar um aviso. Basta abrir o 'Regras de Negócios' (Business Rules), dizer ao sistema 'Se o campo X estiver vazio' (Condição), e depois puxar o bloco 'Mostra um erro na cara dele' (Show Error Message). O formulário não deixa guardar até o erro sumir.",
            "respostaCerta": "1. Criar uma Regra de Negócios (Business Rule) e configurar a condição. 2. Selecionar a ação 'Mostrar Mensagem de Erro' (Show error message).",
            "puloDoGato": "Para exibir mensagens de erro bloqueantes na interface (formulário) em tempo real, a ferramenta nativa é a Business Rule com a ação 'Show Error Message'. Isso é executado no lado do cliente (client-side) e impede imediatamente que o usuário grave (save) o registro inválido.",
            "cascasDeBanana": [
                "Definir Recomendação (Set Recommendation): Uma recomendação coloca um 'i' azul (informação) que sugere um valor, mas NÃO bloqueia a gravação e não avisa obrigatoriamente de um erro.",
                "Usar Fluxo de Trabalho (Workflow): Um Workflow em tempo real também poderia bloquear a gravação (parando o fluxo e dando erro), mas é menos eficiente e amigável que a Regra de Negócios para ações visuais em tempo real no formulário."
            ],
            "dicaOuro": "Exigir preenchimento ou mostrar erro no formulário sem código = Regra de Negócios + Mostrar Mensagem de Erro (Show Error Message)."
        },
        "difficulty": "intermediario",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q48_topic1",
        "text": "Você implementa uma Grade Editável (Editable Grid) para a entidade Conta (Account). A equipe de negócio fornece a seguinte lista de funcionalidades que gostariam que fossem implementadas na grade: 1. Agrupar por instância de registro (Group by). 2. Configurar uma regra de negócios para mostrar uma mensagem de erro. 3. Editar o campo composto 'Endereço' (Address composite field). 4. Utilizar a grade editável em celulares (mobile phones). Quais destas funcionalidades PODEM ser realizadas na Editable Grid? Selecione a opção que indica corretamente Sim/Não para cada ponto respectivamente:",
        "options": [
            "1. Sim | 2. Sim | 3. Não | 4. Sim",
            "1. Sim | 2. Não | 3. Sim | 4. Sim",
            "1. Não | 2. Sim | 3. Não | 4. Não",
            "1. Sim | 2. Sim | 3. Sim | 4. Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Conhecer as capacidades e, principalmente, as limitações do controle 'Grade Editável' (Editable Grid) é um tópico muito comum no exame PL-200.",
            "papoReto": "A Grade Editável é como ter um mini-Excel dentro do Dynamics. Pode agrupar linhas por país? Sim. As regras de negócio (como dar erro) funcionam lá dentro? Sim. Funciona no celular? Sim. Mas pode editar um campo 'Composto' (aqueles campos que juntam Rua, Cidade e Código Postal num só, como o Endereço)? Não! A grade confunde-se com campos misturados, você tem de os editar campo a campo separadamente.",
            "respostaCerta": "1. Agrupar: Sim | 2. Regras: Sim | 3. Editar campo composto: Não | 4. Celular: Sim",
            "puloDoGato": "Editable Grids suportam agrupamento (Grouping), execução de Business Rules no cliente, e são compatíveis com mobile. No entanto, NÃO suportam a edição nativa de 'Composite Fields' (Campos Compostos, como o Nome Completo ou Endereço Completo), nem campos de Estado (State/Status) ou campos do tipo Cliente (Customer/PartyList).",
            "cascasDeBanana": [
                "Achar que a Editable Grid suporta campos compostos (Composite Fields). Este é o erro mais comum. Para editar uma endereço na grade, tem de colocar as colunas individuais (Rua 1, Cidade, País) em vez da coluna agrupada (Endereço Completo)."
            ],
            "dicaOuro": "Grades Editáveis suportam quase tudo (Regras, Agrupamentos, Mobile), EXCETO: Campos Compostos, Status, e campos de Cliente."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q49_topic1",
        "text": "Você é um gestor de atendimento ao cliente (customer service manager). Precisa de recolher informações dos clientes garantindo o seguinte: - Deve usar formulários baseados em entidades específicas. - Deve garantir que os dados estão ligados diretamente à entidade. - Deve poder partilhar os formulários de forma segura com os clientes. Qual componente deve utilizar para cada um dos seguintes requisitos (respectivamente)? 1. Recolher o feedback dos clientes (Customer feedback). 2. Utilizar informações de negócio existentes para capturar dados de forma segura (Leverage existing business information).",
        "options": [
            "1. Dynamics 365 Customer Voice | 2. Portal do Power Apps (Power Pages)",
            "1. Portal do Power Apps (Power Pages) | 2. Microsoft Forms",
            "1. Microsoft Forms | 2. Dynamics 365 Customer Voice",
            "1. Dynamics 365 Customer Voice | 2. Microsoft Excel Online"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa a sua capacidade de distinguir entre as ferramentas de recolha de dados viradas para o exterior na Power Platform.",
            "papoReto": "Se só quer enviar um questionário para saber se o cliente gostou do atendimento (Avaliação/Feedback), a melhor ferramenta nativa é o Dynamics 365 Customer Voice. Mas se quer que o cliente aceda a uma área segura, veja as faturas dele e atualize dados vitais com base nas tabelas do sistema, tem de lhe dar um website a sério, autenticado. Para isso usamos o Portal do Power Apps (hoje chamado Power Pages).",
            "respostaCerta": "1. Dynamics 365 Customer Voice | 2. Portal do Power Apps (Power Pages)",
            "puloDoGato": "A palavra 'feedback' (ou 'survey' / questionário) é o gatilho automático para 'Dynamics 365 Customer Voice' (antigo Forms Pro). Já 'leveraging existing business information' num ambiente seguro com formulários baseados nas entidades do Dataverse remete exclusivamente a um 'Power Apps Portal' (Power Pages).",
            "cascasDeBanana": [
                "Microsoft Forms: Embora recolha dados, não liga automaticamente e de forma robusta às entidades (tabelas) do Dynamics com a segurança exigida para processos de negócios complexos, além de não fornecer a área autenticada do Portal."
            ],
            "dicaOuro": "Inquéritos e Feedback = Dynamics 365 Customer Voice. Website autenticado ligado diretamente às tabelas do Dataverse = Power Apps Portal (Power Pages)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q50_topic1",
        "text": "Tem um formulário que exibe um campo personalizado (custom field) de uma entidade. Um cliente quer restringir os usuários de filtrarem dados por esse campo personalizado. Precisa de impedir que os usuários filtrem por esse campo na ferramenta de Localização Avançada (Advanced Find). O que deve modificar?",
        "options": [
            "Campos na opção Editar Critérios de Filtro (Edit Filter Criteria) da vista de Localização Rápida (Quick Find).",
            "A propriedade 'Pesquisável' (Searchable) no formulário de Propriedades do Campo (Field Properties).",
            "Campos na opção Adicionar Colunas de Pesquisa (Add Find Columns) da vista de Localização Rápida.",
            "As funções de segurança (Security Roles) na tabela para ocultar o campo."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma questão sobre como esconder campos das pesquisas avançadas do Dataverse sem necessariamente removê-los do formulário.",
            "papoReto": "Se não quer que os usuários consigam procurar ou criar relatórios usando um campo específico (por exemplo, um campo de 'Número de Calçado' num cliente), basta ir às propriedades de configuração desse campo exato na tabela e desligar a opção 'Searchable' (Pesquisável). Ele desaparece do tela de filtros avançados magicamente.",
            "respostaCerta": "A propriedade 'Pesquisável' (Searchable) no formulário de Propriedades do Campo (Field Properties).",
            "puloDoGato": "A propriedade 'Searchable' (Pesquisável) no Dataverse não apaga o campo da base de dados nem o esconde dos formulários na interface. O seu único objetivo é ocultar o campo das listas pendentes (dropdowns) quando os usuários tentam criar filtros na Localização Avançada (Advanced Find) ou noutros criadores de consultas (Query Builders).",
            "cascasDeBanana": [
                "Alterar as definições do Quick Find (Localização Rápida): Isto afeta apenas o que é pesquisado ativamente na barra de pesquisa global da vista, mas não impede que os usuários selecionem o campo manualmente na ferramenta de Localização Avançada."
            ],
            "dicaOuro": "Bloquear filtros em pesquisas avançadas num campo específico = Colocar 'Searchable' (Pesquisável) como 'Não' nas Propriedades do Campo."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q51_topic1",
        "text": "Você está a desenhar um aplicativo de tela (canvas app) que se liga ao Common Data Service (Dataverse). Precisa de configurar o aplicativo para cumprir os requisitos e garantir que ele fica disponível offline. Que funções Power Fx deve implementar para cada requisito, respectivamente? 1. Passar valores do tela atual ao mover-se para outro tela. 2. Exibir dados a um usuário quando o aplicativo está offline.",
        "options": [
            "1. Back() | 2. SaveData()",
            "1. Navigate() | 2. LoadData()",
            "1. MovePrevious() | 2. ShowDataOffline()",
            "1. Navigate() | 2. SaveData()"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão aborda duas funcionalidades centrais dos Canvas Apps: navegação com passagem de contexto e funcionalidades offline nativas.",
            "papoReto": "Quando quer saltar do 'Tela A' para o 'Tela B' num Canvas App e levar um dado consigo (tipo o ID do cliente), utiliza a função Navigate. Se o usuário ficar sem internet (offline) e quiser que ele veja os dados que foram previamente gravados na cache do celular, tem de pedir à app para 'carregar os dados' com a função LoadData.",
            "respostaCerta": "1. Navigate() | 2. LoadData()",
            "puloDoGato": "A função `Maps` aceita um argumento de contexto opcional (UpdateContextRecord), que é o método exato para passar variáveis entre telas (ex: `Maps(EcraDetalhes, ScreenTransition.None, {IDCliente: 123})`). Para as aplicações offline, usamos `SaveData` para gravar informações na cache local do dispositivo e `LoadData` para puxar (exibir) essas coleções de volta ao tela quando estamos sem rede.",
            "cascasDeBanana": [
                "Back(): Regressa ao tela anterior, mas NÃO permite passar novas variáveis de contexto.",
                "ShowDataOffline(): É uma função inventada que não existe na linguagem Power Fx.",
                "SaveData() para exibir: O SaveData serve para *guardar* o arquivo localmente, não para o *exibir* (LoadData)."
            ],
            "dicaOuro": "Passar dados para novo tela = Navigate. Mostrar dados guardados offline = LoadData. Guardar dados para o offline = SaveData."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q52_topic1",
        "text": "Tem um aplicativo de tela (canvas app) que permite aos usuários visualizar, selecionar e comprar produtos. O aplicativo utiliza um controle de Galeria (Gallery) para exibir os produtos e caixas de seleção (checkboxes) para os usuários os selecionarem. Quando os usuários selecionam itens do catálogo, eles movem-se para outro tela para concluir a compra. Os usuários devem conseguir limpar todas as seleções de produtos ao clicarem num botão 'Limpar Seleções'. Como deve configurar a ação deste botão?",
        "options": [
            "Utilizar a função Reset() e passar o controle da galeria como parâmetro: Reset(Gallery1).",
            "Utilizar a função Reload() e passar a galeria como parâmetro.",
            "Utilizar a função ForAll() para iterar por cada item da Galeria e limpar as seleções.",
            "Definir a propriedade OnCheck para preencher uma coleção e o OnUncheck para remover. Usar Clear() na coleção ao clicar no botão."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma ótima questão de desenvolvimento Canvas Apps. Atenção: O gabarito oficial desta prova, muitas vezes espalhado pela internet, costumava dar como certa a limpeza da coleção (Clear), mas a forma técnica correta e recomendada em Power Fx é a utilização da função Reset.",
            "papoReto": "Imagine que o usuário marcou 10 produtos numa lista (Galeria) clicando naquelas 'caixinhas de seleção' (checkboxes). De repente, desiste e clica num botão 'Limpar tudo'. Como excluir todos os 'vistos' das caixinhas de uma só vez? Basta mandar a galeria inteira reiniciar para o seu estado original de fábrica usando a função Reset().",
            "respostaCerta": "Utilizar a função Reset() e passar o controle da galeria como parâmetro: Reset(Gallery1).",
            "puloDoGato": "No Power Fx, a função `Reset(Control)` descarta todas as alterações feitas pelo usuário num controle e restaura os seus valores padrão (default). Quando o Reset é invocado para uma Galeria inteira (`Reset(Gallery1)`), a plataforma reinicia todos os controles dentro da galeria (incluindo as checkboxes) para o seu valor inicial (que normalmente é 'false' / desmarcado). Esta é a forma mais performática sem ter de usar ciclos for.",
            "cascasDeBanana": [
                "Usar Clear() na coleção: O `Clear(Colecao)` apagaria os dados nos bastidores (memória), mas NÃO tiraria o 'visto' visual da checkbox que o usuário marcou na galeria no tela. Para forçar a limpeza visual, teria de usar o Reset de qualquer forma.",
                "Usar Reload(): Essa função não existe para este contexto em Power Fx."
            ],
            "dicaOuro": "Limpar o estado visual de todos os controles inseridos numa Galeria com um só clique = Reset(NomeDaGaleria)."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q53_topic1",
        "text": "Tem um aplicativo de tela (canvas app) que contém os seguintes campos de entrada de texto: Id, FirstName, LastName. O aplicativo também tem um botão chamado Button1. A propriedade OnSelect do Button1 contém a seguinte expressão: Collect(People, {Id: Id.Text, FirstName: FirstName.Text, LastName: LastName.Text}) Avalie se as seguintes afirmações são Verdadeiras (Sim) ou Falsas (Não), respectivamente: 1. A coleção 'People' é criada automaticamente se ainda não existir. 2. Quando o Button1 é premido, se um registro com o valor atual de Id.Text já existir na coleção, os valores FirstName e LastName são atualizados. 3. Se atualizar a expressão Collect para incluir o valor de um novo campo chamado 'Age' (Idade), isso resultará num erro.",
        "options": [
            "1. Sim | 2. Sim | 3. Sim",
            "1. Sim | 2. Não | 3. Não",
            "1. Não | 2. Não | 3. Sim",
            "1. Sim | 2. Não | 3. Sim"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão clássica sobre o comportamento da função `Collect` e coleções dinâmicas no Power Apps.",
            "papoReto": "Se mandar o Power Apps 'Colecionar' dados numa lista que não existe, ele cria-a na hora (Sim). Se mandar colecionar um ID que já lá está, ele não atualiza o antigo, simplesmente cria uma linha nova repetida, porque o Collect só adiciona no final da fila (Não). E se decidir adicionar uma coluna nova como a 'Idade' do nada? O Power Apps aceita na boa, porque as coleções são flexíveis e adaptam-se aos novos dados (Não dá erro).",
            "respostaCerta": "1. Sim | 2. Não | 3. Não",
            "puloDoGato": "A função `Collect` APENAS adiciona novos registros ao final de uma fonte de dados/coleção. Nunca atualiza registros existentes (para atualizar, usa-se o `Patch` ou `UpdateIf`). Além disso, as coleções locais no Canvas App não têm esquemas rígidos: pode adicionar colunas on-the-fly sem causar erros.",
            "cascasDeBanana": [
                "Achar que o Collect atualiza registros caso a chave primária (ID) seja a mesma. O Power Apps Canvas não assume que o campo 'Id' é uma chave primária exclusiva a menos que se use a função Patch diretamente conectada a uma base de dados estruturada."
            ],
            "dicaOuro": "Collect = Sempre Adiciona (Create). Patch = Adiciona ou Atualiza (Upsert)."
        },
        "difficulty": "avancado",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q54_topic1",
        "text": "Você é um administrador do Dynamics 365 Customer Service. Um usuário precisa de conseguir visualizar as publicações do sistema (system posts) e as atividades (activities) num dashboard. Tem de criar o dashboard para o usuário. Que componentes deve utilizar para cada requisito? Selecione a combinação correta na ordem: 1. Exibir publicações do sistema (Display system posts). 2. Exibir atividades (Display activities).",
        "options": [
            "1. Linha do Tempo (Timeline) | 2. Listas (Lists)",
            "1. Insights da Organização (Organization Insights) | 2. Relações (Relationship Insights)",
            "1. iFrame | 2. Listas (Lists)",
            "1. Linha do Tempo (Timeline) | 2. Insights Sociais (Social Insights)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão focada na construção de Dashboards no Dynamics 365 e na escolha correta dos componentes visuais.",
            "papoReto": "Num dashboard do Dynamics, se quiser mostrar o mural onde o sistema avisa quem criou o quê ou as notas rápidas (system posts), usa o controle 'Timeline' (Linha do Tempo). Agora, se quiser uma tabela simples a mostrar as 'Minhas Tarefas' ou 'Os Meus Emails Pendentes' (Atividades), atira para lá um componente de Lista (List / View).",
            "respostaCerta": "1. Linha do Tempo (Timeline) | 2. Listas (Lists)",
            "puloDoGato": "O componente 'Timeline' é o controle padrão da Interface Unificada para centralizar Posts, Atividades e Anotações de um contexto específico ou de atualizações gerais. No entanto, num Dashboard de alto nível, para ver as grades estruturadas das Atividades abertas de um usuário, usa-se o componente 'List' (que consome uma Vista/View de Atividades).",
            "cascasDeBanana": [
                "iFrame: Serve para incorporar páginas web externas, não para exibir nativamente os posts do sistema.",
                "Organization Insights: É um dashboard analítico para os administradores verem a adoção do sistema, não para o usuário comum ver as suas tarefas diárias."
            ],
            "dicaOuro": "Dashboards clássicos para usuários comuns são maioritariamente construídos usando Listas (Views) e Gráficos (Charts). Para o 'feed de notícias' (Posts), use a Timeline."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q55_topic1",
        "text": "Uma empresa está a implementar o Power Apps e o Power Automate. Vários componentes são criados dentro do Power Apps, Microsoft Dataverse e Power Automate. Estes componentes têm de ser promovidos do ambiente de desenvolvimento (development environment) para o ambiente de testes de aceitação do usuário (UAT) num único pacote de solução (solution package). Precisa de criar o pacote de solução para a promoção. Onde deve criar o pacote?",
        "options": [
            "Azure DevOps",
            "Designer do Power Apps (Maker Portal / Power Apps designer)",
            "Centro de administração da Power Platform (Power Platform admin center)",
            "Centro de administração do Office 365"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão fundamental sobre Gestão do Ciclo de Vida da Aplicação (ALM) e Soluções no Power Platform.",
            "papoReto": "Quer juntar as tabelas do Dataverse, os telas do Power Apps e os fluxos do Power Automate num 'pacote' só para enviar para o ambiente de testes? Esse pacote chama-se 'Solução'. E o único sítio nativo onde se constroem e exportam Soluções manuais é na prancheta de desenho do Power Apps, ou seja, no Power Apps Designer (também conhecido como Maker Portal / make.powerapps.com).",
            "respostaCerta": "Designer do Power Apps (Maker Portal / Power Apps designer)",
            "puloDoGato": "As Soluções (Solutions) são os contentores usados para transportar componentes entre ambientes. São criadas, populadas e exportadas exclusivamente na seção 'Soluções' do Maker Portal (Power Apps designer).",
            "cascasDeBanana": [
                "Azure DevOps: O DevOps é uma ferramenta excelente usada para automatizar (pipelines CI/CD) a movimentação do pacote, mas o pacote em si tem de existir e ser criado primeiramente no Maker Portal.",
                "Centro de administração da Power Platform: Serve para gerenciar os ambientes físicos (criar, copiar, fazer backup), não para desenhar ou agrupar os pacotes de Solução que vão lá dentro."
            ],
            "dicaOuro": "Criar ou Exportar pacotes de Solução (Solution Packages) = Power Apps Designer (Maker Portal / make.powerapps.com)."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q56_topic1",
        "text": "Uma empresa está a criar uma solução no Power Apps para uma instalação de produção. A solução atual está em Inglês. Os componentes personalizados têm de ser traduzidos para vários idiomas. Você precisa de extrair (exportar) o texto para tradução. Em que local pode atingir este objetivo?",
        "options": [
            "Nas tabelas (tables) individuais no aplicativo web.",
            "No ambiente selecionado dentro do Microsoft Power Platform admin center.",
            "Na Solução (Solution) no aplicativo web.",
            "Nos componentes individuais da solução no aplicativo web."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão avalia o conhecimento sobre localização e tradução de componentes de interface no Dataverse.",
            "papoReto": "Fez uma app toda em Inglês e agora o cliente quer em Português e Espanhol. Como extrair todos os textos dos botões, menus e colunas para enviar para o tradutor? Você não vai campo a campo ou componente a componente. Vai à página principal da Solução (onde agrupou tudo), clica no botão 'Exportar Traduções', e o sistema cospe um arquivo Excel mágico com todos os rótulos de texto lá dentro.",
            "respostaCerta": "Na Solução (Solution) no aplicativo web.",
            "puloDoGato": "A funcionalidade 'Exportar Traduções' (Export Translations) só está disponível no nível da Solução (Solution level). Você seleciona a Solução Não Gerida (Unmanaged) que contém os seus componentes e escolhe a opção para exportar as traduções. Depois de o tradutor preencher o Excel, volta ao mesmo menu da Solução para fazer a 'Importação das Traduções'.",
            "cascasDeBanana": [
                "Nos componentes individuais: Não existe um botão para exportar traduções olhando isoladamente para um botão ou tabela. O processo é aglomerado no nível do 'pacote' da Solução.",
                "Microsoft Power Platform admin center: O centro de administração ativa e instala pacotes de idiomas base (Language Packs da Microsoft), mas extrair as SUAS traduções personalizadas é feito dentro do Maker Portal, na Solução."
            ],
            "dicaOuro": "Exportar/Importar Traduções de customizações = É feito SEMPRE no nível da Solução (Solution level)."
        },
        "difficulty": "avancado",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q57_topic1",
        "text": "[Atenção: Variação da Q53] Tem um aplicativo de tela (canvas app) que permite aos usuários visualizar, selecionar e comprar produtos. O aplicativo utiliza um controle de Galeria (Gallery) para exibir os produtos e caixas de seleção (checkboxes) para os usuários os selecionarem. Quando os usuários selecionam itens do catálogo, eles movem-se para outro tela para concluir a compra. Os usuários devem conseguir limpar todas as seleções de produtos ao clicarem num botão. Como deve configurar a ação deste botão?",
        "options": [
            "Utilizar a função Reload(Control) e passar a galeria como parâmetro.",
            "Utilizar a função Reset(Control) e passar a caixa de seleção (checkbox) como parâmetro para limpar as seleções.",
            "Definir a propriedade OnCheck para preencher uma coleção e o OnUncheck para remover da coleção. Usar Clear() na coleção.",
            "Utilizar a fórmula Reset() e passar o controle da galeria (gallery control) como parâmetro à fórmula."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Uma ótima oportunidade para revermos o mesmo conceito testado na questão 53. A Microsoft sabe que as coleções geram confusão visual no Power Apps.",
            "papoReto": "Mais uma vez: o usuário marcou 10 produtos numa lista (Galeria) com aquelas 'caixinhas de seleção'. O usuário desiste e clica em 'Limpar'. A forma mais limpa, rápida e correta de excluir todos os 'vistos' visuais das caixinhas numa só pancada é dizer à galeria inteira: 'Faz Reset para o estado inicial'.",
            "respostaCerta": "Utilizar a fórmula Reset() e passar o controle da galeria (gallery control) como parâmetro à fórmula.",
            "puloDoGato": "No Power Fx, a função `Reset(NomeDaGaleria)` restaura todos os controles dentro dessa galeria aos seus valores predefinidos (default). Como o padrão de uma checkbox é estar desmarcada (false), todas perdem o visto imediatamente. É infinitamente mais performático do que tentar manipular coleções manualmente apenas para atualizar o aspeto visual no tela.",
            "cascasDeBanana": [
                "Limpar a Coleção (Clear): Tal como explicado na Q53, limpar a coleção de dados não desmarca visualmente a checkbox que o usuário clicou no tela. Teria de usar o Reset na mesma para excluir a marca visual.",
                "Reset(Checkbox): O Reset afeta apenas o controle passado como parâmetro. Se passar apenas o controle Checkbox de uma linha específica, não vai limpar as das outras linhas. Ao passar a Galeria inteira, resolve tudo."
            ],
            "dicaOuro": "Limpar o estado visual de todos os controles numa Galeria inteira (como Checkboxes e TextInputs) com um só clique = Reset(NomeDaGaleria)."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q58_topic1",
        "text": "Um cliente regista eventos utilizando uma entidade personalizada (custom entity). A entidade personalizada inclui um campo personalizado para o 'local' (venue) dos eventos. O cliente tem de conseguir visualizar os eventos agrupados por local num formato de calendário. Você precisa garantir que todos os eventos são apresentados por local no calendário. Em que componente deve adicionar o controle (Calendar control)?",
        "options": [
            "Formulário (Form)",
            "Subgrade (Subgrid)",
            "Gráfico (Chart)",
            "Vista (View)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Questão sobre onde aplicar Controles Personalizados (Custom Controls) num Model-driven App para alterar drasticamente a experiência do usuário.",
            "papoReto": "Se tem uma lista gigantesca de eventos debaixo da tabela 'Eventos' e quer deixar de ver isso como uma tabela do Excel para passar a ver num formato bonito de Calendário visual... onde aplica essa mudança? Aplica-a na 'Vista' (View) principal dessa tabela. Ao adicionar o controle de Calendário à Vista, a lista transforma-se automaticamente numa agenda interativa.",
            "respostaCerta": "Vista (View)",
            "puloDoGato": "Controles nativos que alteram a visualização de conjuntos de dados (como Calendário, Grade Editável ou Kanban) são configurados no nível da Tabela (Table/Entity) ou no nível de Vistas (Views) específicas. Como o requisito diz 'exibir os eventos no formato de calendário', a View é o componente central para listar múltiplos registros em formatos variados.",
            "cascasDeBanana": [
                "Formulário (Form): Um formulário de um Model-driven App exibe o detalhe de APENAS UM registro de cada vez. Um calendário, por definição, precisa de uma lista de múltiplos registros para populá-lo.",
                "Subgrade (Subgrid): Poderia tecnicamente colocar um controle de calendário numa subgrade dentro do formulário de um cliente específico. Mas o requisito pede para visualizar 'todos os eventos' no calendário, o que denota uma vista principal de tabela."
            ],
            "dicaOuro": "Transformar uma lista de registros globais num Calendário, num quadro Kanban ou numa Grade Editável = Adicionar o controle na Vista (View) ou Entidade (Table)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q59_topic1",
        "text": "Você está a criar um aplicativo de tela (canvas app). Um usuário irá clicar em um botão em cada tela de uma aplicação Power Apps para avançar para o tela seguinte. Você precisa de implementar a ação que direciona o usuário para o próximo tela. Qual evento (propriedade) deve manipular?",
        "options": [
            "ScreenTransition",
            "OnSelect",
            "OnLoad",
            "OnCheck"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Uma questão básica mas fundamental sobre a interatividade e navegação nos Canvas Apps.",
            "papoReto": "Onde é que você coloca a fórmula (o código) para fazer um botão funcionar quando alguém clica nele? Na propriedade 'OnSelect'. É a tradução do Power Apps para o clássico 'Ao Clicar'. Lá dentro, escreveria algo como 'Navigate(Ecra2)'.",
            "respostaCerta": "OnSelect",
            "puloDoGato": "A propriedade `OnSelect` é o gatilho principal para botões, ícones e formas nos aplicativos de tela. É nela que inserimos a função `Maps()` para transitar entre telas.",
            "cascasDeBanana": [
                "ScreenTransition: Isto é um parâmetro usado *dentro* da função Navigate (ex: ScreenTransition.Fade), mas não é um evento/propriedade do botão.",
                "OnCheck: É a propriedade disparada quando uma caixa de seleção (Checkbox) ou Toggle é marcada, não um botão de avanço padrão.",
                "OnLoad: Não existe nos botões do Power Apps (o mais próximo seria o OnVisible no nível do tela)."
            ],
            "dicaOuro": "Clicar num botão no Canvas App = Evento OnSelect."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q60_topic1",
        "text": "Uma empresa tem um canvas app que inclui os seguintes telas: Screen1 e Screen2. A propriedade OnVisible do Screen1 contém a seguinte expressão: Set(AgeGroups, [\"1-25\", \"26-54\", \"55+\"]) Avalie se as seguintes afirmações são Verdadeiras (Sim) ou Falsas (Não), respectivamente: 1. AgeGroups pode ser acedida a partir do Screen1 e do Screen2. 2. AgeGroups é uma coleção (collection). 3. Você pode usar a função Update para alterar valores dentro de AgeGroups.",
        "options": [
            "1. Sim | 2. Sim | 3. Não",
            "1. Sim | 2. Não | 3. Não",
            "1. Não | 2. Não | 3. Sim",
            "1. Não | 2. Sim | 3. Sim"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "ATENÇÃO: Muitos gabaritos na internet mostram a resposta errada para esta pergunta. Vamos focar-nos no funcionamento real e técnico do Power Fx para não cair em rasteiras.",
            "papoReto": "1º: A função 'Set' cria variáveis GLOBAIS. Se é global, funciona em qualquer tela? Sim! 2º: O 'Set' criou uma coleção? Não. Ele criou uma variável global que guarda uma pequena tabela (array). Coleções criam-se com 'Collect' ou 'ClearCollect'. 3º: Pode usar a função 'Update' nela? Não. A função 'Update' serve para modificar dados em Coleções ou Fontes de Dados, não em variáveis globais.",
            "respostaCerta": "1. Sim | 2. Não | 3. Não",
            "puloDoGato": "Regra de essencial do Power Fx: `Set()` cria variáveis Globais (acessíveis em toda a app). `UpdateContext()` cria variáveis Locais (acessíveis só no tela atual). `Collect()` cria Coleções. O código `[\"a\", \"b\"]` gera uma tabela de uma única coluna (single-column table), mas como foi guardada via `Set`, é tecnicamente uma variável global a armazenar uma tabela, e não uma Collection na definição estrita da plataforma (não aparece na aba 'Collections' e não aceita funções exclusivas de coleções).",
            "cascasDeBanana": [
                "Confiar nos gabaritos vazados que dizem 'Não, Não, Sim'. Isso indicaria que a variável não seria global (falso, pois usou Set) e que poderia usar o Update (falso, pois o Update pede uma Collection ou Data Source)."
            ],
            "dicaOuro": "Set = Variável Global (todos os telas). Collect = Coleção. Update = Só se aplica a Coleções ou Fontes de Dados."
        },
        "difficulty": "avancado",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q61_topic1",
        "text": "Você é um programador do Dynamics 365 Customer Service. Um vendedor cria um gráfico (chart) pessoal no sistema. Você precisa garantir que esse gráfico fica disponível para ser visualizado por todos os usuários da equipe desse vendedor. O que deve fazer?",
        "options": [
            "Partilhar (Share) o gráfico com a equipe.",
            "Atribuir (Assign) o gráfico a cada pessoa da equipe.",
            "Exportar o gráfico do usuário para o Power BI e importá-lo como uma visualização.",
            "Exportar o gráfico para ser importado como um gráfico de usuário noutras contas."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão explora as capacidades de colaboração e visualização de dados (dashboards e gráficos) no Dynamics 365 / Dataverse.",
            "papoReto": "Se um vendedor montou um gráfico de vendas espetacular e quer que os colegas da equipe o consigam ver e usar, ele não precisa de dar o gráfico aos outros (Atribuir) nem de fazer malabarismos a exportar arquivos. Ele só precisa de clicar no gráfico e escolher 'Partilhar' (Share) com a equipe. Simples e direto.",
            "respostaCerta": "Partilhar (Share) o gráfico com a equipe.",
            "puloDoGato": "Os Gráficos Pessoais (User Charts) e Vistas Pessoais (Personal Views) pertencem a quem os cria (são user-owned). O proprietário pode partilhá-los (Share) facilmente com outros usuários ou equipes do Dataverse. Partilhar concede direitos de leitura (ou outros, se especificados) sem alterar a propriedade do registro.",
            "cascasDeBanana": [
                "Atribuir (Assign): O 'Assign' muda o dono (proprietário) do gráfico. Se o vendedor A atribuir o gráfico à equipe, ele deixa de ser o dono individual do gráfico, o que não é o objetivo (ele só quer que os outros vejam).",
                "Exportar/Importar: Uma solução absurdamente trabalhosa para um problema que o sistema resolve nativamente com o botão 'Partilhar'."
            ],
            "dicaOuro": "Permitir que outros vejam os seus gráficos/vistas pessoais = Partilhar (Share). Transferir a propriedade do seu gráfico para outra pessoa = Atribuir (Assign)."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q62_topic1",
        "text": "Você está a criar um aplicativo (model-driven app). Você precisa criar o mapa do site (Site Map) para o aplicativo. Quais são as três ações que deve executar em sequência para construir a navegação? Selecione a ordem correta:",
        "options": [
            "1. Adicionar um grupo (Add a group) -> 2. Adicionar uma área (Add an area) -> 3. Adicionar uma subárea (Add a subarea)",
            "1. Adicionar uma área (Add an area) -> 2. Adicionar uma subárea (Add a subarea) -> 3. Adicionar uma visualização (Add a view)",
            "1. Adicionar uma área (Add an area) -> 2. Adicionar um grupo (Add a group) -> 3. Adicionar uma subárea (Add a subarea)",
            "1. Adicionar uma subárea (Add a subarea) -> 2. Adicionar um grupo (Add a group) -> 3. Adicionar uma área (Add an area)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Uma questão visual e arquitetónica sobre como construir o menu lateral (Site Map) de um aplicativo orientado por modelo.",
            "papoReto": "Construir o menu de um Model-driven App é como construir uma casa. Primeiro compra o terreno (Área). Dentro do terreno, constrói as divisões (Grupos). E dentro das divisões, coloca os móveis (Subáreas - que são os links reais para as tabelas ou dashboards).",
            "respostaCerta": "1. Adicionar uma área (Add an area) -> 2. Adicionar um grupo (Add a group) -> 3. Adicionar uma subárea (Add a subarea)",
            "puloDoGato": "O Site Map Designer exige uma hierarquia estrita: Area > Group > Subarea. A 'Área' é o seletor principal no fundo do tela (ex: Vendas vs Serviço). O 'Grupo' é o título do menu (ex: Clientes). A 'Subárea' é o link clicável (ex: Contas, Contatos). Não é possível adicionar uma subárea sem ter primeiro um grupo, nem um grupo sem ter uma área.",
            "cascasDeBanana": [
                "Adicionar uma visualização (Add a view): As vistas (views) são adicionadas nas configurações da Entidade (Tabela) dentro do App Designer, e não na estrutura esqueleto de navegação do Site Map."
            ],
            "dicaOuro": "Decore a hierarquia de cima para baixo: Área (Area) -> Grupo (Group) -> Subárea (Subarea)."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q63_topic1",
        "text": "Você está a configurar um novo portal do Power Apps (Power Pages). Mantém as funções da web (web roles) predefinidas: uma para usuários autenticados e outra para usuários anónimos. Você concede a função de Usuárioes Anónimos aos usuários. Um usuário de teste relata que consegue acessar à página inicial (home page), mas não consegue visualizar uma página vinculada a partir da página inicial. Você precisa determinar o motivo pelo qual o usuário de teste não consegue visualizar a página do portal. Qual é a causa do problema?",
        "options": [
            "A configuração para tornar a página 'disponível para todos' (available to everyone) está desmarcada.",
            "As permissões herdadas (Inherited permissions) não estão ativadas para a página vinculada.",
            "A função web de Usuárioes Autenticados (Authenticated Users) não tem permissões para ver a página.",
            "O modo de manutenção (Maintenance mode) está ativado no portal."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão excelente sobre resolução de problemas (troubleshooting) de permissões em Portais (Power Pages).",
            "papoReto": "O seu usuário não fez login (é anónimo). Ele entrou na página Home sem problemas. Clicou num link para ir para a 'Página B' e deu erro. O que aconteceu? A 'Página B' está trancada. No Portal do Power Apps, existe um botão (toggle) nas configurações da página que diz 'Página disponível para todos' (Page available to everyone). Se isso estiver desligado, os anónimos ficam à porta.",
            "respostaCerta": "A configuração para tornar a página 'disponível para todos' (available to everyone) está desmarcada.",
            "puloDoGato": "No Power Pages Design Studio, cada página web tem configurações de permissão. Se a opção 'Page available to everyone' for desmarcada, a página passa a exigir permissões específicas (Page Permissions) vinculadas a Web Roles de usuários autenticados. Logo, os anónimos perdem o acesso a essa sub-página específica, mesmo que tenham acedido à Home.",
            "cascasDeBanana": [
                "Usuárioes Autenticados não têm permissão (Opção C): O enunciado foca-se num usuário de teste a acessar como 'Anónimo', logo, o que acontece com o papel de Autenticados é irrelevante para este teste específico.",
                "Modo de manutenção (Opção D): Se estivesse em modo de manutenção, o usuário nem a página Home conseguiria ver (veria apenas o tela de manutenção)."
            ],
            "dicaOuro": "Página anónima com erro de acesso isolado = A opção 'Disponível para todos' (Available to everyone) foi desativada nessa página."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q64_topic1",
        "text": "Você está a criar um novo portal do Power Apps (Power Pages) para uma pequena empresa. O portal é um site interno. Apenas usuários autenticados podem acessar ao conteúdo. Você precisa configurar a autenticação e as permissões. Qual componente deve configurar para cada requisito, respectivamente? 1. Necessário para cada usuário autenticado antes que a segurança lhe possa ser atribuída. 2. Necessário para que usuários autenticados acedam a páginas restritas do portal.",
        "options": [
            "1. Registro da tabela Contato (Contact table record) | 2. Função web (Web role)",
            "1. Usuário Local (Local user) | 2. Registro da tabela Contato (Contact table record)",
            "1. Conta Microsoft (Microsoft account) | 2. Função web (Web role)",
            "1. Registro da tabela Contato (Contact table record) | 2. Azure Active Directory"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa a compreensão fundamental de como as identidades são armazenadas e geridas num Portal (Power Pages).",
            "papoReto": "Num Portal, não existe a entidade 'Usuário do Portal'. Toda a gente que faz login no seu site é gravada na base de dados como um 'Contato' (Contact). Depois de ter o Contato guardado, como é que lhe dá acesso à página secreta VIP? Associando esse Contato a uma 'Função Web' (Web Role) que tenha as permissões corretas.",
            "respostaCerta": "1. Registro da tabela Contato (Contact table record) | 2. Função web (Web role)",
            "puloDoGato": "No ecossistema Power Pages / Power Apps Portals, qualquer identidade autenticada (seja via Azure AD, Google, Facebook ou local) é mapeada para um registro na tabela 'Contact' no Dataverse. A gestão de permissões para ver páginas específicas ou registros de tabelas é sempre feita através das 'Web Roles'.",
            "cascasDeBanana": [
                "Usuário Local (Local user) / Conta Microsoft: Isto são 'Identity Providers' (Provedores de Identidade), ou seja, como a pessoa faz login. Mas a pergunta foca no que o sistema *precisa de ter criado* internamente antes de atribuir segurança, que é o registro do Contato."
            ],
            "dicaOuro": "Usuário do Portal = Registro de Contato. Permissões no Portal = Web Role."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q65_topic1",
        "text": "Você cria um portal para fornecer um website para os clientes. O negócio exige que um tema personalizado seja aplicado à interface do portal. Você precisa de identificar os locais para realizar configurações específicas. Qual opção de configuração deve usar para cada requisito, respectivamente? 1. Gerar/Aplicar o tema padrão (Standard theme generated). 2. Configurar o URL para acessar ao site (URL to access the site).",
        "options": [
            "1. Estúdio dos Portais (Portals Studio) | 2. Centro de administração de portais do Power Apps (Power Apps portals admin center)",
            "1. Aplicação de Gestão do Portal (Portal management app) | 2. Estúdio dos Portais (Portals Studio)",
            "1. Estúdio dos Portais (Portals Studio) | 2. Definições de sistema do Dataverse (Dataverse system settings)",
            "1. Definições de sistema do Dataverse | 2. Centro de administração de portais do Power Apps"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão sobre as diferentes interfaces de administração e configuração de um Portal.",
            "papoReto": "Onde mexe nas cores, no layout e no tema do site? Numa interface visual e intuitiva chamada 'Estúdio dos Portais' (Portals Studio / Power Pages Design Studio). Onde mexe no endereço da web (URL), reinicia o servidor ou adiciona certificados SSL? Numa interface mais técnica de TI: o Centro de Administração de Portais do Power Apps.",
            "respostaCerta": "1. Estúdio dos Portais (Portals Studio) | 2. Centro de administração de portais do Power Apps (Power Apps portals admin center)",
            "puloDoGato": "A arquitetura de Portais divide as ferramentas de criação: o 'Portals Studio' (agora evoluído para Design Studio no Power Pages) é focado na Interface do Usuário (temas, componentes de tela). Já o 'Power Apps Portals admin center' é focado no alojamento do site (Hostname, URL personalizados, modo de manutenção, chaves e reinício do site).",
            "cascasDeBanana": [
                "Aplicação de Gestão do Portal (Portal Management app): É um model-driven app usado para configurações avançadas de dados (criar Web Roles, trechos de código, definições de site), mas não gera temas padronizados visualmente nem altera o URL base no servidor."
            ],
            "dicaOuro": "Visual e Temas = Portals Studio. Domínio, URL e Servidor = Power Apps portals admin center."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q66_topic1",
        "text": "Uma empresa vende produtos utilizando um portal do Power Apps. Você precisa criar um novo aplicativo de tela (canvas app) que listará todos os usuários do portal. O aplicativo será usado por todos os colaboradores para gerenciar o acesso ao portal. Você precisa criar o aplicativo. O que deve fazer?",
        "options": [
            "Criar o aplicativo utilizando a tabela Conta (Account) como fonte de dados.",
            "Utilizar o aplicativo Gestão do Portal (Portal Management app).",
            "Criar o aplicativo utilizando a tabela Contato (Contact) como fonte de dados.",
            "Criar um aplicativo orientado por modelo (model-driven app) usando a tabela Contato."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta é a continuação prática do conceito ensinado na Questão 67, focada no desenvolvimento de apps internas.",
            "papoReto": "Se lhe pedirem para criar uma App que lista as pessoas que têm login no seu site/portal de clientes, a que tabela é que a sua App se tem de ligar? À tabela 'Contato' (Contact). O portal guarda todos os seus membros como contatos comuns no Dataverse.",
            "respostaCerta": "Criar o aplicativo utilizando a tabela Contato (Contact) como fonte de dados.",
            "puloDoGato": "O requisito explícito da pergunta é 'criar um novo canvas app' que liste os 'usuários do portal'. Como sabemos que a identidade de um usuário de portal no Dataverse reside na tabela Contact, o Canvas App deve utilizar a tabela Contact como a sua fonte de dados primária.",
            "cascasDeBanana": [
                "Criar um model-driven app (Opção D): A questão pede expressamente para criar um 'canvas app' (aplicativo de tela). Escolher o model-driven estaria a ignorar o requisito direto.",
                "Utilizar o Portal Management app: Isto é uma app existente (nativa) gerida por administradores e não um 'novo canvas app' que você iria construir para a equipe."
            ],
            "dicaOuro": "Listar ou gerenciar Usuárioes de um Portal/Power Pages num Power App = Conectar à tabela Contato (Contact)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q67_topic1",
        "text": "Você gere um portal para uma empresa que permite aos usuários agendar eventos. O portal deve permitir que usuários externos iniciem sessão usando as suas contas Microsoft pessoais (Ex: Hotmail, Outlook). Além disso, os colaboradores devem iniciar sessão através do Microsoft Entra ID (Azure AD). Quando os usuários externos iniciam sessão pela primeira vez, o seu registro de contato deve ser criado automaticamente, sem exigir um código de convite. Como deve definir as seguintes configurações de autenticação (Sim/Não)? 1. Início de sessão externo (External sign-in) 2. Registro aberto (Open registration)",
        "options": [
            "1. Sim | 2. Sim",
            "1. Sim | 2. Não",
            "1. Não | 2. Sim",
            "1. Não | 2. Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão clássica de configuração de Autenticação em Portais. Teste direto aos conceitos de External Login e Open Registration.",
            "papoReto": "A questão diz: 'Podem entrar com o Hotmail?' Sim, isso é login externo ('External sign-in: Sim'). A questão diz também: 'Eles podem entrar e o sistema cria a conta sozinhos sem precisar de convite do administrador?' Sim, qualquer pessoa na internet com um Hotmail pode registar-se. A porta está aberta ('Open registration: Sim').",
            "respostaCerta": "1. Sim | 2. Sim",
            "puloDoGato": "No Power Pages: 'External sign-in' = Permitir provedores de identidade que não sejam o login local do site (como Azure AD B2C, Microsoft Account, LinkedIn, etc). 'Open registration' = Se estiver ativado (Yes), qualquer usuário autenticado externamente é automaticamente adicionado como Contato sem precisar de um convite prévio do CRM. É ideal para portais de consumo público.",
            "cascasDeBanana": [
                "Colocar 'Open registration' como 'Não': Se estivesse configurado como 'Não', o usuário precisaria de receber um e-mail da sua empresa com um Código de Convite (Invitation Code) para só depois resgatá-lo no portal e vincular a sua conta Microsoft."
            ],
            "dicaOuro": "Criar o contato automaticamente ao fazer login sem código de convite = Open Registration: YES."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Power Pages"
    },
    {
        "id": "q68_topic1",
        "text": "Está a configurar a autenticação de um portal do Power Apps (Power Pages) destinado apenas a usuários internos e parceiros pré-aprovados. Não quer que qualquer pessoa na internet consiga criar uma conta livremente, nem quer permitir logins através de redes sociais (como o Facebook ou Google). Como deve configurar as opções 'Registro Aberto' (Open Registration) e 'Início de Sessão Externo' (External Sign-in)? (Selecione a combinação correta)",
        "options": [
            "Registro Aberto: Não | Início de Sessão Externo: Não",
            "Registro Aberto: Sim | Início de Sessão Externo: Sim",
            "Registro Aberto: Não | Início de Sessão Externo: Sim",
            "Registro Aberto: Sim | Início de Sessão Externo: Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão sobre o controle de acessos e criação de contas em Portais (Power Pages).",
            "papoReto": "Se o site é privado e por convite, você tranca a porta para não entrar qualquer um (Registro Aberto = Não). E se não quer que usem o Facebook/Google para entrar, desliga as opções externas (External Sign-in = Não).",
            "respostaCerta": "Registro Aberto: Não | Início de Sessão Externo: Não",
            "puloDoGato": "'Open Registration' permite que um usuário crie o seu próprio registro de Contato no Dataverse sem intervenção do administrador. Para cenários corporativos estritos, isto deve estar em 'No', exigindo um código de convite (Invitation Code). Desativar o 'External Sign-in' bloqueia provedores de identidade comerciais, forçando o login local ou via Azure AD exclusivo (dependendo da configuração base).",
            "cascasDeBanana": [
                "Deixar o Open Registration como 'Sim' permitiria a criação de usuários fantasma ou indesejados na base de dados do Dataverse, sujando a tabela de Contatos."
            ],
            "dicaOuro": "Portal Exclusivo/Fechado = Open Registration 'No'."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q69_topic1",
        "text": "A sua empresa criou um portal do Power Apps (Power Pages) e precisa garantir que o portal corresponde exatamente à identidade visual da marca (branding). Um web designer forneceu-lhe um arquivo CSS personalizado com os estilos da empresa. Como deve aplicar este arquivo CSS personalizado ao portal?",
        "options": [
            "Aceder ao Estúdio dos Portais (Portals Studio / Design Studio), abrir o painel de Temas (Themes) e fazer o upload do arquivo CSS personalizado.",
            "No Power Platform Admin Center, selecionar o portal e carregar o arquivo no separador de Branding.",
            "Abrir a Aplicação de Gestão do Portal (Portal Management app) e colar o código CSS na página inicial.",
            "Criar um Fluxo do Power Automate para injetar o CSS no cabeçalho do portal."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão prática sobre personalização avançada de Interface de Usuário (UI) no Power Pages / Portais.",
            "papoReto": "Tem um arquivo CSS pronto? Não precisa de complicar. Abre o estúdio de design do portal, vai à seção onde escolhe as cores (Temas) e clica em 'Carregar CSS'. O portal assume logo o estilo por cima do que já existe.",
            "respostaCerta": "Aceder ao Estúdio dos Portais (Portals Studio / Design Studio), abrir o painel de Temas (Themes) e fazer o upload do arquivo CSS personalizado.",
            "puloDoGato": "No Design Studio do Power Pages (antigo Portals Studio), o espaço de trabalho 'Estilo' (Styling / Themes workspace) permite nativamente fazer o upload de arquivos `.css` personalizados. Ele substitui ou complementa o Bootstrap padrão (theme.css) usado pelo portal.",
            "cascasDeBanana": [
                "Aplicação de Gestão do Portal (Portal Management app): Embora permita adicionar 'Web Files' (Arquivos Web) manuais, a forma direta, moderna e correta exigida pela Microsoft para aplicar *Temas CSS globais* é o upload via Design Studio.",
                "Power Platform Admin Center: Este painel gere infraestrutura (servidor, certificados, URLs), não lida com arquivos de estilo de front-end (CSS)."
            ],
            "dicaOuro": "Aplicar CSS personalizado global ao Portal = Fazer upload via Portals Studio (Painel de Temas / Styling)."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q70_topic1",
        "text": "Você precisa criar uma nova tabela personalizada (custom table) no Dataverse para gerenciar 'Projetos'. Os requisitos de segurança ditam que cada Projeto deve pertencer a um usuário específico ou a uma equipe, para que possa restringir o acesso com base na unidade de negócios. Além disso, os usuários precisam de conseguir associar e-mails, tarefas e reuniões telefónicas diretamente a estes Projetos. Que definições deve selecionar ao criar a tabela? (Selecione a combinação correta de Propriedade e Ativação)",
        "options": [
            "Propriedade: Usuário ou Equipe (User or team) | Ativar: Fazer desta tabela uma tabela de Atividades (Make this table an activity table).",
            "Propriedade: Organização (Organization) | Ativar: Criar uma nova atividade (Create a new activity).",
            "Propriedade: Usuário ou Equipe (User or team) | Ativar: Ativar para atividades (Enable for activities).",
            "Propriedade: Organização (Organization) | Ativar: Ativar para atividades (Enable for activities)."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Modelação básica e fundamental de dados no Dataverse, avaliando propriedades estruturais que NÃO podem ser alteradas depois de a tabela ser criada.",
            "papoReto": "Quem é o dono do projeto? Se é uma pessoa específica (o Gestor de Projeto), a propriedade tem de ser 'Usuário ou Equipe'. Como é que eu guardo os e-mails do Outlook e as tarefas colados à ficha deste projeto? Tenho de ligar a opção 'Ativar para atividades'. Pronto, as duas caixas estão verificadas!",
            "respostaCerta": "Propriedade: Usuário ou Equipe (User or team) | Ativar: Ativar para atividades (Enable for activities).",
            "puloDoGato": "'Ownership' (Propriedade) define o modelo de segurança. Se precisa de acesso baseado no dono (Owner) ou na sua Unidade de Negócios (BU), tem de ser 'User or team'. Para permitir que a tabela receba e agrupe atividades relacionadas (via campo 'Regarding' / 'Referente a'), DEVE marcar a caixa 'Enable for activities'. Atenção: ambas as definições são permanentes!",
            "cascasDeBanana": [
                "Fazer desta tabela uma tabela de Atividades (Make this table an activity table): ISTO É UMA ARMADILHA CLÁSSICA! Ligar esta opção transformaria o próprio 'Projeto' num tipo de atividade (como se fosse um e-mail ou um compromisso na agenda), em vez de ser uma tabela de negócio que *recebe* atividades."
            ],
            "dicaOuro": "Registro com dono específico = User or Team. Registro que recebe/agrega e-mails e tarefas = Enable for activities."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q71_topic1",
        "text": "Está a criar um canvas app e um model-driven app para gerenciar contas de clientes. O canvas app requer uma regra de negócios (business rule) para definir a coluna 'Tipo de Negócio' como 'Grande' se o tamanho do cliente for superior a um valor específico. O model-driven app requer uma regra de negócios para recomendar a reavaliação da classificação da conta quando esta for suspensa por crédito apenas neste formulário específico do aplicativo. Qual o escopo (scope) que deve configurar para cada regra de negócios, respectivamente?",
        "options": [
            "1. Tabela (Table/Entity) | 2. Formulário Específico (Specific form)",
            "1. Todos os Formulários (All forms) | 2. Tabela (Table)",
            "1. Formulário Específico (Specific form) | 2. Todos os Formulários (All forms)",
            "1. Tabela (Table) | 2. Todos os Formulários (All forms)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma excelente questão para diferenciar como as Regras de Negócios se aplicam dependendo do tipo de aplicativo e da necessidade.",
            "papoReto": "Se a regra vai rodar num Canvas App, ela tem de rodar no motor da base de dados (no servidor), logo o escopo é 'Tabela'. Se a regra é para rodar *apenas* num tela/formulário específico de um Model-driven app, o escopo é 'Formulário Específico'.",
            "respostaCerta": "1. Tabela (Table/Entity) | 2. Formulário Específico (Specific form)",
            "puloDoGato": "Canvas apps não interpretam regras de negócios aplicadas à Interface de Usuário (como 'Todos os Formulários'). Para um Canvas App respeitar uma Business Rule, o escopo TEM de ser 'Entity' (Tabela), pois assim a regra é validada no lado do servidor antes de gravar o dado. Para o model-driven app, como o requisito diz 'apenas neste aplicativo' (referindo-se a um formulário dedicado), aplica-se ao 'Formulário Específico'.",
            "cascasDeBanana": [
                "Todos os Formulários (All forms): Usar isto para o Canvas App não funcionaria. Usar isto para o Model-driven app violaria a regra de aplicar a reavaliação *apenas* àquele formulário específico."
            ],
            "dicaOuro": "Regra a funcionar num Canvas App ou Integração = Escopo de Entidade/Tabela (Entity Scope)."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q72_topic1",
        "text": "Planeia criar fluxos de interface de usuário (UI flows / Power Automate Desktop) para automatizar vários processos de negócio baseados na web que atualmente executa manualmente. Precisa de garantir que os usuários conseguem criar e executar estes fluxos. Quais os três componentes que deve instalar e configurar nos dispositivos dos usuários?",
        "options": [
            "Power Automate Desktop, Última versão do Microsoft Edge, Gateway de dados no local (On-premises data gateway).",
            "Selenium IDE, Última versão do Mozilla Firefox, Gateway de dados no local (On-premises data gateway).",
            "Power Automate Desktop, Selenium IDE, Gateway de dados no local.",
            "Última versão do Microsoft Edge, Última versão do Mozilla Firefox, Selenium IDE."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão aborda a arquitetura de RPA (Robotic Process Automation) da Microsoft para automações locais.",
            "papoReto": "Para pôr o seu computador a clicar em botões e preencher formulários web sozinho a partir da nuvem, precisa de três coisas: O programa que grava e executa os cliques (Power Automate Desktop), um browser compatível e atualizado (Edge ou Chrome), e a 'ponte' que liga a nuvem da Microsoft ao seu PC físico (Gateway de dados no local).",
            "respostaCerta": "Power Automate Desktop, Última versão do Microsoft Edge, Gateway de dados no local (On-premises data gateway).",
            "puloDoGato": "A infraestrutura de 'UI Flows' (agora chamados de Desktop Flows) requer o Power Automate Desktop instalado na máquina local, uma extensão num browser moderno (o Edge é o preferencial/nativo da Microsoft) e o 'On-premises data gateway' para que os fluxos da Cloud (Power Automate web) consigam desencadear os fluxos na máquina física com segurança.",
            "cascasDeBanana": [
                "Selenium IDE: No início dos UI Flows (versões antigas do Power Automate), o Selenium IDE era usado para automatizar a web. Hoje em dia, a Microsoft construiu os seus próprios gravadores web integrados no Power Automate Desktop, tornando o Selenium obsoleto para este processo nativo."
            ],
            "dicaOuro": "Automação no PC físico a partir da Cloud = Power Automate Desktop + Browser (Edge/Chrome) + On-premises Data Gateway."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q73_topic1",
        "text": "Está a desenhar um fluxo de interface de usuário (UI flow / Desktop flow) para automatizar um software legado (legacy software). Precisa de capturar (preparar) dados do tela do software legado para os transferir para uma lista do Microsoft SharePoint. Quais são as quatro ações que deve executar em sequência para capturar a informação do tela antigo?",
        "options": [
            "1. Iniciar a gravação do fluxo -> 2. No menu Outputs, escolher 'Selecionar texto no tela' -> 3. Selecionar a informação a passar para o SharePoint -> 4. Inserir um nome e descrição para o output.",
            "1. Iniciar a gravação do fluxo -> 2. Selecionar a informação a passar para o SharePoint -> 3. Copiar e colar o texto na janela de definição de output -> 4. Inserir um nome e descrição.",
            "1. No menu Outputs, escolher 'Selecionar texto no tela' -> 2. Iniciar a gravação do fluxo -> 3. Selecionar a informação -> 4. Parar a gravação.",
            "1. Inserir nome e descrição do output -> 2. Iniciar a gravação -> 3. Selecionar informação no tela -> 4. Copiar e colar o texto."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão sobre a operação prática do gravador do Power Automate Desktop (RPA).",
            "papoReto": "Vai ensinar o computador a copiar um texto de um programa velho. Primeiro, clica em 'Gravar' (Start recording). Depois, diz à ferramenta que quer extrair e guardar um texto que está no tela (Outputs > Select text on screen). A seguir, com o rato, faz a seleção da área que tem a informação. Por fim, dá um nome a esse pedaço de texto (ex: 'NomeDoCliente') para poder usá-lo mais à frente e mandar para o SharePoint.",
            "respostaCerta": "1. Iniciar a gravação do fluxo -> 2. No menu Outputs, escolher 'Selecionar texto no tela' -> 3. Selecionar a informação a passar para o SharePoint -> 4. Inserir um nome e descrição para o output.",
            "puloDoGato": "A captura de dados em fluxos RPA (Desktop flows) para uso posterior na cloud (SharePoint, Dataverse, etc.) é feita definindo 'Outputs' (Saídas). Durante a gravação, você sinaliza ao gravador que uma determinada área da interface do usuário contém um texto que você quer ler. O gravador gera uma variável de output dinamicamente.",
            "cascasDeBanana": [
                "Copiar e colar o texto na janela de definição de output: Errado. Em RPA, você não 'copia e cola' manualmente para definir a estrutura; você usa a ferramenta de seleção visual de elementos da interface (UI elements) para que o robô saiba onde tem de ler o dado na próxima vez que correr."
            ],
            "dicaOuro": "Gravar ações RPA -> Avisar que quer um Output -> Clicar no elemento visual -> Nomear a variável de Output."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q74_topic1",
        "text": "Você possui um fluxo de processo empresarial (business process flow). Você precisa atualizar o fluxo de processo empresarial (BPF) enquanto minimiza os esforços de administração e manutenção. Que funcionalidade deve utilizar para cada requisito? (Selecione a combinação correta na ordem) 1. Permitir que os usuários naveguem para a fase (stage) anterior apenas a partir de fases específicas. 2. Criar registros de checklist em fases específicas a pedido (on demand).",
        "options": [
            "1. Fluxo do Power Automate (Power Automate flow) | 2. Passo de Ação (Action step)",
            "1. Passo de Ação (Action step) | 2. Fluxo Clássico (Classic workflow)",
            "1. Fluxo Clássico (Classic workflow) | 2. Passo de Ação (Action step)",
            "1. Fluxo do Power Automate (Power Automate flow) | 2. Fluxo Clássico (Classic workflow)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão focada na extensibilidade dos Fluxos de Processo Empresarial (BPFs).",
            "papoReto": "Se quiser criar um botão dentro da fase do processo para a pessoa clicar e gerar uma checklist na hora, usa um 'Passo de Ação' (Action step). Mas se precisar de uma lógica complexa nos bastidores que force o processo a voltar atrás automaticamente dependendo de onde o usuário está, a melhor forma com menos manutenção é usar um fluxo do Power Automate acionado por eventos do BPF.",
            "respostaCerta": "1. Fluxo do Power Automate (Power Automate flow) | 2. Passo de Ação (Action step)",
            "puloDoGato": "Um 'Action Step' permite adicionar um botão diretamente numa fase do BPF para desencadear um fluxo on-demand. Para automatizar o recuo de fases baseado em lógica condicional sem código pesado, o Power Automate pode acessar às tabelas do BPF (tabela de histórico do processo) e atualizar a 'Active Stage' (Fase Ativa) de forma automática e dinâmica.",
            "cascasDeBanana": [
                "Fluxos clássicos (Classic workflows) também podem interagir com BPFs, mas o enunciado pede para *minimizar os esforços de administração e manutenção*. A Microsoft recomenda sempre o Power Automate em detrimento dos workflows clássicos para novas automações complexas de BPFs."
            ],
            "dicaOuro": "Botão on-demand dentro do BPF = Action Step. Automação de salto de fases/lógica complexa no BPF = Power Automate Flow."
        },
        "difficulty": "intermediario",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q75_topic1",
        "text": "Você está a criar um novo fluxo de processo empresarial (BPF) para qualificar leads. Você cria uma 'Ação' (Action / Processo clássico), mas repara que ela não está disponível para ser selecionada dentro do 'Passo de Ação' (Action Step) do seu BPF. Você precisa de disponibilizar a ação para o Action Step. Quais são as DUAS configurações que deve realizar?",
        "options": [
            "A) Garantir que a entidade da ação corresponde à entidade da respetiva fase do BPF. E B) Adicionar pelo menos um passo à ação.",
            "A) Garantir que a entidade da ação corresponde à entidade da respetiva fase do BPF. E B) Selecionar 'Executar como um processo a pedido' (Run as an on demand process) na Ação.",
            "A) Selecionar 'Executar como um processo a pedido' na Ação. E B) Ativar (Activate) a ação.",
            "A) Ativar a ação. E B) Adicionar pelo menos um passo à ação."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão de troubleshooting ao tentar ligar um Processo Clássico (Ação/Workflow) a um Fluxo de Processo Empresarial (BPF).",
            "papoReto": "Criou uma ação e quer colocá-la como botão no seu BPF? Se não aparece na lista, é porque falhou em duas regras de essencial: 1) O botão está na fase do 'Lead'? Então a Ação também tem de ter o 'Lead' como entidade principal. 2) O botão é clicado 'quando o usuário quer', ou seja, a Ação tem de estar configurada para correr 'A Pedido' (On Demand).",
            "respostaCerta": "A) Garantir que a entidade da ação corresponde à entidade da respetiva fase do BPF. E B) Selecionar 'Executar como um processo a pedido' (Run as an on demand process) na Ação.",
            "puloDoGato": "Para um workflow clássico ou 'Ação' aparecer num 'Action Step' (Passo de Ação) de um BPF, ele tem de partilhar a mesma entidade primária da fase (stage) onde está a ser inserido, e a opção 'Run as an on demand process' (Executar como processo a pedido) DEVE estar obrigatoriamente ativada nas propriedades do processo.",
            "cascasDeBanana": [
                "Ativar a ação (Activate): É verdade que um processo tem de estar ativo para ser *utilizado*, mas mesmo antes de o ativar, se ele for On Demand e da mesma entidade, ele já aparece disponível para ser *selecionado* durante a configuração do BPF no editor. O bloqueio de visibilidade resolve-se com o On Demand e o match de entidades."
            ],
            "dicaOuro": "Processos não aparecem no BPF? Verifique: 1) Mesma Entidade. 2) Marcado como 'On Demand'."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q76_topic1",
        "text": "Você planeia automatizar vários processos diferentes utilizando o Power Automate (RPA / UI Flows). Cada processo tem características únicas. Precisa de recomendar o tipo de fluxo para cada processo. Selecione a combinação correta para os seguintes processos, respectivamente: 1. Aceder a dados de uma aplicação web interna (sem API REST nativa) como parte de uma tarefa em lote noturna (nightly batch job). 2. Aceder a dados de um site público (sem API) usando um processo através de uma fila a pedido (on-demand queue).",
        "options": [
            "1. Fluxo de IU Assistido (Attended UI flow) | 2. Fluxo de IU Não Assistido (Unattended UI flow)",
            "1. Fluxo de IU Não Assistido (Unattended UI flow) | 2. Fluxo de IU Assistido (Attended UI flow)",
            "1. Fluxo que usa conector personalizado | 2. Fluxo de IU Não Assistido",
            "1. Fluxo de IU Não Assistido | 2. Fluxo que usa conector padrão"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão testa a distinção entre os dois modos de operação dos Fluxos de Interface de Usuário (RPA / Desktop Flows).",
            "papoReto": "Se é um robô a correr de madrugada (nightly batch job) sem ninguém a olhar para o tela, é 'Não Assistido' (Unattended). Se é um robô que dispara 'a pedido' (on-demand) para ajudar um operador a ir buscar dados a um site público no momento em que ele precisa, é 'Assistido' (Attended).",
            "respostaCerta": "1. Fluxo de IU Não Assistido (Unattended UI flow) | 2. Fluxo de IU Assistido (Attended UI flow)",
            "puloDoGato": "UI Flows (atualmente Power Automate Desktop) resolvem a falta de APIs interagindo diretamente com a interface. O modo 'Unattended' (Não Assistido) executa em máquinas virtuais ou PCs bloqueados sem intervenção humana, ideal para tarefas agendadas ('nightly batch'). O modo 'Attended' (Assistido) executa na máquina do usuário ativo, ideal para cenários iniciados a pedido ('on-demand').",
            "cascasDeBanana": [
                "Conectores personalizados/padrão: O enunciado diz claramente 'sem API REST' (without a REST API). Sem API, nenhum conector cloud tradicional vai funcionar, sendo obrigatório o uso de RPA (UI flows / Desktop flows)."
            ],
            "dicaOuro": "Sem API = UI Flow / RPA. Tarefa noturna autónoma = Unattended. A pedido de um usuário local = Attended."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q77_topic1",
        "text": "[Nota: Esta é uma variação da Questão 4] Você cria fluxos de trabalho (workflows) para automatizar processos de negócios. Precisa de criar um fluxo de trabalho que envie e-mails automaticamente com base num modelo de mala direta (mail merge template). O fluxo de trabalho deve conter as seguintes configurações: 1. Executar imediatamente. 2. Validar quando uma condição é cumprida. 3. Executar uma ação quando a condition é cumprida. Selecione as opções de configuração corretas na ordem solicitada:",
        "options": [
            "1. Configurar o fluxo de trabalho para executar agora (run now) | 2. Assunto contém dados | 3. Enviar um e-mail",
            "1. Aprovar o fluxo de trabalho | 2. Publicar fluxo de trabalho | 3. Ver gráfico",
            "1. Configurar o fluxo de trabalho para executar agora | 2. Disparar quando um botão do Power Automate for premido | 3. Atualizar um direito de acesso",
            "1. Configurar fluxo filho para executar agora | 2. Assunto contém dados | 3. Enviar um e-mail"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Como a Microsoft adora testar a sua atenção, esta é a mesma questão 4 que vimos anteriormente, mas os requisitos foram apresentados numa ordem diferente!",
            "papoReto": "Pediram-lhe para enviar o e-mail na mesma hora? Então configura para 'executar agora'. O envio só deve acontecer se houver uma condição válida? Então verifique se o 'Assunto contém dados'. O que acontece no fim? 'Enviar um e-mail'. Simples e cronológico.",
            "respostaCerta": "1. Configurar o fluxo de trabalho para executar agora | 2. Assunto contém dados | 3. Enviar um e-mail",
            "puloDoGato": "A opção 'Configurar o fluxo de trabalho para executar agora' (Configure the workflow to run now) garante a execução imediata (síncrona / Real-time workflow). A validação de condição é o passo de 'Verificação' (ex: Assunto contém dados). A ação resultante é a operação final (Enviar um e-mail).",
            "cascasDeBanana": [
                "Configurar fluxo filho (child workflow): Não há necessidade de chamar um fluxo secundário se o próprio fluxo principal pode correr em tempo real e enviar o e-mail sozinho.",
                "Disparar quando um botão é premido: É uma trigger manual do Power Automate, não responde à premissa de avaliar uma condição automaticamente do workflow clássico."
            ],
            "dicaOuro": "Mala direta imediata = Workflow Clássico em tempo real (Run Now) -> Condição -> Ação."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q78_topic1",
        "text": "Você está a desenvolver um aplicativo de tela (canvas app). Precisa de aplicar regras de negócios (business rules) ao aplicativo sem escrever código. Quais as três ações que pode utilizar? (Selecione a combinação correta que apresenta as três ações válidas para um Canvas App)",
        "options": [
            "Validar dados e mostrar mensagens de erro | Definir níveis de obrigatoriedade de campos | Definir valores de campos.",
            "Mostrar ou ocultar campos | Ativar ou desativar campos | Validar dados e mostrar mensagens de erro.",
            "Definir níveis de obrigatoriedade de campos | Mostrar ou ocultar campos | Definir valores de campos.",
            "Ativar ou desativar campos | Definir níveis de obrigatoriedade de campos | Validar dados e mostrar mensagens de erro."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão extremamente comum no exame para testar as limitações das Business Rules quando aplicadas a Canvas Apps.",
            "papoReto": "Num Canvas App, as Regras de Negócios não conseguem mexer na interface visual (o tela). Ou seja, elas NÃO conseguem esconder (hide), mostrar (show), bloquear (disable) ou desbloquear (enable) campos. Isso tem de ser feito com fórmulas no próprio Canvas. O que a Regra de Negócios consegue fazer num Canvas App? Apenas regras de DADOS: dizer se o campo é obrigatório, meter um valor por defeito lá dentro, ou atirar um erro se o dado for inválido.",
            "respostaCerta": "Validar dados e mostrar mensagens de erro | Definir níveis de obrigatoriedade de campos | Definir valores de campos.",
            "puloDoGato": "As Regras de Negócios no Dataverse, quando ativadas com o escopo 'Entity' (Entidade), funcionam nos Canvas Apps apenas no nível do servidor/backend. Ações que manipulam o DOM/Interface de Usuário (como Mostrar/Ocultar colunas, Ativar/Desativar colunas, ou Criar Recomendações Visuais) SÓ funcionam nativamente em Model-driven apps.",
            "cascasDeBanana": [
                "Mostrar ou ocultar campos (Show or hide fields): Inválido em Canvas Apps.",
                "Ativar ou desativar campos (Enable or disable fields): Inválido em Canvas Apps."
            ],
            "dicaOuro": "Canvas App + Business Rule = Só valida DADOS (Valores, Obrigatoriedade, Erros). NÃO manipula o aspeto VISUAL (Mostrar, Ocultar, Bloquear)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q79_topic1",
        "text": "Uma empresa planeia utilizar o Power Automate para aumentar a eficiência dos colaboradores. Você precisa recomendar os tipos de fluxos que a empresa deve usar. Qual tipo de fluxo deve recomendar para as seguintes tarefas, respectivamente? 1. Executar ações repetitivas em um aplicativo existente que NÃO possui uma API. 2. Enviar um e-mail a um contato no dia do seu aniversário.",
        "options": [
            "1. Fluxo de Desktop (Desktop flow) | 2. Fluxo Agendado (Scheduled flow)",
            "1. Fluxo Automatizado (Automated flow) | 2. Fluxo Instantâneo (Instant flow)",
            "1. Fluxo de Processo Empresarial (Business process flow) | 2. Fluxo Agendado (Scheduled flow)",
            "1. Fluxo de Desktop (Desktop flow) | 2. Fluxo Automatizado (Automated flow)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão clássica de correspondência entre cenários de negócio e os tipos de fluxos disponíveis no Power Automate.",
            "papoReto": "O sistema não tem API (forma de comunicar com a nuvem)? Então precisa de um robô a imitar cliques de rato e teclado na máquina local. Isso é um Desktop Flow (RPA). E quer mandar uma mensagem exatamente no dia do aniversário? É um robô com hora e data marcadas no calendário, ou seja, um Scheduled Flow.",
            "respostaCerta": "1. Fluxo de Desktop (Desktop flow) | 2. Fluxo Agendado (Scheduled flow)",
            "puloDoGato": "Qualquer menção a 'sistemas antigos', 'software legado' ou 'sem API' (without an API) direciona automaticamente a resposta para RPA, que no ecossistema da Microsoft se chama 'Desktop flow' (antigo UI flow). Eventos baseados numa data ou periodicidade (como nascimentos, final do mês, todas as sextas-feiras) são geridos de forma impecável pelos 'Scheduled flows' (Fluxos Agendados).",
            "cascasDeBanana": [
                "Fluxo Automatizado para o aniversário: Os fluxos automatizados disparam mediante um evento num sistema (ex: 'Quando um registro é criado'). Um aniversário não é um 'evento' do sistema que dispara no dia, é um dado estático. Requer uma verificação periódica no calendário (Scheduled)."
            ],
            "dicaOuro": "Sem API = Desktop Flow. Datas e horas específicas = Scheduled Flow."
        },
        "difficulty": "avancado",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q80_topic1",
        "text": "Uma empresa está a criar um Fluxo de Processo Empresarial (BPF) para analisar a probabilidade de um cliente comprar um produto. As classificações vão de 0 a 100. As probabilidades atribuídas são: - 0-35: Baixa (Low) - 36-60: Média (Medium) - 60-75: Alta (High) - Mais de 75 (75+): Muito Alta (Very High) Você precisa definir os passos do BPF sabendo que *toda a lógica deve ser incluída numa única instrução de avaliação (single evaluation statement)*. Que passo deve usar para os intervalos 0-35, 36-60 e 75+ respectivamente?",
        "options": [
            "1. Ação Padrão (Default Action) | 2. Ramificação Condicional (Conditional Branch) | 3. Ramificação Condicional (Conditional Branch)",
            "1. Verificar Condição (Check Condition) | 2. Ação Padrão (Default Action) | 3. Ramificação Condicional (Conditional Branch)",
            "1. Passo Personalizado (Custom Step) | 2. Ramificação Condicional | 3. Verificar Condição",
            "1. Ação Padrão | 2. Verificar Condição | 3. Ação Padrão"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é uma questão sobre lógica de ramificação (Branching Logic) dentro dos Fluxos de Processo Empresarial (BPF).",
            "papoReto": "Se estamos a criar uma condição grande com vários 'E se...' (If... Else If...), a regra final, aquela que sobra quando nenhuma das outras é verdadeira, chama-se 'Ação Padrão' (Default Action). Neste caso, as pontuações mais altas vão sendo apanhadas pelas Ramificações Condicionais. O que sobrar (o fundo do poço, 0-35), cai na Ação Padrão.",
            "respostaCerta": "1. Ação Padrão (Default Action) | 2. Ramificação Condicional (Conditional Branch) | 3. Ramificação Condicional (Conditional Branch)",
            "puloDoGato": "No design de BPFs, quando se adiciona uma Condição, é possível criar lógicas complexas (If / Else If / Else). As cláusulas intermédias ('Else If' > 75, > 60, > 35) são construídas usando 'Conditional Branches'. O caminho que é executado caso nenhuma condição anterior seja satisfeita (o 'Else' puro) é modelado com a 'Default Action' (Ação Padrão).",
            "cascasDeBanana": [
                "Verificar Condição (Check Condition): O 'Check condition' é o nó global, não o conector/passo interno de cada linha de ramificação. O exercício pede o tipo de passo para os intervalos específicos dentro do nó de avaliação único."
            ],
            "dicaOuro": "Em ramificações complexas no BPF: If/Else If = Conditional Branch (Ramificação Condicional). O último Else (sobra) = Default Action (Ação Padrão)."
        },
        "difficulty": "intermediario",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q81_topic1",
        "text": "Você está a criar uma solução na Power Platform. Precisa de ajudar os usuários finais a compreender quais as ações a tomar a seguir e garantir que a interação do usuário ocorre em passos geríveis. Quais as ações que deve executar? Selecione a combinação correta para os seguintes requisitos, respectivamente: 1. Guiar o usuário sobre as ações a tomar. 2. Garantir que a interação do usuário ocorre em passos geríveis.",
        "options": [
            "1. Configurar fluxos de processo empresarial (business process flows) | 2. Configurar cada fase (stage) com as ações que precisam de ser concluídas.",
            "1. Configurar fluxos de trabalho (workflows) | 2. Configurar a linha do tempo (timeline) ou o formulário.",
            "1. Configurar vistas e gráficos (views and charts) | 2. Configurar insights.",
            "1. Configurar fluxos de processo empresarial (business process flows) | 2. Configurar a linha do tempo (timeline) ou o formulário."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão foca no propósito conceptual dos Fluxos de Processo Empresarial (Business Process Flows - BPFs).",
            "papoReto": "Se quer pegar num processo complexo (como vender um carro) e dividi-lo em partes fáceis para o usuário não se perder, cria aquela barrinha no topo do tela (Fluxo de Processo Empresarial). Para garantir que ele faz as coisas certas aos poucos, divide essa barra em 'Fases' (Stages) e, dentro de cada fase, coloca as 'Tarefas' (Steps/Actions) obrigatórias.",
            "respostaCerta": "1. Configurar fluxos de processo empresarial (business process flows) | 2. Configurar cada fase (stage) com as ações que precisam de ser concluídas.",
            "puloDoGato": "Os Business Process Flows servem exatamente para 'guiar o usuário' (guide the user). Eles são divididos em 'Stages' (Fases - ex: Qualificar, Propor, Fechar) e cada Stage é composto por 'Steps' ou 'Data Steps' (Passos geríveis), garantindo que o usuário preenche a informação correta na hora certa.",
            "cascasDeBanana": [
                "Configurar a linha do tempo (timeline): A timeline serve para registar o histórico de atividades (e-mails, notas, tarefas), não para criar um caminho estruturado de etapas obrigatórias de negócio."
            ],
            "dicaOuro": "Palavras-chave: 'Guiar o usuário' + 'Passos/Fases geríveis' = Business Process Flow (BPF) > Stages > Steps."
        },
        "difficulty": "intermediario",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q82_topic1",
        "text": "Você está a desenvolver um aplicativo. Tem de acionar uma notificação móvel sempre que uma hashtag específica for publicada no Twitter (X). A notificação enviará um e-mail com os detalhes para a equipe de redes sociais da empresa. Precisa de criar uma ligação ao serviço do Twitter e construir a solução. Quais são as quatro ações que deve realizar em sequência?",
        "options": [
            "1. Iniciar sessão no Power Automate e criar um novo fluxo em branco -> 2. Selecionar o conector do Twitter e usar as credenciais do usuário -> 3. Criar um gatilho (trigger) para pesquisar novas publicações com a hashtag -> 4. Criar uma ação para enviar um e-mail.",
            "1. Criar um gatilho para enviar um e-mail -> 2. Iniciar sessão no Power Automate -> 3. Selecionar o conector do Twitter -> 4. Criar uma ação para pesquisar a hashtag.",
            "1. Iniciar sessão no centro de administração da Power Platform -> 2. Criar uma ação para pesquisar a hashtag -> 3. Selecionar o conector do Twitter -> 4. Criar um gatilho para enviar e-mail.",
            "1. Selecionar o conector do Twitter e gerar uma chave de autenticação -> 2. Criar um fluxo em branco -> 3. Criar uma ação para enviar e-mail -> 4. Criar um gatilho para pesquisar a hashtag."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão muito lógica sobre a construção básica de um Cloud Flow no Power Automate.",
            "papoReto": "Como se faz um fluxo do zero? Primeiro, abre o Power Automate e cria um fluxo em branco. Segundo, escolhe a ferramenta com que vai falar (o Twitter) e faz login (credenciais). Terceiro, diz ao fluxo o que o vai fazer acordar (o Gatilho: 'Alguém usou a hashtag!'). Quarto, diz-lhe o que fazer a seguir (a Ação: 'Manda um e-mail').",
            "respostaCerta": "1. Iniciar sessão no Power Automate... -> 2. Selecionar o conector do Twitter... -> 3. Criar um gatilho (trigger)... -> 4. Criar uma ação para enviar um e-mail.",
            "puloDoGato": "A anatomia universal de um fluxo do Power Automate é: Criação do Flow -> Autenticação do Conector (Connection) -> Configuração do Gatilho (Trigger - O QUANDO) -> Configuração da Ação (Action - O QUE FAZER).",
            "cascasDeBanana": [
                "Inverter Trigger e Action (ex: Criar gatilho para enviar e-mail): O envio de e-mail é a consequência, logo é uma Ação (Action). A publicação no Twitter é o que inicia o fluxo, logo é o Gatilho (Trigger)."
            ],
            "dicaOuro": "Ordem sagrada do Power Automate: Iniciar -> Autenticar -> Gatilho (Trigger) -> Ação (Action)."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q83_topic1",
        "text": "Você gere aplicativos da Microsoft Power Platform para uma empresa. Precisa de ocultar o botão 'Fluxo' (Flow / Power Automate) na interface de usuário. Qual definição de configuração deve alterar?",
        "options": [
            "O Mapa do Site (The SiteMap)",
            "A seção de Personalizações nas Definições do Sistema (The Customizations section of System Settings)",
            "O componente de Entidade da solução padrão (The Entity component of the default solution)",
            "O separador Botões (The Buttons tab) do Flow"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta é uma daquelas questões de 'decoração de menu' que testa se o candidato já navegou a fundo nas configurações clássicas de sistema do Dynamics/Dataverse.",
            "papoReto": "Sabe aquele botão 'Power Automate' (antigo Flow) que aparece por defeito no topo das vistas e formulários nos Model-driven apps? Se a sua empresa não quiser que os usuários cliquem lá, tem de ir às definições antigas do sistema, no separador 'Personalização' (Customizations) e desmarcar a caixa 'Mostrar botão Flow'.",
            "respostaCerta": "A seção de Personalizações nas Definições do Sistema (The Customizations section of System Settings)",
            "puloDoGato": "Para ocultar o botão 'Flow' (agora muitas vezes referido como 'Power Automate') globalmente na Interface Unificada, o administrador deve acessar às Definições Avançadas > Definições do Sistema (System Settings) > Separador Personalizações (Customizations tab) e definir 'Enable Microsoft Flow' ou 'Show Microsoft Flow button' para Não (No).",
            "cascasDeBanana": [
                "O Mapa do Site (SiteMap): O SiteMap controla o menu lateral esquerdo (áreas e subáreas), não os botões da barra de comandos (Command Bar / Ribbon).",
                "O separador Botões do Flow: Não existe um 'separador botões' nas configurações do Power Automate para controlar a interface do Dataverse."
            ],
            "dicaOuro": "Ocultar globalmente o botão 'Flow/Power Automate' no Model-driven App = System Settings > Customizations Tab."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q84_topic1",
        "text": "Você configura e testa um fluxo de interface de usuário (UI flow / Desktop flow). Planeia executar o fluxo como um fluxo agendado (scheduled flow). O fluxo tem de correr num dispositivo Windows 10. Como parte da automação, o fluxo deve iniciar sessão no Windows 10 com as credenciais de uma conta de usuário chamada User1. Você precisa garantir que o fluxo corre fora das horas de ponta e não requer intervenção física do usuário (unattended). O que deve fazer?",
        "options": [
            "Garantir que a conta User1 tem uma sessão de usuário ativa no dispositivo.",
            "Garantir que todas as sessões de usuário têm a sessão terminada (signed out).",
            "Garantir que não existem sessões de usuário ativas no dispositivo.",
            "Garantir que todas as sessões de usuário têm a sessão terminada, exceto as sessões bloqueadas."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão avalia os rigorosos pré-requisitos para correr um robô RPA no modo 'Não Assistido' (Unattended).",
            "papoReto": "Se o robô (Power Automate Desktop) vai trabalhar de madrugada sozinho, ele precisa de 'ligar o tela' e fazer o login com o usuário e a password dele. Se alguém tiver deixado a sessão aberta (mesmo que bloqueada com o tela preto), o robô não consegue entrar e o fluxo falha. A máquina tem de estar completamente 'limpa' no tela de login inicial.",
            "respostaCerta": "Garantir que todas as sessões de usuário têm a sessão terminada (signed out).",
            "puloDoGato": "Para que um fluxo de ambiente de trabalho (Desktop Flow) corra em modo Unattended, o On-premises Data Gateway precisa de fazer o login na máquina do zero. Se existir *qualquer* sessão com o status 'Sign in' (iniciada ou bloqueada), o serviço aborta a execução.",
            "cascasDeBanana": [
                "Exceto sessões bloqueadas (Locked sessions): Uma sessão bloqueada continua a consumir recursos de um perfil de usuário e impede o robô de assumir o controle total para injetar credenciais.",
                "Sessão ativa do User1: Isso seria para o modo 'Assistido' (Attended), onde o usuário já está logado a ver o tela."
            ],
            "dicaOuro": "Modo Unattended RPA = A máquina TEM de ter todas as sessões com 'Sign Out' (Sessão Terminada)."
        },
        "difficulty": "iniciante",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q85_topic1",
        "text": "Uma empresa planeia enviar e-mails de escalonamento (escalation) a todos os clientes com faturas em atraso. Você está a criar um fluxo do Microsoft Power Automate para determinar se deve enviar um e-mail de escalonamento. O sistema tem de enviar um alerta para todas as faturas que tenham sete dias ou mais de atraso. Você precisa configurar o fluxo. Qual expressão deve utilizar?",
        "options": [
            "@greaterOrEquals(triggerOutputs()?['OverdueDate'], 7)",
            "'OverdueDate' >= 7 || triggerBody(); false",
            "triggerBody() = 'OverdueDate' >= 7;",
            "@equals(triggerBody()?['OverdueDate'], 7)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma introdução à Workflow Definition Language (WDL), as fórmulas utilizadas nos bastidores do Power Automate.",
            "papoReto": "Para verificar se um valor é 'maior ou igual a 7', o Power Automate não usa os símbolos matemáticos normais (>=) dentro destas expressões avançadas. Ele usa a palavra descritiva '@greaterOrEquals'. Entre parênteses coloca de onde vem o valor (os outputs do gatilho), a vírgula, e o número com o qual quer comparar.",
            "respostaCerta": "@greaterOrEquals(triggerOutputs()?['OverdueDate'], 7)",
            "puloDoGato": "As expressões lógicas no Power Automate seguem uma sintaxe baseada em funções. Para comparações, utilizam-se funções como `equals`, `less`, `greater`, `lessOrEquals` e `greaterOrEquals`. As opções que utilizam operadores como `>=` ou `||` num formato JavaScript/C# puro estão incorretas dentro do editor de expressões do Power Automate.",
            "cascasDeBanana": [
                "'OverdueDate' >= 7 || triggerBody(): Esta sintaxe é uma misturada que geraria um erro imediato no Expression Builder do Power Automate."
            ],
            "dicaOuro": "Condições e comparações no Power Automate usam funções textuais precedidas de @ em formato raw (ex: @greaterOrEquals) e não símbolos matemáticos tradicionais (>=)."
        },
        "difficulty": "avancado",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q86_topic1",
        "text": "Você adiciona um fluxo de processo empresarial (Business Process Flow - BPF) à tabela Conta (Account). O fluxo tem três fases (stages). Você precisa garantir que um fluxo de trabalho (workflow) possa ser executado quando um usuário conclui a fase final. Qual a opção que deve utilizar na configuração desse workflow?",
        "options": [
            "Iniciar quando (Start when): O estado do registro for alterado (Record status changes)",
            "Disponível para executar (Available to run): Executar este fluxo de trabalho em segundo plano (Run this workflow in the background)",
            "Disponível para executar (Available to run): Como um processo a pedido (As an on demand process)",
            "Disponível para executar (Available to run): Como um processo subordinado (As a child process)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Alerta de conceito vital! Esta é exatamente a mesma regra que vimos na Questão 78, mas aplicada à transição de fases (Stage Exit/Entry).",
            "papoReto": "Sempre que quiser enfiar um Workflow Clássico para dentro da barra do Business Process Flow (seja num botão Action Step ou para disparar sozinho quando muda de fase), o sistema de segurança do Dynamics obriga a que esse Workflow tenha a caixa 'A Pedido' (On Demand) ativada. Ponto final.",
            "respostaCerta": "Disponível para executar (Available to run): Como um processo a pedido (As an on demand process)",
            "puloDoGato": "Para que um fluxo de trabalho (Workflow) fique disponível no editor do Fluxo de Processo Empresarial (BPF) como um 'Workflow Step' (seja Trigger de Entry ou Trigger de Exit de uma Stage), ele DEVE ser marcado como 'Run as an on demand process' e partilhar a mesma entidade da fase (stage) onde está a ser configurado.",
            "cascasDeBanana": [
                "Executar em segundo plano (Run in the background): Embora os workflows associados a BPFs possam correr em background, essa marcação isoladamente não o faz aparecer no editor do BPF. Apenas o 'On Demand' destranca essa funcionalidade."
            ],
            "dicaOuro": "Para ligar Workflows Clássicos a BPFs (seja Stage Entry, Stage Exit ou Action Step) = Marcar 'Run as an on demand process'."
        },
        "difficulty": "intermediario",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q87_topic1",
        "text": "Você precisa criar um fluxo de ambiente de trabalho do Power Automate (Power Automate Desktop flow). Quais são as duas formas possíveis de criar o fluxo? (Selecione a combinação correta que apresenta os dois métodos completos)",
        "options": [
            "1. Gravar eventos de rato e teclado E 2. Usar ações pré-construídas (pre-built actions).",
            "1. Configurar um modelo pré-construído E 2. Usar ações pré-construídas.",
            "1. Gravar eventos de rato e teclado E 2. Criar modelos utilizando o Microsoft Visio.",
            "1. Usar ações pré-construídas E 2. Criar modelos utilizando o Microsoft Visio."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão avalia a sua experiência básica com a ferramenta Power Automate Desktop (PAD) para automação robótica (RPA).",
            "papoReto": "Como é que se ensina um robô a fazer tarefas no seu PC? Tem duas formas oficiais: Ou clica no botão 'Gravar' (Recorder) e deixa o sistema filmar onde você clica e o que você escreve; Ou vai à caixa de ferramentas do lado esquerdo, pega nos blocos já feitos (tipo Lego) de 'Abrir Excel', 'Clicar Botão', 'Enviar Email', e arrasta para o meio do tela.",
            "respostaCerta": "1. Gravar eventos de rato e teclado E 2. Usar ações pré-construídas (pre-built actions).",
            "puloDoGato": "O Power Automate Desktop permite desenhar fluxos manualmente arrastando e soltando 'pre-built actions' (centenas de ações de arquivos, UI, Web, Excel, etc.) do painel esquerdo, OU usando o 'Recorder' (gravador de Desktop/Web) para capturar automaticamente os cliques do rato e eventos do teclado. Os dois métodos são frequentemente usados em conjunto.",
            "cascasDeBanana": [
                "Criar modelos utilizando o Microsoft Visio: O Visio pode ser usado (através de um Add-in) para mapear processos para o Power Automate na *cloud* (Cloud Flows), mas NÃO é uma ferramenta usada para gerar RPA (Desktop Flows) que dependem de seletores de UI locais do computador."
            ],
            "dicaOuro": "Criação de Desktop Flows (RPA) = Gravador (Recorder) + Ações Pré-construídas (Drag and Drop UI Elements)."
        },
        "difficulty": "intermediario",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q88_topic1",
        "text": "Você está a usar o Power Automate para criar uma lista de clientes a partir de um arquivo do Microsoft Excel. A lista deve conter clientes que cumpram UM dos seguintes critérios: - Vendas (sales) inferiores a 500.000 € - Clientes que têm o crédito suspenso (credit hold). Você precisa criar uma condição para filtrar a lista de clientes. Como deve completar a condição de filtro (expressão WDL)? Selecione as duas partes corretas, respectivamente: @[ _____ ](less(item()?['sales'], 500000), [ _____ ])",
        "options": [
            "1. and | 2. equals(item()?['credithold'], 'true')",
            "1. or | 2. equals(item()?['credithold'], 'true')",
            "1. or | 2. empty(item()?['credithold'], 'true')",
            "1. not | 2. not(equals(item()?['credithold'], 'true'))"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão de sintaxe avançada do Power Automate (WDL - Workflow Definition Language).",
            "papoReto": "O problema diz que queremos clientes com menos de 500 mil em vendas OU que tenham o crédito cortado. A palavra mágica é 'OU'. Na linguagem do Power Automate, isso traduz-se para a função lógica `or(...)`. E para ver se o crédito cortado é verdadeiro? Verificamos se é igual a 'true' utilizando a função `equals(...)`.",
            "respostaCerta": "1. or | 2. equals(item()?['credithold'], 'true')",
            "puloDoGato": "A função `or` recebe dois argumentos e retorna verdadeiro se *pelo menos um* for verdadeiro. A função `equals` verifica a igualdade exata entre dois valores. A expressão completa formatada seria `@or(less(item()?['sales'], 500000), equals(item()?['credithold'], 'true'))`.",
            "cascasDeBanana": [
                "Usar 'and': Exigiria que o cliente tivesse vendas baixas E estivesse com o crédito suspenso simultaneamente, o que contraria o requisito 'um dos seguintes critérios'.",
                "Usar 'empty': A função `empty` apenas verifica se o campo está vazio/nulo, não avalia se o seu valor é especificamente 'true'."
            ],
            "dicaOuro": "Lógica 'Um ou Outro' = função or(). Verificar se contém um valor específico = função equals()."
        },
        "difficulty": "avancado",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q89_topic1",
        "text": "Uma quinta (farm) utiliza um aplicativo de tela (canvas app) para gerenciar os calendários de plantação de sementes. A quinta utiliza inteligência de negócio (business intelligence) para fornecer recomendações de alterações de calendário com base em dados meteorológicos. Você deve implementar uma regra de negócios (business rule) que altere a informação em vários formulários no canvas app com base nos dados de business intelligence. Qual o escopo (scope) que deve usar na regra de negócios?",
        "options": [
            "Tabela (Table / Entity)",
            "Todos os Formulários (All Forms)",
            "Formulário específico (Form specific)",
            "Global"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Alerta máximo de repetição! Este conceito já foi testado nas Questões 7 e 74. A Microsoft não quer mesmo que se esqueça disto.",
            "papoReto": "Quantas vezes a Microsoft quer que saiba isto? Se a regra vai rodar num Canvas App, o Canvas App não entende os 'Formulários' clássicos do Dynamics. Para a regra funcionar lá, tem de ser atirada diretamente para o 'motor' da base de dados. O nome desse escopo é 'Tabela' (antigamente chamado 'Entidade').",
            "respostaCerta": "Tabela (Table / Entity)",
            "puloDoGato": "Regras de negócio com escopo 'All Forms' ou 'Specific Form' funcionam exclusivamente no lado do cliente (client-side) dentro de Model-driven apps. Para que a lógica corra no servidor (server-side) e seja respeitada por Canvas Apps, Portais (Power Pages) ou integrações por API, o escopo TEM obrigatoriamente de ser 'Table' (Entity).",
            "cascasDeBanana": [
                "Todos os Formulários (All Forms): Esta é a casca de banana perfeita. Como o enunciado diz 'vários formulários no canvas app', o instinto é escolher 'All Forms'. Mas lembre-se: os formulários do Canvas não são reconhecidos pelo motor de Business Rules do Dataverse!"
            ],
            "dicaOuro": "Regra de Negócio a funcionar num Canvas App ou API = Escopo 'Table' (Entidade)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q90_topic1",
        "text": "Você faz as seguintes personalizações num ambiente do Microsoft Dataverse: - Cria uma nova tabela. - Adiciona dados a essa nova tabela. - Elimina uma área não utilizada do mapa do site (site map). Os componentes devem ser transportados para um ambiente diferente. Você precisa determinar o método correto para transportar cada componente. Qual a ferramenta/método que deve utilizar para cada um, respectivamente (1. Nova tabela | 2. Dados para a nova tabela | 3. Mapa do Site)?",
        "options": [
            "1. Solução | 2. Ferramenta de Migração da Configuração (Configuration Migration tool) | 3. Solução",
            "1. Solução | 2. Solução | 3. Ferramenta SolutionPackager",
            "1. Ferramenta de Migração da Configuração | 2. Solução | 3. Solução",
            "1. Ferramenta SolutionPackager | 2. Ferramenta de Migração da Configuração | 3. Solução"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão clássica de ALM (Application Lifecycle Management) sobre como mover estrutura (metadados) versus mover dados transacionais entre ambientes.",
            "papoReto": "Se é estrutura da casa (como uma Tabela Nova ou o Menu/Site Map), você empacota isso numa 'Solução' e manda para o outro ambiente. Mas as Soluções não transportam os móveis (os dados normais)! Para passar as linhas e registros que inseriu na tabela, tem de usar uma carrinha de mudanças específica chamada 'Configuration Migration tool'.",
            "respostaCerta": "1. Solução | 2. Ferramenta de Migração da Configuração (Configuration Migration tool) | 3. Solução",
            "puloDoGato": "Soluções no Dataverse são usadas unicamente para mover metadados e estrutura (Tabelas, Campos, Vistas, Dashboards, Site Maps, Fluxos, etc.). Os *dados transacionais/cadastrais* reais dentro dessas tabelas NÃO viajam dentro da solução. Para mover registros de configuração ou dados de base entre ambientes de forma relacional, a Microsoft fornece a 'Configuration Migration tool'.",
            "cascasDeBanana": [
                "SolutionPackager tool: Esta é uma ferramenta de linha de comandos avançada usada para extrair arquivos zip de soluções para arquivos XML individuais com o objetivo de fazer controle de versões (Git/DevOps). Não é usada na interface gráfica para empacotar o site map."
            ],
            "dicaOuro": "Mover Estrutura (Tabelas, Menus/Site Maps) = Solução (Solution). Mover Linhas de Dados reais (Records/Data) = Configuration Migration Tool."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q91_topic1",
        "text": "Uma empresa planeia adicionar outro idioma a um ambiente do Microsoft Dataverse. Foram adicionados ou modificados vários componentes no ambiente. Você precisa garantir que esses componentes sejam traduzidos. Qual método deve utilizar para cada tipo de componente? Selecione a combinação correta, respectivamente, para: 1. Vista (View) 2. Modelo de e-mail (Email template) 3. Relatório (Report)",
        "options": [
            "1. Exportar e reimportar texto traduzido | 2. Criar uma versão separada para cada idioma | 3. Utilizar rótulos incorporados (embedded labels)",
            "1. Utilizar rótulos incorporados | 2. Exportar e reimportar texto traduzido | 3. Criar uma versão separada para cada idioma",
            "1. Criar uma versão separada para cada idioma | 2. Utilizar rótulos incorporados | 3. Exportar e reimportar texto traduzido",
            "1. Exportar e reimportar texto traduzido | 2. Utilizar rótulos incorporados | 3. Criar uma versão separada para cada idioma"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma ótima questão prática sobre a tradução e localização de diferentes tipos de componentes no Dataverse.",
            "papoReto": "Para traduzir as tabelas e telas do sistema (Vistas), nós exportamos um arquivo mágico (Excel), traduzimos, e reimportamos. Mas os Modelos de E-mail não suportam essa magia, logo temos de criar 'à mão' uma versão do e-mail para PT, outra para EN, etc. Já para os velhos Relatórios do SSRS, a tradução tem de estar colada (incorporada) no próprio arquivo do relatório.",
            "respostaCerta": "1. Exportar e reimportar texto traduzido | 2. Criar uma versão separada para cada idioma | 3. Utilizar rótulos incorporados (embedded labels)",
            "puloDoGato": "Vistas (Views) fazem parte dos metadados da Solução, por isso suportam a funcionalidade nativa 'Export/Import Translations'. Os Modelos de E-mail (Email templates) são tratados como registros de dados (data records) com a sua própria flag de idioma, pelo que deve criar um template separado por idioma. Relatórios antigos baseados em SSRS (Reports) não integram nativamente com as traduções do Dataverse, exigindo rótulos incorporados no RDL ou múltiplas versões.",
            "cascasDeBanana": [
                "Tentar usar 'Exportar Traduções' para Email Templates: O sistema de exportação da solução apenas extrai nomes de colunas, botões da fita, títulos de formulários e opções, não o conteúdo de texto dos modelos de e-mail."
            ],
            "dicaOuro": "Vistas/Formulários = Export/Import Translations. Email Templates = Separated version per language."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q92_topic1",
        "text": "Uma empresa utiliza o Power Apps. Os usuários devem conseguir visualizar APENAS as colunas 'address1' na tabela Conta (Account). Você precisa garantir que outras colunas de endereço não sejam visíveis para os usuários quando estes criarem vistas (views) e filtros. O que deve fazer?",
        "options": [
            "Excluir as outras colunas de endereço da tabela.",
            "Desativar a opção de Pesquisa (Search) para as colunas.",
            "Utilizar segurança no nível da coluna (Column-level security) para remover o acesso de leitura a todos os usuários.",
            "Criar regras de negócios (business rules) para ocultar as outras colunas de endereço."
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "A questão de essencial sobre como restringir de forma absoluta o acesso a dados no Dataverse.",
            "papoReto": "Se quer proibir de vez que alguém veja uma coluna (mesmo que tente fazer filtros espertos ou exportar para o Excel), não basta esconder no tela (Regra de Negócios) nem tirar da pesquisa. Tem de colocar um 'cadeado' na própria coluna da base de dados! Isso chama-se Segurança no nível da coluna (Column-level security).",
            "respostaCerta": "Utilizar segurança no nível da coluna (Column-level security) para remover o acesso de leitura a todos os usuários.",
            "puloDoGato": "Column-level security (antigo Field Level Security) restringe o acesso aos dados (Leitura, Criação, Atualização) diretamente no motor do Dataverse. Quando o acesso de leitura é revogado, a coluna desaparece magicamente de Vistas, Localização Avançada, Relatórios, Filtros e Formulários para todos os usuários não autorizados.",
            "cascasDeBanana": [
                "Criar regras de negócios (Business Rules): Uma regra de negócios apenas esconde o campo visualmente dentro do Formulário. O usuário ainda conseguiria adicionar a coluna numa exibição pessoal ou na Pesquisa Avançada e ver os dados.",
                "Desativar a opção de Pesquisa: Apenas impediria de usar a coluna como filtro rápido, mas a coluna ainda poderia ser adicionada à vista para ler os dados."
            ],
            "dicaOuro": "Impedir usuários de ver uma coluna específica EM TODO O LADO (vistas, exportações, formulários) = Column-Level Security."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q93_topic1",
        "text": "Uma empresa utiliza o Power Apps. Você cria uma tabela personalizada (custom table) e configura um relacionamento de tabela filha (child table) com a tabela Contato (Contact). Você precisa configurar o comportamento em cascata (cascading behavior) para cada ação. Que comportamento deve utilizar para cada ação, respectivamente? 1. O registro da tabela personalizada (pai) é eliminado. 2. O registro da tabela personalizada (pai) é partilhado.",
        "options": [
            "1. Tudo em Cascata (Cascade All) | 2. Restringir (Restrict)",
            "1. Restringir (Restrict) | 2. Nenhuma em Cascata (Cascade None)",
            "1. Tudo em Cascata (Cascade All) | 2. Tudo em Cascata (Cascade All)",
            "1. Restringir (Restrict) | 2. Tudo em Cascata (Cascade All)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão sobre os comportamentos em cascata (Cascading Behaviors) dos relacionamentos no Dataverse.",
            "papoReto": "Se excluir o 'Pai', o que acontece aos 'Filhos'? Para este requisito (e de acordo com o gabarito de ações da Microsoft), se a tabela personalizada for apagada, tudo vai junto (Cascade All / Tudo em Cascata). Se a tabela personalizada for partilhada com alguém, não queremos partilhar automaticamente os contatos filhos (Restrict / Restringir).",
            "respostaCerta": "1. Tudo em Cascata (Cascade All) | 2. Restringir (Restrict)",
            "puloDoGato": "Em relacionamentos 1:N, o comportamento de eliminação 'Cascade All' (Tudo em cascata) garante que os registros filhos são eliminados quando o pai é eliminado, mantendo a base de dados limpa. O comportamento de partilha 'Restrict' (Restringir) impede que a ação de partilha do registro pai conceda automaticamente acesso aos registros filhos associados, garantindo a segurança dos Contatos.",
            "cascasDeBanana": [
                "Usar 'Cascade None' na eliminação: Deixaria registros orfãos (contatos sem a tabela pai associada) na base de dados, o que é má prática de modelação neste cenário."
            ],
            "dicaOuro": "Eliminação do Pai apaga o Filho = Cascade All. Partilha do Pai não partilha o Filho = Restrict."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q94_topic1",
        "text": "Planeia adicionar um aplicativo do Power Apps ao Microsoft Teams. Um ambiente do Microsoft Dataverse for Teams ainda não foi aprovisionado (provisioned). Você precisa criar um ambiente do Dataverse for Teams. Quais são as DUAS ações que pode executar para que o ambiente seja criado?",
        "options": [
            "A) Criar um novo ambiente no Power Platform Admin Center. E B) Criar um novo aplicativo no Teams.",
            "A) Criar uma política de permissão de aplicativos no Teams admin center. E B) Criar um novo ambiente no Power Platform Admin Center.",
            "A) Instalar um aplicativo existente no Teams. E B) Criar uma política de permissão de aplicativos no Teams admin center.",
            "A) Criar um novo aplicativo no Teams. E B) Instalar um aplicativo existente no Teams."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Como é que nasce um ambiente do Dataverse for Teams? Esta questão testa o conceito de provisão automática.",
            "papoReto": "Não precisa de ir ao painel de administração (Admin Center) para clicar em 'Novo Ambiente'. O Dataverse for Teams é inteligente: no momento em que cria a sua primeira App dentro de uma equipe do Teams, ou quando instala uma App (Power App) lá dentro pela primeira vez, o sistema percebe que precisa de uma base de dados e cria o ambiente automaticamente nos bastidores.",
            "respostaCerta": "A) Criar um novo aplicativo no Teams. E B) Instalar um aplicativo existente no Teams.",
            "puloDoGato": "A provisão de um ambiente do Microsoft Dataverse for Teams acontece de forma 100% automática (seamless) quando os usuários executam uma de duas ações diretamente no cliente do Microsoft Teams: criar uma nova app ou instalar uma app existente na equipe. Não requer acesso nem passos manuais no Power Platform Admin Center.",
            "cascasDeBanana": [
                "Criar um novo ambiente no Power Platform Admin Center: Apesar de poder gerenciar ambientes do Teams lá (como upgrades para o Dataverse completo ou cópias de segurança), a *criação inicial* (provisão) é desencadeada exclusivamente a partir da interface do Teams."
            ],
            "dicaOuro": "Criação do Dataverse for Teams é Automática ao: 1) Criar App no Teams OU 2) Instalar App no Teams."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q95_topic1",
        "text": "Uma empresa utiliza o Power Apps com o Microsoft Dataverse. A empresa ativou a auditoria (auditing) na base de dados do Dataverse. A empresa está a atingir a capacidade máxima de armazenamento e precisa selecionar alguns dados de auditoria. Quais as três opções de eliminação (deletion options) que deve usar? (Selecione a combinação com as 3 opções corretas)",
        "options": [
            "Entre duas datas especificadas, Por tabela e Por coluna.",
            "Por registro (by record), Por tabela (by table) e Mais antigo que uma data especificada (older than a specified date).",
            "Por coluna, Por registro e Mais antigo que uma data especificada.",
            "Por registro, Entre duas datas especificadas e Por coluna."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Gestão de capacidade (Capacity Management) e limpeza de logs de auditoria no Dataverse.",
            "papoReto": "A base de dados encheu com históricos antigos? O Dataverse permite limpar o lixo de auditoria de três formas precisas: excluir os logs de uma Tabela inteira, excluir os logs de um Registro específico, ou excluir todos os logs que sejam mais antigos do que uma determinada data. Não dá para excluir 'só de uma coluna' ou 'entre duas datas exatas' de forma nativa pela interface de retenção.",
            "respostaCerta": "Por registro (by record), Por tabela (by table) e Mais antigo que uma data especificada (older than a specified date).",
            "puloDoGato": "Na interface moderna de gestão de retenção de auditoria e bulk delete do Dataverse, as três opções granulares nativas suportadas para libertar espaço de log são: 'By record' (Por registro), 'By table' (Por tabela) e 'Older than a specified date' (Mais antigo que a data especificada).",
            "cascasDeBanana": [
                "Por coluna (by column): O Dataverse não suporta a eliminação do histórico de auditoria no nível individual da coluna. Se a auditoria for eliminada para a tabela ou registro, vai tudo junto."
            ],
            "dicaOuro": "Excluir Auditoria: Por Tabela (Table), Por Registro (Record), ou Mais antigo que uma Data (Older than date)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q96_topic1",
        "text": "Uma empresa utiliza um aplicativo do Power Apps com o Microsoft Dataverse. A empresa exige a importação de registros para o Dataverse. Os registros duplicados nos dados importados devem ser descartados (discarded/deleted) sem intervenção do usuário. Você cria uma regra de deteção de duplicados (duplicate detection rule). Você precisa configurar a regra para atuar na importação de dados. Que opção deve configurar na regra?",
        "options": [
            "Ativar a opção Modelos para Importação de Dados (Templates for Data Import).",
            "Desativar a opção Permitir Duplicados (Allow Duplicates).",
            "Ativar a opção Quando um registro é criado ou atualizado (When a record is created or updated).",
            "Ativar a opção 'Durante a importação de dados' (During data import)."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Configuração de regras de deteção de duplicados focadas na importação de dados em massa.",
            "papoReto": "Quando se carrega um arquivo Excel/CSV com milhares de linhas para o Dataverse, queremos que o sistema deite fora automaticamente os repetidos. Mas para o sistema saber que tem de fazer essa vigia durante uma importação, a própria Regra de Deteção de Duplicados precisa de ter a caixa 'Durante a importação de dados' ativada nas suas propriedades. Sem isso, a regra fica padrão durante a importação.",
            "respostaCerta": "Ativar a opção 'Durante a importação de dados' (During data import).",
            "puloDoGato": "Uma regra de deteção de duplicados no Dataverse tem gatilhos específicos (quando deve ser executada). Para que a regra atue no 'Data Import Wizard' e descarte registros duplicados automaticamente (desde que o usuário escolha não permitir duplicados no assistente), a regra DEVE obrigatoriamente ter a propriedade 'During data import' selecionada no tela de configuração da regra.",
            "cascasDeBanana": [
                "Desativar a opção Permitir Duplicados (Allow Duplicates): Esta é uma opção do Assistente de Importação (Import Wizard), mas a pergunta pede o que deve ser configurado *na própria regra* (rule) de deteção de duplicados que você acabou de criar."
            ],
            "dicaOuro": "Para a regra funcionar num upload de Excel/CSV = Marcar 'During data import' nas definições da Duplicate Detection Rule."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q97_topic1",
        "text": "Uma empresa possui um aplicativo orientado por modelo (model-driven app) que utiliza o Microsoft Dataverse. Os usuários precisam de adicionar um número de telefone alternativo ao introduzir as informações da conta. Os usuários também solicitam uma funcionalidade que filtre/oculte os clientes que não têm um número de telefone alternativo preenchido. Que funcionalidade deve utilizar para cada requisito? (Selecione a combinação correta na ordem) 1. Adicionar o número de telefone alternativo. 2. Listar clientes sem número de telefone alternativo.",
        "options": [
            "1. Coluna (Column) | 2. Vista (View)",
            "1. Tabela (Table) | 2. Relacionamento (Relationship)",
            "1. Relacionamento (Relationship) | 2. Vista (View)",
            "1. Coluna (Column) | 2. Tabela (Table)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Uma questão fundamental sobre a modelação e apresentação de dados básica no Dataverse.",
            "papoReto": "Se precisa de um sítio novo para o usuário escrever e guardar o número de telefone, tem de criar um campo novo na base de dados (uma Coluna). Se quer ver uma lista no tela apenas com os clientes que têm esse campo vazio, tem de criar um filtro gravado dessa tabela (uma Vista).",
            "respostaCerta": "1. Coluna (Column) | 2. Vista (View)",
            "puloDoGato": "Para recolher um novo ponto de dados num formulário, adicionamos uma 'Column' (anteriormente chamada de Field/Campo) à tabela. Para apresentar um subconjunto de registros com base em critérios de filtragem (ex: 'Telefone Alternativo Não Contém Dados'), configuramos uma 'View' (Vista).",
            "cascasDeBanana": [
                "Usar Tabela/Relacionamento: Um relacionamento cria uma ligação a outra tabela, mas um telefone alternativo é apenas um texto simples, não justifica uma tabela separada. E para filtrar listas não usamos tabelas ou relacionamentos diretamente, usamos Vistas."
            ],
            "dicaOuro": "Novo dado para guardar = Column (Coluna). Lista filtrada de registros = View (Vista/Visualização)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q98_topic1",
        "text": "Você está a criar um model-driven app para um help desk de peças de automóveis. Um agente utiliza um formulário para recolher informações sobre os automóveis dos clientes em duas tabelas personalizadas: 'Cliente' (Client) e 'Automóvel' (Automobile). O formulário deve pré-preencher (prepopulate) a seguinte informação sobre o cliente a partir da tabela Cliente: Primeiro Nome, Último Nome. O agente deve conseguir introduzir a seguinte informação na tabela Automóvel: Marca do automóvel, Modelo do automóvel. O que deve configurar para cada requisito, respectivamente? 1. Pré-preencher as informações do cliente. 2. Introduzir as informações do automóvel.",
        "options": [
            "1. Fluxo de Dados (Dataflow) | 2. Vista (View)",
            "1. Chave Alternativa (Alternate key) | 2. Conector (Connector)",
            "1. Relacionamento (Relationship) | 2. Tabela (Table)",
            "1. Tabela Virtual (Virtual table) | 2. Fluxo do Power Automate (Power Automate Flow)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Questão clássica de arquitetura relacional que aborda o mapeamento de campos nativo do Dataverse.",
            "papoReto": "Como é que, ao criar o carro do cliente, o nome dele já vem preenchido? Quando existe uma ligação de 'Relacionamento' (1:N) entre o Cliente e o Automóvel, o Dynamics permite 'mapear' campos do Pai para o Filho. E onde é que o agente vai preencher a marca e o modelo do carro? Nos campos que pertencem à 'Tabela' do Automóvel.",
            "respostaCerta": "1. Relacionamento (Relationship) | 2. Tabela (Table)",
            "puloDoGato": "O pré-preenchimento nativo de dados na criação de um registro filho (a partir do contexto de um registro pai) é alcançado através do 'Field Mapping' (Mapeamento de Colunas), que só pode ser configurado dentro das propriedades de um 'Relationship' (Relacionamento 1:N). O armazenamento das informações a serem introduzidas (Marca, Modelo) dita a criação das colunas correspondentes na própria 'Table' (Tabela).",
            "cascasDeBanana": [
                "Tabela Virtual (Virtual table): Serve para integrar dados que moram fora do Dataverse (ex: SQL Server) em tempo real, não serve para pré-preencher campos entre tabelas internas."
            ],
            "dicaOuro": "Pré-preencher (Prepopulate) dados do Pai para o Filho sem código = Mapeamento de Campos dentro de um Relacionamento (Relationship)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q99_topic1",
        "text": "Uma empresa utiliza o Power Apps. Você ativa a auditoria (auditing) no Microsoft Dataverse. Os usuários relatam os seguintes problemas ao visualizar os logs de auditoria: - Problema A: Não é possível visualizar os logs de auditoria de acesso de leitura (read access audit logs). - Problema B: Não é possível visualizar os logs de auditoria da tabela Conta (Account). Quais são as causas destes problemas, respectivamente?",
        "options": [
            "A: O armazenamento do tenant está acima da capacidade | B: A auditoria está desativada no nível do aplicativo",
            "A: A auditoria não está ativada no nível do ambiente (environment level) | B: A auditoria está desativada no nível da tabela (table level)",
            "A: A auditoria para acesso de leitura não está ativada | B: O armazenamento do tenant está acima da capacidade",
            "A: A auditoria está desativada no nível da tabela | B: A auditoria não está ativada no nível do ambiente"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão testa o seu conhecimento sobre a hierarquia das configurações de Auditoria no Dataverse.",
            "papoReto": "A auditoria no Dataverse tem 3 disjuntores. O disjuntor principal (Global/Ambiente), o disjuntor da divisão (Tabela) e o das tomadas (Colunas). Auditar quem *lê* dados (Read Access) gera uma quantidade astronómica de logs, pelo que é uma opção especial e pesada ativada apenas no disjuntor principal (Nível do Ambiente). Se a auditoria da 'Conta' não funciona, é porque o disjuntor da divisão dessa tabela (Nível da Tabela) está desligado.",
            "respostaCerta": "A: A auditoria não está ativada no nível do ambiente (environment level) | B: A auditoria está desativada no nível da tabela (table level)",
            "puloDoGato": "A funcionalidade de 'Auditoria de Acesso de Leitura' (Read Access Auditing) é controlada globalmente nas System Settings do Power Platform Admin Center (no nível do Ambiente/Environment). Se não estiver ativada aí, os logs de leitura não funcionam em lado nenhum. Se os logs normais falham apenas para a tabela Conta (Account), é porque a caixa 'Auditing' está desmarcada nas propriedades dessa Tabela específica.",
            "cascasDeBanana": [
                "Achar que a auditoria tem um nível de 'aplicativo' (app level): Não existe configuração de auditoria no nível de um Model-driven app; a auditoria aplica-se na raiz da base de dados (Dataverse)."
            ],
            "dicaOuro": "Auditoria de Leitura (Read Access) = Nível do Ambiente (Environment). Falha de auditoria numa tabela isolada = Nível da Tabela (Table level)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q100_topic1",
        "text": "Uma empresa utiliza um ambiente Microsoft Power Platform e planeia implementar um aplicativo Power Apps. A aplicação deve cumprir os seguintes requisitos: - Auditar toda a atividade do usuário e reter os logs de auditoria apenas por um ano. - Remover anualmente os produtos que foram criados há mais de um ano. Você precisa configurar os processos automatizados. Qual configuração deve utilizar para cada requisito, respectivamente? 1. Retenção de logs de auditoria. 2. Remoção de produtos.",
        "options": [
            "1. Auditoria de Tabela (Table auditing) | 2. Auditoria de Ambiente (Environment auditing)",
            "1. Auditoria de Ambiente (Environment auditing) | 2. Trabalho de eliminação em massa (Bulk deletion job)",
            "1. Trabalho de eliminação em massa (Bulk deletion job) | 2. Vista filtrada (Filtered view)",
            "1. Auditoria de Ambiente (Environment auditing) | 2. Auditoria de Tabela (Table auditing)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão sobre manutenção preventiva e governança de dados no Dataverse.",
            "papoReto": "Para começar a gravar quem faz o quê e definir quanto tempo guardamos essas provas, temos de mexer no disjuntor geral: a 'Auditoria do Ambiente'. Agora, se o patrão quer que o sistema limpe sozinho o stock velho todos os anos, criamos um 'faxineiro' automático chamado 'Trabalho de eliminação em massa' (Bulk deletion job).",
            "respostaCerta": "1. Auditoria de Ambiente (Environment auditing) | 2. Trabalho de eliminação em massa (Bulk deletion job)",
            "puloDoGato": "A retenção global de logs e a ativação da auditoria são feitas no nível do 'Environment'. Para ações de limpeza recorrente de registros de negócio (como produtos obsoletos) baseadas em critérios de data, a ferramenta padrão é o 'Bulk Deletion Job', que pode ser agendado para correr periodicamente.",
            "cascasDeBanana": [
                "Auditoria de Tabela: Ativa a auditoria apenas para os dados daquela tabela, mas não gere a política de retenção global nem limpa registros de produtos."
            ],
            "dicaOuro": "Limpeza automática e agendada de lixo ou dados velhos = Bulk Deletion Job."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q101_topic1",
        "text": "Uma empresa criou um aplicativo de tela (canvas app) que solicita aos usuários o número da segurança social. O aplicativo deve exibir apenas os últimos quatro dígitos quando o usuário mudar de coluna (perder o foco do campo). Qual opção deve utilizar para configurar esta lógica?",
        "options": [
            "Regra de Negócios (Business Rule)",
            "Fluxo de Processo Empresarial (Business Process Flow)",
            "Power BI DAX",
            "Power Fx"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Questão sobre manipulação de texto e interface em Canvas Apps.",
            "papoReto": "Quer fazer 'magia' com o texto no tela (tipo transformar 123456789 em *****6789)? No Canvas App, a ferramenta para isso são as fórmulas. E o nome da linguagem dessas fórmulas é Power Fx.",
            "respostaCerta": "Power Fx",
            "puloDoGato": "As Business Rules em Canvas Apps são muito limitadas (só mexem em obrigatoriedade, valores simples e erros). Para fazer manipulação de strings (usar funções como `Right`, `Len` ou `Concatenate`) e criar máscaras dinâmicas de exibição, a única solução é utilizar expressões Power Fx diretamente nas propriedades do controle.",
            "cascasDeBanana": [
                "Business Rule: Muitos pensam que a Regra de Negócio resolve tudo, mas em Canvas Apps elas não suportam manipulação complexa de strings/texto.",
                "Power BI DAX: Embora parecida, o DAX é para relatórios; no Power Apps, a linguagem é Power Fx."
            ],
            "dicaOuro": "Lógica complexa, cálculos ou formatação de texto num Canvas App = Power Fx."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q102_topic1",
        "text": "Uma empresa utiliza o Power Apps e planeia criar um aplicativo de tela (canvas app) que utilize um design responsivo. Quais as duas ações que deve executar como parte da solução? (Selecione as duas ações corretas)",
        "options": [
            "A) Desativar a definição 'Dimensionar para ajustar' (Scale to fit) E B) Configurar as propriedades de altura e largura utilizando fórmulas.",
            "A) Ativar a definição 'Bloquear orientação' E B) Configurar a altura e largura usando as alças de arrastamento manuais.",
            "A) Desativar a definição 'Dimensionar para ajustar' E B) Ativar a definição 'Bloquear proporção'.",
            "A) Configurar altura e largura usando fórmulas E B) Ativar a definição 'Bloquear orientação'."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Conceitos fundamentais para criar Apps que funcionam bem tanto no celular como no PC.",
            "papoReto": "Para a App ser responsiva (esticar e encolher conforme o tela), a primeira coisa a fazer é 'cortar as amarras': desativamos o 'Scale to fit' (Dimensionar para ajustar), senão ela só faz zoom. Depois, em vez de dizer que um botão tem 100 pixels de largura, dizemos que ele tem 'Largura do Tela / 2' usando fórmulas.",
            "respostaCerta": "A) Desativar a definição 'Dimensionar para ajustar' (Scale to fit) E B) Configurar as propriedades de altura e largura utilizando fórmulas.",
            "puloDoGato": "O 'Scale to fit' força a app a manter um aspeto de imagem fixa, criando barras pretas nas laterais. Ao desativá-lo, a app ocupa o espaço real disponível. A responsividade real é obtida ligando as propriedades `Width` e `Height` dos controles a variáveis ou propriedades do `Parent` (ex: `Parent.Width`), o que exige o uso de fórmulas Power Fx.",
            "cascasDeBanana": [
                "Bloquear orientação (Lock orientation): Isto impede a responsividade, pois obriga o usuário a usar o celular sempre na mesma posição, ignorando a adaptação do tela."
            ],
            "dicaOuro": "Design Responsivo em Canvas App = Scale to fit OFF + Fórmulas no Width/Height."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q103_topic1",
        "text": "[Série de Questões] Uma empresa utiliza um aplicativo orientado por modelo (model-driven app). Um usuário adiciona uma conta a partir do aplicativo. O usuário precisa encontrar um registro específico no aplicativo e abrir o registro diretamente. Solução: Utilizar a Pesquisa de Relevância (Relevance Search / Dataverse Search). Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão foca na utilidade da Pesquisa de Relevância para a navegação direta entre registros.",
            "papoReto": "Se quer encontrar algo rapidamente e 'saltar' para dentro do registro, a Pesquisa de Relevância é a melhor ferramenta. Ela pesquisa em várias tabelas ao mesmo tempo e os resultados são links diretos para os formulários.",
            "respostaCerta": "Sim",
            "puloDoGato": "A Pesquisa do Dataverse (anteriormente Relevance Search) fornece resultados globais ordenados por relevância. Uma das suas principais vantagens de UX é permitir que o usuário clique no resultado e seja levado imediatamente para o formulário de edição do registro, cumprindo o requisito de 'abrir o registro diretamente'.",
            "cascasDeBanana": [],
            "dicaOuro": "Pesquisa global + Acesso direto ao registro = Relevance Search / Dataverse Search."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q104_topic1",
        "text": "Você constrói um aplicativo Power Apps para exibir um catálogo de produtos para os usuários. Os usuários devem ter permissão para visualizar o aplicativo no Microsoft Teams através do Dataverse for Teams. Você deve especificar quem pode acessar ao aplicativo. O que deve fazer?",
        "options": [
            "Partilhar o aplicativo com um grupo de segurança utilizando o Portal do Criador (Maker portal).",
            "Publicar o aplicativo num portal SharePoint.",
            "Enviar um e-mail com um link que convida a abrir o aplicativo no Teams.",
            "Partilhar o aplicativo com um grupo de segurança no Teams (Share the app with a security group in Teams)."
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Questão sobre a governação e partilha de aplicações dentro do ecossistema Microsoft Teams.",
            "papoReto": "Se a App foi feita 'dentro' do Teams (usando o Dataverse for Teams), a gestão de quem a vê é feita no próprio Teams. Não precisa de ir ao Portal do Criador externo; você partilha com a equipe ou com grupos de segurança diretamente na interface do Teams para que os membros vejam o catálogo.",
            "respostaCerta": "Partilhar o aplicativo com um grupo de segurança no Teams.",
            "puloDoGato": "No Dataverse for Teams, o modelo de segurança é simplificado e integrado. Embora possa usar o Maker Portal para certas tarefas, a recomendação para aplicações de catálogo destinadas a usuários do Teams é utilizar a funcionalidade de partilha interna do Teams, associando a App a grupos de segurança que já existam no ambiente da colaboração.",
            "cascasDeBanana": [
                "Maker portal: Embora tecnicamente possível para apps standalone, a filosofia do Dataverse for Teams foca na gestão via Teams.",
                "SharePoint portal: O SharePoint pode alojar listas, mas não é o local de publicação ou gestão de permissões para Power Apps integradas no Teams."
            ],
            "dicaOuro": "Dataverse for Teams = Gestão de acesso integrada no cliente Teams."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q105_topic1",
        "text": "Você está a criar um aplicativo de tela (canvas app) e precisa de realizar operações com coleções de dados. Selecione a função Power Fx correta para cada requisito: 1. Criar uma nova variável de coleção (Create a new collection variable). 2. Remover todos os valores da tabela de uma coleção (Remove table values from a collection).",
        "options": [
            "1. Set | 2. Clear",
            "1. Collect | 2. Clear",
            "1. Collect | 2. Reset",
            "1. AddColumns | 2. DropColumns"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Diferenciação de funções fundamentais para manipulação de coleções locais no Power Apps.",
            "papoReto": "Quer criar uma lista de dados na memória do celular? Usa o 'Collect'. Quer esvaziar essa lista toda para começar de novo? Usa o 'Clear'.",
            "respostaCerta": "1. Collect | 2. Clear",
            "puloDoGato": "A função `Collect` adiciona registros a uma fonte de dados e, se a coleção ainda não existir, cria-a automaticamente. A função `Clear` elimina todos os registros de uma coleção, mas mantém a estrutura da mesma para novas inserções.",
            "cascasDeBanana": [
                "Set: O `Set` cria variáveis globais simples (um valor, um registro), mas não é a função primária para instanciar coleções de tabelas de dados.",
                "Reset: O `Reset` serve para limpar a entrada visual de um controle (como uma caixa de texto), não para manipular os dados dentro de uma coleção/tabela."
            ],
            "dicaOuro": "Manipular listas na memória = Collect (Add) / Clear (Remove All) / Remove (Specific)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q106_topic1",
        "text": "Está a configurar uma nova tabela no Dataverse e precisa definir os tipos de coluna corretos para os seguintes requisitos: 1. Dados de texto com 100 caracteres, renderizados como um controle de múltiplas linhas (multi-line). 2. Dados de texto até 8.000 caracteres, renderizados como múltiplas linhas. 3. Controle de entrada que guarda uma referência a uma Conta ou um Contato. 4. Lista de opções predefinidas onde o usuário escolhe apenas uma.",
        "options": [
            "1. Text Area | 2. Multiline Text | 3. Customer | 4. Choice",
            "1. Multiline Text | 2. Text Area | 3. Lookup | 4. Choice",
            "1. Text Area | 2. Multiline Text | 3. Lookup | 4. Choices",
            "1. Text Area | 2. Text Area | 3. Customer | 4. Lookup"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Conhecimento técnico sobre os limites e comportamentos visuais dos tipos de colunas no Dataverse.",
            "papoReto": "Precisa de uma caixa de texto um pouco maior que o normal mas com limite curto? Use 'Text Area'. Precisa de um texto gigante (como uma descrição de contrato)? Use 'Multiline Text'. Quer um campo que aceite tanto Empresa como Pessoa? O nome desse campo especial é 'Customer'. E uma lista onde só se escolhe um? É 'Choice' (Escolha).",
            "respostaCerta": "1. Text Area | 2. Multiline Text | 3. Customer | 4. Choice",
            "puloDoGato": "A diferença técnica é o limite: 'Text Area' é usado para textos médios (até 4000 caracteres, mas muitas vezes configurado para 100 como no exemplo). 'Multiline Text' suporta volumes muito maiores (até 1.048.576 caracteres, embora o requisito mencione 8.000). A coluna 'Customer' é um lookup especial polimórfico que aponta para Accounts ou Contacts simultaneamente.",
            "cascasDeBanana": [
                "Lookup vs Customer: Um 'Lookup' normal aponta para apenas UMA tabela específica. O 'Customer' é o único que aponta para as duas tabelas base de pessoas/empresas por defeito.",
                "Choice vs Choices: 'Choice' (singular) permite apenas uma seleção. 'Choices' (plural) permite selecionar várias opções (vistos)."
            ],
            "dicaOuro": "Texto Curto Multi-linha = Text Area. Texto Longo = Multiline Text. Conta/Contato = Customer."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q107_topic1",
        "text": "Você planeia implementar um aplicativo orientado por modelo (model-driven app). A empresa irá introduzir dados através da app e tem os seguintes requisitos: - Os usuários devem conseguir pesquisar dados dentro da app. - Os usuários devem conseguir pesquisar dados da app a partir de fora da app (ex: no Bing ou Office.com). Que soluções de pesquisa deve configurar para cada requisito, respectivamente?",
        "options": [
            "1. Pesquisa Categorizada | 2. Pesquisa de Relevância",
            "1. Pesquisa do Dataverse (Dataverse Search) | 2. Microsoft Search",
            "1. Localização Rápida | 2. Pesquisa de Conteúdo",
            "1. Pesquisa do Dataverse | 2. Pesquisa Moderna"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Questão sobre os novos padrões de pesquisa na Power Platform e a sua integração com o ecossistema Microsoft 365.",
            "papoReto": "Quer pesquisar em tudo dentro do Dynamics de forma inteligente? Use a Pesquisa do Dataverse (Dataverse Search). Quer que os dados da sua app apareçam quando o usuário faz uma busca geral no portal do Office.com ou no Bing da empresa? Use o Microsoft Search.",
            "respostaCerta": "1. Pesquisa do Dataverse (Dataverse Search) | 2. Microsoft Search",
            "puloDoGato": "A 'Dataverse Search' é a experiência de pesquisa global e inteligente dentro das apps. O 'Microsoft Search' é o conector que permite indexar os dados do Dataverse para que fiquem disponíveis nas barras de pesquisa globais do Windows, Office e Bing, permitindo encontrar informações de negócio 'fora' da aplicação específica.",
            "cascasDeBanana": [
                "Pesquisa Categorizada: É o modelo antigo (por colunas separadas), que não oferece a inteligência necessária para o primeiro requisito nem integração externa.",
                "Localização Rápida (Quick Find): Pesquisa apenas numa tabela de cada vez, não sendo a solução para 'pesquisar dados (gerais) na app'."
            ],
            "dicaOuro": "Pesquisa inteligente 'dentro' = Dataverse Search. Pesquisa 'fora' (M365/Bing) = Microsoft Search."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q108_topic1",
        "text": "Você construiu um canvas app. Planeia tornar a app disponível no Microsoft Teams para que todos os colaboradores a possam utilizar. Precisa de adicionar a app ao Teams. Quais as três ações que deve executar em sequência? (Selecione a ordem correta)",
        "options": [
            "1. Iniciar sessão no Maker Portal -> 2. Selecionar e baixar a Power App -> 3. Adicionar a app ao Teams.",
            "1. Iniciar sessão no Power Platform Admin Center -> 2. Selecionar a app -> 3. Publicar no Teams.",
            "1. Iniciar sessão no Teams Admin Center -> 2. Carregar o pacote da app -> 3. Partilhar com a equipe.",
            "1. Abrir o Power Apps Studio -> 2. Guardar a app como arquivo zip -> 3. Enviar por e-mail para o administrador do Teams."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Processo de publicação de uma Power App 'standalone' (independente) dentro do cliente do Microsoft Teams.",
            "papoReto": "Como levar uma app que fez no portal para o Teams? Primeiro, vai ao Maker Portal (make.powerapps.com). Segundo, encontra a sua app e faz o download dela (o sistema gera um arquivo próprio para o Teams). Terceiro, vai ao Teams e faz o upload desse arquivo na seção de Apps. Já está!",
            "respostaCerta": "1. Iniciar sessão no Maker Portal -> 2. Selecionar e baixar a Power App -> 3. Adicionar a app ao Teams.",
            "puloDoGato": "Este é o fluxo clássico de 'Add to Teams' disponível no menu de contexto das aplicações no Maker Portal. O Power Apps gera automaticamente o manifesto necessário para o Teams reconhecer a aplicação como uma 'Tab' ou App pessoal.",
            "cascasDeBanana": [
                "Teams Admin Center: É usado para gerenciar políticas de quem pode ver que apps, mas não é onde o 'maker' inicia o processo de exportação da sua app para o Teams.",
                "Power Platform Admin Center: Não lida com o download ou publicação individual de apps para o Teams."
            ],
            "dicaOuro": "Levar app para o Teams = Maker Portal > Download > Upload no Teams."
        },
        "difficulty": "avancado",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q109_topic1",
        "text": "Uma empresa utiliza o Microsoft Dataverse for Teams. Você precisa configurar os acessos para os usuários que necessitam de utilizar a app e os seus dados. Que ações deve realizar para cada requisito, respectivamente? 1. Acesso aos dados (Access to the data). 2. Acesso ao aplicativo (Access to the app).",
        "options": [
            "1. Criar uma função de segurança e atribuir permissões por tabela | 2. Partilhar com um grupo de segurança.",
            "1. Partilhar os dados e atribuir permissões | 2. Publicar a app num canal do Teams.",
            "1. Atribuir um conjunto de permissões para cada usuário | 2. Partilhar com usuários individuais.",
            "1. Criar uma função de segurança | 2. Publicar a app num canal do Teams."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Gestão de segurança e permissões no modelo simplificado do Dataverse for Teams.",
            "papoReto": "Mesmo sendo no Teams, as regras de dados são parecidas com o Dataverse grande: para ver o que está nas tabelas, precisa de uma 'Função de Segurança' (Security Role) com as permissões certas. Para conseguir abrir o ícone da App, o melhor é partilhá-la com um 'Grupo de Segurança' onde os membros da equipe já estejam.",
            "respostaCerta": "1. Criar uma função de segurança e atribuir permissões por tabela | 2. Partilhar com um grupo de segurança.",
            "puloDoGato": "Embora o Dataverse for Teams tenha uma interface de permissões simplificada, por baixo do capot ele utiliza Security Roles. A gestão de acesso à aplicação em larga escala deve ser sempre feita através de Grupos de Segurança para facilitar a administração.",
            "cascasDeBanana": [
                "Publicar num canal do Teams: Isto torna a app *visível* como uma aba, mas não garante que o usuário tem *permissão* de segurança para a abrir ou ler os dados se não tiver sido partilhada corretamente.",
                "Partilhar com usuários individuais: Funciona para 2 ou 3 pessoas, mas a Microsoft recomenda sempre Grupos de Segurança para cumprir o requisito de forma profissional."
            ],
            "dicaOuro": "Segurança de Dados = Security Roles. Segurança de App = Security Groups."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q110_topic1",
        "text": "Uma empresa pretende implementar o Power Pages e solicita a criação de sites de demonstração com base nos seguintes requisitos: 1. Um site que suporte agendamento automatizado (automated scheduling). 2. Um site que suporte o registro em eventos (event registration). 3. Um site que possa ser estendido através da utilização da marca da empresa (branding). O desenvolvimento personalizado deve ser mínimo. Que modelos (templates) do Power Pages deve utilizar para cada requisito? (Selecione a combinação correta)",
        "options": [
            "1. Financial Institution | 2. After school program | 3. Blank page",
            "1. Building permit | 2. After school program | 3. Blank page",
            "1. After school program | 2. Financial institution | 3. Building permit",
            "1. Financial Institution | 2. Building permit | 3. After school program"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão sobre a escolha de modelos prontos (padr�o) do Power Pages para acelerar o desenvolvimento.",
            "papoReto": "A Microsoft criou modelos que já vêm com tabelas e páginas prontas. O modelo de 'Instituição Financeira' já tem a lógica de marcar reuniões (agendamento). O de 'Programa Pós-Escola' foca em inscrever alunos em atividades (registro). E se quer total liberdade para meter o branding da empresa do zero, começa com uma 'Página em Branco'.",
            "respostaCerta": "1. Financial Institution | 2. After school program | 3. Blank page",
            "puloDoGato": "O modelo 'Financial Institution' inclui uma funcionalidade pré-configurada de agendamento de consultas. O 'After School Program' é o modelo padrão para cenários de inscrição e registro de usuários em cursos ou eventos. A 'Blank Page' fornece a estrutura mínima necessária para que o branding personalizado seja aplicado sem ter de 'limpar' designs anteriores.",
            "cascasDeBanana": [
                "Building permit (Licença de construção): Este modelo foca-se na submissão de formulários e acompanhamento de processos/pedidos, não em agendamento ou registro de eventos puro."
            ],
            "dicaOuro": "Agendamento = Financial Institution. Inscrições/Eventos = After School Program. Branding total = Blank Page."
        },
        "difficulty": "iniciante",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q111_topic1",
        "text": "Você está a modificar uma tabela num ambiente Microsoft Power Platform. Configura um formulário com as seguintes colunas: 'País/Região' (Country/region - tipo Escolhas), 'Posse de Passaporte' (Passport ownership - tipo Escolha Sim/Não) e 'Data de validade do passaporte' (Passport expiration date - tipo Texto). O formulário deve: - Preencher a coluna 'País/Região' como 'EUA' quando o idioma escolhido for Inglês. - Mostrar a coluna 'Data de validade' apenas se o usuário selecionar 'Sim' na posse de passaporte. Que componentes deve utilizar para cumprir os requisitos com o mínimo esforço? (Selecione a combinação correta)",
        "options": [
            "País/Região: Fórmula (Formula) | Data de validade: Regra de Negócio (Business Rule)",
            "País/Região: Power Automate | Data de validade: Regra de Negócio",
            "País/Região: Regra de Negócios | Data de validade: Fluxo de Processo Empresarial (BPF)",
            "País/Região: Fórmula | Data de validade: Script de formulário (JavaScript)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa as novas colunas de fórmula (Power Fx) vs. as tradicionais Regras de Negócio.",
            "papoReto": "Se quer que um campo mude de valor sozinho baseado numa lógica simples ('Se for inglês, põe EUA'), a forma mais moderna e rápida é usar uma coluna de 'Fórmula'. Para esconder ou mostrar campos no tela (visibilidade dinâmica), a ferramenta padrão 'sem código' continua a ser a Regra de Negócio.",
            "respostaCerta": "País/Região: Fórmula (Formula) | Data de validade: Regra de Negócio (Business Rule)",
            "puloDoGato": "As colunas de tipo 'Formula' permitem usar Power Fx diretamente no Dataverse para calcular valores. É mais eficiente que uma Business Rule para *preenchimento* de dados. No entanto, as fórmulas não conseguem controlar a *visibilidade* de outros campos; isso é a especialidade das Business Rules (ação Show/Hide field).",
            "cascasDeBanana": [
                "Usar Power Automate: Funciona, mas não é o 'mínimo esforço' para algo que uma fórmula de coluna resolve instantaneamente.",
                "Usar JavaScript: Exige código, o que viola o princípio de 'mínimo esforço' e no-code da prova."
            ],
            "dicaOuro": "Cálculo/Lógica de valor no campo = Coluna de Fórmula. Mostrar/Esconder campos no tela = Regra de Negócio."
        },
        "difficulty": "avancado",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q112_topic1",
        "text": "Você tem um aplicativo de tela (canvas app). O aplicativo deve armazenar dados numa variável que esteja disponível APENAS para o tela atual. Quais as duas funções que pode utilizar para este objetivo? (Cada resposta correta apresenta uma solução completa)",
        "options": [
            "A) UpdateContext E B) Navigate",
            "A) Set E B) UpdateContext",
            "A) Collect E B) Set",
            "A) UpdateContext E B) SaveData"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Questão vital sobre o âmbito (scope) das variáveis em Canvas Apps.",
            "papoReto": "Variável que só funciona num tela é como um post-it colado na página: chama-se Variável de Contexto. Você cria esse post-it com a função 'UpdateContext'. Mas sabia que quando você viaja de um tela para o outro com a função 'Navigate', também pode levar um post-it novo para colar no tela de destino? Por isso as duas estão certas.",
            "respostaCerta": "A) UpdateContext E B) Navigate",
            "puloDoGato": "A função `UpdateContext` cria variáveis de contexto (locais ao tela). O que muitos esquecem é que a função `Maps` tem um terceiro parâmetro opcional que permite passar um registro de contexto para o tela de destino, criando ou atualizando variáveis locais lá.",
            "cascasDeBanana": [
                "Set: O `Set` cria variáveis GLOBAIS. Se usar Set, o dado estará disponível em todos os telas da app, o que viola o requisito de estar disponível 'apenas para o tela atual'.",
                "Collect: Cria coleções (tabelas), que por padrão são globais na app."
            ],
            "dicaOuro": "Variável Global = Set. Variável Local (apenas um tela) = UpdateContext ou Navigate."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q113_topic1",
        "text": "Você planeia criar um aplicativo de tela (canvas app) com vários telas. O aplicativo precisa de armazenar dados temporários enquanto está a ser executado e tem os seguintes requisitos: 1. Cada tela deve manter uma cópia separada dos dados e passar os mesmos para outro tela. 2. O aplicativo deve ser capaz de atualizar linhas separadas de uma tabela de forma independente. Que tipo de variável deve utilizar para cada requisito, respectivamente?",
        "options": [
            "1. Variável de contexto (Context variable) | 2. Coleção (Collection)",
            "1. Variável global (Global variable) | 2. Variável de contexto",
            "1. Coleção (Collection) | 2. Variável global",
            "1. Variável de contexto | 2. Variável global"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão aprofunda os tipos de armazenamento temporário no Power Apps Canvas.",
            "papoReto": "Post-it colado na página (tela) que pode ser passado para a próxima? Variável de Contexto. Uma tabela inteira guardada na memória para editar linha a linha? Coleção.",
            "respostaCerta": "1. Variável de contexto (Context variable) | 2. Coleção (Collection)",
            "puloDoGato": "A variável de contexto (`UpdateContext`) é específica de um tela, mas a função `Maps` permite passar esses valores para o tela seguinte. Para manipular conjuntos de dados (tabelas) onde se pretende adicionar ou atualizar linhas individuais sem afetar a fonte de dados original imediatamente, utilizamos as `Collections`.",
            "cascasDeBanana": [
                "Variável Global (Set): Funciona em toda a App, mas o requisito 1 foca especificamente no isolamento por tela e passagem de dados entre eles, o que aponta para o contexto do tela."
            ],
            "dicaOuro": "Dados de um só tela = Context. Dados em formato de tabela/lista = Collection."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q114_topic1",
        "text": "Você planeia criar um aplicativo de tela (canvas app) para gerenciar ordens de serviço. Precisa de configurar os seguintes requisitos: 1. Enviar um e-mail automático assim que um registro for guardado. 2. Mostrar a coluna 'Expiração' apenas se a data de criação do registro for superior a 30 dias. Que funcionalidades deve utilizar para cada requisito?",
        "options": [
            "1. Fluxo do Power Automate (Power Automate flow) | 2. Fórmula (Formula)",
            "1. Regra de Negócio (Business Rule) | 2. Fórmula",
            "1. Conector (Connection) | 2. Coleção (Collection)",
            "1. Fluxo do Power Automate | 2. Regra de Negócio"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Automação e lógica de interface em aplicativos Canvas.",
            "papoReto": "Mandar e-mail quando algo acontece? Power Automate. Esconder ou mostrar um campo com base numa data num Canvas App? Fórmula na propriedade Visible.",
            "respostaCerta": "1. Fluxo do Power Automate (Power Automate flow) | 2. Fórmula (Formula)",
            "puloDoGato": "Canvas Apps não utilizam as Business Rules tradicionais do Dataverse para esconder campos (embora possam ler algumas validações). A forma padrão de fazer visibilidade dinâmica em Canvas é usar uma Fórmula na propriedade `Visible`. Notificações complexas como e-mails são delegadas ao Power Automate.",
            "cascasDeBanana": [
                "Regra de Negócio (Business Rule): Funciona maravilhosamente para visibilidade em Model-driven apps, mas não é a ferramenta usada no Canvas App para este fim."
            ],
            "dicaOuro": "Notificações/Emails = Power Automate. Visibilidade no Canvas = Fórmulas."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q115_topic1",
        "text": "Uma empresa está a implementar a Power Platform. Um dos aplicativos exige um layout de controles personalizado (pixel-perfect) sem utilizar código. O outro aplicativo será utilizado principalmente por usuários externos (clientes). Que tipos de aplicativo deve recomendar, respectivamente?",
        "options": [
            "1. Aplicativo de tela (Canvas app) | 2. Portal do Power Apps (Power Pages)",
            "1. Aplicativo orientado por modelo (Model-driven app) | 2. Canvas app",
            "1. Power Pages | 2. Model-driven app",
            "1. Canvas app | 2. Power BI"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Escolha da tecnologia correta para cada público e necessidade visual.",
            "papoReto": "Quer desenhar tudo ao pixel sem saber programar? Canvas App. Quer um site para clientes externos fazerem login? Portal (Power Pages).",
            "respostaCerta": "1. Aplicativo de tela (Canvas app) | 2. Portal do Power Apps (Power Pages)",
            "puloDoGato": "O Canvas App brilha no design de interface livre ('pixel-perfect'). O Power Pages (antigo Portals) é a única solução nativa da Power Platform desenhada especificamente para acesso de usuários externos anónimos ou autenticados via B2C/Redes Sociais.",
            "cascasDeBanana": [
                "Model-driven app para clientes externos: Licenciar usuários externos para Model-driven apps é complexo e a interface é rígida, não sendo o ideal para portais públicos."
            ],
            "dicaOuro": "Design livre = Canvas. Público Externo = Power Pages."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q116_topic1",
        "text": "Uma empresa está a implementar soluções da Power Platform e necessita de informações sobre a linguagem Power Fx. Qual das seguintes é uma característica fundamental do Power Fx?",
        "options": [
            "É uma linguagem compilada para aplicativos nativos.",
            "Utiliza fórmulas semelhantes às fórmulas do Microsoft Excel.",
            "Suporta apenas operações de dados síncronas.",
            "É usada exclusivamente para tradução de idiomas em Model-driven apps."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Definição oficial e estratégica do Power Fx.",
            "papoReto": "O Power Fx foi feito para quem já sabe Excel. É a mesma lógica de fórmulas que usamos nas folhas de cálculo, trazida para o mundo das Apps e do Dataverse.",
            "respostaCerta": "Utiliza fórmulas semelhantes às fórmulas do Microsoft Excel.",
            "puloDoGato": "O Power Fx é uma linguagem 'low-code' declarativa e fortemente baseada no Excel. O seu objetivo é permitir que 'citizen developers' consigam criar lógicas complexas sem precisar de aprender C# ou JavaScript.",
            "cascasDeBanana": [
                "Dizer que é exclusiva para tradução ou apenas síncrona: O Power Fx é a linguagem padrão de toda a plataforma (Canvas, Dataverse columns, etc.) e lida com processos assíncronos constantemente."
            ],
            "dicaOuro": "Power Fx = O 'Excel' da Power Platform."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q117_topic1",
        "text": "Uma empresa está a avaliar as capacidades do Dataverse e os cenários para utilização de tabelas virtuais (virtual tables). Qual é uma capacidade fundamental das tabelas virtuais?",
        "options": [
            "As tabelas virtuais armazenam dados no ambiente do Dataverse.",
            "As tabelas virtuais recuperam dados de uma fonte de dados externa (external data source).",
            "As tabelas virtuais podem ser configuradas para auditoria de leitura.",
            "As tabelas virtuais suportam a auditoria nativa do Dataverse."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão testa o conceito básico de virtualização de dados no Dataverse.",
            "papoReto": "Uma tabela virtual é como um 'espelho' ou um atalho. Os dados não moram dentro do Dynamics/Dataverse; eles ficam guardados lá fora (num SQL Server, num SharePoint, etc.). A tabela virtual apenas permite que o Power Apps veja e use esses dados como se estivessem dentro de casa.",
            "respostaCerta": "As tabelas virtuais recuperam dados de uma fonte de dados externa.",
            "puloDoGato": "O principal objetivo das tabelas virtuais é a integração sem replicação de dados. Elas agem como um proxy, executando consultas em tempo real contra a fonte externa sempre que um usuário abre um registro ou uma vista no aplicativo.",
            "cascasDeBanana": [
                "Armazenam dados no Dataverse: Errado. Se armazena no Dataverse, é uma tabela normal. A virtual apenas 'aponta' para fora.",
                "Suportam auditoria: A maioria das capacidades nativas do Dataverse que dependem do motor de armazenamento (como auditoria ou pesquisa de relevância profunda) não funcionam em tabelas virtuais."
            ],
            "dicaOuro": "Tabela Virtual = Dados EXTERNOS em tempo real. Sem cópia no Dataverse."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q118_topic1",
        "text": "[Série 1 de 3] Uma empresa utiliza o Dataverse. O ambiente contém uma tabela com as seguintes colunas: Nome, Empresa, Contactado em. A empresa exige que a tabela não contenha quaisquer linhas duplicadas quando os usuários criam dados no ambiente. Solução proposta: Criar uma chave alternativa (alternate key) para as colunas. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Série sobre integridade de dados e prevenção de duplicados.",
            "papoReto": "Se quer proibir (impedir fisicamente) que entrem nomes repetidos na base de dados, tem de pôr um cadeado no nível do banco de dados. A 'Chave Alternativa' faz exatamente isso: ela diz ao sistema que aquela combinação de colunas é única e não aceita duplicados de forma alguma.",
            "respostaCerta": "Sim",
            "puloDoGato": "As Alternate Keys criam um índice de unicidade no SQL por baixo do Dataverse. Se alguém tentar inserir um registro que viole esta chave (mesmo via API ou Importação), o sistema bloqueia a transação com um erro. É o método mais forte de prevenção.",
            "dicaOuro": "Prevenir/Impedir duplicados de forma rigorosa = Alternate Key."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q119_topic1",
        "text": "[Série 2 de 3] Uma empresa utiliza o Dataverse. A tabela contém as colunas: Nome, Empresa, Contactado em. A empresa exige que a tabela não contenha duplicados. Solução proposta: Criar um fluxo do Microsoft Power Automate para as colunas. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Tentativa de usar automação para limpeza de dados.",
            "papoReto": "Um fluxo (Power Automate) só acorda *depois* que o erro já foi feito (o registro já foi criado). Ele até podia tentar excluir o duplicado depois, mas o requisito é que a tabela 'não contenha' duplicados, o que implica prevenção na entrada. O fluxo não é uma ferramenta de bloqueio de base de dados.",
            "respostaCerta": "Não",
            "puloDoGato": "Fluxos são assíncronos por natureza. Até o fluxo correr e validar o dado, o duplicado já existe na base de dados. Além disso, não é uma forma eficiente nem padrão de gerenciar unicidade.",
            "dicaOuro": "Power Automate = Reação. Alternate Key = Prevenção."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q120_topic1",
        "text": "[Série 3 de 3] Uma empresa utiliza o Dataverse. A tabela contém as colunas: Nome, Empresa, Contactado em. A empresa exige que a tabela não contenha duplicados. Solução proposta: Criar uma regra de deteção de duplicados (duplicate detection rule) para as colunas. Esta solução atende ao objetivo?",
        "options": [
            "Sim",
            "Não"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "A maior rasteira do exame: Regra de Deteção vs Chave Alternativa.",
            "papoReto": "A 'Regra de Deteção de Duplicados' é apenas um aviso educado na tela. O usuário pode clicar em 'Guardar mesmo assim'. Além disso, se o dado vier por uma App de celular ou por código, a regra muitas vezes nem aparece. Por isso, ela não garante que a tabela não terá duplicados.",
            "respostaCerta": "Não",
            "puloDoGato": "Duplicate Detection Rules são para UX (experiência do usuário) e não impõem restrições de integridade no nível dos dados (database-level constraints). Elas 'detetam', mas não 'impedem' de forma absoluta como uma Chave faz.",
            "dicaOuro": "Regra de Deteção = Alerta/Aviso. Chave Alternativa = Bloqueio/Unicidade."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q121_topic1",
        "text": "Você cria um aplicativo de tela (canvas app). O aplicativo deve ser capaz de exibir uma lista de registros que são ordenados por categoria. O aplicativo também deve expandir ou ocultar detalhes como subcategorias. Que componente deve utilizar?",
        "options": [
            "Cartão (card)",
            "Expressão (expression)",
            "Galeria (gallery)",
            "Dashboard do Power BI"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Questão sobre componentes de interface em Canvas Apps.",
            "papoReto": "Sempre que precisar de mostrar uma lista de coisas (com fotos, títulos, botões e até sub-listas que abrem e fecham), a ferramenta de eleição é a Galeria. É o componente mais flexível para repetir elementos visualmente.",
            "respostaCerta": "Galeria (gallery)",
            "puloDoGato": "Galerias permitem aninhamento (uma galeria dentro de outra para subcategorias) ou o uso de variáveis para alterar a altura de itens dinamicamente, permitindo o efeito de 'expandir/recolher' (accordion effect) solicitado no requisito.",
            "cascasDeBanana": [
                "Cartão (card): Cartões pertencem a Formulários e mostram um campo específico de um único registro, não servem para listar categorias e subcategorias.",
                "Dashboard do Power BI: Serve para análise de dados, não é um componente de interface de entrada/navegação nativo para listas expansíveis dentro de uma app de transações."
            ],
            "dicaOuro": "Listar dados repetitivos com design livre = Galeria (Gallery)."
        },
        "difficulty": "avancado",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q122_topic1",
        "text": "Você gerencia a implantação da solução entre ambientes do Microsoft Dataverse. Você precisa controlar quais componentes da solução gerenciada são personalizáveis após uma solução ter sido importada para o ambiente de destino. O que você deve usar?",
        "options": [
            "Propriedades gerenciadas (Managed properties)",
            "Estágio para fazer um upgrade (Stage for upgrade)",
            "Segmentação de uma Solução (Solution segmentation)",
            "Página de Configuração (Configuration page)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa o conhecimento sobre as configurações de bloqueio e liberação de componentes dentro de soluções gerenciadas.",
            "papoReto": "Quando você envia uma solução gerenciada para produção, o padrão é \"trancar\" tudo. Mas e se o cliente precisar mudar um valor ou uma lista suspensa depois que já estiver lá? Você configura as \"Propriedades Gerenciadas\" (Managed Properties) daquele componente antes de exportar, dizendo: \"Olha, este campo aqui eu deixo vocês personalizarem, o resto fica trancado\".",
            "respostaCerta": "Propriedades gerenciadas (Managed properties)",
            "puloDoGato": "A funcionalidade \"Managed Properties\" (Propriedades Gerenciadas) serve EXATAMENTE para definir se e quais partes de um componente específico podem ser customizadas no ambiente de destino onde a solução será importada como gerenciada.",
            "cascasDeBanana": [
                "Estágio para fazer upgrade: Usado para atualizar soluções completas sem excluir imediatamente a versão anterior, e não para bloquear/liberar campos individuais.",
                "Segmentação: Refere-se a levar apenas os pedaços da tabela que você alterou, em vez de levar a tabela inteira nas atualizações das soluções."
            ],
            "dicaOuro": "Controlar o que o cliente ou o destino pode editar numa Solução Gerenciada = Managed Properties (Propriedades Gerenciadas)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q123_topic1",
        "text": "Você está desenvolvendo uma nova solução da Microsoft Power Platform para uma empresa. O produto dentro da solução deve ser aplicado como um componente de terceiros a outros ambientes. Qual tipo de solução você deve usar?",
        "options": [
            "Solução não gerenciada com editor padrão (Unmanaged solution with default publisher)",
            "Solução gerenciada com editor padrão (Managed solution with default publisher)",
            "Solução gerenciada com editor personalizado (Managed solution with custom publisher)",
            "Solução não gerenciada com editor personalizado (Unmanaged solution with custom publisher)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão foca nas melhores práticas de distribuição de soluções (ALM) e o uso de editores (publishers).",
            "papoReto": "Se você está a fazer um produto para instalar na casa dos outros (terceiros), você tem de mandar isso \"empacotado e selado\", ou seja, Gerenciado (Managed). E para que todo mundo saiba que foi a sua empresa que fez (e para os seus campos terem o seu prefixo único, tipo \"minhaempresa_\"), você tem de criar um Editor Personalizado, em vez de usar o prefixo genérico básico do sistema.",
            "respostaCerta": "Solução gerenciada com editor personalizado (Managed solution with custom publisher)",
            "puloDoGato": "Ao empacotar soluções como Produtos de Terceiros (ISVs), deve-se obrigatoriamente usar soluções \"Managed\" (Gerenciadas) para evitar customizações indevidas no destino e permitir desinstalações limpas. Além disso, as boas práticas exigem OBRIGATORIAMENTE a criação de um Custom Publisher para manter a governança dos nomes lógicos dos componentes e evitar conflitos de prefixos no ambiente do cliente.",
            "cascasDeBanana": [
                "Soluções não gerenciadas (Unmanaged): Elas nunca devem ser enviadas como produto para ambientes de outras empresas de terceiros/produção, pois fundem-se permanentemente e não podem ser desinstaladas de forma limpa.",
                "Editor padrão (Default publisher): Este editor não deve ser usado para soluções profissionais ou de terceiros, pois corre o risco de sobrepor configurações se outro cliente criar recursos usando o mesmo prefixo \"new_\" ou \"cr_\"."
            ],
            "dicaOuro": "Distribuir produto para clientes (terceiros / deploy real) = Solução Managed (Gerenciada) + Custom Publisher (Editor Personalizado)."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q124_topic1",
        "text": "Você gerencia um ambiente de desenvolvimento da Microsoft Power Platform. Você precisa implementar um mecanismo para evitar nomes de componentes duplicados nas diferentes soluções. Qual propriedade da solução você deve usar?",
        "options": [
            "O número de versão da solução (Version number)",
            "A página de configuração (Configuration page)",
            "O Nome de Exibição (Display Name)",
            "Desenvolvedor / O editor da solução (Publisher)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "O foco aqui é o que garante a exclusividade técnica dos componentes na base de dados do Dataverse (governança do nome dos esquemas).",
            "papoReto": "Como você garante que o campo \"Gênero\" do módulo de Saúde não dará conflito direto no banco de dados com o campo \"Gênero\" do módulo de Vendas ou RH? Através do Editor (Publisher). Cada Editor tem um prefixo de letras único. Quando você cria o campo, o sistema cola esse prefixo obrigatoriamente na frente (tipo \"saude_genero\"), garantindo que o nome do componente interno não vai se chocar com campos parecidos de outros desenvolvedores / soluções.",
            "respostaCerta": "Desenvolvedor / O editor da solução (Publisher)",
            "puloDoGato": "A propriedade fundamental que previne componentes duplicados chama-se \"Publisher\" (Editor ou Desenvolvedor). O Editor injeta um prefixo base (ex: \"contoso_\") no nome lógico de TODA entidade ou campo criado, assegurando que o nome seja único e isolado independentemente da origem da solução.",
            "cascasDeBanana": [
                "O Nome de Exibição (Display Name): Você perfeitamente pode ter múltiplos campos chamados \"Telefone\" ou \"Nome\" sendo exibidos visualmente (mesmo Display Name). O que não pode ser duplicado é o _nome lógico no banco_, o qual é regido pelo Editor.",
                "Número de versão da solução: A versão (\"1.0.0.1\") é estritamente vinculada ao rastreio de pacotes da vida útil da Solução. Ela não impacta ou participa da composição do nome lógico do banco de dados (prefixo de tabela/coluna) dos componentes no Dataverse."
            ],
            "dicaOuro": "Evitar duplicação ou colisão nos nomes lógicos internos = Usar Editores (Publishers) e prefixos distintos em cada especialidade ou origem."
        },
        "difficulty": "iniciante",
        "domain": "Ambientes do Microsoft Power Platform"
    },
    {
        "id": "q125_topic1",
        "text": "Você cria um aplicativo de tela em uma solução do Microsoft Dataverse. O aplicativo de tela calcula valores a partir dos dados inseridos no aplicativo. Você implanta a solução em ambientes downstream (posteriores na esteira de produção). Os usuários informam que os cálculos estão retornando erros da fórmula. Você precisa diagnosticar o problema com o aplicativo de tela. O que você deve usar?",
        "options": [
            "Verificador de Soluções do Power Apps (Solution Checker)",
            "Monitor do Power Apps (Power Apps Monitor)",
            "Estúdio de Teste do Power Apps (Power Apps Test Studio)",
            "Histórico de auditoria do Dataverse (Dataverse Audit history)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão explora e reforça a ferramenta integrada padrão da interface de ALM e empacotamento da Microsoft para soluções, especificamente validada contra construções dos Aplicativos de Tela (Canvas Apps).",
            "papoReto": "Se o aplicativo está contido numa Solução embarcada num ambiente isolado e apresenta lógicas defeituosas de sintaxe de fórmulas, a Microsoft propõe como padrão da esteira rodar a inspeção completa. Para isso ela desenvolveu o \"Verificador de Soluções\". Ele escaneia tudo por dentro da solução, acha funções que não fecham ou estão sujeitas a falhas/funções obsoletas e devolve uma planilha (relatório) sobre o que e por que as fórmulas calculam os elementos de forma falha ou duvidosa.",
            "respostaCerta": "Verificador de Soluções do Power Apps (Solution Checker)",
            "puloDoGato": "Frequentemente esquecemos, mas o \"Solution Checker\" (Verificador de Soluções) suporta inteiramente as expressões do formato nativo do Canvas App. Ele detecta agressivamente problemas, violações, e inclusive regras mal formuladas dentro de Apps contidos nas nossas soluções.",
            "cascasDeBanana": [
                "Monitor do Power Apps: O monitor depura dados e tráfego REST e execuções ativas em Tempo Real (event logs no cliente), focando na requisição e lentidão. Ele pode auxiliar, mas nas questões de certificação sobre processos macro em componentes \"numa solução\", foca-se usualmente na valência diagnóstica estrutural do Verificador.",
                "Test Studio: Trata-se da ferramenta para gerar testes automatizados unitários reproduzíveis ao clicar em botões, mas não possui inspeção estática arquitetônica por fórmula ou erros não mapeados em cenários de design empacotado e validado."
            ],
            "dicaOuro": "Diagnosticar erros globais de fórmula e validações essenciais em aplicativos contidos inteiramente em Soluções = Solution Checker (Verificador de Soluções)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q126_topic1",
        "text": "Você gerencia a implantação da solução entre ambientes do Microsoft Dataverse. Você importa soluções de diversos personalizadores. Você precisa atualizar os componentes que dão suporte para o comportamento de mesclagem (merge behavior). Qual componente você deve atualizar?",
        "options": [
            "Aplicativo baseado em modelo (Model-driven app)",
            "Aplicativo de tela (Canvas app)",
            "Componente de fluxo de nuvem (Cloud flow component)",
            "Variáveis de Ambiente (Environment variables)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Essa é uma clássica questão sobre arquitetura fundamental de mesclagem do Application Lifecycle Management (ALM) na Power Platform em relação à coexistência de mudanças.",
            "papoReto": "Sabe quando duas filiais da empresa pedem para adicionar abas diferentes na ficha de Cliente? Se for em um aplicativo normal da tela (Canvas app), a filial instalada por último passa por cima da outra porque ele obedece à regra de que \"quem entra por último esmaga o anterior\" (Top wins). Mas num Model-driven app do Dataverse, o sistema consegue amigavelmente \"mesclar\" e juntar as contribuições das duas equipes para tudo funcionar lado a lado. Isso é o Suporte a Mesclagem.",
            "respostaCerta": "Aplicativo baseado em modelo (Model-driven app)",
            "puloDoGato": "Apenas os componentes estruturais declarativos (usualmente XML-based) como Formulários da tabela (Forms), Mapas do Site (SiteMaps) e Aplicativos Baseados em Modelo (Model-Driven Apps) lidam nativamente com a fusão hierárquica inteligente denominada \"Comportamento de Mesclagem\" (Merge behavior).",
            "cascasDeBanana": [
                "Aplicativo de tela e Fluxos de nuvem (Cloud flows): Esses painéis não são conciliadores por XML. Eles adotam puramente a arquitetura de bloqueio \"O Topo Prevalece\" (Top Wins strategy), na qual o último objeto exportado simplesmente apaga a integridade do código customizado anterior pela raiz."
            ],
            "dicaOuro": "Suporte unificado de mesclagem (Merge Behavior) nas implantações de soluções = Model-driven apps e Formulários (Forms)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q127_topic1",
        "text": "Você está criando uma solução dedicada da Microsoft Power Platform para um cliente. Você precisa implantar a solução no ambiente de produção da Power Platform do cliente. Você define o nome da solução. O que você deve definir a seguir?",
        "options": [
            "novo editor (new publisher)",
            "variáveis de ambiente (environment variables)",
            "referências de conexão (connection references)",
            "configuração do aplicativo (app configuration)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão aborda a cronologia da criação e os requisitos fundamentais para preparar uma solução antes de adicionar componentes.",
            "papoReto": "Ao construir uma solução oficial e limpa para um cliente, não basta só criar a Solução e dar um nome. Antes de colocar a primeira tabela ou o primeiro campo lá dentro, a solução precisa de um \"responsável\", que é o Editor (Publisher). Essa é literalmente a segunda coisa que você define: o nome da solução e logo em seguida o Editor que vai ser atrelado a ela.",
            "respostaCerta": "novo editor (new publisher)",
            "puloDoGato": "O fluxo de criação de uma solução limpa exige a seleção ou criação de um Editor imediatamente após definir o nome da solução. É esse Editor que controlará os prefixos lógicos dos componentes que estão prestes a ser desenvolvidos.",
            "cascasDeBanana": [
                "Variáveis de ambiente e Referências de conexão: Esses elementos podem ser criados a qualquer momento posterior (depois que a solução já foi criada e os componentes principais já estão sendo ligados), e frequentemente são ajustados apenas instantes antes de exportar o pacote."
            ],
            "dicaOuro": "Nome da Solução criado? O passo obrigatório seguinte para garantir o prefixo correto é sempre = Escolher/Criar o Editor (Publisher)."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q128_topic1",
        "text": "Você gerencia um aplicativo orientado por modelo. Os usuários geralmente inserem dados incorretamente no formulário de um aplicativo orientado por modelo. Você precisa mostrar recomendações de negócios baseadas em business intelligence para ajudar os usuários. O que você deve usar?",
        "options": [
            "fluxo de trabalho clássico (classic workflow)",
            "fluxo de processo empresarial (business process flow)",
            "regra de negócios (business rule)",
            "fluxo de nuvem (cloud flow)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão cobre a automação visual dentro de formulários de um Model-driven App.",
            "papoReto": "Se o vendedor preenche valores errados no formulário (ex: desconto maior que o permitido), o sistema precisa dar um \"alerta\" na mesma hora e oferecer uma indicação (Recomendação) diretamente na tela para ele clicar e corrigir o erro sozinho. A única ferramenta nativa feita para interagir em tempo real no formulário mostrando Recomendações é a Regra de Negócios.",
            "respostaCerta": "regra de negócios (business rule)",
            "puloDoGato": "As \"Regras de Negócios\" (Business Rules) não servem apenas para ocultar campos ou torná-los obrigatórios. Elas possuem uma ação explícita chamada \"Mostrar Recomendação\" (Show Recommendation) que gera um ícone azul de lâmpada perto do campo, sugerindo um valor correto baseado na inteligência definida.",
            "cascasDeBanana": [
                "Fluxo de Processo Empresarial (BPF): Embora seja na tela, são voltados para garantir o ciclo de vida (estágios e etapas) de um longo processo, e não disparam \"Recomendações\" reativas de validação instantânea.",
                "Fluxos de nuvem/trabalho: Ocorrem no \"back-end\" (segundo plano no servidor) de modo invisível. Não conseguem exibir uma mensagem ou recomendação de UI interativa na tela ativa do usuário antes de ele salvar."
            ],
            "dicaOuro": "Mostrar feedback visual imediato ou Dicas de Lâmpadas azuis (Recomendações de Dados) no formulário = Regras de Negócios (Business Rules)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q129_topic1",
        "text": "Você gerencia uma nova instância do Microsoft Dataverse. Você precisa criar uma nova coluna para uma tabela personalizada. A nova coluna precisa ter o nome de esquema \"abc_income\". O que você deve criar primeiro?",
        "options": [
            "nova tabela (new table)",
            "nova solução padrão (new default solution)",
            "novo editor (new publisher)",
            "novo aplicativo (new app)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Esta questão reforça a origem dos prefixos de esquema no Dataverse.",
            "papoReto": "Se você quer que a sua coluna se chame \"abc_income\" no banco de dados, o \"abc_\" é o seu prefixo. Quem é dono do prefixo? O Editor! Então, muito antes de você conseguir criar o campo de \"income\" e batizá-lo de \"abc_income\", você terá de criar um Editor (Publisher) que seja o dono legal do prefixo \"abc_\".",
            "respostaCerta": "novo editor (new publisher)",
            "puloDoGato": "O nome de esquema (schema ou logical name) no Dataverse é imutavelmente formado pelo Prefixo do Editor + Nome do Componente. Como o sistema padrão cria campos com prefixo genérico (\"cr_\" ou \"new_\"), você está obrigado a criar um Editor (Publisher) customizado com prefixo \"abc_\" para atingir o requisito da questão.",
            "cascasDeBanana": [
                "Nova Solução Padrão: Soluções padrão (Default Solutions) carregam nativamente prefixos indesejados e não servem para controle avançado de nomenclatura.",
                "Nova tabela: Adicionar a tabela antes do editor resultaria inevitavelmente e automaticamente numa entidade gravada com prefixos indevidos que jamais poderão ser retroativamente alterados depois de criados."
            ],
            "dicaOuro": "Alterar ou forçar um prefixo específico (ex: abc_...) na raiz estrutural de campos ou entidades = Sempre criar um \"Novo Editor\" (New Publisher) primeiro!"
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q130_topic1",
        "text": "Uma empresa está implementando o Microsoft Dynamics 365 Sales. As oportunidades devem ser atualizadas com \"Est. Fechar Data\" uma vez em que \"Receita Est.\" tem dados. O cliente deseja que uma mensagem de erro apareça no formulário da oportunidade se uma Oportunidade não tiver um \"Est. Fechar Data\" quando a \"Receita Est.\" tem dados. O que você deve configurar para mostrar a mensagem?",
        "options": [
            "fluxo de nuvem (cloud flow)",
            "fluxo de processos de negócios (business process flow)",
            "regra de negócios (business rule)",
            "fluxos de dados (data flows)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Outra questão focada em como apresentar bloqueios e validações diretas ao olhar e preencher o formulário.",
            "papoReto": "Você preencheu o valor do negócio, mas esqueceu a provável data que vai receber o dinheiro. Antes de você salvar ou seguir em frente, o formulário deve te jogar um \"X Vermelho\" bloqueando a ação. Exibir um erro cravado no próprio campo, na hora, é a principal função e o \"pão com manteiga\" das Regras de Negócios.",
            "respostaCerta": "regra de negócios (business rule)",
            "puloDoGato": "A funcionalidade \"Mostrar Mensagem de Erro\" (Show Error Message) é uma das ações nativas das Regras de Negócios. Ela avalia se uma condição não foi seguida no preenchimento do formulário e trava a capacidade de salvar a página enquanto plota uma marca de aviso vermelha do lado do campo ofensor.",
            "cascasDeBanana": [
                "Fluxo de Processo Empresarial: Não serve para disparar alertas de validação condicional de erro cruzado instantânea.",
                "Fluxos de nuvem: Operam por trás das cortinas. Eles não conseguem injetar pop-ups ou travar o botão Save na interface em tempo interativo para o usuário.",
                "Fluxos de dados: Ferramenta de ETL e migração de tabelas volumosas, puramente irrelevante a lógicas e trava de telas do usuário."
            ],
            "dicaOuro": "Mostrar mensagem de ERRO visível direta no campo preenchido do formulário (validação de UI em tempo real) = Regra de Negócios."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q131_topic1",
        "text": "Você está criando uma solução dentro da Microsoft Power Platform para uma organização de saúde. A organização requer um modelo de dados. O modelo deve ser mantido na solução em vez de ser carregado manualmente para cada ambiente implantado. Você precisa adicionar o modelo à solução. Qual tipo de modelo você deve adicionar?",
        "options": [
            "Word",
            "Excel",
            "Mapas de dados (Data maps)",
            "Email"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Esta questão trata das capacidades e limitações do pacote de \"Soluções\" de ambiente. Ela testa se você entende exatamente que tipos de templates de negócio o pacote aceita exportar embutido automagicamente.",
            "papoReto": "Ao exportar a solução de Desenvolvimento para Produção, você quer que o seu template vá junto na \"malinha\", sem ter que carregar arquivos na mão por fora. O problema é que o Dataverse e a Power Platform apenas \"abraçam\" e empacotam nativamente e de forma automática os Modelos de E-mail. Templates e arquivos de Office não são guardados lá e exigem migração autônoma.",
            "respostaCerta": "Email",
            "puloDoGato": "Por design da arquitetura sistêmica nativa, \"Modelos de Email\" (Email Templates) podem ser atrelados e transportados legitimamente dentro dos pacotes das Soluções. Todos os \"Modelos do Word\" (Word Templates) e \"Modelos do Excel\" precisam de um processo paralelo de ingestão extrema em cada novo ambiente e não vão na \"malinha\".",
            "cascasDeBanana": [
                "Mapas de dados (Data maps): São gabaritos utilizados exclusivamente na importação massiva para dizer qual coluna do CSV cru entra na tabela Dataverse. Como o uso é logístico e local focado no Processamento de Migração, pacotes de Solução evitam embarcar gabaritos isolados de data migration como dependências contínuas."
            ],
            "dicaOuro": "O único tipo de \"Modelo\" (Template) que pode ser orgânica e consistentemente embutido nos pacotes de Soluções para carregar migrar de ambiente = Modelo de E-Mail!"
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q132_topic1",
        "text": "Você cria uma tabela personalizada no Microsoft Dataverse para captar informações de doadores de sangue. Você cria um aplicativo de tela no qual os usuários irão gravar e salvar dados na tabela do Dataverse. Os usuários precisam captar se um doador já doou sangue anteriormente. Se o doador já tiver doado, você precisará preencher um valor na coluna ID do Doador. Você usa uma regra de negócios para implementar isso. Você precisa configurar a coluna. O que você deve fazer?",
        "options": [
            "Defina o escopo da regra de negócios como Entidade (Entity scope).",
            "Defina o escopo da regra de negócios como Informações (Information form scope).",
            "Defina o escopo da regra de negócios como Todos os Formulários (All Forms scope).",
            "Defina uma coluna como Recomendada para os Negócios (Business recommended)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão relembra a regra de essencial sobre onde as Regras de Negócios são executadas quando saímos do ecossistema de aplicativos baseados em modelos.",
            "papoReto": "Se você criasse um aplicativo focado em botões e visuais pelo Canvas App e quisesse uma validação rodando, você não pode atrelar a validação à tela do Canvas usando Regras de Negócios convencionais de formulário. Para que o motor entenda essa regra mesmo quando a tela é um Canvas App construído \"do zero\", a regra TEM que estar amarrada diretamente na veia do banco de dados (no servidor). Esse nível direto é o escopo \"Entidade\".",
            "respostaCerta": "Defina o escopo da regra de negócios como Entidade.",
            "puloDoGato": "Sempre que a certificação citar que uma Regra de Negócio precisa atuar baseada num \"Canvas App\" (Aplicativo de Tela) ou num \"Power Pages/Portal\", você está OBRIGADO a definir o Escopo dela como \"Entidade\". Apenas o escopo Entidade executa a regra do lado do servidor (Server-side) independentemente do aplicativo usado.",
            "cascasDeBanana": [
                "Escopo Todos os Formulários ou Informações: Escopos de formulário funcionam ESTRITAMENTE e UNICAMENTE dentro de Aplicativos Orientados a Modelos (Model-driven Apps) porque executam JavaScript invisível por trás do lado do cliente (Client-side) naqueles formulários específicos.",
                "Recomendada para os negócios: O requisito não era \"aconselhar\" uma recomendação opcional, era ativamente preencher e ler um fluxo real condicionado em um Canvas App."
            ],
            "dicaOuro": "Regras de negócios ativas para CANVAS APP (Aplicativo de tela) ou INTEGRAÇÕES = Escopo \"Entidade\" (Sempre no lado do Servidor/Server-side)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q133_topic1",
        "text": "Você quer configurar os logs para serem excluídos automaticamente à medida que os fluxos de trabalho forem concluídos. Você planeja usar um trabalho de exclusão em massa que é executado com uma programação recorrente. Você precisa configurar a programação recorrente. Qual opção de frequência disponível você pode usar?",
        "options": [
            "Hora (Hour)",
            "Dia (Day)",
            "Semana (Week)",
            "Mês (Month)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta curiosidade técnica testa os limites impostos aos agendamentos de rotinas automáticas de manutenção (Bulk Delete Jobs) da Microsoft.",
            "papoReto": "A Microsoft não quer o seu banco de dados sofrendo arrastões de limpeza de arquivos pesados apagando registro por registro a cada 5 ou 10 minutos para não sobrecarregar as entranhas do sistema concorrendo com a utilização diária. Por isso, ao criar um robô varredor (Deletion Job), a menor ou principal frequência de rotina repetitiva que o assistente de sistema te oferecerá para limpar tabelas volumosas é a reincidência de apenas 1 por dia.",
            "respostaCerta": "Dia (Day)",
            "puloDoGato": "Trabalhos de exclusão em massa recorrentes (Bulk Record Deletion Jobs) no Dataverse e no Dynamics não suportam execução em intervalos granulares curtos de \"Minutos\" ou \"Horas\" sob o assistente clássico para preservar recursos computacionais globais do SaaS de Banco de Dados. A referência da granularidade típica suportada na interface de recorrência é em intervalos de Dias.",
            "cascasDeBanana": [
                "Minutos ou Horas: Não estão disponíveis nativamente na configuração padrão do Bulk Deletion Wizard para frequências programadas recorrentes.",
                "Semana ou Mês: Você até poderia tentar esquemas manuais raros, mas a menor unidade primária nativa para gerenciar logs agudamente frequentes do sistema dentro das opções do próprio painel do sistema é \"Dias\" (Ex: a cada X dias)."
            ],
            "dicaOuro": "A recorrência padrão aceita dentro do assistente para Trabalhos de Exclusão em Massa (Bulk Delete) atuar limpando logs recorrentemente = intervalos em Dias (Day)."
        },
        "difficulty": "intermediario",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q134_topic1",
        "text": "Você está configurando um aplicativo orientado por modelo usando regras de negócios. Você precisa garantir que as regras de negócios sejam executadas no lado do servidor (server-side). O que você deve usar para configurar o escopo das regras de negócios?",
        "options": [
            "Todos os Formulários (All Forms)",
            "Formulário Informações (Information Form)",
            "Entidade (Entity)",
            "Formulário Conta (Account Form)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Essa questão é a irmã quase gêmea direta da questão 132 (onde abordou o Canvas App). Aqui a Microsoft foca no mesmo conceito sob um enunciado totalmente teórico.",
            "papoReto": "Uma regra de negócios pode agir como mágica visual ou como uma lei na base de dados. Se a regra age apenas na magia visual da tela, ela corre no navegador do usuário (lado do cliente). Mas, se o arquiteto decretar que essa regra tem que agir igual a um \"guarda de trânsito blindado\" contra edições via Excel, integrações ou sistemas terceiros rodando diretamente das nuvens, a regra corre no Servidor. Esse bloqueio no servidor chama escopo \"Entidade\".",
            "respostaCerta": "Entidade (Entity)",
            "puloDoGato": "Não tem exceção: o ÚNICO escopo de Regra de Negócios (Business Rule) que interage, amarra e engatilha validações ativamente na operação da própria base de dados no lado do servidor (Server-side) é o escopo \"Entity / Entidade\".",
            "cascasDeBanana": [
                "Todos os Formulários, Formulário Informações, Formulário Conta: Literalmente qualqer outro escopo ancorado a um formulário atua ESTRITAMENTE usando Client-Side Web Resources (Scripts no lado do Cliente correndo via browser JS) e apenas ativam enquanto o modelo visual da tela corre."
            ],
            "dicaOuro": "Side-server execution (Execução no lado do servidor) mandatório para Regras de Negócios = Usar o Escopo de Entidade (Entity Scope)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q135_topic1",
        "text": "Você está desenvolvendo um fluxo de trabalho clássico em tempo real. Você precisa verificar o seguinte: - os valores atuais para a linha na qual o fluxo de trabalho em tempo real está sendo executado. - os valores de todas as linhas vinculadas à linha do fluxo pai em uma relação N:1. Qual tipo de condição de etapa (step) você deve usar?",
        "options": [
            "condição de espera (Wait condition)",
            "condição de verificação (Check condition)",
            "branch de espera paralela (Parallel wait branch)",
            "branch condicional (Conditional branch)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Esta questão remonta aos fundamentos dos clássicos \"Real-time Workflows\" herdados do Dynamics, testando como avaliar dados relacionados e pai (N:1).",
            "papoReto": "Se quer olhar a ficha do cliente na qual o fluxo acordou e, num flash, \"espiar\" a Conta da empresa master desse cliente vinculada lá pela tabelinha pai ligada do lado N:1 pra checar regras, você usa o componente principais da clássica árvore booleana condicional. O bloco padrão disso tudo (O \"IF\" do seu loop lógico universalzinho) baseia-se primordialmente na etapa Check Condition (Condição de Verificação).",
            "respostaCerta": "condição de verificação (Check condition)",
            "puloDoGato": "Nos Workflows Clássicos, a etapa principal \"Check Condition\" (Condição de Verificação) é a precursora da ação. Ela concede acesso a validar o registro da inicialização E a saltar pelas relações mapeadas N:1 (Lookups) para realizar comparações diretas avaliativas nas chaves das tabelas originárias principais vinculadas (Under/Not Under Operators).",
            "cascasDeBanana": [
                "Condição de espera e Branch Paralela (Wait Condition/Parallel Wait): São fluxos assíncronos que estacionam no tempo esperando eventos sistêmicos. Workflows definidos configurados \"Em Tempo Real\" ESTRITAMENTE se recusam e repudiam a utilização letárgica contada nas amarras cronológicas geradas nas condições Wait.",
                "Branch condicional (Otherwise If): Condição de galho dependente complementar usada apenas como rotina reativa alternativa, e não constituidora inicial de consultas ativas principais de verificação pai-primária."
            ],
            "dicaOuro": "Real-time Workflows clássicos querendo avaliar dados e cruzar relações de pai vinculados imediatos numa cláusula lógica de decisão base = Condição de Verificação (Check condition)."
        },
        "difficulty": "iniciante",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q136_topic1",
        "text": "Você está solucionando problemas de um fluxo de trabalho clássico desenvolvido para um cliente. O fluxo de trabalho não está sendo executado conforme o previsto e está posicionado em um estado \"Aguardando\". Você observa que a conta do proprietário do fluxo de trabalho está desativada. Você precisa resolver o problema fundamental. O que você deve fazer?",
        "options": [
            "Atualize o proprietário do fluxo de trabalho e atualize o proprietário das execuções ativas do fluxo de trabalho.",
            "Atualize o proprietário do fluxo de trabalho e cancele as execuções anteriores travadas no estado Aguardando.",
            "Atualize o proprietário do fluxo de trabalho e reenvie (resubmit) proativamente as execuções de fluxo de trabalho.",
            "Atualize o proprietário do fluxo de trabalho e exclua (delete) forçosamente as execuções anteriores no estado Aguardando."
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "A questão testa resoluções administrativas cirúrgicas do Workflow Clássico face à inativação repentina de quem criou e ancorou com privilégios o gatilho da lógica original.",
            "papoReto": "O velho e complexo problema da conta do gerente demitido! Se a conta do criador do mecanismo original afundou trancada na inativação da empresa, os robôs estacionados caem no vazio ao tentarem rodar. Solução de segurança: Você como Admin transfere e apropria para si o Workflow matriz ativando a nova posse. Agora o que fazemos com as execuções antigotas acumuladas lá na inércia? Você não as recicla nem a propulsa magicamente num crachá novo. Você não destrói os vestígios na brutalidade. Você tem que CANCELÁ-LAS regimentalmente. Corta-se o erro pela raiz esvaziando o sistema formal.",
            "respostaCerta": "Atualize o proprietário do fluxo de trabalho e cancele as execuções anteriores no estado Aguardando.",
            "puloDoGato": "Workflows Clássicos travados e engasgados baseiam-se numa assinatura morta. Trocar o proprietário principais devolve saúde vital para criações FUTURAS. Mas para os Jobs (execuções do sistema pre-disparadas) travados e já instanciados como Waiting que continuam apontando num link fantasma de conta e tentarão reativar o colapso interno. A regra oficial ALM da arquitetura Dataverse obriga cancelá-los (Cancel instances) sem alterar e não aceita manipulação retroativa nominal das sessões instanciadas.",
            "cascasDeBanana": [
                "Atualizar o dono das execuções ativas (Jobs history): A infraestrutura não tem permissão para alterar titularidades já disparadas via gatilhos prévios de jobs orgânicos das execuções.",
                "Reenviar (Resubmit): Falhará permanentemente porque a assinatura digital validada contextual já havia corrompido os laços.",
                "Excluir Forçosamente (Delete): O sistema bloqueia a aniquilação física impune de status em Waiting, deve comissionar com desativação manual orgânica (Cancel/Cancelled)."
            ],
            "dicaOuro": "Desatou o problema do proprietário desativado que engasgou os Workflows Clássicos originais? Vire dono globalmente do processo (Change Owner) + OBRIGATORIAMENTE CANCELE as instâncias congeladas paradas lá trás."
        },
        "difficulty": "iniciante",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q137_topic1",
        "text": "Você está capturando informações de saúde de um cliente em um formulário de um aplicativo orientado por modelo. Você precisa executar cálculos complexos com o aplicativo. Você precisa garantir que os usuários não possam inserir dados enquanto os cálculos estão sendo executados. Qual ferramenta você deve usar para bloquear a interface do usuário?",
        "options": [
            "fluxo de trabalho clássico (classic workflow)",
            "fluxo de trabalho instantâneo (instant workflow)",
            "fluxo de processo de negócios (business process flow)",
            "Power Fx"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão clássica foca em identificar as propriedades síncronas de ferramentas legadas que permanecem valiosas devido ao controle agressivo do tempo de execução.",
            "papoReto": "Sabe quando você clica em \"Salvar\" e aparece um ícone girando (\"Carregando...\") que te impede de mexer na tela até terminar de calcular o imposto? Fluxos de Nuvem (Power Automate) rodam \"lá longe\" por trás dos panos (assíncronos), se você usar eles ou Power Fx, o usuário vai continuar clicando pela tela enquanto o cálculo não volta. Só o bom e velho \"Fluxo de Trabalho Clássico\" configurado como \"Tempo Real (Real-time)\" tem a força bruta orgânica de travar o navegador do usuário aguardando a resposta processada no banco.",
            "respostaCerta": "fluxo de trabalho clássico (classic workflow)",
            "puloDoGato": "A certificação sempre associará a expressão \"Bloquear a Interface do Usuário\" (Block User Interface) ou execução \"Síncrona/Tempo Real\" robusta no Dataverse aos \"Classic Real-time Workflows\" (Fluxos de Trabalho Clássicos) devido à sua capacidade de agir na mesma transação exata do banco de dados, travando o retorno à camada visual (UI) até a conclusão efetiva.",
            "cascasDeBanana": [
                "Power Fx e fluxos de nuvem/instantâneos: Executam de forma largamente assíncrona ou em client-side de modo permissivo sem engessamento de thread único trancador de UI.",
                "Fluxos de processo de negócios (BPF): São apenas trilhos de guia de fases sequenciais. Eles são incapazes de realizar cálculos matemáticos de retaguarda complexos por conta própria."
            ],
            "dicaOuro": "Bloquear/travar ativamente a interface do usuário DURANTE a espera por lógicas/cálculos = Fluxo de Trabalho Clássico (em Tempo Real)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q138_topic1",
        "text": "Sua organização usa o Microsoft Power Platform para gerenciar interações do cliente. Recentemente, a equipe de vendas tem lutado com a entrada de dados inconsistentes e a falta de adesão ao processo padrão ao lidar com clientes potenciais. Essa inconsistência está afetando a taxa de conversão de clientes potenciais para oportunidades. Você precisa implementar uma solução que garanta que a equipe de vendas siga um processo consistente para gerenciar clientes potenciais. O que você deve fazer?",
        "options": [
            "Crie um fluxo de processo de negócios (BPF) com estágios para a qualificação de leads.",
            "Use regras de negócios para validar a entrada de dados no formulário de cliente potencial.",
            "Implemente um programa de treinamento para a equipe de vendas seguir.",
            "Use um fluxo de trabalho em tempo real para automatizar conversões."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão define perfeitamente o cenário clássico de \"Business Need\" que deu origem à existência dos componentes \"Fluxos do Processo Empresarial\" (BPF).",
            "papoReto": "A equipe de vendas está batendo cabeça: um anota telefone no caderno, outro cadastra cliente pela metade, outro pula etapas. Como forçar todo mundo a trabalhar na mesma sintonia? Colocando um \"trilho de trem\" no topo da tela chamado \"Fluxo do Processo Empresarial\". Essa barra superior literalmente não deixa o vendedor seguir para a fase \"Proposta\" sem antes obrigatoriamente preencher os campos vitais da fase \"Qualificação\". Trata-se de forçar um Padrão guiado.",
            "respostaCerta": "Crie um fluxo de processo de negócios (BPF) com estágios para a qualificação de leads.",
            "puloDoGato": "Toda vez que a certificação citar problemas de \"Inconsistência de processo\", \"Adesão às etapas\", ou a necessidade de prover uma \"Experiência guiada\" (Guidance) passo-a-passo para uniformizar dados de trabalho de uma equipe, a resposta 100% das vezes será utilizar um \"Business Process Flow\".",
            "cascasDeBanana": [
                "Regras de Negócios: Elas até trancam e valem campos no formulário reativamente, mas não oferecem um ciclo de vida e visibilidade longitudinal das \"Etapas do que fazer a seguir\" que um time precisa para alinhar o workflow humano.",
                "Programas de Treinamento: Não criam barreiras de software impositivas ou automações restritivas no app."
            ],
            "dicaOuro": "Garantir Processo Consistente para Usuários e prover Experiência Guiada com Fases claras (Estágios) = Business Process Flow (Fluxo de Processo de Negócios)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q139_topic1",
        "text": "Você está desenvolvendo um fluxo de processo de negócios (BPF). Você precisa acionar um fluxo de trabalho sob demanda dentro do fluxo de processo de negócios para criar uma conta nova. Qual componente base você deve usar no design?",
        "options": [
            "Etapa de Ação (Action Step)",
            "Condição de formação de branches (Branching condition)",
            "Etapa de Dados (Data Step)",
            "Gatilho de nuvem instantâneo (Instant cloud trigger)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão avalia a sua compreensão estrutural do \"esqueleto\" e blocos que montam as peças visuais de um Fluxo de Processo de Negócios (BPF).",
            "papoReto": "Dentro daquele famoso trilho guiado do BPF (a barra de fases horizontal), você normalmente preenche textinhos na \"Etapa de Dados\". Mas e se você quiser colocar um Botão real para o usuário apertar ali dentro e mandar o sistema rodar um WorkFlow para aprovar crédito na hora? Você acopla nesse Estágio uma \"Etapa de Ação\" (Action Step). Ela funciona como a \"boca de conector\" que converte e aciona automações robustas engavetadas lá de dentro da fase.",
            "respostaCerta": "Etapa de Ação (Action Step)",
            "puloDoGato": "O único componente estrutural projetado nativamente para permitir que um usuário inicie pontualmente / manualmente um Workflow clássico \"sob demanda\" (on-demand) exibido diretamente como um elemento consumível dentro dos estágios na barra de um Business Process Flow é a \"Etapa de Ação\" (Action Step).",
            "cascasDeBanana": [
                "Condição de Branching: Apenas divide e cria caminhos divergentes e atalhos na visualização da trilha (\"Se receita alta, mostre fase B\"), nunca dispára robôs.",
                "Etapa de Dados: Responsável trivial por amarrar uma ou exigir o preenchimento de colunas básicas e triviais durante a fase em execução."
            ],
            "dicaOuro": "Executar fluxos de trabalho \"On-demand\" ou desencadear Custom Actions pressionando botões DENTRO de fases BPF = Etapa de Ação (Action Step)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q140_topic1",
        "text": "Você está desenvolvendo um fluxo de processo de negócios. Uma das etapas requer a aprovação do gerente para os usuários. Você precisa projetar a injeção um fluxo de nuvem (Cloud flow) para gerenciar essa aprovação no BPF. Como você deve desenhar essa arquitetura?",
        "options": [
            "Adicione o fluxo de nuvem a um estágio existente usando um componente de Etapa Fluxo (Flow Step).",
            "Adicione o fluxo de nuvem como um novo estágio (Stage) independente e isolado no fundo do fluxo.",
            "Crie o fluxo de nuvem como um fluxo instantâneo usando um gatilho manual isolado e desconectado.",
            "Crie o fluxo de nuvem estritamente em um ambiente padrão alardeado sobre o Dataverse."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um passo metodológico e cronológico além da questão anterior: Aqui, o foco explícito é a integração dos novos robôs modernos (Power Automate Cloud Flows) por dentro do trilho engessado do BPF.",
            "papoReto": "A regra restrita do construtor de BPF avisa: Você não consegue botar um Robô da Nuvem voando solto como protagonista, e nem dar pra ele a honra de ser um \"Estágio/Fase\" grandona pra ele próprio aparecer isolado. Uma \"Fase\" (Stage) atua hospedando vários \"Passos\" (Steps). Logo, se você quer integrar uma aprovação de Nuvem moderna na trilha, selecione uma fase orgânica que já existe (um Estágio Pai) e jogue o seu motorzinho lá debaixo camuflando como um componente modesto chamado \"Etapa Fluxo\" (Flow Step).",
            "respostaCerta": "Adicione o fluxo de nuvem a um estágio existente usando um componente de Etapa Fluxo (Flow Step).",
            "puloDoGato": "Fique atento à sutil e rígida hierarquia arquitetural do Dataverse: Os modernos \"Cloud Flows\" (Fluxos de Nuvem) penetram nos BPFs (Business Process Flows) estrita e inegociavelmente através da ancoragem como componentes categorizados \"Flow Step\" (Etapas Fluxo) subordinados a habitarem e executarem necessariamente aninhados a um Estágio (Stage) já previamente estabelecido.",
            "cascasDeBanana": [
                "Adicionar como Estágio Separado: Incorreto do ponto de vista do design. Estágios (\"Stages\") são os baldes macro que contêm ações; eles não contêm execuções ativas isoladamente per se. O fluxo de nuvem habita o subnível step no Stage respectivo.",
                "Gatilhos Manuais ou Ambientes soltos: Desvirtuam e desancoram a experiência integrada contextual embutida onde a telemetria do fluxo pai passa para a instância flutuante da nuvem."
            ],
            "dicaOuro": "Hospedar de forma correta e nativa conectores Cloud Flow (Power Automate) no interior dos BPFs = Componente \"Etapa Fluxo\" (Flow Step) subordinado/adicionado a um \"Estágio existente\"."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q141_topic1",
        "text": "Você cria um fluxo de processo de negócios (BPF) para uma empresa que vende impressoras. A equipe de vendas prepara propostas em um estágio inicial do fluxo do processo de negócios. Um chefe de equipe precisa avaliar e aprovar as propostas antes de compartilhá-las com os clientes. Você precisa adicionar uma etapa nativa para o processo de revisão e aprovação engatilhada sob demanda neste estágio final. O que você deve adicionar?",
        "options": [
            "fluxo de nuvem instantâneo (instant cloud flow)",
            "fluxo de nuvem automatizado (automated cloud flow)",
            "fluxo de área de trabalho (desktop flow)",
            "regra de negócios (business rule)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão explora os mecanismos de integração de automação manual contidos como recursos dos estágios de um Business Process Flow (BPF).",
            "papoReto": "O chefe precisa olhar e dizer \"Aprovado!\" quando quiser. Qual o tipo de fluxo no Power Automate que roda \"quando alguém clica num botão\"? É o Fluxo Instantâneo. Como a aprovação ocorre dentro de uma fase específica e aguarda o time finalizar o preenchimento, você atrela (embutido na fase) um Fluxo de Nuvem Instantâneo que os usuários e chefes irão disparar manualmente clicando no botão da Etapa correspondente.",
            "respostaCerta": "fluxo de nuvem instantâneo (instant cloud flow)",
            "puloDoGato": "Aprovações orquestradas diretamente DENTRO da barra de um processo (BPF) como botões ou ações que o usuário inicia deliberadamente exigem um \"Fluxo Instantâneo\". Eles são acoplados via \"Etapa de Fluxo\" (Flow Step) e permitem passagem do contexto atual da tela param o fluxo.",
            "cascasDeBanana": [
                "Fluxo Automatizado: Estes escutam um gatilho de sistema por baixo dos panos (como um \"Quando criado no banco\") e correm invisíveis. Não são injetados interativamente como uma etapa visível controlável do estágio.",
                "Fluxo de Área de Trabalho (RPA): Utilizados para macros legadas com interações visuais no Windows, de altíssimo peso e inviabilidade para mera aprovação de registro web."
            ],
            "dicaOuro": "Tarefas de revisão e aprovação acionadas deliberadamente de \"dentro\" do trilho de um fluxo de processo de negócios = Fluxo de nuvem instantâneo."
        },
        "difficulty": "intermediario",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q142_topic1",
        "text": "Você gerencia um Microsoft Power Pages. Você precisa permitir que os usuários possam baixar conteúdo de um Power Pages usando arquivos da web (Web Files). Qual local externo ou meio estrutural você pode usar de forma nativamente acoplada para armazenar e servir os arquivos web?",
        "options": [
            "Armazenamento de Blob do Microsoft Azure (Azure Blob Storage)",
            "Microsoft SharePoint",
            "Microsoft OneDrive for Business",
            "Microsoft Stream"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta recai sobre a arquitetura de armazenamento paralela suportada ao construir o sistema de \"Web Files\" no Power Pages/Power Apps Portals.",
            "papoReto": "Os arquivos de site (imagens, PDFs para download) do Power Pages pesam, e o custo por mega no Dataverse é muito mais caro que num pendrive gigante na nuvem. A Microsoft programou o sistema de portais para aceitar apenas dois formatos para arquivar nativamente Web Files: ou eles vivem diretamente presos nos blocos nativos de Anexos (Notes/Annotations) do Dataverse, ou você joga pra um \"Storage\" baratinho e colossal que é suportado nativamente pelo Portal. Esse único Storage com suporte nativo de offload é o Azure Blob Storage.",
            "respostaCerta": "Armazenamento de Blob do Microsoft Azure (Azure Blob Storage)",
            "puloDoGato": "Por padrão arquitetural do construtor de Portais (Power Pages), os Arquivos Web são armazenados estritamente na entidade Observações (Notes/Annotations). Para habilitar armazenamento externo e contornar limites, a única via formalmente suportada e nativamente amarrável nas configurações do portal (Site Settings) é delegar os anexos para o \"Azure Blob Storage\".",
            "cascasDeBanana": [
                "SharePoint e OneDrive: Embora o Dataverse tenha integração de Documentos com o SharePoint, isso serve para gestão de arquivos entre usuários nos Model-Driven Apps, e NÃO como infraestrutura base pública e servidora de Web Files e assets renderizáveis de código/telas de download de um Power Page.",
                "Stream: Repositório estrito para ativos de vídeo em streaming."
            ],
            "dicaOuro": "Armazenamento complementar oficial e nativo para externalizar Arquivos Web (Web Files) de Portais (Power Pages) = Azure Blob Storage."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Power Pages"
    },
    {
        "id": "q143_topic1",
        "text": "Você está criando um aplicativo de tela (Canvas App). Você está usando a tabela Contas no aplicativo. Você precisa definir uma ação para navegar até o modo de exibição padrão da tabela Contas. Qual sintaxe da fórmula Power Fx deve ser usada?",
        "options": [
            "Navegar(Contas) / Navigate(Accounts)",
            "Navegar(ModoDeExibição.Contas) / Navigate(View.Accounts)",
            "Contas.Navegar() / Accounts.Navigate()",
            "Navegar(Contas, Padrões) / Navigate(Accounts, Defaults)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um foco singelo na sintaxe correta do Power Fx quando a função lida diretamente com contêineres de dados (Tabelas).",
            "papoReto": "Se você colocar num botão a ordem para ir para a tela inteira que lista os dados da tabela Contas, o comando \"Navegar\" (Navigate) é surpreendentemente inteligente. Se ao invés de passar o nome de uma Tela do app, você passar o nome puro da Tabela conectada inteira como argumento principal, o Power Apps entende a mágica e exibe automaticamente a galeria padrão com aquela entidade.",
            "respostaCerta": "Navegar(Contas) / Navigate(Accounts)",
            "puloDoGato": "No Canvas App (e cada vez mais nativo nas transições baseadas em Modelos e Custom Pages), a função \"Navigate\" pode receber o nome lógico da Fonte de Dados (ex: a tabela \"Contas\"). Declarar \"Navigate(Contas)\" direcionará diretamente o foco da navegação à exibição padrão de entidade gerada pelo aplicativo, sem necessidade de sintaxes adicionais prolixas.",
            "cascasDeBanana": [
                "Transmitir qualquer segundo argumento, contexto ou prefixo como (View.Contas): É incorreto na sintaxe padrão para esse resultado, pois qualquer artefato embutido extra não carregaria a exibição padrão clean exigida, tentando invocar comandos de filtro redundantes ou quebrando a compilação do Power Fx."
            ],
            "dicaOuro": "Navegar diretamente para a tela de visualização padrão de uma tabela = Forneça APENAS o nome exato da tabela no Power Fx [Navigate(TableName)]."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q144_topic1",
        "text": "Você está desenvolvendo um fluxo de nuvem automatizado para uma tabela de Contatos do Microsoft Dataverse. O fluxo de nuvem deve começar quando um novo contato é adicionado à tabela. Você precisa buscar atributos englobando o escopo completo contido dentro do cabeçalho do gatilho das ações (trigger header and payload). Qual função de expressão primária você deve usar?",
        "options": [
            "triggerOutputs()",
            "triggerBody()",
            "triggerFormDataValue()",
            "result()"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é uma questão raiz e avançada que exige a compreensão das entranhas matemáticas (Expressões JSON nativas do Logic Apps) que movem o Power Automate.",
            "papoReto": "Quando um form \"atira\" um gatilho e o fluxo acorda, o envelope recebido não vem só a cartinha solta com os campos de nome e email (\"Body\"). O Correio traz o envelope listando o IP, os cabeçalhos HTTP de segurança (\"Headers\") e enfim a mensagem principais no pacote completo final. A função global que engloba acesso universal para você ler tanto o carimbo externo quanto todos os miolos internos da carta do gatilho chama-se \"triggerOutputs()\".",
            "respostaCerta": "triggerOutputs()",
            "puloDoGato": "A expressão \"triggerOutputs()\" é a provedora máxima em Power Automate para ler saídas na origem do gatilho contendo os metadados macro. Ela difere das secundárias por dar acesso não apenas aos dados formatados do Payload central, mas à totalidade do envolope, em especial os \"Headers\" (Cabeçalhos HTTP).",
            "cascasDeBanana": [
                "triggerBody(): É a segunda mais popular, mas captura puramente os valores de dados brutos (payload) dentro da mensagem principal, omitindo completamente a camada superior que inclui atributos do cabeçalho de rede (Headers).",
                "triggerFormDataValue() e result(): Têm papéis restritos. A primeira decifra uma chave unitária HTML Form, e a result() varre resultados e status de passos de loops, e não cabeçalhos de trigger originais."
            ],
            "dicaOuro": "Ler atributos incluindo o CABEÇALHO (Headers) que o Gatilho disparador formou = triggerOutputs()."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q145_topic1",
        "text": "Uma empresa está usando o Microsoft Dynamics 365 Sales. Os gerentes precisam receber um email quando um vendedor cria uma nova oportunidade com valor superior a US$ 5.000. Você precisa montar a arquitetura do fluxo no Power Automate para enviar o email. Que tipo de fluxo estrutural deve ser criado?",
        "options": [
            "fluxo de nuvem automatizado com uma ação Condição (Condition)",
            "fluxo de nuvem automatizado com uma ação Alternar (Switch)",
            "fluxo de nuvem programado (scheduled) com uma ação Condição",
            "fluxo de nuvem programado (scheduled) com uma ação Alternar"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Essa é a anatomia primária e o clássico exercício \"Hello World\" da plataforma de automação. Decisões síncronas contra agendamentos e comparadores matemáticos.",
            "papoReto": "Primeiro detalhe: O email precisa sair \"QUANDO\" um vendedor criar a ficha. Ou seja, reação em cadeia na hora. Isso é um \"Fluxo Automatizado\". Não é um fluxo programado (robô batendo ponto toda meia noite). Segundo detalhe: Queremos ver se o valor é \"MAIOR QUE\" (superior a 5 mil). Qual bloco toma decisões com \"maior que\"? A \"Condição\" (Condition - IF). O \"Switch\" (Ação Alternar) não faz contas de maior/menor, ele só checa coisas idênticas de menu exato (tipo: o mês é igual a Janeiro?).",
            "respostaCerta": "fluxo de nuvem automatizado com uma ação Condição (Condition)",
            "puloDoGato": "A regra avaliativa impende que a estrutura englobe evento + limite avaliativo. Operadores lógicos de magnitude tais como \"Maior Que\" (>), \"Menor Que\", ou \"Contém\" são exclusividade sistêmica da ferramenta \"Condição\" (Condition Action). \"Alternar\" (Switch case) lida unicamente com equivalência exata singular (Equals) para derivar árvores.",
            "cascasDeBanana": [
                "Fluxos Programados (Scheduled): Descumprem o requisito inicial. Robôs agendados são diários ou semanais (recorrência) e padrão a instantes momentâneos e eventos da criação de registros reativos do sistema.",
                "Ação Alternar (Switch): Limitação aritmética de ser padrão à matemática limitável: O \"Switch\" não pode testar matrizes de grandeza cruzando se a oportunidade excede e cruza a marca do \"maior do que 5000\"."
            ],
            "dicaOuro": "Gatilho instantâneo mediante Ação no banco (\"Quando for CRIADO\") + Precisar medir valores por \"MAIOR/MENOR que\" = Fluxo Automatizado + Ação de Condição (Condition/IF)."
        },
        "difficulty": "iniciante",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q146_topic1",
        "text": "Um supermercado requer uma solução que reconheça os produtos nas prateleiras. A solução precisa ser capaz de tirar fotos dos produtos nas prateleiras usando um dispositivo móvel. Em seguida, a solução deve enviar essas imagens para identificar os produtos automaticamente e fazer a contagem. Você precisa criar a solução. O que você deve usar?",
        "options": [
            "aplicativo de tela (Canvas app)",
            "aplicativo orientado por modelos (Model-driven app)",
            "Power Pages",
            "Dataverse for Teams"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão avalia a capacidade prática de interface nativa de cada tipo de aplicativo na plataforma ao interagir com o hardware do usuário e a IA.",
            "papoReto": "Se o usuário precisa andar pelo mercado, sacar o celular, abrir a câmera e tirar uma foto, você não consegue fazer isso nativamente nas interfaces engessadas do Model-driven ou num Portal clássico. Essa liberdade de \"montar botões na tela\" interagindo livremente com recursos nativos do aparelho (Câmera + GPS) e jogar direto na boca do motor de \"Detecção de Objetos\" (Object Detection) do AI Builder é o pão com manteiga absoluto dos Aplicativos de Tela.",
            "respostaCerta": "aplicativo de tela (Canvas app)",
            "puloDoGato": "A certificação vincula inexoravelmente o escopo \"Tirar fotos com dispositivo\" + \"Passar para modelos interativos de AI (Object Detection) em tempo real na tela\" aos Aplicativos de Tela (Canvas Apps). O Canvas possui controles nativos de câmera e é o único que acomoda esteticamente as caixas delimitadoras e o escaneamento ativo de identificadores de imagem na tela.",
            "cascasDeBanana": [
                "Model-driven apps ou Power Pages: Estruturas focadas predominantemente em registros do banco (formulários padronizados) em computadores, não provém a janela livre de controle da Câmera do device conectada em tempo real a processamentos abertos do framework do AI builder para ler as prateleiras dinamicamente."
            ],
            "dicaOuro": "Precisa de Câmera nativa no mobile + Reconhecimento e contagem de objetos (AI Builder) atuando = Aplicativo de Tela (Canvas App)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q147_topic1",
        "text": "Você cria um Microsoft Power Pages para que os clientes visualizem seu próprio registro de cliente e pedidos anteriores. Você habilita a autenticação para requerer que os clientes façam login. Você precisa permitir que clientes autenticados visualizem páginas restritas e dados específicos a eles. O que você deve usar para ancorar as permissões de acesso às páginas para esses usuários que fizeram login?",
        "options": [
            "funções da web (Web roles)",
            "permissões da tabela (Table permissions)",
            "funções de segurança do Dataverse (Security roles)",
            "provedor de identidade (Identity provider)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão clássica desmistifica a grande confusão sobre segurança no Power Pages (Antigo Portais) versus Segurança tradicional do Dataverse.",
            "papoReto": "No Dataverse normal (Back-office/Model-driven), você usa \"Função de Segurança\" (Security Role) pros funcionários da empresa. Mas no Portal (Web/Power Pages), o cliente que acessa de fora da empresa é tratado pelo sistema apenas como um \"Contato\" na base. Para dar poderes (fazer login, ver telas restritas e menus VIPs) para esses Contatos externos, você precisa obrigatoriamente associá-los a uma \"Função da Web\" (Web Role), como \"Usuário Autenticado\" ou \"Administrador do Portal\".",
            "respostaCerta": "funções da web (Web roles)",
            "puloDoGato": "A arquitetura do Power Pages exige que as permissões primordiais de visualização de páginas da Web inteiras (Telas/Menus) para usuários externos sejam concedidas via e ancoradas puramente pelas \"Web Roles\". Todo usuário que loga assume automaticamente a Web Role genérica \"Authenticated Users\".",
            "cascasDeBanana": [
                "Permissões da Tabela: O usuário errou ao escolhê-la porque as Table Permissions dizem QUAIS linhas do banco (pedidos dele no Dataverse) ele pode ver. Mas para ancorar essas permissões ao perfil e permitir que o cliente veja a PÁGINA (a tela em si do portal), o contêiner macro oficial e matriz é a \"Web Role\".",
                "Funções de segurança: Ocultas e inúteis para perfis de portal (Contato externo), englobam apenas contas Active Directory primárias do licenciamento interno."
            ],
            "dicaOuro": "Controlar quem acessa as telinhas na parte da WEB (Power Pages) ou amarrar grupo de usuários de fora = Funções da Web (Web roles)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q148_topic1",
        "text": "Uma empresa implementa um aplicativo Microsoft Power Pages que mostra dados de tabelas diretas do Dataverse. Alguns dados sensíveis precisam ficar visíveis exclusivamente apenas para os usuários autenticados (com login). Você precisa restringir o acesso e parametrizar a segurança na nuvem. Quais devem ser simultaneamente as duas ações matrizes arquitetônicas que você deve executar em conjunto?",
        "options": [
            "Atribua funções da web (Web roles) aos usuários E Configure um provedor de identidade (Identity provider).",
            "Atribua funções de segurança (Security roles) aos usuários E Configure a segurança hierárquica.",
            "Configure um provedor de identidade E Atribua permissões de tabela locais abertas globalmente.",
            "Atribua funções da web aos usuários E Atribua funções de segurança principais do Dataverse."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão avalia os dois pilares obrigatórios do modelo de segurança \"Zero Trust\" prático no ecossistema de Portais (Power Pages).",
            "papoReto": "Se você quer esconder a página apenas para quem tem senha, primeiro você tem que ligar o \"porteiro\" para conferir os crachás: isso é Configurar um \"Provedor de Identidade\" (Azure AD B2C, Google, login local). Depois que a pessoa entrou, como o sistema separa quem é Admin de quem é Cliente Básico? Com o segundo pilar: Atribuir as \"Funções da Web\" (Web Roles) para os respectivos contatos. Sem Provedor não há Login, e sem Web Role não há restrição separada de Páginas.",
            "respostaCerta": "Atribua funções da web aos usuários E Configure um provedor de identidade.",
            "puloDoGato": "O processo é dual: Sem autenticação (Identity Provider), clientes rodam anonimamente. Após autenticação, páginas e conteúdos restritos só filtram quem pode entrar baseando-se estritamente nas Funções da Web habilitadas (Web roles) daquele respectivo contato portal.",
            "cascasDeBanana": [
                "Funções de segurança e hierárquica do Dataverse: Como frisado anteriormente, Segurança Hierárquica e Security Roles (System Admin, Basic User) não se extrapolam nem atuam sobre o tráfego externo/público hospedado no ambiente do Power Pages."
            ],
            "dicaOuro": "Requisitos de Login + Permissões Específicas restritas a Logados no Power Pages = Identity Provider (Provedor Autenticação) + Web Roles (Função da Web)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q149_topic1",
        "text": "Você cria um aplicativo de tela (Canvas App) empacotado puramente dentro do contêiner de uma solução. Você precisa automatizar a emissão de contrato pesado, de forma que você precisa de um fluxo do Microsoft Power Automate que seja acionado proativamente mediante clique de dentro do aplicativo de tela pelo usuário. Qual tipo de fluxo de contêiner você deve criar?",
        "options": [
            "fluxo de nuvem instantâneo dentro da mesma solução (instant cloud flow in the solution)",
            "fluxo de nuvem instantâneo fora da solução (default environment)",
            "fluxo de nuvem automatizado dentro da solução (automated cloud flow)",
            "fluxo de área de trabalho dentro da solução (desktop flow)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão foca fundamentalmente na vinculação e governança de conectividade entre um Canvas App empacotado em ALM e dependências interativas de API.",
            "papoReto": "Tem um botão no Canvas que chama um Automate pra rodar. Primeira regra: só botões conseguem engatilhar fluxos; ou seja, estamos falando estritamente de Fluxo \"Instantâneo\". Segunda regra: se o seu aplicativo está \"preso\" e empacotado bonitinho dentro de uma Solução, visando a exportação futura para Produção, ele é \"padrão\" aos fluxos soltos fora dessa caixa. O robô TEM obrigatoriamente que estar criado na aba \"Instantâneo\" embutido organicamente dentro da MESMA Solução do Canvas.",
            "respostaCerta": "fluxo de nuvem instantâneo dentro da mesma solução",
            "puloDoGato": "Aplicativos criados como \"Solution-aware\" não enxergam e não englobam referências a \"Cloud Flows\" criados avulsos diretamente na tela default (Fora da solução principal / Environment Default root). O design tem que ser obrigatoriamente na nuvem (Cloud Flow), Instantâneo (acionado por demanda do usuário via Botão/PowerApps V2 Trigger), e Solution-aware (criado DENTRO da interface da Solução).",
            "cascasDeBanana": [
                "Fluxos automatizados: Recusados, pois ignoram os botões da tela e disparam invisivelmente através do Dataverse ou SharePoint.",
                "Fluxo fora do invólucro da solução: Um canvas preso na solução seria incapaz de encontrar a assinatura deste robô nos cenários avançados recomendados de ALM e Exportação."
            ],
            "dicaOuro": "Precisa chamar fluxo no clique do botão em App embarcado em Solução = Fluxo Instantâneo + Explicitamente Criado \"Dentro\" da Solução."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q150_topic1",
        "text": "Você precisa compilar um aplicativo de tela que capture os nomes das pessoas em uma feira comercial movimentada. A conectividade estrutural com a internet no galpão não é confiável. O aplicativo precisa preservar e armazenar temporariamente na memória os nomes recebidos até que uma conexão confiável possa ser feita com a base da nuvem. Qual objeto você deve usar para armazenar os dados no ar?",
        "options": [
            "coleção (collection / ClearCollect)",
            "variável global (global variable / Set)",
            "tabela de dados visual (data table)",
            "galeria (gallery)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é o alicerce básico do desenvolvimento em Power Apps focado no manuseio massivo (listas bidimensionais) de informações na memória RAM (Off-line caching).",
            "papoReto": "A internet no pavilhão da feira de exposições e vendas caiu. O seu vendedor não pode parar de anotar OS VÁRIOS nomes e telefones de clientes no tablet. Aonde o aplicativo vai guardar essas dúzias de linhas até o 4G voltar para mandar em massa (Patch) ao Dataverse? Numa \"Coleção\"! Pense nela como uma tabelinha do Excel temporária e fantasminha que vive voando puramente dentro da memória local do tablet do usuário enquanto o app não for completamente morto.",
            "respostaCerta": "coleção (collection / ClearCollect)",
            "puloDoGato": "A certificação é taxativa: Cenários \"Offline\" ou de agregação multilinhas não-transacionais utilizam invariavelmente \"Coleções\" (Funções como Collect ou ClearCollect, SaveData/LoadData). Elas suportam salvar massivamente uma tabela de dados estáticos multi-itens (Arrays/linhas diversas) alocada nativamente na memória local da sessão do App.",
            "cascasDeBanana": [
                "Variável (Set): A armazenagem tradicional de variável serve estritamente e cruamente para salvar \"apenas um registro único singular\" por vez (Ex: o nome 1 do cara ou um número 10), não abrigando listagens complexas dinâmicas como dezenas de visitantes da feira iterativos empilhados juntos.",
                "Galerias / Tabelas Visuais: São puramente controles estéticos de pintura da \"casca vísual\" da tela (UI), não alocam memórias reais manipuláveis fora de escopo no Back-end dinâmico temporário Offline."
            ],
            "dicaOuro": "Armazenar DIVERSAS linhas, matrizes ou atuar provisoriamente para cache num cenário de Internet Instável (OFF-LINE cache) = Coleção (Collection)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q151_topic1",
        "text": "Você cria um aplicativo de tela do Microsoft Power Apps para uma empresa. A empresa requer que o aplicativo seja projetado para poder funcionar primariamente de forma offline. Qual recurso interno de arquitetura você deve configurar para suportar essa retenção temporária de dados?",
        "options": [
            "coleção (collection)",
            "gateway de dados local (on-premises data gateway)",
            "fonte de dados offline (offline data source connection)",
            "delegação (delegation)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta ataca a espinha dorsal de como operam os aplicativos do Power Apps para reter memória RAM na ausência de rede (Off-line cache).",
            "papoReto": "O aplicativo cortou o cordão umbilical do 4G e ficou sem banco de dados. Qual o único recurso dentro do Power Apps que sabe segurar uma matriz de linhas flutuante de dados sem precisar gravar em disco num servidor externo? A \"Coleção\". Através da coleção e suas combinações exclusivas com a função SaveData, o aplicativo armazena massivamente linhas e matrizes localmente na memória RAM (Off-line cache) do seu aparelho.",
            "respostaCerta": "coleção (collection)",
            "puloDoGato": "No ecossistema nativo sem uso de funcionalidades recém-lançadas em Preview, a arquitetura \"Offline First\" nos Aplicativos de Tela repousa inteiramente sobre o pilar de criação agressiva de \"Coleções\" de dados em memória para atuação cruzada com \"SaveData\" ou retenções visuais locais.",
            "cascasDeBanana": [
                "Gateway: O Data Gateway serve estritamente para quebrar firewalls de servidores on-premisses locais (Windows Server corporativo, etc). Não confere habilidade offline ao celular/tablet do usuário.",
                "Delegação: É apenas o ato de \"pedir\" para o servidor realizar a conta e poupar memória local, ou seja, é exatamente o inverso de uma estratégia off-line (que obrigatoriamente depende da máquina atuando 100% isolada)."
            ],
            "dicaOuro": "Recurso base obrigatório e inegociável para viabilizar e acumular dados em modo \"Sustentação Offline\" local do celular = Coleção (Collection)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q152_topic1",
        "text": "Você está desenvolvendo um aplicativo de tela chamado app1. O aplicativo tem duas telas: BrowseScreen1 e EditScreen1. A tela BrowseScreen1 inclui uma galeria vertical chamada gallery1. A tela EditScreen1 inclui um formulário para Editar chamado form1. Você precisa garantir que se o usuário clicar em um registro na gallery1, o item correspondente daquele registro exato seja preenchido e injetado no form1. O que você deve configurar?",
        "options": [
            "Configure a propriedade Item do form1 como gallery1.Selected",
            "Configure a propriedade DefaultMode do form1 como Editar",
            "Configure a propriedade DataSource do form1 como gallery1",
            "Configure a propriedade OnSuccess do form1 como gallery1.Selected"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta é a base matriz de transição de dados entre componentes UI (Galeria -> Formulário) de leitura e gravação no Power Apps.",
            "papoReto": "A Galeria é a lista completa. O Formulário é o detalhe que grava e lê os pedaços. Como o formulário sabe de quem ele tá falando para exibir as respostas velhas na tela? Ele precisa que você mire na propriedade \"Item\" dele (que significa \"Registro Alvo\"), e diga para ele escutar a Galeria chamando o comando \".Selected\" (\"Galeria1.Selecionado\"). A partir daí, eles se falam instantaneamente.",
            "respostaCerta": "Configure a propriedade Item do form1 como gallery1.Selected",
            "puloDoGato": "Em aplicativos de tela estruturados por Master/Detail (principais/Detalhes), o acoplamento de contexto (Binding) que passa o registro principais de uma Tabela/Galeria para povoar instâncias estáticas em um formulário é exercido conectando estritamente a Propriedade \"Item\" do Form control à \"Gallery.Selected\".",
            "cascasDeBanana": [
                "DefaultMode (Editar/Novo/Exibição): Apesar de útil, define apenas se a caixa de texto deixará gravar nela. Não injeta os *dados contidos da linha*, nem a ponta para eles.",
                "DataSource: Aqui você põe o nome da sua Tabela real do SharePoint ou Dataverse, e não o nome da galeria da tela."
            ],
            "dicaOuro": "Amarrar / puxar os dados EXATOS clicados numa Galeria (lista) para jogar no Formulário (editores) = Form.Item -> Gallery.Selected."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q153_topic1",
        "text": "Você está compilando um aplicativo de tela para notificar acidentes sofridos por operários de construção no local da obra remota. Os funcionários notificam que sua conectividade com a internet está intermitente. Os funcionários precisam ter acesso a cache local e garantir que o app não esqueça os dados caso seja minimizado ou perdendo o sinal. Você precisa fornecer aos funcionários um acesso offline forte aos dados mais recentes recebidos quando os dispositivos estavam online. Estrategicamente, o que você deve fazer?",
        "options": [
            "Armazene os dados localmente (cache no hardware em si) usando SaveData em conjunto a uma coleção.",
            "Armazene os dados localmente acoplando exportação gerada em um arquivo estático do Excel.",
            "Use a fórmula LoadData diretamente mirando a nuvem sem o uso das passagens de coleção isolada.",
            "Apenas referencie uma Tabela no DataSource; o Power Apps cria e retém o cache offline automaticamente sem coleções."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um desdobramento mais avançado e tático de comandos da questão q151. Aborda o framework arquitetônico de SaveData/LoadData.",
            "papoReto": "Como ensinado antes, \"Coleção\" guarda coisas temporariamente, mas ela *morre* se o cara deslogar ou fechar o app! O pessoal da obra corre esse risco. Pra contornar isso (o \"Offline Supremo\"), você pega a Coleção fantasma e invoca uma função monstruosa chamada \"SaveData\". Ela manda o sistema operacional Android ou iOS abrir um buraquinho no armazenamento físico do celular para colocar os dados dessa coleção. Assim, quando eles voltarem no dia seguinte (\"LoadData\"), as informações ressuscitam perfeitamente para eles usarem.",
            "respostaCerta": "Armazene os dados localmente (cache no hardware em si) usando SaveData em conjunto a uma coleção.",
            "puloDoGato": "Para ir além do cache em RAM e reter as Coleções contra quedas abruptas ou limpezas de tela em modo Offline, o método único oficial no construtor requer acionar a função Power Fx avançada \"SaveData\", que força os bytes da Collection serem dumpados na memória do Storage persistente do host Application do dispositivo local.",
            "cascasDeBanana": [
                "Não há caching Mágico/Espinhal automático: Em Canvas Apps padrão, conectar um datasource online \"cru\" para modo contínuo de conectividade intermitente quebra brutalmente. Você precisará codificar ativamente `SaveData` -> Coleção Interna -> `LoadData`.",
                "Excel local: Inatingível nativamente por arquitetura sem wrappers engessadíssimos alheios à dinâmica relacional pretendida de sincronia massiva."
            ],
            "dicaOuro": "Dados de cache local no PRÓPRIO CELULAR perdurando na falta de rede/reinciar o app = Coleção atrelada na função \"SaveData\"."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q154_topic1",
        "text": "Você cria um aplicativo de tela iterativo para coletar informações em formato de rascunhos para técnicos de emergência médica (ambulâncias). Você precisa fazer um cálculo cru e imediato na tela de \"Pressão Arterial\" para mostrar um resultado de pontuação temporária (um score provisório) para o usuário. Você precisa usar uma variável computada APENAS para a tela isolada de pressão arterial, descartando-a depois em favor da memória do celular. Dado o requerimento de contenção regional, qual função principais deve ser usada para definir essa variável?",
        "options": [
            "AtualizarContexto (UpdateContext)",
            "Definir (Set)",
            "Coletar (Collect)",
            "LimparColetar (ClearCollect)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta explora diretamente o conceito de encapsulamento e escopo (Globar vs Local) nas variáveis nativas em um Canvas App.",
            "papoReto": "Você não pode usar a velha \"Variável Set/Definir\" pra tudo no app, porque ela fica gigante e rodando o app inteiro. Para algo que só importa ali – exemplo: eu estou na Tela 1 fazendo o cálculo só da pontuação do enfermeiro rapidinho ali na caixa – crie uma Variável Local. A Variável Local morre quando você sai da tela! Para declarar Variáveis Locais, o nome da função que a Microsoft escolheu bem chato é \"UpdateContext\" (AtualizarContexto). Anote!",
            "respostaCerta": "AtualizarContexto (UpdateContext)",
            "puloDoGato": "Ao solicitar contenção explícita de Variável associada a \"APENAS uma tela (single-screen scope / Local Variable)\", o Power Apps restringe o universo unicamente para o uso da arquitetura \"UpdateContext\". Ela define as variáveis limitando rigorosamente seus limites estritos de compilação somente àquela janela pai.",
            "cascasDeBanana": [
                "Variável Set (Global): A armadilha principais da prova. Usar Set vazaria ou perpetuaria os traços (consumo de memória) da variável nas outras dezenas de telas não afetadas pelas anotações de pressão.",
                "Variáveis Coletar / ClearCollect: Cuidam intrinsecamente de arrays tabulares massivos para cache offline, e não cálculos matemáticos de variável unitárias focadas e fugazes no contexto da renderização local."
            ],
            "dicaOuro": "Criar / Editar variável LOCAL no aplicativo de tela (que afeta e vive APENAS PELAQUELA MESMA TELA) = UpdateContext (AtualizarContexto)."
        },
        "difficulty": "intermediario",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q155_topic1",
        "text": "Você precisa usar o Microsoft Power Fx para criar e manipular intensivamente fórmulas em controles lógicos em um aplicativo de tela corporativo e atrelado a componentes legados do Dataverse. Conceitualmente, debaixo do capô, em qual tipo fundamental de categoria de linguagem low-code repousa o cerne técnico do processamento deste Microsoft Power Fx?",
        "options": [
            "declarativa (declarative)",
            "compilada de máquina (compiled)",
            "orientada a objetos (object-oriented)",
            "interpretada estrita (interpreted procedural)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "O Power Fx não nasceu no vácuo, ele é fortemente derivado de um paradigma clássico. A Microsoft exige que o Functional Consultant compreenda seu DNA reativo.",
            "papoReto": "O Power Fx não compila num \"exe\" que fala com a memória da máquina. Ele é na verdade igualzinho a quem? Sim, ao Excel. Se você botar \"=A1+B1\", ele fica lá só \"declarado\" e o sistema recalcula na hora sempre que alguém mexer no \"B1\". Você apenas \"declara a sua vontade\" ou regra final e ele cuida do recálculo infinitamente lá do jeito dele. Isso define expressamente o formato de linguagens \"Declarativas\".",
            "respostaCerta": "declarativa (declarative)",
            "puloDoGato": "Como espelho do Excel-like, o Power Fx é regido como a principal linguagem \"Declarativa\" para automação da plataforma Power. Esse é o pilar que garante a Reatividade automática contínua aos vínculos de tela (um textfield respondendo a uma alteração em outra collection, sem código complexo avisando um listener), uma vez que vocé declara a fórmula alvo como comportamento desejado estático e o host executa sua manutenção dinamicamente.",
            "cascasDeBanana": [
                "Compilada / Orientada a objetos / Linguagem de marcação: Linguagens compiladas clássicas (C#) roteiam Assembly para o nível de base CPU em pipelines; o Power Fx jamais faz isso — o host engine do container o reescreve e otimiza sua execução delegada de alto nível."
            ],
            "dicaOuro": "Paradigma arquitetônico base do Power Fx (filiação às fórmulas interativas Excel-like) = Linguagem Declarativa (Declarative)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q156_topic1",
        "text": "Uma empresa usa o Microsoft Power BI e um aplicativo orientado por modelo (Model-driven app). Um usuário precisa adicionar um bloco (Tile) de um painel de controle do Power BI ao seu aplicativo orientado por modelo. A qual painel de controle você deve adicionar o bloco?",
        "options": [
            "Painel de controle de usuários do Microsoft Dynamics 365 (User Dashboard)",
            "Painel de controle do sistema do Dynamics 365 (System Dashboard)",
            "Painel do Microsoft Power BI de grupo (Power BI Group Dashboard)",
            "Área de trabalho de formulário orientado a modelo (Model Form Workspace)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão define os limites de embutimento de ativos analíticos (Power BI) no Dataverse para usuários de aplicativos Model-driven.",
            "papoReto": "Um aplicativo orientado a modelo tem dois tipos de Dashboards (Painéis): Os do \"Sistema\" (feitos pelo desenvolvedor da empresa, engessados) e os do \"Usuário\" (aquele que eu mesmo crio pra mim na hora e compartilho se quiser). A Microsoft restringiu a injeção de Blocos (Tiles) avulsos do Power BI estritamente aos Painéis de Usuário. Você não consegue abrir um Painel de Sistema no estúdio principais e socar um bloco visual de Power BI lá nativamente.",
            "respostaCerta": "Painel de controle de usuários do Microsoft Dynamics 365 (User Dashboard)",
            "puloDoGato": "Visualizações como Blocos (Tiles) nativos do Power BI em aplicativos baseados em modelo são unicamente suportados por renderização nos \"Painéis de Usuário\" (User Dashboards) – que são os painéis pessoais criados dentro da própria interface dinâmica front-end do Model-driven.",
            "cascasDeBanana": [
                "Painel de Controle de Sistema: Os System Dashboards não suportam injeção de conexões PBI Tile nativas geradas durante a experiência de usuário comum."
            ],
            "dicaOuro": "Adicionar BLOC0S soltos do Power BI em Model-Driven Apps = Restrito aos Painéis de Usuário (User Dashboard)."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q157_topic1",
        "text": "Uma empresa usa o Microsoft Dataverse. Os usuários geralmente precisam compartilhar registros unitários de uma mesma conta com diversos membros da equipe simultaneamente prestando atendimento. Você cria um \"Modelo de Equipe de Acesso\" (Access Team Template) para a tabela de conta visando começar a configurar um processo simplificado e enxuto de compartilhamento de registros. Na camada de design de formulários, o que você deve fazer agora para expor esse recurso?",
        "options": [
            "Adicione a sub-grade Usuários (Users subgrid) ao formulário da conta.",
            "Adicione a sub-grade expressa do \"Modelo de Equipe de Acesso\" ao formulário.",
            "Crie manualmente uma equipe de acesso no centro de administração para cada formulário.",
            "Selecione o Modelo de Equipe na guia Segurança no registro da conta para dispará-lo."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta testa a implantação na prática de um dos conceitos mais granulares de segurança no Dataverse: as \"Equipes de Acesso\".",
            "papoReto": "Compartilhar ficha por ficha num Call Center é pesado pro banco. A Microsoft criou o \"Access Team Template\" resolvendo isso: Você cadastra um template escondido, e lá na tela do cliente (Formulário), você coloca uma simples tabela secundária (Sub-grade) que aponta e lista os \"Usuários\". É mágica: todo operador que os vendedores adicionarem o nome ali ganha acesso automaticamente àquela ficha em tempo real com base no template! O pulo do gato? A subgrade NÃO SE CHAMA subgrade de modelo, ela é só uma \"subgrade de Usuários\" normal que você parametriza apontando para o seu modelo.",
            "respostaCerta": "Adicione a sub-grade Usuários (Users subgrid) ao formulário da conta.",
            "puloDoGato": "Após criar o Access Team Template (Modelo de Equipe de Acesso) e habilitar a Tabela, o passo obrigatório é modificar o Formulário Principal no Maker Portal inserindo uma Subgrade (Subgrid) convencional da entidade relacionada \"Users\", apenas setando as propriedades do controle dela para obedecerem e puxarem os membros atrelados ao Access Team Profile gravado no back-end.",
            "cascasDeBanana": [
                "Adicionar Sub-grade de \"Modelo de Equipe\" (Access Team Model subgrid): Os usuários costumam cair nessa casca. Não existe um controle visual com esse nome específico; o controle é apenas o elemento clássico da Tabela de \"Usuários\".",
                "Criar Equipes Manualmente: As `User-created Teams` tradicionais de donos funcionam muito diferente e não aproveitam o processo leve auto-destrutivo por registro inerente aos Templates."
            ],
            "dicaOuro": "Implementar e viabilizar na tela o compartilhamento via \"Modelo de Equipes de Acesso\" (Access Team Template) = Adicione a sub-grade da tabela \"Usuários\" no Formulário e atrele."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q158_topic1",
        "text": "Você precisa usar as equipes nativas do Microsoft Entra ID (Azure AD) para lidar e gerenciar o acesso e licenciamento de segurança dos usuários a um aplicativo do Microsoft Dataverse. Você precisa configurar as equipes de grupos do Entra ID no Dataverse e aplicar funções de segurança a elas. Operacionalmente, o que você deve focar em usar para mapear e vincular estritamente o registro grupo principais de equipe na nuvem no Dataverse?",
        "options": [
            "ID do Grupo do Microsoft Entra ID (Object/Group ID)",
            "Nome Nominal do Grupo do Microsoft Entra ID",
            "Sincronização por Unidade de Negócios principais",
            "Função de Segurança Base de Inserção"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Este item reforça como o Power Platform realiza o binding (ponte) de segurança matriz de federação com a nuvem mestra da Microsoft.",
            "papoReto": "A regra de arquitetura pra conectar Dataverse e Azure AD é igual a regra de banco de dados: nunca amarre pontes usando o \"Nome\" (text) das coisas, porque o administrador pode querer alterar o nome \"Grupo de Vendas Sul\" para \"Setor Sul Vendas\" e o vínculo todo iria quebrar. O sistema da Microsoft liga o grupo gigante de usuários do Active Directory à Equipe Dataverse usando o Identificador imutável, o carimbo de chave primária cravada, a \"ID do Grupo\" (Object ID) do Entra ID.",
            "respostaCerta": "ID do Grupo do Microsoft Entra ID (Object/Group ID)",
            "puloDoGato": "Ao aprovisionar uma `Group Team` (Aparelhamento de Segurança de Grupos entre Dataverse/Azure AD), o campo crucial que estabelece o cordão umbilical entre o Azure/EntraID e o Dataverse é o fornecimento do `Object ID do Microsoft Entra ID` (Group ID) em valores alfanuméricos hexadecimais puros.",
            "cascasDeBanana": [
                "Nome do Grupo: Insuficiente e banido como chave de roteamento de acesso, pois nomes são instáveis (mutáveis).",
                "Unidade de Negócios (Business Unit): Embora obrigatória como requisito sistêmico para pertencer a um locus de segurança temporal, não é o valor que mapeia e descobre a raiz do grupo AAD (ela é apenas o balde que vai recebê-los)."
            ],
            "dicaOuro": "Vincular segurança do Grupo do Entra ID / Microsoft 365 como Equipe massiva no Dataverse = Exige sempre a \"ID do Grupo\" (Object ID / Group ID)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q159_topic1",
        "text": "Você integra um novo usuário interno administrativo e de desenvolvimento júnior em um ambiente do Microsoft Dataverse. O usuário precisa de ferramentas para criar aplicativos, entidades e fluxos, mas não possui (nem deve possuir) as permissões críticas de segurança necessárias para excluí-los perigosamente do ecossistema. Sendo assim, você precisa atribuir uma função de segurança clássica ao usuário usando primordialmente o princípio de segurança militar de Confiança e Privilégio Mínimo. Qual função você deve atribuir ao usuário?",
        "options": [
            "Personalizador do Sistema (System Customizer)",
            "Administrador do Sistema (System Administrator)",
            "Usuário Básico (Basic User)",
            "Colaborador do Office (Office Collaborator / Creator)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Este cenário avalia o nível granular de empoderamento e arquitetura da fábrica do Dataverse, separando o dono restrito do \"peão de obra\".",
            "papoReto": "Sempre há a armadilha do acesso: O garoto precisa fazer Telas (Apps), Tabelas e Dashboards. Se você der a função de \"Administrador de Sistema\" (System Admin) pra ele - que aliás tem todos os poderes, você viola o Princípio do Privilégio Mínimo: ele fica com poderes divinos de deletar instâncias e bancos de dados! A função exata e moldada pro júnior construir sob medida o App apenas com o que o ambiente atual lhe oferece de matéria prima se chama \"Personalizador do Sistema\" (System Customizer).",
            "respostaCerta": "Personalizador do Sistema (System Customizer)",
            "puloDoGato": "A função `System Customizer` (Personalizador do Sistema) preenche exatamente a lacuna de requisitos para Criação (Maker): O usuário adquire 100% de primazia em ler/escrever artefatos de soluções, tabelas, apps e views estritamente criados ou possuídos por ELE. O Privilégio Mínimo protege registros inseridos por terceiros que ele não criou.",
            "cascasDeBanana": [
                "Administrador do Sistema: Teria poderes exacerbados (Privilégio Máximo).",
                "Colaborador do Office e Usuário Básico: Funções para usuários e clientes finais sem perfil de design de aplicativo de Maker ou System Customization. Ele precisaria das ferramentas de criação ativas (Personalizador) ou, equivalentemente no Maker, de \"Environment Maker\"."
            ],
            "dicaOuro": "Empregar o Princípio do Mínimo Privilégio para um usuário poder CRIAR telas/tabelas/apps livremente = Função \"Personalizador de Sistema\" (System Customizer)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q160_topic1",
        "text": "Você cria um aplicativo orientado por modelo (Model-driven) encorpado, vital para uma organização de saúde estruturada. A organização tem dois tipos essenciais (e hierárquicos) de perfis corporativos: \"atendimento médico de emergência\" e \"equipe de apoio administrativo ao paciente\". Cada perfil de usuário requer urgentemente que eles usem e percebam layouts totalmente diferentes de colunas no Formulário mesmo quando abrem no mesmo aplicativo, evitando poluição. Como arquiteto da solução, você cria um formulário base por tipo de usuário. O que você deve fazer para engessar que os usuários vejam apenas o seu layout de formulário?",
        "options": [
            "Habilite o formulário e atribua às Funções de Segurança (Security roles) dos respectivos usuários.",
            "Cofigure as propriedades de Compartilhar registros a depender do nível de acesso.",
            "Altere a matriz da Ordem dos Formulários (Form Order) para que a ordem exiba primeiro.",
            "Compartilhe cada formulário avulso com ID de Grupos de Segurança do Entra ID."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta recai sobre a base central de Controle de Experiência e Segurança em aplicativos baseados em Modelos do Dataverse.",
            "papoReto": "Um erro muito comum de quem vem do Excel para o Dataverse é achar que \"Formulário\" é a mesma coisa que \"Dados ou Listas\". Formulário é só uma lente da câmera. Eu posso ter cinco lentes diferentes apontando pro mesmo cliente. Se eu quero que o perfil do médico veja e pegue só a Lente (Formulário) \"A\", eu vou lá nas configurações do Formulário no Maker Portal e seleciono: \"Habilitar apenas para a Função de Segurança x (Security Role: Medical)\". Pronto. Os usuários de administração nunca sequer enxergam a Lente (Formulário) \"A\" na caixa de seleção.",
            "respostaCerta": "Habilite o formulário e atribua às Funções de Segurança (Security roles) dos respectivos usuários.",
            "puloDoGato": "No Application Lifecycle Management de Model-driven apps, Múltiplos formulários (Formulas form) são roteados e restringidos puramente atrelando permissões de uso de componente baseadas nas `Security Roles` (Funções de Segurança) do Microsoft Dataverse.",
            "cascasDeBanana": [
                "Compartilhar os Registros de Paciente: Trata de quem enxerga a linha preenchida viva no banco, MAS se ele abrisse ele ainda veria o design do formulário errado.",
                "Ordem do formulário: A ordem de precedência avisa quem abre primeiro por default, mas não restringe na UI seletora o usuário forçar alternância para um formulário proibido que estivesse disponível na lista.",
                "Grupos de Segurança do Entra ID: Você não pluga Formulários diretos a M365 Groups sem mapear uma Role no meio pro Dataverse entender."
            ],
            "dicaOuro": "Atrelar design, amarrar e esconder vistas de Layouts de Formulários diferentes baseado na função/tipo do usuário que faz login = Controle e atribua usando as \"Funções de Segurança\" (Security Roles)."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q161_topic1",
        "text": "Sua organização habilitou a ferramenta de pesquisa global do Microsoft Dataverse em seu ambiente do Power Platform para aprimorar as buscas. No entanto, os usuários relatam ao suporte que não conseguem encontrar determinados registros ou textos que deveriam estar acessíveis pela barra de pesquisa. Você precisa garantir que todas as tabelas e campos de texto relevantes sejam incluídos e varridos com sucesso no índice da Pesquisa do Dataverse. Existem duas ações fundamentais em conjunto que você precisa configurar para resolver isso. Quais são as duas ações conjuntas?",
        "options": [
            "1. Atualize e adicione as colunas na \"Vista de Busca Rápida\" (Quick Find View) da tabela E 2. Verifique se a Tabela está incluída nos componentes do próprio aplicativo Model-driven ativo.",
            "Habilite a Auditoria estrita em cada campo de texto E Habilite as Opções Avançadas de Pesquisa.",
            "Aumente o limite máximo de campos indexáveis no Centro de Administração para 2.000 (o padrão é 1.000) E reinicie o índice.",
            "Ative a pesquisa de relevância nas opções do Dataverse E delete a Vista de Busca Rápida."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta questão testa a habilidade de troubleshooting sobre um dos acidentes mais comuns ao construir busca em Model-driven Apps: o motor não varrer sua coluna nova.",
            "papoReto": "A pesquisa Global do Dataverse (Dataverse Search) não é um polvo mágico que lê o banco dados inteiro sozinho. Ela precisa de mapa! O motor só varre os campos que você jogou expressamente dentro do Modo de \"Busca/Localização Rápida\" (Quick Find View) de cada tabela. Além disso, se a sua Tabela X nem sequer faz parte do esqueleto do seu Aplicativo Baseado em Modelo (Model-Driven), o aplicativo simplesmente bloqueia a busca nela. Logo, o \"match\" perfeito é: cheque a view de busca rápida E garanta que a tabela existe no seu App!",
            "respostaCerta": "Atualize a Vista de Busca Rápida da tabela + Verifique se a Tabela está incluída nos componentes do aplicativo.",
            "puloDoGato": "A Pesquisa do Dataverse exige que a indexação obedeça estritamente ao componente \"Quick Find View (Modo de exibição de busca rápida)\" para saber \"o que olhar\". Contudo, as buscas executadas de dentro de um Model-Driven App sofrem um `scoping`: elas só varrem as tabelas que foram formalmente adicionadas ao \"Sitemap / Componentes\" do próprio aplicativo em execução.",
            "cascasDeBanana": [
                "Habilitar Auditoria nos campos: Auditoria guarda log de quem apagou ou editou dados (Security/Governance); não engatilha tabelas no motor de busca.",
                "Aumentar o limite para mais de 1000: O limite soft e hard de campos indexados ativamente no Dataverse Search de um ambiente inteiro está fixado em exatos 1.000 e não pode ser estourado nem via suporte."
            ],
            "dicaOuro": "Resolver o erro \"não acho meu campo na pesquisa Global\" = Coloque as colunas na \"Vista de Busca Rápida\" (Quick Find View) + Certifique-se que o componente existe no App."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q162_topic1",
        "text": "Você está atuando como engenheiro migrando dados de várias fontes e sistemas distintos para a estrutura unificada de uma solução do Microsoft Dataverse. Um dos requisitos fundamentais é garantir imperativamente que registros duplicados que conflitam informações sejam neutralizados e removidos no meio do caminho durante a importação em massa para o Dataverse, aplicando regras lógicas. Qual ferramenta da plataforma é desenhada nativamente como ETL para lidar pesadamente com isso?",
        "options": [
            "Fluxos de Dados (Dataflows)",
            "Fluxos da Nuvem (Power Automate Cloud Flows)",
            "Assistente de Importação de Dados Dinâmico (Data Import Wizard)",
            "Planilha do Excel conectada ativamente na web"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Quando falamos em migração em massa (ETL) e tratamento robusto de matriz de tabelas no Power Platform, existe apenas um Rei do pedaço.",
            "papoReto": "Você quer pegar dados velhos de vários lugares, lavar, tirar as impurezas (duplicatas) e carregar limpinho no Dataverse. Isso se chama ETL (Extract, Transform and Load). Quem é o trator do ETL no Power Platform? O \"Dataflow\" (Fluxo de Dados). Ele conta com a maravilhosa casca do Power Query, onde você tira as duplicatas apertando só um botão fácil, algo que no Power Automate comum envolveria uma dor de cabeça imensa pra fazer.",
            "respostaCerta": "Fluxos de Dados (Dataflows)",
            "puloDoGato": "A higienização profunda (Data Cleansing) como \"Remover Duplicatas\" e consolidação massiva simultânea envolvendo o Dataverse delega obrigatoriamente para a plataforma analítica `Dataflows` e sua engine do Power Query. O Power Automate foca em \"Trigger-Action\" unitários ou pequenos loops, não sendo de fato uma ferramenta madura para ETL e Profiling de arrays pesados.",
            "cascasDeBanana": [
                "Fluxos da Nuvem: Uma ferramenta pesada de Automação de Processos de Negócios (BPA), ele consegue conectar a apenas um sistema de origem por vez comodamente. Ele vai estourar limite varrendo e re-comparando 100.000 linhas pra buscar duplicações.",
                "Assistente de Importação: O assistente velhão do Dynamics e Dataverse funciona legal manualmente pra arquivos soltos, mas não é um conector ETL orquestrado e programável multi-fontes."
            ],
            "dicaOuro": "Importação massiva, transformação pesada de dados (ETL), remoção nativa de duplicidades e formatação via nuvem = \"Fluxos de Dados\" (Dataflows / Power Query)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q163_topic1",
        "text": "Uma empresa usa e confia ativamente na configuração nativa de Pesquisa do Microsoft Dataverse. Você recebe um ticket de suporte e precisa arquitetar e configurar a pesquisa no Backend para garantir que, de qualquer lugar, a coluna \"Número da Conta\" sempre mostre os registros quando os usuários digitarem esse campo na barra de pesquisa global superior. Onde exatamente no Maker Portal você deve mexer para vincular essa coluna de texto na malha de pesquisa da tabela Conta?",
        "options": [
            "Modo de Exibição de Localização Rápida (Quick Find View)",
            "Modo de Exibição de Pesquisa Avançada (Advanced Find View)",
            "Modo de Exibição Pública Padrão (Default Public View)",
            "Índice de Pesquisa Geral do Dataverse (Dataverse Search Index)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta caminha junto com a lógica explicada na q161. A base de onde nasce um campo indexável.",
            "papoReto": "Quer que a lupa lá de cima consiga \"ler\" e buscar dados de um campo novo? Vá na Tabela, entre em \"Visualizações\" (Views), abra a \"Visualização de Busca Rápida\" e arraste a sua coluna de nome ou número pra lá, e ative-a como \"Find Column\" (Coluna que se localiza). Na mesma hora o motor se liga e passa a rastreá-la indexando-a.",
            "respostaCerta": "Modo de Exibição de Localização Rápida (Quick Find View)",
            "puloDoGato": "Historicamente e mesmo na presença da nova Dataverse Search global, o construtor lógico base que demarca quais Colunas Físicas uma Tabela autoriza expor em buscas globais de texto aberto (Wildcard/Match) estão estritamente contidos dento do `Quick Find View`. Adicionar campos na regra \"Add Find Columns\" dessa View atualiza e destrava a busca no Dataverse no backend.",
            "cascasDeBanana": [
                "Modo de exibição Avançado: Trata-se da experiência legada onde usuários geram query builder visual. Não dita indexação.",
                "Exibição Pública: Dita apenas o layout e colunas resultantes (\"o que você enxerga\"), mas não \"em que campo o motor entra para procurar um texto\"",
                "O Índice do Dataverse (nas configurações): O Admin aciona QUAIS TABELAS estão nele, mas você não tem lá botão detalhado para marcar \"a coluna B da tabela Y\". Isso ainda se faz dentro do view específico."
            ],
            "dicaOuro": "Quero que minha coluna Nova (ex: CPF) seja \"Encontrável\" quando o usuário a digitar na pesquisa principal = Habilite a coluna no \"Modo de Exibição de Localização Rápida\" (Quick Find View)."
        },
        "difficulty": "intermediario",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q164_topic1",
        "text": "Uma empresa usa um formulário avulso em um site simples (não integrado ao Power Pages) coletando Nome e Sobrenome dos clientes em potencial e cravando num arquivo .csv bruto diariamente e o salvando dentro da nuvem no OneDrive. Os novos prospectos adicionados a esse CSV de ontem devem ser carregados para o sistema Microsoft Dataverse diariamente. Há um detalhe perigoso: o CSV só vem com 2 colunas cruas (\"Nome\" e \"Sobrenome\"). Não há datas nem chaves unificadas. Se você realizar uma rotina automática diária com um Fluxo de Dados padrão, os mesmos clientes de dias anteriores entrarão dezenas de vezes como duplicados no Dataverse, pois o CSV acumula. Nesta situação amadora de falta de chaves sem update de terceiros, como você salva essa empresa?",
        "options": [
            "Edite o arquivo todos os dias isoladamente para remover as pessoas que você sabe que já subiram para o Dataverse, e depois rode manualmente a inserção sem o risco.",
            "Apenas ative a aba \"Atualização Incremental\" e deixe o Dataflow se virar com as novidades.",
            "Configure um Fluxo de Dados Automático Diário e o motor apaga duplicações de nomes por natureza.",
            "Adicione uma chave de \"Chave Alternativa principais\" na coluna de Nome, isso fará a API recusar instantaneamente qualquer repetido."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um estudo de caso em que a prova quer ver se você entende as limitações físicas de matemática (Chaves vs Atualizações Incrementais).",
            "papoReto": "Atenção pra Pegadinha Brutal de cenários reais! A Microsoft sempre fala o quão os \"Dataflows\" são maravilhosos (e ensinamos na q162). A galera vai clicar achando que \"Atualização Incremental via Dataflow\" vai resolver a vida. Errado! Uma \"Atualização Incremental\" por motor (ETL) exige inegociavelmente OBRIGATORIAMENTE que o seu banco original (o CSV) te ofereça uma coluna informando \"Modificado na Data X\". Se o arquivo Excel ou CSV não tem data ou linha temporal rastreável, o sistema não sabe o que é novo e puxaria os repetidos pra empilhar. O Dataverse ficaria padrão. Solução ruim e sofrida mas correta? Fazer o trabalho analógico no Excel primeiro limpando aquilo.",
            "respostaCerta": "Edite o arquivo todos os dias para remover clientes em potencial que já estão no Dataverse e, a seguir, os atualize manualmente.",
            "puloDoGato": "O processo massivo de \"Incremental Refresh / Atualização Incremental\" no Power Query/Dataflow é dependente matemático de que a fonte de origem possua um atributo carimbador baseado em série temporal contínua (`DateTime`). Quando o cenário avisa que o arquivo \".csv\" retém unicamente `String Name` / `String Surname` — impossibilitando o tracking de tempo de inserção -, arquitetonicamente a atualização inteligente cai, cedendo lugar à intervenção e corte manual offline.",
            "cascasDeBanana": [
                "Atualização Incremental: A pegadinha suprema, não existem identificadores confiáveis para engatilhá-la!",
                "Chave Alternativa no Nome: Pelo amor de Deus não! Nomes se repetem. Se você criar uma Alternarive Key engessando apenas o nome, num país inteiro você só conseguiria cadastrar UM \"João Silva\" e o segundo cliente real perderia acesso por erro de duplicate key index."
            ],
            "dicaOuro": "Sem coluna de DATAS em formato TimeStamp e sem IDs definidos em um CSV padrão? É matematicamente indisponível fazer \"Atualização Incremental\"! O tratamento terá que ser extração manual cortando duplicatas base ou gerar a coluna."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q165_topic1",
        "text": "Você precisa agendar a importação massiva automática e inteligente de dados formatados para tabelões o Microsoft Dataverse. Sua necessidade arquitetônica é alta: você deve definir um Schedule (agendamento com dias marcados) estrito na semana em que essas tabelas imensas serão inseridas e requer garantir no projeto uma feature built-in (de fábrica) para que sua equipe receba alertas e notificações automáticas no seu e-mail caso algo dê errado e as linhas falhem na gravação. Qual ferramenta da família atende perfeitamente todos esses itens juntos da forma mais recomendada?",
        "options": [
            "Fluxo de Dados (Dataflow)",
            "Fluxo de Nuvem Programado (Scheduled Cloud Flow)",
            "Fluxo de Nuvem Automatizado em disparo (Automated Cloud Flow)",
            "Assistente OBO de Importação de Dados do Dynamics 365"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Avalia o escopo profundo e as vantagens padr�o (de fábrica) envolvidas no licenciamento e governança de Dataflows vs Automate.",
            "papoReto": "Um Power Automate (Fluxo Programado) consegue fazer o agendamento de subir coisas? Sim. Ele avisa por e-mail se der erro? Sim, MAS você teria que botar peças e \"gambiarras\" (\"Catch-blocks\") para fazer o robô caçar a mensagem de erro da caixa e te mandar um e-mail do zero. Já O Dataflow! Puxa, é coisa fina! Ele já é um ETL corporativo imenso, agendável perfeitamente, que não apenas carrega os dados pro Dataverse como POSSUI UMA CAXINHA NAS CONFIGURAÇÕES (\"Enviar avisa em caso de Falha\"). Clicou nela, o sistema fará todo o relato analítico no seu e-mail automático. Dataflow leva o troféu.",
            "respostaCerta": "Fluxo de Dados (Dataflow)",
            "puloDoGato": "A plataforma `Dataflows` carrega funcionalidades NATIVAS (padr�o - Built-in) orquestradas no Workspace Management para disparo de e-mails em cima de Falha de Refresh e Success Notification (Refresh settings). Desenvolver isso com o engine secundário de repetições (Cloud Flow) impõe Overhead de desenvolvimento (construir tratamentos de erro Condition / Scope Action em blocos de Catch) no Power Automate para atingir o mesmíssimo resultado.",
            "cascasDeBanana": [
                "Fluxos de Nuvem (Agendados): Precisariam construir programaticamente na unha o seu tratador de resiliência e envio dos detalhes de falha de parsing.",
                "Fluxos Automatizados: Só rodam mediante gatilho vivo (ex: Se criar algo -> Faça assado) e não obedecem agendamentos diários ou de cronograma."
            ],
            "dicaOuro": "Agendamento corporativo em massa com e-mail NATIVO automático disparado avisando dos logs de \"falha\" de carregamento = Solução \"Dataflow\" (Fluxos de Dados)!"
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q166_topic1",
        "text": "Uma empresa que ministra cursos de treinamento usa o Microsoft Dataverse. A empresa quer ter o poder de registrar \"Matrículas\" de alunos e se houve \"Presença\" neles. A empresa configurou duas tabelas primárias: Tabela de \"Contatos\" e Tabela de \"Cursos\". Hoje um aluno pode fazer vários cursos, e um curso tem vários alunos. Você precisa criar uma relação correta entre eles para suportar a marcação da presença. Qual tipo de relação você deve criar?",
        "options": [
            "Duas relações 1:N interligando em uma Tabela extra (Interseção), uma com Contato como origem e outra com Curso como origem.",
            "Uma única relação N:N (Muitos-para-Muitos) direta interligando apenas Contatos e Cursos.",
            "Uma relação 1:N tendo Contato como tabela de origem e Curso como tabela de destino.",
            "Uma relação 1:N tendo Curso como tabela de origem e Contato como tabela de destino."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta ataca a limitação clássica arquitetônica das relações \"N:N nativas\" no Dataverse.",
            "papoReto": "Um aluno faz vários cursos (1:N) e um curso tem vários alunos (1:N). O óbvio seria clicar no botão mágico e fazer um \"Muitos para Muitos (N:N)\" pra ligá-los, certo? Errado! A relação N:N nativa da Microsoft apenas \"gruda\" os painéis escondidos no banco e NÃO DEIXA você criar colunas adicionais no meio da união. Se não tem coluna, como você vai criar o campo Checkbox de \"Presença na Aula\"? Para isso, a gente quebra o N:N nativo e cria uma Terceira Tabela Customizada (chamada Participantes ou Interseção). Aí fazemos duas relações 1:N normais apontando do Pai pro Filho.",
            "respostaCerta": "Duas relações 1:N interligando em uma Tabela extra (Interseção), uma com Contato como origem e outra com Curso como origem.",
            "puloDoGato": "Sempre que o cenário falar sobre \"Relacionar Tabelas de ambos os lados MAS eu preciso guardar Informação Extra sobre o Vínculo (Presença, Nota, Status)\", você descarta instantaneamente o tipo de relação \"ManyToMany nativo (N:N)\" e seleciona a criação algoritmica de uma \"Tabela de Interseção Customizada\" com dois `OneToMany (1:N)` convergindo nela.",
            "cascasDeBanana": [
                "Relação N:N direta: Não permite adicionar campos ao esquema de interseção \"Under the hood\" (debaixo dos panos). E consequentemente você perderia a capacidade de registrar a presença solicitada pelo cliente."
            ],
            "dicaOuro": "Relação \"Muitos para Muitos\" precisando salvar \"Campos a mais\" sobre aquela união = Crie Tabela de Interseção Customizada sustentada por DUAS relações 1:N apontando pra ela."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q167_topic1",
        "text": "Você gerencia uma instância do Microsoft Dataverse para uma grande empresa corporativa. O sistema contém uma relação de arquitetura um-para-muitos (1:N) entre uma tabela de Professores e uma tabela de Turmas. Você tem uma regra estrita: se o registro principais de um Professor for acidentalmente (ou propositalmente) excluído, essa ordem de exclusão NÃO deverá exercer absolutamente nenhum impacto (\"excluir ou avisar\") sobre os respectivos registros da Turma relacionada. A turma deve apenas ficar orfã sem professor em silêncio. Qual comportamento de cascateamento de relação você deve usar no Dataverse?",
        "options": [
            "Referencial, Remover Link (Referential, Remove Link)",
            "Cascatear Tudo (Cascade All)",
            "Parental absoluto (Parental)",
            "Referencial, Restringir Exclusão (Referential, Restrict Delete)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta foca em Integridade Referencial Base de dados Relacional via Dataverse Configurations.",
            "papoReto": "O Dataverse trabalha em cascata. O Pai tem a Turma como Filho. Quer que, se matar o Pai, a Turma morre junto? Cascatear Tudo (Parental). Quer que, se tentar matar o Pai, o sistema te DÊ UM ERRO PROIBINDO porque o filho ainda tá vivo? Referencial Restringir Exclusão. Quer apenas passar a faca no Pai e a turma que lute e sobreviva, apenas cortando o laço numérico que os unia lá nas configurações? \"Referencial, Remover Link\".",
            "respostaCerta": "Referencial, Remover Link (Referential, Remove Link)",
            "puloDoGato": "O Behavior de relacionamento `Referential, Remove Link` garante que todas as referências cruzadas no metadado filho (`Lookup column`) apontando para aquele pai sejam setadas como Null (\"Removendo o Link\"), mas permitindo a exclusão sumária do Pai independentemente e mantendo o registro Filho completamente intacto na outra tabela.",
            "cascasDeBanana": [
                "Restringir Exclusão (Restrict Delete): Travaria a solicitação do usuário, ele tomaria um Popup de Erro e nem conseguiria deletar o Professor.",
                "Parental ou Cascatear Tudo: Seria desastroso, pois excluiria o Professor E enviaria o comando \"Delete\" para excluir a Turma inteira do banco de dados."
            ],
            "dicaOuro": "Excluir o Pai sutilmente e deixar o Filho viver sozinho, apenas solto / orfão (\"remover o laço e reter dados\") = Referencial, Remover Link."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q168_topic1",
        "text": "Você projeta um esquema para uma nova solução limpa do Microsoft Dataverse. Uma empresa de logística planeja usar a solução base para armazenar centenas de Produtos e as quantidades brutas correspondentes de estoque daquele produto em diferentes pontos de venda físicos pelo país. A regra de negócios principal diz que: sempre que a matriz excluir da lista um Produto principal, TODA a rede de dados de centenas de filiais com informações ativas sobre o estoque do produto precisarão ser excluídas violenta e rapidamente em conjunto. Direto nos metadados, o que você deve fazer para atender e não gargalar o ambiente?",
        "options": [
            "Configure nativamente um comportamento de \"Relação em Cascata\" (Cascade All) na tabela primária.",
            "Configure um Fluxo de Automação de Nuvem (Power Automate) diário para excluir linhas de filhos orfãos.",
            "Configure um comportamento de relação \"Remover Link\" (Remove Link) na tabela e instale uma auditoria.",
            "Configure uma Regra de Negócios (Business Rule) na UI para forçar exclusões rápidas síncronas."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um contraponto exato à reflexão ensinada na questão q167, para fixar os comportamentos arquitetônicos de Cascade.",
            "papoReto": "Quer excluir a árvore e jogar todos os galhos, folhas e raízes fora de uma única vez em milionésimos de segundo e sem precisar programar robô externo pra isso? Basta ir na Aba Relacionamento, clicar e configurar o Comportamento em Cascata (Cascade All / Parental). Morreu o Pai (Produto), morre toda a linhagem de estoque filha em todas as lojas simultaneamente na camada de banco de dados.",
            "respostaCerta": "Configure nativamente um comportamento de \"Relação em Cascata\" (Cascade All) na tabela primária.",
            "puloDoGato": "A instrução relacional `Cascade Delete / Cascade All` resolve imperativamente a deleção rápida de tabelas vinculadas em subnível sem nenhum overhead ou necessidade de Power Automate externo. A operação ocorre no âmago do SQL de arquitetura do Dataverse nativamente.",
            "cascasDeBanana": [
                "Fluxo do Power Automate: Possível? Sim. Correto para a prova e arquitetura? Não! Gastaria limite de requisição da API (API Calls) excessivas e poderia levar horas engasgado num loop para um grande ERP excluir item a item no Backend.",
                "Regras de Negócios: Configurações de interface (Business Rule) trabalham na aba visual de um formulário alterando abas, campos ocultos e caixas... Elas NÃO possuem qualquer função sistêmica para excluir dados do banco."
            ],
            "dicaOuro": "Excluir o banco matriz (Tabela Pai) E arrancar imediatamente todos os registros Filhos dele sem uso de código = \"Exclusão Direcional em Cascata\" (Cascade All / Deleção em Cascata)."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q169_topic1",
        "text": "Uma agência de turismo tem uma solução que retém os dados dos \"Clientes\". A solução também concentra \"Apostas de Vendas\", \"Oportunidades\" e \"Pedidos confirmados\" vinculados aos perfis dos mesmos clientes. Um profissional sênior de administração de vendas de contas VIPs e todos os seus 200 clientes está se aposentando e saindo da empresa. Você precisa ir na lista e \"reatribuir\" com cliks apenas o cliente principais dele. Consequentemente, toda a rede de pedidos dos respectivos registros atrelado SOMENTE àquele mesmo agente de vendas deve ser movida para o membro da equipe herdeiro. No entanto, se houver um pedido daquele mesmo VIP no sistema, mas de propriedade de \"outros funcionários\", eles NÃO devem ser movidos. Qual regra restritiva profunda em cascata você pode usar no sistema para essa refinada finalidade?",
        "options": [
            "Propriedade do usuário em cascata (Cascade User-Owned / Cascatear Pertencentes ao Usuário).",
            "Cascatear Tudo (Cascade All).",
            "Cascatear Apenas Ativos (Cascade Active).",
            "Cascatear Nenhum (Cascade None / Não cascatear)."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Cascata avançada foca não apenas no ato de excluir registros, mas principalmente em reatribuir Donos (Ownership Assigning) corporativamente.",
            "papoReto": "A regra de Repasse de Carteiras de Clientes! Quando você transfere uma conta \"Nike\" pro Zézinho, todos os pedidos associados lá embaixo à Nike também teriam o próprio dono alterado pra \"Zézinho\" se fosse um \"Cascatear Tudo\" padrão. E se o Joãozinho da Contabilidade também era dono exclusivo da Ordem F no meio do pacote da Nike? Iria bagunçar e arrancar o acesso do Joãozinho! Então a Microsoft tem o poder cirúrgico: a Cascade User-Owned. Ela diz pro Dataverse = \"Apenas passe os subitens da Nike que PERTENCIAM ESPECIFICAMENTE ao cara que saiu da empresa (o antigo dono da Conta Nike)\". Fantástico!",
            "respostaCerta": "Propriedade do usuário em cascata (Cascade User-Owned / Cascatear Pertencentes ao Usuário).",
            "puloDoGato": "A restrição relacional de roteamento de dono `Cascade User-Owned` é o divisor de águas arquitetônico para Team Reparenting no Dynamics Sales. Ela impõe que a operação de `Assign (Reatribuir)` em cascata checará a integridade de dono Filho a Filho: \"Este registro filho era do antigo dono do registro pai que acabei de mover? Se sim, mudo ele junto. Se esse filho pertence à outra ID da empresa, não faço absolutamente nada com ele.\".",
            "cascasDeBanana": [
                "Cascatear Todos: Ignoraria brutalmente e invadiria esferas cruzadas. Ex: João também cuidava de parte dos pedidos deste VIP. O sistema arrancaria os pedidos de João e daria para quem receber.",
                "Cascatear Nenhum: Moveria o dono do VIP e os pedidos continuariam com o funcionário já inativo na base impedindo edição do próprio herdeiro."
            ],
            "dicaOuro": "Reatribuir cliente e repassar para ele e mover \"APENAS os subregistros/pedidos daquele antigo Ex-Dono especificamente\" = Propriedade do usuário em cascata (Cascade User-Owned / Cascatear Pertencentes ao Usuário)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q170_topic1",
        "text": "Uma agência massiva de planejamento de eventos corporativos deseja captar informações estruturadas de metadados para cada evento ativo nas feiras de negócio. As informações capturadas no banco de eventos precisam compulsoriamente incluir e modelar o seguinte cenário: 1. Os centenas de contatos avulsos que participam de cada evento; 2. \"Qual o tipo/categoria momentânea desse contato presencial (Ex: cliente pagante, atacadista, fornecedor de comida ou staff do marketing)\". Você precisa criar e desenhar a arquitetura de relação perfeita entre os registros da solução do Dataverse para captar as informações suprindo as limitações padrão. O que você DEVE implementar para resolver o dilema lógico de arquitetura relacional?",
        "options": [
            "Tabela de Interseção Personalizada gerida de perto por duas Relações ativas de 1:N com tabelas fins",
            "Uma única Relação N:N (Muitos-para-Muitos) direta, limpa e nativa do construtor de ambiente",
            "Coluna de Campo de Escolha Multidimensional global com uma relação ativa em modelo de N:1",
            "Tabela de Pesquisa Simples isolada gerida com apenas uma relação de 1:N matriz sem pontes extras"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Reiteração do mesmo paradigma em formato de Case Study complexo (mesmo desafio da q166, modelado por um ângulo diferente, clássico da prova).",
            "papoReto": "Assim como o campo de \"Presença na aula\", a agência quer categorizar o contato lá com um campo extra que não cabe em Cursos e não cabe em Pessoa (categoria da feira na hora). Então não adianta clicar em \"Gerar N:N\": O painel oculto Many-to-Many nativo do Dataverse não permite acoplar botões ou textos na junção das pontas! A única saída canônica de projeto é: quebre manualmente e use a chamada \"Custom Intersection Table\" (Entidade Cruzada Manual). A Entidade da Tabela Extra segura campos (text field para Categoria de Staff) e conecta-se via dois bracinhos One-to-Many (1:N) aos painéis reais.",
            "respostaCerta": "Tabela de Interseção Personalizada gerida de perto por duas Relações ativas de 1:N com tabelas fins",
            "puloDoGato": "Relacionamento N:N nativo no Power Apps armazena dados unicamente e puramente de forma oculta nos bancos SQL vinculando apenas os par de GUIds (ID A = ID B). Captar descritores meta-associados (\"Status da presença no evento\", \"Custo do Lanche daquele membro no Evento\", \"Categoria avulsa no Evento\") exige abandonar N:N nativo, e instituir explicitamente a arquitetura de uma `Tabela de Interseção Personalizada e roteada por duas referências 1:N`.",
            "cascasDeBanana": [
                "Relação N:N direta: Limitaria apenas o \"Vínculo Físico\", mas negaria o espaço e armazenamento pra pergunta chave do case na nuvem: o campo de registro do tipo da categoria daquele evento."
            ],
            "dicaOuro": "Interconectar Vários pra Vários AND (e) Adicionar Campo / Descrítivo Personalizado extra sobre a Relação = Tabela de Interseção Personalizada gerida por duas 1:N (Custom Intersection Table + Two 1:N)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q171_topic1",
        "text": "Uma empresa que usa o Microsoft Dataverse realiza eventos regulares. A empresa configura tabelas de \"Contatos\" e de \"Eventos\". Diferente de sistemas acadêmicos complexos com controles de presença, o único requisito cru desta empresa é simplesmente \"poder gravar e relacionar livremente quem participou de qual evento\". Não haverá captura de dados extras sobre o dia do evento. Qual tipo de relação de banco rápida você deve criar no sistema nativo?",
        "options": [
            "Uma relação N:N (Muitos para Muitos) direta entre o Contato e o Evento.",
            "Duas relações 1:N cruzando uma tabela de interseção customizada.",
            "Uma relação 1:N tendo o Contato como a tabela Pai e o Evento como Filho.",
            "Uma relação 1:N tendo o Evento como a tabela pai e o Contato como Filho."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Esta pergunta contrapõe diretamente e propositalmente o cenário complexo ensinado nas questões q166 e q170.",
            "papoReto": "Lembra que falamos para nunca usar o N:N nativo SE você precisasse adicionar campos como \"presença\" ou \"nota fiscal de evento\"? Pois bem, preste atenção na leitura: esta empresa NÃO PRECISA disso. Ela só quer vincular \"Fulano foi no Evento A\" e deu. Quando o requisito de negócio for simples assim, criar a Tabela Personalizada do zero é perda de tempo e quebra de produtividade. Crie exatamente usar a relação \"N:N Nato\" que o construtor te oferece em três cliques!",
            "respostaCerta": "Uma relação N:N (Muitos para Muitos) direta entre o Contato e o Evento.",
            "puloDoGato": "A relação N:N resolve perfeitamente a vinculação mútua (onde 1 contato atende vários eventos e 1 evento tem vários contatos) quando NÃO há a obrigação restritiva funcional de guardar metadados customizados adicionais (custom fields) sobre aquele elo.",
            "cascasDeBanana": [
                "Tabela de Interseção: Só seria gabarito se o caso falasse explicitamente em \"guardar a categoria do contato\", \"valor que ele gastou no evento\", \"status da inscrição\", etc.",
                "Relação 1:N: Se tentasse apenas 1:N, amarraria que um Contato só pode frequentar estritamente 1 único evento na sua vida, o que quebra a lógica de negócio."
            ],
            "dicaOuro": "Vincular vários A para vários B (Muitos pra Muitos) SEM campos extra requeridos no meio = Botão padrão do \"N:N\" direto no Dataverse."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q172_topic1",
        "text": "Você está desenvolvendo um aplicativo orientado por modelo (Model-driven app). Os usuários reclamam que toda vez precisam ficar pulando de tela em tela para consultar ou interagir com registros paralelos que não pertencem à tabela primária atual na tela. Você deve melhorar a UI adicionando componentes que listem as informações de forma centralizada. Qual componente de interface você adiciona direto no Formulário para permitir que um usuário EDITE massivamente dados da outra Tabela filha? E qual componente você usa se a intenção for estritamente de VISUALIZAR rapidamente (somente leitura) informações de uma tabela pai paralela conectada?",
        "options": [
            "Editar os filhos: Subgrade (Subgrid) | Visualizar o pai: Formulário de Visualização Rápida (Quick View Form)",
            "Editar os filhos: Painel de Referência (Reference Panel) | Visualizar o pai: Iframe",
            "Editar os filhos: Quick Create Form | Visualizar o pai: Subgrade Leitura",
            "Editar os filhos: Fluxo de Processo | Visualizar o pai: Gráfico Embutido"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Form design components and UX no Model-driven.",
            "papoReto": "Regra da vida de Model-driven: Eu estou na ficha da Empresa Apple. Quero mostrar na própria tela todos os 50 funcionários (\"Filhos\") que trabalham lá com a opção de criar novos ali mesmo? O nome disso é \"Subgrade\" (Subgrid). No campo oposto, imagine que eu estou na tela de um simples Ingresso. Quero exibir lá no canto sem sair da página qual é a cor e título do \"Evento Pai\" daquele engresso? Eu quero só dar uma espiadela nas colunas dele, sem mexer. É um \"Formulário de Visualização Rápida\" (Quick View form) embutido ali mesmo!",
            "respostaCerta": "Editar os filhos: Subgrade (Subgrid) | Visualizar o pai: Formulário de Visualização Rápida (Quick View Form)",
            "puloDoGato": "A arquitetura UI de um Form fornece as `Subgrids` essencialmente para Listagem Ativa com capacidade de CRUD (edição em linha) para o arranjo 1:N de registros infantes. Oponente e interligado, o `Quick View form control` é desenhado para sugar colunas puramente em Read-Only visual vindas da tabela Pai N:1 apontada pelo Lookup column atual da tela.",
            "cascasDeBanana": [
                "Painéis de Referência e Formulários de Criação Rápida (Quick Create): O Quick Create serve para dropar uma janela lateral pop-up para Inserção limpa, não é um renderizador perpétuo estático na face em si do formulário atual para \"espiar\" listas."
            ],
            "dicaOuro": "Lista de edição com inserções inline de Filhos = Subgrid. | Célula estática de espiada de leitura no parente LookUp = Quick View Form."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q173_topic1",
        "text": "Uma empresa usa um Canvas App (Aplicativo de Tela) para gerenciar inventários e insumos delicados. A equipe de segurança da informação envia o seguinte requisito rigoroso de negócio: \"Devemos assegurar corporativamente que este App fique ativo e disponível SOMENTE para certos funcionários cirúrgicos aprovados, e somente quando eles estiverem fisicamente presentes e conectados dentro de uma região de fábrica ou IP específicos.\" Qual barreira arquitetônica nativa da Microsoft você deve invocar baseada no Entra ID para garantir e delimitar rigidamente onde esse usuário poderá acessar o aplicativo?",
        "options": [
            "Política de Acesso Condicional do Azure (Azure AD Conditional Access Policy)",
            "Grupo de Segurança do Office 365 (M365 Security Group)",
            "Funções de Segurança de Nível Ocultas (Column-level Security)",
            "Política de Conformidade de Auditoria (Compliance Policy Center)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Um caso massivo de Governança corporativa avançada englobada no syllabus da PL-200. Boundary controls and zero-trust.",
            "papoReto": "A pergunta foi incisiva: controle de acesso por REGIÃO (geografia). O Dataverse em si não sabe rastrear GPS nem IP da sua rede wi-fi caseira para trancar a porta. O policial na porta que checa de onde do mundo você logou e o aparelho que usou é o glorioso Entra ID (Azure AD). O recurso monstro que o Azure tem pra chutar para fora gente de fora da geografia corporativa é a Política de Acesso Condicional (Conditional Access)!",
            "respostaCerta": "Política de Acesso Condicional do Azure (Azure AD Conditional Access Policy)",
            "puloDoGato": "Locational bounding limits (Geo-fencing) ou Network Access Limitations, e MFA requirements para ecossistemas do Power Platform e Dynamics residem imperativamente sob o domínio superior das políticas do `Microsoft Entra ID Conditional Access`. Segurança no Dataverse é apenas \"role-based table access\"; quem limita a rede inicial é a nuvem matriz Entra ID.",
            "cascasDeBanana": [
                "Regras de Conformidade (Compliance Policy): Agem avaliando retenção de dados e Data Loss Prevention (DLP), por exemplo, impedindo envio de tweets com nome do cliente. Não lidam com restrição e gatekeeping the Logins por localidade.",
                "Security Groups: Listam os usuários autorizados a ver a tela (\"Quem é o cara\"), mas não proíbem acessos geográficos de regiões perigosas (\"De onde ele está acessando\")."
            ],
            "dicaOuro": "Segurança extrema limitando login por \"IP, Localização Física (Região) ou exigência de MFA\" para acessar o App = Azure AD Conditional Access (Política de Acesso Condicional)."
        },
        "difficulty": "iniciante",
        "domain": "Aplicativos do Microsoft Power"
    },
    {
        "id": "q174_topic1",
        "text": "Você está no papel de administrador liderando a governança em banco de dados Microsoft. Seus diretores exigem que você implemente, copie, e lide com a liberação de dezenas de novos \"Ambientes\" (Environments) do Dataverse diariamente, e crie as chaves de instâncias. Qual ferramenta e portal nativo você deve primordialmente usar e manter aberto para comandar esse processo massivo diário?",
        "options": [
            "Centro de administração da Power Platform (Power Platform Admin Center - PPAC)",
            "Centro de Segurança e Auditoria do Dynamics 365 Portal",
            "Painel principais do Microsoft Entra ID",
            "Centro de conformidade do Microsoft 365 (Microsoft 365 Admin Center)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Controle de topologia de instâncias (Environments e Databases) e portas administrativas para a prova PL-200.",
            "papoReto": "Onde o Dono do Power Apps mora? No \"Power Platform Admin Center\" (PPAC). Lá não se cria tela, lá você é o Deus do servidor da sua empresa. Você gasta os gigabytes da conta criando Ambientes (Sandbox, Produção, Trial), fazendo backup com restore, liberando o Dataverse de dentro deles e copiando bancos de dados de um pro outro.",
            "respostaCerta": "Centro de administração da Power Platform (Power Platform Admin Center)",
            "puloDoGato": "O Lifecycle completo de Governança de Infraestrutura (Criação de Enviroment, Backups, Data loss prevention policies, Environment Settings e Provisionamento do Storage do Base do Database Dataverse) é concentrado fundamental e irrestritamente apenas no Power Platform Admin Center (admin.powerplatform.microsoft.com).",
            "cascasDeBanana": [
                "Microsoft 365 Admin Center: Concentra licenciamento diário (comprar licenças \"E3/E5\" e dar o Office pro usuário) mas e-mails e SharePoint não possuem os botões para forçar Backups e criar os Ambientes Sandbox arquiteturais da Power Platform."
            ],
            "dicaOuro": "Criar \"Amibentes\" de base de dados, restaurar e limpar Sandbox = Centro de Administração do Power Platform (PPAC)."
        },
        "difficulty": "avancado",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q175_topic1",
        "text": "Você tem um colaborador júnior tentando aprender a usar a plataforma e integrar novos processos em um ambiente do Microsoft Dataverse com banco ativo padrão. Você precisa liberar para ele a honra de conseguir unicamente poder \"criar um canvas app do zero na nuvem\" dentro do espaço delimitado sem causar estrago na governança. O painel dele de \"Criar App\" atualmente diz sem permissão, contendo erros. Qual função de segurança canônica clássica na hierarquia do Dataverse supre estritamente essa necessidade para usuários desenvolvedores bases?",
        "options": [
            "Criador de Ambiente (Environment Maker)",
            "Usuário Básico (Basic User)",
            "Personalizador de Sistema Global (System Customizer)",
            "Colaborador Nível Master (Maker-Owner)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Diferencia a função tática de Maker puro (q175) do poder aprofundado do Customizer clássico arquitetônico (q159).",
            "papoReto": "Temos uma escada de permissão Microsoft: 1 - \"Usuário Básico\" (Lê a porcaria que tá pronta e feita pra ele). 2 - \"Criador de Ambiente\" ou \"Environment Maker\" (Pode fabricar e sujar o Canvas jogando Fluxos e Apps Pessoais novos soltos no ar lá dentro). 3 - E acima, o System Customizer, que já ganha poder pra criar até Campos no Bancos de Dados pra todo mundo. Se o garoto quer \"Criar um Canvas App solto de Automate\" do zero, libere o famoso \"Environment Maker\"! Ele não é nada perigoso no nível infraestrutura corporativa.",
            "respostaCerta": "Criador de Ambiente (Environment Maker)",
            "puloDoGato": "A security role `Environment Maker` capacita o indivíduo perante o locatário a provisionar recursos soltos e componentes Maker (criar de Aplicativos de Tela, criar Fluxos da Nuvem Power Automate) unicamente operando nos limites dos recursos consumíveis nativos existentes, mas impede explicitamente permissões destrutivas de engenharia do dataverse (DML e DDL pesados).",
            "cascasDeBanana": [
                "Usuário Básico: Apenas consume ou abre aplicativos já compartilhados pelo Admin.",
                "System Customizer / Administrador: Liberam o canhão do Maker somado a edição violenta e aprofundada de entidades de esquema profundo. Um exagero e quebra da policy pra alguém que só quer criar um Canvas solto."
            ],
            "dicaOuro": "Deletar o bloqueio de \"Não consigo lançar a ui e Criar Fluxos/Apps de Tela base do zero neste Ambiente\" = Conceda a regra \"Criador de Ambiente\" (Environment Maker)."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q186_topic1",
        "text": "Você precisa projetar uma solução de check-in de convidados. Quais tecnologias você deve usar para cada requisito em sequência? 1. Desenvolver a solução base visual de check-in para uso interno da recepção. 2. Container para rodar a solução nos dispositivos móveis (tablets) da recepção. 3. Permitir que usuários / convidados externos façam o check-in anonimamente antecipado de casa num hotsite.",
        "options": [
            "1. Canvas App | 2. Power Apps Mobile App | 3. Power Apps Portal (Power Pages)",
            "1. Model-driven App | 2. Web Browser | 3. Canvas App",
            "1. Xamarin App | 2. Dynamics 365 for phones | 3. Model-driven App",
            "1. Canvas App | 2. Tradicional Desktop App | 3. Power Apps Portal"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "A questão foca na escolha da ferramenta arquitetural correta para cada persona (Funcionário vs Convidado).",
            "papoReto": "1: Para criar uma tela bonitinha com a cara da sua empresa pra recepção, usamos o Canvas App. 2: Os funcionários rodam esse Canvas dentro do aplicativo 'Microsoft Power Apps' no tablet corporativo. 3: Visitante não tem licença sua de uso interno e nem login! Pra visitante preencher dados de fora, a Microsoft oferece o Power Apps Portal (Sites externos).",
            "respostaCerta": "1. Canvas App | 2. Power Apps Mobile App | 3. Power Apps Portal",
            "puloDoGato": "Canvas App = Design livre e personalizado. Power Apps Mobile = Container nativo/Player para rodar apps no tablet/celular. Portals (Power Pages) = Única forma de usuários externos à organização e anônimos interagirem ativamente preenchendo o Dataverse via nuvem web.",
            "cascasDeBanana": [
                "Model-driven App para convidados: Impossível! Ninguém sem licença paga e login de Azure entra em Model-driven.",
                "Xamarin App: Trata-se de código puro nativo (.NET). O exame e plataformas foca em soluções No-code Low-code."
            ],
            "dicaOuro": "Captar dados de Anônimos e Externos sem login = Power Apps Portal (Power Pages). | Design customizável = Canvas App."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q187_topic1",
        "text": "Você está projetando e encomendando a criação de um Hotsite em Portal para um resort gigante. Trata-se de uma interface em 'Power Apps Portal'. Qual deve ser compulsoriamente a fonte de dados matriz (Data Source) obrigatória atrelada na topologia desse Portal?",
        "options": [
            "Microsoft Dataverse (Common Data Service)",
            "Microsoft SharePoint List",
            "Microsoft Azure SQL Database",
            "Microsoft Excel em Nuvem"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Conceito estrutural sobre a fundação obrigatória dos Power Apps Portals (hoje conhecidos como Power Pages).",
            "papoReto": "Ao contrário dos Canvas Apps (que você consegue ligar numa planilha de Excel pelo OneDrive e fazer a festa), o Portal é literalmente uma casca robusta montada no teto de banco de dados nativo da Microsoft. Ele só existe, só respira e só roda se os formulários virem do Dataverse.",
            "respostaCerta": "Microsoft Dataverse",
            "puloDoGato": "O Power Apps Portal é um website renderizado diretamente via metadados extraídos de visualizações, dados e formulários arquitetados previamente NO Dataverse. Ele não possui conectores flexíveis para Excel ou SQL como fonte relacional primária.",
            "cascasDeBanana": [
                "Azure SQL Database ou SharePoint: Podem agir de backend para Canvas, mas Portals carecem intimamente do motor relacional (Forms, Views e Roles) residente da base C.D.S. (Dataverse)."
            ],
            "dicaOuro": "Lembre-se: 'Portals / Power Pages' vivem e respiram exclusivamente o Oxigênio do Dataverse. Sem Dataverse ativo, sem Portal."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "q188_topic1",
        "text": "Sua corporação construiu um chatbot robusto para tirar dúvidas. Agora, numa segunda fase do ALM, você precisa incorporar esse chatbot (FAQbot) numa nova Solution geral de comunicação da equipe e ativá-lo no canal da empresa. Quais ações exatas você deve realizar sequencialmente na estrutura?",
        "options": [
            "1. Importar o chatbot Existente para dentro da Solução | 2. Configurar os canais adicionais do FAQbot no painel de Publicação (ex: Teams).",
            "1. Criar uma app englobadora do zero | 2. Adicionar o chatbot via iFrame oculto nela.",
            "1. Recriar um novo chatbot por Solution | 2. Clonar as lógicas usando os Dataflows antigos.",
            "1. Configurar Canais no Teams local | 2. Migrar os diálogos criando um Package autônomo."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Gestão do ciclo de vida de soluções voltada a integração dos Chatbots / Power Virtual Agents em Soluções (Solutions) de Maker Portal.",
            "papoReto": "É como colar uma figurinha que você já tem num álbum. O robô já existe e está operante por aí. Para você empacotá-lo bonitinho na Solução da equipe, você usa a ação óbvia do Maker Portal: \"Add Existing -> Chatbot (Importar Existente)\". E pra ele aparecer lá na telinha do Microsoft Teams da galera depois? Só ir nas configurações do bot e ligar o 'Canal (Channel) do Teams'.",
            "respostaCerta": "1. Importar um chatbot existente (Add existing) | 2. Configurar os canais e o FAQbot no Microsoft Teams.",
            "puloDoGato": "Chatbots/Virtual Agents no Dataverse obedecem às arquiteturas clássicas de Componentes de Solução. Para integrar recursos finalizados a soluções holísticas usamos os fluxos canônicos de importação de recursos orgânicos já ativos.",
            "cascasDeBanana": [
                "Criar um aplicativo englobador: Seria inviável gerar um app do zero apenas para expor os links de webchat embedado ao Teams, fugindo das integrações limpas de tenant."
            ],
            "dicaOuro": "Adicionar uma peça que já existe a uma 'Solution' oficial = Sempre escolha 'Adicionar Existente' (Add Existing)."
        },
        "difficulty": "intermediario",
        "domain": "Fluxos em nuvem do Microsoft Power Automate"
    },
    {
        "id": "q193_topic1",
        "text": "O financeiro reprovou sua arquitetura e orçamento do Dynamics apontando os altíssimos picos insustentáveis de custos no Azure. Três meses investigando apontaram e revelaram o óbvio: a equipe comercial desavisada estava fazendo e subindo upload indiscriminadamente de milhares de anexos pesados massivos em PDF e Plantas Baixas amarrando-os cruamente aos Contatos de clientes. Qual recurso complementar gratuito e nativo de baixo custo Microsoft você deve sugerir a Pleno Pulmões a companhia ativar imediatamente para varrer esse lixo da base principal pesada?",
        "options": [
            "Ativar a integração nativa com o portal arquivista Microsoft SharePoint (SharePoint Integration).",
            "Ativar a integração de rotina e salvamento com fluxos Microsoft OneDrive for Business.",
            "Habilitar e escalar compulsoriamente os blocos corporativos anexos Microsoft OneNote.",
            "Adquirir com cartão e aumentar fisicamente as capacidades em Teras do Microsoft Dataverse File Storage."
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Governança de custos e best practices corporativos com o Dataverse Storage Limits (Limites de File/DB Storage). O terror financeiro da prova.",
            "papoReto": "Se alguém colocar um arquivo PDF de 5MB por engano no Banco Relacional Dataverse (Banco de Dados essencial), esse Giga vai te custar muito, absurdamente caro pra Microsoft no fim do mês da fatura! Tem muito espertalhão gastando os preciosos limitados Terabytes do Banco guardando 'Boleto' (arquivo inútil e parado) nas anotações soltas dos contatos! Como acabar com a sangria dos cofres? Simples: Existe uma casinha gigantesca e absurdamente barata no Windows focada para armazenar arquivos em poeira! Liga logo nativamente a Integração com o 'SharePoint Document Integration'! Toda aba Anexos nos seus Contas pulará do CRM e será salva lá pra base giga do Sharepoint, salvando limite de Tabela do Dataverse na mesma hora.",
            "respostaCerta": "Ativar Integração Arquivista com o Microsoft SharePoint.",
            "puloDoGato": "Dataverse (Database storage) é computação relacional transacional e premium. Ao exaurir sua métrica em Storage de `File` contido no locatário por anexos avulsos e inativos em subgrids (`Timeline Notes / Attachments`), o Custo de Overrage dói no orçamento da Licença. A `Virtual Document Integration` padrão da Dynamics joga transparentemente O Peso morto e de custódia pro ECM do `Sharepoint Online Limits` do Tenant desonerando absurdamente todo CRM Dataverse subjacente.",
            "cascasDeBanana": [
                "OneDrive e OndeNote - Confusão da prova: O OneDrive for business é essencialmente reservado e blindado de fábrica para a Arquivagem Privada Solitária Pessoal não exposta. O SharePoint é que constrói dezenas de pastas colaborativas hierárquicas que pertencem aos times e clientes corporativos ativamente."
            ],
            "dicaOuro": "Cliente reclamou de Extrapolar o armazenamento (Storage caro de Base Dados) e disse que era culpa de 'Guadar documentos do word grandes d+ no Dataverse' = Descartea Custo Extra! Migre para 'SharePoint File Document Integration'."
        },
        "difficulty": "iniciante",
        "domain": "Microsoft Dataverse"
    },
    {
        "id": "pl200_oficial_222",
        "domain": "Microsoft Dataverse",
        "difficulty": "iniciante",
        "text": "Qual recurso nativo do Dataverse permite restringir dados baseados no nível macro da organização e da hierarquia de usuários? Cenario 1",
        "options": [
            "Business Rules",
            "Business Units e Security Roles",
            "Plugins",
            "Fluxos"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Business Units e Security Roles...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Business. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Plugins...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_223",
        "domain": "Microsoft Dataverse",
        "difficulty": "iniciante",
        "text": "Qual recurso nativo do Dataverse permite restringir dados baseados no nível macro da organização e da hierarquia de usuários? Cenario 2",
        "options": [
            "Business Rules",
            "Business Units e Security Roles",
            "Plugins",
            "Fluxos"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Business Units e Security Roles...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Business. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Plugins...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_224",
        "domain": "Microsoft Dataverse",
        "difficulty": "iniciante",
        "text": "Qual recurso nativo do Dataverse permite restringir dados baseados no nível macro da organização e da hierarquia de usuários? Cenario 3",
        "options": [
            "Business Rules",
            "Business Units e Security Roles",
            "Plugins",
            "Fluxos"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Business Units e Security Roles...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Business. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Plugins...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_225",
        "domain": "Microsoft Dataverse",
        "difficulty": "iniciante",
        "text": "Qual recurso nativo do Dataverse permite restringir dados baseados no nível macro da organização e da hierarquia de usuários? Cenario 4",
        "options": [
            "Business Rules",
            "Business Units e Security Roles",
            "Plugins",
            "Fluxos"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Business Units e Security Roles...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Business. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Plugins...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_226",
        "domain": "Microsoft Dataverse",
        "difficulty": "iniciante",
        "text": "Qual recurso nativo do Dataverse permite restringir dados baseados no nível macro da organização e da hierarquia de usuários? Cenario 5",
        "options": [
            "Business Rules",
            "Business Units e Security Roles",
            "Plugins",
            "Fluxos"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Business Units e Security Roles...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Business. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Plugins...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_227",
        "domain": "Microsoft Dataverse",
        "difficulty": "iniciante",
        "text": "Você quer criar um campo de 'Valor' e que ele atualize a soma de todas as subcontas a cada 12 horas. Qual o campo?",
        "options": [
            "Calculated",
            "Rollup",
            "Currency",
            "Decimal"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Rollup...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Rollup. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Currency...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_232",
        "domain": "Microsoft Dataverse",
        "difficulty": "intermediario",
        "text": "Ao fazer a ingestão diária de 5 milhões de contatos vindos de ERP via Dataflows, como evitar que o sistema crie contatos duplicados?",
        "options": [
            "Rollup",
            "Plugin",
            "Chaves Alternativas (Alternate Keys)",
            "OData"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Chaves Alternativas (Alternate Keys)...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Chaves. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"OData...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_237",
        "domain": "Microsoft Dataverse",
        "difficulty": "avancado",
        "text": "Se um vendedor não possui privilégio de 'Leitura' para a Entidade Casos, qual é o impacto se um Caso for compartilhado (Share) diretamente com ele?",
        "options": [
            "Ele ganha acesso Total",
            "Ele poderá Apenas Ler",
            "Ele continua sem acesso, pois falta nível de Leitura na Função base",
            "Ele vira System Admin"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Ele continua sem acesso, pois falta...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Ele. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Ele vira System Admin...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_242",
        "domain": "Microsoft Dataverse",
        "difficulty": "intermediario",
        "text": "Você precisa carregar planilhas CSV antigas pro Dataverse sem disparar os alertas de fluxos síncronos e lentidões. O que desativar?",
        "options": [
            "Auditoria e Lógica de Plugin",
            "Apenas Plugins",
            "Somente Auditoria",
            "Tenant"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Auditoria e Lógica de Plugin...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Auditoria. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Apenas Plugins...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_246",
        "domain": "Aplicativos do Microsoft Power",
        "difficulty": "iniciante",
        "text": "Ao construir um Model-driven App, onde você configura os sub-menus de navegação lateral?",
        "options": [
            "Model Builder",
            "Sitemap Designer",
            "Canvas",
            "Business Rule"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Sitemap Designer...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Sitemap. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Canvas...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_251",
        "domain": "Aplicativos do Microsoft Power",
        "difficulty": "intermediario",
        "text": "Você precisa que um botão numa Galeria no Canvas App atualize o registro diretamente sem abrir formulários extra. Qual a função adequada?",
        "options": [
            "EditForm",
            "ViewForm",
            "Patch()",
            "ClearCollect()"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Patch()...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Patch(). A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"ClearCollect()...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_256",
        "domain": "Aplicativos do Microsoft Power",
        "difficulty": "avancado",
        "text": "Seu Canvas App exibe o alerta 'Delegation Warning' em uma função Search() em cima de uma tabela enorme Dataverse. Por que isso é um risco de design?",
        "options": [
            "Não salva dados.",
            "Apenas os primeiros 500 ou 2000 dados baixarão para serem filtrados no celular do usuário.",
            "O app excluirá os registros excedentes",
            "Desliga a licença M365"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Apenas os primeiros 500 ou 2000...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Apenas. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"O app excluirá os registr...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_261",
        "domain": "Aplicativos do Microsoft Power",
        "difficulty": "intermediario",
        "text": "Se um cliente pede para inspecionar áreas sem internet no tablet, salvando dados localmente até ter conexão, quais funções você deve usar no Canvas App?",
        "options": [
            "Start e Stop",
            "Patch e Submit",
            "SaveData e LoadData",
            "Power Automate HTTP"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"SaveData e LoadData...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de SaveData. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Power Automate HTTP...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_266",
        "domain": "Fluxos em nuvem do Microsoft Power Automate",
        "difficulty": "iniciante",
        "text": "Como disparar um Cloud Flow apenas meia noite (00:00) todo dia automático?",
        "options": [
            "Botão Manual",
            "Recorrente (Recurrence) Agendado",
            "Automático Dataverse",
            "Quando um item for Modificado"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Recorrente (Recurrence) Agendado...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Recorrente. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Automático Dataverse...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_271",
        "domain": "Fluxos em nuvem do Microsoft Power Automate",
        "difficulty": "avancado",
        "text": "Se o Flow recebe um JSON GIGANTE da previsão do tempo, como quebrar isso em campos dinâmicos visíveis para os próximos passos sem código?",
        "options": [
            "Filter Array",
            "Condition",
            "Compose",
            "Parse JSON (Analisar Data)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Parse JSON (Analisar Data)...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Parse. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Filter Array...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_276",
        "domain": "Fluxos em nuvem do Microsoft Power Automate",
        "difficulty": "intermediario",
        "text": "Seu passo do Power Automate 'Obter Tabela' sempre dá Timeout, mas você não quer que o fluxo inteiro aborte. O que fazer no passo seguinte?",
        "options": [
            "Adicionar Branch Paralela",
            "Adicionar Ação Cancelar",
            "Configurar Executar Depois de (Run After) para ignorar Falhas",
            "Elevar Licença Premium"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Configurar Executar Depois de (Run After)...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Configurar. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Elevar Licença Premium...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_282",
        "domain": "Microsoft Power Pages",
        "difficulty": "iniciante",
        "text": "Qual linguagem serve para injetar blocos condicionais do Servidor ao invés de usar Javascript direto no Power Pages?",
        "options": [
            "C#",
            "Liquid",
            "Python",
            "Lua"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Liquid...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Liquid. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Python...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_287",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "No Power Pages, usuários externos anônimos preenchem reclamações, mas eles não se identificam. Qual Web Role cuida dessa segurança de acesso?",
        "options": [
            "Authenticated User",
            "System Admin Role",
            "Anonymous User",
            "Guest Role"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Anonymous User...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Anonymous. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Guest Role...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_292",
        "domain": "Ambientes do Microsoft Power Platform",
        "difficulty": "intermediario",
        "text": "Sua equipe precisa evitar inserir as senhas de banco manualmente caso fizessem deploy do ambiente de DEV pro PROD. Onde guardamos senhas dinamicamente na Solução?",
        "options": [
            "Em um Dataflow",
            "Nas Environment Variables (Variáveis de Ambiente)",
            "Em XML locais",
            "Em Tabelas Secundárias"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Nas Environment Variables (Variáveis de Ambiente)...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Nas. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Em XML locais...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_297",
        "domain": "Ambientes do Microsoft Power Platform",
        "difficulty": "iniciante",
        "text": "Na migração do ALM da Microsoft Power Platform, qual tipo de solução levamos para o Servidor de Produção final (PRD)?",
        "options": [
            "Gerenciada (Managed)",
            "Não Gerenciada (Unmanaged)",
            "Somente Código",
            "Pacote Azure"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Visão Geral do Recurso no MS Power Platform:",
            "papoReto": "A melhor abordagem recomendada pelo oficial da Microsoft é utilizar ativamente \"Gerenciada (Managed)...\". O motivo principal é que, sob o escopo do exame PL-200, essa é a ferramenta padr�o (nativa) projetada para suprir essa exata carência sem exigir desenvolvimento customizado elevado.",
            "puloDoGato": "Na hora da prova, se bater a dúvida e o enunciado mencionar esse cenário, associe imediatamente com o uso de Gerenciada. A Microsoft sempre favorece a solução menos invasiva.",
            "cascasDeBanana": [
                "A opção envolvendo \"Não Gerenciada (Unmanaged...\" parece tentadora, mas atua em um nível de governança/arquitetura incorreto para esse caso específico.",
                "As demais alternativas ou necessitam de licenças premium paralelas ou se referem a componentes que não integram nativamente nesse cenário isolado."
            ],
            "dicaOuro": "Sempre valide os limites da licença e a segurança. Nem tudo que pode ser feito, DEVE ser feito se uma ferramenta simples já resolve."
        }
    },
    {
        "id": "pl200_oficial_v2_1000",
        "domain": "Microsoft Dataverse",
        "difficulty": "intermediario",
        "text": "Você precisa importar diariamente arquivos de faturamento para uma tabela. O processo não pode exigir código. Qual a ferramenta mais ágil?",
        "options": [
            "Painel do Power BI",
            "Fluxos de Dados (Dataflows)",
            "Azure Logic Apps Integrado",
            "Plugin C# de Inserção Restrita"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "Neste cenário de negócio, a resposta é impreterivelmente \"Fluxos de Dados (Dataflows)\". Por demanda do exame Microsoft, utilizamos esse módulo por sua aderência ao framework sem código.",
            "puloDoGato": "Identificou o recurso principal listado? Ele resolve a lacuna de sistema.",
            "cascasDeBanana": [
                "Evite selecionar \"Azure Logic Apps Integrado...\", pois forçaria um redesenho de processos.",
                "Opções que requerem administração global de M365 geralmente estão erradas para Consultores Funcionais PL-200."
            ],
            "dicaOuro": "Ancore seu conhecimento: A ferramenta certa é quase sempre Fluxos de Dados (Dataflows)."
        }
    },
    {
        "id": "pl200_oficial_v2_1010",
        "domain": "Aplicativos do Microsoft Power",
        "difficulty": "avancado",
        "text": "Seu Canvas App precisa enviar a foto de uma inspeção ao Dataverse. Qual controle permite acionar a câmera do dispositivo móvel nativamente?",
        "options": [
            "Barcode Scanner",
            "Microphone Control",
            "Image Control",
            "Camera Control"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "Neste cenário de negócio, a resposta é impreterivelmente \"Camera Control\". Por demanda do exame Microsoft, utilizamos esse módulo por sua aderência ao framework sem código.",
            "puloDoGato": "Identificou o recurso principal listado? Ele resolve a lacuna de sistema.",
            "cascasDeBanana": [
                "Evite selecionar \"Barcode Scanner...\", pois forçaria um redesenho de processos.",
                "Opções que requerem administração global de M365 geralmente estão erradas para Consultores Funcionais PL-200."
            ],
            "dicaOuro": "Ancore seu conhecimento: A ferramenta certa é quase sempre Camera Control."
        }
    },
    {
        "id": "pl200_oficial_v2_1020",
        "domain": "Fluxos em nuvem do Microsoft Power Automate",
        "difficulty": "iniciante",
        "text": "Sempre que um Form é respondido no Microsoft Forms, um e-mail de agradecimento deve ser disparado. Qual o tipo de fluxo no Power Automate?",
        "options": [
            "Agendado (Scheduled)",
            "Fluxo de Nuvem Automatizado (Automated)",
            "Fluxo Desktop (RPA)",
            "Fluxo de Processo Empresarial"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "Neste cenário de negócio, a resposta é impreterivelmente \"Fluxo de Nuvem Automatizado (Automated)\". Por demanda do exame Microsoft, utilizamos esse módulo por sua aderência ao framework sem código.",
            "puloDoGato": "Identificou o recurso principal listado? Ele resolve a lacuna de sistema.",
            "cascasDeBanana": [
                "Evite selecionar \"Fluxo Desktop (RPA)...\", pois forçaria um redesenho de processos.",
                "Opções que requerem administração global de M365 geralmente estão erradas para Consultores Funcionais PL-200."
            ],
            "dicaOuro": "Ancore seu conhecimento: A ferramenta certa é quase sempre Fluxo de Nuvem Automatizado."
        }
    },
    {
        "id": "pl200_oficial_v3_5000",
        "domain": "Microsoft Dataverse",
        "difficulty": "avancado",
        "text": "Você precisa ocultar ou mascarar colunas do Dataverse que contêm CPFs para usuários sem privilégios altos. O que você deve aplicar?",
        "options": [
            "Permissões de Segurança de Tabela",
            "Data Loss Prevention (DLP)",
            "Segurança em Nível de Coluna (Field Level Security)",
            "Dataverse Views"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Segurança em Nível de Coluna (Field Level Security)\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5001",
        "domain": "Aplicativos do Microsoft Power",
        "difficulty": "intermediario",
        "text": "Em um Model-driven App, usuários reclamam que faltam atalhos para pular para sub-telas de aprovação rápida de contas. Qual componente de UI ajuda nisso?",
        "options": [
            "Canvas App Embed",
            "Fluxo de Processo Empresarial",
            "Subgrade de Leitura",
            "Quick View Form"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Fluxo de Processo Empresarial\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5002",
        "domain": "Fluxos em nuvem do Microsoft Power Automate",
        "difficulty": "iniciante",
        "text": "Qual ferramenta usar para disparar uma rotina todo dia às 20h para limpar registros obsoletos?",
        "options": [
            "Power Automate - Fluxo Agendado",
            "Workflow Assíncrono do Dynamics",
            "Plugin Cron Task",
            "Power Automate - Fluxo de UI Desktop"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Power Automate - Fluxo Agendado\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5003",
        "domain": "Microsoft Dataverse",
        "difficulty": "intermediario",
        "text": "Você precisa impedir que uma Cotação avance de fase caso o 'Valor' seja inferior a zero. Onde deve colocar a regra?",
        "options": [
            "C# Plugin Pre-Operation",
            "Power Automate com trigger de edição",
            "Regra de Negócios (Business Rule) com escopo de Entidade",
            "Portal do Power Pages"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Regra de Negócios (Business Rule) com escopo de Entidade\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5004",
        "domain": "Aplicativos do Microsoft Power",
        "difficulty": "iniciante",
        "text": "Uma empresa precisa compartilhar um Model-driven app com auditores externos convidados. O que você deve usar?",
        "options": [
            "Azure B2B Guest Accounts e Atribuição de Segurança",
            "Portal do SharePoint Externo",
            "Envio manual de planilhas locais",
            "Microsoft Forms aberto"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Azure B2B Guest Accounts e Atribuição de Segurança\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5005",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "Um usuário pergunta algo fora dos Tópicos mapeados pelo Bot. O que aciona automaticamente?",
        "options": [
            "Fallback Topic (Tópico de Sistema Padrão)",
            "Desconexão automática",
            "Transferência direta para um agente humano via Omnichannel",
            "Reset Loop"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Fallback Topic (Tópico de Sistema Padrão)\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5006",
        "domain": "Aplicativos do Microsoft Power",
        "difficulty": "avancado",
        "text": "Como você armazena o Nome do Usuário logado numa variável global ao iniciar o Canvas App?",
        "options": [
            "No App.OnStart usar Set(VarUser, User().FullName)",
            "No botão de clique, UpdateContext",
            "Usar Power Automate e retornar string",
            "Navegar passando Parâmetros"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"No App.OnStart usar Set(VarUser, User().FullName)\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5007",
        "domain": "Fluxos em nuvem do Microsoft Power Automate",
        "difficulty": "avancado",
        "text": "Você recebeu erros de loop infinito (Infinite Trigger Loop) no Dataverse ao rodar um Fluxo 'Quando linha modificada'. Qual a solução técnica Microsoft?",
        "options": [
            "Comprar expansão de API M365",
            "Usar Condição de Gatilho (Trigger Conditions) testando colunas",
            "Mudar de Nuvem para Desktop",
            "Escrever um Workflow Antigo clássico em .NET"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Usar Condição de Gatilho (Trigger Conditions) testando colunas\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5008",
        "domain": "Integração do Power BI",
        "difficulty": "iniciante",
        "text": "Um analista precisa visualizar num Canvas App um gráfico publicado do Power BI Service de seu Workspace. Qual objeto utilizar?",
        "options": [
            "Image Box Control",
            "Mosaico Power BI (Power BI Tile Control)",
            "URL IFrame",
            "Data Table Component"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Mosaico Power BI (Power BI Tile Control)\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5009",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "Você precisa coletar várias instâncias de informações do cliente (Nome, E-mail, CEP) dentro de um Tópico de bot e não esquecer as variáveis. Onde elas devem ser salvas?",
        "options": [
            "Num Excel anexo",
            "Variáveis de Tópico (Topic variables)",
            "Environment Variables da Solução",
            "Canvas App Collections"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Variáveis de Tópico (Topic variables)\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5010",
        "domain": "Microsoft Dataverse",
        "difficulty": "intermediario",
        "text": "Para facilitar a pesquisa de Oportunidades no Dataverse, você ativou a busca em multi-tabelas na nuvem. Qual o nome original deste recurso?",
        "options": [
            "Advanced Find (Localização Avançada)",
            "Pesquisa do Dataverse (Dataverse Search / Relevance)",
            "Quick Find View",
            "Filtro Personalizado de Formulário"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Pesquisa do Dataverse (Dataverse Search / Relevance)\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5011",
        "domain": "Microsoft Dataverse",
        "difficulty": "avancado",
        "text": "Durante uma migração em massa (ALM), a Governança bloqueou a inserção de conectores em aplicativos da UI para o Twitter. Como a T.I implementou isso?",
        "options": [
            "Criando uma Data Loss Prevention (DLP policy)",
            "Travando as Roles Baseadas em Objeto do Entra ID",
            "Removendo a licença Office E5",
            "Aplicando uma Field Level Security no Banco"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Criando uma Data Loss Prevention (DLP policy)\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5012",
        "domain": "Aplicativos do Microsoft Power",
        "difficulty": "intermediario",
        "text": "Para embutir o relatório Power BI Desktop como aba orgânica dentro de um formulário de conta num Model-driven app, como configurar?",
        "options": [
            "Ativando o relatorio como 'Painel Pessoal' Power Apps e anexando o form",
            "Não há suporte Model-driven, somente Canvas.",
            "Enviando PDF via Automate e exibindo como Timeline",
            "Expondo via XML nativo direto"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Ativando o relatorio como 'Painel Pessoal' Power Apps e anexando o form\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v3_5013",
        "domain": "Microsoft Dataverse",
        "difficulty": "iniciante",
        "text": "Você usa ambientes 'Sandbox' (Ambiente restrito). Para que eles servem no ciclo de vida (ALM)?",
        "options": [
            "São ambientes pagos para usuários VIP apenas",
            "Lidam com chamadas de APIs pesadas diárias",
            "Para testes, desenvolvimento e treinamento seguros antes de ir para Produção",
            "Para migração de locatário cross-region apenas"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200:",
            "papoReto": "A solução oficial para o cenário é aplicar \"Para testes, desenvolvimento e treinamento seguros antes de ir para Produção\". É o recurso nativo exigido.",
            "puloDoGato": "Identificou o recurso principal? Ele é a solução 'padr�o'.",
            "cascasDeBanana": [
                "Opções complexas com código C# ou chamadas externas costumam ser incorretas nesta prova.",
                "Não confunda as validações de Canvas Apps com regras de escopo de Entidade do Dataverse."
            ],
            "dicaOuro": "Sempre priorize low-code."
        }
    },
    {
        "id": "pl200_oficial_v4_6000",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6000] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Entidade Personalizada",
            "Tópico de Sistema",
            "Dialog Root",
            "Action Flow"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6001",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6001] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Bot Variable (Variável de Bot)",
            "Session Storage",
            "Topic Variable",
            "Dataverse Table"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6002",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6002] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "End User Request",
            "Fim do tópico",
            "Trigger Action",
            "Hand off para Omnichannel (Escalonamento)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6003",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6003] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "IFrame nativo iframe tag",
            "Power BI Embedded component",
            "PowerApps Canvas",
            "Sharepoint link"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6004",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6004] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dynamics Workflow",
            "SQL Trigger",
            "Event Grid",
            "Power Automate trigger schedule"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6005",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6005] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "B2B AD Guest",
            "Licença Premium Global",
            "Entra ID required",
            "Autenticação Anônima Habilitada"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6006",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6006] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Custom Liquid template",
            "Subgrade nativa Model",
            "List Component (Lista de Entidade)",
            "Canvas Gallery"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6007",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6007] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dialog Root",
            "Tópico de Sistema",
            "Entidade Personalizada",
            "Action Flow"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6008",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6008] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dataverse Table",
            "Bot Variable (Variável de Bot)",
            "Session Storage",
            "Topic Variable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6009",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6009] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Trigger Action",
            "Hand off para Omnichannel (Escalonamento)",
            "End User Request",
            "Fim do tópico"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6010",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6010] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Power BI Embedded component",
            "IFrame nativo iframe tag",
            "Sharepoint link",
            "PowerApps Canvas"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6011",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6011] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Event Grid",
            "Power Automate trigger schedule",
            "Dynamics Workflow",
            "SQL Trigger"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6012",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6012] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "B2B AD Guest",
            "Licença Premium Global",
            "Entra ID required",
            "Autenticação Anônima Habilitada"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6013",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6013] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "List Component (Lista de Entidade)",
            "Canvas Gallery",
            "Custom Liquid template",
            "Subgrade nativa Model"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6014",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6014] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Action Flow",
            "Entidade Personalizada",
            "Tópico de Sistema",
            "Dialog Root"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6015",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6015] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Session Storage",
            "Bot Variable (Variável de Bot)",
            "Dataverse Table",
            "Topic Variable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6016",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6016] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "End User Request",
            "Fim do tópico",
            "Hand off para Omnichannel (Escalonamento)",
            "Trigger Action"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6017",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6017] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Power BI Embedded component",
            "IFrame nativo iframe tag",
            "PowerApps Canvas",
            "Sharepoint link"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6018",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6018] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Power Automate trigger schedule",
            "Event Grid",
            "Dynamics Workflow",
            "SQL Trigger"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6019",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6019] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "B2B AD Guest",
            "Licença Premium Global",
            "Entra ID required",
            "Autenticação Anônima Habilitada"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6020",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6020] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Subgrade nativa Model",
            "Custom Liquid template",
            "List Component (Lista de Entidade)",
            "Canvas Gallery"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6021",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6021] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dialog Root",
            "Tópico de Sistema",
            "Entidade Personalizada",
            "Action Flow"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6022",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6022] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dataverse Table",
            "Session Storage",
            "Bot Variable (Variável de Bot)",
            "Topic Variable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6023",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6023] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Trigger Action",
            "Hand off para Omnichannel (Escalonamento)",
            "Fim do tópico",
            "End User Request"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6024",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6024] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "IFrame nativo iframe tag",
            "Sharepoint link",
            "Power BI Embedded component",
            "PowerApps Canvas"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6025",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6025] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "SQL Trigger",
            "Power Automate trigger schedule",
            "Event Grid",
            "Dynamics Workflow"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6026",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6026] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "B2B AD Guest",
            "Licença Premium Global",
            "Entra ID required",
            "Autenticação Anônima Habilitada"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6027",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6027] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "List Component (Lista de Entidade)",
            "Custom Liquid template",
            "Subgrade nativa Model",
            "Canvas Gallery"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6028",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6028] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Tópico de Sistema",
            "Entidade Personalizada",
            "Action Flow",
            "Dialog Root"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6029",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6029] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Bot Variable (Variável de Bot)",
            "Session Storage",
            "Topic Variable",
            "Dataverse Table"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6030",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6030] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Trigger Action",
            "End User Request",
            "Fim do tópico",
            "Hand off para Omnichannel (Escalonamento)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6031",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6031] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "IFrame nativo iframe tag",
            "Power BI Embedded component",
            "Sharepoint link",
            "PowerApps Canvas"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6032",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6032] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dynamics Workflow",
            "Power Automate trigger schedule",
            "SQL Trigger",
            "Event Grid"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6033",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6033] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Autenticação Anônima Habilitada",
            "Licença Premium Global",
            "Entra ID required",
            "B2B AD Guest"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6034",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6034] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Custom Liquid template",
            "Canvas Gallery",
            "Subgrade nativa Model",
            "List Component (Lista de Entidade)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6035",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6035] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Entidade Personalizada",
            "Tópico de Sistema",
            "Action Flow",
            "Dialog Root"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6036",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6036] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Bot Variable (Variável de Bot)",
            "Dataverse Table",
            "Topic Variable",
            "Session Storage"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6037",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6037] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "End User Request",
            "Fim do tópico",
            "Trigger Action",
            "Hand off para Omnichannel (Escalonamento)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6038",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6038] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "PowerApps Canvas",
            "Sharepoint link",
            "IFrame nativo iframe tag",
            "Power BI Embedded component"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6039",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6039] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Power Automate trigger schedule",
            "Dynamics Workflow",
            "SQL Trigger",
            "Event Grid"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6040",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6040] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Licença Premium Global",
            "B2B AD Guest",
            "Autenticação Anônima Habilitada",
            "Entra ID required"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6041",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6041] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Custom Liquid template",
            "List Component (Lista de Entidade)",
            "Subgrade nativa Model",
            "Canvas Gallery"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6042",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6042] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dialog Root",
            "Action Flow",
            "Entidade Personalizada",
            "Tópico de Sistema"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6043",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6043] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dataverse Table",
            "Topic Variable",
            "Session Storage",
            "Bot Variable (Variável de Bot)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6044",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6044] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Hand off para Omnichannel (Escalonamento)",
            "Fim do tópico",
            "Trigger Action",
            "End User Request"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6045",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6045] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "PowerApps Canvas",
            "Sharepoint link",
            "IFrame nativo iframe tag",
            "Power BI Embedded component"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6046",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6046] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Power Automate trigger schedule",
            "Dynamics Workflow",
            "Event Grid",
            "SQL Trigger"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6047",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6047] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Autenticação Anônima Habilitada",
            "Entra ID required",
            "B2B AD Guest",
            "Licença Premium Global"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6048",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6048] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "List Component (Lista de Entidade)",
            "Canvas Gallery",
            "Subgrade nativa Model",
            "Custom Liquid template"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6049",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6049] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Entidade Personalizada",
            "Tópico de Sistema",
            "Action Flow",
            "Dialog Root"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6050",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6050] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dataverse Table",
            "Topic Variable",
            "Session Storage",
            "Bot Variable (Variável de Bot)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6051",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6051] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Hand off para Omnichannel (Escalonamento)",
            "Trigger Action",
            "Fim do tópico",
            "End User Request"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6052",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6052] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Power BI Embedded component",
            "IFrame nativo iframe tag",
            "Sharepoint link",
            "PowerApps Canvas"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6053",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6053] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "SQL Trigger",
            "Power Automate trigger schedule",
            "Dynamics Workflow",
            "Event Grid"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6054",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6054] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Autenticação Anônima Habilitada",
            "Entra ID required",
            "Licença Premium Global",
            "B2B AD Guest"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6055",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6055] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Subgrade nativa Model",
            "List Component (Lista de Entidade)",
            "Custom Liquid template",
            "Canvas Gallery"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6056",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6056] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dialog Root",
            "Entidade Personalizada",
            "Tópico de Sistema",
            "Action Flow"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6057",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6057] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dataverse Table",
            "Topic Variable",
            "Session Storage",
            "Bot Variable (Variável de Bot)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6058",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6058] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Trigger Action",
            "End User Request",
            "Fim do tópico",
            "Hand off para Omnichannel (Escalonamento)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6059",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6059] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "IFrame nativo iframe tag",
            "PowerApps Canvas",
            "Sharepoint link",
            "Power BI Embedded component"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6060",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6060] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Dynamics Workflow",
            "Event Grid",
            "SQL Trigger",
            "Power Automate trigger schedule"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6061",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6061] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "B2B AD Guest",
            "Entra ID required",
            "Licença Premium Global",
            "Autenticação Anônima Habilitada"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6062",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6062] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Custom Liquid template",
            "Subgrade nativa Model",
            "List Component (Lista de Entidade)",
            "Canvas Gallery"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6063",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6063] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Tópico de Sistema",
            "Entidade Personalizada",
            "Action Flow",
            "Dialog Root"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6064",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6064] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Session Storage",
            "Topic Variable",
            "Dataverse Table",
            "Bot Variable (Variável de Bot)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6065",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6065] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "End User Request",
            "Fim do tópico",
            "Hand off para Omnichannel (Escalonamento)",
            "Trigger Action"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6066",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6066] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "PowerApps Canvas",
            "Sharepoint link",
            "IFrame nativo iframe tag",
            "Power BI Embedded component"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6067",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6067] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Event Grid",
            "SQL Trigger",
            "Dynamics Workflow",
            "Power Automate trigger schedule"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6068",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6068] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Autenticação Anônima Habilitada",
            "Entra ID required",
            "Licença Premium Global",
            "B2B AD Guest"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6069",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6069] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Custom Liquid template",
            "Canvas Gallery",
            "Subgrade nativa Model",
            "List Component (Lista de Entidade)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6070",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6070] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Tópico de Sistema",
            "Action Flow",
            "Dialog Root",
            "Entidade Personalizada"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6071",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6071] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Bot Variable (Variável de Bot)",
            "Dataverse Table",
            "Session Storage",
            "Topic Variable"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6072",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6072] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Fim do tópico",
            "Trigger Action",
            "Hand off para Omnichannel (Escalonamento)",
            "End User Request"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6073",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6073] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Power BI Embedded component",
            "Sharepoint link",
            "IFrame nativo iframe tag",
            "PowerApps Canvas"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6074",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6074] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Event Grid",
            "SQL Trigger",
            "Dynamics Workflow",
            "Power Automate trigger schedule"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6075",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6075] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Entra ID required",
            "Autenticação Anônima Habilitada",
            "B2B AD Guest",
            "Licença Premium Global"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6076",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6076] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "List Component (Lista de Entidade)",
            "Subgrade nativa Model",
            "Canvas Gallery",
            "Custom Liquid template"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6077",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6077] Você foi designado a implementar fallback usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Action Flow",
            "Dialog Root",
            "Entidade Personalizada",
            "Tópico de Sistema"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Tópico de Sistema\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6078",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6078] Você foi designado a armazenar nome cliente usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Bot Variable (Variável de Bot)",
            "Dataverse Table",
            "Topic Variable",
            "Session Storage"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Bot Variable (Variável de Bot)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6079",
        "domain": "Criação de Chatbots com Power Virtual Agents",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6079] Você foi designado a transferir pro humano usando Criação de Chatbots com Power Virtual Agents. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Trigger Action",
            "Hand off para Omnichannel (Escalonamento)",
            "Fim do tópico",
            "End User Request"
        ],
        "correctAnswer": 1,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Hand off para Omnichannel (Escalonamento)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6080",
        "domain": "Integração do Power BI",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6080] Você foi designado a embutir grafico num portal usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "PowerApps Canvas",
            "IFrame nativo iframe tag",
            "Power BI Embedded component",
            "Sharepoint link"
        ],
        "correctAnswer": 2,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power BI Embedded component\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6081",
        "domain": "Integração do Power BI",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6081] Você foi designado a atualizar dados do grafico m365 usando Integração do Power BI. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Power Automate trigger schedule",
            "Dynamics Workflow",
            "SQL Trigger",
            "Event Grid"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Power Automate trigger schedule\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6082",
        "domain": "Microsoft Power Pages",
        "difficulty": "intermediario",
        "text": "[Cenário Exclusivo #6082] Você foi designado a portal acesso externo anonimo usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Autenticação Anônima Habilitada",
            "Entra ID required",
            "Licença Premium Global",
            "B2B AD Guest"
        ],
        "correctAnswer": 0,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"Autenticação Anônima Habilitada\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    },
    {
        "id": "pl200_oficial_v4_6083",
        "domain": "Microsoft Power Pages",
        "difficulty": "avancado",
        "text": "[Cenário Exclusivo #6083] Você foi designado a tabela exibir lista usando Microsoft Power Pages. Na empresa BetaCorp, o diretor exigiu uma tratativa na especificação. Qual a abordagem ideal de sistema?",
        "options": [
            "Custom Liquid template",
            "Canvas Gallery",
            "Subgrade nativa Model",
            "List Component (Lista de Entidade)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "intro": "Mapeamento Direto PL-200 (Domínio Externo):",
            "papoReto": "Nesta variação do domínio, o caminho exigido é usar \"List Component (Lista de Entidade)\". Ferramentas deste calibre são testadas puramente na prova real.",
            "puloDoGato": "Identificou o recurso de integração? Ele é a solução 'padr�o' de conexão.",
            "cascasDeBanana": [
                "As demais opções, ainda que factíveis por código pro, ferem a premissa de uso nativo da plataforma corporativa.",
                "Opções complexas com código costumam ser incorretas nesta prova."
            ],
            "dicaOuro": "Power BI, Pages e Virtual Agents (Bots) representam até 20% do score. Não decore código, decore o componente visual."
        }
    }
];
