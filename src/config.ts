// Dados de contato e rastreamento da landing page.

/** +55 61 8230-0181 — sem espaços para wa.me */
export const WHATSAPP_E164 = '556182300181';
export const WHATSAPP_PRESET_MESSAGE = 'Olá, quero fazer um agendamento';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(WHATSAPP_PRESET_MESSAGE)}`;
export const GOOGLE_ADS_ID = 'AW-10784260927';

export const COMPARISON_ROWS = [
  { trait: 'Planejamento', conventional: 'Moldes de massinha (desconfortáveis)', odonto: 'Câmera Intraoral (rápido e limpo)' },
  { trait: 'Previsibilidade', conventional: 'Surpresa no final do tratamento', odonto: 'Aprova o sorriso antes de começar (DDS)' },
  { trait: 'Naturalidade', conventional: 'Dentes opacos e artificiais (“tecla de piano”)', odonto: 'Translucidez e textura de dente natural' },
  { trait: 'Dor no implante', conventional: 'Pós-operatório doloroso e inchado', odonto: 'Cirurgia guiada minimamente invasiva' },
  { trait: 'Tempo de resultado', conventional: 'Meses de espera', odonto: 'Dias (ou até carga imediata)' },
  { trait: 'Durabilidade', conventional: 'Manutenção frequente', odonto: 'Materiais premium de altíssima duração' },
] as const;
