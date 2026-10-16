import Link from 'next/link';
import { services } from '@/content/services';
import styles from './Services.module.scss';

/** Editorial index of services: big rows that open in place (native <details>). */
export default function Services() {
  return (
    <section id="servicios" className={styles.section} aria-labelledby="services-title">
      <div className="container">
        <div className={styles.header}>
          <h2 id="services-title" className={styles.title}>
            Qué hacemos
          </h2>
          <p className={styles.intro}>
            Cuatro cosas, muchas veces combinadas en un mismo proyecto. Abrí la que te interese.
          </p>
        </div>

        <div className={styles.list}>
          {services.map((s, i) => (
            <details key={s.id} name="servicios" className={`${styles.row} ${styles[s.tone]}`} open={i === 0}>
              <summary className={styles.summary}>
                <h3 className={styles.name}>{s.shortName}</h3>
                <p className={styles.line}>{s.summary}</p>
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <div className={styles.body}>
                <p className={styles.description}>{s.description}</p>
                <div>
                  <h4 className={styles.subTitle}>Incluye</h4>
                  <ul className={styles.features}>
                    {s.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.ideal}>
                  <h4 className={styles.subTitle}>Tiene sentido si…</h4>
                  <p>{s.idealFor}</p>
                  <Link href={`/servicios#${s.id}`} className="text-link">
                    Ver más de {s.shortName.toLowerCase()}
                  </Link>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
