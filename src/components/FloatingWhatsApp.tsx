"use client";

import React from "react";

export default function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/5514996838773?text=Ol%C3%A1%2C%20K%C3%A1tia.%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20online%20e%20verificar%20hor%C3%A1rios%20dispon%C3%ADveis.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center group"
      aria-label="Fale com a Kátia no WhatsApp"
    >
      {/* Outer pulsing ring */}
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-[#25D366]/20 animate-ping opacity-75" />
      
      {/* Main button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 hover:shadow-2xl">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.277h.005c5.505 0 9.988-4.478 9.99-9.985A9.983 9.983 0 0 0 12.012 2zm4.957 14.22c-.274.774-1.336 1.397-1.848 1.48-.46.074-.994.137-3.045-.712-2.628-1.087-4.298-3.76-4.43-3.934-.13-.173-.97-1.29-.97-2.463 0-1.17.61-1.745.827-1.97.218-.227.479-.283.639-.283.16 0 .32.001.458.007.15.006.35-.022.548.458.199.485.679 1.658.739 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.25.25-.1.51.147.25.656 1.08 1.41 1.75.975.865 1.796 1.133 2.057 1.263.26.13.41.11.56-.06.15-.17.64-.75.81-.99.17-.25.35-.21.59-.12.24.09 1.52.72 1.79.85.27.13.45.2.52.31.07.12.07.69-.2 1.463z" />
        </svg>
      </div>
    </a>
  );
}
