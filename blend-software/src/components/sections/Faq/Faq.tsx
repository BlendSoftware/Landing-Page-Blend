import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { faq } from '@/content/faq';
import styles from './Faq.module.scss';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function Faq() {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <JsonLd data={faqSchema} />
      <div className={`container ${styles.layout}`}>
        <div className={styles.aside}>
          <h2 id="faq-title" className={styles.title}>
            Preguntas frecuentes
          </h2>
          <p className={styles.intro}>
            Lo que más nos preguntan antes de empezar un proyecto. Si tu duda no está acá,{' '}
            <Link href="/contacto" className="text-link">
              escribinos
            </Link>
            .
          </p>
        </div>

        <div className={styles.list}>
          {faq.map((item, i) => (
            <details key={item.question} name="faq" className={styles.item} open={i === 0}>
              <summary className={styles.question}>
                <h3>{item.question}</h3>
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
