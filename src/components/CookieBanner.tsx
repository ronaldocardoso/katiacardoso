"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-off-white border border-bege-areia shadow-xl rounded-2xl p-6 z-50 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-5">
      <div className="flex flex-col gap-4">
        <h4 className="font-serif text-base text-azul-petroleo font-semibold">
          Uso de Cookies & Privacidade
        </h4>
        <p className="font-sans text-xs text-grafite-suave/80 leading-relaxed">
          Este site utiliza cookies e outras tecnologias para melhorar sua experiência de navegação, analisar o tráfego do site e garantir a segurança das informações enviadas via formulários. Para saber mais, consulte nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-verde-salvia hover:text-verde-salvia-escuro underline font-semibold"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 justify-end mt-2">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs font-semibold text-grafite-suave hover:text-azul-petroleo hover:bg-bege-areia/30 rounded-full transition-all duration-200"
          >
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-xs font-semibold text-off-white bg-verde-salvia hover:bg-verde-salvia-escuro rounded-full shadow-sm transition-all duration-200"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
