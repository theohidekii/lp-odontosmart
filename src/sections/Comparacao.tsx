import { COMPARISON_ROWS } from '@/src/config';

export default function Comparacao() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-[22rem] text-center sm:max-w-2xl md:mb-12 md:max-w-none">
          <h2 className="text-balance text-lg font-bold leading-snug tracking-tight text-[#1a457c] sm:text-xl sm:leading-snug md:text-[1.65rem] md:leading-tight lg:text-3xl">
            Tratamento Convencional vs. Estética Avançada com Dr. Marcus
          </h2>
        </div>

        {/* Mobile: cartões empilhados (sem scroll horizontal) */}
        <div className="flex flex-col gap-3.5 md:hidden">
          {COMPARISON_ROWS.map((row) => (
            <article
              key={row.trait}
              className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-md"
            >
              <h3 className="border-b border-gray-100 bg-gray-50 px-4 py-3 text-left text-sm font-bold text-[#1a457c]">
                {row.trait}
              </h3>
              <div className="space-y-3 px-4 py-4">
                <div>
                  <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gray-600">
                    Tratamento convencional
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">{row.conventional}</p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-blue-50/90 px-3 py-3">
                  <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[#1a457c]/75">
                    OdontoSmart
                  </p>
                  <p className="text-sm font-semibold leading-relaxed text-[#1a457c]">{row.odonto}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: tabela */}
        <div className="hidden overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl md:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-1/3 border-b border-gray-200 bg-gray-50 p-6 font-medium text-gray-500">Característica</th>
                  <th className="w-1/3 border-b border-gray-200 bg-gray-100 p-6 text-center font-bold text-gray-600">
                    Tratamento Convencional
                  </th>
                  <th className="w-1/3 border-b border-[#1a457c] bg-[#1a457c] p-6 text-center font-bold text-white">OdontoSmart</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.trait}
                    className={`border-b border-gray-100 transition-colors hover:bg-gray-50 ${i === COMPARISON_ROWS.length - 1 ? 'border-b-0' : ''}`}
                  >
                    <td className="p-6 font-medium">{row.trait}</td>
                    <td className="p-6 text-center">{row.conventional}</td>
                    <td className="bg-blue-50/50 p-6 text-center font-bold text-[#1a457c]">{row.odonto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
