import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Caveat } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kátia Cardoso | Psicanalista em Santos, São Vicente e Online | Psicoterapia e Saúde Mental",
  description: "Atendimento psicoterapêutico online e focado em saúde mental. Kátia Cardoso é psicanalista e terapeuta com mais de 30 anos de experiência, atendendo em Santos, São Vicente, Baixada Santista e online para todo o Brasil.",
  keywords: [
    "Psicanalista Santos",
    "Psicanalista Baixada Santista",
    "Psicanalista São Vicente",
    "Terapeuta Santos",
    "Terapeuta São Vicente",
    "Psicanalista Online",
    "Terapeuta Online",
    "Psicoterapia online",
    "Terapia de casal Santos",
    "Terapia familiar Santos",
    "Dependência química Santos",
    "Codependência emocional",
    "Saúde mental Santos",
    "Psicanálise para adultos"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${manrope.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-off-white text-grafite-suave" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
