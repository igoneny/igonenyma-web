import AnimatedText from '../components/AnimatedText';

export default function StatementSection() {
  return (
    <section className="px-5 py-24 sm:px-8 md:px-12 md:py-36">
      <AnimatedText
        text="De la idea al lanzamiento. Webs y marcas claras, funcionales y con intención, pensadas para moverse rápido, mantenerse simples y funcionar en el mundo real, guiadas por la claridad y el detalle."
        className="mx-auto max-w-5xl text-center font-semibold text-ink"
        style={{ fontSize: 'clamp(1.5rem, 4.5vw, 3.5rem)', lineHeight: 1.15 }}
      />
    </section>
  );
}
