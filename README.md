# igonenyma-web

Portfolio de Igone Nogales — nyma studio. [igonenyma.es](https://igonenyma.es/)

## Stack

React 18 + TypeScript, Vite 5, Tailwind CSS 3 y framer-motion.
Es una SPA de una sola página larga, sin backend.

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # compila a dist/
npm run preview  # sirve dist/ para revisarlo antes de subir
```

## Despliegue

El hosting es estático por FTP. **No hay despliegue automático**: hay que
compilar en local y subir el contenido de `dist/` a la raíz del dominio.

```bash
npm run build
# subir TODO el contenido de dist/ a la raíz de igonenyma.es
```

Las rutas de `index.html` son absolutas (`/assets/...`), así que la web
tiene que vivir en la raíz del dominio, no en un subdirectorio.

## Estructura

```
index.html              <head> completo: meta, Open Graph, JSON-LD
src/
  App.tsx               enrutado por hash (#/proyecto/<slug>)
  data/projects.ts      los proyectos: textos, imágenes y metadatos
  sections/             las secciones de la home, en orden de aparición
  pages/ProjectPage.tsx la ficha de detalle de cada proyecto
  components/           FadeIn y AnimatedText (animaciones de scroll)
public/                 se copia tal cual a dist/
  formulario.html       formulario de presupuesto (Google Apps Script)
  robots.txt, sitemap.xml, favicon.svg, og-image.jpg
```

## Notas

- El contenido de los proyectos se edita en `src/data/projects.ts`, no en
  los componentes.
- El formulario de presupuesto envía a un Apps Script cuyo `ENDPOINT` está
  en `public/formulario.html`. Guarda las respuestas en una hoja de cálculo
  y avisa por email.
- `og-image.jpg` (1200×630) es la imagen que se ve al compartir el enlace.
  Si cambia la marca, hay que regenerarla.
