import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import styles from './not-found.module.scss';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="contenido" className={styles.main}>
        <div className="container">
          <p className={styles.code}>Error 404</p>
          <h1 className={styles.title}>Esta página no existe o cambió de dirección</h1>
          <p className={styles.text}>
            Revisá que la dirección esté bien escrita, o seguí desde alguna de estas secciones.
          </p>
          <div className={styles.actions}>
            <Button href="/">Ir al inicio</Button>
            <Button href="/servicios" variant="secondary">
              Ver servicios
            </Button>
            <Button href="/contacto" variant="quiet">
              Contactarnos
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
