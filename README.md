<div align="center">

# 🦷 OdontoSmart — Landing Page

**Landing page de conversão para uma clínica odontológica em Santa Maria (DF), com foco em agendamento pelo WhatsApp, SEO técnico e carregamento rápido no celular.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
![Status](https://img.shields.io/badge/status-em_produção-brightgreen)

**[odontosmartdf.com](https://odontosmartdf.com)**

</div>

---

## Visão geral

Página única pensada para tráfego pago (Google Ads e Meta Ads). Cada seção conduz o visitante de um problema (sorriso, dor, insegurança) até a chamada para agendar pelo WhatsApp. Cada clique no WhatsApp é registrado como conversão.

| Seção | Objetivo |
| --- | --- |
| Hero | Proposta de valor, carrossel de antes/depois e CTA principal |
| O problema | Conectar com a dor do paciente |
| A solução | Tratamentos oferecidos |
| Diferenciais | Tecnologia e atendimento |
| Comparação | Tratamento convencional × OdontoSmart (cartões no mobile, tabela no desktop) |
| Como funciona | Os três passos até o tratamento |
| Credibilidade | Equipamentos e procedimentos |
| Sinais de alerta | Gatilhos para procurar avaliação |
| Localização | Mapa, endereço e horários |
| CTA final + FAQ | Quebra de objeções e último convite |

## Destaques técnicos

- **Conversão rastreada:** todo link de WhatsApp dispara `generate_lead` + `conversion` no Google Ads e `Lead` no Meta Pixel (quando o Pixel estiver instalado) (`src/lib/tracking.ts`). Os eventos só disparam se os scripts estiverem carregados, então a página nunca quebra sem eles.
- **SEO técnico:** `lang="pt-BR"`, meta description, Open Graph e Twitter Cards, `robots.txt` e `sitemap.xml`.
- **Performance:** imagens em WebP, a primeira do carrossel com `fetchPriority="high"` e as demais com `loading="lazy"`; assets versionados com cache imutável de 1 ano e `index.html` sempre revalidado (`vercel.json`, `serve.json` e `_headers` cobrem Vercel, `serve` e Netlify/Cloudflare).
- **Acessibilidade:** carrossel com `aria-label`, `role="tablist"` e alvos de toque de 40 px; foco visível em todos os botões.
- **Mobile-first:** a tabela de comparação vira cartões empilhados no celular, sem rolagem horizontal.

## Estrutura

```text
src/
├── App.tsx                  # Monta as seções na ordem da página
├── config.ts                # WhatsApp, ID do Google Ads e dados da comparação
├── lib/tracking.ts          # Eventos de conversão (Meta Pixel + Google Ads)
├── components/
│   ├── HeroCarousel.tsx     # Carrossel automático com controles acessíveis
│   ├── icons.tsx            # Ícones SVG próprios (WhatsApp, estrela etc.)
│   └── ui/                  # Button (com rastreio) e AccordionItem
└── sections/                # Uma seção da página por arquivo
```

Para trocar o número de WhatsApp, a mensagem padrão ou o ID de conversão, edite apenas `src/config.ts`.

## Começando

Requer **Node.js 22+**.

```bash
npm ci
npm run dev        # http://localhost:3001
```

| Script | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build localmente |
| `npm start` | Serve `dist/` como SPA na porta 3001 (usado no deploy) |
| `npm run lint` | Checagem de tipos com `tsc --noEmit` |

## Deploy

Em produção via **EasyPanel** (Docker em VPS): `npm ci && npm run build`, depois `npm start`. Também funciona sem ajustes na Vercel, que lê o `vercel.json`.

A CI (GitHub Actions) roda checagem de tipos e build em cada push e pull request.

## Licença

Código-fonte e conteúdo de propriedade da OdontoSmart. Publicado como portfólio; não reutilize textos, imagens ou marca.
