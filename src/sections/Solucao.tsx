import { ShieldCheck, Sparkles, Check, Zap, Search } from 'lucide-react';

export default function Solucao() {
  return (
    <section id="tratamentos" className="scroll-mt-[4.75rem] sm:scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-32 xl:scroll-mt-36 py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a457c] mb-6">
              O sorriso que você sempre quis com resultado definitivo, segurança e tecnologia de ponta
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Imagine sorrir sem esconder os dentes, mastigar qualquer alimento com segurança e se olhar no espelho com orgulho. Na OdontoSmart, nós transformamos essa visão em realidade através de um protocolo exclusivo.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm flex-shrink-0 h-fit">
                  <Search className="w-6 h-6 text-[#1a457c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a457c] mb-1">Consulta digital completa</h3>
                  <p className="text-gray-600">Câmera intraoral 3D sem moldes de massinha desconfortáveis.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm flex-shrink-0 h-fit">
                  <ShieldCheck className="w-6 h-6 text-[#1a457c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a457c] mb-1">Implantes dentários de titânio</h3>
                  <p className="text-gray-600">Substituem definitivamente o dente perdido com estabilidade total.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm flex-shrink-0 h-fit">
                  <Sparkles className="w-6 h-6 text-[#1a457c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a457c] mb-1">Lentes de contato dental</h3>
                  <p className="text-gray-600">Facetas ultrafinas personalizadas para corrigir cor, formato e alinhamento.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm flex-shrink-0 h-fit">
                  <Zap className="w-6 h-6 text-[#1a457c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a457c] mb-1">Clareamento profissional</h3>
                  <p className="text-gray-600">Clareia até 8 tons em uma única sessão de alto impacto.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#1a457c] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
              <Sparkles className="w-12 h-12 text-[#38bdf8] mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                O resultado? Você passa a sorrir com confiança.
              </h3>
              <p className="text-lg text-blue-50 mb-6">
                A transformação é visível desde a primeira sessão. Sem dor, sem resultados artificiais e com a garantia de um trabalho feito por especialistas.
              </p>
              <div className="flex items-center gap-4 text-blue-100 font-medium">
                <Check className="w-5 h-5 text-[#38bdf8]" />
                <span>Sorriso natural</span>
              </div>
              <div className="flex items-center gap-4 text-blue-100 font-medium mt-3">
                <Check className="w-5 h-5 text-[#38bdf8]" />
                <span>Mastigação perfeita</span>
              </div>
              <div className="flex items-center gap-4 text-blue-100 font-medium mt-3">
                <Check className="w-5 h-5 text-[#38bdf8]" />
                <span>Autoestima renovada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
