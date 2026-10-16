import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/ui/PageHero/PageHero';
import ComparisonTable from '@/components/ui/ComparisonTable/ComparisonTable';
import { commitments } from '@/content/positioning';
import { pageMetadata } from '@/lib/metadata';
import styles from './page.module.scss';

export const metadata: Metadata = pageMetadata({
  title: 'Por qué Blend: software que resuelve el problema real',
  description:
    'Procesos manuales, herramientas desconectadas o software genérico que no encaja: cómo los resolvemos con desarrollo a medida, sin ser freelancer ni gran agencia.',
  path: '/solucion',
});

const problems = [
  {
    problem: 'Procesos manuales y repetitivos',
    detail:
      'Tu equipo pasa horas copiando datos entre sistemas, enviando recordatorios a mano o armando reportes que podrían generarse solos.',
    answer: 'Automatizamos esas tareas para que corran solas y avisen cuando algo necesita atención.',
    href: '/servicios#automatizacion',
    tone: 'teal',
  },
  {
    problem: 'Herramientas desconectadas',
    detail:
      'Usás varias herramientas que no se comunican. La información está dispersa y nadie sabe cuál es la versión correcta.',
    answer: 'Integramos tus sistemas para que compartan los mismos datos, sin carga doble.',
    href: '/servicios#integraciones',
    tone: 'gold',
  },
  {
    problem: 'Software genérico que no encaja',
    detail:
      'Las soluciones del mercado cubren una parte de lo que necesitás, y el resto te obliga a adaptarte a ellas en lugar de al revés.',
    answer: 'Desarrollamos el sistema alrededor de tu forma de trabajar, con lo que usás y nada más.',
    href: '/servicios#software',
    tone: 'ochre',
  },
] as const;

export default function SolucionPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          crumb="Por qué Blend"
          path="/solucion"
          title="Software que resuelve el problema real"
          lead="No vendemos tecnología por la tecnología misma. Identificamos qué frena tu operación y construimos exactamente lo que hace falta para destrabarla."
        />

        <section className={styles.problems} aria-labelledby="problems-title">
          <div className="container">
            <h2 id="problems-title" className={styles.sectionTitle}>
              Tres problemas que vemos una y otra vez
            </h2>
            <ol className={styles.problemList}>
              {problems.map((p) => (
                <li key={p.problem} className={`${styles.problem} ${styles[p.tone]}`}>
                  <div>
                    <h3 className={styles.problemTitle}>{p.problem}</h3>
                    <p className={styles.problemDetail}>{p.detail}</p>
                  </div>
                  <div className={styles.answer}>
                    <p className={styles.answerLabel}>Cómo lo resolvemos</p>
                    <p>{p.answer}</p>
                    <Link href={p.href} className="text-link">
                      Ver el servicio
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.compare} aria-labelledby="compare-title">
          <div className="container">
            <div className={styles.compareLayout}>
              <div>
                <h2 id="compare-title" className={styles.sectionTitle}>
                  Ni freelancer, ni gran agencia
                </h2>
                <p className={styles.compareText}>
                  Somos el punto intermedio que muchas empresas necesitan: el proceso y la estructura de un
                  equipo profesional, con el trato directo y la velocidad de un estudio chico.
                </p>
              </div>
              <ComparisonTable caption="Comparación entre un freelancer, una gran agencia y Blend Software" />
            </div>
          </div>

          <div className="container">
            <ul className={styles.commitments}>
              {commitments.map((c) => (
                <li key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
            <p className={styles.processLink}>
              ¿Querés ver cómo se organiza un proyecto?{' '}
              <Link href="/proceso" className="text-link">
                Conocé nuestro proceso
              </Link>
            </p>
          </div>
        </section>

        <CTA
          title="¿Reconocés alguno de estos problemas?"
          text="Contanos qué frena tu operación. En una primera charla sin costo te damos un panorama claro de qué se puede hacer y cómo."
          action="Conversemos"
        />
      </main>
      <Footer />
    </>
  );
}
