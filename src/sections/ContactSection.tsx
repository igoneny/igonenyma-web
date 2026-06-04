import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const EMAIL = 'igonenyma@gmail.com';
const WHATSAPP_DISPLAY = '623 766 678';
const WHATSAPP_LINK = 'https://wa.me/34623766678';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="flex flex-col items-center px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="p"
        delay={0}
        y={20}
        className="mb-6 text-center font-light uppercase tracking-widest text-[#D7E2EA] sm:mb-8"
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
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full border-2 border-[#D7E2EA] px-7 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-base"
        >
          <MessageCircle size={20} />
          WhatsApp · {WHATSAPP_DISPLAY}
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-3 rounded-full border-2 border-[#D7E2EA] px-7 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-base"
        >
          <Mail size={20} />
          Email
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full border-2 border-[#D7E2EA] px-7 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-base"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.3}
        y={10}
        className="mt-16 text-center text-xs font-light uppercase tracking-widest text-[#D7E2EA]/40 sm:mt-20"
      >
        nyma studio — Igone Nogales · solo WhatsApp para llamadas
      </FadeIn>
    </section>
  );
}
