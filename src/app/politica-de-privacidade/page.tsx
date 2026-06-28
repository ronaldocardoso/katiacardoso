import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ChevronRight, Shield } from "lucide-react";

export default function PoliticaDePrivacidade() {
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
            <span className="text-azul-petroleo font-semibold">Política de Privacidade</span>
          </nav>

          {/* Heading */}
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-verde-salvia" />
            <h1 className="font-serif text-3xl md:text-4xl text-azul-petroleo font-bold">
              Política de Privacidade
            </h1>
          </div>
          
          <p className="font-sans text-xs text-grafite-suave/60 mb-10">
            Última atualização: 27 de Junho de 2026
          </p>

          {/* Policy Text */}
          <div className="bg-white border border-bege-areia/40 rounded-[2rem] p-8 md:p-12 shadow-sm font-sans text-base md:text-lg text-grafite-suave/80 leading-relaxed flex flex-col gap-6">
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                1. Introdução
              </h2>
              <p>
                A privacidade e a proteção de dados de nossos pacientes, colegas e visitantes são de extrema importância para nós. Esta política de privacidade explica como a plataforma <strong>KatiaCardoso.Com.Br</strong>, operada pela psicanalista Kátia Dalle Vedove Cardoso, coleta, usa, compartilha e protege as informações inseridas em nosso site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                2. Informações que Coletamos
              </h2>
              <p>
                Coletamos apenas as informações voluntariamente fornecidas por você através de nossos formulários de contato e de assinatura de newsletter:
              </p>
              <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
                <li><strong>Formulários de Contato:</strong> Nome completo, endereço de e-mail, número de WhatsApp e assunto. Solicitamos expressamente que não sejam compartilhados dados clínicos, diagnósticos ou informações de saúde confidenciais nesse primeiro contato.</li>
                <li><strong>Newsletter:</strong> Apenas o endereço de e-mail e seu consentimento expresso.</li>
                <li><strong>Dados de Navegação (Cookies):</strong> Pequenos arquivos armazenados para melhorar sua experiência de navegação e entender a usabilidade de nosso portal.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                3. Finalidade do Tratamento de Dados
              </h2>
              <p>
                O tratamento de dados coletados no site serve exclusivamente para:
              </p>
              <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
                <li>Responder a mensagens enviadas e agendar as primeiras consultas online.</li>
                <li>Enviar a newsletter com artigos, reflexões de saúde mental e atualizações terapêuticas, mediante sua prévia inscrição voluntária.</li>
                <li>Garantir a segurança técnica de nosso formulário eletrônico e coibir spam.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                4. Direitos do Usuário (LGPD)
              </h2>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você possui o direito de:
              </p>
              <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
                <li>Confirmar a existência e o acesso aos dados que possuímos sobre você.</li>
                <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Solicitar a eliminação (exclusão definitiva) de seus dados de nossa lista de contatos/newsletter.</li>
                <li>Revogar a qualquer momento o consentimento para o recebimento de e-mails informativos.</li>
              </ul>
              <p className="mt-3">
                Para exercer qualquer um destes direitos, basta enviar uma mensagem direta para o e-mail: <a href="mailto:contato@katiacardoso.com.br" className="text-verde-salvia hover:text-verde-salvia-escuro underline">contato@katiacardoso.com.br</a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                5. Compartilhamento de Dados e Segurança
              </h2>
              <p>
                <strong>Nunca comercializamos nem compartilhamos seus dados com terceiros.</strong> Todos os dados inseridos em nossos formulários trafegam por canais criptografados protegidos por certificado de segurança SSL e são armazenados em servidores seguros.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-azul-petroleo font-semibold mb-4">
                6. Alterações nesta Política
              </h2>
              <p>
                Esta política pode ser atualizada periodicamente para refletir mudanças regulatórias ou aprimoramentos técnicos. Recomendamos a leitura regular deste documento para se manter informado.
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
