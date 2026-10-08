import { trackWhatsAppClick } from '@/src/lib/tracking';
import { ShieldCheck, Clock, Instagram, ArrowRight, Check, Facebook } from 'lucide-react';
import { WhatsAppIcon } from '@/src/components/icons';
import { WHATSAPP_URL } from '@/src/config';

export default function Footer() {
  return (
    <footer className="bg-[#0f294a] text-white pt-10 pb-6 border-t-4 border-[#38bdf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-8">
          {/* Col 1 — marca */}
          <div className="min-w-0 lg:max-w-none">
            <a
              href="#"
              className="mb-1.5 flex max-w-full items-center gap-3 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f294a] rounded-md"
              aria-label="OdontoSmart — Sorriso em excelência"
            >
              <img
                src="/logo-icon-footer.webp"
                alt=""
                className="h-[3.25rem] w-auto shrink-0 object-contain brightness-0 invert sm:h-[3.75rem] md:h-[4.25rem] lg:h-[4.75rem] xl:h-[5.25rem]"
                width={112}
                height={112}
                decoding="async"
              />
              <div className="min-w-0 flex-1 text-left font-[Montserrat,sans-serif]">
                <span className="block text-[1.35rem] uppercase leading-[1.05] tracking-[-0.02em] text-white sm:text-[1.5rem] md:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.9rem]">
                  <span className="font-bold">ODONTO</span>
                  <span className="font-medium">SMART</span>
                </span>
                <div className="mt-[0.35rem] flex items-center gap-2 sm:mt-1 sm:gap-2.5">
                  <span
                    className="h-px min-w-[2rem] flex-1 bg-white/85 sm:min-w-[2.5rem]"
                    aria-hidden
                  />
                  <span className="shrink-0 text-[0.5rem] font-normal uppercase leading-none tracking-[0.22em] text-white sm:text-[0.5625rem] md:text-[0.625rem]">
                    SORRISO EM EXCELÊNCIA
                  </span>
                </div>
              </div>
            </a>
            <p className="text-blue-100 text-sm leading-snug mt-0 mb-4">
              Transformando sorrisos e resgatando a autoestima com tecnologia de ponta, especialistas renomados e atendimento humanizado.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/odontosmart.santamaria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-lg hover:bg-[#38bdf8] hover:text-[#0f294a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
                aria-label="Instagram OdontoSmart Santa Maria"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="bg-white/10 p-2.5 rounded-lg hover:bg-[#38bdf8] hover:text-[#0f294a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
                aria-label="WhatsApp — agendamento"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
              </a>
              <a
                href="https://www.facebook.com/odontosmart.santamariadf/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-lg hover:bg-[#38bdf8] hover:text-[#0f294a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
                aria-label="Facebook OdontoSmart Santa Maria"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="min-w-0">
            <h3 className="text-base font-bold mb-3 text-white">Navegação</h3>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded-sm"><ArrowRight className="w-4 h-4" /> Home</a></li>
              <li><a href="#tratamentos" className="hover:text-[#38bdf8] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded-sm"><ArrowRight className="w-4 h-4" /> Tratamentos</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="hover:text-[#38bdf8] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded-sm"><ArrowRight className="w-4 h-4" /> Consulta</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="min-w-0">
            <h3 className="text-base font-bold mb-3 text-white">Tecnologias</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#38bdf8]" /> Câmera Intraoral 3D</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#38bdf8]" /> Design Digital do Sorriso</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#38bdf8]" /> Cirurgia Guiada</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#38bdf8]" /> Clareamento LED</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="min-w-0">
            <h3 className="text-base font-bold mb-3 text-white">Atendimento</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Horários</p>
                  <p className="text-sm">Seg a Sex: 9h às 18h</p>
                  <p className="text-sm">Sábados: 9h às 12h</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <ShieldCheck className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Convênios</p>
                  <p className="text-sm">Consulte os planos aceitos na consulta.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-blue-300">
          <p>© {new Date().getFullYear()} OdontoSmart. Todos os direitos reservados.</p>
          <p>Responsável Técnico: Dr. Marcus - CRO-DF 13193</p>
        </div>
      </div>
    </footer>
  );
}
