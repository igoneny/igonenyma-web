import { useEffect, useState } from 'react';
import HeroAboutSection from './sections/HeroAboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import ProjectPage from './pages/ProjectPage';
import { getProjectBySlug } from './data/projects';

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

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      setHash(h);
      // Jump to top only on route switches, not on in-page anchor links.
      if (h === '' || h === '#/' || h.startsWith('#/proyecto/')) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const match = hash.match(/^#\/proyecto\/(.+)$/);
  const project = match ? getProjectBySlug(match[1]) : undefined;

  return (
    <main style={{ background: '#F0EEE8', overflowX: 'clip' }}>
      {project ? <ProjectPage project={project} /> : <Home />}
    </main>
  );
}
