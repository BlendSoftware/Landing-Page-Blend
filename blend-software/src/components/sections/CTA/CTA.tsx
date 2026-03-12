import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './CTA.module.scss';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>
              Construyamos el software que
              <br />
              <span className={styles.accent}>tu empresa necesita</span>
            </h2>
            <p className={styles.desc}>
              Cada empresa tiene desafíos únicos. Contanos el tuyo y encontremos juntos
              la solución de software que lo resuelva de verdad.
            </p>
          </div>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" icon={ArrowRight}>
              Iniciar proyecto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
