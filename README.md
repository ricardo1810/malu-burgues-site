# Malu Burger’s Site

Projeto estruturado para criar o site da Malu Burger’s usando a combinação recomendada:

```txt
MazyOS = estratégia, cliente, memória, copy, SEO e marketing
Orca = execução multiagente em worktrees separados
Claude Code = construção principal do site
Matt Pocock skills = qualidade técnica, planejamento e revisão
Codex Pro = QA técnico e ajustes cirúrgicos
```

## Estrutura principal

```txt
_memoria/       contexto do negócio/projeto
identidade/     guia visual e direção de marca
briefs/         escopo e decisões do site
agents/         instruções de cada agente
outputs/        entregas intermediárias
site/           implementação final do site
```

## Worktrees Orca

```txt
C:\Users\ricar\malu-burgues-worktrees\Orquestrador
C:\Users\ricar\malu-burgues-worktrees\Brand
C:\Users\ricar\malu-burgues-worktrees\Conteudo-MazyOS
C:\Users\ricar\malu-burgues-worktrees\Site-Claude-Code
C:\Users\ricar\malu-burgues-worktrees\QA-Codex-Pro
```

## Fluxo recomendado

1. Orquestrador abre o projeto e mantém contato único com o usuário.
2. Brand extrai identidade visual e atualiza `identidade/design-guide.md`.
3. Conteudo-MazyOS cria copy, SEO local, cardápio e CTAs.
4. Orquestrador consolida `briefs/brief-final-site.md`.
5. Site-Claude-Code constrói o site em `site/`.
6. QA-Codex-Pro revisa com padrão Matt Pocock.
7. Site-Claude-Code corrige.
8. Orquestrador aprova a entrega final.

## OpenSquad oficial

Não é a base deste projeto agora. Pode ser adicionado depois, quando este fluxo virar um pipeline repetível para vários clientes.
