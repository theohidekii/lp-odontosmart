import { ShieldCheck, Smile, Zap, Video } from 'lucide-react';

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="scroll-mt-[4.75rem] sm:scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-32 xl:scroll-mt-36 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a457c] mb-6">
            Por que transformar seu sorriso com o Dr. Marcus é diferente de tudo que você já tentou?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a457c] transition-colors">
              <ShieldCheck className="w-8 h-8 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#1a457c] mb-4">Implantes que duram a vida toda</h3>
            <p className="text-gray-600">
              Utilizamos implantes de titânio de grau cirúrgico, garantindo estabilidade perfeita, osseointegração rápida e uma duração de décadas sem preocupações.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a457c] transition-colors">
              <Smile className="w-8 h-8 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#1a457c] mb-4">Lentes com resultado natural</h3>
            <p className="text-gray-600">
              Facetas ultrafinas personalizadas e planejamento digital prévio para evitar sorrisos artificiais. Seu sorriso fica perfeito, mas com a naturalidade que você exige.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a457c] transition-colors">
              <Zap className="w-8 h-8 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#1a457c] mb-4">Clareamento em uma sessão</h3>
            <p className="text-gray-600">
              Protocolo LED avançado que clareia até 8 tons em uma única visita, sem sensibilidade exagerada e com resultado duradouro.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a457c] transition-colors">
              <Video className="w-8 h-8 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#1a457c] mb-4">Planejamento digital 3D</h3>
            <p className="text-gray-600">
              Uso de Câmera Intraoral e Design Digital do Sorriso. Você aprova o resultado final na tela do computador antes mesmo de iniciar o tratamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
