import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Search, Layers, Code2, HeartHandshake, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Proceso de trabajo — Blend Software',
  description: 'Conoce como trabajamos: desde el analisis inicial hasta el soporte continuo. Un proceso claro, colaborativo y sin sorpresas.',
};

const steps = [
  {
    id: '01',
    icon: Search,
    title: 'Analisis y descubrimiento',
    duration: '1 a 2 dias',
    description:
      'Antes de escribir una sola linea de codigo, nos sentamos contigo para entender a fondo tu negocio, tus procesos y el problema que queres resolver.',
    activities: [
      'Reunion inicial de 60-90 minutos',
      'Levantamiento detallado de requerimientos',
      'Analisis de los procesos actuales',
      'Identificacion de puntos de dolor y oportunidades',
      'Entendimiento del equipo y la cultura de la empresa',
    ],
    deliverables: [
      'Brief de proyecto documentado',
      'Mapa de procesos actual vs deseado',
    ],
    color: 'teal' as const,
  },
  {
    id: '02',
    icon: Layers,
    title: 'Diseno y planificacion',
    duration: '3 a 5 dias',
    description:
      'Con el relevamiento en mano, disenamos la arquitectura del sistema y planificamos cada etapa del desarrollo. Sin letra chica, sin sorpresas.',
    activities: [
      'Definicion de la arquitectura tecnica',
      'Wireframes o mockups de las pantallas principales',
      'Plan de desarrollo con etapas y tiempos',
      'Estimacion detallada de costos',
      'Definicion de integraciones necesarias',
    ],
    deliverables: [
      'Propuesta tecnica completa',
      'Wireframes interactivos',
      'Cronograma del proyecto',
    ],
    color: 'gold' as const,
  },
  {
    id: '03',
    icon: Code2,
    title: 'Desarrollo e implementacion',
    duration: '2 a 8 semanas',
    description:
      'Construimos tu solucion en iteraciones cortas, con demos semanales para que siempre sepas el estado del proyecto y puedas dar feedback en tiempo real.',
    activities: [
      'Desarrollo iterativo por sprints de 1-2 semanas',
      'Demos semanales con el equipo',
      'Pruebas unitarias y de integracion',
      'Code reviews y control de calidad',
      'Deployment en staging para validacion',
    ],
    deliverables: [
      'Demos funcionales en cada sprint',
      'Codigo documentado en repositorio privado',
      'Sistema en produccion',
    ],
    color: 'teal' as const,
  },
  {
    id: '04',
    icon: HeartHandshake,
    title: 'Soporte y evolucion',
    duration: 'Continuo',
    description:
      'El lanzamiento es solo el comienzo. Estamos con vos para resolver cualquier inconveniente, incorporar mejoras y asegurar que el sistema crezca con tu empresa.',
    activities: [
      'Monitoreo proactivo del sistema',
      'Resolucion de bugs con prioridad',
      'Actualizaciones de seguridad',
      'Incorporacion de nuevas funcionalidades',
      'Reportes mensuales de performance',
    ],
    deliverables: [
      'SLA de tiempo de respuesta acordado',
      'Canal de comunicacion directo',
      'Backlog de mejoras actualizado',
    ],
    color: 'gold' as const,
  },
];

const values = [
  { icon: CheckCircle2, text: 'Comunicacion transparente en cada etapa' },
  { icon: CheckCircle2, text: 'Sin sorpresas: estimaciones reales desde el dia uno' },
  { icon: CheckCircle2, text: 'Codigo de tu propiedad, siempre' },
  { icon: CheckCircle2, text: 'Equipo pequeño, respuesta rapida' },
];

export default function ProcesoPage() {
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
              <span>Proceso</span>
            </nav>
            <div className={styles.heroContent}>
              <span className={styles.label}>Como trabajamos</span>
              <h1 className={styles.title}>
                Un proceso claro,<br />
                <span className={styles.titleAccent}>sin sorpresas</span>
              </h1>
              <p className={styles.subtitle}>
                Creemos en la transparencia total. Desde la primera reunion hasta el
                soporte post-lanzamiento, sabes exactamente en que estamos y que viene despues.
              </p>
            </div>

            {/* Values row */}
            <div className={styles.valuesRow}>
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.text} className={styles.valueItem}>
                    <Icon size={16} strokeWidth={2} />
                    <span>{v.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className={styles.steps}>
          <div className="container">
            <div className={styles.timeline}>
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className={`${styles.stepCard} ${styles[step.color]}`}>
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div className={styles.connector} aria-hidden="true" />
                    )}

                    <div className={styles.stepHeader}>
                      <div className={styles.stepMeta}>
                        <span className={styles.stepNumber}>{step.id}</span>
                        <div className={styles.stepIconWrap}>
                          <Icon size={22} strokeWidth={1.75} />
                        </div>
                      </div>
                      <div className={styles.stepDuration}>
                        <Clock size={13} strokeWidth={2} />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    <div className={styles.stepBody}>
                      <div className={styles.stepLeft}>
                        <h2 className={styles.stepTitle}>{step.title}</h2>
                        <p className={styles.stepDesc}>{step.description}</p>

                        <div className={styles.activitiesBox}>
                          <h3 className={styles.boxTitle}>Actividades</h3>
                          <ul className={styles.activityList}>
                            {step.activities.map((a) => (
                              <li key={a} className={styles.activityItem}>
                                <span className={styles.bullet} />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={styles.stepRight}>
                        <h3 className={styles.boxTitle}>Entregables</h3>
                        <ul className={styles.deliverableList}>
                          {step.deliverables.map((d) => (
                            <li key={d} className={styles.deliverableItem}>
                              <CheckCircle2 size={15} strokeWidth={2} />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Listo para empezar?</h2>
              <p className={styles.ctaText}>
                El primer paso es gratis: una reunion de analisis donde entendemos
                tu negocio y te damos una estimacion real.
              </p>
              <Button variant="primary" size="lg" icon={ArrowRight} as="a" href="/#contact">
                Agendar reunion inicial
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
