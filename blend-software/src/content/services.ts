export type ServiceId = 'software' | 'automatizacion' | 'integraciones' | 'ia';
export type Tone = 'teal' | 'gold' | 'ochre';

export interface Service {
  id: ServiceId;
  name: string;
  /** Short name for tabs and footer */
  shortName: string;
  tone: Tone;
  summary: string;
  description: string;
  features: string[];
  idealFor: string;
}

export const services: Service[] = [
  {
    id: 'software',
    name: 'Desarrollo de software a medida',
    shortName: 'Software a medida',
    tone: 'teal',
    summary: 'Sistemas de gestión y aplicaciones web construidos alrededor de cómo trabaja tu equipo.',
    description:
      'Desarrollamos sistemas de gestión, paneles internos y aplicaciones web pensados para tus procesos. Sin funciones que no usás y sin obligarte a cambiar tu forma de trabajar para encajar en un producto genérico.',
    features: [
      'Panel de administración a medida',
      'Roles y permisos por usuario',
      'Reportes automáticos',
      'Conexión con las herramientas que ya usás',
      'Preparado para crecer con tu operación',
    ],
    idealFor:
      'Empresas con procesos propios que no encuentran un sistema listo que los resuelva sin parches.',
  },
  {
    id: 'automatizacion',
    name: 'Automatización de procesos',
    shortName: 'Automatización',
    tone: 'gold',
    summary: 'Las tareas repetitivas pasan a hacerse solas: carga de datos, avisos, documentos y reportes.',
    description:
      'Detectamos las tareas que tu equipo repite todos los días y las automatizamos: copiar datos entre sistemas, enviar recordatorios, generar documentos o armar reportes. Menos trabajo manual y menos errores de tipeo.',
    features: [
      'Flujos automáticos entre sistemas',
      'Avisos y alertas por mail o mensaje',
      'Generación automática de documentos',
      'Procesamiento de datos en segundo plano',
      'Monitoreo para saber que todo corre bien',
    ],
    idealFor:
      'Equipos que pierden horas en planillas, recordatorios manuales o reportes que se arman a mano cada semana.',
  },
  {
    id: 'integraciones',
    name: 'Integración de sistemas',
    shortName: 'Integraciones',
    tone: 'teal',
    summary: 'Tu CRM, tu sistema contable y tu tienda online comparten los mismos datos, sin carga doble.',
    description:
      'Conectamos CRM, ERP, e-commerce, plataformas de pago, sistema contable y cualquier herramienta con API para que la información fluya sola y haya una única versión de cada dato.',
    features: [
      'Conexión con APIs de terceros',
      'Sincronización con CRM y ERP',
      'Integración con plataformas de pago',
      'Migración y limpieza de datos',
      'Registro de errores para detectar fallas',
    ],
    idealFor:
      'Negocios que usan varias herramientas que no se hablan entre sí y cargan el mismo dato dos o tres veces.',
  },
  {
    id: 'ia',
    name: 'Soluciones con inteligencia artificial',
    shortName: 'Inteligencia artificial',
    tone: 'ochre',
    summary: 'IA aplicada donde aporta: leer documentos, clasificar consultas y responder preguntas frecuentes.',
    description:
      'Incorporamos modelos de lenguaje donde realmente ahorran trabajo: extraer datos de facturas y contratos, clasificar consultas, asistentes internos o respuestas a preguntas frecuentes. Sin necesidad de armar un equipo de ciencia de datos.',
    features: [
      'Asistentes y chatbots para clientes o equipo interno',
      'Lectura y clasificación de documentos',
      'Extracción de datos de facturas y contratos',
      'Análisis de información con lenguaje natural',
      'Integración con OpenAI, Gemini y modelos abiertos',
    ],
    idealFor:
      'Empresas con mucho volumen de documentos, consultas repetitivas o información difícil de analizar a mano.',
  },
];
