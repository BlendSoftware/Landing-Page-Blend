export interface FaqItem {
  question: string;
  answer: string;
}

// Answers only restate commitments already published on the site
// (process durations, code ownership in the terms, free first call).
export const faq: FaqItem[] = [
  {
    question: '¿Cuánto cuesta desarrollar un software a medida?',
    answer:
      'Depende del alcance: cuántos procesos cubre, qué tiene que integrar y cuántas personas lo van a usar. Después de la primera conversación te enviamos una propuesta detallada y sin costo, con el precio y las etapas por escrito, antes de que decidas nada.',
  },
  {
    question: '¿Cuánto tiempo lleva un proyecto?',
    answer:
      'El análisis toma de 1 a 2 días y el diseño de la solución entre 3 y 5. El desarrollo suele llevar de 2 a 8 semanas según el tamaño. Trabajamos por etapas, así que empezás a ver partes funcionando mucho antes del final.',
  },
  {
    question: '¿El código es mío?',
    answer:
      'Sí. El software desarrollado para tu empresa pasa a ser de tu propiedad una vez abonado el total acordado, y te lo entregamos documentado en un repositorio privado. Evitamos atarte a plataformas cerradas.',
  },
  {
    question: '¿Pueden conectar el sistema nuevo con lo que ya usamos?',
    answer:
      'En la mayoría de los casos, sí. Integramos CRM, ERP, tiendas online, plataformas de pago, sistemas contables y cualquier herramienta que ofrezca una API. En el análisis inicial revisamos qué se puede conectar y cómo.',
  },
  {
    question: '¿Qué pasa después de que el sistema está funcionando?',
    answer:
      'Seguimos acompañando: monitoreo, corrección de errores, actualizaciones de seguridad y nuevas funcionalidades a medida que tu empresa cambia. El tiempo de respuesta queda acordado por escrito.',
  },
  {
    question: '¿Cómo es la primera conversación?',
    answer:
      'Es gratuita y sin compromiso. Nos contás qué querés resolver, te respondemos en menos de 48 horas hábiles con una evaluación honesta y, si tiene sentido avanzar, coordinamos una llamada de 30 a 60 minutos.',
  },
];
