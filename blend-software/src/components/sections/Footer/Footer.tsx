import Link from 'next/link';
import { Mail, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';
import BlendLogo from '@/components/ui/BlendLogo/BlendLogo';
import styles from './Footer.module.scss';

const nav = [
  { label: 'Inicio',      href: '/' },
  { label: 'Servicios',   href: '/servicios' },
  { label: 'Proceso',     href: '/proceso' },
  { label: 'Tecnología',  href: '/tecnologia' },
];

const services = [
  { label: 'Software a medida',  href: '/servicios#software' },
  { label: 'Automatización',     href: '/servicios#automatizacion' },
  { label: 'Integraciones',      href: '/servicios#integraciones' },
  { label: 'Soluciones con IA',  href: '/servicios#ia' },
];

const legal = [
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Términos y condiciones', href: '/terminos' },
  { label: 'Política de cookies',    href: '/cookies' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Decorative gradient divider */}
      <div className={styles.topBar} aria-hidden="true" />

      <div className="container">
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logoLink}>
              <BlendLogo size={40} />
              <div className={styles.logoTexts}>
                <span className={styles.logoName}>Blend Software</span>
                <span className={styles.logoCity}>Mendoza · Argentina</span>
              </div>
            </Link>
            <p className={styles.tagline}>
              Desarrollamos software a medida, automatizamos procesos
              y construimos soluciones tecnológicas escalables.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="LinkedIn">
                <Linkedin size={14} strokeWidth={1.75} />
              </a>
              <a href="https://www.instagram.com/blendsoftware.mza/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">
                <Instagram size={14} strokeWidth={1.75} />
              </a>
              <a href="#" className={styles.social} aria-label="Twitter">
                <Twitter size={14} strokeWidth={1.75} />
              </a>
              <a href="mailto:hola@blendsoftware.io" className={styles.social} aria-label="Email">
                <Mail size={14} strokeWidth={1.75} />
              </a>
            </div>
            <p className={styles.brandCopy}>© {new Date().getFullYear()} Blend Software</p>
          </div>

          {/* Navigation */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navegación</h4>
            <ul className={styles.list}>
              {nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Servicios</h4>
            <ul className={styles.list}>
              {services.map((svc) => (
                <li key={svc.label}>
                  <Link href={svc.href} className={styles.link}>{svc.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.list}>
              {legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — separated CTA block */}
          <div className={styles.colContact}>
            <h4 className={styles.colTitle}>Contacto</h4>
            <a href="mailto:contacto@blendsoftware.tech" className={styles.contactEmail}>
              <Mail size={13} strokeWidth={1.75} />
              contacto@blendsoftware.tech
            </a>
            <Link href="/contacto" className={styles.ctaLink}>
              Iniciar un proyecto
              <ArrowUpRight size={14} strokeWidth={2} />
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Blend Software. Todos los derechos reservados.
          </p>
          <p className={styles.madeIn}>
            Hecho con precisión en Mendoza
          </p>
        </div>
      </div>
    </footer>
  );
}
