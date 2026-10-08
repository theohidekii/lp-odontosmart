import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_CAROUSEL_SLIDES = [
  {
    src: '/Lente.webp',
    alt: 'Antes e depois da lente de contato dental.',
  },
  {
    src: '/clareamento.webp',
    alt: 'Antes e depois de clareamento dental realizado na clínica.',
  },
  {
    src: '/aparelho-dental.webp',
    alt: 'Tratamento com aparelho dental.',
  },
] as const;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const len = HERO_CAROUSEL_SLIDES.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % len);
    }, 5500);
    return () => window.clearInterval(id);
  }, [len]);

  const go = (delta: number) => {
    setActive((a) => (a + delta + len) % len);
  };

  return (
    <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[560px]">
      {HERO_CAROUSEL_SLIDES.map((slide, idx) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          loading={idx === 0 ? 'eager' : 'lazy'}
          fetchPriority={idx === 0 ? 'high' : 'auto'}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out ${
            idx === active ? 'z-[1] opacity-100' : 'z-0 opacity-0'
          }`}
        />
      ))}

      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 z-[2] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1a457c] shadow-md backdrop-blur-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a457c] md:left-3"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 z-[2] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1a457c] shadow-md backdrop-blur-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a457c] md:right-3"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        className="absolute top-4 left-0 right-0 z-[2] flex justify-center gap-2"
        role="tablist"
        aria-label="Selecionar imagem do carrossel"
      >
        {HERO_CAROUSEL_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === active}
            aria-label={`Imagem ${idx + 1} de ${len}`}
            onClick={() => setActive(idx)}
            className="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90"
          >
            <span
              className={`block h-2 rounded-full transition-all ${
                idx === active ? 'w-8 bg-white shadow' : 'w-2 bg-white/75 hover:bg-white'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
