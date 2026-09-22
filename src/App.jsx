import * as React from "react";
import { SiAngular, SiCss, SiDocker, SiFastapi, SiGit, SiGithub, SiGnubash, SiHtml5, SiJavascript, SiLinux, SiNvidia, SiOpenjdk, SiPostgresql, SiPython, SiReact, SiSqlite, SiTypescript } from "react-icons/si";
import { TbArrowUpRight, TbAutomation, TbBrain, TbDatabase, TbSql } from "react-icons/tb";
import profileImage from "../assets/bernardo.png";
import ParticleBackground from "./ParticleBackground.jsx";

const links = {
  github: "https://github.com/BeVieira07",
  linkedin: "https://www.linkedin.com/in/bernardo-vieira05/",
  email: "mailto:bevieiras@gmail.com",
  whatsapp: "https://wa.me/5548984269153",
};
const navItems = [
  { label: "Stack", href: "#toolbox" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
];
const stackItemsByCategory = {
  Linguagens: [
    ["Python", SiPython, "#3776ab"], ["TypeScript", SiTypescript, "#3178c6"],
    ["JavaScript", SiJavascript, "#9a7800"], ["SQL", TbSql, "#2478ff"],
    ["Shell", SiGnubash, "#161616"], ["Java", SiOpenjdk, "#d16b00"],
  ],
  "Back-end & APIs": [
    ["FastAPI", SiFastapi, "#009688"], ["APIs REST", TbAutomation, "#02569b"],
    ["PostgreSQL", SiPostgresql, "#4169e1"], ["SQLite", SiSqlite, "#003b57"],
  ],
  "Inteligência Artificial": [
    ["Machine Learning", TbBrain, "#a04de0"], ["Deep Learning", TbBrain, "#d65a00"],
    ["LLMs", TbBrain, "#412991"], ["RAG", TbDatabase, "#0a66c2"],
    ["Embeddings", TbDatabase, "#5a29e4"], ["Engenharia de prompts", TbAutomation, "#161616"],
  ],
  "Front-end": [
    ["React", SiReact, "#149eca"], ["Angular", SiAngular, "#dd0031"],
    ["HTML5", SiHtml5, "#e34f26"], ["CSS3", SiCss, "#663399"],
  ],
  "Infra & Ferramentas": [
    ["Docker", SiDocker, "#2496ed"], ["Linux", SiLinux, "#161616"],
    ["Git", SiGit, "#f05032"], ["GitHub", SiGithub, "#181717"], ["CI/CD", TbAutomation, "#7950b8"],
  ],
};
const experiences = [
  {
    period: "Abr. 2026 — Atual", company: "Dígitro Tecnologia",
    title: "Estagiário em Pesquisa e Desenvolvimento de Inteligência Artificial",
    tasks: [
      "Desenvolvimento e otimização de soluções baseadas em LLMs.",
      "Criação de pipelines de RAG, embeddings e processamento de dados.",
      "Desenvolvimento e integração de APIs com FastAPI.",
      "Integração de modelos multimodais e orquestração de agentes.",
      "Avaliação de modelos e otimização de inferência.",
      "Uso de Docker, SQL, Git e práticas de CI/CD.",
    ],
  },
  {
    period: "Dez. 2023 — Jul. 2024", company: "Nexxera",
    title: "Aprendiz de Implantação de Sistemas",
    tasks: [
      "Apoio na implantação e configuração de sistemas corporativos.",
      "Cadastro e configuração de clientes e parceiros.",
      "Integração e validação de dados.",
      "Automação de rotinas com Shell e Python.",
      "Suporte técnico e acompanhamento pós-implantação.",
      "Documentação de processos e rotinas operacionais.",
    ],
  },
];
const areas = [
  { icon: TbBrain, title: "Inteligência Artificial", description: "LLMs, RAG e agentes de IA para aplicações inteligentes. Engenharia de prompts, embeddings e integração de modelos multimodais.", tags: ["LLMs", "RAG", "Agentes de IA"] },
  { icon: TbDatabase, title: "Back-end & integração", description: "APIs REST com Python e FastAPI, integração de sistemas e processamento, validação e vetorização de dados.", tags: ["Python", "FastAPI", "SQL"] },
  { icon: TbAutomation, title: "Automação & infraestrutura", description: "Automação com Shell e Python, conteinerização com Docker e práticas de CI/CD. Interesse em arquitetura e otimização de inferência.", tags: ["Docker", "CI/CD", "Linux"] },
];
const floatingTechnologies = [
  { name: "Docker", icon: SiDocker, x: 5, y: 16, size: 68, color: "#2496ed", duration: 76 },
  { name: "Python", icon: SiPython, x: 87, y: 13, size: 58, color: "#3776ab", duration: 89 },
  { name: "Java", icon: SiOpenjdk, x: 16, y: 49, size: 60, color: "#d16b00", duration: 83 },
  { name: "CUDA", icon: SiNvidia, x: 91, y: 51, size: 64, color: "#619b12", duration: 94 },
  { name: "Linux", icon: SiLinux, x: 6, y: 81, size: 56, color: "#414854", duration: 87 },
  { name: "Git", icon: SiGit, x: 81, y: 83, size: 60, color: "#f05032", duration: 72 },
  { name: "React", icon: SiReact, x: 44, y: 12, size: 52, color: "#149eca", duration: 97 },
  { name: "FastAPI", icon: SiFastapi, x: 61, y: 74, size: 44, color: "#009688", duration: 81 },
  { name: "PostgreSQL", icon: SiPostgresql, x: 31, y: 86, size: 48, color: "#4169e1", duration: 92 },
  { name: "TypeScript", icon: SiTypescript, x: 69, y: 35, size: 42, color: "#3178c6", duration: 86 },
];

function FloatingStack() {
  return (
    <div className="floating-stack" aria-hidden="true">
      {floatingTechnologies.map(({ name, icon: Icon, x, y, size, color, duration }, index) => (
        <div
          className="floating-tech"
          key={name}
          style={{
            "--float-x": `${x}%`,
            "--float-y": `${y}%`,
            "--float-size": `${size}px`,
            "--float-color": color,
            "--float-duration": `${duration}s`,
            "--float-delay": `${-index * 9}s`,
            "--float-direction": index % 2 === 0 ? "alternate" : "alternate-reverse",
          }}
        >
          <Icon focusable="false" />
          {name === "CUDA" && <span>CUDA</span>}
        </div>
      ))}
    </div>
  );
}

function ExternalLink({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}
function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    function onEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    }
    if (menuOpen) document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [menuOpen]);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Ir para o início" onClick={() => setMenuOpen(false)}><span className="brand-mark">Bernardo</span></a>
        <button id="menu-toggle" className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Fechar menu" : "Menu"}</button>
        <div id="nav-links" className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </div>
      </nav>
    </header>
  );
}
function Hero() {
  return (
    <section className="hero section-pad" id="inicio" aria-labelledby="hero-title">
      <div className="hero-title">
        <p className="eyebrow">Back-end · Inteligência Artificial · Integração de sistemas</p>
        <h1 id="hero-title">Eu sou <span>Bernardo Vieira</span>.<br />Desenvolvedor em formação.</h1>
        <p className="hero-description">Desenvolvo e otimizo soluções com LLMs, APIs e automação para aplicações inteligentes.</p>
      </div>
      <div className="hero-location" aria-label="Localização"><span className="asterisk" aria-hidden="true">*</span><div><strong>Florianópolis</strong><small>SC, Brasil</small></div></div>
      <div className="hero-portrait">
        <span className="dot-pattern top" aria-hidden="true" /><span className="dot-pattern bottom" aria-hidden="true" />
        <span className="sparkle sparkle-blue" aria-hidden="true" /><span className="sparkle sparkle-peach" aria-hidden="true" /><span className="sparkle sparkle-pink" aria-hidden="true" />
        <img src={profileImage} alt="Bernardo Vieira" fetchPriority="high" />
        <div className="hero-actions">
          <a className="button outline" href="#contato">Vamos conversar</a>
          <ExternalLink className="button primary" href={links.linkedin}>LinkedIn <TbArrowUpRight aria-hidden="true" /></ExternalLink>
        </div>
      </div>
      <div className="hero-note"><span className="status-dot" />Atualmente na Dígitro<strong>Pesquisa & Desenvolvimento de IA</strong><a href="#experiencias">Conheça minha trajetória ↓</a></div>
    </section>
  );
}
function Toolbox() {
  const [activeCategory, setActiveCategory] = React.useState("Inteligência Artificial");
  return (
    <section className="stack-section section-pad" id="toolbox" aria-labelledby="stack-title">
      <div className="stack-heading"><h2 id="stack-title">Dê uma olhada na minha <span>Stack</span></h2><p>Tecnologias que fazem parte da minha formação e atuação.</p></div>
      <div className="stack-tabs" role="group" aria-label="Categorias da stack">
        {Object.keys(stackItemsByCategory).map((category) => <button className={category === activeCategory ? "active" : ""} type="button" key={category} onClick={() => setActiveCategory(category)} aria-pressed={category === activeCategory} aria-controls="stack-results">{category}</button>)}
      </div>
      <div className="stack-grid" id="stack-results" aria-live="polite" aria-atomic="true">
        {stackItemsByCategory[activeCategory].map(([label, Icon, color]) => <article className="stack-card" key={label}><span className="stack-icon" style={{ "--icon-color": color }}><Icon aria-hidden="true" /></span><span>{label}</span></article>)}
      </div>
    </section>
  );
}
function ExperienceTimeline() {
  return (
    <section className="section-pad" id="experiencias">
      <SectionHeading compact eyebrow="Experiência profissional" title="Da integração de sistemas à inteligência artificial." />
      <div className="timeline-list">
        {experiences.map((item) => <article className="timeline-item" key={item.company}><span className="timeline-date">{item.period}</span><div><p className="company-name">{item.company}</p><h3>{item.title}</h3><ul className="experience-tasks">{item.tasks.map((task) => <li key={task}>{task}</li>)}</ul></div></article>)}
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section className="section-pad" id="projetos">
      <SectionHeading eyebrow="Áreas de atuação" title="O que me move a construir." />
      <div className="project-grid">
        {areas.map(({ icon: Icon, title, description, tags }, index) => <article className={`project-card ${index === 0 ? "featured" : ""}`} key={title}><div className="project-topline"><Icon size={30} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{description}</p><ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}
      </div>
      <div className="github-callout"><div><h3>Projetos e código no GitHub</h3><p>Acompanhe meus repositórios e minha evolução como desenvolvedor.</p></div><ExternalLink className="button outline" href={`${links.github}?tab=repositories`}><SiGithub aria-hidden="true" /> Ver repositórios <TbArrowUpRight aria-hidden="true" /></ExternalLink></div>
    </section>
  );
}
function About() {
  return (
    <section className="section-pad" id="sobre">
      <div className="about-panel">
        <div><p className="eyebrow">Sobre mim</p><h2>Aprendizado contínuo. Aplicações reais.</h2></div>
        <div className="about-copy">
          <p>Sou Bernardo Vieira, estudante de Análise e Desenvolvimento de Sistemas no IFSC e estagiário em Pesquisa e Desenvolvimento de Inteligência Artificial na Dígitro Tecnologia.</p>
          <p>Trabalho com soluções de IA aplicadas a problemas reais, buscando evoluir em arquitetura de sistemas, desenvolvimento back-end e construção de aplicações inteligentes.</p>
          <p>Meus interesses incluem agentes de IA, bancos de dados vetoriais e otimização de inferência com KV Cache e Continuous Batching. Também desenvolvo interfaces com React e TypeScript.</p>
        </div>
      </div>
      <div className="education-grid">
        <article className="education-card"><p className="eyebrow">Formação acadêmica</p><h3>Análise e Desenvolvimento de Sistemas</h3><p>Instituto Federal de Santa Catarina — IFSC</p><span className="education-period">Mar. 2025 — Ago. 2027 <span>(conclusão prevista)</span></span></article>
        <article className="education-card"><p className="eyebrow">Idiomas</p><dl className="language-list"><div><dt>Português</dt><dd>Nativo</dd></div><div><dt>Inglês</dt><dd>Intermediário para leitura técnica</dd></div></dl></article>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section className="section-pad" id="contato">
      <div className="contact-box">
        <p className="eyebrow">Contato</p><h2>Vamos construir algo juntos?</h2>
        <p className="contact-description">Me chame para conversar sobre tecnologia, projetos e oportunidades em back-end e inteligência artificial.</p>
        <a className="contact-email" href={links.email}>bevieiras@gmail.com <TbArrowUpRight aria-hidden="true" /></a>
        <div className="contact-actions"><ExternalLink className="button primary" href={links.whatsapp}>WhatsApp <TbArrowUpRight aria-hidden="true" /></ExternalLink><ExternalLink className="button ghost" href={links.linkedin}>LinkedIn</ExternalLink><ExternalLink className="button ghost" href={links.github}>GitHub</ExternalLink></div>
        <p className="contact-details">+55 48 98426-9153 · Florianópolis, SC — Brasil</p>
      </div>
    </section>
  );
}
function SectionHeading({ eyebrow, title, compact = false }) {
  return <div className={`section-heading ${compact ? "compact" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>;
}
export default function App() {
  return <><ParticleBackground /><FloatingStack /><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo" tabIndex={-1}><Hero /><Toolbox /><ExperienceTimeline /><Projects /><About /><Contact /></main><footer className="footer"><a href="#inicio">Bernardo Vieira ↑</a><span>© {new Date().getFullYear()} · Portfólio pessoal</span></footer></>;
}
