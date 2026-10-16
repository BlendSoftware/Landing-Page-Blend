import Link from 'next/link';
import styles from './Problem.module.scss';

const symptoms = [
  {
    title: 'Tareas manuales que se repiten',
    text: 'Copiar datos entre sistemas, mandar recordatorios uno por uno o armar el mismo reporte todas las semanas.',
  },
  {
    title: 'Herramientas que no se hablan',
    text: 'La planilla dice una cosa, el sistema contable otra y la tienda online una tercera. Nadie sabe cuál es la correcta.',
  },
  {
    title: 'Software genérico que no encaja',
    text: 'El sistema que compraste resuelve una parte, y para el resto tu equipo inventa parches y atajos.',
  },
] as const;

export default function Problem() {
  return (
    <section className={styles.section} aria-labelledby="problem-title">
      <div className="container">
        <h2 id="problem-title" className={styles.statement}>
          Cuando la información vive en cinco lugares distintos, alguien termina copiándola a mano.
        </h2>

        <ul className={styles.symptoms}>
          {symptoms.map((s) => (
            <li key={s.title} className={styles.symptom}>
              <h3 className={styles.symptomTitle}>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>

        <p className={styles.closing}>
          Nuestro trabajo es juntar esas piezas en un sistema que se adapte a tu empresa.{' '}
          <Link href="/solucion" className="text-link">
            Cómo lo resolvemos
          </Link>
        </p>
      </div>
    </section>
  );
}
