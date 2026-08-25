import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Punto de entrada del prerenderizado. `scripts/prerender.mjs` llama a esto
 * una vez por ruta y escribe el HTML resultante dentro de `dist/`.
 *
 * En el navegador la app se monta con createRoot (no con hydrateRoot), así que
 * React descarta este marcado y vuelve a pintar desde cero. Es intencionado:
 * evita cualquier desajuste de hidratación con las animaciones, y como el
 * marcado prerenderizado ya sale con la opacidad inicial de framer-motion,
 * el visitante no percibe ningún salto.
 */
export function render(path: string): string {
  return renderToString(<App path={path} />);
}

// El script de prerenderizado necesita la lista de proyectos para saber qué
// rutas generar. Se reexporta aquí para tener una única fuente de verdad.
export { PROJECTS } from './data/projects';
export { projectTitle } from './router';
