import type { Metadata } from 'next';
import LegalDocument, { type LegalSection } from '@/components/ui/LegalDocument/LegalDocument';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Política de cookies',
  description: 'Qué cookies puede usar el sitio de Blend Software, para qué sirven y cómo gestionarlas desde tu navegador.',
  path: '/cookies',
  noSocial: true,
});

const sections: LegalSection[] = [
  {
    id: 'que-son',
    title: 'Qué son las cookies',
    content: [
      { type: 'text', value: 'Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (computadora, tablet o celular) cuando los visitás. Permiten que el sitio recuerde tus preferencias y acciones para mejorar tu experiencia de navegación.' },
      { type: 'text', value: 'Las cookies no son dañinas: no pueden ejecutar programas ni instalar software. Simplemente guardan información sobre cómo interactuás con el sitio.' },
    ],
  },
  {
    id: 'tipos',
    title: 'Tipos de cookies que usamos',
    content: [
      { type: 'text', value: 'En blendsoftware.tech utilizamos los siguientes tipos de cookies:' },
      { type: 'list', items: [
        'Cookies técnicas (obligatorias): necesarias para que el sitio funcione correctamente. Sin ellas, algunas partes del sitio podrían no funcionar. No requieren tu consentimiento.',
        'Cookies de análisis: nos permiten entender como los visitantes interactuan con el sitio (páginas visitadas, tiempo de permanencia, origen del tráfico). Usamos datos agregados y anonimizados.',
        'Cookies de preferencias: recuerdan tus configuraciones, como el idioma o si ya aceptaste este aviso de cookies.',
      ]},
      { type: 'info', value: 'No utilizamos cookies de publicidad ni cookies de terceros con fines de seguimiento o retargeting.' },
    ],
  },
  {
    id: 'especificas',
    title: 'Cookies específicas',
    content: [
      { type: 'text', value: 'A continuación describimos las principales cookies que puede establecer este sitio:' },
      { type: 'list', items: [
        '_blend_session: cookie técnica de sesión. Se elimina al cerrar el navegador.',
        '_blend_prefs: guarda tus preferencias de cookies. Dura 12 meses.',
        '_ga, _gid: cookies de Google Analytics para análisis de tráfico anonimo. Duran entre 24 horas y 2 años.',
      ]},
    ],
  },
  {
    id: 'terceros',
    title: 'Cookies de terceros',
    content: [
      { type: 'text', value: 'Podemos utilizar servicios de terceros que establecen sus propias cookies:' },
      { type: 'list', items: [
        'Google Analytics: para análisis de visitas y comportamiento en el sitio (datos anonimizados)',
        'Vercel: proveedor de infraestructura que puede establecer cookies técnicas de funcionamiento',
      ]},
      { type: 'text', value: 'Estos terceros tienen sus propias políticas de privacidad sobre el uso de cookies. Te recomendamos consultar sus sitios web para más información.' },
    ],
  },
  {
    id: 'gestion',
    title: 'Cómo gestionar las cookies',
    content: [
      { type: 'text', value: 'Podés controlar y/o eliminar las cookies desde la configuración de tu navegador:' },
      { type: 'list', items: [
        'Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios',
        'Firefox: Opciones > Privacidad y seguridad > Cookies y datos del sitio',
        'Safari: Preferencias > Privacidad > Gestionar datos de sitio web',
        'Edge: Configuración > Privacidad, búsqueda y servicios > Cookies',
      ]},
      { type: 'info', value: 'Tené en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio. Las cookies técnicas no pueden deshabilitarse sin impactar el funcionamiento básico.' },
    ],
  },
  {
    id: 'actualizaciones',
    title: 'Actualizaciones',
    content: [
      { type: 'text', value: 'Esta política puede actualizarse cuando incorporemos nuevas funcionalidades al sitio o cambiemos los servicios de terceros que utilizamos. La fecha de última actualización siempre estará visible al principio de esta página.' },
    ],
  },
  {
    id: 'contacto',
    title: 'Contacto',
    content: [
      { type: 'text', value: 'Para consultas sobre esta política de cookies:' },
      { type: 'contact' },
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalDocument
      title="Política de cookies"
      crumb="Cookies"
      path="/cookies"
      updated="12 de marzo de 2026"
      sections={sections}
    />
  );
}
