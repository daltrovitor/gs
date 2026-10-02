// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { GraduationCap, Users, Megaphone, ArrowRight, Sparkles, School, Target, Share2 } from "lucide-react";

export function GsInsidersSlide() {
  return (
    <PdfSlideFrame id="insiders" tag="PROPRIEDADE 05 • PRX INSIDERS">
      <div className="flex flex-col">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            05 • PRX INSIDERS × GOIÂNIA SHOPPING
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Os próprios jovens levando o Goiânia Shopping para dentro das escolas.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Nossa rede de <strong>PRX Insiders</strong> nas escolas particulares de maior prestígio passa a operar também como uma rede viva e orgânica de ativação do Goiânia Shopping.
          </p>
        </div>

        {/* 3 Steps / How it works */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-purple-50 text-[#7607FD] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                PASSO 01
              </span>
              <h3 className="mt-1 text-base font-bold text-slate-950">
                Missões & Desafios Exclusivos
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Os embaixadores recebem pautas, convites e missões especiais para compartilhar com seus grupos escolares e salas de aula.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#7607FD] font-semibold">
              Voz de Par para Par
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-cyan-50 text-[#0284c7] flex items-center justify-center mb-4">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                PASSO 02
              </span>
              <h3 className="mt-1 text-base font-bold text-slate-950">
                Difusão Orgânica nas Salas
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Em vez da marca soar invasiva, são os próprios líderes de opinião e turmas que convidam os amigos para o shopping.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0284c7] font-semibold">
              Autenticidade Real
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                PASSO 03
              </span>
              <h3 className="mt-1 text-base font-bold text-slate-950">
                Fluxo Presencial em Bando
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Adolescentes consomem e frequentam em grupos: a mobilização escolar enche a praça, cinema e corredores com alto tíquete.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-amber-700 font-semibold">
              Efeito Manada Positivo
            </div>
          </div>

        </div>

        {/* The Inverted Flow Diagram */}
        <div className="mt-8 p-6 sm:p-8 rounded-sm bg-slate-950 text-white border border-slate-800 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0BD9FD] font-bold">
              O CAMINHO INVERTIDO
            </span>
            <p className="mt-1 text-lg sm:text-xl font-bold text-slate-200">
              Invertemos a lógica tradicional de marketing de shopping:
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-sm font-bold">
            <div className="flex items-center gap-3 px-5 py-3 rounded-md bg-white/10 border border-white/15 w-full md:w-auto justify-center">
              <School className="w-5 h-5 text-amber-400" />
              <span>Escola Particular</span>
            </div>

            <ArrowRight className="w-5 h-5 text-[#0BD9FD] rotate-90 md:rotate-0" />

            <div className="flex items-center gap-3 px-5 py-3 rounded-md bg-[#7607FD]/40 border border-[#7607FD] w-full md:w-auto justify-center">
              <Users className="w-5 h-5 text-purple-300" />
              <span>PRX Insiders</span>
            </div>

            <ArrowRight className="w-5 h-5 text-[#0BD9FD] rotate-90 md:rotate-0" />

            <div className="flex items-center gap-3 px-5 py-3 rounded-md bg-[#0BD9FD]/30 border border-[#0BD9FD] w-full md:w-auto justify-center">
              <Sparkles className="w-5 h-5 text-[#0BD9FD]" />
              <span>Goiânia Shopping</span>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-slate-400 font-mono">
            &ldquo;Em vez de o shopping tentar entrar nas escolas falando como marca, os próprios jovens levam o Goiânia Shopping para dentro delas.&rdquo;
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
