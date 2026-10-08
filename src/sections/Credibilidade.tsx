import { Activity, Sparkles, Zap } from 'lucide-react';
import { MonitorPlayIcon, SunIcon } from '@/src/components/icons';

export default function Credibilidade() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a457c] mb-6">
            A tecnologia que está revolucionando a estética dental e chegou até você
          </h2>
          <p className="text-lg text-gray-600">
            Equipamentos de ponta para garantir tratamentos mais rápidos, precisos e confortáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Card 1: Câmera intraoral (Large) */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#1a457c] to-[#12315a] p-8 md:p-10 rounded-3xl shadow-lg text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 h-full">
              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm flex-shrink-0">
                <Activity className="w-12 h-12 text-[#38bdf8]" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Câmera intraoral 3D</h3>
                <p className="text-blue-50 text-lg leading-relaxed">
                  Mapeamento preciso da sua boca em minutos, eliminando os antigos e desconfortáveis moldes de massa. Mais conforto e precisão milimétrica para o seu tratamento.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: DDS */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group flex flex-col justify-center">
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#38bdf8] transition-colors">
              <MonitorPlayIcon className="w-7 h-7 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#1a457c] mb-3">Design Digital do Sorriso (DDS)</h3>
            <p className="text-gray-600">
              Software que permite a visualização do resultado final do seu sorriso antes mesmo de iniciar qualquer procedimento.
            </p>
          </div>

          {/* Card 3: Facetas */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group flex flex-col justify-center">
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#38bdf8] transition-colors">
              <Sparkles className="w-7 h-7 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#1a457c] mb-3">Facetas de alta performance</h3>
            <p className="text-gray-600">
              Laminados ultrafinos (até 0,3 mm) que garantem máxima durabilidade e uma estética incrivelmente natural.
            </p>
          </div>

          {/* Card 4: Implantes */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group flex flex-col justify-center">
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#38bdf8] transition-colors">
              <Zap className="w-7 h-7 text-[#1a457c] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#1a457c] mb-3">Implantes de carga imediata</h3>
            <p className="text-gray-600">
              Técnica avançada que possibilita, em casos indicados, que você saia com o dente fixo no mesmo dia da cirurgia.
            </p>
          </div>

          {/* Card 5: Clareamento */}
          <div className="md:col-span-2 bg-[#e0f2fe] p-8 rounded-3xl shadow-sm border border-blue-100 hover:shadow-md transition-all hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -bottom-6 -right-6 text-blue-200 opacity-40 group-hover:scale-110 transition-transform duration-700">
              <SunIcon className="w-40 h-40" />
            </div>
            <div className="relative z-10">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <SunIcon className="w-7 h-7 text-[#38bdf8]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a457c] mb-3">Clareamento LED de alta intensidade</h3>
              <p className="text-[#1a457c]/80 font-medium">
                Tecnologia que clareia até 8 tons em menos de 2 horas, com protocolos que minimizam a sensibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
