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

// Single source of truth for both the home grid and the project detail pages.
// `gallery` mixes real images with placeholders ({} = "imagen pendiente").
// Add more images per project by dropping them in /public and listing them here.
export const PROJECTS: Project[] = [
  {
    slug: 'proactive-trainer',
    name: 'ProActive Trainer',
    category: 'Web',
    liveUrl: 'https://proactivetrainer.com/',
    meta: { published: '2024', services: 'Diseño y desarrollo web', sector: 'Fitness', client: 'ProActive Trainer' },
    description:
      'Diseño y desarrollo de la web de ProActive Trainer: una presencia clara y dinámica pensada para captar clientes y transmitir energía desde el primer scroll.',
    hero: '/Proactivetrainer-portada.png',
    gallery: [{ src: '/Proactivetrainer-portada.png', wide: true }, {}, {}],
  },
  {
    slug: 'nutrialde',
    name: 'Nutrialde',
    category: 'Identidad & Web',
    liveUrl: 'https://www.nutrialde.com/',
    meta: { published: '2025', services: 'Identidad + Web', sector: 'Nutrición', client: 'Nutrialde' },
    description:
      'Identidad visual y sitio web para Nutrialde, centro de nutrición. Un sistema cercano y de confianza que facilita la captación de pacientes.',
    hero: '/nutrialde-web.png',
    gallery: [{ src: '/nutrialde-web.png', wide: true }, {}, {}],
  },
  {
    slug: 'digital-developers',
    name: 'Digital Developers',
    category: 'Identidad & Web',
    liveUrl: 'https://digitaldevelopers.es/',
    meta: { published: '2024', services: 'Identidad + Web', sector: 'Tecnología', client: 'Digital Developers' },
    description:
      'Identidad y web para Digital Developers. Un lenguaje visual moderno y técnico que refleja su enfoque en tecnología, diseño y equipo.',
    hero: '/digitaldev-02.png',
    gallery: [{ src: '/digitaldev-02.png', wide: true }, {}, {}],
  },
  {
    slug: 'buy-from-argentina',
    name: 'Buy from Argentina',
    category: 'Identidad & Web',
    liveUrl: 'https://buyfromargentina.com/',
    meta: { published: '2024', services: 'Identidad + Web', sector: 'E-commerce / Proxy buyer', client: 'Buy from Argentina' },
    description:
      'Identidad y web para Buy from Argentina, un servicio de compra internacional. Diseño claro y directo que genera confianza en el proceso.',
    hero: '/buyfrom-03.png',
    gallery: [{ src: '/buyfrom-03.png', wide: true }, {}, {}],
  },
  {
    slug: 'chetto-packaging',
    name: 'Chetto',
    category: 'Packaging',
    meta: { published: '2024', services: 'Packaging', sector: 'Calzado', client: 'Chetto' },
    description:
      'Diseño de packaging para Chetto: cajas con carácter, combinando color, funcionalidad y una identidad reconocible en el punto de venta.',
    hero: '/chetto-cajas-01.png',
    gallery: [{ src: '/chetto-cajas-01.png', wide: true }, {}, {}],
  },
  {
    slug: 'chetto-stands',
    name: 'Chetto',
    category: 'Stands',
    meta: { published: '2024', services: 'Stands / Retail', sector: 'Calzado', client: 'Chetto' },
    description:
      'Diseño de stands para Chetto: espacios de marca pensados para destacar en ferias y retail, coherentes con su universo visual.',
    hero: '/chetto-stand.jpeg',
    gallery: [{ src: '/chetto-stand.jpeg', wide: true }, {}, {}],
  },
  {
    slug: 'condrys',
    name: 'Condrys',
    category: 'Identidad & Packaging',
    meta: { published: '2024', services: 'Identidad + Packaging', sector: 'Alimentación', client: 'Condrys' },
    description:
      'Identidad y packaging para Condrys. Un sistema apetecible y natural que da personalidad al producto y lo hace destacar en el lineal.',
    thumb: '/aplicacion-02-ok.jpeg',
    hero: '/condrys-granola-ok.jpg',
    gallery: [
      { src: '/condrys-cabecera.png', wide: true },
      { src: '/aplicacion-02-ok.jpeg' },
      { src: '/brandboard-2026.png' },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
