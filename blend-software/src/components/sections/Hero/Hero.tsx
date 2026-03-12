'use client';

import React from 'react';
import {
  ArrowRight,
  TrendingUp,
  Zap,
  RefreshCcw,
  Link2,
  BarChart2,
  Package,
  ShoppingCart,
  Settings,
  Circle as CircleIcon,
  Star,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './Hero.module.scss';

const salesBars = [30, 45, 38, 56, 44, 63, 55, 78];
const integIcons = [Link2, BarChart2, Package, CircleIcon, ShoppingCart, Settings];

const projects = [
  { name: 'Sistema ERP',     status: 'En curso', variant: 'teal'  },
  { name: 'App móvil',       status: 'Revisión', variant: 'amber' },
  { name: 'Portal clientes', status: 'Listo ✓',  variant: 'green' },
] as const;

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gridMesh} aria-hidden="true" />
      <div className={styles.bgOrb1}   aria-hidden="true" />
      <div className={styles.bgOrb2}   aria-hidden="true" />
      <div className={styles.bgOrb3}   aria-hidden="true" />

      <div className={`container ${styles.wrapper}`}>

        {/* ── LEFT CARDS ─────────────────────────────── */}
        <div className={styles.sideLeft} aria-hidden="true">

          {/* Sales card */}
          <div className={`${styles.card} ${styles.cardSales}`}>
            <div className={styles.connRight} aria-hidden="true" />
            <div className={styles.salesHeader}>
              <span className={styles.secLabel}>VENTAS ESTE MES</span>
              <TrendingUp size={13} color="#7AA3A6" strokeWidth={2} />
            </div>
            <p className={styles.bigNum}>+38%</p>
            <div className={styles.miniBars}>
              {salesBars.map((h, i) => (
                <div
                  key={i}
                  className={`${styles.miniBar} ${i === salesBars.length - 1 ? styles.miniBarLast : ''}`}
                  style={{ '--bh': `${h}%` } as React.CSSProperties}
                />
              ))}
            </div>
          </div>

          {/* Integrations card */}
          <div className={`${styles.card} ${styles.cardInteg}`}>
            <div className={styles.connRight} aria-hidden="true" />
            <p className={styles.secLabel}>INTEGRACIONES</p>
            <div className={styles.integGrid}>
              {integIcons.map((Icon, i) => (
                <div key={i} className={styles.integBox}>
                  <Icon size={14} strokeWidth={1.75} />
                </div>
              ))}
            </div>
            <div className={styles.integFooter}>
              <span className={styles.greenDot} />
              <span className={styles.integActive}>12 activas</span>
            </div>
          </div>

          {/* Time saved card */}
          <div className={`${styles.card} ${styles.cardTime}`}>
            <div className={styles.connRight} aria-hidden="true" />
            <div className={styles.timeRow}>
              <div className={styles.timeIconWrap}>
                <RefreshCcw size={13} color="#7AA3A6" strokeWidth={2} />
              </div>
              <span className={styles.timeTitle}>Tiempo ahorrado</span>
            </div>
            <p className={styles.bigNum}>18h</p>
            <p className={styles.timeSub}>por semana, por empresa</p>
          </div>

        </div>

        {/* ── CENTER ─────────────────────────────────── */}
        <div className={styles.center}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Software para empresas modernas</span>
          </div>

          <h1 className={styles.headline}>
            Software moderno
            <br />
            para empresas que
            <br />
            <span className={styles.highlight}>quieren crecer</span>
          </h1>

          <p className={styles.subtext}>
            En Blend Software desarrollamos herramientas digitales que automatizan
            procesos, conectan sistemas y permiten a tu equipo trabajar sin fricciones.
          </p>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" icon={ArrowRight}>
              Comenzar proyecto
            </Button>
            <Button variant="secondary" size="lg">
              Ver cómo funciona
            </Button>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statCheck}>✓</span>
              <span>Software a medida</span>
            </div>
            <span className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statCheck}>✓</span>
              <span>Procesos automatizados</span>
            </div>
            <span className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statCheck}>✓</span>
              <span>Tecnología escalable</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT CARDS ────────────────────────────── */}
        <div className={styles.sideRight} aria-hidden="true">

          {/* Automation card */}
          <div className={`${styles.card} ${styles.cardAuto}`}>
            <div className={styles.connLeft} aria-hidden="true" />
            <div className={styles.autoHeader}>
              <div className={styles.autoIconWrap}>
                <Zap size={13} color="#5A8285" strokeWidth={2} />
              </div>
              <span className={styles.autoLabel}>Automatización</span>
            </div>
            <p className={styles.bigNum}>124 tareas</p>
            <p className={styles.autoSub}>automatizadas hoy</p>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ '--pct': '78%' } as React.CSSProperties}
              />
            </div>
            <div className={styles.progressMeta}>
              <span className={styles.progressPct}>78%</span>
              <span className={styles.progressLbl}>completadas</span>
            </div>
          </div>

          {/* Projects card */}
          <div className={`${styles.card} ${styles.cardProjects}`}>
            <div className={styles.connLeft} aria-hidden="true" />
            <p className={styles.secLabel}>PROYECTOS ACTIVOS</p>
            <div className={styles.projectList}>
              {projects.map((p) => (
                <div key={p.name} className={styles.projectRow}>
                  <span className={styles.projectName}>{p.name}</span>
                  <span className={`${styles.statusBadge} ${styles[`status_${p.variant}`]}`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Review card */}
          <div className={`${styles.card} ${styles.cardReview}`}>
            <div className={styles.connLeft} aria-hidden="true" />
            <div className={styles.reviewHeader}>
              <div className={styles.reviewAvatar}>😊</div>
              <div>
                <p className={styles.reviewName}>Cliente satisfecho</p>
                <p className={styles.reviewTime}>Hace 3 minutos</p>
              </div>
            </div>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
              ))}
            </div>
            <p className={styles.reviewText}>"Transformó por completo nuestra operación"</p>
          </div>

        </div>
      </div>
    </section>
  );
}
