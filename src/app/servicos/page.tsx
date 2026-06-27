"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { BotanicalBranchLeft, BotanicalBranchRight, FloralDivider } from "@/components/BotanicalOrnaments";
import { Heart, Activity, Users, ShieldAlert, BookOpen, Monitor, Phone, ChevronRight } from "lucide-react";

export default function Servicos() {
  const whatsappLink = "https://wa.me/5514996838773?text=Ol%C3%A1%2C%20K%C3%A1tia.%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20online%20e%20verificar%20hor%C3%A1rios%20dispon%C3%ADveis.";

  const servicesList = [
    {
      title: "Psicanálise Online",
      description: "Processo terapêutico voltado ao autoconhecimento e à compreensão de conflitos emocionais inconscientes, oferecendo flexibilidade e segurança no ambiente virtual.",
      slug: "psicanalise-online",
      icon: Monitor,
      details: ["Investigação de padrões inconscientes", "Desenvolvimento pessoal profundo", "Sessões por videochamada segura", "Ética e sigilo profissional estritos"]
    },
    {
      title: "Psicoterapia Individual",
      description: "Atendimento para adultos que desejam compreender seus sofrimentos emocionais, lidar com crises, ansiedade, depressão, luto e promover mudanças em suas vidas.",
      slug: "psicoterapia-individual",
      icon: Heart,
      details: ["Foco em demandas emocionais do cotidiano", "Superação de traumas e bloqueios", "Autonomia e fortalecimento do ego", "Ambiente de escuta livre de julgamentos"]
    },
    {
      title: "Terapia de Casal e Família",
      description: "Espaço de mediação e diálogo para casais e familiares que buscam compreender seus vínculos, resolver conflitos e restabelecer formas saudáveis de convivência.",
      slug: "terapia-de-casal-e-familia",
      icon: Users,
      details: ["Melhoria da comunicação conjugal e familiar", "Compreensão de dinâmicas transgeracionais", "Superação de crises de transição familiar", "Fortalecimento de vínculos afetivos"]
    },
    {
      title: "Dependência Química e Codependência",
      description: "Atendimento especializado e humanizado para pessoas que sofrem com o abuso de substâncias e para familiares impactados pelas dinâmicas da codependência.",
      slug: "dependencia-quimica-e-codependencia",
      icon: ShieldAlert,
      details: ["Orientação em redução de danos e abstinência", "Apoio a familiares (Codependência)", "Abordagem multiprofissional integrada", "Suporte no planejamento de tratamentos"]
    },
    {
      title: "Supervisão e Consultoria",
      description: "Orientação clínica e institucional para assistentes sociais, psicólogos, psicanalistas e equipes de saúde mental e dependência química.",
      slug: "supervisao-e-consultoria",
      icon: BookOpen,
      details: ["Discussão ética e teórica de casos clínicos", "Orientação em políticas públicas de saúde mental", "Capacitação para intervenções em crises familiares", "Aprimoramento da postura profissional"]
    }
  ];

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 overflow-x-hidden bg-off-white">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 text-center">
          <div className="absolute left-0 bottom-5 hidden lg:block opacity-35">
            <BotanicalBranchLeft className="w-36 h-auto" />
          </div>
          <div className="absolute right-0 top-5 hidden lg:block opacity-35">
            <BotanicalBranchRight className="w-36 h-auto" />
          </div>

          <div className="max-w-4xl mx-auto px-6 z-10 relative flex flex-col items-center gap-6">
            <span className="font-sans text-[10px] tracking-[0.25em] text-azul-petroleo font-bold uppercase">
              COMO POSSO AJUDAR
            </span>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-azul-petroleo font-medium leading-tight">
              Cuidado especializado para diferentes momentos da vida.
            </h1>
            <FloralDivider className="text-verde-salvia/45 w-24 h-4 mt-2" />
            
            <p className="font-sans text-sm md:text-base text-grafite-suave/80 leading-relaxed max-w-2xl">
              Cada processo terapêutico é único. Conheça as possibilidades de atendimento e encontre o espaço que melhor acolhe sua necessidade atual.
            </p>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-bege-areia/50 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_16px_rgba(0,0,0,0.01)] hover:shadow-xl hover:border-bege-areia transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Text Detail */}
                  <div className="lg:col-span-8 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-bege-areia/40 text-verde-salvia rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="font-serif text-2xl text-azul-petroleo font-semibold">
                        {service.title}
                      </h2>
                    </div>

                    <p className="font-sans text-sm md:text-base text-grafite-suave/80 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-sans text-grafite-suave/70">
                          <div className="w-1.5 h-1.5 bg-dourado-suave rounded-full flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 w-full justify-center">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow py-3 px-6 bg-rosa-antigo text-off-white text-center font-sans text-xs tracking-widest font-bold rounded-full shadow-sm hover:bg-rosa-antigo-escuro transition-all"
                    >
                      AGENDAR ATENDIMENTO
                    </a>
                    
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="flex-grow py-3 px-6 border border-dourado-suave text-dourado-suave hover:bg-bege-areia/20 text-center font-sans text-xs tracking-widest font-bold rounded-full transition-all flex items-center justify-center gap-1.5"
                    >
                      SAIBA MAIS
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="py-20 bg-bege-areia/20 border-t border-bege-areia/50 text-center">
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
            <h2 className="font-serif text-2xl md:text-3xl text-azul-petroleo font-medium">
              Você não precisa atravessar esse momento sozinho(a).
            </h2>
            <FloralDivider className="text-verde-salvia/45 w-24 h-4 mt-2" />
            <p className="font-sans text-sm text-grafite-suave/80 leading-relaxed max-w-xl">
              Entre em contato para esclarecer dúvidas e verificar horários disponíveis para atendimento online em todo o Brasil.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-rosa-antigo text-off-white font-sans text-xs tracking-widest font-bold rounded-full shadow-md hover:bg-rosa-antigo-escuro transition-all"
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
