import { WhatsAppIcon } from '@/src/components/icons';
import { Button } from '@/src/components/ui/Button';
import { WHATSAPP_URL } from '@/src/config';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 flex items-center justify-between">
        <a
          href="#"
          className="flex min-w-0 max-w-[min(100%,calc(100vw-10rem))] shrink-0 items-center gap-2.5 leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a457c] focus-visible:ring-offset-0 rounded-md sm:max-w-none sm:gap-3 md:gap-4"
          aria-label="OdontoSmart — Sorriso em excelência"
        >
          <img
            src="/logo-icon-header.webp"
            alt=""
            className="h-11 w-auto shrink-0 object-contain sm:h-[3.25rem] md:h-[3.75rem] lg:h-[4.25rem] xl:h-[4.75rem]"
            width={112}
            height={112}
            decoding="async"
          />
          <div className="min-w-0 flex-1 text-left font-[Montserrat,sans-serif] sm:flex-none">
            <span className="block text-[1.05rem] uppercase leading-[1.05] tracking-[-0.02em] text-[#1a457c] sm:text-[1.35rem] md:text-[1.5rem] lg:text-[1.65rem] xl:text-[1.75rem]">
              <span className="font-bold">ODONTO</span>
              <span className="font-medium">SMART</span>
            </span>
            <div className="mt-[0.3rem] flex items-center gap-1.5 sm:mt-[0.35rem] sm:gap-2 md:gap-2.5">
              <span
                className="h-px min-w-[1.25rem] flex-1 bg-[#1a457c]/45 sm:min-w-[2rem] md:min-w-[2.5rem]"
                aria-hidden
              />
              <span className="shrink-0 text-[0.45rem] font-normal uppercase leading-none tracking-[0.2em] text-[#1a457c] sm:text-[0.5rem] sm:tracking-[0.22em] md:text-[0.5625rem] lg:text-[0.625rem]">
                SORRISO EM EXCELÊNCIA
              </span>
            </div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          <a href="#tratamentos" className="text-gray-700 hover:text-[#1a457c] font-semibold transition-colors text-base lg:text-lg leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a457c] rounded-sm">Tratamentos</a>
          <a href="#diferenciais" className="text-gray-700 hover:text-[#1a457c] font-semibold transition-colors text-base lg:text-lg leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a457c] rounded-sm">Diferenciais</a>
          <a href="#faq" className="text-gray-700 hover:text-[#1a457c] font-semibold transition-colors text-base lg:text-lg leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a457c] rounded-sm">Dúvidas</a>
          <Button href={WHATSAPP_URL} className="px-5 py-2.5 text-sm lg:text-base min-h-0 shadow-md hover:shadow-lg hover:-translate-y-px">
            <WhatsAppIcon className="w-4 h-4 shrink-0 lg:w-5 lg:h-5 mr-2" />
            Agendar Consulta
          </Button>
        </div>
      </div>
    </header>
  );
}
