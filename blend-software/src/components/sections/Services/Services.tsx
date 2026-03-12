import { Monitor, Cpu, Network, Bot, ArrowRight, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './Services.module.scss';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  features: string[];
  accent: 'teal' | 'gold';
}

const services: Service[] = [
  {
    icon: Monitor,
    title: 'Desarrollo de software a medida',
    description:
      'Aplicaciones web, plataformas internas y sistemas de gestión diseñados específicamente para tu operación.',
    tags: ['Web apps', 'Sistemas internos', 'Plataformas'],
    features: [
      'Diseño centrado en tu flujo de trabajo',
      'Escalable desde el día 1',
      'Soporte y evolución continua',
    ],
    accent: 'teal',
  },
  {
    icon: Cpu,
    title: 'Automatización empresarial',
    description:
      'Workflows inteligentes que eliminan tareas manuales y hacen que tu empresa funcione en piloto automático.',
    tags: ['Workflows', 'Triggers', 'Scheduling'],
    features: [
      'Identificación de cuellos de botella',
      'Automatizaciones sin fricciones',
      'Monitoreo y alertas incluidos',
    ],
    accent: 'gold',
  },
  {
    icon: Network,
    title: 'Integraciones tecnológicas',
    description:
      'APIs, conectores y pipelines de datos que unen todos tus sistemas en un ecosistema cohesionado.',
    tags: ['APIs REST', 'Webhooks', 'ETL'],
    features: [
      'Mapeo de datos entre sistemas',
      'Transformación y limpieza',
      'Sincronización en tiempo real',
    ],
    accent: 'teal',
  },
  {
    icon: Bot,
    title: 'Soluciones con IA',
    description:
      'Incorporamos capacidades de inteligencia artificial donde realmente aportan valor a tus procesos.',
    tags: ['LLMs', 'Clasificación', 'Extracción'],
    features: [
      'Procesamiento de lenguaje natural',
      'Modelos entrenados con tus datos',
      'Interfaces conversacionales',
    ],
    accent: 'gold',
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bgShape} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Servicios</span>
          <h2 className={`section-title ${styles.title}`}>
            Lo que construimos para vos
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`${styles.card} ${svc.accent === 'gold' ? styles.cardGold : styles.cardTeal}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <ArrowRight size={16} className={styles.arrow} strokeWidth={2} />
                </div>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.description}</p>
                <ul className={styles.features}>
                  {svc.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <Check size={12} strokeWidth={2.5} className={styles.featureCheck} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {svc.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
