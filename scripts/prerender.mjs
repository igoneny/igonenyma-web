/**
 * Genera un HTML real por ruta dentro de dist/.
 *
 *   dist/index.html                     la home
 *   dist/proyectos/<slug>/index.html    una ficha por proyecto
 *   dist/sitemap.xml                    todas las URLs, siempre en sync
 *
 * Se ejecuta al final de `npm run build`, después de que Vite haya compilado
 * el cliente (dist/) y el bundle de servidor (.ssr/).
 *
 * Como cada ruta existe como fichero, el hosting estático las sirve sin
 * necesitar .htaccess ni ninguna regla de reescritura.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, 'dist');
const SITE = 'https://igonenyma.es';

const { render, PROJECTS, projectTitle } = await import(
  pathToFileURL(join(ROOT, '.ssr', 'entry-server.js')).href
);

const template = await readFile(join(DIST, 'index.html'), 'utf8');

const SEO_RE = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!SEO_RE.test(template)) {
  throw new Error('No encuentro los marcadores <!--seo:start--> / <!--seo:end--> en dist/index.html');
}
if (!template.includes('<div id="root"></div>')) {
  throw new Error('No encuentro <div id="root"></div> en dist/index.html');
}

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function projectSeo(p) {
  const url = `${SITE}/proyectos/${p.slug}/`;
  const title = projectTitle(p);
  const image = `${SITE}/og/${p.slug}.jpg`;
  const desc = p.description;

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        name: p.name,
        headline: title,
        description: desc,
        url,
        image: `${SITE}${p.hero}`,
        inLanguage: 'es-ES',
        genre: p.category,
        ...(p.meta.published ? { datePublished: p.meta.published } : {}),
        ...(p.meta.client ? { sourceOrganization: { '@type': 'Organization', name: p.meta.client } } : {}),
        creator: { '@type': 'Person', '@id': `${SITE}/#igone`, name: 'Igone Nogales' },
        publisher: { '@id': `${SITE}/#studio` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Proyectos', item: `${SITE}/#proyectos` },
          { '@type': 'ListItem', position: 3, name: p.name, item: url },
        ],
      },
    ],
  };

  return `<!--seo:start-->
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}" />
    <meta name="author" content="Igone Nogales" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <meta name="theme-color" content="#F0EEE8" />

    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="nyma studio" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(desc)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(`${p.name} — ${p.category}, por Igone Nogales`)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(desc)}" />
    <meta name="twitter:image" content="${image}" />

    <script type="application/ld+json">
${JSON.stringify(ld, null, 2)
  .split('\n')
  .map((l) => '      ' + l)
  .join('\n')}
    </script>
    <!--seo:end-->`;
}

async function emit(routePath, outFile, seoBlock) {
  const body = render(routePath);
  let html = template.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (seoBlock) html = html.replace(SEO_RE, seoBlock);
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, html, 'utf8');
  return { routePath, bytes: Buffer.byteLength(html), content: Buffer.byteLength(body) };
}

const written = [];

// Home: mismo <head> que ya tiene, pero ahora con el contenido dentro del HTML.
written.push(await emit('/', join(DIST, 'index.html'), null));

// Una ficha por proyecto.
for (const p of PROJECTS) {
  written.push(
    await emit(`/proyectos/${p.slug}/`, join(DIST, 'proyectos', p.slug, 'index.html'), projectSeo(p))
  );
}

// Sitemap generado a partir de las rutas reales, para que no se desincronice.
const urls = [
  { loc: `${SITE}/`, priority: '1.0' },
  ...PROJECTS.map((p) => ({ loc: `${SITE}/proyectos/${p.slug}/`, priority: '0.8' })),
];
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8');

console.log(`\nPrerenderizado: ${written.length} paginas`);
for (const w of written) {
  console.log(
    `  ${w.routePath.padEnd(34)} ${String(w.content).padStart(7)} bytes de contenido en el HTML`
  );
}
console.log(`  sitemap.xml con ${urls.length} URLs\n`);
