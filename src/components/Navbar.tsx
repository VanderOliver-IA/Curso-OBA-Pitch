"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar glass ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-content">
        <ul className="nav-links">
          <li><Link href="/#inicio" className="nav-item">Início</Link></li>
          <li><Link href="/#proposito" className="nav-item">Por que Arte?</Link></li>
          <li><Link href="/#metodologia" className="nav-item">Metodologia</Link></li>
          <li className="dropdown-trigger">
            <Link href="/#cursos" className="nav-item">Cursos <i className="fas fa-chevron-down" style={{ fontSize: "0.7em", marginLeft: "5px" }}></i></Link>
            <ul className="dropdown-menu glass">
              <li><Link href="/cursos/manga"><i className="fas fa-book-open"></i> Mangá</Link></li>
              <li><Link href="/cursos/realismo"><i className="fas fa-eye"></i> Desenho Realista</Link></li>
              <li><Link href="/cursos/cartoon"><i className="fas fa-pencil-alt"></i> Cartoon</Link></li>
              <li><Link href="/cursos/hq"><i className="fas fa-comment-dots"></i> HQ</Link></li>
              <li><Link href="/cursos/pintura-em-tela"><i className="fas fa-palette"></i> Pintura em Tela</Link></li>
              <li><Link href="/cursos/moda"><i className="fas fa-tshirt"></i> Moda</Link></li>
              <li><Link href="/cursos/cenario-e-ambientacao"><i className="fas fa-building"></i> Cenário</Link></li>
              <li><Link href="/cursos/comunicacao-visual"><i className="fas fa-bullhorn"></i> Com. Visual</Link></li>
            </ul>
          </li>
          <li><Link href="/parceiro" className="nav-item">Parceiro</Link></li>
          <li><Link href="/#localizacao" className="nav-item">Unidades</Link></li>
        </ul>
        <a href="/#localizacao" className="btn btn-primary desktop-cta">Agendar Aula Experimental</a>
      </div>
    </nav>
  );
}
