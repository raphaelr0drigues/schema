import type { LessonContent } from "./lesson-content";

export const frontendLessonContents: LessonContent[] = [
  {
    id: "Aula 01",
    title: "Fundamentos da Web e HTML",
    topics: "Web, HTML5 e estrutura semântica",
    parts: 1,
    summary:
      "Introdução ao funcionamento da Web e à construção de documentos HTML5, da estrutura mínima aos elementos de texto, listas, tabelas, links, imagens e hierarquia de títulos.",
    goals: [
      "Explicar a relação entre cliente, servidor e HTTP",
      "Construir uma página HTML5 válida",
      "Organizar conteúdo com elementos adequados",
    ],
    sources: ["Aula 01.pdf"],
    sections: [
      {
        title: "Como a Web entrega uma página",
        pages: "Aula 01, p. 12–15",
        body: "Front-end é a camada com a qual a pessoa interage. O navegador atua como cliente, solicita recursos a um servidor por HTTP ou HTTPS e usa URLs, domínios e DNS para localizar o destino.",
        points: [
          "Cliente solicita; servidor responde.",
          "HTTPS protege a comunicação com criptografia.",
          "Uma URL identifica um recurso na Web.",
        ],
      },
      {
        title: "Projeto e estrutura HTML5",
        pages: "Aula 01, p. 16–21",
        body: "Um projeto web organiza arquivos de marcação, estilo, scripts e mídia. No HTML5, doctype, html, head e body formam a estrutura mínima; tags e atributos descrevem o conteúdo.",
        points: [
          "HTML estrutura, CSS apresenta e JavaScript adiciona comportamento.",
          "head contém metadados; body contém o conteúdo visível.",
          "Indentação e fechamento coerente melhoram manutenção.",
        ],
        code: '<!doctype html>\n<html lang="pt-BR">\n<head><meta charset="UTF-8"><title>Página</title></head>\n<body><h1>Olá, Web!</h1></body>\n</html>',
      },
      {
        title: "Texto, listas e tabelas",
        pages: "Aula 01, p. 22–24",
        body: "Títulos h1 a h6 definem níveis, parágrafos organizam blocos de texto e listas representam sequências ou conjuntos. Tabelas são apropriadas para dados tabulares, com linhas, cabeçalhos e células.",
        points: [
          "A hierarquia de títulos comunica estrutura.",
          "ol indica ordem; ul não indica sequência.",
          "Tabelas não devem ser usadas para montar o layout.",
        ],
      },
      {
        title: "Links, imagens e semântica",
        pages: "Aula 01, p. 25–28",
        body: "Links conectam recursos por meio de href; imagens usam src e uma alternativa textual em alt. Elementos semânticos tornam a estrutura mais compreensível para navegadores, pessoas e tecnologias assistivas.",
        points: [
          "Texto do link deve indicar seu destino.",
          "alt descreve a função ou informação da imagem.",
          "A página deve ter uma hierarquia de títulos coerente.",
        ],
      },
    ],
  },
  {
    id: "Aula 02",
    title: "HTML semântico e acessível",
    topics: "Currículo, landmarks e acessibilidade",
    parts: 1,
    summary:
      "Aprofundamento da marcação HTML com títulos, listas, tabelas acessíveis, caminhos, imagens e elementos semânticos aplicados a uma página de currículo.",
    goals: [
      "Estruturar uma página com landmarks semânticos",
      "Criar tabelas e imagens mais acessíveis",
      "Distinguir caminhos relativos e absolutos",
    ],
    sources: ["Aula 02.pdf"],
    sections: [
      {
        title: "Hierarquia, listas e dados tabulares",
        pages: "Aula 02, p. 2–5",
        body: "A estrutura visual deve acompanhar a estrutura do documento. Listas agrupam itens relacionados; tabelas precisam identificar cabeçalhos e associá-los aos dados para facilitar interpretação.",
        points: [
          "Evite saltar níveis de título sem motivo.",
          "Use listas para coleções, não apenas por aparência.",
          "th identifica cabeçalhos; caption apresenta o propósito da tabela.",
        ],
      },
      {
        title: "Caminhos, links e imagens",
        pages: "Aula 02, p. 6–7",
        body: "Links podem apontar para páginas, seções ou recursos externos. Caminhos relativos dependem da localização do arquivo atual; caminhos absolutos incluem o endereço completo.",
        points: [
          "href define o destino do link.",
          "src local deve respeitar a estrutura de pastas.",
          "alt deve ser útil no contexto da página.",
        ],
      },
      {
        title: "Semântica aplicada",
        pages: "Aula 02, p. 10–12",
        body: "div e span são contêineres genéricos. Quando existe um elemento com significado adequado, como header, nav, main, section, article, aside ou footer, ele comunica melhor o papel do conteúdo.",
        points: [
          "nav identifica uma área principal de navegação.",
          "main reúne o conteúdo central único da página.",
          "section precisa representar uma seção temática.",
        ],
      },
      {
        title: "Acessibilidade e SEO",
        pages: "Aula 02, p. 13–14",
        body: "Uma marcação semântica beneficia navegação por tecnologias assistivas e ajuda mecanismos de busca a compreender a página. O exercício propõe refatorar uma estrutura genérica com elementos mais expressivos.",
        points: [
          "Semântica não é apenas escolha visual.",
          "Estrutura lógica favorece navegação por teclado e leitores de tela.",
          "Validação ajuda a encontrar erros de marcação.",
        ],
      },
    ],
  },
  {
    id: "Aula 03",
    title: "Formulários e multimídia",
    topics: "Inputs, validação, áudio, vídeo e iframe",
    parts: 1,
    summary:
      "Construção de formulários HTML, validações nativas e incorporação responsável de áudio, vídeo e conteúdo externo.",
    goals: [
      "Associar rótulos e controles de formulário",
      "Aplicar validações HTML nativas",
      "Escolher o elemento de mídia adequado",
    ],
    sources: ["Aula 03.pdf"],
    sections: [
      {
        title: "Formulários e tipos de entrada",
        pages: "Aula 03, p. 2–4",
        body: "form agrupa controles que coletam dados. label identifica cada campo e inputs especializados, como email, date, number e password, oferecem semântica e interfaces apropriadas.",
        points: [
          "for do label deve corresponder ao id do controle.",
          "name identifica o dado enviado.",
          "O tipo correto melhora entrada e validação.",
        ],
      },
      {
        title: "Interatividade e validação nativa",
        pages: "Aula 03, p. 5–7",
        body: "Elementos como details e summary oferecem interação sem script. Atributos required, min, max, minlength, maxlength e pattern restringem entradas no navegador, mas não substituem validação no servidor.",
        points: [
          "placeholder não substitui label.",
          "pattern usa uma expressão regular.",
          "Validação do cliente melhora a experiência, não garante segurança.",
        ],
      },
      {
        title: "Áudio e vídeo",
        pages: "Aula 03, p. 9",
        body: "audio e video incorporam mídia nativa. controls oferece controles ao usuário; source permite informar formatos alternativos e texto de fallback atende navegadores sem suporte.",
        points: [
          "Não dependa de reprodução automática.",
          "Legendas ampliam acessibilidade de vídeos.",
          "Formatos alternativos aumentam compatibilidade.",
        ],
      },
      {
        title: "Conteúdo externo com iframe",
        pages: "Aula 03, p. 10–11",
        body: "iframe incorpora outra página ou recurso dentro do documento. Deve ser usado com título descritivo e atenção a origem, privacidade, desempenho e permissões.",
        points: [
          "title descreve o conteúdo incorporado.",
          "Conteúdo de terceiros pode afetar desempenho.",
          "Nem todo site permite incorporação.",
        ],
      },
    ],
  },
  {
    id: "Aula 04",
    title: "CSS, Canvas e SVG",
    topics: "Seletores, especificidade e gráficos",
    parts: 1,
    summary:
      "Fundamentos do CSS e sua organização, seguidos de uma visão prática sobre gráficos rasterizados por Canvas e vetoriais com SVG.",
    goals: [
      "Escrever regras e seletores CSS",
      "Prever conflitos de especificidade",
      "Comparar Canvas e SVG",
    ],
    sources: ["Aula 04.pdf"],
    sections: [
      {
        title: "Sintaxe e seletores CSS",
        pages: "Aula 04, p. 2–3",
        body: "Uma regra CSS associa seletores a declarações de propriedade e valor. O arquivo externo, ligado por link no head, favorece reutilização. Seletores podem apontar elementos, classes, IDs, atributos e relações.",
        points: [
          "A declaração termina com ponto e vírgula.",
          "Classes são reutilizáveis.",
          "Combinadores expressam relações entre elementos.",
        ],
        code: "h1 { color: #2c3e50; }\n.destaque { background: #e74c3c; color: white; }",
      },
      {
        title: "Classes, cascata e especificidade",
        pages: "Aula 04, p. 4–5",
        body: "Um elemento pode combinar várias classes. Quando regras entram em conflito, origem, importância, especificidade e ordem participam da cascata; na comparação apresentada, inline supera ID, classe e elemento.",
        points: [
          "Em empate de especificidade, a regra posterior vence.",
          "!important dificulta manutenção quando usado sem critério.",
          "Baixa especificidade torna o CSS mais previsível.",
        ],
      },
      {
        title: "Organização modular",
        pages: "Aula 04, p. 6–7",
        body: "Separar estilos por responsabilidade ajuda projetos a crescer. Variáveis em :root centralizam valores e var() os reutiliza; nomes descritivos facilitam leitura e manutenção.",
        points: [
          "Variáveis reduzem repetição de valores.",
          "Arquivos podem separar base, componentes e páginas.",
          "O HTML deve vincular corretamente a folha de estilos.",
        ],
      },
      {
        title: "Canvas e SVG",
        pages: "Aula 04, p. 8–11",
        body: "Canvas oferece uma área de desenho controlada por JavaScript, adequada a desenho dinâmico e jogos. SVG descreve formas vetoriais no HTML, escala sem perder qualidade e pode receber estilo CSS.",
        points: [
          "Canvas desenha pixels por meio de um contexto.",
          "viewBox define o sistema de coordenadas do SVG.",
          "SVG é apropriado para ícones, logotipos e ilustrações.",
        ],
      },
    ],
  },
  {
    id: "Aula 05",
    title: "CSS visual e modelo de caixa",
    topics: "Tipografia, cores, box model e estados",
    parts: 1,
    summary:
      "Construção da identidade visual com tipografia, cores, estados de interação, tabelas, bordas, fundos, sombras e o modelo de caixa.",
    goals: [
      "Aplicar estilos preservando contraste e foco",
      "Dominar o modelo de caixa",
      "Usar transições com responsabilidade",
    ],
    sources: ["Aula 05.pdf"],
    sections: [
      {
        title: "Tipografia, cor e contraste",
        pages: "Aula 05, p. 2–5",
        body: "CSS controla apresentação sem alterar o significado do HTML. Famílias, tamanhos, pesos e espaçamentos tipográficos estabelecem hierarquia; cores precisam manter contraste suficiente.",
        points: [
          "Não dependa apenas da cor para comunicar estado.",
          "Unidades relativas favorecem adaptação.",
          "Contraste é requisito de legibilidade.",
        ],
      },
      {
        title: "Estados, listas e tabelas",
        pages: "Aula 05, p. 6–8",
        body: "Links possuem estados como hover, focus e visited. Listas podem formar menus sem perder sua estrutura, e tabelas podem ganhar leitura com bordas e pseudo-classes posicionais.",
        points: [
          "O foco visível é essencial para teclado.",
          ":nth-child seleciona itens pela posição.",
          "O estilo não deve remover informação sem alternativa.",
        ],
      },
      {
        title: "Box model e box-sizing",
        pages: "Aula 05, p. 9–13",
        body: "Cada elemento é composto por conteúdo, padding, border e margin. Com box-sizing: border-box, largura e altura declaradas incluem padding e borda, tornando dimensões mais previsíveis.",
        points: [
          "Padding é espaço interno.",
          "Margin separa elementos externamente.",
          "Especificidade ainda decide conflitos de estilo.",
        ],
      },
      {
        title: "Pseudo-elementos, transformações e movimento",
        pages: "Aula 05, p. 16–19",
        body: "::before e ::after criam conteúdo de apresentação. transition suaviza mudanças e transform altera escala, posição ou rotação; preferências de redução de movimento devem ser respeitadas.",
        points: [
          "Pseudo-elementos não substituem conteúdo essencial.",
          "Transição precisa indicar propriedades e duração.",
          "prefers-reduced-motion reduz desconforto para pessoas sensíveis.",
        ],
      },
    ],
  },
  {
    id: "Aula 06",
    title: "Layouts com Flexbox",
    topics: "Eixos, alinhamento, quebra e dimensionamento",
    parts: 1,
    summary:
      "Criação de layouts unidimensionais flexíveis, com domínio de contêiner, itens, eixos, distribuição, alinhamento, espaçamento e quebra.",
    goals: [
      "Identificar eixo principal e transversal",
      "Distribuir e alinhar itens",
      "Escolher Flexbox para problemas unidimensionais",
    ],
    sources: ["Aula 06.pdf"],
    sections: [
      {
        title: "Contêiner e itens flexíveis",
        pages: "Aula 06, p. 2–10",
        body: "display: flex transforma os filhos diretos em itens flexíveis. O contêiner controla fluxo e alinhamento; propriedades nos itens controlam crescimento, redução e comportamento individual.",
        points: [
          "Somente filhos diretos viram flex items.",
          "Flexbox atua em uma dimensão por vez.",
          "O conteúdo continua influenciando o tamanho.",
        ],
        code: ".lista { display: flex; gap: 1rem; }",
      },
      {
        title: "Eixos e direção",
        pages: "Aula 06, p. 11–16",
        body: "flex-direction define o eixo principal como linha ou coluna e também pode inverter a ordem visual. O eixo transversal fica perpendicular ao principal.",
        points: [
          "row usa o fluxo horizontal no modo de escrita comum.",
          "column torna o eixo principal vertical.",
          "Inverter visualmente não altera a ordem no documento.",
        ],
      },
      {
        title: "Distribuição e alinhamento",
        pages: "Aula 06, p. 17–25",
        body: "justify-content distribui itens no eixo principal; align-items alinha no transversal; gap cria espaçamento consistente entre itens sem margens compensatórias.",
        points: [
          "space-between coloca espaço entre itens.",
          "center centraliza no eixo correspondente.",
          "gap funciona sem adicionar espaço nas bordas externas.",
        ],
      },
      {
        title: "Quebra, tamanho e exceções",
        pages: "Aula 06, p. 26–34",
        body: "flex-wrap permite novas linhas quando falta espaço. flex-grow, flex-shrink e flex-basis compõem o dimensionamento; align-self altera um item e order muda sua posição visual, com risco para a sequência acessível.",
        points: [
          "wrap evita compressão excessiva.",
          "flex-basis define a base de cálculo.",
          "order não deve criar divergência confusa entre foco e visual.",
        ],
      },
    ],
  },
  {
    id: "Aula 07",
    title: "Layouts com CSS Grid",
    topics: "Trilhas, áreas e grade responsiva",
    parts: 1,
    summary:
      "Construção de layouts bidimensionais com colunas, linhas, frações, áreas nomeadas e grades responsivas intrínsecas.",
    goals: [
      "Criar trilhas de linhas e colunas",
      "Compor layouts com áreas nomeadas",
      "Usar auto-fit e minmax em grades responsivas",
    ],
    sources: ["Aula 07.pdf"],
    sections: [
      {
        title: "Grade bidimensional",
        pages: "Aula 07, p. 2–16",
        body: "display: grid organiza itens em linhas e colunas. grid-template-columns e grid-template-rows definem trilhas, fr distribui espaço disponível e gap separa células.",
        points: [
          "Grid controla duas dimensões.",
          "fr representa uma fração do espaço restante.",
          "Unidades fixas e flexíveis podem coexistir.",
        ],
        code: ".grade { display: grid; grid-template-columns: 240px 1fr; gap: 1rem; }",
      },
      {
        title: "Grid e Flexbox juntos",
        pages: "Aula 07, p. 17–20",
        body: "Grid é indicado para a estrutura bidimensional da página; Flexbox funciona bem no alinhamento interno de componentes. Um grid item pode ser também um flex container.",
        points: [
          "As tecnologias são complementares.",
          "Escolha pelo tipo de problema, não por preferência.",
          "Layouts podem aninhar contêineres.",
        ],
      },
      {
        title: "Áreas nomeadas",
        pages: "Aula 07, p. 21–25",
        body: "grid-template-areas descreve visualmente regiões do layout e grid-area associa cada componente à região correspondente.",
        points: [
          "Cada linha da definição deve ter o mesmo número de células.",
          "Um ponto representa uma célula vazia.",
          "Áreas tornam estruturas de página legíveis.",
        ],
      },
      {
        title: "Responsividade intrínseca e media queries",
        pages: "Aula 07, p. 26–40",
        body: "repeat, auto-fit e minmax permitem colunas que se reorganizam conforme o espaço. Media queries adicionam mudanças em condições definidas; clamp cria valores fluidos limitados.",
        points: [
          "minmax define limites mínimo e máximo.",
          "auto-fit aproveita trilhas disponíveis.",
          "Mobile-first parte do menor contexto e amplia progressivamente.",
        ],
      },
    ],
  },
  {
    id: "Aula 08",
    title: "Design responsivo",
    topics: "Breakpoints, tipografia e imagens",
    parts: 1,
    summary:
      "Adaptação de interfaces a diferentes telas com abordagem mobile-first, breakpoints guiados pelo conteúdo, tipografia fluida e mídia responsiva.",
    goals: [
      "Planejar uma interface mobile-first",
      "Definir breakpoints quando o conteúdo exigir",
      "Entregar imagens e interações responsivas",
    ],
    sources: ["Aula 08.pdf"],
    sections: [
      {
        title: "Do menor contexto para cima",
        pages: "Aula 08, p. 2–12",
        body: "Um layout que funciona em tela larga pode falhar a 360 px. Mobile-first define a base para telas menores e usa min-width para aprimorar o layout quando houver espaço.",
        points: [
          "Breakpoints respondem ao conteúdo, não a aparelhos específicos.",
          "Evite largura fixa que cause rolagem horizontal.",
          "Teste estados intermediários, não apenas extremos.",
        ],
      },
      {
        title: "Navegação e múltiplas páginas",
        pages: "Aula 08, p. 13–16",
        body: "Uma navegação responsiva precisa continuar compreensível e operável em telas estreitas. Links entre páginas devem usar caminhos consistentes com a estrutura do projeto.",
        points: [
          "Áreas de toque precisam de tamanho e espaço adequados.",
          "A navegação não deve depender apenas de hover.",
          "O menu deve indicar destinos com clareza.",
        ],
      },
      {
        title: "Tipografia fluida",
        pages: "Aula 08, p. 17–22",
        body: "Unidades relativas e clamp permitem que texto e espaçamento respondam ao viewport sem crescer indefinidamente. clamp recebe mínimo, valor preferencial e máximo.",
        points: [
          "rem se relaciona ao tamanho raiz.",
          "vw responde à largura da viewport.",
          "Limites preservam legibilidade em telas extremas.",
        ],
        code: "h1 { font-size: clamp(2rem, 5vw, 4rem); }",
      },
      {
        title: "Imagens, preferências e testes",
        pages: "Aula 08, p. 23–29",
        body: "max-width evita transbordamento, object-fit controla recorte e srcset/picture oferecem fontes adequadas. Preferências do usuário, viewport meta e testes no DevTools completam a estratégia.",
        points: [
          "width: 100% e height: auto preservam proporção comum.",
          "picture permite direção de arte.",
          "prefers-reduced-motion deve influenciar animações.",
        ],
      },
    ],
  },
  {
    id: "Aula 09",
    title: "Git, publicação e diagnóstico",
    topics: "Versionamento, GitHub Pages e Web",
    parts: 1,
    summary:
      "Fluxo de versionamento com Git e GitHub, publicação estática no GitHub Pages e diagnóstico de URLs, HTTP e renderização no navegador.",
    goals: [
      "Versionar mudanças com commits claros",
      "Publicar um site estático",
      "Diagnosticar falhas de caminho e rede",
    ],
    sources: ["Aula 09.pdf"],
    sections: [
      {
        title: "Estados e ciclo do Git",
        pages: "Aula 09, p. 2–15",
        body: "Git registra versões localmente. Arquivos passam pelo diretório de trabalho, staging area e repositório; add prepara mudanças e commit cria um registro com mensagem.",
        points: [
          "status mostra o estado dos arquivos.",
          "git add seleciona o que entrará no commit.",
          ".gitignore exclui arquivos que não devem ser versionados.",
        ],
      },
      {
        title: "Remotos, branches e colaboração",
        pages: "Aula 09, p. 16–26",
        body: "Um remoto conecta o repositório local ao GitHub. Branches isolam linhas de trabalho; merge integra mudanças e pull requests permitem revisar antes da integração.",
        points: [
          "push envia commits ao remoto.",
          "pull traz e integra mudanças remotas.",
          "GitHub Flow usa branches curtas e revisão por PR.",
        ],
      },
      {
        title: "GitHub Pages e endereçamento",
        pages: "Aula 09, p. 27–38",
        body: "GitHub Pages hospeda arquivos estáticos a partir de uma fonte configurada. Domínio e DNS ajudam a localizar o servidor; URL e caminhos determinam cada recurso; HTTP comunica o resultado com códigos de status.",
        points: [
          "404 indica recurso não encontrado.",
          "HTTPS protege a comunicação.",
          "Caminhos absolutos na raiz podem falhar em sites de projeto.",
        ],
      },
      {
        title: "Renderização e depuração",
        pages: "Aula 09, p. 39–57",
        body: "O navegador constrói DOM e CSSOM, combina-os na árvore de renderização e executa layout e pintura. DevTools, Console e Network ajudam a rastrear HTML, CSS, imagens, scripts e respostas HTTP.",
        points: [
          "DOM representa o documento.",
          "CSSOM representa regras de estilo.",
          "A aba Network revela URL, status e tipo de cada requisição.",
        ],
      },
    ],
  },
  {
    id: "Aula 10",
    title: "JavaScript: dados e estado",
    topics: "Objetos, arrays, funções e DOM",
    parts: 1,
    summary:
      "Fundamentos de JavaScript aplicados a uma página: estruturas de dados, repetição, funções, estado e atualização segura do DOM.",
    goals: [
      "Representar dados com objetos e arrays",
      "Decompor cálculos em funções",
      "Atualizar a interface a partir do estado",
    ],
    sources: ["Aula 10.pdf"],
    sections: [
      {
        title: "Variáveis, objetos e arrays",
        pages: "Aula 10, p. 2–7",
        body: "Variáveis dão nomes a valores; objetos agrupam propriedades relacionadas e arrays guardam sequências indexadas. Um array de objetos representa coleções como alunos ou questões.",
        points: [
          "Índices de arrays começam em zero.",
          "Propriedades aninhadas exigem percorrer a estrutura.",
          "const impede reatribuição da variável, não torna o objeto imutável.",
        ],
      },
      {
        title: "Repetição, filtros e acumuladores",
        pages: "Aula 10, p. 8–11",
        body: "Laços percorrem coleções. Acumuladores somam ou contam, comparações encontram máximos e condições selecionam itens; push adiciona um valor ao final de um array.",
        points: [
          "Inicialize o acumulador antes do laço.",
          "Verifique limites para evitar índices inexistentes.",
          "O critério de filtro precisa produzir uma decisão booleana.",
        ],
      },
      {
        title: "Funções e escopo",
        pages: "Aula 10, p. 12–19",
        body: "Funções encapsulam tarefas, recebem parâmetros e podem devolver valores com return. Decompor problemas reduz repetição; escopo limita onde uma variável existe.",
        points: [
          "return encerra a função e entrega um resultado.",
          "Função pura calcula sem alterar o exterior.",
          "Atualizar o DOM é um efeito colateral.",
        ],
      },
      {
        title: "DOM e estado da interface",
        pages: "Aula 10, p. 20–28",
        body: "document permite localizar elementos e textContent atualiza texto. Estado é a fonte de dados atual da interface; a renderização deve refletir esse estado e tratar limites e erros.",
        points: [
          "getElementById pode retornar null.",
          "A interface deve derivar do estado atual.",
          "Separar cálculo de apresentação facilita testes.",
        ],
      },
    ],
  },
  {
    id: "Aula 11",
    title: "Eventos, Fetch e renderização",
    topics: "DOM, estado assíncrono e delegação",
    parts: 1,
    summary:
      "Interações reais com formulários e eventos, renderização a partir de estado, carregamento assíncrono de dados e delegação de eventos.",
    goals: [
      "Tratar eventos sem recarregar a página",
      "Modelar estados de uma requisição",
      "Usar delegação em conteúdo dinâmico",
    ],
    sources: ["Aula 11.pdf"],
    sections: [
      {
        title: "Eventos e formulários",
        pages: "Aula 11, p. 2–9",
        body: "addEventListener registra uma função para responder a eventos. No submit, preventDefault impede o comportamento padrão de recarregar; value e trim ajudam a ler e normalizar a entrada.",
        points: [
          "O listener recebe um objeto de evento.",
          "submit cobre clique e envio pelo teclado.",
          "Leia, decida e só então atualize a interface.",
        ],
      },
      {
        title: "Atualização segura do DOM",
        pages: "Aula 11, p. 10–15",
        body: "textContent trata o valor como texto, enquanto innerHTML interpreta marcação e exige controle da origem. classList adiciona, remove ou alterna classes; seletores podem retornar null.",
        points: [
          "Prefira textContent para conteúdo do usuário.",
          "classList.toggle alterna uma classe.",
          "Valide a existência do elemento antes de usá-lo.",
        ],
      },
      {
        title: "Estado e função de renderização",
        pages: "Aula 11, p. 16–18",
        body: "A coleção em memória funciona como estado. Uma função renderizar percorre esse estado e reconstrói ou atualiza a representação visual, mantendo dados e interface sincronizados.",
        points: [
          "Altere o estado antes de renderizar.",
          "Evite espalhar atualizações manuais em muitos pontos.",
          "Uma renderização previsível reduz inconsistências.",
        ],
      },
      {
        title: "Fetch e estados assíncronos",
        pages: "Aula 11, p. 19–26",
        body: "fetch inicia uma requisição e devolve uma Promise. A resposta deve ser verificada com ok e convertida, por exemplo, com json. A interface precisa representar carregando, sucesso, vazio e erro.",
        points: [
          "Assíncrono não significa bloquear a página.",
          "Resposta HTTP e dados convertidos são etapas diferentes.",
          "Erros precisam chegar ao tratamento final.",
        ],
      },
      {
        title: "Delegação de eventos",
        pages: "Aula 11, p. 27–30",
        body: "Elementos criados depois não existiam quando listeners individuais foram registrados. A delegação escuta em um ancestral estável e identifica o alvo que originou o evento.",
        points: [
          "Eventos que propagam podem ser delegados.",
          "closest ajuda a localizar o controle relevante.",
          "A delegação reduz listeners repetidos em listas dinâmicas.",
        ],
      },
    ],
  },
];

export const frontendLessonContentById = new Map(
  frontendLessonContents.map((lesson) => [lesson.id, lesson]),
);
