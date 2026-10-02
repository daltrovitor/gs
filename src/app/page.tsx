// Hello World
"use client";

import { useState } from "react";
import { CoverSplashScreen } from "@/components/brand/CoverSplashScreen";
import { ProposalNavbar } from "@/components/proposal/ProposalNavbar";
import { CoverSlide } from "@/components/proposal/CoverSlide";
import { GsConexaoSlide } from "@/components/proposal/GsConexaoSlide";
import { GsPrxPassSlide } from "@/components/proposal/GsPrxPassSlide";
import { GsPrxLunchSlide } from "@/components/proposal/GsPrxLunchSlide";
import { GsPaisEFilhosSlide } from "@/components/proposal/GsPaisEFilhosSlide";
import { GsPrxDropSlide } from "@/components/proposal/GsPrxDropSlide";
import { GsInsidersSlide } from "@/components/proposal/GsInsidersSlide";
import { GsPresentsSlide } from "@/components/proposal/GsPresentsSlide";
import { GsNextSpaceSlide } from "@/components/proposal/GsNextSpaceSlide";
import { GsTeseSlide } from "@/components/proposal/GsTeseSlide";
import { ProposalFooter } from "@/components/proposal/ProposalFooter";

export default function HomePage() {
  const [isSplashOpen, setIsSplashOpen] = useState(true);

  return (
    <main className="min-h-screen bg-slate-100/60 text-slate-900 overflow-x-hidden selection:bg-[#7607FD] selection:text-white">
      {/* Animated Cover Splash Screen: GOIÂNIA SHOPPING × PRX */}
      <CoverSplashScreen
        isOpen={isSplashOpen}
        onComplete={() => setIsSplashOpen(false)}
      />

      {/* Sticky Header with GOIÂNIA SHOPPING × PRX Navigation & Replay Trigger */}
      <ProposalNavbar onReplaySplash={() => setIsSplashOpen(true)} />

      {/* Slides Stream Styled exactly like the Proposal Cards */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Slide 1: Cover (GOIÂNIA SHOPPING × PRX • THE NEXT GENERATION MALL) */}
        <CoverSlide onReplaySplash={() => setIsSplashOpen(true)} />

        {/* Slide 2: A Conexão dos Dois Universos (Ponte de Gerações) */}
        <GsConexaoSlide />

        {/* Slide 3: Propriedade 01 — PRX PASS × GOIÂNIA SHOPPING (Premiar Comportamento) */}
        <GsPrxPassSlide />

        {/* Slide 4: Propriedade 02 — PRX LUNCH (Transformar o Almoço em Experiência) */}
        <GsPrxLunchSlide />

        {/* Slide 5: Propriedade 03 — PAIS EM UM APP. FILHOS NO OUTRO. */}
        <GsPaisEFilhosSlide />

        {/* Slide 6: Propriedade 04 — PRX DROP (O Shopping que Desbloqueia Acesso) */}
        <GsPrxDropSlide />

        {/* Slide 7: Propriedade 05 — PRX INSIDERS × GOIÂNIA SHOPPING (Ativação Escolar) */}
        <GsInsidersSlide />

        {/* Slide 8: Propriedade 06 — GOIÂNIA SHOPPING PRESENTS PRX (A Parceria Sai do Prédio) */}
        <GsPresentsSlide />

        {/* Slide 9: Propriedade 07 — O SHOPPING COMO PALCO (PRX NEXT SPACE) */}
        <GsNextSpaceSlide />

        {/* Slide 10: A TESE (Manifesto Comercial & Punchline Definitiva) */}
        <GsTeseSlide />
      </div>

      {/* Footer with Goiânia Shopping × PRX Lockup and Viraweb Brand */}
      <ProposalFooter onReplaySplash={() => setIsSplashOpen(true)} />
    </main>
  );
}
