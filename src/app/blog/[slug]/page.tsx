import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { blogPosts, BlogPost } from "../posts";
import { ChevronRight, Calendar, Clock, ArrowLeft, Send } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Suggest other posts (excluding the current one)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const whatsappLink = "https://wa.me/5514996838773?text=Ol%C3%A1%2C%20K%C3%A1tia.%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20online%20e%20verificar%20hor%C3%A1rios%20dispon%C3%ADveis.";

  // Helper to parse simple markdown to react elements
  const renderContent = (markdownText: string) => {
    return markdownText
      .split("\n\n")
      .map((paragraph, index) => {
        const trimmed = paragraph.trim();
        if (!trimmed) return null;

        // Render Headings
        if (trimmed.startsWith("###")) {
          return (
            <h3 key={index} className="font-serif text-xl md:text-2xl text-azul-petroleo font-bold mt-8 mb-4">
              {trimmed.replace("###", "").trim()}
            </h3>
          );
        }
        if (trimmed.startsWith("##")) {
          return (
            <h2 key={index} className="font-serif text-2xl md:text-3xl text-azul-petroleo font-bold mt-10 mb-4 border-b border-bege-areia/40 pb-2">
              {trimmed.replace("##", "").trim()}
            </h2>
          );
        }

        // Render Bullet Lists
        if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
          const listItems = trimmed
            .split("\n")
            .map((item) => item.replace(/^[-*]\s+/, "").trim());
          return (
            <ul key={index} className="list-disc pl-6 my-4 flex flex-col gap-2 font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed">
              {listItems.map((li, liIdx) => {
                // Bold inline parsing
                if (li.includes("**")) {
                  const parts = li.split("**");
                  return (
                    <li key={liIdx}>
                      {parts.map((part, pIdx) =>
                        pIdx % 2 === 1 ? <strong key={pIdx} className="text-azul-petroleo font-semibold">{part}</strong> : part
                      )}
                    </li>
                  );
                }
                return <li key={liIdx}>{li}</li>;
              })}
            </ul>
          );
        }

        // Render Numbered Lists
        if (/^\d+\./.test(trimmed)) {
          const listItems = trimmed
            .split("\n")
            .map((item) => item.replace(/^\d+\.\s+/, "").trim());
          return (
            <ol key={index} className="list-decimal pl-6 my-4 flex flex-col gap-2 font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed">
              {listItems.map((li, liIdx) => {
                if (li.includes("**")) {
                  const parts = li.split("**");
                  return (
                    <li key={liIdx}>
                      {parts.map((part, pIdx) =>
                        pIdx % 2 === 1 ? <strong key={pIdx} className="text-azul-petroleo font-semibold">{part}</strong> : part
                      )}
                    </li>
                  );
                }
                return <li key={liIdx}>{li}</li>;
              })}
            </ol>
          );
        }

        // Standard Paragraphs (with basic inline bold parsing)
        if (trimmed.includes("**")) {
          const parts = trimmed.split("**");
          return (
            <p key={index} className="font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed my-4">
              {parts.map((part, pIdx) =>
                pIdx % 2 === 1 ? <strong key={pIdx} className="text-azul-petroleo font-semibold">{part}</strong> : part
              )}
            </p>
          );
        }

        return (
          <p key={index} className="font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed my-4">
            {trimmed}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-off-white overflow-x-hidden">
        <article className="max-w-4xl mx-auto px-6">
          {/* Breadcrumbs & Back link */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <nav className="flex items-center gap-2 text-xs font-sans text-grafite-suave/60">
              <Link href="/" className="hover:text-verde-salvia transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/blog" className="hover:text-verde-salvia transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-azul-petroleo font-semibold truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-azul-petroleo hover:text-verde-salvia transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar ao Blog
            </Link>
          </div>

          {/* Article Header info */}
          <div className="flex flex-col gap-4 mb-10 text-left">
            <span className="font-sans text-[10px] tracking-widest font-bold text-verde-salvia-escuro bg-bege-areia/40 px-3.5 py-1.5 rounded-full w-fit uppercase">
              {post.category}
            </span>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-azul-petroleo font-bold leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-xs font-sans text-grafite-suave/60 mt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image placeholder / Styling */}
          <div className="w-full h-1 bg-gradient-to-r from-bege-areia/20 via-dourado-suave/60 to-bege-areia/20 rounded-full mb-10" />

          {/* Main Content Body */}
          <div className="bg-white border border-bege-areia/40 rounded-[2rem] p-8 md:p-12 shadow-sm mb-16">
            {renderContent(post.content)}
          </div>

          {/* RELATED POSTS SECTION */}
          <div className="border-t border-bege-areia/60 pt-12 mb-16">
            <h3 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-6">
              Continue lendo:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  className="bg-white border border-bege-areia/30 hover:border-bege-areia rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <span className="font-sans text-[8px] tracking-widest font-bold text-verde-salvia-escuro bg-bege-areia/20 px-2 py-0.5 rounded-full uppercase">
                      {rPost.category}
                    </span>
                    <h4 className="font-serif text-base text-azul-petroleo font-semibold mt-3 mb-2 group-hover:text-verde-salvia transition-colors line-clamp-2">
                      {rPost.title}
                    </h4>
                  </div>
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-dourado-suave hover:text-verde-salvia transition-colors mt-4 font-sans"
                  >
                    Ler artigo
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* DISCRETE BOTTOM CTA */}
          <div className="bg-bege-areia/30 border border-bege-areia/60 rounded-3xl p-8 text-center flex flex-col items-center gap-4">
            <h3 className="font-serif text-xl text-azul-petroleo font-medium">
              Você não precisa passar por isso sozinho(a).
            </h3>
            <p className="font-sans text-xs md:text-sm text-grafite-suave/80 leading-relaxed max-w-md">
              Se você se identificou com este artigo e deseja aprofundar suas reflexões, agende um primeiro contato para esclarecer dúvidas.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-2.5 bg-verde-salvia hover:bg-verde-salvia-escuro text-off-white font-sans text-xs tracking-widest font-bold rounded-full transition-all"
            >
              AGENDAR ATENDIMENTO
            </a>
          </div>
        </article>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
