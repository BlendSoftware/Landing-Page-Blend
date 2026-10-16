'use client';

import { useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { services } from '@/content/services';
import { site } from '@/lib/site';
import styles from './page.module.scss';

const serviceOptions = [...services.map((s) => s.shortName), 'Consultoría técnica', 'Otro'];

const budgets = [
  'Menos de USD 3.000',
  'USD 3.000 a 10.000',
  'USD 10.000 a 30.000',
  'Más de USD 30.000',
  'Todavía no lo tengo claro',
];

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  /** Honeypot: real people never see or fill this field */
  website: string;
}

type RequiredField = 'name' | 'email' | 'message';
type Errors = Partial<Record<RequiredField, string>>;

const initialForm: FormState = { name: '', email: '', company: '', service: '', budget: '', message: '', website: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field: RequiredField, value: string): string | undefined {
  const v = value.trim();
  if (field === 'name' && !v) return 'Escribí tu nombre.';
  if (field === 'email') {
    if (!v) return 'Escribí tu correo para poder responderte.';
    if (!EMAIL_RE.test(v)) return 'Revisá el correo: falta la @ o el dominio.';
  }
  if (field === 'message' && v.length < 10) return 'Contanos en al menos una frase qué querés resolver.';
  return undefined;
}

const requiredFields: RequiredField[] = ['name', 'email', 'message'];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear an error as soon as the field becomes valid; new errors wait for blur
    if (name in errors && !validateField(name as RequiredField, value)) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as RequiredField;
    if (!requiredFields.includes(name)) return;
    // Only flag fields the person actually typed in
    if (e.target.value === '' && !(name in errors)) return;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, e.target.value) }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const nextErrors: Errors = {};
    requiredFields.forEach((f) => {
      const err = validateField(f, form[f]);
      if (err) nextErrors[f] = err;
    });
    setErrors(nextErrors);

    const firstInvalid = requiredFields.find((f) => nextErrors[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    try {
      setStatus('sending');
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.name,
          email: form.email,
          empresa: form.company,
          servicio: form.service,
          presupuesto: form.budget,
          mensaje: form.message,
          website: form.website,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? 'No se pudo enviar el mensaje.');
      }

      setStatus('sent');
      setForm(initialForm);
      requestAnimationFrame(() => successRef.current?.focus());
    } catch (error) {
      setStatus('error');
      setSubmitError(
        `${error instanceof Error ? error.message : 'No se pudo enviar el mensaje.'} Probá de nuevo o escribinos a ${site.email}.`,
      );
    }
  };

  if (status === 'sent') {
    return (
      <div className={styles.success}>
        <h2 ref={successRef} tabIndex={-1} className={styles.successTitle}>
          Mensaje enviado
        </h2>
        <p>
          Gracias por escribirnos. Revisamos tu consulta y te respondemos en {site.responseTime} al correo
          que nos dejaste.
        </p>
        <div className={styles.successActions}>
          <Button href="/" variant="secondary">
            Volver al inicio
          </Button>
          <Button variant="quiet" type="button" onClick={() => setStatus('idle')}>
            Enviar otro mensaje
          </Button>
        </div>
      </div>
    );
  }

  const fieldProps = (name: RequiredField) => ({
    id: name,
    name,
    required: true,
    'aria-required': true,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    value: form[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  const errorText = (name: RequiredField) =>
    errors[name] ? (
      <p id={`${name}-error`} className={styles.fieldError}>
        <span aria-hidden="true">!</span>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate aria-labelledby="form-title">
      <h2 id="form-title" className={styles.formTitle}>
        Contanos sobre tu proyecto
      </h2>
      <p className={styles.formHint}>
        Los campos con <span aria-hidden="true">*</span>
        <span className="visually-hidden">asterisco</span> son obligatorios. El resto nos ayuda a preparar
        una mejor respuesta.
      </p>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="name">
            Nombre <span aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" className={styles.input} {...fieldProps('name')} />
          {errorText('name')}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">
            Correo electrónico <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            className={styles.input}
            {...fieldProps('email')}
          />
          {errorText('email')}
        </div>

        <div className={styles.field}>
          <label htmlFor="company">Empresa</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={styles.input}
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="service">Qué necesitás</label>
          <select id="service" name="service" className={styles.input} value={form.service} onChange={handleChange}>
            <option value="">Elegí una opción</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="budget">Presupuesto aproximado</label>
          <select id="budget" name="budget" className={styles.input} value={form.budget} onChange={handleChange}>
            <option value="">Elegí un rango</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="message">
            Qué querés resolver <span aria-hidden="true">*</span>
          </label>
          <textarea
            rows={6}
            className={styles.input}
            placeholder="Por ejemplo: cargamos los pedidos en una planilla y después los pasamos a mano al sistema de facturación."
            {...fieldProps('message')}
          />
          {errorText('message')}
        </div>

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">No completar este campo</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
        </div>
      </div>

      <div role="alert" className={styles.alertSlot}>
        {submitError ? <p className={styles.submitError}>{submitError}</p> : null}
      </div>

      <div className={styles.footer}>
        <p className={styles.privacy}>
          Usamos tus datos solo para responderte. Más detalles en la{' '}
          <Link href="/privacidad" className="text-link">
            política de privacidad
          </Link>
          .
        </p>
        <Button type="submit" size="lg" disabled={status === 'sending'} aria-disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
        </Button>
      </div>
    </form>
  );
}
