interface LiveProjectButtonProps {
  className?: string;
  label?: string;
  href?: string;
}

export default function LiveProjectButton({
  className = '',
  label = 'Ver proyecto',
  href = '#contacto',
}: LiveProjectButtonProps) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`inline-block rounded-full border-2 border-[#F2E7D3] text-[#F2E7D3] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#F2E7D3]/10 ${className}`}
    >
      {label}
    </a>
  );
}
