import React from "react";

export const BotanicalBranchLeft = ({ className = "w-32 h-auto" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 400"
    className={`${className} text-dourado-suave/30 stroke-current fill-none pointer-events-none`}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Main stem */}
    <path d="M10,380 C30,300 45,210 35,120 C30,80 15,40 5,20" />
    
    {/* Leaf 1 */}
    <path d="M28,290 C35,270 50,265 60,270 C50,285 38,290 28,290 Z" />
    <path d="M28,290 L60,270" strokeWidth="0.8" />
    
    {/* Leaf 2 */}
    <path d="M38,230 C30,210 15,205 5,210 C15,225 28,230 38,230 Z" />
    <path d="M38,230 L5,210" strokeWidth="0.8" />
    
    {/* Leaf 3 */}
    <path d="M42,170 C55,150 70,145 80,150 C70,165 55,170 42,170 Z" />
    <path d="M42,170 L80,150" strokeWidth="0.8" />
    
    {/* Leaf 4 */}
    <path d="M35,110 C25,95 10,90 2,95 C10,105 22,110 35,110 Z" className="text-verde-salvia/30" />
    <path d="M35,110 L2,95" strokeWidth="0.8" />
    
    {/* Leaf 5 */}
    <path d="M25,60 C32,45 45,40 55,42 C45,55 35,60 25,60 Z" />
    <path d="M25,60 L55,42" strokeWidth="0.8" />
  </svg>
);

export const BotanicalBranchRight = ({ className = "w-32 h-auto" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 400"
    className={`${className} text-dourado-suave/30 stroke-current fill-none pointer-events-none`}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Main stem */}
    <path d="M110,380 C90,300 75,210 85,120 C90,80 105,40 115,20" />
    
    {/* Leaf 1 (mirrored) */}
    <path d="M92,290 C85,270 70,265 60,270 C70,285 82,290 92,290 Z" />
    <path d="M92,290 L60,270" strokeWidth="0.8" />
    
    {/* Leaf 2 (mirrored) */}
    <path d="M82,230 C90,210 105,205 115,210 C105,225 92,230 82,230 Z" />
    <path d="M82,230 L115,210" strokeWidth="0.8" />
    
    {/* Leaf 3 (mirrored) */}
    <path d="M78,170 C65,150 50,145 40,150 C50,165 65,170 78,170 Z" />
    <path d="M78,170 L40,150" strokeWidth="0.8" />
    
    {/* Leaf 4 (mirrored) */}
    <path d="M85,110 C95,95 110,90 118,95 C110,105 98,110 85,110 Z" />
    <path d="M85,110 L118,95" strokeWidth="0.8" />
    
    {/* Leaf 5 (mirrored) */}
    <path d="M95,60 C88,45 75,40 65,42 C75,55 85,60 95,60 Z" />
    <path d="M95,60 L65,42" strokeWidth="0.8" />
  </svg>
);

export const FloralDivider = ({ className = "w-24 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 24"
    className={`${className} text-dourado-suave stroke-current fill-none mx-auto my-4`}
    strokeWidth="1.2"
    strokeLinecap="round"
  >
    {/* Center node */}
    <circle cx="50" cy="12" r="2.5" className="fill-dourado-suave" />
    
    {/* Left horizontal line with wave */}
    <path d="M10,12 L40,12 C44,12 46,10 47.5,12" />
    
    {/* Right horizontal line with wave */}
    <path d="M90,12 L60,12 C56,12 54,10 52.5,12" />
    
    {/* Little leaves around center */}
    <path d="M47,8 C46,6 43,6 42,9 C44,9 46,9 47,8 Z" />
    <path d="M53,8 C54,6 57,6 58,9 C56,9 54,9 53,8 Z" />
  </svg>
);

export const HumanOutline = ({ className = "w-40 h-auto" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 150"
    className={`${className} text-dourado-suave/40 stroke-current fill-none`}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Human profile line drawing - elegant, abstract */}
    <path d="M40,20 C35,25 30,35 30,45 C30,55 35,65 42,72 C45,75 42,80 40,84 C38,88 34,92 36,98 C38,102 44,105 48,108 C50,110 52,115 52,120 C52,125 48,135 45,145" />
    
    {/* Abstract floral branch growing from heart area */}
    <path d="M40,84 C48,84 56,86 64,88" />
    <path d="M52,86 C56,76 60,70 68,68" />
    <path d="M60,70 C64,62 70,58 78,59" />
    
    {/* Tiny leaves */}
    <path d="M64,88 C68,84 72,85 74,89 Z" />
    <path d="M68,68 C72,64 76,65 78,69 Z" />
    <path d="M78,59 C82,55 86,56 88,60 Z" />
  </svg>
);
