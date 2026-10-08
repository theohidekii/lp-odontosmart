import { trackWhatsAppClick } from '@/src/lib/tracking';
import { MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from '@/src/components/icons';
import { Button } from '@/src/components/ui/Button';
import { WHATSAPP_URL } from '@/src/config';

export default function Localizacao() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1a457c] mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-[#38bdf8]" />
              Venha nos visitar
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Endereço</p>
                <p className="text-lg text-gray-700 font-medium">CL 116 G14, 1ºAndar - Santa Maria, Brasília - DF, 72546-200</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <div>
                  <p className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Horário de Atendimento</p>
                  <div className="flex items-start gap-2 text-gray-700">
                    <Clock className="w-5 h-5 text-[#1a457c] mt-0.5" />
                    <div>
                      <p>Segunda a Sexta: 9h às 18h</p>
                      <p>Sábados: 9h às 12h</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Contato</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackWhatsAppClick}
                    className="text-lg text-gray-700 font-medium text-[#1a457c] underline-offset-2 hover:underline"
                  >
                    +55 61 8230-0181
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Button
              variant="outline"
              href="https://maps.app.goo.gl/pJZdLXvTqqciS7Mr7"
              className="px-8 py-4 w-full"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Ver no Google Maps
            </Button>
            <Button href={WHATSAPP_URL} className="px-8 py-4 w-full">
              <WhatsAppIcon className="w-5 h-5 shrink-0 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
