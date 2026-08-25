import { useEffect, useState } from 'react';
import HeroAboutSection from './sections/HeroAboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import ProjectPage from './pages/ProjectPage';
import { getProjectBySlug } from './data/projects';
import {
  HOME_TITLE,
  PROJECT_BASE,
  legacySlugFromHash,
  projectTitle,
  projectUrl,
  slugFromPath,
} from './router';

function Home() {
  return (
    <>
      <HeroAboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

/**
 * `path` sólo lo pasa el prerenderizado (ver src/entry-server.tsx), donde no
 * existe `window`. En el navegador se toma de la URL real.
 */
export default function App({ path: initialPath }: { path?: string }) {
  const [path, setPath] = useState(
    () => initialPath ?? (typeof window === 'undefined' ? '/' : window.location.pathname)
  );

  // Los enlaces antiguos (#/proyecto/<slug>) siguen funcionando: se reescriben
  // a la URL real sin recargar, para no romper nada que ya esté compartido.
  useEffect(() => {
    const legacy = legacySlugFromHash(window.location.hash);
    if (legacy && getProjectBySlug(legacy)) {
      const url = projectUrl(legacy);
      window.history.replaceState(null, '', url);
      setPath(url);
      window.scrollTo(0, 0);
    }
  }, []);

  // Atrás/adelante del navegador.
  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Navegación interna sin recarga. Sólo intercepta la home y las fichas de
  // proyecto: los anclas (#servicios), el formulario y los enlaces externos
  // siguen comportándose como enlaces normales.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a');
      if (!anchor) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;

      const href = anchor.getAttribute('href');
      if (!href) return;
      if (href !== '/' && !href.startsWith(PROJECT_BASE)) return;

      e.preventDefault();
      if (href === window.location.pathname) return;
      window.history.pushState(null, '', href);
      setPath(href);
      window.scrollTo(0, 0);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const slug = slugFromPath(path);
  const project = slug ? getProjectBySlug(slug) : undefined;

  // Al navegar sin recarga, el <title> del HTML se queda con el de la pagina
  // anterior. Lo sincronizamos con la ruta actual.
  useEffect(() => {
    document.title = project ? projectTitle(project) : HOME_TITLE;
  }, [project]);

  return (
    <main style={{ background: '#F0EEE8', overflowX: 'clip' }}>
      {project ? <ProjectPage project={project} /> : <Home />}
    </main>
  );
}
