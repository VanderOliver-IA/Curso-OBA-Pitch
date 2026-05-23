import { Metadata } from "next";
import { HeroLancamento } from "@/components/gavea/HeroLancamento";
import { BarraDestaques } from "@/components/gavea/BarraDestaques";
import { TurmaFundadora } from "@/components/gavea/TurmaFundadora";
import { ApresentacaoGavea } from "@/components/gavea/ApresentacaoGavea";
import { CursosVitrine } from "@/components/gavea/CursosVitrine";
import { PublicoAlvo } from "@/components/gavea/PublicoAlvo";
import { MetodologiaDestaque } from "@/components/gavea/MetodologiaDestaque";
import { ProvasSociais } from "@/components/gavea/ProvasSociais";
import { FormularioAgendamento } from "@/components/gavea/FormularioAgendamento";
import { LocalizacaoGavea } from "@/components/gavea/LocalizacaoGavea";
import { FAQAccordion } from "@/components/gavea/FAQAccordion";
import { CTAFinal } from "@/components/gavea/CTAFinal";
import { BotaoWhatsAppFixo } from "@/components/gavea/BotaoWhatsAppFixo";

export const metadata: Metadata = {
  title: "OBA Gávea | Curso de Desenho no Shopping da Gávea",
  description: "A Oficina Belas Artes chegou à Gávea. Agende sua aula experimental gratuita e faça parte da Turma Fundadora da nova unidade no Shopping da Gávea.",
};

export default function OBAGaveaLancamento() {
  return (
    <main className="overflow-hidden">
      <HeroLancamento />
      <BarraDestaques />
      <TurmaFundadora />
      <ApresentacaoGavea />
      <CursosVitrine />
      <PublicoAlvo />
      <MetodologiaDestaque />
      <ProvasSociais />
      
      {/* Fundo de Funil / Conversão */}
      <FormularioAgendamento />
      <LocalizacaoGavea />
      <FAQAccordion />
      <CTAFinal />
      <BotaoWhatsAppFixo />
    </main>
  );
}
