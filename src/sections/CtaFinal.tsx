import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { WHATSAPP_URL } from '@/src/config';

export default function CtaFinal() {
  return (
    <section className="py-24 bg-[#1a457c] text-white relative overflow-hidden">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[30px] md:h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Clean subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38bdf8] opacity-15 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Seu sorriso merece o melhor tratamento.<br/>
          <span className="text-[#38bdf8]">E você merece se olhar no espelho com orgulho.</span>
        </h2>
        
        <p className="text-xl text-blue-50 mb-6 leading-relaxed">
          Adiar essa decisão apenas prolonga a sua insatisfação e insegurança.
        </p>
        <p className="text-lg text-blue-100 mb-12">
          Você tem duas escolhas agora: continuar escondendo o seu sorriso nas fotos e sentindo desconforto ao mastigar, ou tomar a decisão de transformar a sua vida com a equipe da OdontoSmart.
        </p>
        
        <Button href={WHATSAPP_URL} className="px-10 py-5 text-xl w-full sm:w-auto mb-12 bg-[#22c55e] hover:bg-[#16a34a] border border-[#86efac]/80 shadow-[0_16px_36px_rgba(34,197,94,0.5)]">
          QUERO TRANSFORMAR MEU SORRISO AGORA
        </Button>
        
        <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <CheckCircle2 className="w-5 h-5 text-[#38bdf8] flex-shrink-0" />
            <span className="text-sm font-medium">Consulta completa com Dr. Marcus</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <CheckCircle2 className="w-5 h-5 text-[#38bdf8] flex-shrink-0" />
            <span className="text-sm font-medium">Planejamento digital 3D</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <CheckCircle2 className="w-5 h-5 text-[#38bdf8] flex-shrink-0" />
            <span className="text-sm font-medium">Procedimentos rápidos e sem dor</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <CheckCircle2 className="w-5 h-5 text-[#38bdf8] flex-shrink-0" />
            <span className="text-sm font-medium">Resultado natural e personalizado</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm sm:col-span-2 justify-center">
            <CheckCircle2 className="w-5 h-5 text-[#38bdf8] flex-shrink-0" />
            <span className="text-sm font-medium">Implantes com garantia de osseointegração</span>
          </div>
        </div>
      </div>
    </section>
  );
}
