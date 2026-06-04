interface LiveProjectButtonProps {
  className?: string;
  label?: string;
  href?: string;
  comingSoon?: boolean;
}

export default function LiveProjectButton({
  className = '',
  label = 'Ver proyecto',
  href = '#contacto',
  comingSoon = false,
}: LiveProjectButtonProps) {
  const base =
    'inline-block rounded-full border-2 border-[#F2E7D3] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200';

  if (comingSoon) {
    return (
      <span
        className={`${base} cursor-default text-[#F2E7D3]/50 border-[#F2E7D3]/40 ${className}`}
      >
        Coming soon
      </span>
    );
  }

  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`${base} text-[#F2E7D3] hover:bg-[#F2E7D3]/10 ${className}`}
    >
      {label}
    </a>
  );
}
