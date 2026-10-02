// Hello World
"use client";

import Image from "next/image";
import { Play, Sparkles } from "lucide-react";
import { GoianiaShoppingLogo } from "@/components/brand/GoianiaShoppingLogo";

interface ProposalNavbarProps {
  onReplaySplash: () => void;
}

export function ProposalNavbar({ onReplaySplash }: ProposalNavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <a
          href="#topo"
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          aria-label="Voltar ao início da proposta"
        >
          <div className="h-6 sm:h-7 w-28 sm:w-36 flex items-center">
            <GoianiaShoppingLogo
              theme="light"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="text-[#7607FD] font-mono text-base font-bold">×</span>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black tracking-tight text-slate-950 font-mono">
            <span>PRX</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 ml-1 text-[9px] uppercase font-mono tracking-widest text-[#7607FD] bg-purple-50 border border-purple-100 rounded-sm font-bold">
              2026
            </span>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-4 text-xs font-semibold text-slate-600"
          aria-label="Navegação da proposta"
        >
          <a
            href="#conexao"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            Conexão
          </a>
          <a
            href="#prx-pass"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            1. PRX Pass
          </a>
          <a
            href="#prx-lunch"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            2. PRX Lunch
          </a>
          <a
            href="#pais-e-filhos"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            3. Pais &amp; Filhos
          </a>
          <a
            href="#prx-drop"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            4. PRX Drop
          </a>
          <a
            href="#insiders"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            5. Insiders
          </a>
          <a
            href="#presents"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            6. Presents
          </a>
          <a
            href="#next-space"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            7. Next Space
          </a>
          <a
            href="#tese"
            className="hover:text-[#7607FD] text-slate-950 font-bold transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            A Tese
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReplaySplash}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
            aria-label="Rever a animação de abertura da proposta"
          >
            <Play className="w-3.5 h-3.5 text-[#7607FD] fill-[#7607FD]" />
            <span>Rever animação</span>
          </button>

          <a
            href="https://wa.me/5511989609797?text=Ol%C3%A1%20Rafael%2C%20gostaria%20de%20conversar%20sobre%20a%20parceria%20Goi%C3%A2nia%20Shopping%20x%20PRX!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-sm shadow-xs transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
            aria-label="Abrir conversa no WhatsApp"
          >
            <span>Contato Executivo</span>
          </a>
        </div>
      </div>
    </header>
  );
}
