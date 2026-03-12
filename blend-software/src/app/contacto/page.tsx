'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';

const services = [
  'Software a medida',
  'Automatización de procesos',
  'Integraciones con sistemas',
  'Soluciones con IA',
  'Consultoria técnica',
  'Otro',
];

const budgets = [
  'Menos de USD 3.000',
  'USD 3.000 - 10.000',
  'USD 10.000 - 30.000',
  'Mas de USD 30.000',
  'Todavia no lo tengo claro',
];

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
};

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitError('Completa nombre, email y mensaje para continuar.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: form.name,
          email: form.email,
          mensaje: form.message,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? 'No se pudo enviar el mensaje.');
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Ocurrió un problema al enviar tu mensaje. Intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <nav className={styles.breadcrumb}>
              <Link href="/">Inicio</Link>
              <span>/</span>
              <span>Contacto</span>
            </nav>
            <div className={styles.heroContent}>
              <span className={styles.label}>Hablemos</span>
              <h1 className={styles.title}>
                Contanos sobre<br />
                <span className={styles.titleAccent}>tu proyecto</span>
              </h1>
              <p className={styles.subtitle}>
                La primera conversacion es gratis y sin compromiso.
                En menos de 48 horas hábiles te respondemos con una evaluacion honesta
                de lo que podemos hacer juntos.
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className={styles.body}>
          <div className="container">
            <div className={styles.layout}>

              {/* Sidebar info */}
              <aside className={styles.sidebar}>
                <div className={styles.infoCard}>
                  <h2 className={styles.infoTitle}>Información de contacto</h2>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}><Mail size={17} strokeWidth={1.75} /></div>
                    <div>
                      <span className={styles.infoLabel}>Email</span>
                      <a href="mailto:contacto@blendsoftware.tech" className={styles.infoValue}>
                        contacto@blendsoftware.tech
                      </a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}><MapPin size={17} strokeWidth={1.75} /></div>
                    <div>
                      <span className={styles.infoLabel}>Ubicación</span>
                      <span className={styles.infoValue}>Mendoza, Argentina</span>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}><Clock size={17} strokeWidth={1.75} /></div>
                    <div>
                      <span className={styles.infoLabel}>Tiempo de respuesta</span>
                      <span className={styles.infoValue}>Menos de 48 horas hábiles</span>
                    </div>
                  </div>
                </div>

                <div className={styles.expectCard}>
                  <h3 className={styles.expectTitle}>Que esperar</h3>
                  <ol className={styles.expectList}>
                    {[
                      'Respondemos con una evaluación de tu proyecto',
                      'Agendamos una llamada de 30-60 minutos',
                      'Te enviamos una propuesta detallada sin costo',
                    ].map((step, i) => (
                      <li key={i} className={styles.expectItem}>
                        <span className={styles.expectNumber}>{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>

              {/* Form */}
              <div className={styles.formWrap}>
                {submitted ? (
                  <div className={styles.successState}>
                    <div className={styles.successIcon}>
                      <CheckCircle2 size={48} strokeWidth={1.5} />
                    </div>
                    <h2 className={styles.successTitle}>Mensaje recibido</h2>
                    <p className={styles.successText}>
                      Gracias por escribirnos. Revisamos tu consulta y te respondemos
                      antes de las próximas 48 horas hábiles.
                    </p>
                    <Button
                      variant="secondary"
                      size="md"
                      icon={ArrowRight}
                      as="a"
                      href="/"
                    >
                      Volver al inicio
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.formGrid}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="name">
                          Nombre completo <span className={styles.required}>*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="Juan Perez"
                          autoComplete="name"
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="email">
                          Correo electrónico <span className={styles.required}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="juan@empresa.com"
                          autoComplete="email"
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="company">
                          Empresa u organización
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="Nombre de tu empresa"
                          autoComplete="organization"
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="service">
                          Tipo de servicio
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={styles.select}
                        >
                          <option value="">Selecciona una opción</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                        <label className={styles.label} htmlFor="budget">
                          Presupuesto aproximado
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={styles.select}
                        >
                          <option value="">Selecciona un rango</option>
                          {budgets.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                        <label className={styles.label} htmlFor="message">
                          Contanos sobre tu proyecto <span className={styles.required}>*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className={styles.textarea}
                          placeholder="Describe brevemente el problema que querés resolver, que proceso querés mejorar o que sistema necesitas..."
                        />
                      </div>
                    </div>

                    {submitError ? <p className={styles.errorMessage}>{submitError}</p> : null}

                    <div className={styles.formFooter}>
                      <p className={styles.privacy}>
                        Tu información se trata con confidencialidad.
                        Lee nuestra{' '}
                        <Link href="/privacidad" className={styles.privacyLink}>
                          política de privacidad
                        </Link>.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className={`${styles.submitBtn} ${loading ? styles.loading : ''}`}
                      >
                        <Send size={16} strokeWidth={2} />
                        <span>{loading ? 'Enviando...' : 'Enviar mensaje'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
