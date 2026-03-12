import { Globe, Server, Cloud, Zap, GitMerge, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './Technology.module.scss';

interface TechCard {
  icon: LucideIcon;
  label: string;
  description: string;
  accent: 'teal' | 'gold';
}

const techs: TechCard[] = [
  { icon: Globe,    label: 'Web Apps',       description: 'Aplicaciones modernas en el navegador',       accent: 'teal' },
  { icon: Server,   label: 'APIs',           description: 'Interfaces robustas y bien documentadas',     accent: 'gold' },
  { icon: GitMerge, label: 'Integraciones',  description: 'Conexión entre sistemas y plataformas',       accent: 'teal' },
  { icon: Cloud,    label: 'Cloud',          description: 'Infraestructura escalable en la nube',         accent: 'gold' },
  { icon: Zap,      label: 'Automatización', description: 'Procesos que corren solos, sin fricción',     accent: 'teal' },
  { icon: Database, label: 'Datos',          description: 'Almacenamiento, consultas y procesamiento',   accent: 'gold' },
];

const stackBadges = ['Next.js', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'Docker', 'REST APIs', 'Python', 'OpenAI'];

export default function Technology() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Tecnología</span>
          <h2 className={`section-title ${styles.title}`}>
            Tecnología que escala con tu empresa
          </h2>
          <p className="section-description" style={{ textAlign: 'center' }}>
            Elegimos las herramientas correctas para cada problema, siempre priorizando
            robustez, mantenibilidad y evolución.
          </p>
        </div>

        <div className={styles.grid}>
          {techs.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.label}
                className={`${styles.card} ${tech.accent === 'gold' ? styles.cardGold : styles.cardTeal}`}
              >
                <div className={styles.iconWrap}>
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <span className={styles.label}>{tech.label}</span>
                <p className={styles.desc}>{tech.description}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.stackRow}>
          <span className={styles.stackLabel}>Stack tecnológico</span>
          <div className={styles.badges}>
            {stackBadges.map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
