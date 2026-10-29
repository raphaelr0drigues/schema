import type { QuestionVisual } from "@/types";

const code = (
  language: string,
  caption: string,
  content: string,
  highlightLines?: number[],
): QuestionVisual => ({
  type: "code",
  language,
  caption,
  content,
  highlightLines,
});

const diagram = (
  caption: string,
  nodes: { id: string; label: string; detail?: string }[],
  edges: { from: string; to: string; label?: string }[],
): QuestionVisual => ({ type: "diagram", caption, nodes, edges });

const table = (
  caption: string,
  headers: string[],
  rows: string[][],
): QuestionVisual => ({ type: "table", caption, headers, rows });

export const questionVisuals: Record<string, QuestionVisual> = {
  // Modelagem de Banco de Dados — 20 questões visuais.
  "q-018-1": diagram(
    "Observe a cardinalidade entre as entidades.",
    [
      { id: "cliente", label: "CLIENTE", detail: "id_cliente (PK)" },
      { id: "pedido", label: "PEDIDO", detail: "id_cliente (FK)" },
    ],
    [{ from: "cliente", to: "pedido", label: "1 : N" }],
  ),
  "q-021-1": diagram(
    "A chave estrangeira materializa a ligação.",
    [
      { id: "cliente", label: "CLIENTE", detail: "id (PK)" },
      { id: "pedido", label: "PEDIDO", detail: "id_cliente (FK)" },
    ],
    [{ from: "pedido", to: "cliente", label: "referencia" }],
  ),
  "q-022-1": code(
    "sql",
    "Analise a restrição aplicada ao e-mail.",
    "email VARCHAR(120) UNIQUE",
    [1],
  ),
  "q-023-1": code(
    "sql",
    "Analise a definição da coluna.",
    "data_pedido DATE NOT NULL",
    [1],
  ),
  "q-024-1": code(
    "sql",
    "Qual regra de domínio está sendo aplicada?",
    "preco DECIMAL(10,2) CHECK (preco > 0)",
    [1],
  ),
  "q-026-1": diagram(
    "A entidade central resolve a relação N:M.",
    [
      { id: "pedido", label: "PEDIDO", detail: "id_pedido" },
      { id: "item", label: "ITEM_PEDIDO", detail: "quantidade · preço" },
      { id: "produto", label: "PRODUTO", detail: "id_produto" },
    ],
    [
      { from: "pedido", to: "item", label: "1 : N" },
      { from: "item", to: "produto", label: "N : 1" },
    ],
  ),
  "q-029-1": diagram(
    "Em qual entidade deve aparecer ID_Cliente?",
    [
      { id: "cliente", label: "CLIENTE", detail: "ID_Cliente (PK)" },
      { id: "pet", label: "PET", detail: "ID_Pet (PK) · ID_Cliente (?)" },
    ],
    [{ from: "cliente", to: "pet", label: "possui" }],
  ),
  "q-030-1": diagram(
    "Consulta registra o encontro entre Pet e Veterinário.",
    [
      { id: "pet", label: "PET", detail: "ID_Pet" },
      { id: "consulta", label: "CONSULTA", detail: "Data_Hora" },
      { id: "vet", label: "VETERINÁRIO", detail: "ID_Vet" },
    ],
    [
      { from: "pet", to: "consulta", label: "1 : N" },
      { from: "consulta", to: "vet", label: "N : 1" },
    ],
  ),
  "q-031-1": diagram(
    "Aluguel possui dados próprios do evento.",
    [
      { id: "cliente", label: "CLIENTE" },
      { id: "aluguel", label: "ALUGUEL", detail: "data · valor" },
      { id: "filme", label: "FILME" },
    ],
    [
      { from: "cliente", to: "aluguel", label: "1 : N" },
      { from: "aluguel", to: "filme", label: "N : 1" },
    ],
  ),
  "q-046-1": diagram(
    "A entidade se relaciona com ela mesma em papéis diferentes.",
    [
      { id: "supervisor", label: "MÉDICO", detail: "papel: supervisor" },
      {
        id: "supervisionado",
        label: "MÉDICO",
        detail: "papel: supervisionado",
      },
    ],
    [{ from: "supervisor", to: "supervisionado", label: "supervisiona" }],
  ),
  "q-056-1": table(
    "Uma única tabela representa toda a hierarquia.",
    ["id", "tipo", "crm", "coren"],
    [
      ["1", "Médico", "123", "NULL"],
      ["2", "Enfermeiro", "NULL", "456"],
    ],
  ),
  "q-057-1": diagram(
    "As subclasses compartilham a chave da superclasse.",
    [
      { id: "func", label: "FUNCIONÁRIO", detail: "id (PK) · nome" },
      { id: "med", label: "MÉDICO", detail: "id (PK/FK) · CRM" },
      { id: "enf", label: "ENFERMEIRO", detail: "id (PK/FK) · COREN" },
    ],
    [
      { from: "func", to: "med", label: "é um" },
      { from: "func", to: "enf", label: "é um" },
    ],
  ),
  "q-058-1": table(
    "Identifique o problema de atomicidade.",
    ["cliente", "telefones"],
    [["Ana", "1199999, 1188888"]],
  ),
  "q-059-1": table(
    "A chave é composta por pedido e produto.",
    ["id_pedido", "id_produto", "nome_produto", "quantidade"],
    [["10", "3", "Teclado", "2"]],
  ),
  "q-060-1": table(
    "Observe a dependência entre atributos não-chave.",
    ["id_pedido", "cep", "cidade"],
    [["10", "08600-000", "Suzano"]],
  ),
  "q-073-1": code(
    "sql",
    "Qual operação será realizada?",
    "INSERT INTO aluno (nome, nota)\nVALUES ('Lia', 8);",
    [1, 2],
  ),
  "q-074-1": code(
    "sql",
    "Atenção à ausência de uma cláusula.",
    "UPDATE produto\nSET preco = preco * 1.10;",
    [1, 2],
  ),
  "q-076-1": code(
    "sql",
    "A consulta resume vendas por cliente.",
    "SELECT id_cliente, SUM(valor) AS total\nFROM pedido\nGROUP BY id_cliente;",
    [1, 3],
  ),
  "q-077-1": code(
    "sql",
    "O que este INNER JOIN devolve?",
    "SELECT c.nome, p.id_pedido\nFROM cliente c\nINNER JOIN pedido p\n  ON p.id_cliente = c.id_cliente;",
    [3, 4],
  ),
  "q-078-1": code(
    "sql",
    "Compare o comportamento com o INNER JOIN.",
    "SELECT c.nome, p.id_pedido\nFROM cliente c\nLEFT JOIN pedido p\n  ON p.id_cliente = c.id_cliente;",
    [3, 4],
  ),

  // Front-End — 20 questões visuais, duas por aula entre 02 e 11.
  "fe2-02-01": code(
    "html",
    "Qual região deve envolver o conteúdo principal?",
    "<header>...</header>\n<main>\n  <h1>Currículo</h1>\n</main>\n<footer>...</footer>",
    [2, 4],
  ),
  "fe2-02-02": code(
    "html",
    "Analise a primeira linha da tabela.",
    "<tr>\n  <th>Curso</th>\n  <th>Carga horária</th>\n</tr>",
    [2, 3],
  ),
  "fe2-03-01": code(
    "html",
    "O rótulo precisa apontar para o campo.",
    '<label for="email">E-mail</label>\n<input id="email" name="email">',
    [1, 2],
  ),
  "fe2-03-02": code(
    "html",
    "Qual tipo oferece validação básica nativa?",
    '<input type="?" name="email">',
    [1],
  ),
  "fe2-04-01": code(
    "css",
    "Qual declaração completa a regra?",
    "h1 {\n  color: #2563eb;\n}",
    [2],
  ),
  "fe2-04-02": code(
    "html",
    "As duas classes devem ser aplicadas ao mesmo elemento.",
    '<article class="card destaque">\n  Conteúdo\n</article>',
    [1],
  ),
  "fe2-05-01": diagram(
    "As camadas do box model, de dentro para fora.",
    [
      { id: "content", label: "CONTENT" },
      { id: "padding", label: "PADDING" },
      { id: "border", label: "BORDER" },
      { id: "margin", label: "MARGIN" },
    ],
    [
      { from: "content", to: "padding" },
      { from: "padding", to: "border" },
      { from: "border", to: "margin" },
    ],
  ),
  "fe2-05-02": code(
    "css",
    "Qual propriedade controla o peso da fonte?",
    ".titulo {\n  font-weight: 700;\n}",
    [2],
  ),
  "fe2-06-01": code(
    "css",
    "Quem se torna o flex container?",
    ".menu {\n  display: flex;\n}\n.menu > li { ... }",
    [1, 2],
  ),
  "fe2-06-02": code(
    "css",
    "Observe a direção do eixo principal.",
    ".painel {\n  display: flex;\n  flex-direction: column;\n}",
    [3],
  ),
  "fe2-07-01": code(
    "css",
    "Qual declaração ativa o Grid?",
    ".galeria {\n  display: grid;\n}",
    [2],
  ),
  "fe2-07-02": code(
    "css",
    "As três colunas devem ter a mesma fração.",
    ".galeria {\n  grid-template-columns: repeat(3, 1fr);\n}",
    [2],
  ),
  "fe2-08-01": code(
    "css",
    "A regra base atende telas pequenas.",
    ".card { width: 100%; }\n\n@media (min-width: 768px) {\n  .card { width: 50%; }\n}",
    [1, 3],
  ),
  "fe2-08-02": code(
    "html",
    "Complete a configuração responsiva da viewport.",
    '<meta name="viewport"\n  content="width=device-width, initial-scale=1">',
    [1, 2],
  ),
  "fe2-09-01": code(
    "shell",
    "Somente os arquivos escolhidos entram na área de stage.",
    'git add index.html style.css\ngit status\ngit commit -m "feat: página inicial"',
    [1],
  ),
  "fe2-09-02": code(
    "text",
    "Este arquivo evita rastrear itens locais.",
    "node_modules/\n.env\ndist/",
    [1, 2, 3],
  ),
  "fe2-10-01": code(
    "javascript",
    "Leia a propriedade nota do objeto.",
    'const aluno = { nome: "Lia", nota: 8 };\nconsole.log(aluno.nota);',
    [1, 2],
  ),
  "fe2-10-02": code(
    "javascript",
    "Arrays começam no índice zero.",
    'const cores = ["azul", "verde", "preto"];\nconsole.log(cores[1]);',
    [1, 2],
  ),
  "fe2-11-01": code(
    "javascript",
    "O envio será tratado sem recarregar a página.",
    'form.addEventListener("submit", (event) => {\n  event.preventDefault();\n  salvarDados();\n});',
    [2],
  ),
  "fe2-11-02": code(
    "javascript",
    "Observe os espaços antes e depois do nome.",
    'const nome = "  Ana  ";\nconsole.log(nome.trim());',
    [1, 2],
  ),
};
