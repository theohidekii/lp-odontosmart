import { CheckCircle2 } from 'lucide-react';
import { HeroCarousel } from '@/src/components/HeroCarousel';
import { WhatsAppIcon, StarIcon } from '@/src/components/icons';
import { Button } from '@/src/components/ui/Button';
import { WHATSAPP_URL } from '@/src/config';

export default function Hero() {
  return (
    <section className="relative pt-0 pb-20 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 pointer-events-none">
        <div className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-blue-50/80 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#1a457c] leading-[1.15] tracking-tight mb-4 md:mb-6">
              Seu sorriso está te impedindo de viver com confiança?
            </h1>

            <div className="mb-6 flex flex-col justify-center gap-4 sm:flex-row md:mb-8 lg:justify-start">
              <Button href={WHATSAPP_URL} className="px-6 py-5 md:px-8 md:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto shadow-xl shadow-[#25D366]/20 h-auto whitespace-normal text-center">
                <WhatsAppIcon className="w-5 h-5 shrink-0 md:w-6 md:h-6 mr-2" />
                <span>QUERO TRANSFORMAR MEU SORRISO PELO WHATSAPP</span>
              </Button>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#1a457c]/80 font-medium mb-8 md:mb-10 leading-snug">
              Descubra como transformar seus dentes em poucos dias sem dor e com resultado definitivo.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
              Centenas de pacientes já recuperaram o sorriso, a autoestima e a liberdade de sorrir à vontade com os procedimentos estéticos do Dr. Marcus na OdontoSmart. Implantes definitivos, lentes de contato dental e clareamento de alto impacto com tecnologia de ponta e resultado que você vê no espelho já na primeira sessão.
            </p>
            
            <div className="flex flex-col gap-3 md:gap-4 text-left inline-flex">
              <div className="flex items-center text-gray-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] mr-3 flex-shrink-0" />
                <span>Procedimentos rápidos e sem dor</span>
              </div>
              <div className="flex items-center text-gray-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] mr-3 flex-shrink-0" />
                <span>Resultado estético imediato e duradouro</span>
              </div>
              <div className="flex items-center text-gray-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] mr-3 flex-shrink-0" />
                <span>Atendimento personalizado com Dr. Marcus</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:col-span-5 relative mt-8 md:mt-12 lg:mt-0 max-w-md mx-auto lg:max-w-none w-full">
            {/* Decorative offset border */}
            <div className="absolute inset-0 border-2 border-[#1a457c]/10 rounded-[2rem] md:rounded-[2.5rem] transform translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6"></div>
            
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-white">
              <HeroCarousel />
            </div>

            {/* Card de avaliação — abaixo do carrossel */}
            <div className="relative z-30 mt-4 flex justify-center px-1 sm:mt-5 sm:justify-start sm:px-0 md:mt-6">
              <div className="flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:max-w-none sm:justify-start sm:gap-4 md:p-4">
                <div className="flex-shrink-0 rounded-full bg-[#1a457c] p-2 text-white shadow-inner md:p-2.5">
                  <StarIcon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="min-w-0 text-left">
                <p className="text-[0.65rem] font-medium uppercase tracking-wider text-gray-700 md:text-xs">Avaliação</p>
                  <p className="text-sm font-bold text-[#1a457c] md:text-lg">5.0 no Google</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
