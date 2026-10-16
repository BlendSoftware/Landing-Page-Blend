import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactoBody {
  nombre?: unknown;
  email?: unknown;
  mensaje?: unknown;
  empresa?: unknown;
  servicio?: unknown;
  presupuesto?: unknown;
  /** Honeypot field, filled only by bots */
  website?: unknown;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

/** Trims, caps length and strips line breaks from single-line fields (no header injection via subject). */
const clean = (value: unknown, max: number, singleLine = true) => {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim().slice(0, max);
  return singleLine ? trimmed.replace(/[\r\n]+/g, ' ') : trimmed;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const toEmail = process.env.CONTACT_TO_EMAIL ?? 'contacto@blendsoftware.tech';
const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Falta configurar RESEND_API_KEY en el servidor.' },
        { status: 500 }
      );
    }

    const body = (await request.json().catch(() => ({}))) as ContactoBody;

    // Bots fill every field; pretend success so they don't retry.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true, message: 'Correo enviado correctamente.' }, { status: 200 });
    }

    const nombre = clean(body.nombre, 120);
    const email = clean(body.email, 200);
    const mensaje = clean(body.mensaje, 5000, false);
    const empresa = clean(body.empresa, 160);
    const servicio = clean(body.servicio, 120);
    const presupuesto = clean(body.presupuesto, 120);

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan datos obligatorios: nombre, email y mensaje.' },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'El correo electrónico no es válido.' }, { status: 400 });
    }

    const details: [string, string][] = [
      ['Nombre', nombre],
      ['Email', email],
      ['Empresa', empresa],
      ['Servicio', servicio],
      ['Presupuesto', presupuesto],
    ].filter((entry): entry is [string, string] => Boolean(entry[1]));

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Nuevo contacto desde la web: ${nombre}${empresa ? ` (${empresa})` : ''}`,
      replyTo: email,
      text: `Nuevo mensaje desde el formulario de contacto\n\n${details
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')}\n\nMensaje:\n${mensaje}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        ${details.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join('')}
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(mensaje).replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend rechazó el envío del contacto:', error);
      return NextResponse.json({ error: 'Error interno al enviar el correo.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, message: 'Correo enviado correctamente.' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando correo de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno al enviar el correo.' },
      { status: 500 }
    );
  }
}
