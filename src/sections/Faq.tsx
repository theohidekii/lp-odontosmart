import { AccordionItem } from '@/src/components/ui/AccordionItem';

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-[4.75rem] sm:scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-32 xl:scroll-mt-36 py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a457c] mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600">Tire suas dúvidas sobre os tratamentos estéticos e implantes.</p>
        </div>

        <div className="space-y-2">
          <AccordionItem 
            question="Colocar implante dói?" 
            answer="Não. O procedimento é realizado com anestesia local e, em muitos casos, de forma minimamente invasiva (cirurgia guiada). O pós-operatório costuma ser muito tranquilo, controlado apenas com analgésicos comuns." 
          />
          <AccordionItem 
            question="Quanto tempo demora para colocar um implante?" 
            answer="A cirurgia em si é rápida, muitas vezes durando menos de uma hora por implante. O tempo total do tratamento depende se é possível fazer a carga imediata (dente no mesmo dia) ou se é necessário aguardar a osseointegração (alguns meses)." 
          />
          <AccordionItem 
            question="As lentes de contato dental ficam com aspecto artificial?" 
            answer="De forma alguma. Utilizamos porcelanas de alta tecnologia que imitam a translucidez e a textura dos dentes naturais. O planejamento digital garante que o formato e a cor combinem perfeitamente com o seu rosto." 
          />
          <AccordionItem 
            question="Qual a durabilidade das lentes de contato?" 
            answer="Com os cuidados adequados de higiene e visitas regulares ao dentista, as lentes de porcelana podem durar 10, 15 anos ou mais. Elas são extremamente resistentes e não mancham com café ou vinho." 
          />
          <AccordionItem 
            question="O clareamento causa muita sensibilidade?" 
            answer="Utilizamos protocolos modernos e géis dessensibilizantes que reduzem drasticamente a sensibilidade. A maioria dos pacientes relata um desconforto mínimo ou nulo durante e após a sessão." 
          />
          <AccordionItem 
            question="Não tenho osso suficiente, posso fazer implante?" 
            answer="Sim. Hoje existem técnicas avançadas de enxerto ósseo e implantes curtos que viabilizam o tratamento mesmo para pacientes que perderam dentes há muito tempo." 
          />
          <AccordionItem 
            question="Posso fazer clareamento e lentes juntos?" 
            answer="Sim, é muito comum! Geralmente fazemos o clareamento primeiro para definir a cor base dos seus dentes naturais, e depois confeccionamos as lentes (para os dentes que precisam de correção de formato) na mesma cor alcançada." 
          />
          <AccordionItem 
            question="Quantas lentes preciso colocar?" 
            answer="Depende do seu objetivo e da amplitude do seu sorriso. Algumas pessoas precisam de apenas 4 a 6 lentes nos dentes da frente, enquanto outras optam por 8 a 10 para uma transformação completa. Avaliaremos isso no seu planejamento." 
          />
          <AccordionItem 
            question="O implante tem garantia?" 
            answer="Trabalhamos com as melhores marcas de implantes do mercado, que possuem altíssimas taxas de sucesso (acima de 98%). Oferecemos todo o suporte e acompanhamento para garantir a osseointegração perfeita." 
          />
          <AccordionItem 
            question="Como funciona o pagamento? Vocês parcelam?" 
            answer="Sim! Acreditamos que o sorriso dos sonhos deve ser acessível. Oferecemos diversas formas de pagamento e parcelamento facilitado. Explicaremos todas as opções após a sua consulta." 
          />
          <AccordionItem 
            question="Tenho muito medo de dentista, o que fazer?" 
            answer="Nossa clínica foi desenhada para ser um ambiente acolhedor e relaxante. Nossa equipe é treinada para um atendimento humanizado, respeitando o seu tempo. Explicamos cada passo para que você sinta total segurança." 
          />
          <AccordionItem 
            question="Consigo fazer tudo em uma única visita?" 
            answer="Alguns procedimentos, como o clareamento a laser, são finalizados em uma sessão. Implantes com carga imediata também permitem sair com dentes fixos no mesmo dia. Lentes de contato geralmente exigem de 2 a 3 sessões (consulta/preparo, prova e cimentação)." 
          />
        </div>
      </div>
    </section>
  );
}
