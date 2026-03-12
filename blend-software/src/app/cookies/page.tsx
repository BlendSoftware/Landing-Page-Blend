import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: 'Politica de cookies — Blend Software',
  description: 'Informacion sobre el uso de cookies en el sitio web de Blend Software.',
};

type Block = { type: 'text' | 'info' | 'contact'; value?: string } | { type: 'list'; items: string[] };

const sections: Array<{ id: string; title: string; content: Block[] }> = [
  {
    id: 'que-son',
    title: 'Que son las cookies',
    content: [
      { type: 'text', value: 'Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (computadora, tablet o celular) cuando los visitas. Permiten que el sitio recuerde tus preferencias y acciones para mejorar tu experiencia de navegacion.' },
      { type: 'text', value: 'Las cookies no son daninias: no pueden ejecutar programa ni instalar software. Simplemente guardan informacion sobre como interactuas con el sitio.' },
    ],
  },
  {
    id: 'tipos',
    title: 'Tipos de cookies que usamos',
    content: [
      { type: 'text', value: 'En blendsoftware.io utilizamos los siguientes tipos de cookies:' },
      { type: 'list', items: [
        'Cookies tecnicas (obligatorias): necesarias para que el sitio funcione correctamente. Sin ellas, algunas partes del sitio podrian no funcionar. No requieren tu consentimiento.',
        'Cookies de analisis: nos permiten entender como los visitantes interactuan con el sitio (paginas visitadas, tiempo de permanencia, origen del trafico). Usamos datos agregados y anonimizados.',
        'Cookies de preferencias: recuerdan tus configuraciones, como el idioma o si ya aceptaste este aviso de cookies.',
      ]},
      { type: 'info', value: 'No utilizamos cookies de publicidad ni cookies de terceros con fines de seguimiento o retargeting.' },
    ],
  },
  {
    id: 'especificas',
    title: 'Cookies especificas',
    content: [
      { type: 'text', value: 'A continuacion describimos las principales cookies que puede establecer este sitio:' },
      { type: 'list', items: [
        '_blend_session: cookie tecnica de sesion. Se elimina al cerrar el navegador.',
        '_blend_prefs: guarda tus preferencias de cookies. Dura 12 meses.',
        '_ga, _gid: cookies de Google Analytics para analisis de trafico anonimo. Duran entre 24 horas y 2 anos.',
      ]},
    ],
  },
  {
    id: 'terceros',
    title: 'Cookies de terceros',
    content: [
      { type: 'text', value: 'Podemos utilizar servicios de terceros que establecen sus propias cookies:' },
      { type: 'list', items: [
        'Google Analytics: para analisis de visitas y comportamiento en el sitio (datos anonimizados)',
        'Vercel: proveedor de infraestructura que puede establecer cookies tecnicas de funcionamiento',
      ]},
      { type: 'text', value: 'Estos terceros tienen sus propias politicas de privacidad sobre el uso de cookies. Te recomendamos consultar sus sitios web para mas informacion.' },
    ],
  },
  {
    id: 'gestion',
    title: 'Como gestionar las cookies',
    content: [
      { type: 'text', value: 'Podes controlar y/o eliminar las cookies desde la configuracion de tu navegador:' },
      { type: 'list', items: [
        'Chrome: Configuracion > Privacidad y seguridad > Cookies y otros datos de sitios',
        'Firefox: Opciones > Privacidad y seguridad > Cookies y datos del sitio',
        'Safari: Preferencias > Privacidad > Gestionar datos de sitio web',
        'Edge: Configuracion > Privacidad, busqueda y servicios > Cookies',
      ]},
      { type: 'info', value: 'Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio. Las cookies tecnicas no pueden deshabilitarse sin impactar el funcionamiento basico.' },
    ],
  },
  {
    id: 'actualizaciones',
    title: 'Actualizaciones',
    content: [
      { type: 'text', value: 'Esta politica puede actualizarse cuando incorporemos nuevas funcionalidades al sitio o cambiemos los servicios de terceros que utilizamos. La fecha de ultima actualizacion siempre estara visible al principio de esta pagina.' },
    ],
  },
  {
    id: 'contacto',
    title: 'Contacto',
    content: [
      { type: 'text', value: 'Para consultas sobre esta politica de cookies:' },
      { type: 'contact' },
    ],
  },
];

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <nav className={styles.breadcrumb}><Link href="/">Inicio</Link><span>/</span><span>Cookies</span></nav>
            <div className={styles.heroContent}>
              <span className={styles.label}>Documento legal</span>
              <h1 className={styles.title}>Politica de cookies</h1>
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


