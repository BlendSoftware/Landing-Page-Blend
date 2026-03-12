import { Search, Lightbulb, Code2, Rocket, CheckCircle2, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './Process.module.scss';

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  deliverable: string;
  duration: string;
  accent: 'teal' | 'gold';
}

const steps: Step[] = [
  {
    icon: Search,
    number: '01',
    title: 'Analizamos tu negocio',
    description:
      'Entendemos cómo trabajás, qué problemas enfrentás y qué oportunidades tenés para mejorar con tecnología.',
    deliverable: 'Diagnóstico documentado',
    duration: '1–2 días',
    accent: 'teal',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Diseñamos la solución',
    description:
      'Definimos la arquitectura, los flujos y la experiencia de usuario antes de escribir una sola línea de código.',
    deliverable: 'Plan técnico + wireframes',
    duration: '3–5 días',
    accent: 'gold',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Desarrollamos el software',
    description:
      'Construimos el producto con tecnología moderna, iterando de forma ágil con tu equipo en cada etapa.',
    deliverable: 'Entregables por sprint',
    duration: '2–8 semanas',
    accent: 'teal',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Lanzamos y optimizamos',
    description:
      'Ponemos en producción, entrenamos a tu equipo y seguimos ajustando para que el sistema rinda al máximo.',
    deliverable: 'Sistema en producción',
    duration: 'Continuo',
    accent: 'gold',
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bgOrb} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Proceso de trabajo</span>
          <h2 className={`section-title ${styles.title}`}>
            Así construimos tu solución
          </h2>
          <p className="section-description" style={{ textAlign: 'center' }}>
            Un proceso claro, transparente y orientado a resultados concretos.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`${styles.card} ${step.accent === 'gold' ? styles.cardGold : styles.cardTeal}`}
              >
                {/* Connector arrow to next step */}
                {i < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true">
                    <div className={styles.connectorDot} />
                  </div>
                )}

                {/* Watermark number */}
                <span className={styles.watermark} aria-hidden="true">{step.number}</span>

                {/* Top row: icon + duration */}
                <div className={styles.cardTop}>
                  <div className={styles.iconCircle}>
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div className={styles.durationBadge}>
                    <Clock size={11} strokeWidth={2.5} />
                    {step.duration}
                  </div>
                </div>

                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>

                <div className={styles.deliverable}>
                  <CheckCircle2 size={13} strokeWidth={2.5} className={styles.deliverableIcon} />
                  {step.deliverable}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
