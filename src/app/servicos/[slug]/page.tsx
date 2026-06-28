import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Heart,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Video,
  Calendar,
  Lock
} from "lucide-react";

interface ServiceData {
  title: string;
  description: string;
  targetAudience: string[];
  benefits: string[];
  howItWorks: string;
  faqs: { question: string; answer: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "psicanalise-online": {
    title: "Psicanálise Online",
    description: "Processo terapêutico aprofundado que visa investigar os processos inconscientes para promover o autoconhecimento, a cura de sintomas psicossomáticos e a libertação de padrões repetitivos de sofrimento.",
    targetAudience: [
      "Pessoas em busca de autoconhecimento profundo e estrutural.",
      "Quem convive com angústia, ansiedade crônica ou sintomas sem explicação médica evidente.",
      "Indivíduos que percebem padrões repetitivos em suas relações afetivas ou profissionais.",
      "Pessoas que preferem a privacidade, o conforto e a flexibilidade de sessões em ambiente digital."
    ],
    benefits: [
      "Compreensão das motivações inconscientes por trás de suas escolhas e bloqueios.",
      "Elaboração de traumas, lutos mal resolvidos e dores emocionais antigas.",
      "Melhoria na relação consigo mesmo e com as próprias demandas internas.",
      "Desenvolvimento de maior autonomia psíquica e liberdade de decisão."
    ],
    howItWorks: "As sessões de psicanálise online são realizadas semanalmente por meio de chamadas de vídeo criptografadas e seguras (Google Meet ou WhatsApp). É recomendável que o paciente utilize fones de ouvido e esteja em um ambiente privado onde possa falar livremente, preservando o sigilo e o conforto do processo analítico.",
    faqs: [
      {
        question: "A psicanálise online é tão eficaz quanto a presencial?",
        answer: "Sim. Estudos e a prática clínica mostram que o processo psicanalítico mantém toda a sua eficácia no ambiente online. O principal elemento da análise é a palavra e a associação livre, que se estabelecem perfeitamente por videoconferência."
      },
      {
        question: "Como funciona a primeira sessão?",
        answer: "A primeira sessão é uma entrevista preliminar. Nela, você relata o que o motivou a buscar análise e esclarecemos dúvidas sobre a frequência das sessões, dinâmica de trabalho e horários disponíveis."
      },
      {
        question: "Qual o tempo de duração da sessão e do processo analítico?",
        answer: "Cada sessão dura cerca de 50 minutos. A duração total do tratamento analítico varia de pessoa para pessoa, pois depende do ritmo individual e da profundidade dos temas abordados."
      }
    ]
  },
  "psicoterapia-individual": {
    title: "Psicoterapia Individual",
    description: "Atendimento psicoterapêutico focado em acolher o sofrimento emocional do cotidiano, tratando sintomas agudos como depressão, fobias, estresse e crises existenciais.",
    targetAudience: [
      "Adultos lidando com altos níveis de estresse e esgotamento emocional (Burnout).",
      "Pessoas atravessando momentos de crise, como separação, transição de carreira ou luto.",
      "Quem apresenta sintomas de depressão, pânico ou fobias específicas.",
      "Indivíduos buscando fortalecer a autoestima e o autodomínio emocional."
    ],
    benefits: [
      "Espaço seguro de acolhimento e escuta qualificada sobre suas dores mais profundas.",
      "Identificação de gatilhos emocionais e desenvolvimento de mecanismos de enfrentamento saudáveis.",
      "Ressignificação de conflitos internos e melhora significativa na qualidade de vida.",
      "Fortalecimento da resiliência diante das crises cotidianas."
    ],
    howItWorks: "As sessões ocorrem por videoconferência, com dia e hora previamente combinados. São encontros semanais ou quinzenais baseados na escuta clínica e no diálogo terapêutico estruturado para acolher e intervir nas demandas urgentes do paciente.",
    faqs: [
      {
        question: "Com que frequência devo fazer terapia?",
        answer: "O recomendado é a frequência semanal, pois permite um fluxo de continuidade e o aprofundamento do vínculo terapêutico. Contudo, em casos específicos, pode ser acordado outro modelo."
      },
      {
        question: "Existe sigilo ético no atendimento online?",
        answer: "Absolutamente. O atendimento segue rigorosamente o Código de Ética Profissional da categoria, garantindo sigilo total das informações compartilhadas. O uso de plataformas seguras assegura a privacidade técnica dos encontros."
      }
    ]
  },
  "terapia-de-casal-e-familia": {
    title: "Terapia de Casal e Família",
    description: "Abordagem sistêmica que compreende o sofrimento individual a partir das dinâmicas das relações afetivas, visando mediar conflitos e reconstruir canais saudáveis de comunicação.",
    targetAudience: [
      "Casais enfrentando crises de comunicação, quebra de confiança ou desgaste emocional.",
      "Famílias com dificuldades de relacionamento entre pais, filhos ou parentes próximos.",
      "Relações familiares impactadas por transtornos mentais graves ou dependência de algum membro.",
      "Vínculos desgastados que desejam reconstruir um diálogo de respeito e intimidade."
    ],
    benefits: [
      "Criação de um canal de diálogo seguro mediado por uma profissional neutra.",
      "Mapeamento de padrões repetitivos de acusação e defesa no casal ou na família.",
      "Compreensão das origens transgeracionais dos conflitos atuais.",
      "Reconstrução de acordos relacionais, fortalecimento ou reorganização amigável dos vínculos."
    ],
    howItWorks: "As sessões envolvem o casal ou os membros da família de forma conjunta. Em alguns momentos, podem ser combinadas sessões individuais com participantes específicos, dependendo da dinâmica avaliada pela terapeuta. O processo ocorre online de forma a facilitar o encontro dos membros em diferentes localidades.",
    faqs: [
      {
        question: "E se um dos membros do casal ou da família não quiser participar?",
        answer: "É comum que no início haja resistências. Se um dos membros não quiser participar, o processo pode começar com quem está disponível. A mudança na postura de um membro da dinâmica familiar costuma gerar reflexos e influenciar os demais."
      },
      {
        question: "Como funciona a terapia de casal online se os parceiros estão separados geograficamente?",
        answer: "A tecnologia online facilita imensamente essa modalidade. Cada participante pode se conectar de seu respectivo dispositivo e local, permitindo que a sessão ocorra perfeitamente com todos integrados na mesma sala de vídeo."
      }
    ]
  },
  "dependencia-quimica-e-codependencia": {
    title: "Dependência Química e Codependência",
    description: "Acompanhamento especializado para indivíduos em uso nocivo ou dependência de substâncias (álcool e outras drogas) e suporte integral para seus familiares e parceiros afetivos.",
    targetAudience: [
      "Pessoas que enfrentam perdas, compulsão ou sofrimento associado ao uso de álcool e outras drogas.",
      "Familiares sob constante estresse, preocupação obsessiva e sofrimento por tentar 'salvar' o dependente.",
      "Parceiros e parentes que desejam compreender o que é a codependência e como se proteger emocionalmente.",
      "Equipes ou famílias que necessitam de orientação profissional sobre opções de tratamento e reabilitação."
    ],
    benefits: [
      "Ambiente livre de julgamento moral para o dependente expressar seu sofrimento e buscar alternativas.",
      "Desenvolvimento de estratégias de redução de danos ou estruturação para a abstinência.",
      "Fortalecimento emocional dos familiares para romperem com o ciclo de codependência.",
      "Acolhimento da angústia familiar com orientações éticas, científicas e pragmáticas."
    ],
    howItWorks: "Os atendimentos são individuais ou em sessões de acolhimento familiar online. São integrados conhecimentos sobre a dependência química de base médica/psicossocial e o olhar analítico sobre as causas da codependência familiar, ajudando a traçar limites saudáveis para todos.",
    faqs: [
      {
        question: "Como saber se meu comportamento é de codependência?",
        answer: "A codependência ocorre quando o familiar passa a viver em função do comportamento do dependente químico, negligenciando suas próprias necessidades, assumindo responsabilidades do outro e desenvolvendo altos níveis de ansiedade e controle. O tratamento ajuda a identificar e transformar esse padrão."
      },
      {
        question: "O atendimento substitui a necessidade de internação ou internação involuntária?",
        answer: "O atendimento terapêutico atua na conscientização, prevenção e manutenção do cuidado. Caso seja avaliado que o indivíduo corre risco iminente à integridade física ou necessita de desintoxicação hospitalar, orientamos a família sobre os trâmites éticos e as melhores instituições para tratamento intensivo."
      }
    ]
  },
  "supervisao-e-consultoria": {
    title: "Supervisão e Consultoria Clínica",
    description: "Orientação especializada para profissionais de saúde mental, assistentes sociais e equipes institucionais baseada em mais de 30 anos de prática clínica e de saúde pública.",
    targetAudience: [
      "Psicólogos, psicanalistas e terapeutas no início ou transição da prática clínica.",
      "Assistentes sociais que atuam em serviços socioassistenciais (CRAS, CREAS) ou na saúde pública (CAPS, Hospitais).",
      "Equipes de clínicas privadas ou públicas que cuidam de sofrimento grave e dependência química.",
      "Profissionais buscando respaldo ético e aprimoramento técnico para o manejo de casos complexos."
    ],
    benefits: [
      "Discussão clínica enriquecida por décadas de prática na saúde pública e clínica.",
      "Respaldo técnico e ético no manejo de pacientes em situação de vulnerabilidade severa.",
      "Desenvolvimento de leitura teórica articulada com a prática institucional (Reforma Psiquiátrica).",
      "Prevenção do esgotamento profissional por meio de um espaço de escuta do próprio terapeuta/supervisor."
    ],
    howItWorks: "A supervisão pode ser realizada individualmente ou em pequenos grupos profissionais de forma agendada online. Os encontros focam no estudo de casos sob absoluto sigilo e na orientação de estratégias de intervenção clínica ou institucional.",
    faqs: [
      {
        question: "Qual a abordagem utilizada na supervisão?",
        answer: "A supervisão articula a escuta de orientação psicanalítica com o entendimento sistêmico familiar e a bagagem de implementação de políticas de saúde mental e saúde pública (modelo psicossocial da Reforma Psiquiátrica)."
      },
      {
        question: "Como agendar supervisão para equipes institucionais?",
        answer: "Para equipes de CAPS, hospitais ou ONGs, solicitamos entrar em contato por e-mail ou WhatsApp para alinhar a carga horária, os objetivos da consultoria e formatar uma proposta de acompanhamento sob medida."
      }
    ]
  }
};

export function generateStaticParams() {
  return [
    { slug: "psicanalise-online" },
    { slug: "psicoterapia-individual" },
    { slug: "terapia-de-casal-e-familia" },
    { slug: "dependencia-quimica-e-codependencia" },
    { slug: "supervisao-e-consultoria" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicoIndividual({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const whatsappLink = `https://wa.me/5514996838773?text=Ol%C3%A1%2C%20K%C3%A1tia.%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}%20e%20verificar%20hor%C3%A1rios%20dispon%C3%ADveis.`;

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-off-white overflow-x-hidden">
        {/* Breadcrumb & Intro */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-sans text-grafite-suave/60 mb-8">
            <Link href="/" className="hover:text-verde-salvia transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/servicos" className="hover:text-verde-salvia transition-colors">
              Serviços
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-azul-petroleo font-semibold">{service.title}</span>
          </nav>
          
          {/* Title Hero */}
          <div className="max-w-4xl flex flex-col gap-5 text-left mb-12">
            <span className="font-sans text-[10px] tracking-[0.25em] text-verde-salvia font-bold uppercase">
              ATENDIMENTO ESPECIALIZADO
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-azul-petroleo font-medium leading-tight">
              {service.title}
            </h1>
            <p className="font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* Banner Image (350px height) */}
          <div className="relative w-full h-[350px] rounded-3xl overflow-hidden shadow-sm border border-bege-areia/40 mb-16">
            <Image
              src={`/${slug}_banner.png`}
              alt={service.title}
              fill
              priority
              className="object-cover"
              sizes="(max-w-1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-azul-petroleo/5" />
          </div>
        </div>

        {/* Section: Content Grid */}
        <section className="py-12 border-t border-bege-areia/40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Para quem é */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl text-azul-petroleo font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-verde-salvia/10 text-verde-salvia flex items-center justify-center flex-shrink-0 text-sm font-sans font-bold">1</span>
                Para quem é este atendimento?
              </h2>
              
              <ul className="flex flex-col gap-4 font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed">
                {service.targetAudience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-verde-salvia flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Como ajuda */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl text-azul-petroleo font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-dourado-suave/10 text-dourado-suave flex items-center justify-center flex-shrink-0 text-sm font-sans font-bold">2</span>
                Como o processo pode ajudar?
              </h2>
              
              <ul className="flex flex-col gap-4 font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed">
                {service.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-dourado-suave flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Como funciona */}
        <section className="py-16 bg-off-white/40 border-y border-bege-areia/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h2 className="font-serif text-2xl text-azul-petroleo font-semibold flex items-center gap-3">
                <Video className="w-6 h-6 text-verde-salvia" />
                Como funciona o atendimento online?
              </h2>
              <p className="font-sans text-base md:text-lg text-grafite-suave/85 leading-relaxed">
                {service.howItWorks}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-4 bg-white border border-bege-areia/50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-bold text-azul-petroleo font-sans">
                <ShieldCheck className="w-5 h-5 text-verde-salvia" />
                <span>Privacidade Garantida</span>
              </div>
              <p className="font-sans text-xs text-grafite-suave/70 leading-relaxed">
                Atendimento em conformidade com as diretrizes do CRESS/CFP. O ambiente digital é protegido, garantindo sigilo absoluto da sua história.
              </p>
            </div>
          </div>
        </section>

        {/* Section: FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col items-center gap-3 text-center mb-12">
              <HelpCircle className="w-8 h-8 text-dourado-suave" />
              <h2 className="font-serif text-2xl md:text-3xl text-azul-petroleo font-semibold">
                Perguntas Frequentes
              </h2>
              <p className="font-sans text-xs md:text-sm text-grafite-suave/70 max-w-md">
                Esclareça as dúvidas mais comuns sobre o acompanhamento terapêutico e agendamentos.
              </p>
            </div>
            
            <FAQAccordion items={service.faqs} />
          </div>
        </section>

        {/* Final CTA conversion */}
        <section className="py-20 bg-bege-areia/20 border-t border-bege-areia/40 text-center">
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
            <h2 className="font-serif text-2xl md:text-3xl text-azul-petroleo font-medium leading-tight">
              Você não precisa atravessar esse momento sozinho(a).
            </h2>
            <p className="font-sans text-sm text-grafite-suave/80 leading-relaxed max-w-lg">
              Entre em contato para esclarecer dúvidas e verificar horários disponíveis para atendimento online.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-verde-salvia text-off-white font-sans text-xs tracking-widest font-bold rounded-full shadow-md hover:bg-verde-salvia-escuro hover:shadow-lg transition-all duration-200"
            >
              AGENDAR ATENDIMENTO
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
