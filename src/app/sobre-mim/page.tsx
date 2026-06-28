"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { BotanicalBranchLeft, BotanicalBranchRight, FloralDivider } from "@/components/BotanicalOrnaments";
import { Award, BookOpen, Heart, Briefcase, GraduationCap } from "lucide-react";

export default function SobreMim() {
  const whatsappLink = "https://wa.me/5514996838773?text=Ol%C3%A1%2C%20K%C3%A1tia.%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20online%20e%20verificar%20hor%C3%A1rios%20dispon%C3%ADveis.";

  const education = [
    {
      degree: "Formação em Psicanálise",
      institution: "Instituto de Psicanálise e Estudos Clínicos",
      year: "2010"
    },
    {
      degree: "Especialização em Terapia de Casal e Família",
      institution: "Centro de Estudos da Família e Sistemas",
      year: "2005"
    },
    {
      degree: "Graduação em Serviço Social",
      institution: "Universidade Estadual / Federal (CRESS/SP)",
      year: "1994"
    }
  ];

  const experience = [
    {
      role: "Atendimento Clínico e Terapia Familiar",
      description: "Consultório particular com foco em Psicoterapia Individual, Terapia de Casal, Dependência Química, Codependência e Supervisão de profissionais da área."
    },
    {
      role: "Atuação em Serviços Públicos de Saúde Mental (CAPS)",
      description: "Acompanhamento clínico de casos complexos, sofrimento psíquico grave e persistente, e coordenação de grupos terapêuticos e assembleias familiares."
    },
    {
      role: "Docência e Supervisão de Residência Multiprofissional",
      description: "Tutora e preceptora de residentes em psiquiatria social, saúde mental coletiva e assistência psicossocial."
    },
    {
      role: "Experiência de Emergência e Assistência Psiquiátrica",
      description: "Supervisão e cuidado em enfermarias psiquiátricas de hospitais gerais, pronto-socorros e ambulatórios de saúde pública."
    }
  ];

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 overflow-x-hidden bg-off-white">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16">
          <div className="absolute left-0 bottom-10 hidden lg:block opacity-30">
            <BotanicalBranchLeft className="w-36 h-auto" />
          </div>
          <div className="absolute right-0 top-10 hidden lg:block opacity-30">
            <BotanicalBranchRight className="w-36 h-auto" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 relative">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="font-sans text-[10px] tracking-[0.25em] text-azul-petroleo font-bold uppercase">
                MINHA TRAJETÓRIA
              </span>
              
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-azul-petroleo font-medium leading-[1.12]">
                Minha história é construída pela <span className="text-verde-salvia font-semibold">escuta</span>, pela <span className="text-verde-salvia font-semibold">ética</span> e pelo compromisso com o cuidado em saúde mental.
              </h1>

              <div className="font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed flex flex-col gap-4">
                <p>
                  Sou Assistente Social, Psicanalista e Terapeuta de Casal e Família, com mais de 30 anos dedicados ao cuidado em saúde mental.
                </p>
                <p>
                  Minha trajetória profissional foi construída dentro do processo de transformação da assistência psiquiátrica brasileira, participando ativamente da consolidação do modelo psicossocial instituído pela Lei da Reforma Psiquiátrica.
                </p>
                <p>
                  Ao longo da carreira, atuei em hospitais gerais, pronto-socorros, ambulatórios de saúde mental, enfermarias psiquiátricas, CAPS (Centros de Atenção Psicossocial) e serviços territoriais, acompanhando pessoas em sofrimento psíquico grave, dependência química e suas famílias.
                </p>
                <p>
                  Além da prática clínica, participei da formação de novos profissionais como tutora e preceptora de residência multiprofissional em psiquiatria social.
                </p>
                <p>
                  Hoje, integro toda essa experiência ao atendimento psicoterapêutico online, oferecendo uma escuta ética, acolhedora e comprometida com a singularidade de cada pessoa.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border-[8px] border-white">
                <Image
                  src="/katia_1.png"
                  alt="Kátia Cardoso - Psicanalista"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-w-720px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy / Manifesto Section */}
        <section className="py-16 bg-white border-y border-bege-areia/30">
          <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6">
            <div className="w-12 h-12 bg-rosa-antigo/10 text-rosa-antigo rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            
            <h2 className="font-serif text-2xl md:text-3xl text-azul-petroleo font-medium">
              Minha Filosofia de Trabalho
            </h2>
            <FloralDivider className="text-verde-salvia/45 w-24 h-4 mt-2" />
            
            <p className="font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed max-w-3xl">
              Acredito que o sofrimento psíquico e os conflitos familiares não devem ser tratados apenas sob a ótica da patologização ou da frieza clínica. Cada sujeito traz uma narrativa viva e singular, que precisa de um espaço seguro de acolhimento e escuta sem julgamentos. Meu compromisso é caminhar ao seu lado com ética, dedicação e técnica, ajudando a abrir novas perspectivas de vida.
            </p>
          </div>
        </section>

        {/* Academic & Experience Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Academic Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-dourado-suave/10 text-dourado-suave rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl text-azul-petroleo font-semibold">Formação Acadêmica</h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white border border-bege-areia/40 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                  >
                    <span className="font-sans text-[10px] tracking-wider text-dourado-suave font-bold uppercase">
                      Conclusão: {edu.year}
                    </span>
                    <h3 className="font-serif text-lg text-azul-petroleo font-semibold mt-1 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="font-sans text-sm text-grafite-suave/85">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-azul-petroleo/10 text-azul-petroleo rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl text-azul-petroleo font-semibold">Experiência Profissional</h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-white border border-bege-areia/40 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                  >
                    <h3 className="font-serif text-lg text-azul-petroleo font-semibold mb-2">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-grafite-suave/80 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-bege-areia/30 border-t border-bege-areia/50 text-center">
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
            <h2 className="font-serif text-2xl md:text-3xl text-azul-petroleo font-medium">
              Vamos construir um novo caminho juntos?
            </h2>
            <FloralDivider className="text-verde-salvia/45 w-24 h-4 mt-2" />
            <p className="font-sans text-sm text-grafite-suave/80 leading-relaxed max-w-xl">
              Se você está em busca de acolhimento emocional, quer restaurar os laços familiares ou precisa de orientação especializada, entre em contato.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-8 py-3.5 bg-verde-salvia text-off-white font-sans text-xs tracking-widest font-bold rounded-full shadow-md hover:bg-verde-salvia-escuro hover:shadow-lg transition-all duration-200"
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
