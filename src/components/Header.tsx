"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export const FloralLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${className} text-dourado-suave stroke-current fill-none`}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Center leaf */}
    <path d="M50,85 C50,85 50,35 50,15 C50,35 50,85 50,85" />
    {/* Left leaf */}
    <path d="M50,85 C35,65 20,50 20,35 C20,20 35,25 50,45" />
    {/* Right leaf */}
    <path d="M50,85 C65,65 80,50 80,35 C80,20 65,25 50,45" />
    {/* Far left leaf */}
    <path d="M50,85 C25,75 10,65 10,50 C10,35 25,45 50,55" />
    {/* Far right leaf */}
    <path d="M50,85 C75,75 90,65 90,50 C90,35 75,45 50,55" />
  </svg>
);

interface SubService {
  name: string;
  description: string;
  href: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services: SubService[] = [
    { name: "Psicanálise Online", description: "Investigação aprofundada via vídeo", href: "/servicos/psicanalise-online" },
    { name: "Psicoterapia Individual", description: "Cuidado e acolhimento para adultos", href: "/servicos/psicoterapia-individual" },
    { name: "Terapia de Casal e Família", description: "Mediação e diálogo nas relações", href: "/servicos/terapia-de-casal-e-familia" },
    { name: "Dependência Química", description: "Suporte ao dependente e familiares", href: "/servicos/dependencia-quimica-e-codependencia" },
    { name: "Supervisão e Consultoria", description: "Orientação clínica e institucional", href: "/servicos/supervisao-e-consultoria" },
  ];

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "SOBRE MIM", href: "/sobre-mim" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTATO", href: "/contato" },
  ];

  const whatsappLink = "https://wa.me/5514996838773?text=Ol%C3%A1%2C%20K%C3%A1tia.%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20online%20e%20verificar%20hor%C3%A1rios%20dispon%C3%ADveis.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-off-white/95 backdrop-blur-md shadow-sm h-20 border-b border-bege-areia/30"
          : "bg-transparent h-24"
      } flex items-center`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <FloralLogo className="w-9 h-9 transition-transform duration-500 group-hover:rotate-12" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-wide text-azul-petroleo font-medium leading-none">
              Kátia
            </span>
            <span className="font-sans text-[10px] tracking-[0.25em] text-dourado-suave font-semibold leading-none mt-1 uppercase">
              Cardoso
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-11">
          <Link
            href="/"
            className={`font-sans text-xs tracking-widest font-semibold transition-colors duration-250 relative py-1 ${
              pathname === "/" ? "text-verde-salvia font-bold" : "text-azul-petroleo hover:text-verde-salvia"
            }`}
          >
            HOME
            {pathname === "/" && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-verde-salvia rounded-full" />}
          </Link>

          <Link
            href="/sobre-mim"
            className={`font-sans text-xs tracking-widest font-semibold transition-colors duration-250 relative py-1 ${
              pathname === "/sobre-mim" ? "text-verde-salvia font-bold" : "text-azul-petroleo hover:text-verde-salvia"
            }`}
          >
            SOBRE MIM
            {pathname === "/sobre-mim" && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-verde-salvia rounded-full" />}
          </Link>

          {/* Services Menu Item with Hover Dropdown */}
          <div className="relative group py-2">
            <button
              className={`font-sans text-xs tracking-widest font-semibold transition-colors duration-250 flex items-center gap-1.5 focus:outline-none ${
                pathname.startsWith("/servicos") ? "text-verde-salvia font-bold" : "text-azul-petroleo hover:text-verde-salvia"
              }`}
            >
              SERVIÇOS
              <ChevronDown className="w-3.5 h-3.5 text-dourado-suave transition-transform duration-300 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border border-bege-areia/60 shadow-xl rounded-2xl p-4 transition-all duration-300 opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto flex flex-col gap-1 z-50">
              <Link
                href="/servicos"
                className="font-serif text-sm text-azul-petroleo hover:text-verde-salvia font-semibold px-4 py-2 border-b border-bege-areia/30 pb-2 mb-1 block"
              >
                Ver todos os serviços
              </Link>
              {services.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  className="px-4 py-2.5 rounded-xl hover:bg-verde-salvia/10 hover:translate-x-1 transition-all duration-200 flex flex-col text-left group/item shadow-sm hover:shadow-md"
                >
                  <span className="font-serif text-sm text-azul-petroleo font-semibold group-hover/item:text-verde-salvia transition-colors">
                    {sub.name}
                  </span>
                  <span className="font-sans text-[11px] text-grafite-suave/70 mt-0.5">
                    {sub.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog"
            className={`font-sans text-xs tracking-widest font-semibold transition-colors duration-250 relative py-1 ${
              pathname.startsWith("/blog") ? "text-verde-salvia font-bold" : "text-azul-petroleo hover:text-verde-salvia"
            }`}
          >
            BLOG
            {pathname.startsWith("/blog") && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-verde-salvia rounded-full" />}
          </Link>

          <Link
            href="/contato"
            className={`font-sans text-xs tracking-widest font-semibold transition-colors duration-250 relative py-1 ${
              pathname === "/contato" ? "text-verde-salvia font-bold" : "text-azul-petroleo hover:text-verde-salvia"
            }`}
          >
            CONTATO
            {pathname === "/contato" && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-verde-salvia rounded-full" />}
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-verde-salvia text-off-white font-sans text-xs tracking-wider font-semibold rounded-full shadow-sm hover:bg-verde-salvia-escuro hover:shadow-md transition-all duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            AGENDAR ATENDIMENTO
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-azul-petroleo p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[80px] bg-off-white/70 backdrop-blur-lg border-b border-bege-areia/40 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`font-sans text-sm tracking-widest font-semibold ${
                pathname === "/" ? "text-verde-salvia" : "text-azul-petroleo"
              }`}
            >
              HOME
            </Link>

            <Link
              href="/sobre-mim"
              onClick={() => setIsOpen(false)}
              className={`font-sans text-sm tracking-widest font-semibold ${
                pathname === "/sobre-mim" ? "text-verde-salvia" : "text-azul-petroleo"
              }`}
            >
              SOBRE MIM
            </Link>

            {/* Mobile Services Accordion */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`font-sans text-sm tracking-widest font-semibold flex items-center justify-between text-left w-full focus:outline-none ${
                  pathname.startsWith("/servicos") ? "text-verde-salvia" : "text-azul-petroleo"
                }`}
              >
                <span>SERVIÇOS</span>
                <ChevronDown className={`w-4 h-4 text-dourado-suave transition-transform duration-300 ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`} />
              </button>
              
              <div
                className={`transition-all duration-300 overflow-hidden flex flex-col gap-3 pl-4 border-l border-bege-areia/50 ${
                  isMobileServicesOpen ? "max-h-[300px] mt-2 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <Link
                  href="/servicos"
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-xs text-azul-petroleo/80 font-bold hover:text-verde-salvia transition-colors"
                >
                  Ver todos os serviços
                </Link>
                {services.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-xs text-grafite-suave hover:text-verde-salvia transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`font-sans text-sm tracking-widest font-semibold ${
                pathname.startsWith("/blog") ? "text-verde-salvia" : "text-azul-petroleo"
              }`}
            >
              BLOG
            </Link>

            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className={`font-sans text-sm tracking-widest font-semibold ${
                pathname === "/contato" ? "text-verde-salvia" : "text-azul-petroleo"
              }`}
            >
              CONTATO
            </Link>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 bg-verde-salvia text-off-white font-sans text-sm tracking-wider font-semibold rounded-full text-center hover:bg-verde-salvia-escuro transition-all"
          >
            <Phone className="w-4 h-4" />
            AGENDAR ATENDIMENTO
          </a>
        </div>
      </div>
    </header>
  );
}
