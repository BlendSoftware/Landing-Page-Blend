import type { Metadata } from 'next';
import LegalDocument, { type LegalSection } from '@/components/ui/LegalDocument/LegalDocument';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Términos y condiciones',
  description: 'Términos y condiciones que rigen el uso del sitio web y la contratación de los servicios de Blend Software.',
  path: '/terminos',
  noSocial: true,
});

const sections: LegalSection[] = [
  {
    id: 'aceptacion',
    title: 'Aceptación de los términos',
    content: [
      { type: 'text', value: 'Al acceder y utilizar el sitio web de Blend Software (blendsoftware.tech) o al contratar cualquiera de nuestros servicios, aceptás quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debés utilizar nuestros servicios.' },
      { type: 'info', value: 'Estos términos pueden actualizarse periódicamente. La versión vigente siempre estará disponible en esta página, con la fecha de última modificación indicada.' },
    ],
  },
  {
    id: 'servicios',
    title: 'Descripción de los servicios',
    content: [
      { type: 'text', value: 'Blend Software provee servicios de desarrollo de software a medida, automatización de procesos, integraciones de sistemas y soluciones con inteligencia artificial para empresas.' },
      { type: 'text', value: 'Los alcances, plazos, precios y condiciones específicas de cada proyecto se definen en un acuerdo o propuesta comercial firmado entre ambas partes. En caso de contradicción entre estos términos generales y el acuerdo específico del proyecto, prevalece el acuerdo específico.' },
    ],
  },
  {
    id: 'propiedad-intelectual',
    title: 'Propiedad intelectual',
    content: [
      { type: 'text', value: 'Todo el software, código fuente, diseños, documentación y demas material desarrollado específicamente para un cliente pasa a ser propiedad del cliente una vez acreditado el pago total acordado, salvo que el contrato específico establezca lo contrario.' },
      { type: 'text', value: 'Blend Software retiene la propiedad de:' },
      { type: 'list', items: [
        'Bibliotecas, frameworks y componentes reutilizables desarrollados previamente',
        'Metodologías, procesos y know-how interno',
        'Herramientas y utilidades de uso transversal entre proyectos',
        'Todo el contenido del sitio web de Blend Software (textos, diseños, logotipos)',
      ]},
    ],
  },
  {
    id: 'pagos',
    title: 'Condiciones de pago',
    content: [
      { type: 'text', value: 'Las condiciones de pago se establecen en la propuesta comercial de cada proyecto. Como regla general:' },
      { type: 'list', items: [
        'Los proyectos se facturan por hitos o etapas acordadas previamente',
        'El pago inicial (adelanto) es requisito para comenzar el desarrollo',
        'Los pagos no realizados en término pueden suspender el trabajo hasta su regularización',
        'Los presupuestos tienen una validez de 30 días a partir de su emisión',
      ]},
      { type: 'info', value: 'No se realizan devoluciones por trabajo ya entregado y aprobado. En caso de cancelación del proyecto, se factura el trabajo realizado hasta la fecha de notificación.' },
    ],
  },
  {
    id: 'confidencialidad',
    title: 'Confidencialidad',
    content: [
      { type: 'text', value: 'Ambas partes se comprometen a mantener la confidencialidad de la información técnica, comercial y de negocio intercambiada durante la relación comercial.' },
      { type: 'text', value: 'Blend Software no divulgará información confidencial del cliente a terceros sin autorización expresa, excepto cuando la ley lo requiera. Esta obligación permanece vigente durante 3 años después de la finalización de la relación comercial.' },
    ],
  },
  {
    id: 'limitacion',
    title: 'Limitación de responsabilidad',
    content: [
      { type: 'text', value: 'Blend Software no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del software desarrollado, incluyendo pérdida de beneficios, datos o fondo de comercio.' },
      { type: 'text', value: 'La responsabilidad total de Blend Software, por cualquier causa, no excederá el monto efectivamente pagado por el cliente en los últimos 12 meses por los servicios relacionados con el reclamo.' },
    ],
  },
  {
    id: 'contacto',
    title: 'Contacto',
    content: [
      { type: 'text', value: 'Para consultas sobre estos términos y condiciones:' },
      { type: 'contact' },
    ],
  },
];

export default function TerminosPage() {
  return (
    <LegalDocument
      title="Términos y condiciones"
      crumb="Términos y condiciones"
      path="/terminos"
      updated="12 de marzo de 2026"
      sections={sections}
    />
  );
}
