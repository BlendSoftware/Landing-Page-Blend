import { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, Layers, Lightbulb, ArrowRight, Check, X } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Solución — Blend Software',
  description: 'Cómo Blend Software resuelve los desafíos tecnológicos de tu empresa con software a medida y procesos claros.',
};

const problems = [
  {
    icon: AlertCircle,
    title: 'Procesos manuales y repetitivos',
    desc: 'Tu equipo pasa horas copiando datos entre sistemas, enviando recordatorios a mano o generando reportes que podrían hacerse solos.',
  },
  {
    icon: Layers,
    title: 'Herramientas desconectadas',
    desc: 'Usás 5 herramientas distintas que no se comunican entre sí. La información está dispersa y nadie sabe cuál es la versión correcta.',
  },
  {
    icon: Lightbulb,
    title: 'Software genérico que no encaja',
    desc: 'Las soluciones del mercado hacen el 70% de lo que necesitás, pero ese 30% restante te obliga a adaptarte a ellas en lugar de al revés.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Analizamos tu operación actual, entendemos cómo trabajás y mapeamos los puntos de dolor y las oportunidades de mejora. Sin supuestos, con evidencia.',
    color: 'teal' as const,
  },
  {
    num: '02',
    title: 'Diseño de solución',
    desc: 'Proponemos una solución técnica clara: qué se construye, cómo funciona, qué integra y cuánto lleva. Todo documentado antes de escribir una línea de código.',
    color: 'gold' as const,
  },
  {
    num: '03',
    title: 'Desarrollo iterativo',
    desc: 'Construimos en ciclos cortos con entregas reales. Cada dos semanas tenés algo funcionando para revisar, aprobar y ajustar. Sin sorpresas al final.',
    color: 'teal' as const,
  },
  {
    num: '04',
    title: 'Soporte y evolución',
    desc: 'Una vez en producción, acompañamos el crecimiento. Monitoreamos, corregimos y seguimos agregando valor a medida que tu negocio cambia.',
    color: 'gold' as const,
  },
];

const comparison = [
  { criteria: 'Solución a medida',        freelancer: false, agency: true,  blend: true },
  { criteria: 'Proceso estructurado',     freelancer: false, agency: true,  blend: true },
  { criteria: 'Comunicación directa',     freelancer: true,  agency: false, blend: true },
  { criteria: 'Velocidad de entrega',     freelancer: true,  agency: false, blend: true },
  { criteria: 'Escalabilidad técnica',    freelancer: false, agency: true,  blend: true },
  { criteria: 'Precio accesible',         freelancer: true,  agency: false, blend: true },
  { criteria: 'Soporte post-lanzamiento', freelancer: false, agency: true,  blend: true },
];

export default function SolucionPage() {
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
              <span>Solución</span>
            </nav>
            <div className={styles.heroContent}>
              <span className={styles.label}>Nuestra solución</span>
              <h1 className={styles.title}>
                Software que resuelve{' '}
                <span className={styles.titleAccent}>el problema real</span>
              </h1>
              <p className={styles.subtitle}>
                No vendemos tecnología por tecnología. Identificamos el obstáculo
                que frena tu operación y construimos exactamente lo que hace falta
                para eliminarlo.
              </p>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className={styles.problems}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>El desafío</span>
              <h2 className={styles.sectionTitle}>Los problemas que más vemos</h2>
              <p className={styles.sectionDesc}>
                Después de trabajar con decenas de empresas, estos son los patrones
                que se repiten una y otra vez.
              </p>
            </div>
            <div className={styles.problemsGrid}>
              {problems.map((p) => (
                <div key={p.title} className={styles.problemCard}>
                  <div className={styles.problemIcon}>
                    <p.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className={styles.problemTitle}>{p.title}</h3>
                  <p className={styles.problemDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className={styles.process}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>El proceso</span>
              <h2 className={styles.sectionTitle}>Cómo lo resolvemos</h2>
              <p className={styles.sectionDesc}>
                Cada proyecto sigue un camino claro. Sin improvisar, sin sorpresas.
              </p>
            </div>
            <div className={styles.stepsGrid}>
              {steps.map((s) => (
                <div key={s.num} className={`${styles.stepCard} ${styles[s.color]}`}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className={styles.compare}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>¿Por qué Blend?</span>
              <h2 className={styles.sectionTitle}>La diferencia que importa</h2>
              <p className={styles.sectionDesc}>
                No somos ni un freelancer ni una agencia tradicional. Somos el punto
                intermedio que la mayoría de las empresas necesita.
              </p>
            </div>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.thCriteria}></th>
                    <th className={styles.th}>Freelancer</th>
                    <th className={styles.th}>Gran agencia</th>
                    <th className={`${styles.th} ${styles.thBlend}`}>Blend Software</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.criteria} className={styles.tr}>
                      <td className={styles.tdLabel}>{row.criteria}</td>
                      <td className={styles.td}>
                        {row.freelancer
                          ? <Check size={16} className={styles.iconYes} />
                          : <X size={16} className={styles.iconNo} />}
                      </td>
                      <td className={styles.td}>
                        {row.agency
                          ? <Check size={16} className={styles.iconYes} />
                          : <X size={16} className={styles.iconNo} />}
                      </td>
                      <td className={`${styles.td} ${styles.tdBlend}`}>
                        <Check size={16} className={styles.iconBlend} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                ¿Reconocés alguno de estos problemas en tu empresa?
              </h2>
              <p className={styles.ctaText}>
                Contanos qué frena tu operación. En 30 minutos te damos un panorama
                claro de qué se puede hacer y cómo.
              </p>
              <Button variant="primary" size="lg" as="a" href="/contacto">
                Conversemos <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
