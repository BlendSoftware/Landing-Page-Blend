import Link from 'next/link';
import { commitments } from '@/content/positioning';
import styles from './Difference.module.scss';

export default function Difference() {
  return (
    <section className={styles.section} aria-labelledby="difference-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <h2 id="difference-title" className={styles.title}>
            Ni freelancer, ni agencia gigante.
          </h2>
          <p className={styles.text}>
            Un estudio chico con proceso de equipo grande. Hablás directo con quien hace tu sistema, y
            nadie te cambia de interlocutor a mitad de camino.
          </p>
          <Link href="/solucion" className="text-link">
            Por qué trabajar con Blend
          </Link>
        </div>

        <ul className={styles.promises}>
          {commitments.map((c) => (
            <li key={c.title}>
              <h3 className={styles.promiseTitle}>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
