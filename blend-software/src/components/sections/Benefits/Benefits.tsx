import { Clock, TrendingUp, Settings2, Link2, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './Benefits.module.scss';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  accent: 'teal' | 'gold';
}

const benefits: Benefit[] = [
  {
    icon: Clock,
    title: 'Menos tareas manuales',
    description: 'Eliminamos la carga operativa repetitiva para que tu equipo se enfoque en lo que realmente importa.',
    stat: '−18h',
    statLabel: 'por semana, por empresa',
    accent: 'teal',
  },
  {
    icon: TrendingUp,
    title: 'Procesos más eficientes',
    description: 'Optimizamos cada flujo de trabajo para reducir tiempos, errores y costos operativos.',
    stat: '3×',
    statLabel: 'más velocidad operativa',
    accent: 'gold',
  },
  {
    icon: Settings2,
    title: 'Herramientas a tu medida',
    description: 'Cada solución está diseñada para adaptarse a tu forma de trabajar, no al revés.',
    stat: '100%',
    statLabel: 'personalizado para vos',
    accent: 'gold',
  },
  {
    icon: Link2,
    title: 'Integración con lo que ya usás',
    description: 'Conectamos el nuevo software con las herramientas que ya tenés, sin perder datos ni contexto.',
    stat: '+40',
    statLabel: 'integraciones disponibles',
    accent: 'teal',
  },
];

const proofPoints = [
  'Sin soluciones genéricas',
  'Soporte continuo incluido',
  'Resultados medibles desde el día 1',
];

export default function Benefits() {
  return (
    <section className={`section ${styles.section}`}>
      {/* Background decoration */}
      <div className={styles.bgShapeLeft}  aria-hidden="true" />
      <div className={styles.bgShapeRight} aria-hidden="true" />

      <div className="container">
        <div className={styles.layout}>

          {/* ── Left — text + stats ── */}
          <div className={styles.textSide}>
            <span className="section-label">Beneficios</span>
            <h2 className={`section-title ${styles.title}`}>
              Tu empresa trabaja mejor, <span className={styles.titleAccent}>desde adentro</span>
            </h2>
            <p className="section-description">
              El impacto real no se mide en funcionalidades, se mide en cuánto
              tiempo ganás, cuántos errores evitás y qué tan rápido podés crecer.
            </p>

            {/* Big stats */}
            <div className={styles.bigStats}>
              <div className={styles.bigStat}>
                <span className={styles.bigStatNum}>−40<span className={styles.bigStatUnit}>%</span></span>
                <span className={styles.bigStatLabel}>errores operativos</span>
              </div>
              <div className={styles.bigStatDivider} />
              <div className={styles.bigStat}>
                <span className={styles.bigStatNum}>18<span className={styles.bigStatUnit}>h</span></span>
                <span className={styles.bigStatLabel}>ahorradas por semana</span>
              </div>
            </div>

            {/* Proof points */}
            <ul className={styles.proofList}>
              {proofPoints.map((p) => (
                <li key={p} className={styles.proofItem}>
                  <CheckCircle2 size={15} strokeWidth={2} className={styles.proofIcon} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right — benefit cards ── */}
          <div className={styles.grid}>
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className={`${styles.item} ${b.accent === 'gold' ? styles.itemGold : styles.itemTeal}`}
                >
                  {/* Watermark number */}
                  <span className={styles.watermark} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Top row */}
                  <div className={styles.itemTop}>
                    <div className={styles.itemIcon}>
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <div className={styles.itemStatBlock}>
                      <span className={styles.itemStat}>{b.stat}</span>
                      <span className={styles.itemStatLabel}>{b.statLabel}</span>
                    </div>
                  </div>

                  <h3 className={styles.itemTitle}>{b.title}</h3>
                  <p className={styles.itemDesc}>{b.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
