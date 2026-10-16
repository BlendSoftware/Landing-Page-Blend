import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/ui/PageHero/PageHero';
import { pageMetadata } from '@/lib/metadata';
import styles from './page.module.scss';

export const metadata: Metadata = pageMetadata({
  title: 'Casos: qué cambia con un software a medida',
  description:
    'Ejemplos de problemas que resolvemos en logística, servicios profesionales y retail: cómo era la operación, qué construimos y qué cambia en el día a día.',
  path: '/resultados',
});

// Representative scenarios. Replace with named case studies (and real metrics)
// once clients approve publishing them.
const cases = [
  {
    industry: 'Logística',
    tone: 'teal',
    before:
      'El equipo consolidaba a mano los pedidos de tres sistemas distintos en una planilla, todos los días, con errores frecuentes en los despachos.',
    built:
      'Un panel que reúne los pedidos en tiempo real, genera los remitos automáticamente y avisa al equipo de seguimiento sin intervención manual.',
    after: [
      'La consolidación diaria deja de ser una tarea manual',
      'Menos errores de despacho por datos mal copiados',
      'Estado de cada pedido visible para todo el equipo',
    ],
  },
  {
    industry: 'Servicios profesionales',
    tone: 'gold',
    before:
      'Contratos, horas trabajadas y facturación vivían en cuatro herramientas distintas. Los datos estaban desactualizados y la facturación salía tarde.',
    built:
      'Una plataforma interna que unifica clientes, proyectos, horas y facturación, conectada con el sistema contable existente.',
    after: [
      'Facturación generada automáticamente al cierre de cada mes',
      'Rentabilidad visible por proyecto y por cliente',
      'El área administrativa recupera tiempo para tareas de valor',
    ],
  },
  {
    industry: 'Retail y e-commerce',
    tone: 'ochre',
    before:
      'El stock del local y el de la tienda online se desincronizaban, y se vendían productos que en realidad no estaban disponibles.',
    built:
      'Sincronización en los dos sentidos del inventario entre el punto de venta y la tienda online, con alertas cuando el stock baja de un mínimo.',
    after: [
      'Un único stock para el local y la tienda online',
      'Alertas automáticas antes de quedarse sin productos',
      'Sin actualizaciones manuales de inventario',
    ],
  },
] as const;

const gains = [
  {
    title: 'Tiempo recuperado',
    text: 'Las horas que se iban en tareas manuales vuelven al trabajo que hace crecer el negocio.',
  },
  {
    title: 'Menos errores',
    text: 'Cuando los datos no se copian a mano, dejan de aparecer los errores de tipeo y las versiones distintas.',
  },
  {
    title: 'Decisiones con datos al día',
    text: 'Ves lo que pasa ahora, no lo que decía la planilla de la semana pasada.',
  },
  {
    title: 'Una operación que escala',
    text: 'Podés sumar clientes, pedidos o personas sin que el sistema se convierta en el cuello de botella.',
  },
];

export default function ResultadosPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          crumb="Casos"
          path="/resultados"
          title="Qué cambia cuando ordenamos tu operación"
          lead="Cada proyecto empieza con un problema concreto del negocio. Estos son escenarios representativos de los que resolvemos: cómo era el día a día, qué construimos y qué cambia después."
        />

        <section className={styles.cases} aria-label="Escenarios">
          <div className="container">
            <ol className={styles.caseList}>
              {cases.map((c) => (
                <li key={c.industry} className={`${styles.case} ${styles[c.tone]}`}>
                  <h2 className={styles.industry}>{c.industry}</h2>
                  <div className={styles.flow}>
                    <div className={styles.stage}>
                      <h3>Antes</h3>
                      <p>{c.before}</p>
                    </div>
                    <div className={styles.stage}>
                      <h3>Qué construimos</h3>
                      <p>{c.built}</p>
                    </div>
                    <div className={`${styles.stage} ${styles.after}`}>
                      <h3>Después</h3>
                      <ul>
                        {c.after.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <p className={styles.disclaimer}>
              Los escenarios describen tipos de proyecto que realizamos. Por confidencialidad no
              identificamos a los clientes.
            </p>
          </div>
        </section>

        <section className={styles.gains} aria-labelledby="gains-title">
          <div className="container">
            <div className={styles.gainsInner}>
              <h2 id="gains-title" className={styles.gainsTitle}>
                Lo que tu empresa gana
              </h2>
              <ul className={styles.gainList}>
                {gains.map((g) => (
                  <li key={g.title}>
                    <h3>{g.title}</h3>
                    <p>{g.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CTA
          title="¿Te suena alguno de estos escenarios?"
          text="Contanos cómo funciona hoy tu operación. Analizamos tu caso sin cargo y te mostramos qué se podría mejorar."
          action="Analizar mi caso"
        />
      </main>
      <Footer />
    </>
  );
}
