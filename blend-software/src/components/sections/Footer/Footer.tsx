import Link from 'next/link';
import BlendLogo from '@/components/ui/BlendLogo/BlendLogo';
import { services } from '@/content/services';
import { site } from '@/lib/site';
import styles from './Footer.module.scss';

const company = [
  { label: 'Cómo trabajamos', href: '/proceso' },
  { label: 'Por qué Blend', href: '/solucion' },
  { label: 'Casos', href: '/resultados' },
  { label: 'Tecnología', href: '/tecnologia' },
  { label: 'Contacto', href: '/contacto' },
];

const legal = [
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Términos y condiciones', href: '/terminos' },
  { label: 'Cookies', href: '/cookies' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <BlendLogo size={36} />
            <span>Blend Software</span>
          </Link>
          <p className={styles.tagline}>
            Desarrollo de software a medida, automatización de procesos e integraciones para empresas.
            Desde Mendoza, Argentina.
          </p>
          <a href={`mailto:${site.email}`} className={styles.email}>
            {site.email}
          </a>
        </div>

        <nav className={styles.cols} aria-label="Pie de página">
          <div>
            <h2 className={styles.colTitle}>Servicios</h2>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/servicios#${s.id}`} className={styles.link}>
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.colTitle}>Estudio</h2>
            <ul>
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.colTitle}>Seguinos</h2>
            <ul>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Instagram<span className="visually-hidden"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} Blend Software. Todos los derechos reservados.</p>
        <ul className={styles.legal}>
          {legal.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
