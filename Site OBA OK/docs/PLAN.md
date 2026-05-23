# PLAN.md — Site OBA: Melhorias de Performance, SEO & Acessibilidade

> **Data:** 2026-02-26
> **Versão:** OBA V2
> **Escopo:** Performance + SEO + Acessibilidade (sem novas funcionalidades)

---

## 🎯 Objetivos

1. Melhorar Core Web Vitals (LCP, CLS, FID)
2. Implementar Structured Data (JSON-LD) para rich snippets no Google
3. Corrigir lacunas de acessibilidade (WCAG AA)
4. Limpar dead code e inconsistências
5. Aplicar tecnologias modernas onde cabem

---

## 📋 Tarefas por Agente

### 🚀 performance-optimizer

- [ ] P1: Converter imagens PNG → WebP (especialmente hq-desktop.png 842KB)
  - Usar `cwebp` para gerar versões WebP
  - Adicionar `<picture>` + `<source type="image/webp">` no HTML
  - Manter PNG como fallback
- [ ] P2: Remover dead code do script.js (functions `switchPlan`, referências a `#plans-week`)
- [ ] P3: Font Awesome — substituir cdn full por subset via fa-kit ou ícones SVG para os utilizados
- [ ] P4: Google Fonts nas subpáginas — adicionar `preload` nas páginas de cursos
- [ ] P5: Adicionar `robots.txt`

### 🔍 seo-specialist

- [ ] S1: Implementar Schema JSON-LD no index.html
  - `LocalBusiness` (escola de artes com 2 unidades)
  - `FAQPage` (os 10 FAQs existentes)
  - `Course` para cada curso
- [ ] S2: Corrigir sitemap.xml — remover hash URLs (#inicio, #cursos etc.)
- [ ] S3: Melhorar Open Graph image (indicar imagem 1200x630px em vez do logo)
- [ ] S4: Melhorar alt texts nas imagens principais
- [ ] S5: Adicionar `robots.txt`

### 🎨 frontend-specialist

- [ ] F1: Corrigir emojis quebrados no HTML (encoding problema)
- [ ] F2: Corrigir contraste do mobile app bar (.app-item color #999 → #666 ou similar)
- [ ] F3: Adicionar `prefers-color-scheme` base (dark mode opcional)
- [ ] F4: Adicionar `<meta name="theme-color">` para barra do browser mobile
- [ ] F5: `View Transitions API` nas navegações entre curso pages (progressive enhancement)
- [ ] F6: Adicionar `aria-label` em elementos interativos sem texto
- [ ] F7: Melhorar srcset nas imagens com width descriptors

---

## 📁 Arquivos a Modificar

| Arquivo | Tipo de Mudança |
|---------|----------------|
| `index.html` | JSON-LD, OG image, alt texts, emojis, picture tags, theme-color |
| `index.css` | Contraste mobile bar, dark mode base, performance hints |
| `script.js` | Remover dead code switchPlan + referencias plans-week |
| `sitemap.xml` | Remover hash URLs |
| `cursos/*.html` | Google Fonts preload, picture tags, View Transitions |
| `images/*` | Geração WebP das imagens PNG (via cwebp) |
| `robots.txt` | Criar novo |

---

## ⚙️ Tecnologias Novas Aplicadas

| Tecnologia | Onde | Suporte |
|-----------|------|---------|
| WebP images | Todas as imagens | 97%+ browsers |
| `<picture>` + srcset | HTML responsivo | Universal |
| JSON-LD structured data | index.html | Google indexing |
| `theme-color` meta | index.html + cursos | iOS/Android Chrome |
| `prefers-reduced-motion` | Já existe ✅ | Mantido |
| View Transitions API | Navegação cursos | Progressive enhancement |
| `prefers-color-scheme` | CSS base | Progressive enhancement |

---

## 🏁 Critérios de Sucesso

- [ ] Peso total das imagens reduzido em >50%
- [ ] Lighthouse Performance Score esperado: +10 pontos
- [ ] Schema validado no Google Rich Results Test
- [ ] 0 erros de acessibilidade críticos
- [ ] Dead code removido do script.js
- [ ] robots.txt criado e correto
