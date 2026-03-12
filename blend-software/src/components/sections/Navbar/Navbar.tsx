'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import BlendLogo from '@/components/ui/BlendLogo/BlendLogo';
import styles from './Navbar.module.scss';

const links = [
  { label: 'Servicios',  href: '/servicios' },
  { label: 'Solución',   href: '/solucion' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Contacto',   href: '/contacto' },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>

      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <BlendLogo size={38} />
          <div className={styles.logoTexts}>
            <span className={styles.logoName}>Blend Software</span>
            <span className={styles.logoCity}>Mendoza</span>
          </div>
        </Link>

        {/* Nav links */}
        <nav className={styles.navLinks} aria-label="Navegacion principal">
          {links.map((l, i) => (
            <Fragment key={l.label}>
              {i > 0 && <span className={styles.navSep} aria-hidden="true" />}
              <Link href={l.href} className={styles.navLink}>
                {l.label}
              </Link>
            </Fragment>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <Button variant="primary" size="sm" as="a" href="/contacto">
            Comenzar &rarr;
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className={styles.mobileCta}>
            <Button variant="primary" size="md" as="a" href="/contacto" fullWidth>
              Iniciar proyecto
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
