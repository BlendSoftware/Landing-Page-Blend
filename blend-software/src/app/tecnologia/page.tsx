import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/ui/PageHero/PageHero';
import { pageMetadata } from '@/lib/metadata';
import styles from './page.module.scss';

export const metadata: Metadata = pageMetadata({
  title: 'Tecnología: el stack con el que desarrollamos',
  description:
    'React, Next.js, TypeScript, Node.js, Python, Go, PostgreSQL, Docker e IA: las tecnologías con las que construimos software robusto y mantenible.',
  path: '/tecnologia',
});

const categories = [
  {
    id: 'frontend',
    title: 'Frontend',
    tone: 'teal',
    description: 'Interfaces rápidas, accesibles y fáciles de usar para tu equipo y tus clientes.',
    techs: [
      { name: 'React', tag: 'Biblioteca de interfaces', desc: 'Componentes reutilizables para interfaces dinámicas y mantenibles.' },
      { name: 'Next.js', tag: 'Framework', desc: 'Renderizado en servidor, rutas y optimizaciones de rendimiento.' },
      { name: 'TypeScript', tag: 'Lenguaje', desc: 'Código más seguro y fácil de mantener a medida que crece.' },
      { name: 'Tailwind / SCSS', tag: 'Estilos', desc: 'Sistemas de diseño consistentes con tokens y variables.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    tone: 'gold',
    description: 'APIs y lógica de negocio que acompañan el crecimiento de tu operación.',
    techs: [
      { name: 'Node.js', tag: 'Entorno de ejecución', desc: 'Servidores para APIs y servicios en tiempo real.' },
      { name: 'Go', tag: 'Lenguaje', desc: 'Alto rendimiento y concurrencia para servicios exigentes.' },
      { name: 'Python', tag: 'Lenguaje', desc: 'Automatizaciones, procesamiento de datos e inteligencia artificial.' },
      { name: 'FastAPI', tag: 'Framework', desc: 'APIs modernas con documentación y validación automáticas.' },
      { name: 'PostgreSQL', tag: 'Base de datos', desc: 'Base relacional confiable para datos estructurados.' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud y DevOps',
    tone: 'teal',
    description: 'Infraestructura automatizada y publicaciones confiables, sin sorpresas.',
    techs: [
      { name: 'AWS', tag: 'Cloud', desc: 'Hosting, almacenamiento, colas y funciones serverless.' },
      { name: 'Docker', tag: 'Contenedores', desc: 'El mismo entorno en desarrollo y en producción.' },
      { name: 'GitHub Actions', tag: 'Integración continua', desc: 'Pruebas y publicaciones automatizadas.' },
      { name: 'Vercel / Railway', tag: 'Hosting', desc: 'Publicación simple de frontends y backends.' },
    ],
  },
  {
    id: 'ia',
    title: 'IA y datos',
    tone: 'ochre',
    description: 'Modelos de lenguaje y datos para resolver tareas que antes requerían mucho trabajo manual.',
    techs: [
      { name: 'OpenAI y Gemini', tag: 'Modelos de lenguaje', desc: 'Asistentes, análisis de texto y extracción de datos.' },
      { name: 'LangChain', tag: 'Framework de IA', desc: 'Orquestación de agentes y búsqueda sobre tus documentos.' },
      { name: 'Redis', tag: 'Caché y colas', desc: 'Colas de tareas y caché para sistemas con mucha carga.' },
      { name: 'MongoDB', tag: 'Base de datos', desc: 'Almacenamiento flexible para documentos y registros.' },
    ],
  },
] as const;

const principles = [
  {
    title: 'La herramienta correcta para cada problema',
    text: 'No hay una tecnología perfecta para todo. Elegimos la que mejor se adapta a tu proyecto y a quien lo va a mantener.',
  },
  {
    title: 'Código mantenible primero',
    text: 'Escribimos código que cualquier desarrollador competente pueda leer, entender y modificar.',
  },
  {
    title: 'Sin dependencias cerradas',
    text: 'Evitamos atarte a plataformas propietarias. Tu código es tuyo y tiene que poder vivir sin nosotros.',
  },
];

export default function TecnologiaPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          crumb="Tecnología"
          path="/tecnologia"
          title="Tecnología probada para cada trabajo"
          lead="Usamos herramientas con comunidades activas, buena documentación y años en producción. No experimentamos con tu proyecto."
        />

        <section className={styles.body} aria-label="Stack tecnológico">
          <div className="container">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className={`${styles.category} ${styles[cat.tone]}`}>
                <div className={styles.catHead}>
                  <h2 className={styles.catTitle}>{cat.title}</h2>
                  <p className={styles.catDesc}>{cat.description}</p>
                </div>
                <dl className={styles.techList}>
                  {cat.techs.map((t) => (
                    <div key={t.name} className={styles.tech}>
                      <dt>
                        <span className={styles.techName}>{t.name}</span>
                        <span className={styles.techTag}>{t.tag}</span>
                      </dt>
                      <dd>{t.desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.principles} aria-labelledby="principles-title">
          <div className="container">
            <div className={styles.principlesInner}>
              <h2 id="principles-title" className={styles.principlesTitle}>
                Cómo elegimos
              </h2>
              <ul className={styles.principleList}>
                {principles.map((p) => (
                  <li key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CTA
          title="La tecnología es nuestro trabajo"
          text="No hace falta que sepas qué stack necesitás. Contanos el problema y elegimos la solución correcta."
          action="Iniciar la conversación"
        />
      </main>
      <Footer />
    </>
  );
}
