import { Metadata } from "next";
import ParceiroClient from "./ParceiroClient";

export const metadata: Metadata = {
  title: "Parceiros OBA - Matrícula Gratuita + Aula Experimental",
  description: "Página exclusiva para parceiros da OBA. Garanta matrícula gratuita e agende a aula experimental em poucos segundos.",
  openGraph: {
    title: "Parceiros OBA - Matrícula Gratuita + Aula Experimental",
    description: "Ação exclusiva para restaurantes parceiros: matrícula 100% gratuita e aula experimental inclusa.",
    images: ["/images/matriculagratis.png"],
  }
};

export default function ParceiroPage() {
  return (
    <main>
      <ParceiroClient />
    </main>
  );
}
