import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/ui/PageHero/PageHero';
import JsonLd, { organizationId } from '@/components/seo/JsonLd';
import { services } from '@/content/services';
import { absoluteUrl } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';
import styles from './page.module.scss';

export const metadata: Metadata = pageMetadata({
  title: 'Servicios: software a medida, automatización e integraciones',
  description:
    'Software a medida, automatización de procesos, integración de sistemas e IA para empresas de Mendoza y Argentina. Qué incluye cada servicio y para quién es.',
  path: '/servicios',
});

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      '@id': absoluteUrl(`/servicios#${s.id}`),
      name: s.name,
      description: s.description,
      serviceType: s.shortName,
      provider: { '@id': organizationId },
      areaServed: { '@type': 'Country', name: 'Argentina' },
    },
  })),
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <JsonLd data={servicesSchema} />
        <PageHero
          crumb="Servicios"
          path="/servicios"
          title="Servicios de desarrollo de software a medida"
          lead="No vendemos plantillas. Construimos sistemas, automatizaciones e integraciones alrededor de cómo trabaja tu empresa, y muchas veces combinamos los cuatro servicios en un mismo proyecto."
        />

        <section className={styles.body}>
          <div className={`container ${styles.layout}`}>
            <nav className={styles.toc} aria-label="Servicios en esta página">
              <p className={styles.tocTitle}>En esta página</p>
              <ul>
                {services.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className={`${styles.tocLink} ${styles[s.tone]}`}>
                      {s.shortName}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.list}>
              {services.map((s) => (
                <article key={s.id} id={s.id} className={`${styles.service} ${styles[s.tone]}`} aria-labelledby={`${s.id}-title`}>
                  <h2 id={`${s.id}-title`} className={styles.serviceTitle}>
                    {s.name}
                  </h2>
                  <p className={styles.summary}>{s.summary}</p>
                  <p className={styles.description}>{s.description}</p>

                  <div className={styles.cols}>
                    <div>
                      <h3 className={styles.subTitle}>Qué incluye</h3>
                      <ul className={styles.features}>
                        {s.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.ideal}>
                      <h3 className={styles.subTitle}>Ideal para</h3>
                      <p>{s.idealFor}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="¿No sabés cuál necesitás?"
          text="Es normal: la mayoría de los proyectos combina más de un servicio. Contanos el problema y te proponemos la solución que tenga más sentido."
          action="Hablar con el equipo"
        />
      </main>
      <Footer />
    </>
  );
}
