export interface GalleryItem {
  src?: string;
  wide?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  liveUrl?: string;
  meta: {
    published?: string;
    services?: string;
    sector?: string;
    client?: string;
  };
  description: string;
  thumb?: string; // home grid thumbnail (falls back to `hero`)
  hero: string;
  gallery: GalleryItem[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'proactive-trainer',
    name: 'ProActive Trainer',
    category: 'Web',
    liveUrl: 'https://proactivetrainer.com/',
    meta: { published: '2024', services: 'Diseño y desarrollo web', sector: 'Fitness', client: 'ProActive Trainer' },
    description:
      'Diseño y desarrollo de la web de ProActive Trainer: una presencia clara y dinámica pensada para captar clientes y transmitir energía desde el primer scroll.',
    thumb: '/home-proactive.webp',
    hero: '/cabecera-proactive.webp',
    gallery: [],
  },
  {
    slug: 'nutrialde',
    name: 'Nutrialde',
    category: 'Identidad & Web',
    liveUrl: 'https://www.nutrialde.com/',
    meta: { published: '2025', services: 'Identidad + Web', sector: 'Nutrición', client: 'Nutrialde' },
    description:
      'Identidad visual y sitio web para Nutrialde, centro de nutrición. Un sistema cercano y de confianza que facilita la captación de pacientes.',
    thumb: '/nutrialde-macbook.webp',
    hero: '/nutrialde-rotulacion.webp',
    gallery: [
      { src: '/nutrialde-macbook.webp', wide: true },
      { src: '/nutrialde-papeleria.webp' },
      { src: '/nutrialde-carpeta.webp' },
    ],
  },
  {
    slug: 'digital-developers',
    name: 'Digital Developers',
    category: 'Identidad & Web',
    liveUrl: 'https://digitaldevelopers.es/',
    meta: { published: '2024', services: 'Identidad + Web', sector: 'Tecnología', client: 'Digital Developers' },
    description:
      'Identidad y web para Digital Developers. Un lenguaje visual moderno y técnico que refleja su enfoque en tecnología, diseño y equipo.',
    thumb: '/digitaldev-macbook.webp',
    hero: '/cabecera-digital-dev.webp',
    gallery: [
      { src: '/digitaldev-macbook.webp', wide: true },
      { src: '/digitaldev-id.webp' },
      { src: '/digitaldev-05.webp' },
    ],
  },
  {
    slug: 'sakura',
    name: 'Sakura',
    category: 'Identidad & Packaging',
    meta: { published: '2025', services: 'Identidad + Packaging', sector: 'Restaurante japonés', client: 'Sakura' },
    description:
      'Identidad y packaging para Sakura, restaurante japonés. Un universo visual entre lo tradicional y lo contemporáneo: del logo a las tarjetas, la mesa y el packaging.',
    thumb: '/sakura-tarjetas.webp',
    hero: '/sakura-packaging.webp',
    gallery: [
      { src: '/sakura-tarjetas.webp', wide: true },
      { src: '/sakura-mesa.webp' },
      { src: '/sakura-sushi.webp' },
    ],
  },
  {
    slug: 'chetto-packaging',
    name: 'Chetto',
    category: 'Packaging',
    meta: { published: '2024', services: 'Packaging', sector: 'Calzado', client: 'Chetto' },
    description:
      'Diseño de packaging para Chetto: cajas con carácter, combinando color, funcionalidad y una identidad reconocible en el punto de venta.',
    hero: '/chetto-cajas.webp',
    gallery: [{ src: '/chetto-cajas.webp', wide: true }, {}, {}],
  },
  {
    slug: 'chetto-stands',
    name: 'Chetto',
    category: 'Stands',
    meta: { published: '2024', services: 'Stands / Retail', sector: 'Calzado', client: 'Chetto' },
    description:
      'Diseño de stands para Chetto: espacios de marca pensados para destacar en ferias y retail, coherentes con su universo visual.',
    hero: '/chetto-stand.webp',
    gallery: [{ src: '/chetto-stand.webp', wide: true }, {}, {}],
  },
  {
    slug: 'condrys',
    name: 'Condrys',
    category: 'Identidad & Packaging',
    meta: { published: '2024', services: 'Identidad + Packaging', sector: 'Alimentación', client: 'Condrys' },
    description:
      'Identidad y packaging para Condrys. Un sistema apetecible y natural que da personalidad al producto y lo hace destacar en el lineal.',
    thumb: '/condrys-aplicacion.webp',
    hero: '/condrys-granola.webp',
    gallery: [
      { src: '/condrys-cabecera.webp', wide: true },
      { src: '/condrys-aplicacion.webp' },
      { src: '/condrys-brandboard.webp' },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
