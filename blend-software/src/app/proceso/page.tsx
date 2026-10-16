import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/ui/PageHero/PageHero';
import { processSteps } from '@/content/process';
import { pageMetadata } from '@/lib/metadata';
import styles from './page.module.scss';

export const metadata: Metadata = pageMetadata({
  title: 'Cómo trabajamos: proceso de desarrollo de software',
  description:
    'Análisis, diseño, desarrollo y soporte: qué pasa en cada etapa de un proyecto de software a medida con Blend Software, cuánto dura y qué entregables recibís.',
  path: '/proceso',
});

const values = [
  'Comunicación directa en cada etapa',
  'Estimaciones reales desde el primer día',
  'El código es de tu empresa',
  'Equipo chico, respuesta rápida',
];

export default function ProcesoPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          crumb="Cómo trabajamos"
          path="/proceso"
          title="Un proceso claro, sin sorpresas"
          lead="Desde la primera reunión hasta el soporte después del lanzamiento, sabés en qué estamos, qué viene después y qué vas a recibir en cada etapa."
        >
          <ul className={styles.values}>
            {values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </PageHero>

        <section className={styles.body} aria-label="Etapas del proceso">
          <div className="container">
            <ol className={styles.timeline}>
              {processSteps.map((step, i) => (
                <li key={step.id} id={step.id} className={styles.step}>
                  <span className={styles.marker} aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className={styles.content}>
                    <div className={styles.head}>
                      <h2 className={styles.stepTitle}>{step.title}</h2>
                      <p className={styles.duration}>
                        <span className="visually-hidden">Duración: </span>
                        {step.duration}
                      </p>
                    </div>
                    <p className={styles.description}>{step.description}</p>

                    <div className={styles.cols}>
                      <div>
                        <h3 className={styles.subTitle}>Qué hacemos</h3>
                        <ul className={styles.activities}>
                          {step.activities.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.deliverables}>
                        <h3 className={styles.subTitle}>Qué recibís</h3>
                        <ul>
                          {step.deliverables.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CTA
          title="El primer paso es una conversación"
          text="Una reunión de análisis sin costo donde entendemos tu negocio y te damos una estimación real de tiempos y alcance."
          action="Agendar la reunión inicial"
        />
      </main>
      <Footer />
    </>
  );
}
