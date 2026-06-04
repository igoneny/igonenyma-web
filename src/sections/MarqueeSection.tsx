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
  { name: 'Pro Active Trainer', category: 'Web', year: '2024', from: '#18011F', to: '#7621B0' },
  { name: 'Bikain', category: 'Restaurante · Web', year: '2025', from: '#1A1A1A', to: '#3A3A3A' },
  { name: 'Nutraide', category: 'Centro de nutrición', year: '2025', from: '#0E2A1F', to: '#1F7A55' },
  { name: 'Digital Developers', category: 'Web', year: '2024', from: '#0C1430', to: '#2747B0' },
  { name: 'kiddyss', category: 'E-commerce', year: '2024', from: '#2A1410', to: '#BE4C00' },
  { name: 'chetto shoes', category: 'Packaging', year: '2024', from: '#2A0A26', to: '#B600A8' },
  { name: 'Condrys', category: 'Identidad · Packaging', year: '2024', from: '#2A1A05', to: '#C98A1E' },
  { name: 'borjas design', category: 'Identidad', year: '2024', from: '#1A0A2A', to: '#7721B1' },
  { name: 'Automatizaciones e IA', category: 'IA · Workflows', year: '2024–25', from: '#06121A', to: '#1E6E8C' },
];

const ROW_ONE = [...WORK.slice(0, 5), ...WORK.slice(0, 5), ...WORK.slice(0, 5)];
const ROW_TWO = [...WORK.slice(5), ...WORK.slice(5), ...WORK.slice(5)];

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
      style={{ background: '#0C0C0C' }}
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
