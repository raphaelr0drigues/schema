# Schema.

Plataforma de estudos com conteúdo por aula e progresso por disciplina: Modelagem de Banco de Dados (Aulas 00 a 09, sem Aula 07) e Desenvolvimento Front-End para Web (Aulas 01 a 11).

## Recursos

- dashboard responsivo e trilha por aula;
- 132 questões distintas de Front-End e 102 de MDB, sem contar paráfrases como novas questões;
- simulados de exatamente 10 questões, sem repetir famílias; distribuição alvo de 3 fáceis, 4 médias e 3 difíceis, ajustada à disponibilidade de cada aula;
- alternativas embaralhadas e correção comentada;
- questões conceituais, práticas, SQL e identificação de erros;
- 40 questões visuais iniciais com código real, tabelas e diagramas acessíveis;
- identidade por disciplina com mascote próprio: Nilo (MDB) e Pixel (Front-End);
- revisão, histórico e estatísticas em `localStorage`;
- prioridade para questões ainda não respondidas;
- funcionamento inteiramente local, sem backend ou autenticação.

## Desenvolvimento

```bash
npm install
npm run dev
```

Validação completa:

```bash
npm test
npm run build
npm run lint
```

## Estrutura de conteúdo

As disciplinas são registradas em `src/data/disciplines.ts`. Cada uma possui seu conteúdo, banco de questões e mascote próprio. **Toda disciplina nova deve definir um novo animal e um asset original**, mantendo o mesmo universo visual dos mascotes existentes. Uma questão contém ID estável, família, aula, página relacionada, assunto, dificuldade, tipo, alternativas, resposta e explicação.

Questões podem receber o campo `visual` com os tipos `code`, `diagram`, `table` ou `image`. Código permanece texto real — nunca rasterizado — para preservar nitidez, acessibilidade e rolagem no celular. O registro visual fica em `src/data/question-visuals.ts`, separado do conteúdo-base para facilitar expansão e revisão.

Os exercícios complementares são autorais e identificados como tal: a página remete ao assunto no PDF, sem atribuir o enunciado ao professor. Referências de apoio incluem documentação e exercícios públicos da MDN, GitHub Docs, Pro Git, MySQL e PostgreSQL. Os links aparecem após a correção e na revisão. Novas versões que mudam o sentido das questões recebem novos IDs, preservando os resultados anteriores no histórico.

Para adicionar uma aula, inclua o guia no arquivo de conteúdo da disciplina e pelo menos 10 famílias distintas no banco. Front-End contém 12 por aula, com margem para sorteio e equilíbrio de dificuldade. A seleção rejeita bancos insuficientes em vez de preencher vagas com duplicatas. Os testes exercitam todas as aulas e o fluxo completo de resposta, correção e histórico.

## Publicação

O workflow `.github/workflows/deploy.yml` testa, compila e publica `main` no GitHub Pages. O desenvolvimento acontece em `develop`.
