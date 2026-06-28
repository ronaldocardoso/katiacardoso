"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { BotanicalBranchLeft, BotanicalBranchRight, FloralDivider } from "@/components/BotanicalOrnaments";
import { blogPosts, BlogPost } from "./posts";
import { Search, Calendar, Clock, ChevronRight, Mail, CheckCircle } from "lucide-react";

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterConsent, setNewsletterConsent] = useState<boolean>(false);
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle");

  const categories = [
    "Todas",
    "Saúde Mental",
    "Dependência Química",
    "Família e Relacionamentos",
    "Autoconhecimento",
    "Psicanálise"
  ];

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Todas" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Identify featured post in the filtered list or use global featured
  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter((p) => p.slug !== (featuredPost?.slug || ""));

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterConsent) {
      setNewsletterStatus("error");
      return;
    }
    // Simulate successful newsletter signup
    setNewsletterStatus("success");
    setNewsletterEmail("");
    setNewsletterConsent(false);
  };

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-off-white overflow-x-hidden">
        {/* Page Hero */}
        <section className="relative py-12 md:py-16 text-center">
          <div className="absolute left-0 bottom-5 hidden lg:block opacity-35">
            <BotanicalBranchLeft className="w-36 h-auto" />
          </div>
          <div className="absolute right-0 top-5 hidden lg:block opacity-35">
            <BotanicalBranchRight className="w-36 h-auto" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-4">
            <span className="font-sans text-[10px] tracking-[0.25em] text-azul-petroleo font-bold uppercase">
              ARTIGOS E REFLEXÕES
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-azul-petroleo font-medium leading-tight">
              Reflexões sobre saúde mental e vínculos
            </h1>
            <FloralDivider className="text-verde-salvia/45 w-24 h-4 mt-1 mb-2" />
            <p className="font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed max-w-xl">
              Artigos informativos e reflexões éticas sobre psicanálise, dinâmicas de casal e família, e o cuidado na dependência química.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="py-6 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-6 justify-between items-center z-25 relative">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                }}
                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold tracking-wider whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-verde-salvia text-off-white shadow-sm"
                    : "bg-white text-azul-petroleo border border-bege-areia/40 hover:border-bege-areia"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-bege-areia/60 rounded-full py-2.5 pl-10 pr-4 font-sans text-xs text-grafite-suave placeholder-grafite-suave/50 focus:outline-none focus:border-verde-salvia transition-colors shadow-[0_2px_6px_rgba(0,0,0,0.01)]"
            />
            <Search className="w-4 h-4 text-grafite-suave/40 absolute left-3.5 top-3" />
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 max-w-7xl mx-auto px-6 md:px-12">
          {filteredPosts.length === 0 ? (
            <div className="bg-white border border-bege-areia/40 rounded-3xl p-16 text-center shadow-sm">
              <p className="font-serif text-lg text-azul-petroleo font-semibold">Nenhum artigo encontrado</p>
              <p className="font-sans text-xs text-grafite-suave/70 mt-2">
                Experimente alterar os filtros de categoria ou limpar a busca.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Todas");
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-2.5 bg-verde-salvia text-off-white font-sans text-xs tracking-wider font-semibold rounded-full hover:bg-verde-salvia-escuro transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {/* Featured Post */}
              {featuredPost && selectedCategory === "Todas" && searchQuery === "" && (
                <div className="bg-white border border-bege-areia/40 rounded-[2.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-xl hover:border-bege-areia transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0 group">
                  {/* Image side - Simulated elegant background with typography */}
                  <div className="lg:col-span-6 bg-gradient-to-br from-bege-areia/60 to-verde-salvia/20 p-12 flex flex-col justify-between min-h-[300px] relative">
                    <span className="font-sans text-[10px] tracking-widest font-bold text-verde-salvia-escuro bg-white/70 px-3.5 py-1.5 rounded-full w-fit">
                      {featuredPost.category}
                    </span>
                    <div>
                      <span className="font-serif text-[180px] text-dourado-suave/10 absolute top-0 right-10 select-none pointer-events-none font-bold">
                        “
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-azul-petroleo font-bold leading-snug group-hover:text-verde-salvia transition-colors relative z-10">
                        {featuredPost.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-sans text-grafite-suave/60">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between gap-6">
                    <p className="font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-sans tracking-widest font-bold text-dourado-suave hover:text-verde-salvia transition-all group/btn"
                    >
                      LER ARTIGO COMPLETO
                      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory !== "Todas" || searchQuery !== "" ? filteredPosts : regularPosts).map((post) => (
                  <div
                    key={post.slug}
                    className="bg-white border border-bege-areia/40 rounded-3xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-xl hover:border-bege-areia hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-sans text-[9px] tracking-widest font-bold text-verde-salvia-escuro bg-bege-areia/30 px-3 py-1 rounded-full uppercase">
                          {post.category}
                        </span>
                        <span className="font-sans text-[10px] text-grafite-suave/55">{post.date}</span>
                      </div>

                      <h3 className="font-serif text-lg md:text-xl text-azul-petroleo font-semibold mb-3 leading-snug group-hover:text-verde-salvia transition-colors">
                        {post.title}
                      </h3>

                      <p className="font-sans text-xs md:text-sm text-grafite-suave/80 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs tracking-wider font-bold text-dourado-suave hover:text-verde-salvia-escuro transition-colors mt-auto font-sans"
                    >
                      LER ARTIGO
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="py-16 max-w-4xl mx-auto px-6 mt-12">
          <div className="bg-white border border-bege-areia/60 rounded-[2rem] p-8 md:p-12 shadow-sm text-center flex flex-col items-center gap-6">
            <div className="w-12 h-12 bg-dourado-suave/10 text-dourado-suave rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-serif text-2xl text-azul-petroleo font-medium">Assine nossa Newsletter</h2>
              <p className="font-sans text-xs md:text-sm text-grafite-suave/70 max-w-md">
                Receba reflexões mensais sobre saúde mental, psicanálise e relações familiares diretamente em seu e-mail.
              </p>
            </div>

            {newsletterStatus === "success" ? (
              <div className="flex items-center gap-2 text-xs font-sans text-verde-salvia-escuro font-bold bg-verde-salvia/10 px-6 py-3 rounded-full">
                <CheckCircle className="w-4 h-4" />
                Inscrição realizada com sucesso! Obrigado por acompanhar.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="w-full max-w-md flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    type="email"
                    required
                    placeholder="Seu e-mail profissional ou pessoal"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-grow bg-off-white border border-bege-areia/60 rounded-full py-2.5 px-5 font-sans text-xs focus:outline-none focus:border-verde-salvia transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-verde-salvia hover:bg-verde-salvia-escuro text-off-white font-sans text-xs tracking-wider font-semibold rounded-full transition-colors shadow-sm"
                  >
                    INSCREVER-SE
                  </button>
                </div>
                
                {/* Consent LGPD checkbox */}
                <label className="flex items-start gap-2.5 text-[10px] text-grafite-suave/70 text-left px-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={newsletterConsent}
                    onChange={(e) => setNewsletterConsent(e.target.checked)}
                    className="mt-0.5 rounded border-bege-areia text-verde-salvia focus:ring-verde-salvia"
                  />
                  <span>
                    Concordo em receber e-mails informativos. Seus dados são confidenciais e você pode cancelar a inscrição a qualquer momento.
                  </span>
                </label>
                {newsletterStatus === "error" && (
                  <p className="text-[10px] text-red-500 font-bold text-left px-2">
                    Por favor, preencha seu e-mail e dê seu consentimento.
                  </p>
                )}
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
