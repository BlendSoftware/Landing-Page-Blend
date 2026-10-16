import Link from 'next/link';
import GradientBackdrop from '@/components/ui/GradientBackdrop/GradientBackdrop';
import styles from './Process.module.scss';

// The four stages from /proceso, told as one sentence.
const steps = [
  'Primero te escuchamos',
  'después diseñamos la solución y te decimos cuánto sale',
  'la construimos por partes, mostrándote avances',
  'y nos quedamos para que siga andando',
];

export default function Process() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <GradientBackdrop />
      <div className="container">
        <h2 id="process-title" className={styles.kicker}>
          Cómo es trabajar con nosotros
        </h2>

        <ol className={styles.sentence}>
          {steps.map((s, i) => (
            <li key={s}>
              {s}
              {i < steps.length - 1 ? ', ' : '.'}
            </li>
          ))}
        </ol>

        <div className={styles.foot}>
          <p>Sin sorpresas: antes de empezar sabés qué recibís, cuándo y cuánto cuesta.</p>
          <Link href="/proceso" className={styles.more}>
            Ver el proceso en detalle
          </Link>
        </div>
      </div>
    </section>
  );
}
