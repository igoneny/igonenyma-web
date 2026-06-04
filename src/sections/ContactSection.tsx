import { Mail, MessageCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const EMAIL = 'igonenyma@gmail.com';
const WHATSAPP_DISPLAY = '623 766 678';
const WHATSAPP_LINK = 'https://wa.me/34623766678';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/igone-nogales-yeregui/' },
  { label: 'Behance', href: 'https://www.behance.net/igonenogales' },
  { label: 'Instagram', href: 'https://www.instagram.com/igoneny/' },
];

const pill =
  'flex items-center gap-3 rounded-full border-2 border-[#F2E7D3] px-7 py-3 text-sm font-medium uppercase tracking-widest text-[#F2E7D3] transition-colors duration-200 hover:bg-[#F2E7D3]/10 sm:text-base';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="flex flex-col items-center px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36"
      style={{ background: '#1A120B' }}
    >
      <FadeIn
        as="p"
        delay={0}
        y={20}
        className="mb-6 text-center font-light uppercase tracking-widest text-[#F2E7D3] sm:mb-8"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.4rem)' }}
      >
        ¿Trabajamos juntos?
      </FadeIn>

      <FadeIn delay={0.1} y={30}>
        <a
          href={`mailto:${EMAIL}`}
          className="hero-heading block break-all text-center font-black uppercase leading-none tracking-tight transition-opacity duration-200 hover:opacity-80"
          style={{ fontSize: 'clamp(2rem, 8vw, 110px)' }}
        >
          {EMAIL}
        </a>
      </FadeIn>

      <FadeIn
        delay={0.2}
        y={20}
        className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:mt-16 sm:gap-5"
      >
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={pill}>
          <MessageCircle size={20} />
          WhatsApp · {WHATSAPP_DISPLAY}
        </a>
        <a href={`mailto:${EMAIL}`} className={pill}>
          <Mail size={20} />
          Email
        </a>
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={pill}>
            {s.label}
          </a>
        ))}
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.3}
        y={10}
        className="mt-16 text-center text-xs font-light uppercase tracking-widest text-[#F2E7D3]/40 sm:mt-20"
      >
        nyma studio — Igone Nogales · solo WhatsApp para llamadas
      </FadeIn>
    </section>
  );
}
