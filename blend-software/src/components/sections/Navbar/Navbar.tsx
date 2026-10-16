'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import BlendLogo from '@/components/ui/BlendLogo/BlendLogo';
import { mainNav } from '@/lib/site';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu whenever the route changes (state derived during render)
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`${styles.header} ${open ? styles.isOpen : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Blend Software, ir al inicio">
          <BlendLogo size={34} />
          <span className={styles.logoName}>
            <b>Blend</b> Software
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.navList}>
            {mainNav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={styles.navLink}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.cta}>
          <Button href="/contacto" variant="primary" size="sm">
            Contanos tu proyecto
          </Button>
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.toggleBars} aria-hidden="true" />
          <span className="visually-hidden">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>

      <div id="mobile-menu" className={styles.mobileMenu} hidden={!open}>
        <nav aria-label="Principal (móvil)" className="container">
          <ul>
            {mainNav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={styles.mobileLink}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contacto" variant="primary" size="lg" fullWidth onClick={() => setOpen(false)}>
            Contanos tu proyecto
          </Button>
        </nav>
      </div>
    </header>
  );
}
