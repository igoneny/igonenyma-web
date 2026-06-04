import { useEffect, useRef, useState } from 'react';

interface WorkTile {
  name: string;
  category: string;
  year: string;
  from: string;
  to: string;
  img?: string;
}

// Real projects as a scrolling work band. Tiles with an `img` show the mockup;
// the rest fall back to a warm gradient card.
const WORK: WorkTile[] = [
  { name: 'Pro Active Trainer', category: 'Web', year: '2024', from: '#5B2A14', to: '#E35336', img: '/Proactivetrainer-portada.png' },
  { name: 'Buy From Argentina', category: 'Web', year: '2024', from: '#6B3A1F', to: '#F4A460', img: '/buyfrom-03.png' },
  { name: 'Nutrialde', category: 'Centro de nutrición · Web', year: '2025', from: '#3A2410', to: '#A0522D', img: '/nutrialde-web.png' },
  { name: 'Digital Developers', category: 'Web', year: '2024', from: '#2A1408', to: '#C9622E', img: '/digitaldev-02.png' },
  { name: 'Bikain', category: 'Restaurante · Web', year: '2025', from: '#241A12', to: '#6B4A30', img: '/bikain-03.png' },
  { name: 'kiddyss', category: 'E-commerce', year: '2024', from: '#5B2A14', to: '#F4A460', img: '/kiddyss.png' },
  { name: 'chetto shoes', category: 'Packaging', year: '2024', from: '#7A3B1A', to: '#E8A06A', img: '/chetto-cajas-01.png' },
  { name: 'Condrys', category: 'Identidad · Packaging', year: '2024', from: '#A0522D', to: '#F4A460', img: '/condrys-01.png' },
  { name: 'borjas design', category: 'Identidad', year: '2024', from: '#3A1E0E', to: '#E35336', img: '/borjas-design-01.png' },
  { name: 'Automatizaciones e IA', category: 'IA · Workflows', year: '2024–25', from: '#2A1810', to: '#A0522D', img: '/IA-autom.png' },
];

const ROW_ONE = [...WORK.slice(0, 5), ...WORK.slice(0, 5), ...WORK.slice(0, 5)];
const ROW_TWO = [...WORK.slice(5, 10), ...WORK.slice(5, 10), ...WORK.slice(5, 10)];

function Tile({ tile }: { tile: WorkTile }) {
  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-6"
      style={{
        width: '420px',
        height: '270px',
        flex: '0 0 auto',
        background: `linear-gradient(135deg, ${tile.from} 0%, ${tile.to} 100%)`,
      }}
    >
      {tile.img && (
        <>
          <img
            src={tile.img}
            alt={tile.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 100%)',
            }}
          />
        </>
      )}
      <div className="relative flex items-center justify-between">
        <span className="text-sm font-light uppercase tracking-widest text-white/80">
          {tile.category}
        </span>
        <span className="text-sm font-light tracking-widest text-white/80">
          {tile.year}
        </span>
      </div>
      <span
        className="relative font-black uppercase leading-none text-white"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}
      >
        {tile.name}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      const next = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(next);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ background: '#000000' }}
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 — scrolls right */}
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {ROW_ONE.map((tile, i) => (
            <Tile key={`r1-${i}`} tile={tile} />
          ))}
        </div>

        {/* Row 2 — scrolls left */}
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {ROW_TWO.map((tile, i) => (
            <Tile key={`r2-${i}`} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
