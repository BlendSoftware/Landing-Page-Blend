import Button from '@/components/ui/Button';
import GradientBackdrop from '@/components/ui/GradientBackdrop/GradientBackdrop';
import { site } from '@/lib/site';
import styles from './CTA.module.scss';

interface CTAProps {
  title?: string;
  text?: string;
  action?: string;
}

export default function CTA({
  title = '¿Lo charlamos?',
  text = `La primera conversación es gratis y sin compromiso. Te respondemos en ${site.responseTime} con una evaluación honesta de lo que se puede hacer.`,
  action = 'Contanos tu proyecto',
}: CTAProps) {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <GradientBackdrop />
      <div className={`container ${styles.inner}`}>
        <h2 id="cta-title" className={styles.title}>
          {title}
        </h2>
        <div className={styles.body}>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <Button href="/contacto" size="lg">
              {action}
            </Button>
            <a href={`mailto:${site.email}`} className={styles.mail}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
