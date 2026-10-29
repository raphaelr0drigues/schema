# Schema.

Plataforma educacional premium para estudo de Modelagem de Banco de Dados, construída a partir das Aulas 00 a 09 da disciplina (sem Aula 07, dedicada ao projeto prático).

## Recursos

- dashboard responsivo e trilha por aula;
- banco inicial de 154 questões com referência de aula e página;
- simulados de exatamente 10 questões (3 fáceis, 4 médias, 3 difíceis);
- alternativas embaralhadas e correção comentada;
- questões conceituais, práticas, SQL e identificação de erros;
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

O banco fica em `src/data/question-bank.ts`. Cada questão contém aula, página, assunto, dificuldade, tipo, alternativas, resposta e explicação. Para incluir uma nova aula, adicione suas questões ao arquivo e registre a aula na lista `lessons` em `src/App.tsx`.

## Publicação

O workflow `.github/workflows/deploy.yml` testa, compila e publica `main` no GitHub Pages. O desenvolvimento acontece em `develop`.

