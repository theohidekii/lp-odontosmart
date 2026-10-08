import Header from '@/src/sections/Header';
import Hero from '@/src/sections/Hero';
import Problema from '@/src/sections/Problema';
import Solucao from '@/src/sections/Solucao';
import Diferenciais from '@/src/sections/Diferenciais';
import Comparacao from '@/src/sections/Comparacao';
import ComoFunciona from '@/src/sections/ComoFunciona';
import Credibilidade from '@/src/sections/Credibilidade';
import SinaisDeAlerta from '@/src/sections/SinaisDeAlerta';
import Localizacao from '@/src/sections/Localizacao';
import CtaFinal from '@/src/sections/CtaFinal';
import Faq from '@/src/sections/Faq';
import Footer from '@/src/sections/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-[#1a457c] selection:text-white">
      <Header />
      <main className="pt-[4.5rem] sm:pt-24 md:pt-28 lg:pt-28 xl:pt-32">
        <Hero />
        <Problema />
        <Solucao />
        <Diferenciais />
        <Comparacao />
        <ComoFunciona />
        <Credibilidade />
        <SinaisDeAlerta />
        <Localizacao />
        <CtaFinal />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
