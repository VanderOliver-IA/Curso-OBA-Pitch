import { notFound } from "next/navigation";
import { coursesData } from "@/data/coursesData";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const data = coursesData[params.slug];
  if (!data) return {};
  
  return {
    title: `${data.title} - Oficina Belas Artes`,
    description: data.heroDescription,
  };
}

export function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({
    slug,
  }));
}

export default async function CoursePage(props: Props) {
  const params = await props.params;
  const data = coursesData[params.slug];
  if (!data) return notFound();

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-course" style={{ background: "linear-gradient(135deg, var(--cyan-light) 0%, #ffffff 100%)" }}>
        <div className="hero-bg-elements">
          <div className="blob blob-1"></div>
          <div className="blob blob-2" style={{ background: "var(--yellow-primary)", left: "auto", right: "-5%", top: "50%" }}></div>
          <div className="hero-pattern"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-text">
            <div className="hero-tagline">
              <span className="icon">{data.taglineIcon}</span>
              <span>{data.tagline}</span>
            </div>
            <h1 className="animate-text delay-1">{data.title}</h1>
            <p className="animate-text delay-2">{data.heroDescription}</p>
            <div className="hero-ctas animate-text delay-3">
              <a href="https://wa.me/5521976406960" className="btn btn-primary btn-lg">
                <span>Agendar Aula Experimental</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container animate-visual">
              <picture>
                <source srcSet={data.imageDesktop.replace('.png', '.webp')} type="image/webp" />
                <img src={data.imageDesktop} alt={`${data.title} Desktop`} className="hero-img-desktop" loading="eager" />
              </picture>
              <picture>
                <source srcSet={data.imageMobile.replace('.png', '.webp')} type="image/webp" />
                <img src={data.imageMobile} alt={`${data.title} Mobile`} className="hero-img-mobile" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="section-padding">
        <div className="container course-content-container">
          <h2>{data.contentTitle}</h2>
          
          {data.contentParagraphs.map((p: string, idx: number) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: p }} />
          ))}

          <div className="course-details-grid">
            {data.cards.map((card: any, idx: number) => (
              <div key={idx} className="detail-card">
                <i className={card.icon}></i>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item: string, iIdx: number) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {data.highlight && (
            <div className="highlight-box">
              <h3><i className={data.highlight.icon}></i> {data.highlight.title}</h3>
              <p>{data.highlight.description}</p>
            </div>
          )}

          <div className="cta-box animate-up">
            <h3>Pronto para começar?</h3>
            <p>A primeira aula é para você sentir a energia da OBA na prática. Sem compromisso.</p>
            <a href="https://wa.me/5521976406960" className="btn btn-primary btn-lg">
              Quero minha Aula Experimental Gratuita
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
