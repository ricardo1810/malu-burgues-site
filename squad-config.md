# Squad - Malu Burger’s Site

## Objetivo

Criar um site one-page para a Malu Burger’s com fidelidade visual ao Instagram da marca, foco em cardápio, combos e pedidos pelo WhatsApp.

## Regra principal

O usuário fala apenas com o Orquestrador.

## Agentes

| Agente | Ferramenta | Função |
|---|---|---|
| Orquestrador | Hermes/Orca/Claude | Coordenação geral |
| Brand | Claude + Taste/OpenSquad | Identidade visual |
| Conteudo-MazyOS | Claude + MazyOS | Copy, SEO e estratégia comercial |
| Site-Claude-Code | Claude Code | Criação do site |
| QA-Codex-Pro | Codex Pro | Revisão técnica e qualidade |

## Skills obrigatórias

### Orquestrador

- orca-worktree-orchestration
- orca-cli
- opensquad
- opensquad-squad-config
- opensquad-squad-management
- brand-aligned-website-process
- plan

### Brand

- brandkit
- high-end-visual-design
- design-taste-frontend
- brand-aligned-website-process
- redesign-existing-projects

### Conteudo-MazyOS

- mazyos/novo-projeto
- mazyos/seo
- mazyos/anuncio-google
- mazyos/atualizar
- mazyos/salvar

### Site-Claude-Code

- claude-code
- design-taste-frontend
- high-end-visual-design
- brand-aligned-website-process
- frontend-dev-server
- test-driven-development

### QA-Codex-Pro

- codex
- requesting-code-review
- systematic-debugging
- test-driven-development
- simplify-code
- redesign-existing-projects

## Conversão principal

WhatsApp.

## Seções obrigatórias

1. Hero
2. Combos em destaque
3. Cardápio
4. Sobre a Malu Burger’s
5. Diferenciais
6. Galeria
7. Localização e atendimento
8. CTA final
9. Footer

## Não negociáveis de marca

- Vermelho e amarelo como base visual.
- Hambúrguer como protagonista.
- Layout apetitoso, popular e direto.
- CTA claro para pedido.
- Visual mobile excelente.
- Site deve parecer uma extensão natural do Instagram.

## Proibido

- Estética SaaS/tech.
- Minimalismo frio.
- Paleta bege gourmet genérica.
- Gradientes roxo/azul de IA.
- Copy corporativa.
- Cards genéricos iguais.
- Visual premium distante da realidade local da hamburgueria.

## Pipeline

1. Orquestrador valida a estrutura do squad.
2. Brand gera `outputs/brand/identidade-extraida.md`.
3. Conteudo-MazyOS gera `outputs/conteudo/copy-site.md`, `seo-local.md`, `estrutura-cardapio.md` e `ctas-whatsapp.md`.
4. Orquestrador consolida `briefs/brief-final-site.md`.
5. Site-Claude-Code implementa o site em `site/`.
6. QA-Codex-Pro revisa e registra problemas em `outputs/qa/`.
7. Site-Claude-Code corrige.
8. Orquestrador faz a revisão final de marca.
