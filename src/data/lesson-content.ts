export interface LessonSection {
  title: string
  pages: string
  body: string
  points: string[]
  code?: string
}

export interface LessonContent {
  id: string
  title: string
  topics: string
  parts: number
  summary: string
  goals: string[]
  sources: string[]
  sections: LessonSection[]
}

export const lessonContents: LessonContent[] = [
  {
    id: 'Aula 00',
    title: 'O que as telas escondem?',
    topics: 'Dados, relações e consultas',
    parts: 1,
    summary: 'Uma abertura visual para enxergar aplicativos como interfaces sobre estruturas de dados: o que guardar, como conectar registros, como preservar relações e como recuperar informação rapidamente.',
    goals: ['Reconhecer os dados capturados por aplicações', 'Perceber relações e dependências entre registros', 'Entender o percurso da disciplina'],
    sources: ['Aula_00.pdf'],
    sections: [
      {title:'A interface é só a superfície',pages:'Aula_00, p. 1–3',body:'Por trás de uma tela simples existe captura de dados brutos. O exemplo da aula mostra identificador de usuário, horário, tempo de permanência, localização, dispositivo, velocidade de rolagem e afinidade com anúncios.',points:['Um evento de uso gera vários atributos.','Dados brutos precisam de contexto para ganhar utilidade.','A modelagem decide o que merece ser persistido.']},
      {title:'Relacionamentos sustentam o contexto',pages:'Aula_00, p. 4–5',body:'Aplicações precisam ligar pessoas, publicações, comentários e outros objetos de forma lógica. A pergunta sobre apagar uma foto evidencia integridade referencial: o sistema precisa definir o destino dos comentários ligados a ela.',points:['Registros isolados explicam pouco.','Relacionamentos expressam regras do domínio.','Exclusões exigem comportamento definido para dados dependentes.']},
      {title:'Consultar é encontrar com precisão',pages:'Aula_00, p. 6',body:'Encontrar uma pessoa ou música entre muitos registros depende de estruturas que permitam filtrar e recuperar dados rapidamente. A implementação virá depois; primeiro é necessário modelar corretamente o que será pesquisado.',points:['A consulta parte de dados estruturados.','Organização e identificação favorecem buscas.','Velocidade não substitui uma estrutura coerente.']},
      {title:'A jornada da disciplina',pages:'Aula_00, p. 7',body:'O percurso apresentado vai de fundamentos e contexto até implementação. Entre esses extremos estão a representação por modelos e diagramas e o projeto lógico com chaves, integridade referencial e redução de redundância.',points:['Unidade 1: saber o que guardar.','Unidade 2: ligar os pontos visualmente.','Unidade 3: estruturar e normalizar.','Unidade 4: implementar e consultar.']},
    ],
  },
  {
    id: 'Aula 01',
    title: 'Fundamentos dos dados',
    topics: 'DIKW, LGPD e estruturas',
    parts: 1,
    summary: 'Fundamentos para distinguir dado de informação, transformar registros em valor e tratar dados com responsabilidade, governança e tecnologia adequada ao seu formato.',
    goals: ['Diferenciar dado, informação, conhecimento e sabedoria', 'Relacionar LGPD, ética e governança', 'Comparar dados estruturados, semiestruturados e não estruturados'],
    sources: ['Aula_01.pdf'],
    sections: [
      {title:'Dado não é informação',pages:'Aula_01, p. 5–7',body:'Dado é um fato bruto e isolado; informação surge quando esse dado é organizado e recebe contexto. A aula também destaca três características dos dados: representação de fatos, persistência quando armazenados e possibilidade de processamento.',points:['Um número isolado pode não comunicar nada.','Contexto torna o dado interpretável.','Persistência permite recuperar e comparar eventos.']},
      {title:'Hierarquia DIKW',pages:'Aula_01, p. 8–9',body:'A hierarquia DIKW organiza a transformação de valor: dados passam por validação, processamento e contextualização para se tornarem informação; a interpretação produz conhecimento; a aplicação criteriosa conduz à sabedoria.',points:['Data: fatos brutos.','Information: dados contextualizados.','Knowledge: compreensão de padrões.','Wisdom: decisão orientada pelo conhecimento.']},
      {title:'LGPD e responsabilidade',pages:'Aula_01, p. 10–14',body:'O tratamento de dados pessoais envolve finalidade, segurança e respeito aos titulares. A aula conecta a LGPD a princípios éticos e usa o caso Cambridge Analytica para mostrar o impacto de coleta e uso inadequados.',points:['Coletar apenas o necessário para uma finalidade legítima.','Controlar acesso e proteger dados armazenados.','Responsabilidade técnica acompanha o poder de processar dados.']},
      {title:'Governança de dados',pages:'Aula_01, p. 15',body:'Governança é o conjunto de políticas, papéis e processos que orienta os dados durante seu ciclo de vida. Ela organiza responsabilidade, qualidade, segurança e disponibilidade dentro da organização.',points:['Define quem decide e quem executa.','Estabelece padrões de qualidade.','Mantém regras ao longo do ciclo de vida.']},
      {title:'Formatos e tecnologias',pages:'Aula_01, p. 16–20',body:'Dados estruturados seguem esquema fixo e se encaixam bem em bancos relacionais. Semiestruturados usam marcações flexíveis, como JSON e XML. Não estruturados, como imagens, áudio e textos livres, exigem estratégias diferentes de armazenamento e análise.',points:['Estruturados: tabelas e esquema rígido.','Semiestruturados: tags ou chaves flexíveis.','Não estruturados: ausência de formato tabular fixo.','A tecnologia deve acompanhar o tipo e o uso do dado.']},
    ],
  },
  {
    id: 'Aula 02',
    title: 'Do desenho à construção',
    topics: 'Modelo lógico, físico e chaves',
    parts: 2,
    summary: 'A passagem das regras de negócio para tabelas reais: níveis de abstração, entidades, atributos, relacionamentos, chaves, constraints, integridade e decisões de desempenho.',
    goals: ['Separar modelo lógico de modelo físico', 'Mapear entidades e relações para tabelas e chaves', 'Reconhecer integridade, normalização e indexação'],
    sources: ['Aula_02-Parte1.pdf', 'Aula_02-Parte2.pdf'],
    sections: [
      {title:'Modelo lógico e modelo físico',pages:'Parte 1, p. 2–4 · Parte 2, p. 2–3',body:'O modelo lógico representa regras de negócio sem depender de um SGBD: entidades, atributos e relacionamentos. O modelo físico toma decisões de implementação, como tabelas, tipos, chaves, constraints e código SQL específico.',points:['Lógico: o que o negócio precisa guardar.','Físico: como o SGBD armazenará.','A abstração evita misturar necessidade com detalhe técnico cedo demais.']},
      {title:'Cardinalidades em ação',pages:'Parte 1, p. 5–9',body:'O sistema de acessos exemplifica relações 1:1 e 1:N. Um usuário pode ter uma configuração de perfil, enquanto o histórico registra muitos acessos do mesmo usuário.',points:['1:1 liga no máximo uma ocorrência de cada lado.','1:N coloca várias ocorrências do lado dependente.','A regra de negócio determina a cardinalidade.']},
      {title:'Do conceito às tabelas',pages:'Parte 1, p. 10–14 · Parte 2, p. 6–10',body:'Na transformação física, entidades viram tabelas e atributos viram colunas tipadas. A chave primária identifica cada linha; a chave estrangeira leva a identificação de uma tabela para outra e materializa o relacionamento.',points:['PK garante identidade e unicidade.','FK referencia a PK relacionada.','NOT NULL, UNIQUE e CHECK aplicam regras na entrada.'],code:'CREATE TABLE Login (\n  id INT PRIMARY KEY,\n  usuario_id INT NOT NULL,\n  data_acesso TIMESTAMP,\n  FOREIGN KEY (usuario_id) REFERENCES Usuario(id)\n);'},
      {title:'Resolvendo muitos-para-muitos',pages:'Parte 1, p. 15–19',body:'Pedido e Produto formam uma relação N:M: um pedido contém vários produtos e um produto aparece em vários pedidos. O modelo físico resolve isso com Item_Pedido, tabela associativa que guarda as duas FKs e dados da associação, como quantidade.',points:['N:M não é implementado diretamente por uma única FK.','A tabela associativa representa cada par relacionado.','A associação pode possuir atributos próprios.']},
      {title:'Integridade e desempenho',pages:'Parte 2, p. 11–16',body:'Integridade referencial evita registros órfãos. Normalização reduz redundância e anomalias; índices aceleram buscas; particionamento ajuda em volumes muito grandes. A aula também situa opções NoSQL quando o problema não se encaixa bem no modelo relacional.',points:['Integridade protege coerência entre tabelas.','Índices melhoram leitura com custo de armazenamento e escrita.','Decisões avançadas dependem do volume e do padrão de uso.']},
    ],
  },
  {
    id: 'Aula 03',
    title: 'Oficina de modelagem',
    topics: 'PetShop, locadora e SGBDs',
    parts: 2,
    summary: 'Modelagem aplicada a cenários reais e critérios para escolher o SGBD: extração de entidades, cardinalidades, FKs, tabelas associativas e comparação entre plataformas relacionais.',
    goals: ['Construir um modelo lógico a partir de um enunciado', 'Transformar relações em FKs e tabelas associativas', 'Comparar SGBDs por requisitos do projeto'],
    sources: ['Aula_03-Parte1.pdf', 'Aula_03-Parte2.pdf'],
    sections: [
      {title:'Lendo o domínio',pages:'Parte 1, p. 2–6',body:'A oficina começa identificando substantivos como entidades, características como atributos e verbos como relacionamentos. No PetShop, Cliente, Pet, Veterinário e Consulta emergem do texto do negócio.',points:['Entidade é algo de interesse que precisa ser registrado.','Atributo descreve a entidade.','Relacionamento registra como as entidades interagem.']},
      {title:'Cardinalidade, PK e FK',pages:'Parte 1, p. 3–9',body:'Cardinalidade limita quantas ocorrências se relacionam. A PK distingue registros; em uma relação 1:N, a FK normalmente fica no lado N, apontando para a ocorrência do lado 1.',points:['Cliente 1:N Pet: cada pet referencia seu cliente.','PK não se repete e não pode ser nula.','FK preserva a ligação entre registros.']},
      {title:'Locadora e entidade associativa',pages:'Parte 1, p. 12–15',body:'No cenário CineTeca, Cliente e Filme possuem uma relação N:M ao longo do tempo. A entidade Aluguel resolve a relação e registra dados do evento, como retirada e devolução.',points:['A relação N:M se torna duas relações 1:N.','Aluguel carrega as FKs de Cliente e Filme.','Datas pertencem ao evento de aluguel.']},
      {title:'Como escolher um SGBD',pages:'Parte 2, p. 2–3',body:'Não existe uma plataforma perfeita para todos os projetos. A escolha considera performance e escalabilidade, custo total, recursos necessários, ecossistema e suporte.',points:['Comece pelos requisitos, não pela marca.','Licença gratuita não elimina custo operacional.','Missão crítica pode justificar suporte e recursos enterprise.']},
      {title:'Panorama das plataformas',pages:'Parte 2, p. 4–21',body:'PostgreSQL se destaca por extensibilidade e recursos avançados de código aberto. MySQL é recorrente em aplicações web e usa engines como InnoDB. Oracle mira cenários enterprise de missão crítica. SQL Server integra-se fortemente ao ecossistema Microsoft e às ferramentas de BI.',points:['PostgreSQL: extensibilidade e recursos avançados.','MySQL/InnoDB: web, transações e integridade referencial.','Oracle: disponibilidade e recursos enterprise.','SQL Server: integração Microsoft, administração e BI.']},
    ],
  },
  {
    id: 'Aula 04',
    title: 'MER e DER',
    topics: 'Atributos, cardinalidade e participação',
    parts: 2,
    summary: 'O vocabulário completo da modelagem conceitual: entidades fortes e fracas, tipos de atributos, relacionamentos com propriedades, cardinalidade, participação e representação em DER.',
    goals: ['Distinguir MER de DER', 'Classificar entidades e atributos', 'Definir cardinalidade e participação com precisão'],
    sources: ['Aula_04-Parte1.pdf', 'Aula_04-Parte2.pdf'],
    sections: [
      {title:'MER e DER',pages:'Parte 1, p. 2 · Parte 2, p. 6–8',body:'O MER organiza conceitualmente entidades, atributos, relacionamentos e regras. O DER é a representação gráfica desse modelo, usada para comunicar a estrutura antes de escrever as tabelas.',points:['MER é o modelo conceitual.','DER é o diagrama que representa o MER.','A modelagem precede a implementação física.']},
      {title:'Entidades fortes e fracas',pages:'Parte 1, p. 3–7 · Parte 2, p. 9–10',body:'Entidades fortes possuem identificação própria. Entidades fracas dependem de outra entidade para existir ou ser identificadas, como o Motorista Adicional vinculado ao cliente no cenário da locadora.',points:['Entidade forte tem chave independente.','Entidade fraca depende de uma proprietária.','A dependência precisa aparecer no modelo.']},
      {title:'Tipos de atributos',pages:'Parte 1, p. 8–12',body:'Atributos podem ser simples, compostos, multivalorados, identificadores ou derivados. Endereço pode ser composto; e-mail pode ser multivalorado; CPF pode identificar; idade deve ser calculada a partir da data de nascimento.',points:['Composto: divisível em partes com significado.','Multivalorado: vários valores para uma ocorrência.','Identificador: distingue unicamente.','Derivado: calculado a partir de outros dados.']},
      {title:'Cardinalidade e participação',pages:'Parte 1, p. 13–19 · Parte 2, p. 11–14',body:'Cardinalidade informa quantas ocorrências podem participar; participação mínima informa se a relação é opcional ou obrigatória. As duas dimensões devem refletir exatamente a regra de negócio.',points:['1:1, 1:N e N:M descrevem máximos.','Mínimo zero indica participação opcional.','Mínimo um indica participação obrigatória.']},
      {title:'Atributos do relacionamento',pages:'Parte 1, p. 15–17',body:'Alguns dados descrevem o evento de ligação, não uma entidade isolada. Data de início, devolução e valor de uma locação pertencem ao relacionamento Aluga porque variam em cada ocorrência.',points:['Pergunte de qual fato o atributo depende.','O valor de um aluguel não é propriedade fixa do carro.','Relacionamentos também podem possuir atributos.']},
    ],
  },
  {
    id: 'Aula 05',
    title: 'Modelagem avançada',
    topics: 'Herança e autorrelacionamento',
    parts: 1,
    summary: 'Modelagem avançada aplicada ao Hospital MedVida: especialização para evitar tabelas genéricas e autorrelacionamento para representar hierarquias entre ocorrências da mesma entidade.',
    goals: ['Aplicar especialização e herança', 'Modelar autorrelacionamentos', 'Levar o modelo avançado até tabelas e constraints'],
    sources: ['Aula_05.pdf'],
    sections: [
      {title:'O problema da tabela faz-tudo',pages:'Aula_05, p. 2–4',body:'Misturar médicos, enfermeiros e outros funcionários em uma tabela enorme produz muitos campos nulos e permite combinações inválidas. A estrutura perde clareza e aumenta o risco de anomalias.',points:['Campos específicos não pertencem a todos os funcionários.','NULL em massa é sintoma de conceitos misturados.','Tipos e regras coerentes devem bloquear estados inválidos.']},
      {title:'Especialização e herança',pages:'Aula_05, p. 5–7',body:'Funcionário funciona como superclasse para atributos comuns. Médico e Enfermeiro são subclasses que herdam a identidade e os dados compartilhados, acrescentando campos próprios como CRM, especialidade ou COREN.',points:['A superclasse concentra propriedades comuns.','Subclasses guardam propriedades específicas.','A identidade conecta cada subtipo ao funcionário correspondente.']},
      {title:'Autorrelacionamento',pages:'Aula_05, p. 8–10',body:'Médicos podem supervisionar outros médicos. Como as duas pontas pertencem à mesma entidade, os papéis — supervisor e supervisionado — esclarecem o relacionamento.',points:['O relacionamento conecta ocorrências da mesma entidade.','Os papéis evitam ambiguidade.','No físico, uma FK pode apontar para a própria tabela.'],code:'CREATE TABLE Medico (\n  id INT PRIMARY KEY,\n  supervisor_id INT NULL,\n  FOREIGN KEY (supervisor_id) REFERENCES Medico(id)\n);'},
      {title:'Do modelo ao banco',pages:'Aula_05, p. 11–14',body:'A implementação física traduz especialização e autorrelacionamento em tabelas, PKs, FKs, tipos e constraints. O objetivo é manter no banco as mesmas regras entendidas no domínio.',points:['Cada decisão conceitual precisa de representação física.','Tipos adequados restringem valores.','PKs e FKs preservam identidade e relações.']},
    ],
  },
  {
    id: 'Aula 06',
    title: 'Arquitetura relacional',
    topics: 'Dicionário, normalização, ORM e EER',
    parts: 4,
    summary: 'Uma aula extensa sobre documentação, tradução objeto-relacional, normalização, integridade, herança física, EER, agregação e histórico temporal com Slowly Changing Dimensions.',
    goals: ['Documentar metadados em um dicionário', 'Normalizar relações e preservar integridade', 'Mapear objetos, herança, agregação e dados temporais'],
    sources: ['Aula_06-Parte1.pdf', 'Aula_06-Parte2.pdf', 'Aula_06-Parte3.pdf', 'Aula_06-Parte4.pdf'],
    sections: [
      {title:'Dicionário de dados',pages:'Parte 1, p. 1–9',body:'O dicionário centraliza metadados e funciona como fonte de verdade. Para entidades e atributos, registra nomes, descrições, tipos, tamanhos, nulabilidade, chaves, valores padrão e restrições; para relacionamentos, registra participantes, cardinalidade e integridade.',points:['Documenta significado técnico e de negócio.','Alinha desenvolvimento, DBA, manutenção e BI.','Evita que regras existam apenas na memória da equipe.']},
      {title:'Mapeamento objeto-relacional',pages:'Parte 2, p. 2–10',body:'Classes e objetos não são idênticos a tabelas e relações. O mapeamento aproxima classe de tabela, atributo de coluna e associações de FKs; relações N:M precisam de tabela intermediária.',points:['Identidade em objetos e em bancos segue mecanismos diferentes.','Constraints SQL devem refletir regras dos atributos.','ORM automatiza parte do mapeamento, não substitui a modelagem.']},
      {title:'Herança no modelo físico',pages:'Parte 2, p. 12–16',body:'Herança pode ser implementada por tabela única, tabelas por classe ou tabelas por subclasses concretas. Cada estratégia troca simplicidade de consulta, quantidade de JOINs, presença de nulos e duplicação.',points:['Single Table: uma tabela e coluna discriminadora.','Class Table: superclasse e subclasses em tabelas ligadas.','Concrete Table: somente classes concretas viram tabelas.']},
      {title:'Normalização',pages:'Parte 3, p. 2–16',body:'Normalização reduz redundância e dependências problemáticas. A 1FN exige valores atômicos; a 2FN elimina dependências parciais em chaves compostas; a 3FN elimina dependências transitivas; FNBC exige que todo determinante seja chave candidata.',points:['Dependência funcional: X determina Y.','1FN remove listas e grupos repetidos.','2FN exige dependência da chave inteira.','3FN remove dependência entre atributos não-chave.']},
      {title:'Integridade e desnormalização',pages:'Parte 3, p. 17–20',body:'Desnormalização é uma decisão controlada para padrões de leitura medidos, comum em contextos analíticos; não é desculpa para estrutura descuidada. Constraints de domínio, chave e referência mantêm estados válidos.',points:['OLTP prioriza consistência e atualizações.','OLAP pode aceitar redundância controlada para leitura.','FKs e ações em cascata precisam refletir a regra do domínio.']},
      {title:'EER, agregação e tempo',pages:'Parte 4, p. 2–20',body:'O EER amplia o MER com especialização, generalização, restrições de disjunção e completude e agregação. Para histórico, SCD Tipo 1 sobrescreve, Tipo 2 cria novas linhas versionadas e Tipo 3 mantém valor atual e anterior em colunas.',points:['Disjoint: uma ocorrência pertence a no máximo uma subclasse.','Completude total: toda ocorrência deve estar em alguma subclasse.','Agregação permite relacionar outro elemento a um relacionamento.','SCD Tipo 2 preserva histórico completo por versão.']},
    ],
  },
  {
    id: 'Aula 08',
    title: 'MySQL e manipulação',
    topics: 'Tipos, DML, consultas e JOINs',
    parts: 2,
    summary: 'Fundamentos práticos de MySQL: pensamento declarativo, arquitetura Server/Workbench, tipos de dados, DML, filtros, agregações, JOINs, transações, instalação e diagnóstico.',
    goals: ['Pensar consultas de forma declarativa', 'Escolher tipos e executar DML com segurança', 'Consultar, agrupar e relacionar tabelas'],
    sources: ['Aula_08-Parte1.pdf', 'Aula_08-Parte2.pdf'],
    sections: [
      {title:'SQL é declarativa',pages:'Parte 1, p. 2–5 · Parte 2, p. 4',body:'Em uma abordagem imperativa, o programa descreve cada passo. Em SQL, o usuário declara o resultado desejado e o SGBD escolhe o plano de execução.',points:['A consulta expressa o que obter.','O otimizador decide como executar.','A abstração reduz lógica procedural na aplicação.'],code:'SELECT AVG(idade) AS media_idades\nFROM pessoas;'},
      {title:'Server e Workbench',pages:'Parte 2, p. 3 · p. 9–10',body:'MySQL Server é o motor que armazena, processa e protege os dados. MySQL Workbench é a interface gráfica que envia comandos ao servidor; sem o serviço ativo, a interface não consegue operar o banco.',points:['Server: SGBD em execução.','Workbench: cliente gráfico.','Conexão depende de host, porta, usuário e credenciais.']},
      {title:'Tipos de dados',pages:'Parte 1, p. 6–10 · Parte 2, p. 12',body:'CHAR serve bem a textos fixos; VARCHAR, a comprimentos variáveis; DECIMAL, a valores monetários exatos. DATE, DATETIME e TIMESTAMP tratam diferentes necessidades temporais. BOOLEAN é tratado pelo MySQL como TINYINT(1).',points:['CHAR(2) para siglas de UF.','VARCHAR para nomes e descrições variáveis.','DECIMAL evita imprecisão de ponto flutuante em dinheiro.','Escolher o tipo afeta validade, espaço e desempenho.']},
      {title:'DML com segurança',pages:'Parte 1, p. 11–16 · Parte 2, p. 11–15',body:'INSERT adiciona, UPDATE altera e DELETE remove registros. UPDATE ou DELETE sem WHERE podem afetar todas as linhas. Transações permitem confirmar com COMMIT ou desfazer com ROLLBACK quando o fluxo suporta esse controle.',points:['Confira o alvo com SELECT antes de alterar.','WHERE delimita a operação.','TRUNCATE esvazia a tabela e não aceita WHERE.']},
      {title:'Filtros, agregações e JOINs',pages:'Parte 1, p. 17–20 · Parte 2, p. 16',body:'WHERE filtra linhas; LIKE busca padrões; funções como COUNT, SUM e AVG resumem dados; GROUP BY forma grupos. INNER JOIN mantém correspondências; LEFT JOIN preserva todas as linhas da esquerda e preenche ausência com NULL.',points:['WHERE atua antes da apresentação do resultado.','GROUP BY organiza linhas para agregação.','A condição ON define como as tabelas se conectam.']},
    ],
  },
  {
    id: 'Aula 09',
    title: 'Laboratório SQL',
    topics: 'DDL, DML, DQL e views',
    parts: 1,
    summary: 'Laboratório integrado com três domínios — e-commerce, sistema acadêmico e hospital — para praticar criação de estruturas, manutenção de dados, consultas, JOINs e views.',
    goals: ['Separar DDL, DML e DQL', 'Implementar relações 1:N e N:M em SQL', 'Construir consultas e views para cenários reais'],
    sources: ['Aula_09.pdf'],
    sections: [
      {title:'DDL, DML e DQL',pages:'Aula_09, p. 2–4',body:'DDL cria e altera a estrutura; DML insere, atualiza e remove dados; DQL consulta sem alterar o estado. A escolha de tipos e constraints faz parte do projeto físico.',points:['DDL: CREATE, ALTER e DROP.','DML: INSERT, UPDATE e DELETE.','DQL: SELECT e suas cláusulas.']},
      {title:'Cenário de e-commerce',pages:'Aula_09, p. 5–10',body:'Clientes fazem pedidos e pedidos contêm produtos. O cenário exercita PKs, FKs, inserções, filtros por UF, ordenação por preço e JOIN entre clientes e pedidos.',points:['ORDER BY preco DESC ordena do maior para o menor.','WHERE seleciona apenas linhas que atendem à condição.','JOIN recupera dados relacionados sem duplicá-los no modelo.'],code:'SELECT c.nome, p.data_pedido\nFROM clientes c\nJOIN pedidos p ON c.id = p.id_cliente;'},
      {title:'Cenário acadêmico',pages:'Aula_09, p. 11–15',body:'Aluno e Curso formam N:M, resolvido por Matrícula. A tabela associativa contém as FKs e pode guardar data da matrícula, permitindo consultas sobre alunos, cursos e o evento de associação.',points:['Matrícula representa a associação.','BETWEEN filtra intervalos.','JOINs podem atravessar a tabela intermediária.']},
      {title:'Cenário hospitalar',pages:'Aula_09, p. 16–20',body:'Médicos, pacientes e consultas formam um domínio com regras de identificação e agenda. UNIQUE protege campos como CRM; filtros localizam especialidades e períodos; JOINs compõem prontuários e agendas.',points:['Constraints reforçam regras do domínio.','Datas e status permitem triagem.','Aliases tornam consultas extensas mais legíveis.']},
      {title:'Views',pages:'Aula_09, p. 21',body:'Uma view dá nome a uma consulta e expõe seu resultado como relação virtual reutilizável. Ela pode simplificar o consumo por front-end ou API e centralizar uma composição recorrente.',points:['A view encapsula um SELECT.','Não substitui as tabelas de origem.','É útil para relatórios e interfaces de leitura.'],code:'CREATE VIEW vw_relatorio_consultas AS\nSELECT m.nome AS medico, p.nome AS paciente, c.data_hora\nFROM consultas c\nJOIN medicos m ON m.id = c.id_medico\nJOIN pacientes p ON p.id = c.id_paciente;'},
    ],
  },
]

export const lessonContentById = new Map(lessonContents.map(lesson => [lesson.id, lesson]))
