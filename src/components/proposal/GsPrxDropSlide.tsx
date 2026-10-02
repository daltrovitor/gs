// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { KeyRound, Sparkles, Film, Flame, Lock, Paintbrush, Utensils, Users, ArrowUpRight } from "lucide-react";

export function GsPrxDropSlide() {
  return (
    <PdfSlideFrame id="prx-drop" tag="PROPRIEDADE 04 • PRX DROP">
      <div className="flex flex-col">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            04 • PRX DROP
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            O shopping que desbloqueia o que dinheiro nenhum compra.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            <strong>Nem todo benefício precisa ser desconto.</strong> A nova geração valoriza muito mais o pertencimento, o acesso restrito e o ineditismo do que uma simples porcentagem em cupom fiscal.
          </p>
        </div>

        {/* 6 Exclusive Drops Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Drop 1 */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs hover:border-[#7607FD]/40 transition-colors">
            <div className="w-9 h-9 rounded-sm bg-purple-50 text-[#7607FD] flex items-center justify-center mb-3">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">Lançamento Fechado</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Acesso antes da abertura ao público em coleções cápsula de marcas de streetwear e sneakers no shopping.
            </p>
          </div>

          {/* Drop 2 */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs hover:border-[#7607FD]/40 transition-colors">
            <div className="w-9 h-9 rounded-sm bg-cyan-50 text-[#0284c7] flex items-center justify-center mb-3">
              <Film className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">Sessão Antecipada de Cinema</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Pré-estreias fechadas de filmes aguardados reservadas para a comunidade PRX e Goiânia Shopping.
            </p>
          </div>

          {/* Drop 3 */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs hover:border-[#7607FD]/40 transition-colors">
            <div className="w-9 h-9 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">Encontro com Empreendedores</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Talks intimistas e mentorias com fundadores de marcas de sucesso e criadores de conteúdo relevantes.
            </p>
          </div>

          {/* Drop 4 */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs hover:border-[#7607FD]/40 transition-colors">
            <div className="w-9 h-9 rounded-sm bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">Menu Secreto & Tasting</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Sobremesas, burgers e drinks não alcoólicos fora do cardápio oficial, desbloqueados apenas via app.
            </p>
          </div>

          {/* Drop 5 */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs hover:border-[#7607FD]/40 transition-colors">
            <div className="w-9 h-9 rounded-sm bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">Acesso a Bastidores</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Tours pelas áreas restritas, cabines de projeção do cinema e operações dos grandes lojistas.
            </p>
          </div>

          {/* Drop 6 */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs hover:border-[#7607FD]/40 transition-colors">
            <div className="w-9 h-9 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Paintbrush className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">Customização & Live Art</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Estações periódicas com artistas locais para customização de tênis, bolsas e jaquetas compradas no shopping.
            </p>
          </div>

        </div>

        {/* Tiering Note */}
        <div className="mt-4 p-3 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#7607FD]" />
            <span>Drops de alto calibre reservados aos membros com maior pontuação e engajamento na PRX.</span>
          </div>
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest hidden sm:inline">
            Status & Reputação
          </span>
        </div>

        {/* Perceptual Shift Callout */}
        <div className="mt-8 rounded-sm bg-linear-to-r from-slate-950 to-[#120826] text-white p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0BD9FD] font-bold">
              MUDANÇA DE PERCEPÇÃO
            </span>
            <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
              &ldquo;PRX Coins não compram só desconto. Desbloqueiam acesso. E o Goiânia Shopping vira o palco físico dessas experiências.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
