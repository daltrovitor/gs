// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { Users2, Smartphone, HeartHandshake, Film, Utensils, Shirt, Gamepad2, Sparkles, MapPin } from "lucide-react";
import { GoianiaShoppingLogo } from "@/components/brand/GoianiaShoppingLogo";
import { PrxStaticLogo } from "@/components/brand/PrxAnimatedLogo";

export function GsPaisEFilhosSlide() {
  return (
    <PdfSlideFrame id="pais-e-filhos" tag="PROPRIEDADE 03 • SINERGIA FAMILIAR">
      <div className="flex flex-col">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            03 • PAIS EM UM APP. FILHOS NO OUTRO.
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Uma das maiores sacadas estratégicas da proposta.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            O responsável já está engajado no ecossistema do Goiânia Shopping. O adolescente está na PRX. Em vez de disputar o mesmo aplicativo, <strong>criamos campanhas sinérgicas conectando as duas pontas da família</strong>.
          </p>
        </div>

        {/* The Dual-App Mechanics */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Card 1: Pai / Mãe */}
          <div className="lg:col-span-5 rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                APLICATIVO 01
              </span>
              <span className="px-2.5 py-0.5 rounded-sm bg-slate-900 text-white font-mono text-[10px] font-bold">
                GOIÂNIA SHOPPING
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-slate-800">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-950">App do Responsável</h3>
                <p className="text-xs text-slate-500 font-mono">Pai ou mãe recebe o convite</p>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-md bg-slate-50 border border-slate-150 text-xs sm:text-sm text-slate-700 leading-relaxed">
              &ldquo;Você ganhou um almoço especial ou combo de cinema com seu filho no Goiânia Shopping. Para ativar, ele precisa confirmar o desafio no app PRX!&rdquo;
            </div>

            <div className="mt-4 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7607FD]" />
              <span>Gera desejo de compartilhar tempo de qualidade</span>
            </div>
          </div>

          {/* Central Matchmaking Bridge */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4 lg:py-0">
            <div className="w-14 h-14 rounded-full bg-linear-to-r from-[#7607FD] via-indigo-600 to-[#0BD9FD] text-white flex items-center justify-center shadow-lg font-mono font-black text-xl">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-slate-900 uppercase mt-3">
              O ENCONTRO
            </span>
            <span className="text-[10px] font-mono text-slate-500 text-center mt-1">
              Desbloqueio presencial no shopping
            </span>
          </div>

          {/* Card 2: Filho / Adolescente */}
          <div className="lg:col-span-5 rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-mono font-bold tracking-widest text-[#7607FD] uppercase">
                APLICATIVO 02
              </span>
              <span className="px-2.5 py-0.5 rounded-sm bg-purple-100 text-[#7607FD] font-mono text-[10px] font-bold">
                PRX APP
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-purple-50 flex items-center justify-center text-[#7607FD]">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-950">App do Jovem</h3>
                <p className="text-xs text-slate-500 font-mono">Adolescente recebe a outra metade</p>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-md bg-purple-50/70 border border-purple-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
              &ldquo;Seus pais desbloquearam uma experiência no Goiânia Shopping. Vá até lá junto com eles para validar o QR Code conjunto e ganhar PRX Coins de bônus!&rdquo;
            </div>

            <div className="mt-4 text-[11px] font-mono text-purple-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0BD9FD]" />
              <span>Gera o incentivo perfeito para ir junto</span>
            </div>
          </div>

        </div>

        {/* Territory Options */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-slate-700">
          <span className="px-3 py-1.5 rounded-sm bg-white border border-slate-200 shadow-2xs font-semibold flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5 text-[#7607FD]" /> Gastronomia
          </span>
          <span className="px-3 py-1.5 rounded-sm bg-white border border-slate-200 shadow-2xs font-semibold flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-[#0BD9FD]" /> Cinema
          </span>
          <span className="px-3 py-1.5 rounded-sm bg-white border border-slate-200 shadow-2xs font-semibold flex items-center gap-1.5">
            <Shirt className="w-3.5 h-3.5 text-amber-500" /> Moda & Lifestyle
          </span>
          <span className="px-3 py-1.5 rounded-sm bg-white border border-slate-200 shadow-2xs font-semibold flex items-center gap-1.5">
            <Gamepad2 className="w-3.5 h-3.5 text-rose-500" /> Games & Cultura
          </span>
        </div>

        {/* The Punchline Banner */}
        <div className="mt-8 rounded-sm bg-linear-to-r from-slate-950 via-[#180b2b] to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#0BD9FD] font-bold">
              A GRANDE TRANSFORMAÇÃO DE PROPÓSITO
            </p>
            <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              &ldquo;Dois aplicativos. Duas gerações. Um encontro.&rdquo;
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              O shopping deixa de ser apenas o lugar onde o pai leva o filho e passa a ser um <strong>espaço vivo de conexão genuína entre eles</strong>.
            </p>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
