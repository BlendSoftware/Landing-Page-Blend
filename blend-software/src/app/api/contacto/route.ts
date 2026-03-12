import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactoBody {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const toEmail = process.env.CONTACT_TO_EMAIL ?? 'hola@blendsoftware.io';
const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Falta configurar RESEND_API_KEY en el servidor.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = (await request.json()) as ContactoBody;
    const nombre = body.nombre?.trim();
    const email = body.email?.trim();
    const mensaje = body.mensaje?.trim();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan datos obligatorios: nombre, email y mensaje.' },
        { status: 400 }
      );
    }

    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeMensaje = escapeHtml(mensaje).replace(/\n/g, '<br />');

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Nuevo contacto desde la web: ${nombre}`,
      replyTo: email,
      text: `Nuevo mensaje desde el formulario de contacto\n\nNombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${safeNombre}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMensaje}</p>
      `,
    });

    return NextResponse.json({ ok: true, message: 'Correo enviado correctamente.' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando correo de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno al enviar el correo.' },
      { status: 500 }
    );
  }
}
