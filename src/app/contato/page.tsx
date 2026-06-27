"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { BotanicalBranchLeft, BotanicalBranchRight, FloralDivider } from "@/components/BotanicalOrnaments";
import { Phone, Mail, MapPin, CheckCircle, Shield, AlertCircle, Send } from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    assunto: "Dúvida Geral",
    mensagem: "",
    consentimento: false
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const whatsappLink = "https://wa.me/5514996838773?text=Ol%C3%A1%2C%20K%C3%A1tia.%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20online%20e%20verificar%20hor%C3%A1rios%20dispon%C3%ADveis.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem || !formData.consentimento) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");

    // Simulate sending message
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        assunto: "Dúvida Geral",
        mensagem: "",
        consentimento: false
      });
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      consentimento: e.target.checked
    }));
  };

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-off-white overflow-x-hidden">
        {/* Contact Hero */}
        <section className="relative py-12 md:py-16 text-center">
          <div className="absolute left-0 bottom-5 hidden lg:block opacity-35">
            <BotanicalBranchLeft className="w-36 h-auto" />
          </div>
          <div className="absolute right-0 top-5 hidden lg:block opacity-35">
            <BotanicalBranchRight className="w-36 h-auto" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-4">
            {/* Portrait Image */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md mb-2">
              <Image
                src="/katia_portrait_contact.png"
                alt="Kátia Cardoso"
                fill
                className="object-cover object-top"
                sizes="144px"
                priority
              />
            </div>

            <span className="font-sans text-[10px] tracking-[0.25em] text-azul-petroleo font-bold uppercase">
              ENTRE EM CONTATO
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-azul-petroleo font-medium leading-tight">
              Vamos conversar?
            </h1>
            <FloralDivider className="text-verde-salvia/45 w-24 h-4 mt-1 mb-2" />
            <p className="font-sans text-sm md:text-base text-grafite-suave/80 leading-relaxed max-w-xl">
              Buscar ajuda é um passo importante e pode representar o início de um novo momento em sua vida. Estou aqui para ouvir e acolher sua história.
            </p>
          </div>
        </section>

        {/* Contact Grid Section */}
        <section className="py-12 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Contact Channels */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h2 className="font-serif text-2xl text-azul-petroleo font-semibold">
                Canais de Atendimento
              </h2>
              
              <div className="flex flex-col gap-6">
                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-bege-areia/40 hover:border-bege-areia rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-verde-salvia/10 text-verde-salvia rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-verde-salvia group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-azul-petroleo font-semibold group-hover:text-verde-salvia transition-colors">
                      WhatsApp
                    </h3>
                    <p className="font-sans text-xs text-grafite-suave/70 mt-1">
                      Agendamentos e dúvidas rápidas.
                    </p>
                    <span className="font-sans text-sm text-verde-salvia font-bold block mt-2">
                      (14) 99683-8773
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contato@katiacardoso.com.br"
                  className="bg-white border border-bege-areia/40 hover:border-bege-areia rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-azul-petroleo/10 text-azul-petroleo rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-azul-petroleo group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-azul-petroleo font-semibold group-hover:text-azul-petroleo transition-colors">
                      E-mail
                    </h3>
                    <p className="font-sans text-xs text-grafite-suave/70 mt-1">
                      Para parcerias, supervisão ou mensagens formais.
                    </p>
                    <span className="font-sans text-sm text-azul-petroleo font-bold block mt-2">
                      contato@katiacardoso.com.br
                    </span>
                  </div>
                </a>

                {/* Address/Scope */}
                <div
                  className="bg-white border border-bege-areia/40 rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-dourado-suave/10 text-dourado-suave rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-azul-petroleo font-semibold">
                      Atendimento Online
                    </h3>
                    <p className="font-sans text-xs text-grafite-suave/70 mt-1">
                      Atendimento online e suporte para Santos, São Vicente, Baixada Santista, todo o Brasil e exterior.
                    </p>
                    <span className="font-sans text-sm text-grafite-suave font-medium block mt-2">
                      Consulte fuso horário e horários flexíveis.
                    </span>
                  </div>
                </div>
              </div>

              {/* Ethics Alert */}
              <div className="bg-bege-areia/20 border border-bege-areia/50 rounded-2xl p-5 flex gap-3 text-xs text-grafite-suave/80 leading-relaxed font-sans">
                <Shield className="w-5 h-5 text-dourado-suave flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-azul-petroleo">Aviso Ético:</strong> Não solicitamos dados de saúde, diagnósticos ou informações clínicas confidenciais neste formulário. Seu sigilo começa desde o primeiro contato.
                </div>
              </div>
            </div>

            {/* Right Side: Message Form */}
            <div className="lg:col-span-7 bg-white border border-bege-areia/50 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <h2 className="font-serif text-2xl text-azul-petroleo font-semibold mb-6">
                Envie uma Mensagem
              </h2>

              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-verde-salvia/5 border border-verde-salvia/20 rounded-2xl gap-4">
                  <div className="w-14 h-14 bg-verde-salvia/10 text-verde-salvia rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl text-azul-petroleo font-semibold">
                    Mensagem Enviada!
                  </h3>
                  <p className="font-sans text-sm text-grafite-suave/85 max-w-sm leading-relaxed">
                    Obrigada pela sua mensagem. Retornarei assim que possível para esclarecer suas dúvidas e orientar os próximos passos.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 px-6 py-2 bg-verde-salvia text-off-white font-sans text-xs tracking-wider font-semibold rounded-full hover:bg-verde-salvia-escuro transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-sans">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nome" className="text-xs font-bold text-azul-petroleo">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      placeholder="Ex: Ana Silva"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full bg-verde-salvia border border-verde-salvia-escuro/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Contact Fields Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-azul-petroleo">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Ex: ana@exemplo.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-verde-salvia border border-verde-salvia-escuro/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="whatsapp" className="text-xs font-bold text-azul-petroleo">
                        WhatsApp (opcional)
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        placeholder="Ex: (14) 99683-8773"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="w-full bg-verde-salvia border border-verde-salvia-escuro/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject select */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="assunto" className="text-xs font-bold text-azul-petroleo">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      className="w-full bg-verde-salvia border border-verde-salvia-escuro/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                    >
                      <option value="Dúvida Geral" className="text-azul-petroleo bg-white">Dúvida Geral</option>
                      <option value="Agendamento de Sessão" className="text-azul-petroleo bg-white">Agendamento de Sessão</option>
                      <option value="Terapia Familiar/Casal" className="text-azul-petroleo bg-white">Terapia Familiar/Casal</option>
                      <option value="Supervisão Clínica" className="text-azul-petroleo bg-white">Supervisão Clínica</option>
                      <option value="Consultoria Institucional" className="text-azul-petroleo bg-white">Consultoria Institucional</option>
                    </select>
                  </div>

                  {/* Message content */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mensagem" className="text-xs font-bold text-azul-petroleo">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={5}
                      placeholder="Como posso te ajudar? (Por favor, evite expor dados clínicos confidenciais neste momento)"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="w-full bg-verde-salvia border border-verde-salvia-escuro/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Consent checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consentimento}
                      onChange={handleCheckboxChange}
                      className="mt-0.5 rounded border-bege-areia text-verde-salvia focus:ring-verde-salvia"
                    />
                    <span className="text-xs text-grafite-suave/80 leading-relaxed">
                      Li e concordo com a{" "}
                      <Link
                        href="/politica-de-privacidade"
                        className="text-verde-salvia hover:text-verde-salvia-escuro underline font-semibold"
                      >
                        Política de Privacidade
                      </Link>
                      .
                    </span>
                  </label>

                  {/* Status alert */}
                  {formStatus === "error" && (
                    <div className="flex items-center gap-2 text-xs font-bold text-red-600 bg-red-50 p-3 rounded-xl">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Preencha todos os campos obrigatórios e aceite a política de privacidade.
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-3.5 bg-verde-salvia hover:bg-verde-salvia-escuro disabled:bg-verde-salvia/60 text-off-white font-sans text-xs tracking-widest font-bold rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {formStatus === "submitting" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
