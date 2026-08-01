import * as React from "react";
import { FaAws } from "react-icons/fa";
import {
  SiCss,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiN8N,
  SiOpenjdk,
  SiPandas,
  SiPytorch,
  SiPython,
  SiReact,
  SiScrumalliance,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { TbAutomation, TbBrain, TbDatabase, TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import profileImage from "../assets/bernardo.png";

const navItems = [
  { label: "Stack", href: "#toolbox" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
];

const stackCategories = [
  "Linguagens & Fullstack",
  "Dados & IA",
  "Cloud & DevOps",
  "Ferramentas & Metodos",
];

const stackItemsByCategory = {
  "Linguagens & Fullstack": [
    { label: "HTML", logo: SiHtml5, color: "#e34f26" },
    { label: "CSS", logo: SiCss, color: "#663399" },
    { label: "JavaScript", logo: SiJavascript, color: "#f7df1e" },
    { label: "React", logo: SiReact, color: "#149eca" },
    { label: "FastAPI", logo: SiFastapi, color: "#009688" },
    { label: "TypeScript", logo: SiTypescript, color: "#3178c6" },
    { label: "Java", logo: SiOpenjdk, color: "#f89820" },
    { label: "Python", logo: SiPython, color: "#3776ab" },
    { label: "Tailwind", logo: SiTailwindcss, color: "#06b6d4" },
  ],
  "Dados & IA": [
    { label: "Python", logo: SiPython, color: "#3776ab" },
    { label: "SQL", logo: TbSql, color: "#2478ff" },
    { label: "NoSQL", logo: SiMongodb, color: "#47a248" },
    { label: "Pandas", logo: SiPandas, color: "#150458" },
    { label: "PyTorch", logo: SiPytorch, color: "#ee4c2c" },
    { label: "TensorFlow", logo: SiTensorflow, color: "#ff6f00" },
    { label: "Bancos Vetoriais", logo: TbDatabase, color: "#b265ff" },
    { label: "RAG", logo: TbBrain, color: "#18a957" },
    { label: "LangChain", logo: SiLangchain, color: "#1c3c3c" },
  ],
  "Cloud & DevOps": [
    { label: "Linux", logo: SiLinux, color: "#161616" },
    { label: "Docker", logo: SiDocker, color: "#2496ed" },
    { label: "Kubernetes", logo: SiKubernetes, color: "#326ce5" },
    { label: "AWS", logo: FaAws, color: "#ff9900" },
    { label: "CI/CD", logo: TbAutomation, color: "#b265ff" },
  ],
  "Ferramentas & Metodos": [
    { label: "Git", logo: SiGit, color: "#f05032" },
    { label: "GitLab", logo: SiGitlab, color: "#fc6d26" },
    { label: "VS Code", logo: VscVscode, color: "#007acc" },
    { label: "Scrum", logo: SiScrumalliance, color: "#009fda" },
    { label: "Testes automatizados", logo: TbAutomation, color: "#18a957" },
    { label: "n8n", logo: SiN8N, color: "#ea4b71" },
  ],
};

const experiences = [
  {
    period: "2026",
    title: "Desenvolvedor Front-end",
    description:
      "Desenvolvimento de interfaces web, ajustes responsivos, consumo de APIs e organizacao de componentes.",
  },
  {
    period: "2025",
    title: "Projetos academicos e pessoais",
    description:
      "Criacao de landing pages, dashboards e pequenas aplicacoes para treinar UI, estados e boas praticas.",
  },
  {
    period: "Agora",
    title: "Portfolio em evolucao",
    description:
      "Espaco para reunir projetos, aprendizados, tecnologias favoritas e formas de contato profissional.",
  },
];

const projects = [
  {
    type: "Web App",
    title: "Sistema de Gestao",
    description: "Dashboard responsivo com metricas, tabelas e fluxo de cadastro.",
    tags: ["React", "CSS", "API"],
  },
  {
    type: "Portfolio",
    title: "Landing Page Moderna",
    description: "Pagina institucional com hero visual, secoes objetivas e foco em conversao.",
    tags: ["HTML", "CSS", "UX"],
    featured: true,
  },
  {
    type: "Estudo",
    title: "Consumo de API",
    description: "Aplicacao simples para buscar, filtrar e exibir dados externos.",
    tags: ["JavaScript", "Fetch", "UI"],
  },
];

function Header() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegacao principal">
        <a className="brand" href="#inicio" aria-label="Ir para o inicio">
          <span className="brand-mark">Bernardo</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contato">
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-pad" id="inicio">
      <div className="hero-title">
        <h1>
          Eu sou <span>Bernardo Vieira</span>,
          <br />
          Frontend Developer
        </h1>
      </div>

      <div className="hero-location" aria-label="Localizacao">
        <span className="asterisk">*</span>
        <div>
          <strong>Florianopolis</strong>
          <small>SC, Brasil</small>
        </div>
      </div>

      <div className="hero-portrait">
        <span className="dot-pattern top" aria-hidden="true"></span>
        <span className="dot-pattern bottom" aria-hidden="true"></span>
        <span className="sparkle sparkle-blue" aria-hidden="true"></span>
        <span className="sparkle sparkle-peach" aria-hidden="true"></span>
        <span className="sparkle sparkle-pink" aria-hidden="true"></span>
        <img src={profileImage} alt="Retrato ilustrativo de Bernardo Vieira" />

        <div className="hero-actions">
          <a className="button outline" href="/curriculo-bernardo-vieira.pdf" download>
            Baixar curriculo
          </a>
          <a className="button primary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>
      </div>

      <div className="hero-spacer" aria-hidden="true"></div>
    </section>
  );
}

function Toolbox() {
  const [activeCategory, setActiveCategory] = React.useState(stackCategories[stackCategories.length - 1]);
  const activeItems = stackItemsByCategory[activeCategory];

  return (
    <section className="stack-section section-pad" id="toolbox">
      <div className="stack-heading">
        <h2>
          De uma olhada na minha <span>Stack</span>
        </h2>
        <p>Minhas ferramentas de trabalho.</p>
      </div>

      <div className="stack-tabs" aria-label="Categorias da stack">
        {stackCategories.map((category, index) => (
          <button
            className={category === activeCategory ? "active" : ""}
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
            aria-pressed={category === activeCategory}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="stack-grid">
        {activeItems.map((item) => (
          <article className="stack-card" key={item.label}>
            <span className="stack-icon" style={{ "--icon-color": item.color }}>
              <item.logo aria-hidden="true" />
            </span>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section className="section-pad" id="experiencias">
      <SectionHeading
        compact
        eyebrow="Experiencias"
        title="Uma trajetoria em construcao, com foco em pratica e aprendizado."
      />
      <div className="timeline-list">
        {experiences.map((item) => (
          <article className="timeline-item" key={`${item.period}-${item.title}`}>
            <span className="timeline-date">{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-pad" id="projetos">
      <SectionHeading eyebrow="Projetos" title="Selecao inicial para apresentar seu trabalho com clareza." />
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
            <div className="project-topline">
              <span>{project.type}</span>
              <a href="#" aria-label={`Abrir projeto ${project.title}`}>
                Demo
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-pad" id="sobre">
      <div className="about-panel">
        <div>
          <p className="eyebrow">About me</p>
          <h2>Gosto de transformar problemas em telas que parecem simples.</h2>
        </div>
        <div className="about-copy">
          <p>
            Sou Bernardo Vieira, desenvolvedor em evolucao constante. Tenho interesse por interfaces
            bem estruturadas, experiencias fluidas e produtos digitais que resolvem necessidades reais.
          </p>
          <p>
            Este portfolio e uma base inicial para voce substituir textos, conectar links reais,
            adicionar projetos e adaptar a identidade visual conforme sua historia profissional crescer.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-pad" id="contato">
      <div className="contact-box">
        <p className="eyebrow">Contato</p>
        <h2>Vamos construir algo juntos?</h2>
        <p>Me chame para conversar sobre projetos, oportunidades ou ideias em andamento.</p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:bernardo@email.com">
            bernardo@email.com
          </a>
          <a className="button ghost" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button ghost" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, compact = false }) {
  return (
    <div className={`section-heading ${compact ? "compact" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>Bernardo Vieira</span>
      <span>© {new Date().getFullYear()} Portfolio pessoal.</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Toolbox />
        <ExperienceTimeline />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
