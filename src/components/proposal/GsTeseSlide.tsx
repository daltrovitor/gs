// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { MessageCircle, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { GoianiaShoppingLogo } from "@/components/brand/GoianiaShoppingLogo";
import { PrxStaticLogo } from "@/components/brand/PrxAnimatedLogo";

export function GsTeseSlide() {
  return (
    <PdfSlideFrame id="tese" tag="A TESE • SÍNTESE ESTRATÉGICA">
      <div className="flex flex-col">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            CONCLUSÃO • A TESE DO PROJETO
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Construindo a relação com o cliente de amanhã.
          </h2>
        </div>

        {/* The Standalone Slide / The Killer Punchline */}
        <div className="mt-8 rounded-sm bg-linear-to-br from-[#0B0B10] via-[#140827] to-[#0B0B10] text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7607FD]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-[11px] font-mono tracking-[0.35em] text-[#0BD9FD] uppercase font-bold block mb-4">
              A FRASE QUE SINTETIZA O PROJETO
            </span>

            <p className="text-xl sm:text-3xl text-slate-300 font-light leading-relaxed">
              Não queremos trazer a Gen Z para o shopping.
            </p>

            <p className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Queremos fazer essa geração chamar o Goiânia Shopping de seu.
            </p>
          </div>
        </div>

        {/* Minimalist Manifesto Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: O Sentido Real do Pertencimento */}
          <div className="rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
                O DESAFIO SUPERADO
              </span>
              <h3 className="text-xl font-black text-slate-950">
                Mais do que Consumo, Pertencimento
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Não queremos transformar jovens em consumidores do Goiânia Shopping por meio de desconto.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Queremos transformar o Goiânia Shopping em um lugar que essa geração <strong>escolha, frequente, consuma, encontre pessoas, viva experiências e queira pertencer</strong>.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#7607FD] font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Experiência &bull; Comunidade &bull; Fidelidade Genuína</span>
            </div>
          </div>

          {/* Right: As Duas Relações Temporais */}
          <div className="rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD] block mb-2">
                HORIZONTE TEMPORAL
              </span>
              <h3 className="text-xl font-black text-slate-950">
                Hoje & Amanhã em Sinergia
              </h3>
              
              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-md bg-slate-50 border border-slate-150">
                  <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase font-bold block mb-1">
                    HOJE
                  </span>
                  <p className="text-sm font-semibold text-slate-900">
                    O app do Goiânia Shopping cuida da relação com os pais e tomadores de decisão de hoje.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-purple-50/70 border border-purple-150">
                  <span className="text-[11px] font-mono tracking-widest text-[#7607FD] uppercase font-bold block mb-1">
                    AMANHÃ
                  </span>
                  <p className="text-sm font-semibold text-slate-950">
                    A PRX começa a construir a relação vitalícia com o cliente de amanhã.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>GOIÂNIA SHOPPING × PRX</span>
              <span className="text-[#7607FD] font-bold">THE NEXT GENERATION MALL</span>
            </div>
          </div>

        </div>

        {/* The Commercial Turning Point (A Virada) */}
        <div className="mt-8 p-6 sm:p-8 rounded-sm bg-purple-50 border-l-4 border-[#7607FD] shadow-xs">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7607FD] font-bold block mb-2">
            A GRANDE VIRADA COMERCIAL
          </span>
          <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-medium">
            A proposta deixa de ser <span className="line-through text-slate-500 font-normal">“me dê desconto nas suas lojas para colocar no meu app”</span> e vira uma <strong>estratégia de rejuvenescimento, relacionamento familiar, fluxo contínuo, fidelização e formação de novos consumidores</strong> — sem rebaixar o Goiânia Shopping a cupom.
          </p>
        </div>

        {/* Final CTA / Próximos Passos */}
        <div className="mt-10 p-8 rounded-sm bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs font-mono tracking-widest uppercase text-[#0BD9FD] font-semibold">
              PRÓXIMOS PASSOS
            </span>
            <p className="text-xl sm:text-2xl font-black text-white">
              Vamos colocar essa conexão em movimento?
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Alinhamento executivo entre as diretorias de marketing, inovação e operações.
            </p>
          </div>

          <a
            href="https://wa.me/5511989609797?text=Ol%C3%A1%20Rafael%2C%20gostaria%20de%20conversar%20sobre%20a%20parceria%20Goi%C3%A2nia%20Shopping%20x%20PRX!"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <MessageCircle className="w-5 h-5 text-slate-950" />
            <span>Falar no WhatsApp com Rafael</span>
          </a>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
