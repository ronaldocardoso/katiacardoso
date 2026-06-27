"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Leaf,
  Users,
  Monitor,
  Phone,
  Mail,
  ChevronRight,
  Star,
  MessageSquare,
  Clock,
  Shield,
  ArrowUpRight,
  User,
  LifeBuoy,
  HeartHandshake,
  Brain,
  BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import {
  BotanicalBranchLeft,
  BotanicalBranchRight,
  FloralDivider,
  HumanOutline
} from "@/components/BotanicalOrnaments";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "O acolhimento, a escuta e a sensibilidade da Kátia fizeram toda a diferença no meu processo. Sou muito grata por esse espaço de transformação.",
      author: "A. C.",
      type: "Paciente de Psicoterapia Individual"
    },
    {
      text: "Encontramos na terapia de casal uma mediação segura e humana que nos ajudou a reconstruir a comunicação e o respeito mútuo em nossa família.",
      author: "M. & R.",
      type: "Pacientes de Terapia de Casal"
    },
    {
      text: "O suporte técnico e a compreensão profunda sobre codependência familiar me deram forças para lidar com a dependência química na minha família de forma saudável.",
      author: "F. S.",
      type: "Apoio Familiar"
    },
    {
      text: "A psicanálise online trouxe flexibilidade para minha rotina sem perder a profundidade analítica. Recomendo muito o trabalho ético e acolhedor da Kátia.",
      author: "J. M.",
      type: "Paciente de Psicanálise Online"
    },
    {
      text: "Fazer supervisão clínica com a Kátia tem sido enriquecedor. Sua experiência de mais de 30 anos na saúde pública e clínica nos dá muita segurança técnica.",
      author: "L. V.",
      type: "Psicóloga Clínica (Supervisionanda)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const differentials = [
    {
      title: "Experiência Clínica e Institucional",
      description: "Mais de três décadas atuando em diferentes contextos da saúde mental, acompanhando pessoas e famílias em momentos de vulnerabilidade emocional.",
      icon: Heart
    },
    {
      title: "Especialização em Dependência Química",
      description: "Ampla experiência no atendimento de pessoas e familiares impactados pela dependência química e pela codependência.",
      icon: Leaf
    },
    {
      title: "Visão Integrada",
      description: "Integração entre Psicanálise, Terapia Sistêmica Familiar e experiência em Saúde Pública para um cuidado amplo e singular.",
      icon: Users
    },
    {
      title: "Atendimento Online",
      description: "Flexibilidade, privacidade e conforto para realizar seu processo terapêutico de onde você estiver.",
      icon: Monitor
    }
  ];

  const specialties = [
    {
      title: "Psicoterapia Individual",
      description: "Um espaço para compreender emoções, conflitos internos, padrões repetitivos e processos de transformação pessoal.",
      slug: "psicoterapia-individual",
      icon: User,
      color: "green"
    },
    {
      title: "Dependência Química",
      description: "Acompanhamento especializado para pessoas que enfrentam problemas relacionados ao uso de álcool e outras drogas.",
      slug: "dependencia-quimica-e-codependencia",
      icon: LifeBuoy,
      color: "pink"
    },
    {
      title: "Família e Codependência",
      description: "Orientação e suporte para familiares que convivem com o sofrimento causado pela dependência química ou por transtornos mentais.",
      slug: "dependencia-quimica-e-codependencia",
      icon: Users,
      color: "pink"
    },
    {
      title: "Terapia de Casal",
      description: "Acolhimento e mediação de conflitos relacionais, promovendo diálogo e reconstrução dos vínculos.",
      slug: "terapia-de-casal-e-familia",
      icon: HeartHandshake,
      color: "green"
    },
    {
      title: "Saúde Mental",
      description: "Atendimento voltado para questões relacionadas à ansiedade, depressão, luto, autoestima, relacionamentos e crises existenciais.",
      slug: "psicoterapia-individual",
      icon: Brain,
      color: "green"
    },
    {
      title: "Supervisão e Consultoria",
      description: "Orientação para profissionais e equipes que atuam na área de saúde mental e dependência química.",
      slug: "supervisao-e-consultoria",
      icon: BookOpen,
      color: "gold"
    }
  ];

  const whatsappLink = "https://wa.me/5514996838773?text=Ol%C3%A1%2C%20K%C3%A1tia.%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20online%20e%20verificar%20hor%C3%A1rios%20dispon%C3%ADveis.";
  const emailLink = "mailto:contato@katiacardoso.com.br?subject=Dúvida/Agendamento";

  return (
    <>
      <Header />
      
      <main className="flex-grow pt-24 overflow-x-hidden relative">
        {/* Floating Blurred Parallax Orbs (Background) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Orb 1: Soft green sage */}
          <div className="absolute top-[8%] left-[3%] w-80 h-80 rounded-full bg-verde-salvia/5 blur-[90px] animate-float-1" />
          {/* Orb 2: Soft old rose */}
          <div className="absolute top-[35%] right-[5%] w-96 h-96 rounded-full bg-rosa-antigo/5 blur-[100px] animate-float-2" />
          {/* Orb 3: Soft gold */}
          <div className="absolute bottom-[25%] left-[8%] w-80 h-80 rounded-full bg-dourado-suave/5 blur-[90px] animate-float-3" />
        </div>

        {/* 1. Hero Section - Mobile/Tablet (Mockup-compliant) */}
        <section className="lg:hidden bg-white border-b border-bege-areia/20 w-full flex flex-col">
          {/* Top Image + Title overlay */}
          <div className="relative w-full aspect-[1/1.1] overflow-hidden">
            <Image
              src="/katia_portrait_contact.png"
              alt="Kátia Cardoso"
              fill
              priority
              className="object-cover object-[right_5%_center]"
              sizes="100vw"
            />
            {/* Title Overlay */}
            <div className="absolute inset-y-0 left-0 w-[65%] flex items-center pl-6 z-10">
              <h1 className="font-serif text-[34px] md:text-5xl text-azul-petroleo font-medium leading-[1.12] tracking-tight">
                Um espaço de <br />
                <span className="text-verde-salvia font-semibold">escuta, reflexão e</span> <br />
                <span className="text-verde-salvia font-semibold">transformação.</span>
              </h1>
            </div>
          </div>

          {/* Content + CTAs Below */}
          <div className="px-6 py-8 bg-white flex flex-col gap-6 text-left">
            <p className="font-sans text-[15px] md:text-base text-grafite-suave/85 leading-relaxed">
              Com mais de 30 anos de experiência em saúde mental, atuo como <strong className="font-semibold text-azul-petroleo">psicanalista online</strong> e <strong className="font-semibold text-azul-petroleo">terapeuta</strong> atendendo a região de <strong className="font-semibold text-azul-petroleo">Santos</strong>, <strong className="font-semibold text-azul-petroleo">São Vicente</strong>, <strong className="font-semibold text-azul-petroleo">Baixada Santista</strong> e pacientes de todo o Brasil e exterior.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-verde-salvia text-off-white font-sans text-xs tracking-widest font-bold rounded-full shadow-md hover:bg-verde-salvia-escuro hover:shadow-lg transition-all text-center uppercase"
              >
                AGENDAR ATENDIMENTO
              </a>
              
              <Link
                href="/sobre-mim"
                className="w-full py-4 border border-dourado-suave text-dourado-suave hover:bg-bege-areia/10 font-sans text-xs tracking-widest font-bold rounded-full transition-all text-center uppercase"
              >
                CONHEÇA MINHA TRAJETÓRIA
              </Link>
            </div>
          </div>
        </section>

        {/* 1. Hero Section - Desktop */}
        <section className="hidden lg:flex relative min-h-[85vh] items-center bg-off-white border-b border-bege-areia/20 bg-[url('/calm_and_focused_workspace_portrait.png')] lg:bg-[length:auto_100%] lg:bg-[position:right_-180px_center] lg:bg-no-repeat">
          <div className="max-w-7xl mx-auto px-12 w-full grid grid-cols-12 gap-8 items-center z-10">
            {/* Left Content */}
            <div className="col-span-7 flex flex-col gap-6 text-left py-28">
              <span className="font-sans text-xs tracking-[0.25em] text-rosa-antigo font-bold uppercase">
                ESCUTA • ACOLHIMENTO • TRANSFORMAÇÃO
              </span>
              
              <h1 className="font-serif text-[88px] text-azul-petroleo font-medium leading-[1.02] tracking-tight">
                Um espaço de <br />
                <span className="text-verde-salvia font-semibold">escuta, reflexão e</span> <br />
                <span className="text-verde-salvia font-semibold">transformação.</span>
              </h1>
              
              <p className="font-sans text-lg text-grafite-suave/85 leading-relaxed max-w-xl">
                Com mais de 30 anos de experiência em saúde mental, atuo como <strong className="font-semibold text-azul-petroleo">psicanalista online</strong> e <strong className="font-semibold text-azul-petroleo">terapeuta</strong> atendendo a região de <strong className="font-semibold text-azul-petroleo">Santos</strong>, <strong className="font-semibold text-azul-petroleo">São Vicente</strong>, <strong className="font-semibold text-azul-petroleo">Baixada Santista</strong> e pacientes de todo o Brasil e exterior.
              </p>
              
              <div className="flex gap-4 mt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-verde-salvia text-off-white font-sans text-xs tracking-widest font-bold rounded-full shadow-md hover:bg-verde-salvia-escuro hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  AGENDAR ATENDIMENTO
                </a>
                
                <Link
                  href="/sobre-mim"
                  className="px-8 py-3.5 border border-dourado-suave text-dourado-suave hover:bg-dourado-suave hover:text-white font-sans text-xs tracking-widest font-bold rounded-full transition-all duration-200 text-center"
                >
                  CONHEÇA MINHA TRAJETÓRIA
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Bloco de Apresentação (Manifesto) */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Image (Workspace) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden shadow-lg border border-bege-areia/40">
                <Image
                  src="/cozy_workspace.png"
                  alt="Ambiente de atendimento e escuta"
                  fill
                  className="object-cover"
                  sizes="(max-w-720px) 100vw, 400px"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 flex flex-col gap-6 relative">
              <h2 className="font-serif text-3xl md:text-4xl text-azul-petroleo font-medium leading-tight">
                Cuidar da saúde mental <br />
                é um <span className="font-cursive text-rosa-antigo text-4xl md:text-5xl block sm:inline-block font-normal lowercase md:ml-1">ato de coragem.</span>
              </h2>
              
              <div className="flex flex-col gap-4 font-sans text-sm md:text-base text-grafite-suave/80 leading-relaxed">
                <p>
                  A vida nos apresenta desafios que nem sempre conseguimos enfrentar sozinhos. Conflitos emocionais, perdas, relacionamentos difíceis, ansiedade, dependência química e sofrimento psíquico podem gerar sentimentos de impotência e isolamento.
                </p>
                <p>
                  Meu trabalho consiste em oferecer um espaço seguro de acolhimento e escuta qualificada, respeitando a singularidade de cada pessoa e sua história.
                </p>
              </div>
              
              {/* Cursive quote highlight */}
              <div className="border-l-2 border-dourado-suave pl-4 py-1.5 my-2">
                <span className="font-serif italic text-base md:text-lg lg:text-xl text-azul-petroleo/90 font-medium leading-relaxed block">
                  “A psicoterapia e a psicanálise abrem caminhos para que cada pessoa se posicione de forma nova diante do seu próprio desejo e das suas relações.”
                </span>
              </div>
            </div>

            {/* Rightmost Decorative Human Outline */}
            <div className="hidden xl:block xl:col-span-1 opacity-25">
              <HumanOutline className="w-24 h-auto" />
            </div>
          </div>

          {/* Discreet Green Arabesque */}
          <div className="absolute right-0 top-12 hidden lg:block pointer-events-none">
            <BotanicalBranchRight className="text-verde-salvia/35 w-40 h-auto" />
          </div>
        </section>

        {/* 3. Diferenciais */}
        <section className="relative py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <span className="font-sans text-[10px] tracking-[0.25em] text-azul-petroleo font-bold uppercase">
              COMO TRABALHO
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-azul-petroleo font-medium mt-3">
              Meus Diferenciais
            </h2>
            <FloralDivider className="text-verde-salvia/45 w-24 h-4 mt-3 mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentials.map((item, index) => {
                const Icon = item.icon;
                const isPink = index === 1 || index === 2;
                return (
                  <div
                    key={index}
                    className="bg-white border border-bege-areia/60 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-xl hover:border-bege-areia hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 bg-bege-areia/40 rounded-full flex items-center justify-center transition-all duration-300 mb-6 ${
                      isPink
                        ? "text-rosa-antigo group-hover:bg-rosa-antigo group-hover:text-off-white"
                        : "text-verde-salvia group-hover:bg-verde-salvia group-hover:text-off-white"
                    }`}>
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-serif text-lg text-azul-petroleo font-semibold mb-4 leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="font-sans text-xs md:text-sm text-grafite-suave/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Áreas de Atuação */}
        <section className="relative py-20 bg-white border-b border-bege-areia/20">
          {/* Discreet Green Arabesque */}
          <div className="absolute left-0 top-20 hidden lg:block pointer-events-none">
            <BotanicalBranchLeft className="text-verde-salvia/35 w-40 h-auto" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <span className="font-sans text-[10px] tracking-[0.25em] text-azul-petroleo font-bold uppercase">
              ÁREAS DE ATENDIMENTO
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-azul-petroleo font-medium mt-3">
              Áreas de Atuação
            </h2>
            <FloralDivider className="text-verde-salvia/45 w-24 h-4 mt-3 mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((item, index) => {
                const Icon = item.icon;
                let colorClasses = "text-verde-salvia bg-verde-salvia/10 group-hover:bg-verde-salvia";
                if (item.color === "pink") {
                  colorClasses = "text-rosa-antigo bg-rosa-antigo/10 group-hover:bg-rosa-antigo";
                } else if (item.color === "gold") {
                  colorClasses = "text-dourado-suave bg-dourado-suave/10 group-hover:bg-dourado-suave";
                }

                return (
                  <div
                    key={index}
                    className="bg-off-white/40 border border-bege-areia/40 hover:border-bege-areia hover:bg-white rounded-3xl p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between group"
                  >
                    <div>
                      {/* Large Icon */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:text-off-white transition-all duration-300 ${colorClasses}`}>
                        <Icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>

                      <h3 className="font-serif text-xl text-azul-petroleo font-semibold mb-3 group-hover:text-verde-salvia transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="font-sans text-sm text-grafite-suave/80 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      href={`/servicos/${item.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 text-xs tracking-wider font-bold text-dourado-suave hover:text-verde-salvia-escuro transition-colors mt-auto mx-auto font-sans"
                    >
                      SAIBA MAIS
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-azul-petroleo text-off-white hover:bg-verde-salvia font-sans text-xs tracking-widest font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                VER TODOS OS SERVIÇOS
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Depoimento */}
        <section className="relative py-20 bg-gradient-to-r from-off-white via-rosa-antigo/5 to-off-white flex items-center justify-center overflow-hidden">
          {/* Subtle piled stones SVG on the right */}
          <div className="absolute right-12 hidden md:block opacity-40 text-dourado-suave/40 pointer-events-none">
            <svg viewBox="0 0 100 120" className="w-24 h-auto stroke-current fill-none" strokeWidth="1.2">
              {/* Stacked stones drawing */}
              <ellipse cx="50" cy="100" rx="35" ry="12" />
              <ellipse cx="50" cy="78" rx="28" ry="10" />
              <ellipse cx="50" cy="58" rx="22" ry="9" />
              <ellipse cx="49" cy="41" rx="16" ry="7" />
              <ellipse cx="51" cy="27" rx="10" ry="6" />
            </svg>
          </div>
          
          {/* Leaf on the left */}
          <div className="absolute left-12 hidden md:block opacity-40 text-verde-salvia/30 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-20 h-auto stroke-current fill-none" strokeWidth="1">
              <path d="M10,80 C30,70 50,40 60,10 C50,30 30,50 10,80 Z" />
              <path d="M20,60 C35,50 50,30 60,10" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center gap-6">
            <div 
              key={activeTestimonial}
              className="flex flex-col items-center gap-6 animate-in fade-in duration-500"
            >
              <span className="font-serif text-6xl text-verde-salvia/30 leading-none">“</span>
              
              <p className="font-serif italic text-lg md:text-xl lg:text-2xl text-azul-petroleo leading-relaxed max-w-3xl -mt-4 min-h-[90px] flex items-center justify-center">
                {testimonials[activeTestimonial].text}
              </p>
              
              <div className="flex items-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-dourado-suave text-dourado-suave" />
                ))}
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="font-sans text-xs tracking-wider text-azul-petroleo font-bold">
                  {testimonials[activeTestimonial].author}
                </span>
                <span className="font-sans text-[10px] tracking-wider text-grafite-suave/60 uppercase">
                  {testimonials[activeTestimonial].type}
                </span>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeTestimonial ? "bg-verde-salvia w-6" : "bg-bege-areia hover:bg-verde-salvia/50 w-2"
                  }`}
                  aria-label={`Testemunho ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 6. Bloco de Contato e Conversão */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="font-serif text-3xl md:text-4xl text-azul-petroleo font-medium leading-tight">
                Vamos <br />
                <span className="text-verde-salvia font-semibold">conversar?</span>
              </h2>
              
              <p className="font-sans text-sm md:text-base text-grafite-suave/85 leading-relaxed">
                Buscar ajuda é um passo importante e pode representar o início de um novo momento em sua vida. Estou aqui para ouvir, acolher e ajudar você a encontrar caminhos possíveis.
              </p>
              
              <ul className="flex flex-col gap-3 mt-2 text-sm font-sans text-grafite-suave/90">
                <li className="flex items-center gap-3">
                  <Shield className="w-4.5 h-4.5 text-verde-salvia" />
                  <span>Atendimento online para todo o Brasil</span>
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="w-4.5 h-4.5 text-verde-salvia" />
                  <span>Escuta ética, acolhedora e sigilosa</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4.5 h-4.5 text-verde-salvia" />
                  <span>Horários flexíveis</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare className="w-4.5 h-4.5 text-verde-salvia" />
                  <span>Primeiro contato para esclarecimento de dúvidas</span>
                </li>
              </ul>
            </div>

            {/* Right Panels Container */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* WhatsApp Card */}
              <div className="bg-off-white border border-bege-areia/50 hover:border-bege-areia hover:bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center gap-4">
                <div className="w-12 h-12 bg-verde-salvia/10 text-verde-salvia rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-azul-petroleo font-semibold mb-1">WhatsApp</h4>
                  <p className="font-sans text-[11px] text-grafite-suave/70">Fale comigo diretamente pelo WhatsApp.</p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-verde-salvia hover:bg-verde-salvia-escuro text-off-white font-sans text-[10px] tracking-widest font-bold rounded-full transition-colors text-center"
                >
                  ENVIAR MENSAGEM
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-off-white border border-bege-areia/50 hover:border-bege-areia hover:bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center gap-4">
                <div className="w-12 h-12 bg-rosa-antigo/10 text-rosa-antigo rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-azul-petroleo font-semibold mb-1">E-mail</h4>
                  <p className="font-sans text-[11px] text-grafite-suave/70">Envie sua mensagem por e-mail.</p>
                </div>
                <a
                  href={emailLink}
                  className="w-full py-2 bg-rosa-antigo hover:bg-rosa-antigo-escuro text-off-white font-sans text-[10px] tracking-widest font-bold rounded-full transition-colors text-center"
                >
                  ENVIAR E-MAIL
                </a>
              </div>

              {/* Online Service Card */}
              <div className="bg-off-white border border-bege-areia/50 hover:border-bege-areia hover:bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center gap-4">
                <div className="w-12 h-12 bg-rosa-antigo/10 text-rosa-antigo rounded-full flex items-center justify-center">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-azul-petroleo font-semibold mb-1">Atendimento</h4>
                  <p className="font-sans text-[11px] text-grafite-suave/70">Saiba como funciona uma sessão online.</p>
                </div>
                <Link
                  href="/servicos/psicanalise-online"
                  className="w-full py-2 border border-dourado-suave hover:bg-dourado-suave hover:text-white text-dourado-suave font-sans text-[10px] tracking-widest font-bold rounded-full transition-all text-center"
                >
                  SAIBA MAIS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
