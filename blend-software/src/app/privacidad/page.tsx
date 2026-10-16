import type { Metadata } from 'next';
import LegalDocument, { type LegalSection } from '@/components/ui/LegalDocument/LegalDocument';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Política de privacidad',
  description: 'Cómo Blend Software recopila, usa y protege la información personal que nos compartís.',
  path: '/privacidad',
  noSocial: true,
});

const sections: LegalSection[] = [
  {
    id: 'recopilacion',
    title: 'Información que recopilamos',
    content: [
      { type: 'text', value: 'Recopilamos información que nos proporcionás directamente, por ejemplo cuando completás un formulario de contacto, nos escribís un correo electrónico o iniciás una conversación con nosotros.' },
      { type: 'list', items: [
        'Nombre y apellido',
        'Correo electrónico',
        'Nombre de tu empresa',
        'Descripción de tu proyecto o consulta',
        'Número de teléfono (si lo proporcionás voluntariamente)',
      ]},
      { type: 'text', value: 'También recopilamos información automáticamente cuando visitás nuestro sitio web, como tu dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia, a través de cookies y tecnologías similares.' },
    ],
  },
  {
    id: 'uso',
    title: 'Cómo usamos tu información',
    content: [
      { type: 'text', value: 'Utilizamos la información recopilada para los siguientes propósitos:' },
      { type: 'list', items: [
        'Responder a tus consultas y solicitudes de presupuesto',
        'Gestionar la relación comercial y los proyectos en curso',
        'Enviarte información relevante sobre nuestros servicios (solo si lo solicitaste)',
        'Mejorar la experiencia de navegación en nuestro sitio',
        'Cumplir con obligaciones legales aplicables',
      ]},
      { type: 'info', value: 'No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales. Solo compartimos datos cuando es necesario para prestar el servicio (por ejemplo, con herramientas de comunicación o colaboración) o cuando la ley lo requiere.' },
    ],
  },
  {
    id: 'almacenamiento',
    title: 'Almacenamiento y seguridad',
    content: [
      { type: 'text', value: 'Tu información se almacena en servidores seguros ubicados en la Unión Europea o Estados Unidos, en proveedores que cumplen con estándares internacionales de seguridad (ISO 27001, SOC 2).' },
      { type: 'text', value: 'Implementamos medidas técnicas y organizativas razonables para proteger tus datos contra acceso no autorizado, pérdida o destrucción. Sin embargo, ningún sistema de transmisión o almacenamiento de datos es 100% seguro.' },
      { type: 'text', value: 'Conservamos tu información durante el tiempo necesario para los fines para los que fue recopilada, o el tiempo que requiera la ley. Los datos de contacto se conservan por un máximo de 3 años desde el ultimo contacto.' },
    ],
  },
  {
    id: 'derechos',
    title: 'Tus derechos',
    content: [
      { type: 'text', value: 'Tenés derecho a:' },
      { type: 'list', items: [
        'Acceder a los datos personales que tenemos sobre vos',
        'Corregir datos inexactos o incompletos',
        'Solicitar la eliminación de tus datos personales',
        'Oponerte al tratamiento de tus datos con fines de marketing',
        'Solicitar la portabilidad de tus datos en formato estructurado',
        'Retirar tu consentimiento en cualquier momento',
      ]},
      { type: 'text', value: 'Para ejercer cualquiera de estos derechos, ponete en contacto con nosotros a traves del correo electrónico que figura al final de esta política.' },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: [
      { type: 'text', value: 'Nuestro sitio utiliza cookies técnicas (necesarias para el funcionamiento) y cookies analíticas (para entender cómo se usa el sitio). Para más información, consultá nuestra Política de Cookies.' },
      { type: 'text', value: 'Podés gestionar o deshabilitar las cookies desde la configuración de tu navegador en cualquier momento.' },
    ],
  },
  {
    id: 'contacto',
    title: 'Contacto',
    content: [
      { type: 'text', value: 'Para cualquier consulta relacionada con esta política o el tratamiento de tus datos personales, podemos contactar a:' },
      { type: 'contact' },
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <LegalDocument
      title="Política de privacidad"
      crumb="Privacidad"
      path="/privacidad"
      updated="12 de marzo de 2026"
      sections={sections}
    />
  );
}
