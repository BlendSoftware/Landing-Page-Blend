import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: 'Terminos y condiciones — Blend Software',
  description: 'Lee los terminos y condiciones que rigen el uso del sitio web y los servicios de Blend Software.',
};

type Block = { type: 'text' | 'info' | 'contact'; value?: string } | { type: 'list'; items: string[] };

const sections: Array<{ id: string; title: string; content: Block[] }> = [
  {
    id: 'aceptacion',
    title: 'Aceptacion de los terminos',
    content: [
      { type: 'text', value: 'Al acceder y utilizar el sitio web de Blend Software (blendsoftware.io) o al contratar cualquiera de nuestros servicios, aceptas quedar vinculado por estos Terminos y Condiciones. Si no estas de acuerdo con alguna parte de estos terminos, no debes utilizar nuestros servicios.' },
      { type: 'info', value: 'Estos terminos pueden actualizarse periodicamente. La version vigente siempre estara disponible en esta pagina, con la fecha de ultima modificacion indicada.' },
    ],
  },
  {
    id: 'servicios',
    title: 'Descripcion de los servicios',
    content: [
      { type: 'text', value: 'Blend Software provee servicios de desarrollo de software a medida, automatizacion de procesos, integraciones de sistemas y soluciones con inteligencia artificial para empresas.' },
      { type: 'text', value: 'Los alcances, plazos, precios y condiciones especificas de cada proyecto se definen en un acuerdo o propuesta comercial firmado entre ambas partes. En caso de contradiccion entre estos terminos generales y el acuerdo especifico del proyecto, prevalece el acuerdo especifico.' },
    ],
  },
  {
    id: 'propiedad-intelectual',
    title: 'Propiedad intelectual',
    content: [
      { type: 'text', value: 'Todo el software, codigo fuente, disenios, documentacion y demas material desarrollado especificamente para un cliente pasa a ser propiedad del cliente una vez acreditado el pago total acordado, salvo que el contrato especifico establezca lo contrario.' },
      { type: 'text', value: 'Blend Software retiene la propiedad de:' },
      { type: 'list', items: [
        'Bibliotecas, frameworks y componentes reutilizables desarrollados previamente',
        'Metodologias, procesos y know-how interno',
        'Herramientas y utilidades de uso transversal entre proyectos',
        'Todo el contenido del sitio web de Blend Software (textos, disenios, logotipos)',
      ]},
    ],
  },
  {
    id: 'pagos',
    title: 'Condiciones de pago',
    content: [
      { type: 'text', value: 'Las condiciones de pago se establecen en la propuesta comercial de cada proyecto. Como regla general:' },
      { type: 'list', items: [
        'Los proyectos se facturan por hitos o etapas acordadas previamente',
        'El pago inicial (adelanto) es requisito para comenzar el desarrollo',
        'Los pagos no realizados en termino pueden suspender el trabajo hasta su regularizacion',
        'Los presupuestos tienen una validez de 30 dias a partir de su emision',
      ]},
      { type: 'info', value: 'No se realizan devoluciones por trabajo ya entregado y aprobado. En caso de cancelacion del proyecto, se factura el trabajo realizado hasta la fecha de notificacion.' },
    ],
  },
  {
    id: 'confidencialidad',
    title: 'Confidencialidad',
    content: [
      { type: 'text', value: 'Ambas partes se comprometen a mantener la confidencialidad de la informacion tecnica, comercial y de negocio intercambiada durante la relacion comercial.' },
      { type: 'text', value: 'Blend Software no divulgara informacion confidencial del cliente a terceros sin autorizacion expresa, excepto cuando la ley lo requiera. Esta obligacion permanece vigente durante 3 anos despues de la finalizacion de la relacion comercial.' },
    ],
  },
  {
    id: 'limitacion',
    title: 'Limitacion de responsabilidad',
    content: [
      { type: 'text', value: 'Blend Software no sera responsable por danos indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del software desarrollado, incluyendo perdida de beneficios, datos o fondo de comercio.' },
      { type: 'text', value: 'La responsabilidad total de Blend Software, por cualquier causa, no excedera el monto efectivamente pagado por el cliente en los ultimos 12 meses por los servicios relacionados con el reclamo.' },
    ],
  },
  {
    id: 'contacto',
    title: 'Contacto',
    content: [
      { type: 'text', value: 'Para consultas sobre estos terminos y condiciones:' },
      { type: 'contact' },
    ],
  },
];

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <nav className={styles.breadcrumb}><Link href="/">Inicio</Link><span>/</span><span>Terminos</span></nav>
            <div className={styles.heroContent}>
              <span className={styles.label}>Documento legal</span>
              <h1 className={styles.title}>Terminos y condiciones</h1>
              <p className={styles.updated}>Ultima actualizacion: 12 de marzo de 2026</p>
            </div>
          </div>
        </section>

        <section className={styles.body}>
          <div className="container">
            <div className={styles.layout}>
              <aside className={styles.toc}>
                <p className={styles.tocTitle}>Contenido</p>
                <nav className={styles.tocList}>
                  {sections.map((s, i) => (
                    <a key={s.id} href={`#${s.id}`} className={styles.tocLink}>
                      {i + 1}. {s.title}
                    </a>
                  ))}
                </nav>
              </aside>

              <div className={styles.content}>
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                      <span>{i + 1}.</span>{s.title}
                    </h2>
                    {s.content.map((block, j) => {
                      if (block.type === 'text') return <p key={j} className={styles.text}>{block.value}</p>;
                      if (block.type === 'list') return (
                        <ul key={j} className={styles.list}>
                          {block.items.map((item) => (
                            <li key={item} className={styles.listItem}>
                              <span className={styles.bullet} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                      if (block.type === 'info') return (
                        <div key={j} className={styles.infoBox}>
                          <p className={styles.infoText}>{block.value}</p>
                        </div>
                      );
                      if (block.type === 'contact') return (
                        <div key={j} className={styles.contactBox}>
                          <span className={styles.contactLabel}>Blend Software</span>
                          <a href="mailto:hola@blendsoftware.io" className={styles.contactEmail}>hola@blendsoftware.io</a>
                        </div>
                      );
                      return null;
                    })}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


