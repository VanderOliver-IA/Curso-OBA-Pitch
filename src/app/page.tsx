import { HeroSlider } from "@/components/HeroSlider";
import { Purpose } from "@/components/Purpose";
import { Methodology } from "@/components/Methodology";
import { CourseGrid } from "@/components/CourseGrid";
import { Instagram } from "@/components/Instagram";
import { Schedule } from "@/components/Schedule";
import { LocationSection } from "@/components/LocationSection";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Purpose />
      <Methodology />
      <CourseGrid />
      <Instagram />
      <Schedule />
      <LocationSection />
      <FAQ />

      {/* FINAL CTA */}
      <section className="final-cta section-padding">
        <div className="container text-center reveal">
          <h2>Pronto para começar sua jornada?</h2>
          <p>A primeira aula é por nossa conta. Venha experimentar sem compromisso.</p>
          <a href="#localizacao" className="btn btn-primary btn-lg">
            Agendar Aula Experimental Gratuita
          </a>
          <img src="images/arty-4.png" alt="Arty Mascote da OBA" className="arty-footer" data-speed="0.05" loading="lazy" decoding="async" width="300" height="300" />
        </div>
      </section>
    </main>
  );
}
