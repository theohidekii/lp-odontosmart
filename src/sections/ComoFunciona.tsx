import { Button } from '@/src/components/ui/Button';
import { WHATSAPP_URL } from '@/src/config';

export default function ComoFunciona() {
  return (
    <section 
      className="relative py-24 lg:py-32 bg-fixed bg-center bg-cover" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a457c]/95 to-[#1a457c]/85"></div>
      
      {/* Top Slanted Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px]">
          <path d="M1200 0L0 0 0 120 1200 0z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8 md:mt-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seu novo sorriso em 3 passos simples
          </h2>
          <p className="text-lg md:text-xl text-blue-50">
            Rápido, sem burocracia e 100% focado no seu bem-estar!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {/* Step 1 */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-5 group">
            <div className="w-14 h-14 rounded-full border-2 border-[#38bdf8] flex items-center justify-center text-[#38bdf8] font-bold text-2xl flex-shrink-0 group-hover:bg-[#38bdf8] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Agende sua Consulta</h3>
              <p className="text-blue-50 leading-relaxed text-sm lg:text-base">
                O contato é rápido pelo WhatsApp, sem taxa de consulta. Você passará por uma consulta pessoal e detalhada diretamente com o Dr. Marcus.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-5 group">
            <div className="w-14 h-14 rounded-full border-2 border-[#38bdf8] flex items-center justify-center text-[#38bdf8] font-bold text-2xl flex-shrink-0 group-hover:bg-[#38bdf8] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Planejamento Digital Completo</h3>
              <p className="text-blue-50 leading-relaxed text-sm lg:text-base">
                Realizamos todos os exames no local: Câmera Intraoral, Design Digital do Sorriso e análise completa. Tudo rápido, indolor e em um só lugar.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-5 group">
            <div className="w-14 h-14 rounded-full border-2 border-[#38bdf8] flex items-center justify-center text-[#38bdf8] font-bold text-2xl flex-shrink-0 group-hover:bg-[#38bdf8] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Realize seu Tratamento</h3>
              <p className="text-blue-50 leading-relaxed text-sm lg:text-base">
                Implante com dente provisório no mesmo dia, lentes em 2-3 sessões ou clareamento imediato. Você sai da clínica com o sorriso transformado.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button href={WHATSAPP_URL} className="px-8 py-4 text-lg bg-[#22c55e] hover:bg-[#16a34a] border border-[#86efac]/80 shadow-[0_14px_32px_rgba(34,197,94,0.45)]">
            QUERO AGENDAR A MINHA CONSULTA
          </Button>
        </div>
      </div>
    </section>
  );
}
