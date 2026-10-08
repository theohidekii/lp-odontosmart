import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-[#1a457c]">{question}</span>
        {isOpen ? <ChevronUp className="text-[#1a457c]" /> : <ChevronDown className="text-[#1a457c]" />}
      </button>
      <div className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
}
