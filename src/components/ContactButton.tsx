interface ContactButtonProps {
  className?: string;
  label?: string;
  href?: string;
}

export default function ContactButton({
  className = '',
  label = 'Hablemos',
  href = '#contacto',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-105 ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #5B2A14 7%, #A0522D 37%, #E35336 72%, #F4A460 100%)',
        boxShadow:
          '0px 4px 4px rgba(160, 82, 45, 0.25), 4px 4px 12px #A0522D inset',
        outline: '2px solid #F5F5DC',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  );
}
