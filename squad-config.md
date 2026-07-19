# Configuração operacional - Malu Burger’s Site

## Decisão de arquitetura

Usar **MazyOS + Orca + Claude Code + Codex Pro/Matt Pocock**.

Não usar OpenSquad oficial neste momento. Ele fica como opção futura para transformar este processo em pipeline repetível.

## Responsabilidades por camada

| Camada | Função |
|---|---|
| MazyOS | Memória do cliente, estratégia, copy, SEO, marketing e organização |
| Orca | Worktrees/agentes separados, execução coordenada |
| Claude Code | Construção principal do site |
| Codex Pro | QA técnico, revisão e ajustes cirúrgicos |
| Matt Pocock skills | Padrão de engenharia, planejamento, grilling, revisão e qualidade |

## Agentes

| Agente | Função | Base principal |
|---|---|---|
| Orquestrador | Coordenação e contato único | Orca + planejamento |
| Brand | Identidade visual e brand guard | MazyOS + design skills |
| Conteudo-MazyOS | Copy, SEO, cardápio e CTAs | MazyOS |
| Site-Claude-Code | Implementação do site | Claude Code + design frontend |
| QA-Codex-Pro | Revisão técnica | Codex + Matt Pocock skills |

## Skills obrigatórias por agente

### Orquestrador

- orca-cli
- orca-worktree-orchestration
- orca-multiagent-project-setup
- plan

### Brand

- brandkit
- brand-aligned-website-process
- design-taste-frontend
- high-end-visual-design
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

## Seções obrigatórias do site

1. Hero
2. Combos em destaque
3. Cardápio
4. Sobre a Malu Burger’s
5. Diferenciais
6. Galeria
7. Localização e atendimento
8. CTA final
9. Footer

## Pipeline

1. Brand atualiza `identidade/design-guide.md` e `outputs/brand/identidade-extraida.md`.
2. Conteudo-MazyOS atualiza `outputs/conteudo/`.
3. Orquestrador consolida `briefs/brief-final-site.md`.
4. Site-Claude-Code implementa em `site/`.
5. QA-Codex-Pro gera revisão em `outputs/qa/`.
6. Site-Claude-Code aplica correções.
7. Orquestrador aprova contra `briefs/quality-gates.md`.

## Regra de contato

O usuário conversa apenas com o Orquestrador.
