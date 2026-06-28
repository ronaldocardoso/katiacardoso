import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ChevronRight, FileText } from "lucide-react";

export default function TermosDeUso() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-off-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-sans text-grafite-suave/60 mb-8">
            <Link href="/" className="hover:text-verde-salvia transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-azul-petroleo font-semibold">Termos de Uso</span>
          </nav>

          {/* Heading */}
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-verde-salvia" />
            <h1 className="font-serif text-3xl md:text-4xl text-azul-petroleo font-bold">
              Termos de Uso
            </h1>
          </div>
          
          <p className="font-sans text-xs text-grafite-suave/60 mb-10">
            Última atualização: 27 de Junho de 2026
          </p>

          {/* Terms Text */}
          <div className="bg-white border border-bege-areia/40 rounded-[2rem] p-8 md:p-12 shadow-sm font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed flex flex-col gap-6">
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e utilizar o site <strong>KatiaCardoso.Com.Br</strong>, você concorda em cumprir e vincular-se aos seguintes Termos de Uso. Caso discorde de qualquer parte destes termos, solicitamos que não utilize ou acesse nosso portal.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                2. Natureza Informativa do Conteúdo
              </h2>
              <p>
                O conteúdo textual, artigos de blog, e-books ou materiais disponibilizados neste site possuem finalidade exclusivamente educativa e informativa sobre as temáticas de psicanálise, saúde mental, dinâmica de casais e dependência química.
              </p>
              <p className="mt-3 font-semibold text-azul-petroleo">
                IMPORTANTE: A leitura deste site ou o envio de mensagens de contato não substituem a realização de consultas psicoterapêuticas, sessões clínicas ou pareceres de profissionais de saúde habilitados. Se você estiver enfrentando uma crise psiquiátrica de emergência ou risco iminente à vida, entre em contato imediatamente com o CVV (Centro de Valorização da Vida - telefone 188) ou dirija-se ao pronto-socorro mais próximo.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                3. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste site — incluindo textos, artigos, logotipos, SVGs lineares, ornamentos botânicos e fotos — é protegido por leis de propriedade intelectual e direitos autorais. O download ou reprodução não autorizada do material para fins comerciais é estritamente proibido.
              </p>
              <p className="mt-3">
                O compartilhamento de links de artigos de nosso blog é permitido e incentivado, desde que atribuída a autoria de forma clara e ética.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                4. Uso Adequado do Site
              </h2>
              <p>
                O usuário compromete-se a utilizar o site e suas ferramentas (como formulários de contato e assinatura de newsletter) em conformidade com as leis vigentes, a boa-fé e a ordem pública. São proibidas condutas que tentem danificar o servidor, injetar scripts maliciosos ou simular identidades falsas nos campos de contato.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                5. Links para Terceiros
              </h2>
              <p>
                Nosso site pode conter links para serviços externos de terceiros (como botões diretos para o aplicativo WhatsApp ou perfis de redes sociais como Instagram, Facebook e LinkedIn). Nós não controlamos e não somos responsáveis pelas políticas de privacidade ou termos de uso desses portais externos.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                6. Jurisdição aplicável
              </h2>
              <p>
                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa legal decorrente do uso deste portal será submetida à comarca de domicílio do proprietário do site.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
