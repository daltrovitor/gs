// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { Sparkles, Smartphone, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { PrxStaticLogo } from "@/components/brand/PrxAnimatedLogo";
import { GoianiaShoppingLogo } from "@/components/brand/GoianiaShoppingLogo";

export function GsConexaoSlide() {
  return (
    <PdfSlideFrame id="conexao" tag="A VISÃO ESTRATÉGICA">
      <div className="flex flex-col">
        {/* Slide Title */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            INTRODUÇÃO • THE NEXT GENERATION MALL
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Uma ponte entre duas gerações, dois aplicativos e um mesmo ecossistema de consumo.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            O <strong>Goiânia Shopping</strong> já possui o seu próprio ecossistema de relacionamento e benefícios voltado ao público adulto. A <strong>PRX</strong> nasce falando com uma geração anterior aos 18 anos — justamente num momento em que hábitos, marcas favoritas, lugares de encontro e primeiras decisões financeiras estão sendo formados.
          </p>
        </div>

        {/* 2-Universes Bridge Visual */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card Left: Goiânia Shopping */}
          <div className="lg:col-span-5 rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 shadow-xs mb-5">
                <div className="w-36 h-9 flex items-center">
                  <GoianiaShoppingLogo theme="dark" className="w-full h-full object-contain" />
                </div>
              </div>
              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold block mb-1">
                UNIVERSO ATUAL
              </span>
              <h3 className="text-xl font-black text-slate-950">
                O Ecossistema Adulto
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Relacionamento consolidado, programa de benefícios ativo, poder de compra familiar e rotina de consumo voltada aos responsáveis e tomadores de decisão.
              </p>
            </div>
            
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-bold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-[#7607FD]" />
              <span>RELAÇÃO ATUAL &bull; PAIS &bull; BENEFÍCIOS ADULTOS</span>
            </div>
          </div>

          {/* Connector Badge */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4 lg:py-0">
            <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#7607FD] to-[#0BD9FD] text-white flex items-center justify-center shadow-md font-mono font-black text-lg">
              ×
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#7607FD] font-bold uppercase mt-2">
              Conexão
            </span>
            <span className="text-[10px] text-slate-500 font-mono mt-0.5">
              Dois Apps &bull; Duas Gerações
            </span>
          </div>

          {/* Card Right: PRX */}
          <div className="lg:col-span-5 rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 shadow-xs mb-5">
                <div className="w-36 h-9 flex items-center">
                  <PrxStaticLogo className="w-full h-full object-contain" />
                </div>
              </div>
              <span className="text-[11px] font-mono tracking-widest text-[#0BD9FD] uppercase font-semibold block mb-1">
                UNIVERSO DA NOVA GERAÇÃO
              </span>
              <h3 className="text-xl font-black text-slate-950">
                A Próxima Geração (&lt; 18 Anos)
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Diálogo nativo com o jovem no momento mais decisivo da vida: formação de hábitos, marcas de preferência, pontos de encontro social e primeiras escolhas financeiras.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-bold text-[#7607FD]">
              <Smartphone className="w-4 h-4 text-[#0BD9FD]" />
              <span>GEN Z &bull; HÁBITOS &bull; PRIMEIRAS DECISÕES</span>
            </div>
          </div>

        </div>

        {/* Strategic Distinction Callout */}
        <div className="mt-8 rounded-sm bg-linear-to-r from-slate-950 via-[#120826] to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0BD9FD] font-bold">
              O PROPÓSITO CENTRAL DA PARCERIA
            </span>
            <p className="mt-2 text-xl sm:text-2xl font-black text-white leading-snug">
              &ldquo;Não criar outro clube de vantagens dentro do shopping. Criar a porta de entrada da próxima geração para o Goiânia Shopping.&rdquo;
            </p>
          </div>
          <div className="shrink-0 px-5 py-3 rounded-sm bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest uppercase text-white font-semibold text-center">
            Ponte de Gerações
          </div>
        </div>
      </div>
    </PdfSlideFrame>
  );
}
