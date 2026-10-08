import { AlertCircle, Frown, CameraOff, Activity } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { WHATSAPP_URL } from '@/src/config';

export default function Problema() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner (Image 2 Style) */}
        <div className="bg-gradient-to-br from-[#1a457c] to-[#2a5a9c] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative mt-12 shadow-2xl">
          
          {/* Left side: Image overlapping */}
          <div className="w-full md:w-5/12 relative flex justify-center md:justify-start">
            <div className="relative -mt-20 md:-mt-28 z-10 w-full max-w-[320px] md:max-w-none">
              <img 
                src="/image-section-problema.webp"
                alt="Retrato profissional de dentista masculino sorrindo, com jaqueta azul em consultório moderno."
                className="w-full h-[350px] md:h-[450px] object-cover object-[center_35%] rounded-[2rem] shadow-2xl border-4 md:border-8 border-white bg-white"
                loading="lazy"
                decoding="async"
              />
              {/* White card overlapping */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-2xl p-4 md:p-5 shadow-xl text-center border border-gray-100">
                <p className="font-bold text-[#1a457c] text-lg md:text-xl">Dr. Marcus</p>
                <p className="text-sm md:text-base text-gray-700 font-medium">Especialista em Estética</p>
              </div>
            </div>
          </div>

          {/* Right side: Text and CTA */}
          <div className="w-full md:w-7/12 text-center md:text-left mt-12 md:mt-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Você não está sozinho nessa insatisfação
            </h2>
            <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed">
              Muitas pessoas deixam de aproveitar os melhores momentos da vida por vergonha do próprio sorriso. Estima-se que mais de 50% dos brasileiros adultos apresentam alguma insatisfação. <br className="hidden md:block" /><br className="hidden md:block" />
              <span className="font-semibold text-white">Mas a solução é muito mais simples, rápida e indolor do que você imagina.</span>
            </p>
            <Button href={WHATSAPP_URL} className="px-8 py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] border border-[#86efac]/80 shadow-[0_14px_32px_rgba(34,197,94,0.45)]">
              QUERO FAZER MINHA CONSULTA
            </Button>
          </div>
        </div>

        {/* 4 Items Below Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {/* Item 1 */}
          <div className="flex items-start gap-4 group">
            <div className="bg-blue-50 p-2.5 rounded-xl flex-shrink-0 group-hover:bg-[#38bdf8] transition-colors">
              <CameraOff className="w-6 h-6 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-[#1a457c] font-bold mb-1.5 leading-tight">Evita sorrir nas fotos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sempre procura o melhor ângulo para esconder os dentes ou sorri de boca fechada.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 group">
            <div className="bg-blue-50 p-2.5 rounded-xl flex-shrink-0 group-hover:bg-[#38bdf8] transition-colors">
              <Frown className="w-6 h-6 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-[#1a457c] font-bold mb-1.5 leading-tight">Perdeu um ou mais dentes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sente dificuldade para mastigar e insegurança ao falar em público.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 group">
            <div className="bg-blue-50 p-2.5 rounded-xl flex-shrink-0 group-hover:bg-[#38bdf8] transition-colors">
              <AlertCircle className="w-6 h-6 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-[#1a457c] font-bold mb-1.5 leading-tight">Próteses desconfortáveis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Usa dentaduras ou pontes móveis que machucam e não trazem segurança.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-4 group">
            <div className="bg-blue-50 p-2.5 rounded-xl flex-shrink-0 group-hover:bg-[#38bdf8] transition-colors">
              <Activity className="w-6 h-6 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-[#1a457c] font-bold mb-1.5 leading-tight">Dentes manchados ou desgastados</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sente que o sorriso envelhece o seu rosto e prejudica sua imagem pessoal.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
