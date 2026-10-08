import { AlertCircle } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { WHATSAPP_URL } from '@/src/config';

export default function SinaisDeAlerta() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-100">
          <h2 className="text-3xl font-bold text-[#1a457c] mb-8 text-center">
            Quando você DEVE procurar o Dr. Marcus
          </h2>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">Perdeu um ou mais dentes e sente dificuldade para mastigar.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">Usa prótese removível (dentadura/roach) que machuca ou solta.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">Tem dentes muito manchados, amarelados ou escurecidos.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">Possui dentes lascados, desgastados ou com formato irregular.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">Sente vergonha de sorrir e esconde a boca com as mãos.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-red-800 font-bold text-lg mb-6">
              Atenção: Quanto antes você resolve, mais simples, rápido e barato fica o tratamento.
            </p>
            <Button href={WHATSAPP_URL} className="px-8 py-4 text-lg w-full sm:w-auto">
              QUERO AGENDAR A MINHA CONSULTA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
