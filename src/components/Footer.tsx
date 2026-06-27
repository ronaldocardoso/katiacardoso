import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FloralLogo } from "./Header";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: "Psicanálise Online", href: "/servicos/psicanalise-online" },
    { name: "Psicoterapia Individual", href: "/servicos/psicoterapia-individual" },
    { name: "Terapia de Casal e Família", href: "/servicos/terapia-de-casal-e-familia" },
    { name: "Dependência Química e Codependência", href: "/servicos/dependencia-quimica-e-codependencia" },
    { name: "Supervisão e Consultoria", href: "/servicos/supervisao-e-consultoria" },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre Mim", href: "/sobre-mim" },
    { name: "Serviços", href: "/servicos" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <footer className="relative overflow-hidden bg-bege-areia/40 border-t border-bege-areia text-grafite-suave py-16 px-6 md:px-12">
      {/* Horizontal Green Arabesque Border */}
      <div className="absolute top-0 inset-x-0 h-6 opacity-[0.24] text-verde-salvia pointer-events-none flex items-center overflow-hidden z-0">
        <svg
          viewBox="0 0 1000 40"
          className="w-full h-full stroke-current fill-none"
          strokeWidth="1.3"
          strokeLinecap="round"
        >
          <path d="M0,20 L1000,20" />
          <path d="M50,20 C55,12 65,12 70,20 C65,28 55,28 50,20 Z" />
          <path d="M150,20 C155,12 165,12 170,20 C165,28 155,28 150,20 Z" />
          <path d="M250,20 C255,12 265,12 270,20 C265,28 255,28 250,20 Z" />
          <path d="M350,20 C355,12 365,12 370,20 C365,28 355,28 350,20 Z" />
          <path d="M450,20 C455,12 465,12 470,20 C465,28 455,28 450,20 Z" />
          <path d="M550,20 C555,12 565,12 570,20 C565,28 555,28 550,20 Z" />
          <path d="M650,20 C655,12 665,12 670,20 C665,28 655,28 650,20 Z" />
          <path d="M750,20 C755,12 765,12 770,20 C765,28 755,28 750,20 Z" />
          <path d="M850,20 C855,12 865,12 870,20 C865,28 855,28 850,20 Z" />
          <path d="M950,20 C955,12 965,12 970,20 C965,28 955,28 950,20 Z" />
          <path d="M90,20 C85,12 75,12 70,20 C75,28 85,28 90,20 Z" />
          <path d="M190,20 C185,12 175,12 170,20 C175,28 185,28 190,20 Z" />
          <path d="M290,20 C285,12 275,12 270,20 C275,28 285,28 290,20 Z" />
          <path d="M390,20 C385,12 375,12 370,20 C375,28 385,28 390,20 Z" />
          <path d="M490,20 C485,12 475,12 470,20 C475,28 485,28 490,20 Z" />
          <path d="M590,20 C585,12 575,12 570,20 C575,28 585,28 590,20 Z" />
          <path d="M690,20 C685,12 675,12 670,20 C675,28 685,28 690,20 Z" />
          <path d="M790,20 C785,12 775,12 770,20 C775,28 785,28 790,20 Z" />
          <path d="M890,20 C885,12 875,12 870,20 C875,28 885,28 890,20 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <FloralLogo className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-wide text-azul-petroleo font-medium leading-none">
                  Kátia
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] text-dourado-suave font-semibold leading-none mt-1 uppercase">
                  Cardoso
                </span>
              </div>
            </Link>
            
            <div className="mt-2 flex flex-col gap-1.5 text-xs text-azul-petroleo font-medium">
              <p>Kátia Dalle Vedove Cardoso</p>
              <p>Assistente Social | Psicanalista | Terapeuta de Casal e Família</p>
              <p className="text-[10px] opacity-75 font-sans mt-0.5">CRESS/SP: 00.000 | CFP/SP: 06/00000</p>
            </div>
            
            <p className="text-sm font-sans text-grafite-suave/80 leading-relaxed mt-2">
              Psicanalista e especialista em Saúde Mental, Dependência Química e Família. Oferecendo escuta qualificada e caminhos de transformação.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-serif text-lg text-azul-petroleo font-semibold mb-6">Navegação</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-verde-salvia transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-serif text-lg text-azul-petroleo font-semibold mb-6">Serviços</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-verde-salvia transition-colors duration-200">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts & Socials */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="font-serif text-lg text-azul-petroleo font-semibold mb-6">Contato</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-verde-salvia flex-shrink-0" />
                  <a href="https://wa.me/5514996838773" target="_blank" rel="noopener noreferrer" className="hover:text-verde-salvia transition-colors">
                    (14) 99683-8773
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-verde-salvia flex-shrink-0" />
                  <a href="mailto:contato@katiacardoso.com.br" className="hover:text-verde-salvia transition-colors">
                    contato@katiacardoso.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-verde-salvia flex-shrink-0 mt-0.5" />
                  <span>
                    Atendimento online para todo o Brasil
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center gap-3 mt-3">
              <span className="font-sans text-[11px] uppercase tracking-wider text-grafite-suave/60 font-semibold">
                Redes Sociais:
              </span>
              <a href="https://www.instagram.com/katiadallecardoso" target="_blank" rel="noopener noreferrer" className="p-2 bg-off-white hover:bg-verde-salvia hover:text-off-white rounded-full transition-all duration-300 text-azul-petroleo shadow-sm" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-bege-areia flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-grafite-suave/70">
          <div>
            © {currentYear} KatiaCardoso.Com.Br — Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-verde-salvia transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-verde-salvia transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
