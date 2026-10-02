// Hello World
"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { GoianiaShoppingLogo } from "@/components/brand/GoianiaShoppingLogo";
import { PrxStaticLogo } from "@/components/brand/PrxAnimatedLogo";

interface ProposalFooterProps {
  onReplaySplash: () => void;
}

export function ProposalFooter({ onReplaySplash }: ProposalFooterProps) {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-slate-200">
          
          {/* Brand & Proposition Summary */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="h-6 w-28 flex items-center">
                <GoianiaShoppingLogo theme="light" className="w-full h-full object-contain" />
              </div>
              <span className="text-[#7607FD] font-mono text-base font-bold">×</span>
              <span className="text-sm font-bold tracking-tight text-slate-950 font-mono">
                PRX
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
              &ldquo;Não queremos trazer a Gen Z para o shopping. Queremos fazer essa geração chamar o Goiânia Shopping de seu.&rdquo; • The Next Generation Mall.
            </p>
          </div>

          {/* Quick Actions & Replay Splash Trigger */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onReplaySplash}
              aria-label="Rever animação da parceria Goiânia Shopping e PRX"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 text-[#7607FD] fill-[#7607FD]" />
              <span>Rever animação da parceria</span>
            </button>

            <a
              href="#topo"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-950 border border-slate-200 rounded-md transition-colors cursor-pointer"
            >
              <span>Voltar ao topo ↑</span>
            </a>
          </div>

        </div>

        {/* Mandatory Viraweb Credits & Brand Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-slate-500">
          
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-600">Desenvolvido por</span>
            <a
              href="https://viraweb.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
              aria-label="Acessar Viraweb"
            >
              <div className="relative h-6 sm:h-7 w-24 sm:w-28 flex items-center">
                <Image
                  src="/brand/viraweb3.png"
                  alt="Viraweb"
                  width={112}
                  height={28}
                  className="h-full w-auto object-contain transition-opacity group-hover:opacity-85"
                />
              </div>
            </a>
          </div>

          <div className="font-mono text-[11px] text-slate-400">
            &copy; 2026 Goiânia Shopping &bull; PRX. Todos os direitos reservados.
          </div>

        </div>

      </div>
    </footer>
  );
}
