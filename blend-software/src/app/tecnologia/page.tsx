import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Tecnologia — Blend Software',
  description: 'Conoce las tecnologias con las que construimos software robusto, escalable y moderno para empresas.',
};

const categories = [
  {
    id: 'frontend',
    title: 'Frontend',
    color: 'teal' as const,
    description: 'Interfaces modernas, rapidas y accesibles. Priorizamos la velocidad de carga y la experiencia de usuario.',
    techs: [
      { name: 'React', tag: 'Biblioteca UI', desc: 'Componentes reutilizables para interfaces dinamicas y mantenibles.' },
      { name: 'Next.js', tag: 'Framework', desc: 'Renderizado hibrido (SSR/SSG), routing y optimizaciones de performance.' },
      { name: 'TypeScript', tag: 'Lenguaje', desc: 'Codigo mas seguro, documentado y facil de escalar en equipo.' },
      { name: 'Tailwind / SCSS', tag: 'Estilos', desc: 'Diseno pixel-perfect con sistema de tokens y variables consistentes.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    color: 'gold' as const,
    description: 'APIs robustas, logica de negocio compleja y arquitecturas que escalan con tu operacion.',
    techs: [
      { name: 'Node.js', tag: 'Runtime', desc: 'Servidor asincronico de alta performance para APIs y servicios en tiempo real.' },
      { name: 'Go', tag: 'Lenguaje', desc: 'Alto rendimiento y concurrencia nativa para microservicios y backends exigentes.' },
      { name: 'Python', tag: 'Lenguaje', desc: 'Ideal para automatizaciones, scripts y soluciones de IA y data.' },
      { name: 'FastAPI', tag: 'Framework', desc: 'APIs modernas con documentacion automatica y validacion de tipos.' },
      { name: 'PostgreSQL', tag: 'Base de datos', desc: 'Base de datos relacional confiable para datos estructurados y complejos.' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud y DevOps',
    color: 'teal' as const,
    description: 'Infraestructura automatizada, deployments confiables y sistemas que no se caen cuando mas los necesitas.',
    techs: [
      { name: 'AWS', tag: 'Cloud', desc: 'Servicios gestionados para hosting, almacenamiento, colas y funciones serverless.' },
      { name: 'Docker', tag: 'Contenedores', desc: 'Ambientes consistentes en desarrollo y produccion, sin sorpresas.' },
      { name: 'GitHub Actions', tag: 'CI/CD', desc: 'Pipelines automatizados de testing y deployment continuo.' },
      { name: 'Vercel / Railway', tag: 'Hosting', desc: 'Deployments instantaneos para frontends y backends con zero-config.' },
    ],
  },
  {
    id: 'ai',
    title: 'IA y Datos',
    color: 'gold' as const,
    description: 'Modelos de lenguaje, vision artificial y automatizacion avanzada para resolver problemas que antes requerians un equipo entero.',
    techs: [
      { name: 'OpenAI API', tag: 'LLM', desc: 'GPT-4 y embeddings para chatbots, analisis semántico y generacion de contenido.' },
      { name: 'LangChain', tag: 'Framework IA', desc: 'Orquestacion de agentes, RAG y pipelines de IA complejos.' },
      { name: 'Redis', tag: 'Cache/Queues', desc: 'Colas de mensajes y cache para sistemas de alta concurrencia.' },
      { name: 'MongoDB', tag: 'Base de datos', desc: 'Almacenamiento flexible para documentos, logs y datos semiestructurados.' },
    ],
  },
];

const principles = [
  {
    title: 'Elegimos la herramienta correcta',
    text: 'No hay tecnologia perfecta para todo. Evaluamos las opciones y elegimos la que mejor se adapta a tu proyecto y equipo.',
  },
  {
    title: 'Codigo mantenible primero',
    text: 'Escribimos codigo que cualquier desarrollador competente puede leer, entender y modificar. Sin magia negra.',
  },
  {
    title: 'Sin lock-in propietario',
    text: 'Evitamos dependencias excesivas en plataformas cerradas. Tu codigo es tuyo y debe poder sobrevivir sin nosotros.',
  },
];

export default function TecnologiaPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Inicio</Link>
              <span>/</span>
              <span>Tecnologia</span>
            </nav>
            <div className={styles.heroContent}>
              <span className={styles.label}>Nuestro stack</span>
              <h1 className={styles.title}>
                Las mejores herramientas<br />
                <span className={styles.titleAccent}>para cada trabajo</span>
              </h1>
              <p className={styles.subtitle}>
                Usamos tecnologias probadas en produccion, con comunidades activas
                y documentacion de primera. Sin experimentos en proyectos reales.
              </p>
            </div>
          </div>
        </section>

        {/* Tech categories */}
        <section className={styles.categories}>
          <div className="container">
            {categories.map((cat) => (
              <div key={cat.id} className={`${styles.categoryBlock} ${styles[cat.color]}`}>
                <div className={styles.catHeader}>
                  <span className={styles.catLabel}>{cat.title}</span>
                  <p className={styles.catDesc}>{cat.description}</p>
                </div>
                <div className={styles.techGrid}>
                  {cat.techs.map((tech) => (
                    <div key={tech.name} className={styles.techCard}>
                      <div className={styles.techTop}>
                        <span className={styles.techName}>{tech.name}</span>
                        <span className={styles.techTag}>{tech.tag}</span>
                      </div>
                      <p className={styles.techDesc}>{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className={styles.principles}>
          <div className="container">
            <h2 className={styles.principlesTitle}>Nuestra filosofia tecnica</h2>
            <div className={styles.principlesGrid}>
              {principles.map((p) => (
                <div key={p.title} className={styles.principleCard}>
                  <h3 className={styles.principleHeading}>{p.title}</h3>
                  <p className={styles.principleText}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Hablemos de tu proyecto</h2>
              <p className={styles.ctaText}>
                No te preocupes por la tecnologia, eso es nuestro trabajo.
                Contanos el problema y encontramos la solucion correcta.
              </p>
              <Button variant="primary" size="lg" icon={ArrowRight} as="a" href="/#contact">
                Iniciar conversacion
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
