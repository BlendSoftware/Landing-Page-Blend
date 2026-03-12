import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: 'Politica de privacidad — Blend Software',
  description: 'Conoce como Blend Software recopila, usa y protege tu informacion personal.',
};

type Block = { type: 'text' | 'info' | 'contact'; value?: string } | { type: 'list'; items: string[] };

const sections: Array<{ id: string; title: string; content: Block[] }> = [
  {
    id: 'recopilacion',
    title: 'Informacion que recopilamos',
    content: [
      { type: 'text', value: 'Recopilamos informacion que nos proporcionas directamente, por ejemplo cuando completas un formulario de contacto, nos escribis un correo electronico o inicias una conversacion con nosotros.' },
      { type: 'list', items: [
        'Nombre y apellido',
        'Correo electronico',
        'Nombre de tu empresa',
        'Descripcion de tu proyecto o consulta',
        'Numero de telefono (si lo proporcionas voluntariamente)',
      ]},
      { type: 'text', value: 'Tambien recopilamos informacion automaticamente cuando visitas nuestro sitio web, como tu direccion IP, tipo de navegador, paginas visitadas y tiempo de permanencia, a traves de cookies y tecnologias similares.' },
    ],
  },
  {
    id: 'uso',
    title: 'Como usamos tu informacion',
    content: [
      { type: 'text', value: 'Utilizamos la informacion recopilada para los siguientes propositos:' },
      { type: 'list', items: [
        'Responder a tus consultas y solicitudes de presupuesto',
        'Gestionar la relacion comercial y los proyectos en curso',
        'Enviarte informacion relevante sobre nuestros servicios (solo si lo solicitaste)',
        'Mejorar la experiencia de navegacion en nuestro sitio',
        'Cumplir con obligaciones legales aplicables',
      ]},
      { type: 'info', value: 'No vendemos, alquilamos ni compartimos tu informacion personal con terceros con fines comerciales. Solo compartimos datos cuando es necesario para prestar el servicio (por ejemplo, con herramientas de comunicacion o colaboracion) o cuando la ley lo requiere.' },
    ],
  },
  {
    id: 'almacenamiento',
    title: 'Almacenamiento y seguridad',
    content: [
      { type: 'text', value: 'Tu informacion se almacena en servidores seguros ubicados en la Union Europea o Estados Unidos, en proveedores que cumplen con estandares internacionales de seguridad (ISO 27001, SOC 2).' },
      { type: 'text', value: 'Implementamos medidas tecnicas y organizativas razonables para proteger tus datos contra acceso no autorizado, perdida o destruccion. Sin embargo, ningun sistema de transmision o almacenamiento de datos es 100% seguro.' },
      { type: 'text', value: 'Conservamos tu informacion durante el tiempo necesario para los fines para los que fue recopilada, o el tiempo que requiera la ley. Los datos de contacto se conservan por un maximo de 3 anos desde el ultimo contacto.' },
    ],
  },
  {
    id: 'derechos',
    title: 'Tus derechos',
    content: [
      { type: 'text', value: 'Tenes derecho a:' },
      { type: 'list', items: [
        'Acceder a los datos personales que tenemos sobre vos',
        'Corregir datos inexactos o incompletos',
        'Solicitar la eliminacion de tus datos personales',
        'Oponerte al tratamiento de tus datos con fines de marketing',
        'Solicitar la portabilidad de tus datos en formato estructurado',
        'Retirar tu consentimiento en cualquier momento',
      ]},
      { type: 'text', value: 'Para ejercer cualquiera de estos derechos, ponete en contacto con nosotros a traves del correo electronico que figura al final de esta politica.' },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: [
      { type: 'text', value: 'Nuestro sitio utiliza cookies tecnicas (necesarias para el funcionamiento) y cookies analiticas (para entender como se usa el sitio). Para mas informacion, consulta nuestra Politica de Cookies.' },
      { type: 'text', value: 'Podes gestionar o deshabilitar las cookies desde la configuracion de tu navegador en cualquier momento.' },
    ],
  },
  {
    id: 'contacto',
    title: 'Contacto',
    content: [
      { type: 'text', value: 'Para cualquier consulta relacionada con esta politica o el tratamiento de tus datos personales, podemos contactar a:' },
      { type: 'contact' },
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <nav className={styles.breadcrumb}><Link href="/">Inicio</Link><span>/</span><span>Privacidad</span></nav>
            <div className={styles.heroContent}>
              <span className={styles.label}>Documento legal</span>
              <h1 className={styles.title}>Politica de privacidad</h1>
              <p className={styles.updated}>Ultima actualizacion: 12 de marzo de 2026</p>
            </div>
          </div>
        </section>

        <section className={styles.body}>
          <div className="container">
            <div className={styles.layout}>
              {/* Table of contents */}
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

              {/* Content */}
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


