import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import PageHero from '@/components/ui/PageHero/PageHero';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';
import ContactForm from './ContactForm';
import styles from './page.module.scss';

export const metadata: Metadata = pageMetadata({
  title: 'Contacto: pedí una propuesta sin cargo',
  description:
    'Contanos qué querés resolver y te respondemos en menos de 48 horas hábiles con una evaluación honesta. Desarrollo de software a medida en Mendoza, Argentina.',
  path: '/contacto',
});

const nextSteps = [
  'Respondemos con una primera evaluación de tu proyecto.',
  'Coordinamos una llamada de 30 a 60 minutos.',
  'Te enviamos una propuesta detallada, sin costo.',
];

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          crumb="Contacto"
          path="/contacto"
          title="Contanos qué querés resolver"
          lead={`La primera conversación es gratis y sin compromiso. Te respondemos en ${site.responseTime} con una evaluación honesta de lo que podemos hacer juntos.`}
        />

        <section className={styles.body}>
          <div className={`container ${styles.layout}`}>
            <div className={styles.formPanel}>
              <ContactForm />
            </div>

            <aside className={styles.aside} aria-label="Información de contacto">
              <div className={styles.block}>
                <h2 className={styles.asideTitle}>Qué pasa después</h2>
                <ol className={styles.steps}>
                  {nextSteps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>

              <dl className={styles.info}>
                <div>
                  <dt>Correo</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="text-link">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Ubicación</dt>
                  <dd>Mendoza, Argentina</dd>
                </div>
                <div>
                  <dt>Tiempo de respuesta</dt>
                  <dd>Menos de 48 horas hábiles</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
