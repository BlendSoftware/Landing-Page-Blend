import { Code2, Cpu, Puzzle, Layers } from 'lucide-react';
import styles from './WhatWeDo.module.scss';
import type { LucideIcon } from 'lucide-react';

interface Card {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: 'teal' | 'gold';
  highlight: string;
}

const cards: Card[] = [
  {
    icon: Code2,
    title: 'Desarrollo a medida',
    description:
      'Creamos software diseñado específicamente para las necesidades de tu empresa, sin soluciones genéricas ni compromisos.',
    accent: 'teal',
    highlight: '100% personalizado',
  },
  {
    icon: Cpu,
    title: 'Automatización de procesos',
    description:
      'Identificamos las tareas repetitivas de tu negocio y las automatizamos, liberando tiempo y reduciendo errores.',
    accent: 'gold',
    highlight: '−18h por semana',
  },
  {
    icon: Puzzle,
    title: 'Integraciones de sistemas',
    description:
      'Conectamos tus herramientas existentes para que trabajen juntas con fluidez, sin perder datos entre plataformas.',
    accent: 'teal',
    highlight: '+40 conectores',
  },
  {
    icon: Layers,
    title: 'Plataformas digitales modernas',
    description:
      'Desarrollamos plataformas web, apps empresariales y sistemas internos con tecnología actual y escalable.',
    accent: 'gold',
    highlight: 'Escala con vos',
  },
];

export default function WhatWeDo() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Qué hacemos</span>
          <h2 className={`section-title ${styles.title}`}>
            Software pensado para cada negocio
          </h2>
          <p className={`section-description ${styles.desc}`}>
            No creemos en soluciones únicas para todos. Cada empresa es diferente,{' '}
            y su software también debe serlo.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`${styles.card} ${card.accent === 'gold' ? styles.cardGold : styles.cardTeal}`}
              >
                <div className={styles.cardGlow} aria-hidden="true" />
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <span className={styles.highlight}>{card.highlight}</span>
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
