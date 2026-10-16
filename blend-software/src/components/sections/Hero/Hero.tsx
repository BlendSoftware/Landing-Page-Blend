import Button from '@/components/ui/Button';
import { site } from '@/lib/site';
import GradientBackdrop from '@/components/ui/GradientBackdrop/GradientBackdrop';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <GradientBackdrop interactive />

      <div className={`container ${styles.inner}`}>
        <h1 id="hero-title" className={styles.title}>
          <span className={styles.titleSmall}>Software a medida, hecho en <em>Mendoza</em></span>
          <span className={styles.titleBig}>
            <span className={styles.lineLight}>Menos planilla.</span>
            <span className={styles.lineBold}>Más empresa.</span>
          </span>
        </h1>

        <p className={styles.lead}>
          Sistemas, automatizaciones e integraciones para empresas que crecieron más rápido que sus
          herramientas. Hablás directo con quien lo construye.
        </p>

        <div className={styles.actions}>
          <Button href="/contacto" size="lg">
            Contanos tu proyecto
          </Button>
          <Button href="#servicios" variant="quiet" size="lg">
            Ver qué hacemos
          </Button>
        </div>

        <p className={styles.note}>Primera charla sin cargo. Respondemos en {site.responseTime}.</p>
      </div>

    </section>
  );
}
