import FadeIn from '../components/FadeIn';

const EMAIL = 'igonenyma@gmail.com';
const WHATSAPP_DISPLAY = '623 766 678';
const WHATSAPP_LINK = 'https://wa.me/34623766678';
const BUDGET_FORM = '/formulario.html';

const QUICK_LINKS = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
];

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/igone-nogales-yeregui/' },
  { label: 'Behance', href: 'https://www.behance.net/igonenogales' },
  { label: 'Instagram', href: 'https://www.instagram.com/igoneny/' },
];

const pill =
  'inline-flex items-center rounded-full border border-bone/30 px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-bone transition-colors duration-200 hover:bg-bone hover:text-ink';

export default function ContactSection() {
  return (
    <footer
      id="contacto"
      className="mt-10 rounded-t-[36px] bg-ink px-5 pb-10 pt-20 text-bone sm:px-8 sm:rounded-t-[48px] md:px-12 md:pb-12 md:pt-28"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={30}
        className="display whitespace-nowrap text-bone"
        style={{ fontSize: 'clamp(2.5rem, 12vw, 7.5rem)' }}
      >
        Let&apos;s talk.
      </FadeIn>

      <FadeIn
        delay={0.1}
        y={20}
        className="mt-8 flex flex-wrap gap-3 sm:mt-12"
      >
        <a href={`mailto:${EMAIL}`} className={pill}>
          {EMAIL}
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={pill}>
          WhatsApp · {WHATSAPP_DISPLAY}
        </a>
        <a href={BUDGET_FORM} className={pill}>
          Pedir presupuesto
        </a>
      </FadeIn>

      <div className="mt-16 grid gap-10 border-t border-bone/15 pt-10 sm:grid-cols-2 md:mt-24 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2">
          <p className="text-2xl font-bold leading-tight md:text-3xl">
            nyma studio
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.15em] text-bone/50">
            Igone Nogales · freelance
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-bone/40">
            / Navegación
          </p>
          <ul className="space-y-2">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-bone/80 transition-colors hover:text-bone">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-bone/40">
            / Redes
          </p>
          <ul className="space-y-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-bone/80 transition-colors hover:text-bone"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-12 text-xs uppercase tracking-[0.15em] text-bone/40">
        nyma studio — Igone Nogales · Todos los derechos reservados
      </p>
    </footer>
  );
}
