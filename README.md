# igonenyma-web

Portfolio de Igone Nogales — nyma studio. [igonenyma.es](https://igonenyma.es/)

## Stack

React 18 + TypeScript, Vite 5, Tailwind CSS 3 y framer-motion.
Sin backend: son ficheros estáticos.

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # compila a dist/ (incluye el prerenderizado)
npm run preview  # sirve dist/ para revisarlo antes de subir
```

## Despliegue

El hosting es estático por FTP. **No hay despliegue automático**: hay que
compilar en local y subir el contenido de `dist/` a la raíz del dominio.

```bash
npm run build
# subir TODO el contenido de dist/ a la raíz de igonenyma.es
```

Las rutas son absolutas (`/assets/...`), así que la web tiene que vivir en la
raíz del dominio, no en un subdirectorio.

## URLs

| Ruta | Qué es |
|---|---|
| `/` | la home |
| `/proyectos/<slug>/` | la ficha de cada proyecto |
| `/formulario.html` | formulario de presupuesto (`noindex`) |

Los enlaces antiguos con almohadilla (`#/proyecto/<slug>`) siguen funcionando:
`App.tsx` los reescribe a la URL nueva sin recargar.

## El paso de prerenderizado

`npm run build` hace tres cosas seguidas:

1. `vite build` — compila la app a `dist/`.
2. `vite build --ssr` — compila un bundle de servidor en `.ssr/`.
3. `node scripts/prerender.mjs` — genera **un HTML real por ruta**.

Ese tercer paso es la razón de que cada proyecto tenga su propia página con su
`<title>`, su descripción, su imagen de previsualización y su JSON-LD. Sin él,
todas las URLs devolverían el mismo HTML vacío y compartirían la misma tarjeta
al pegarlas en WhatsApp o LinkedIn.

También genera `dist/sitemap.xml` a partir de las rutas reales, así que el
sitemap no puede desincronizarse de los proyectos.

**Si añades un proyecto a `src/data/projects.ts`**, su página, su entrada en el
sitemap y su URL salen solas al compilar. Lo único que hay que hacer a mano es
su imagen de previsualización: ver abajo.

## Imágenes de previsualización

`public/og/<slug>.jpg` (1200×630) es lo que se ve al compartir cada proyecto, y
`public/og-image.jpg` lo mismo para la home. **No se generan al compilar**: son
ficheros fijos, para no meter dependencias pesadas de tratamiento de imagen en
el proyecto. Si añades un proyecto o cambias su imagen, hay que regenerar la
suya, o esa página se compartirá sin miniatura.

## Estructura

```
index.html              plantilla. Entre <!--seo:start--> y <!--seo:end-->
                        va lo que el prerenderizado sustituye por página
scripts/prerender.mjs   genera un HTML por ruta + el sitemap
src/
  App.tsx               enrutado por History API + compatibilidad con #
  router.ts             rutas y títulos (una sola fuente de verdad)
  entry-server.tsx      punto de entrada del prerenderizado
  data/projects.ts      los proyectos: textos, imágenes y metadatos
  sections/             las secciones de la home, en orden de aparición
  pages/ProjectPage.tsx la ficha de detalle de cada proyecto
  components/           FadeIn y AnimatedText (animaciones de scroll)
public/                 se copia tal cual a dist/
  formulario.html       formulario de presupuesto (Google Apps Script)
  og/                   imágenes de previsualización por proyecto
  robots.txt, favicon.svg, og-image.jpg, apple-touch-icon.png
```

## Notas

- El contenido de los proyectos se edita en `src/data/projects.ts`, no en los
  componentes.
- El formulario envía a un Apps Script cuyo `ENDPOINT` está en
  `public/formulario.html`. Guarda las respuestas en una hoja y avisa por email.
- El dominio aparece en `index.html`, `public/robots.txt` y
  `scripts/prerender.mjs` (constante `SITE`). Si cambia, hay que tocar los tres.
