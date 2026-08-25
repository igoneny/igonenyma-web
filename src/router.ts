/**
 * Rutas de proyecto.
 *
 * Cada proyecto vive en una URL real (`/proyectos/<slug>/`) que en `dist/`
 * existe como fichero HTML propio, generado por `scripts/prerender.mjs`.
 * Por eso el hosting estático las sirve sin necesitar reglas de reescritura.
 */

import type { Project } from './data/projects';

export const PROJECT_BASE = '/proyectos/';

/**
 * Títulos de página. Los usan tanto el prerenderizado (para el <title> del
 * HTML que ve Google) como la navegación en cliente (para que la pestaña no
 * se quede con el título anterior). Una sola definición para los dos.
 */
export const HOME_TITLE = 'Igone Nogales — Diseñadora gráfica y web freelance';

export function projectTitle(p: Project): string {
  return `${p.name} — ${p.meta.services ?? p.category} | Igone Nogales`;
}

export function projectUrl(slug: string): string {
  return `${PROJECT_BASE}${slug}/`;
}

/** Devuelve el slug si la ruta es la de un proyecto, o null si no lo es. */
export function slugFromPath(path: string): string | null {
  if (!path.startsWith(PROJECT_BASE)) return null;
  const rest = path.slice(PROJECT_BASE.length).replace(/\/+$/, '');
  if (rest === '' || rest.includes('/')) return null;
  return rest;
}

/** Enlaces antiguos con almohadilla: `#/proyecto/<slug>`. */
export function legacySlugFromHash(hash: string): string | null {
  const m = hash.match(/^#\/proyecto\/([^/]+)\/?$/);
  return m ? m[1] : null;
}
