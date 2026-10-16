export interface ProcessStep {
  id: string;
  title: string;
  duration: string;
  summary: string;
  description: string;
  activities: string[];
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    id: 'analisis',
    title: 'Análisis',
    duration: '1 a 2 días',
    summary: 'Entendemos cómo trabaja tu empresa y qué problema vale la pena resolver primero.',
    description:
      'Antes de escribir código nos sentamos con tu equipo para entender el negocio, los procesos actuales y el problema que querés resolver.',
    activities: [
      'Reunión inicial de 60 a 90 minutos',
      'Relevamiento de requerimientos',
      'Análisis de los procesos actuales',
      'Identificación de puntos de dolor y oportunidades',
    ],
    deliverables: ['Brief de proyecto documentado', 'Mapa del proceso actual y del deseado'],
  },
  {
    id: 'diseno',
    title: 'Diseño',
    duration: '3 a 5 días',
    summary: 'Definimos qué se construye, cómo funciona, qué integra y cuánto lleva. Todo por escrito.',
    description:
      'Con el relevamiento en mano diseñamos la arquitectura, las pantallas principales y el plan de trabajo. Sabés qué vas a recibir antes de empezar.',
    activities: [
      'Definición de la arquitectura técnica',
      'Wireframes de las pantallas principales',
      'Plan de desarrollo por etapas',
      'Estimación detallada de costos',
    ],
    deliverables: ['Propuesta técnica completa', 'Wireframes', 'Cronograma del proyecto'],
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo',
    duration: '2 a 8 semanas',
    summary: 'Construimos en ciclos cortos, con demos frecuentes para que veas avances reales.',
    description:
      'Trabajamos en iteraciones de una o dos semanas. En cada demo ves el sistema funcionando y podés pedir ajustes a tiempo, no al final.',
    activities: [
      'Sprints de 1 a 2 semanas',
      'Demos con tu equipo',
      'Pruebas y revisión de código',
      'Entorno de prueba para validar antes de publicar',
    ],
    deliverables: ['Demo funcional en cada sprint', 'Código documentado en un repositorio privado', 'Sistema en producción'],
  },
  {
    id: 'soporte',
    title: 'Soporte y evolución',
    duration: 'Continuo',
    summary: 'Después del lanzamiento seguimos: corregimos, mejoramos y sumamos funciones.',
    description:
      'El lanzamiento es el comienzo. Acompañamos el uso real del sistema, resolvemos inconvenientes y lo hacemos crecer junto con tu empresa.',
    activities: [
      'Monitoreo del sistema',
      'Corrección de errores con prioridad',
      'Actualizaciones de seguridad',
      'Nuevas funcionalidades según lo que necesites',
    ],
    deliverables: ['Tiempo de respuesta acordado', 'Canal de comunicación directo', 'Lista de mejoras priorizada'],
  },
];
