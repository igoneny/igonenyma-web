import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatementSection from './sections/StatementSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <main style={{ background: '#F0EEE8', overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <StatementSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
