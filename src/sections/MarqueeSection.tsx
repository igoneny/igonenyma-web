import { useEffect, useRef, useState } from 'react';

interface WorkTile {
  name: string;
  category: string;
  year: string;
  from: string;
  to: string;
}

// Your real projects as a scrolling work band. Swap these tiles for image
// thumbnails once you upload the project mockups (public/projects/*.png).
const WORK: WorkTile[] = [
  { name: 'Pro Active Trainer', category: 'Web', year: '2024', from: '#5B2A14', to: '#E35336' },
  { name: 'Buy From Argentina', category: 'Web', year: '2024', from: '#6B3A1F', to: '#F4A460' },
  { name: 'Nutrialde', category: 'Centro de nutrición · Web', year: '2025', from: '#3A2410', to: '#A0522D' },
  { name: 'Digital Developers', category: 'Web', year: '2024', from: '#2A1408', to: '#C9622E' },
  { name: 'Bikain', category: 'Restaurante · Web', year: '2025', from: '#241A12', to: '#6B4A30' },
  { name: 'kiddyss', category: 'E-commerce', year: '2024', from: '#5B2A14', to: '#F4A460' },
  { name: 'chetto shoes', category: 'Packaging', year: '2024', from: '#7A3B1A', to: '#E8A06A' },
  { name: 'Condrys', category: 'Identidad · Packaging', year: '2024', from: '#A0522D', to: '#F4A460' },
  { name: 'borjas design', category: 'Identidad', year: '2024', from: '#3A1E0E', to: '#E35336' },
  { name: 'Automatizaciones e IA', category: 'IA · Workflows', year: '2024–25', from: '#2A1810', to: '#A0522D' },
];

const ROW_ONE = [...WORK.slice(0, 5), ...WORK.slice(0, 5), ...WORK.slice(0, 5)];
const ROW_TWO = [...WORK.slice(5, 10), ...WORK.slice(5, 10), ...WORK.slice(5, 10)];

function Tile({ tile }: { tile: WorkTile }) {
  return (
    <div
      className="flex flex-col justify-between rounded-2xl p-6"
      style={{
        width: '420px',
        height: '270px',
        flex: '0 0 auto',
        background: `linear-gradient(135deg, ${tile.from} 0%, ${tile.to} 100%)`,
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-light uppercase tracking-widest text-white/70">
          {tile.category}
        </span>
        <span className="text-sm font-light tracking-widest text-white/70">
          {tile.year}
        </span>
      </div>
      <span className="font-black uppercase leading-none text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
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
      style={{ background: '#1A120B' }}
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
