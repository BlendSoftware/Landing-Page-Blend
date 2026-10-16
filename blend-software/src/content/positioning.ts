export interface ComparisonRow {
  criteria: string;
  freelancer: boolean;
  agency: boolean;
}

/** How Blend positions itself; Blend covers every row. */
export const comparison: ComparisonRow[] = [
  { criteria: 'Solución a medida', freelancer: false, agency: true },
  { criteria: 'Proceso estructurado y documentado', freelancer: false, agency: true },
  { criteria: 'Hablás directo con quien desarrolla', freelancer: true, agency: false },
  { criteria: 'Entregas rápidas por etapas', freelancer: true, agency: false },
  { criteria: 'Arquitectura preparada para crecer', freelancer: false, agency: true },
  { criteria: 'Precio accesible para pymes', freelancer: true, agency: false },
  { criteria: 'Soporte después del lanzamiento', freelancer: false, agency: true },
];

export const commitments = [
  {
    title: 'El código es tuyo',
    text: 'Una vez abonado el proyecto, el software es de tu empresa y lo recibís documentado en un repositorio privado.',
  },
  {
    title: 'Estimaciones por escrito',
    text: 'Antes de empezar sabés qué se construye, en qué etapas y cuánto cuesta.',
  },
  {
    title: 'Sin atarte a plataformas cerradas',
    text: 'Elegimos tecnología abierta y conocida, para que el sistema pueda evolucionar con o sin nosotros.',
  },
  {
    title: 'Equipo chico, respuesta rápida',
    text: 'Sin intermediarios ni cadenas de aprobación: quien te escucha es quien programa.',
  },
];

export const stack = ['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Docker'];
