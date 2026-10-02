// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { Footprints, Rocket, Award, School, MapPin, Sparkles, Building2, Flame } from "lucide-react";
import { GoianiaShoppingLogo } from "@/components/brand/GoianiaShoppingLogo";

export function GsPresentsSlide() {
  return (
    <PdfSlideFrame id="presents" tag="PROPRIEDADE 06 • PRESENTS">
      <div className="flex flex-col">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            06 • GOIÂNIA SHOPPING PRESENTS PRX
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            A parceria sai do prédio e vai para a cidade.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            A colaboração não fica confinada às quatro paredes do empreendimento. O <strong>Goiânia Shopping</strong> passa a assinar e marcar presença nas grandes experiências proprietárias que movimentam a juventude por toda a cidade.
          </p>
        </div>

        {/* 4 Flagship Experiences */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* PRX RUN */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-purple-50 text-[#7607FD] flex items-center justify-center mb-3">
                <Footprints className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                EVENTO PROPRIETÁRIO
              </span>
              <h3 className="text-lg font-black text-slate-950 mt-1">PRX RUN</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Circuito de corrida de rua e estilo de vida saudável para jovens e famílias, com largada ou premiação celebrada no Goiânia Shopping.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#7607FD] font-semibold">
              Saúde & Bem-Estar
            </div>
          </div>

          {/* PRX UP */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-cyan-50 text-[#0284c7] flex items-center justify-center mb-3">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                EVENTO PROPRIETÁRIO
              </span>
              <h3 className="text-lg font-black text-slate-950 mt-1">PRX UP</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Grande encontro inspiracional de criatividade, entretenimento e tendências comportamentais para a nova geração.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0284c7] font-semibold">
              Inspiração & Tendências
            </div>
          </div>

          {/* PRX FOUNDERS */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                EVENTO PROPRIETÁRIO
              </span>
              <h3 className="text-lg font-black text-slate-950 mt-1">PRX FOUNDERS</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Programa pioneiro de aceleração de jovens empreendedores, criadores de startups e talentos em negócios.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-amber-700 font-semibold">
              Empreendedorismo Teen
            </div>
          </div>

          {/* Ações em Escolas */}
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <School className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                EXTERIOR
              </span>
              <h3 className="text-lg font-black text-slate-950 mt-1">Ações em Escolas</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Presença nos intervalos escolares, gincanas, formaturas e ativações de retorno às aulas ao longo do ano letivo.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-700 font-semibold">
              Presença Diária
            </div>
          </div>

        </div>

        {/* Strategic Punchline Callout */}
        <div className="mt-8 rounded-sm bg-linear-to-r from-slate-950 via-[#130728] to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0BD9FD] font-bold">
              ALCANCE EXTRA-MUROS
            </span>
            <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug">
              &ldquo;Ou seja: a PRX não leva apenas jovens para dentro do shopping. <span className="text-[#0BD9FD]">Leva o Goiânia Shopping para onde os jovens estão.</span>&rdquo;
            </p>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
