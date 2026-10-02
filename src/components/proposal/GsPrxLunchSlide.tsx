// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { Utensils, CalendarCheck, Coins, Database, Users, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export function GsPrxLunchSlide() {
  return (
    <PdfSlideFrame id="prx-lunch" tag="PROPRIEDADE 02 • PRX LUNCH">
      <div className="flex flex-col">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            02 • PRX LUNCH BY GOIÂNIA SHOPPING
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Transformar o almoço dos estudantes em experiência e fidelidade.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Aqui exploramos um ativo que o Goiânia Shopping já tem nas mãos: <strong>os milhares de estudantes que já frequentam a praça de alimentação diariamente</strong>. Criamos o <strong>PRX LUNCH by Goiânia Shopping</strong>.
          </p>
        </div>

        {/* The Mechanism */}
        <div className="mt-8 p-6 rounded-md border border-purple-100 bg-purple-50/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#7607FD] text-white flex items-center justify-center shrink-0 shadow-xs">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-950">
                Compra Antecipada com Recompensa por Planejamento
              </h3>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed max-w-2xl">
                O aluno pode comprar antecipadamente a sua refeição nas operações gastronômicas participantes e ser recompensado por se planejar: <strong>benefício exclusivo + PRX Coins</strong>.
              </p>
            </div>
          </div>
          <div className="shrink-0 px-4 py-2 rounded-sm bg-white border border-purple-200 text-xs font-mono font-bold text-[#7607FD] uppercase tracking-wider">
            Rotina Ativada
          </div>
        </div>

        {/* 4 Multipliers of Value */}
        <div className="mt-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-4">
            VOCÊ TRANSFORMA UMA ROTINA QUE JÁ EXISTE EM:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Educação Financeira */}
            <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  Educação Financeira
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Ensina o jovem a gerenciar seu orçamento semanal e planejar seus gastos antes de sair de casa.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-700 font-semibold">
                Hábitos Saudáveis
              </div>
            </div>

            {/* 2. Recorrência */}
            <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-purple-50 text-[#7607FD] flex items-center justify-center mb-3">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  Recorrência Comprovada
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Garante presença contínua de segunda a sexta-feira, transformando o shopping no refeitório oficial.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#7607FD] font-semibold">
                Frequência Semanal
              </div>
            </div>

            {/* 3. Dados de Consumo */}
            <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-cyan-50 text-[#0284c7] flex items-center justify-center mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  Dados de Consumo
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Mapeamento em tempo real dos hábitos, tíquete médio e preferências gastronômicas da nova geração.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0284c7] font-semibold">
                Business Intelligence
              </div>
            </div>

            {/* 4. Fluxo para Lojistas */}
            <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  Fluxo para Lojistas
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Previsibilidade de vendas para restaurantes participantes e movimento qualificado fora de pico.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-amber-700 font-semibold">
                Vendas Incrementais
              </div>
            </div>
          </div>
        </div>

        {/* Gamification Slogan Banner */}
        <div className="mt-8 rounded-sm bg-slate-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-md">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#0BD9FD] uppercase font-bold">
              A FÓRMULA DE GAMIFICAÇÃO
            </span>
            <p className="mt-1 text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
              &ldquo;Planejou antes. Pagou melhor. Ganhou Coins.&rdquo;
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-purple-600/30 border border-purple-500/40 rounded-sm text-xs font-mono text-purple-200">
            <Coins className="w-4 h-4 text-amber-400" />
            <span>PRX LUNCH</span>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
