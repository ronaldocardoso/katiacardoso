"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-bege-areia bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-bege-areia/80"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base md:text-lg text-azul-petroleo font-semibold group-hover:text-verde-salvia transition-colors duration-200">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-verde-salvia transition-transform duration-300 flex-shrink-0 ml-4 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] border-t border-bege-areia/40" : "max-h-0"
              }`}
            >
              <div className="p-6 text-sm md:text-base text-grafite-suave/80 leading-relaxed font-sans bg-off-white/30">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
