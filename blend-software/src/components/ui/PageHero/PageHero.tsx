import Link from 'next/link';
import type { ReactNode } from 'react';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';
import GradientBackdrop from '@/components/ui/GradientBackdrop/GradientBackdrop';
import styles from './PageHero.module.scss';

interface PageHeroProps {
  /** Breadcrumb label for the current page */
  crumb: string;
  path: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
}

export default function PageHero({ crumb, path, title, lead, children }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <JsonLd data={breadcrumbSchema([{ name: crumb, path }])} />
      <GradientBackdrop />
      <div className={`container ${styles.inner}`}>
        <nav aria-label="Ruta de navegación" className={styles.breadcrumb}>
          <ol>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
        {children ? <div className={styles.extra}>{children}</div> : null}
      </div>
    </section>
  );
}
