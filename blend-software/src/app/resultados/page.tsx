import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, TrendingUp, Users, ArrowRight, BarChart2, ShieldCheck, Settings2 } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Resultados — Blend Software',
  description: 'Impacto real en empresas que eligieron Blend Software para automatizar procesos y desarrollar software a medida.',
};

const stats = [
  { value: '18h', label: 'por semana ahorradas en promedio por equipo',             icon: Clock },
  { value: '60%', label: 'reducción de errores operativos en los primeros 3 meses', icon: ShieldCheck },
  { value: '3×',  label: 'más rápido el onboarding de nuevos empleados',            icon: Users },
  { value: '40%', label: 'de reducción en costos operativos en automatizaciones',   icon: TrendingUp },
];

const cases = [
  {
    industry: 'Logística',
    color: 'teal' as const,
    problem:
      'El equipo tardaba 4 horas diarias consolidando pedidos de 3 sistemas distintos en una planilla de Excel, con errores frecuentes en los despachos.',
    solution:
      'Panel centralizado que consolida pedidos en tiempo real, genera remitos automáticos y notifica al equipo de seguimiento sin intervención manual.',
    results: [
      'Proceso reducido de 4 horas a menos de 10 minutos',
      'Reducción del 80% en errores de despacho',
      'Visibilidad en tiempo real del estado de cada pedido',
    ],
  },
  {
    industry: 'Servicios profesionales',
    color: 'gold' as const,
    problem:
      'Contratos, facturas y seguimiento de horas se manejaban en 4 herramientas distintas. Los datos estaban desactualizados y la facturación llegaba tarde.',
    solution:
      'Plataforma interna que unifica clientes, proyectos, horas trabajadas y facturación, integrada con el sistema contable existente.',
    results: [
      'Facturación generada automáticamente al cierre de cada mes',
      'Visibilidad completa de rentabilidad por proyecto',
      '12 horas semanales recuperadas por el área administrativa',
    ],
  },
  {
    industry: 'Retail / E-commerce',
    color: 'teal' as const,
    problem:
      'El stock entre el local físico y el e-commerce se desincronizaba constantemente, generando ventas de productos sin inventario real disponible.',
    solution:
      'Sincronización bidireccional en tiempo real del inventario entre el punto de venta y la tienda online, con alertas automáticas de stock bajo.',
    results: [
      'Cero ventas de productos sin stock desde la implementación',
      'Alertas automáticas cuando el stock cae del umbral configurado',
      '2 horas diarias de actualización manual eliminadas',
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Tiempo recuperado',
    desc: 'Las horas que tu equipo dedicaba a tareas manuales se redirigen a trabajo que realmente genera valor para el negocio.',
  },
  {
    icon: ShieldCheck,
    title: 'Menos errores',
    desc: 'Los procesos automatizados eliminan el error humano y aumentan la confiabilidad de la información en toda la empresa.',
  },
  {
    icon: BarChart2,
    title: 'Visibilidad total',
    desc: 'Tomás decisiones con datos reales y actualizados, no con estimaciones o planillas que siempre están un paso atrás.',
  },
  {
    icon: Settings2,
    title: 'Operación escalable',
    desc: 'Tu sistema crece con vos. Podés incorporar más clientes, pedidos o empleados sin que la operación se rompa.',
  },
];

export default function ResultadosPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Inicio</Link>
              <span>/</span>
              <span>Resultados</span>
            </nav>
            <div className={styles.heroContent}>
              <span className={styles.label}>Resultados</span>
              <h1 className={styles.title}>
                Impacto real,{' '}
                <span className={styles.titleAccent}>no promesas</span>
              </h1>
              <p className={styles.subtitle}>
                Cada proyecto que entregamos tiene un objetivo de negocio concreto.
                Acá mostramos qué pasa después de implementar una solución de Blend.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.stats}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <s.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className={styles.statValue}>{s.value}</span>
                  <p className={styles.statLabel}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className={styles.cases}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Casos de impacto</span>
              <h2 className={styles.sectionTitle}>Qué cambia cuando trabajamos juntos</h2>
              <p className={styles.sectionDesc}>
                Proyectos reales con resultados documentados. Las industrias y datos
                son representativos de casos que hemos resuelto.
              </p>
            </div>
            <div className={styles.casesList}>
              {cases.map((c, i) => (
                <div key={c.industry} className={`${styles.caseCard} ${styles[c.color]}`}>
                  <div className={styles.caseHeader}>
                    <span className={styles.caseIndustry}>{c.industry}</span>
                    <span className={styles.caseNum}>0{i + 1}</span>
                  </div>
                  <div className={styles.caseBody}>
                    <div className={styles.caseCol}>
                      <h4 className={styles.caseColTitle}>El problema</h4>
                      <p className={styles.caseText}>{c.problem}</p>
                    </div>
                    <div className={styles.caseDivider} />
                    <div className={styles.caseCol}>
                      <h4 className={styles.caseColTitle}>La solución</h4>
                      <p className={styles.caseText}>{c.solution}</p>
                    </div>
                    <div className={styles.caseDivider} />
                    <div className={styles.caseCol}>
                      <h4 className={styles.caseColTitle}>Los resultados</h4>
                      <ul className={styles.caseResults}>
                        {c.results.map((r) => (
                          <li key={r} className={styles.caseResult}>
                            <span className={styles.resultDot} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className={styles.benefits}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Beneficios tangibles</span>
              <h2 className={styles.sectionTitle}>Lo que tu empresa gana</h2>
            </div>
            <div className={styles.benefitsGrid}>
              {benefits.map((b) => (
                <div key={b.title} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <b.icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>¿Querés resultados así en tu empresa?</h2>
              <p className={styles.ctaText}>
                Contanos tu situación actual. Analizamos tu caso sin cargo y te
                mostramos qué se podría lograr.
              </p>
              <Button variant="primary" size="lg" as="a" href="/contacto">
                Quiero estos resultados <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
