import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Zap, Settings, GitMerge, Cpu } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Servicios — Blend Software',
  description: 'Software a medida, automatizacion de procesos, integraciones y soluciones con IA para empresas que quieren crecer.',
};

const services = [
  {
    id: '01',
    icon: Settings,
    title: 'Software a medida',
    subtitle: 'Sistemas que se adaptan a vos, no al reves',
    description:
      'Desarrollamos aplicaciones web y sistemas de gestion construidos exactamente para los procesos de tu empresa. Sin compromisos, sin funciones que no necesitas.',
    features: [
      'Panel de administracion personalizado',
      'Flujos de trabajo a tu medida',
      'Roles y permisos configurables',
      'Reportes e informes automaticos',
      'Integracion con tus herramientas actuales',
      'Escalable segun tu crecimiento',
    ],
    ideal: 'Empresas con procesos internos complejos que no encuentran una solucion lista en el mercado.',
    color: 'teal' as const,
  },
  {
    id: '02',
    icon: Zap,
    title: 'Automatizacion de procesos',
    subtitle: 'Elimina las tareas repetitivas para siempre',
    description:
      'Identificamos los cuellos de botella de tu operacion y los automatizamos. Menos tiempo manual, menos errores, mas capacidad para lo que importa.',
    features: [
      'Workflows automaticos entre sistemas',
      'Notificaciones y alertas inteligentes',
      'Generacion automatica de documentos',
      'Procesamiento de datos en segundo plano',
      'Sincronizacion entre plataformas',
      'Ahorro de hasta 18 horas semanales',
    ],
    ideal: 'Equipos que dedican horas cada dia a tareas manuales y repetitivas como copiar datos, enviar recordatorios o generar reportes.',
    color: 'gold' as const,
  },
  {
    id: '03',
    icon: GitMerge,
    title: 'Integraciones con sistemas',
    subtitle: 'Haz que todas tus herramientas hablen entre si',
    description:
      'Conectamos tu CRM, ERP, plataforma de e-commerce, contabilidad y cualquier otra herramienta que uses, para que la informacion fluya automaticamente.',
    features: [
      'Conexion con APIs de terceros',
      'Sincronizacion con CRM y ERP',
      'Integracion con plataformas de pago',
      'Migracion y limpieza de datos',
      'Actualizaciones en tiempo real',
      'Manejo de errores y logs',
    ],
    ideal: 'Negocios que usan multiples herramientas que no se comunican entre si y tienen que ingresar datos manualmente en cada una.',
    color: 'teal' as const,
  },
  {
    id: '04',
    icon: Cpu,
    title: 'Soluciones con IA',
    subtitle: 'Inteligencia artificial que trabaja para tu negocio',
    description:
      'Implementamos modelos de lenguaje y vision artificial para automatizar tareas complejas, analizar informacion y generar valor real, sin necesidad de un equipo de data science.',
    features: [
      'Asistentes y chatbots inteligentes',
      'Procesamiento y clasificacion de documentos',
      'Analisis predictivo de datos',
      'Generacion automatica de contenido',
      'Extraccion de informacion de facturas y contratos',
      'Integracion con OpenAI, Gemini y modelos open-source',
    ],
    ideal: 'Empresas con grandes volumenes de documentos, consultas repetitivas o necesidad de analisis avanzado de datos.',
    color: 'gold' as const,
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Page hero */}
        <section className={styles.hero}>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Inicio</Link>
              <span>/</span>
              <span>Servicios</span>
            </nav>
            <div className={styles.heroContent}>
              <span className={styles.label}>Lo que hacemos</span>
              <h1 className={styles.title}>
                Soluciones que se adaptan<br />
                <span className={styles.titleAccent}>a tu empresa</span>
              </h1>
              <p className={styles.subtitle}>
                Cada negocio es unico. Por eso no vendemos plantillas: construimos
                exactamente lo que necesitas para operar mejor y crecer mas rapido.
              </p>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className={styles.services}>
          <div className="container">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <article
                  key={svc.id}
                  className={`${styles.serviceCard} ${styles[svc.color]} ${i % 2 === 1 ? styles.reverse : ''}`}
                >
                  <div className={styles.cardLeft}>
                    <span className={styles.cardNumber}>{svc.id}</span>
                    <div className={styles.cardIconWrap}>
                      <Icon size={28} strokeWidth={1.75} />
                    </div>
                    <h2 className={styles.cardTitle}>{svc.title}</h2>
                    <p className={styles.cardSubtitle}>{svc.subtitle}</p>
                    <p className={styles.cardDesc}>{svc.description}</p>
                    <div className={styles.idealBox}>
                      <span className={styles.idealLabel}>Ideal para:</span>
                      <p className={styles.idealText}>{svc.ideal}</p>
                    </div>
                  </div>
                  <div className={styles.cardRight}>
                    <h3 className={styles.featuresTitle}>Que incluye</h3>
                    <ul className={styles.featuresList}>
                      {svc.features.map((f) => (
                        <li key={f} className={styles.featureItem}>
                          <Check size={15} strokeWidth={2.5} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                No encontras lo que buscas?
              </h2>
              <p className={styles.ctaText}>
                Cada proyecto es diferente. Contanos tu desafio y te proponemos la mejor solucion.
              </p>
              <Button variant="primary" size="lg" icon={ArrowRight} as="a" href="/#contact">
                Hablar con el equipo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
