// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { Mic2, Sparkles, Rocket, Palette, Shirt, Music, Building, Trophy, Flame } from "lucide-react";
import { GoianiaShoppingLogo } from "@/components/brand/GoianiaShoppingLogo";

export function GsNextSpaceSlide() {
  return (
    <PdfSlideFrame id="next-space" tag="PROPRIEDADE 07 • NEXT SPACE">
      <div className="flex flex-col">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            07 • O SHOPPING COMO PALCO DA NOVA GERAÇÃO
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            PRX NEXT SPACE — powered by Goiânia Shopping
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Fechamos com a maior propriedade do projeto: um espaço vivo e ativação periódica para jovens apresentarem <strong>projetos, marcas autorais, startups, música, moda, arte e negócios</strong>.
          </p>
        </div>

        {/* 3 Real Human Stories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Story 1: O Garoto de 16 Anos */}
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-purple-50 text-[#7607FD] flex items-center justify-center mb-4">
                <Shirt className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                MODA & STREETWEAR
              </span>
              <h3 className="text-lg font-black text-slate-950 mt-1">
                O Primeiro Drop Físico
              </h3>
              <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                Um garoto de 16 anos que está a começar a sua marca própria de roupas pode fazer o seu <strong>primeiro drop oficial</strong> no centro do shopping, cercado por sua comunidade.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#7607FD] font-semibold">
              Orgulho & Comunidade
            </div>
          </div>

          {/* Story 2: A Menina de Startup */}
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-cyan-50 text-[#0284c7] flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                TECNOLOGIA & INOVAÇÃO
              </span>
              <h3 className="text-lg font-black text-slate-950 mt-1">
                O Primeiro Pitch da Startup
              </h3>
              <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                Uma jovem estudante criando uma startup inovadora ou projeto social tem o palco ideal para fazer o seu <strong>primeiro pitch</strong> diante de mentores e parceiros.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0284c7] font-semibold">
              Protagonismo Teen
            </div>
          </div>

          {/* Story 3: O Jovem Artista */}
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                ARTE & CULTURA
              </span>
              <h3 className="text-lg font-black text-slate-950 mt-1">
                A Primeira Exposição de Arte
              </h3>
              <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                Um jovem artista plástico, fotógrafo ou músico encontra ali a vitrine de prestígio para realizar a sua <strong>primeira exposição pública</strong> na cidade.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-amber-700 font-semibold">
              Cultura & Expressão
            </div>
          </div>

        </div>

        {/* The Crowning Paradigm Shift Banner */}
        <div className="mt-8 rounded-sm bg-linear-to-r from-slate-950 via-[#1b0a33] to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0BD9FD] font-bold">
                A MUDANÇA DEFINITIVA DE PAPEL
              </span>
              <p className="mt-2 text-xl sm:text-2xl font-normal text-slate-300">
                O Goiânia Shopping deixa de apenas vender produtos para essa geração.
              </p>
              <p className="mt-1 text-2xl sm:text-4xl font-black text-white tracking-tight">
                Passa a dar palco para ela.
              </p>
            </div>
            <div className="shrink-0 px-5 py-3 rounded-sm bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest uppercase text-white font-semibold">
              PRX NEXT SPACE
            </div>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
