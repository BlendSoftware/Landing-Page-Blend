import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import PageHero from '@/components/ui/PageHero/PageHero';
import { site } from '@/lib/site';
import styles from './LegalDocument.module.scss';

export type LegalBlock =
  | { type: 'text' | 'info'; value: string }
  | { type: 'contact' }
  | { type: 'list'; items: string[] };

export interface LegalSection {
  id: string;
  title: string;
  content: LegalBlock[];
}

interface LegalDocumentProps {
  title: string;
  crumb: string;
  path: string;
  updated: string;
  sections: LegalSection[];
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'text':
      return <p className={styles.text}>{block.value}</p>;
    case 'info':
      return <p className={styles.info}>{block.value}</p>;
    case 'list':
      return (
        <ul className={styles.list}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'contact':
      return (
        <p className={styles.contact}>
          <span>{site.name}</span>
          <a href={`mailto:${site.email}`} className="text-link">
            {site.email}
          </a>
        </p>
      );
  }
}

export default function LegalDocument({ title, crumb, path, updated, sections }: LegalDocumentProps) {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero crumb={crumb} path={path} title={title} lead={`Última actualización: ${updated}`} />

        <section className={styles.body}>
          <div className={`container ${styles.layout}`}>
            <nav className={styles.toc} aria-label="Contenido del documento">
              <p className={styles.tocTitle}>Contenido</p>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className={styles.content}>
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className={styles.section} aria-labelledby={`${s.id}-title`}>
                  <h2 id={`${s.id}-title`} className={styles.sectionTitle}>
                    <span aria-hidden="true">{i + 1}.</span> {s.title}
                  </h2>
                  {s.content.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
