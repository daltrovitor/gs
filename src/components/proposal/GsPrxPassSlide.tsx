// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { Coins, BookOpen, Trophy, Sparkles, ShoppingBag, Film, UtensilsCrossed, CheckCircle2, TrendingUp } from "lucide-react";
import { GoianiaShoppingLogo } from "@/components/brand/GoianiaShoppingLogo";
import { PrxStaticLogo } from "@/components/brand/PrxAnimatedLogo";

export function GsPrxPassSlide() {
  return (
    <PdfSlideFrame id="prx-pass" tag="PROPRIEDADE 01 • PRX PASS">
      <div className="flex flex-col">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            01 • PRX PASS × GOIÂNIA SHOPPING
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Premiar comportamento, não apenas gasto.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Criamos dentro da PRX uma <strong>área especial GOIÂNIA SHOPPING</strong>, reunindo benefícios das lojas, restaurantes, cinema e serviços participantes — com uma virada estrutural na forma como a nova geração se relaciona com o shopping.
          </p>
        </div>

        {/* 2-Column Core Architecture */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Área Especial no App */}
          <div className="lg:col-span-6 rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                  ECOSSISTEMA DEDICADO NO APP
                </span>
                <span className="px-2 py-0.5 rounded-sm bg-purple-50 text-[#7607FD] font-mono text-[11px] font-bold">
                  PRX PASS
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-950">
                Área Especial Goiânia Shopping
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Um hub exclusivo e gamificado dentro da PRX reunindo as marcas mais amadas pelos adolescentes em Goiânia:
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-md border border-slate-100 bg-slate-50 flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5 text-[#7607FD] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Lojas & Moda</p>
                    <p className="text-[11px] text-slate-500">Streetwear & lifestyle</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-md border border-slate-100 bg-slate-50 flex items-center gap-3">
                  <UtensilsCrossed className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Restaurantes</p>
                    <p className="text-[11px] text-slate-500">Praça & gastronomia</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-md border border-slate-100 bg-slate-50 flex items-center gap-3">
                  <Film className="w-5 h-5 text-[#0BD9FD] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Cinema & Lazer</p>
                    <p className="text-[11px] text-slate-500">Sessões & entretenimento</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-md border border-slate-100 bg-slate-50 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Serviços & Games</p>
                    <p className="text-[11px] text-slate-500">Conveniência jovem</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-[#7607FD]" />
              <span>Desbloqueio direto via QR Code no ponto físico</span>
            </div>
          </div>

          {/* Right Column: Recompensa por Comportamento (PRX Coins) */}
          <div className="lg:col-span-6 rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold tracking-widest text-[#7607FD] uppercase">
                  A GRANDE DIFERENÇA
                </span>
                <span className="px-2 py-0.5 rounded-sm bg-cyan-50 text-[#0284c7] font-mono text-[11px] font-bold">
                  GAMIFICAÇÃO POSITIVA
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-950">
                Ganhe Coins por Boas Escolhas
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                O jovem acumula <strong>PRX Coins</strong> através de atitudes positivas e as utiliza para desbloquear experiências no Goiânia Shopping:
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-md bg-purple-50/70 border border-purple-100/60">
                  <TrendingUp className="w-4 h-4 text-[#7607FD] shrink-0" />
                  <span className="text-xs text-slate-800"><strong>Planejamento Financeiro:</strong> poupança e metas batidas no app</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-purple-50/70 border border-purple-100/60">
                  <BookOpen className="w-4 h-4 text-[#7607FD] shrink-0" />
                  <span className="text-xs text-slate-800"><strong>Leitura & Estudos:</strong> metas acadêmicas e livros concluídos</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-purple-50/70 border border-purple-100/60">
                  <Trophy className="w-4 h-4 text-[#7607FD] shrink-0" />
                  <span className="text-xs text-slate-800"><strong>Desporto & Bem-Estar:</strong> participação em treinos e rotinas saudáveis</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-purple-50/70 border border-purple-100/60">
                  <Coins className="w-4 h-4 text-[#7607FD] shrink-0" />
                  <span className="text-xs text-slate-800"><strong>Ações Educativas:</strong> workshops, voluntariado e desafios PRX</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
              <Coins className="w-4 h-4 text-amber-500" />
              <span>Coins desbloqueiam vantagens e acessos no shopping</span>
            </div>
          </div>

        </div>

        {/* The Ennobling Statement Box */}
        <div className="mt-8 rounded-sm bg-linear-to-r from-slate-900 to-[#1b0933] text-white p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0BD9FD] font-bold">
                MUDANÇA DE PARADIGMA
              </span>
              <p className="mt-2 text-lg sm:text-2xl font-black text-white leading-snug">
                Assim, o Goiânia Shopping deixa de dizer apenas <span className="text-slate-400 font-normal">“compre e ganhe”</span> e passa a dizer:
              </p>
              <p className="mt-2 text-xl sm:text-3xl font-black text-[#0BD9FD] tracking-tight">
                &ldquo;Faça boas escolhas. A gente reconhece.&rdquo;
              </p>
            </div>
            <div className="shrink-0 px-5 py-3 rounded-sm bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-widest uppercase text-white self-start md:self-auto">
              Isso enobrece a parceria
            </div>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
