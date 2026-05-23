import Link from "next/link";

const courses = [
  { id: "manga", name: "Mangá", img: "manga-card" },
  { id: "realismo", name: "Desenho Realista", img: "realismo-card" },
  { id: "cartoon", name: "Cartoon", img: "cartoon-card" },
  { id: "hq", name: "HQ", img: "hq-card" },
  { id: "pintura-em-tela", name: "Pintura em Tela", img: "pintura-card" },
  { id: "moda", name: "Moda", img: "moda-card" },
  { id: "cenario-e-ambientacao", name: "Cenário e Ambientação", img: "cenario-card" },
  { id: "comunicacao-visual", name: "Comunicação Visual", img: "comunicacao-visual-card" }
];

export function CourseGrid() {
  return (
    <section id="cursos" className="courses section-padding">
      <div className="divider divider-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,120 L1200,60 C1050,90 900,30 750,60 C600,90 450,30 300,60 C150,90 0,60 0,60 Z" className="fill-white"></path>
          <path d="M0,120 L1200,120 L1200,70 C1050,100 900,40 750,70 C600,100 450,40 300,70 C150,100 0,70 0,70 Z" className="fill-white layer-2"></path>
          <path d="M0,120 L1200,120 L1200,80 C1050,110 900,50 750,80 C600,110 450,50 300,80 C150,110 0,80 0,80 Z" className="fill-white layer-3"></path>
        </svg>
      </div>
      <div className="container">
        <div className="section-header reveal reveal-up">
          <span className="section-tag">Nossas Oficinas</span>
          <h2>Encontre sua expressão</h2>
          <p>Do traço clássico ao digital. Qual universo você quer explorar?</p>
        </div>

        <div className="courses-grid-new">
          {courses.map((course, i) => (
            <div key={course.id} className={`course-card-new reveal reveal-up delay-${(i % 3) + 1}`}>
              <div className="course-img-holder">
                <picture>
                  <source srcSet={`images/cursos/${course.img}.webp`} type="image/webp" />
                  <img src={`images/cursos/${course.img}.png`} alt={`Curso de ${course.name} na Oficina Belas Artes`} loading="lazy" />
                </picture>
              </div>
              <Link href={`/cursos/${course.id}`} className="btn btn-sm btn-outline">
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
