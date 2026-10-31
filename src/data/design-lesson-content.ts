import type { LessonContent } from "./lesson-content";

const source = "2_2026_Aula - Design Profissional.pdf";

export const designLessonContents: LessonContent[] = [
  {
    id: "Aula 01", title: "Carreiras em tecnologia", topics: "Áreas, papéis e perfis profissionais", parts: 1,
    summary: "Panorama das possibilidades de atuação em TI e das diferenças entre desenvolvimento, dados, infraestrutura, segurança, design, qualidade, gestão e suporte.",
    goals: ["Reconhecer diferentes áreas de TI", "Relacionar atividades a papéis profissionais", "Perceber que nem toda carreira em TI é programação"],
    sources: [source],
    sections: [
      { title: "Um mercado plural", pages: "p. 8-11", body: "Tecnologia reúne carreiras criativas, analíticas, comunicativas e estratégicas. O ponto de partida é observar interesses e aptidões, não assumir que todo profissional precisa programar.", points: ["Há funções técnicas e de gestão.", "A mesma solução envolve perfis diferentes.", "Escolha de carreira exige autoconhecimento."] },
      { title: "Produto e desenvolvimento", pages: "p. 9-10", body: "Desenvolvimento web, mobile e de sistemas cria e mantém soluções. UI/UX organiza interfaces e experiências; qualidade de software verifica se o produto funciona como esperado.", points: ["Frontend, backend e mobile implementam produtos.", "UI/UX centra decisões na experiência.", "QA testa e valida qualidade."] },
      { title: "Dados, nuvem e segurança", pages: "p. 9-10", body: "Ciência de dados transforma registros em insights; cloud mantém serviços e infraestrutura; segurança protege sistemas, redes e dados contra ameaças e acessos indevidos.", points: ["Dados apoiam decisões.", "Cloud sustenta serviços escaláveis.", "Segurança reduz riscos."] },
      { title: "Operação e liderança", pages: "p. 9-10", body: "Redes, suporte, DevOps, SRE, Scrum Master e gestão de TI mantêm a operação, integram equipes e aumentam confiabilidade e velocidade de entrega.", points: ["DevOps integra desenvolvimento e operações.", "SRE cuida de confiabilidade.", "Scrum Master facilita o trabalho ágil."] },
    ],
  },
  {
    id: "Aula 02", title: "Identidade profissional digital", topics: "Presença online, credibilidade e reputação", parts: 1,
    summary: "Como a presença online funciona como extensão do currículo e influencia credibilidade, networking e oportunidades.",
    goals: ["Construir presença digital coerente", "Distinguir sinais positivos e negativos", "Entender o olhar dos recrutadores"], sources: [source],
    sections: [
      { title: "A primeira impressão", pages: "p. 12-13", body: "LinkedIn, GitHub e outras plataformas tornam visíveis trajetória, projetos, cursos e certificações. Um perfil online bem cuidado amplia credibilidade e pode abrir portas.", points: ["Presença digital complementa o currículo.", "Projetos demonstram prática.", "Atualização transmite continuidade."] },
      { title: "O que recrutadores observam", pages: "p. 14", body: "Formação, cursos, experiências, projetos, competências técnicas e comportamentais, escrita e participação na comunidade ajudam a compor a leitura profissional.", points: ["Hard skills e soft skills são avaliadas.", "Evidências valem mais que listas.", "Postura também comunica competência."] },
      { title: "Presença positiva", pages: "p. 15", body: "Perfil completo, foto adequada, projetos, eventos, certificações, comunidades e comunicação respeitosa formam uma presença profissional positiva.", points: ["Compartilhe conteúdo relevante.", "Mantenha informações atuais.", "Interaja de forma ética."] },
      { title: "Riscos de reputação", pages: "p. 16-18", body: "Perfis abandonados, dados desatualizados, comentários ofensivos e exposição inadequada podem comprometer a imagem profissional.", points: ["Consistência entre plataformas importa.", "Comunicação pública deixa rastros.", "GitHub e LinkedIn cumprem papéis complementares."] },
    ],
  },
  {
    id: "Aula 03", title: "Construção do perfil profissional", topics: "Competências, objetivos e evidências", parts: 1,
    summary: "Organização estratégica de formação, experiências, projetos, competências e objetivos para comunicar valor ao mercado.",
    goals: ["Estruturar um perfil profissional", "Selecionar evidências alinhadas à vaga", "Comunicar objetivos e resultados"], sources: [source],
    sections: [
      { title: "O que é o perfil profissional", pages: "p. 19-21", body: "É a apresentação organizada das competências, experiências e objetivos de uma pessoa e da forma como ela se posiciona para o mercado.", points: ["Representa identidade profissional.", "Ajuda recrutadores a entender potencial.", "Apoia o planejamento de carreira."] },
      { title: "Estrutura básica", pages: "p. 22", body: "Formação, cursos, certificações, projetos, experiências, competências técnicas e comportamentais formam a base do perfil.", points: ["Inclua projetos acadêmicos relevantes.", "Destaque responsabilidades e resultados.", "Use competências demonstráveis."] },
      { title: "Critérios de seleção", pages: "p. 23", body: "Recrutadores buscam alinhamento com a vaga, evidências práticas, projetos, capacidade de comunicação e interesse pela área.", points: ["Personalize por objetivo.", "Mostre aplicação do conhecimento.", "Evite informações sem relação."] },
      { title: "Manutenção estratégica", pages: "p. 24", body: "Conhecer competências, definir objetivos, registrar experiências, destacar resultados e atualizar informações mantém o perfil útil.", points: ["Perfil não é documento estático.", "Resultados tornam descrições mais fortes.", "Presença online requer revisão periódica."] },
    ],
  },
  {
    id: "Aula 04", title: "LinkedIn estratégico", topics: "Headline, Sobre, experiências e competências", parts: 1,
    summary: "Preenchimento do LinkedIn como rede profissional viva, com linguagem em primeira pessoa, evidências e palavras-chave coerentes.",
    goals: ["Diferenciar LinkedIn de currículo", "Escrever headline e Sobre com clareza", "Selecionar experiências e competências relevantes"], sources: [source],
    sections: [
      { title: "Currículo x LinkedIn", pages: "p. 25-26", body: "O currículo é conciso, formal e direcionado; o LinkedIn é uma rede profissional dinâmica, detalhada e interativa, escrita em primeira pessoa.", points: ["Currículo costuma ter até duas páginas.", "LinkedIn pode detalhar trajetória.", "O perfil evolui com interações."] },
      { title: "Foto e headline", pages: "p. 27-28", body: "A foto deve ser adequada ao ambiente profissional. A headline funciona como cartão de visitas e precisa comunicar área, competências e direção.", points: ["Evite fotos inadequadas ou confusas.", "Não use apenas 'estudante'.", "Prefira termos relacionados ao objetivo."] },
      { title: "Sobre e experiência", pages: "p. 29-30", body: "A seção Sobre sintetiza identidade e objetivos. Experiência descreve atividades, responsabilidades e resultados com nomenclatura profissional.", points: ["Evite copiar textos prontos.", "Não exponha dados pessoais desnecessários.", "Contextualize realizações."] },
      { title: "Formação e competências", pages: "p. 31-41", body: "Formação e certificados devem ser completos e coerentes. Competências técnicas e comportamentais precisam refletir aquilo que a pessoa realmente consegue demonstrar.", points: ["Não transforme curso incompleto em certificado.", "Evite dezenas de habilidades genéricas.", "Use exemplos concretos para soft skills."] },
    ],
  },
  {
    id: "Aula 05", title: "Networking profissional", topics: "Relacionamentos, reciprocidade e convenções", parts: 1,
    summary: "Networking como construção contínua de relações de valor, inclusive para pessoas introvertidas.",
    goals: ["Praticar networking sem spam", "Gerar valor antes de pedir", "Manter relações profissionais"], sources: [source],
    sections: [
      { title: "Relações que geram valor", pages: "p. 42-43", body: "Networking conecta pessoas para trocar conhecimentos, experiências, oportunidades e apoio. Não é colecionar contatos, mas construir relações.", points: ["Troca deve ser genuína.", "Relacionamento é contínuo.", "Valor vem antes do pedido."] },
      { title: "Networking para introvertidos", pages: "p. 44", body: "Não é preciso ser popular: fazer perguntas relevantes, compartilhar conteúdo, participar de discussões, ajudar e colaborar já cria conexão.", points: ["Qualidade supera quantidade.", "Escuta ativa também é participação.", "Contribuições pequenas constroem reputação."] },
      { title: "Boas práticas", pages: "p. 45", body: "Cumprimentar, demonstrar interesse, compartilhar experiências, ajudar e manter contato periodicamente são comportamentos recomendados.", points: ["Personalize a abordagem.", "Respeite o tempo da outra pessoa.", "Cultive contato após o evento."] },
      { title: "O que evitar", pages: "p. 45", body: "Pedir favores imediatamente, enviar spam, falar apenas sobre si, procurar alguém só quando precisa e adicionar sem interação enfraquecem a relação.", points: ["Networking não é abordagem oportunista.", "Volume não substitui confiança.", "Reciprocidade exige contexto."] },
    ],
  },
  {
    id: "Aula 06", title: "Comunidades tech", topics: "Aprendizado, colaboração e oportunidades", parts: 1,
    summary: "Como comunidades online e presenciais aceleram aprendizado, criam conexões e tornam conhecimento visível.",
    goals: ["Reconhecer tipos de comunidade", "Participar ativamente", "Relacionar comunidade e oportunidades"], sources: [source],
    sections: [
      { title: "O que são comunidades", pages: "p. 46-47", body: "São grupos que compartilham interesses em tecnologia e colaboram para aprender, ensinar e crescer, em fóruns, redes, Discord, Telegram, meetups e conferências.", points: ["Reduzem isolamento.", "Ajudam a resolver dúvidas.", "Criam relações profissionais."] },
      { title: "Plataformas amplas", pages: "p. 48", body: "Stack Overflow, GitHub, Meetup, Reddit, DEV.to e Hackathons conectam pessoas por perguntas, projetos, eventos e produção de conteúdo.", points: ["Cada plataforma favorece um tipo de interação.", "GitHub permite colaboração prática.", "Eventos aproximam comunidade e projeto."] },
      { title: "Comunidades específicas", pages: "p. 49", body: "AWS User Groups, Google Developer Groups, SysAdminas, LUGs, He4rt Developers e Front-End Brasil atendem tecnologias e públicos específicos.", points: ["Especialização facilita troca contextualizada.", "Inclusão também orienta comunidades.", "Escolha deve combinar com objetivos."] },
      { title: "Participação ativa", pages: "p. 50-54", body: "O estudo de caso mostra que conhecimento, participação e networking funcionam juntos. Quem contribui tende a ser lembrado e indicado.", points: ["Compartilhar conhecimento gera crescimento.", "Participação ativa vale mais que observação passiva.", "Carreira se constrói com conhecimento e conexões."] },
    ],
  },
  {
    id: "Aula 07", title: "Portfólio digital e GitHub", topics: "Projetos, repositórios e evidências", parts: 1,
    summary: "Portfólio digital como coleção organizada de projetos que comprova conhecimentos, experiências e capacidade de resolver problemas.",
    goals: ["Selecionar projetos para portfólio", "Organizar repositórios", "Usar GitHub como evidência profissional"], sources: [source],
    sections: [
      { title: "Portfólio é evidência", pages: "p. 55-57", body: "Um portfólio demonstra habilidades na prática, complementa o currículo e facilita processos seletivos. Para desenvolvimento, projetos cumprem o papel que peças visuais cumprem para designers.", points: ["Inclua exercícios relevantes e projetos autorais.", "Mostre evolução profissional.", "Explique problemas resolvidos."] },
      { title: "GitHub como vitrine técnica", pages: "p. 58-59", body: "GitHub armazena código, permite colaboração e ajuda a construir um portfólio. Recrutadores observam organização, qualidade, frequência, interesse e documentação.", points: ["Qualidade supera quantidade.", "Repositórios vazios prejudicam leitura.", "README inexistente reduz contexto."] },
      { title: "Anatomia do repositório", pages: "p. 60", body: "O repositório reúne código-fonte, configuração, documentação, imagens, histórico e informações sobre colaboradores.", points: ["Cada projeto deve ter seu repositório.", "Histórico registra evolução.", "Arquivos precisam de estrutura compreensível."] },
      { title: "Organização profissional", pages: "p. 61-62", body: "Pastas claras, nomes específicos, README, requisitos e histórico ajudam outras pessoas a entender, executar e manter o projeto.", points: ["Evite nomes genéricos.", "Documente dependências.", "Uma estrutura clara transmite profissionalismo."] },
    ],
  },
  {
    id: "Aula 08", title: "Documentação e README", topics: "Contexto, execução e apresentação", parts: 1,
    summary: "Documentação de projeto com foco em README profissional, instalação, uso e demonstrações visuais.",
    goals: ["Explicar um projeto de forma autônoma", "Estruturar um README completo", "Usar recursos visuais com propósito"], sources: [source],
    sections: [
      { title: "Por que documentar", pages: "p. 63-64", body: "Documentação explica o que o projeto faz, como executar, como usar e quais tecnologias emprega. Sem isso, o trabalho se torna difícil de entender, manter e avaliar.", points: ["Código sozinho não conta toda a história.", "Documentação reduz dependência do autor.", "Clareza facilita manutenção."] },
      { title: "Conteúdo mínimo", pages: "p. 65-66", body: "Um README deve conter título, descrição, objetivo, tecnologias, instalação, uso, autor e instruções de execução.", points: ["Comece pelo propósito.", "Descreva pré-requisitos.", "Forneça passos reproduzíveis."] },
      { title: "A página inicial do projeto", pages: "p. 66-67", body: "README normalmente é o primeiro arquivo visualizado no repositório. Ele funciona como vitrine e guia de entrada.", points: ["Leitor precisa entender rapidamente.", "A estrutura deve ser escaneável.", "Links devem levar a recursos reais."] },
      { title: "Como destacar", pages: "p. 68", body: "Capturas de tela, GIFs, diagramas, fluxogramas, demonstração e resultados tornam o projeto mais fácil de avaliar.", points: ["Visual deve explicar, não decorar.", "Mostre funcionamento real.", "Resultados reforçam impacto."] },
    ],
  },
  {
    id: "Aula 09", title: "Comunicação científica e projetos", topics: "Resumo, artigo e entregas colaborativas", parts: 1,
    summary: "Diferenças entre resumo e artigo científico e organização de projetos acadêmicos em repositórios.",
    goals: ["Distinguir resumo de artigo", "Sintetizar literatura com objetivo claro", "Organizar entregas de projeto"], sources: [source],
    sections: [
      { title: "Resumo x artigo", pages: "p. 78", body: "Resumo científico é sintético e apresenta objetivo, metodologia, resultados e conclusões; artigo desenvolve o tema com fundamentação, método, análise e discussão detalhados.", points: ["Resumo comunica a essência.", "Artigo oferece profundidade.", "Extensão e finalidade são diferentes."] },
      { title: "Resumo teórico qualitativo", pages: "p. 79-80", body: "O resumo proposto sintetiza e discute conhecimentos já publicados sem produzir dados originais. O artigo científico pode relatar resultados inéditos ou revisões sistemáticas.", points: ["Use fontes científicas.", "Síntese não é cópia.", "Objetivo orienta seleção de conteúdo."] },
      { title: "Temas de responsabilidade", pages: "p. 82", body: "Sustentabilidade, impacto social, inclusão digital, acessibilidade e ética profissional aparecem como eixos para investigação.", points: ["Tema amplo precisa de recorte.", "Tecnologia tem efeitos sociais.", "A pesquisa deve articular evidências."] },
      { title: "Projeto documentado", pages: "p. 81-86", body: "A entrega exige repositório organizado, arquivos e informações do resumo. O projeto interdisciplinar também pede README com público-alvo, funcionalidades, tecnologias, requisitos e execução.", points: ["Repositório centraliza versões.", "Instruções devem ser reproduzíveis.", "Documentação conecta autoria e resultado."] },
    ],
  },
  {
    id: "Aula 10", title: "Planejamento de carreira", topics: "Autoconhecimento, SMART e horizontes", parts: 1,
    summary: "Carreira como projeto de longo prazo, com objetivos, recursos, prazos, métricas e metas SMART.",
    goals: ["Tratar carreira como processo contínuo", "Formular metas SMART", "Planejar curto, médio e longo prazo"], sources: [source],
    sections: [
      { title: "Processo contínuo", pages: "p. 87-90", body: "Planejamento de carreira combina autoconhecimento, análise de mercado, decisões estratégicas e tomada de responsabilidade individual.", points: ["Mercado muda rapidamente.", "Flexibilidade é necessária.", "Planejamento deve ser revisado."] },
      { title: "Carreira como projeto", pages: "p. 91", body: "Objetivos claros, recursos identificados, prazos e métricas permitem acompanhar o avanço profissional como um projeto de longo prazo.", points: ["Defina destino.", "Mapeie recursos necessários.", "Acompanhe resultados."] },
      { title: "Técnica SMART", pages: "p. 92", body: "Metas eficazes são específicas, mensuráveis, alcançáveis, relevantes e temporais.", points: ["'Aprender programação' é vago.", "Tecnologia, projeto e prazo tornam a meta verificável.", "Relevância conecta meta e carreira."] },
      { title: "Horizontes", pages: "p. 93", body: "Curto prazo cobre até dois anos, médio prazo de dois a cinco e longo prazo acima de cinco anos, com níveis crescentes de consolidação e impacto.", points: ["Curto: alicerces.", "Médio: consolidação.", "Longo: visão e legado."] },
    ],
  },
  {
    id: "Aula 11", title: "Metas e progressão profissional", topics: "Júnior, pleno, sênior e arquiteto", parts: 1,
    summary: "Exemplos de metas por horizonte e progressão baseada em autonomia, liderança e visão de solução.",
    goals: ["Definir metas realistas", "Entender progressão de carreira", "Evitar confundir tempo com maturidade"], sources: [source],
    sections: [
      { title: "Metas de curto prazo", pages: "p. 94", body: "Desenvolvimento técnico imediato, portfólio com projetos e networking profissional formam os alicerces dos primeiros dois anos.", points: ["Construa fundamentos.", "Publique projetos progressivos.", "Crie conexões relevantes."] },
      { title: "Metas de médio prazo", pages: "p. 95", body: "Entre dois e cinco anos, especialização, experiência qualificada, certificações estratégicas e liderança ampliam responsabilidade.", points: ["Escolha uma ou duas áreas.", "Assuma projetos maiores.", "Certifique com propósito."] },
      { title: "Metas de longo prazo", pages: "p. 96", body: "Referência técnica, inovação e desenvolvimento de outras pessoas caracterizam objetivos de cinco anos ou mais.", points: ["Contribua com a comunidade.", "Lidere impacto.", "Mentoria multiplica conhecimento."] },
      { title: "Progressão por maturidade", pages: "p. 97", body: "Júnior aprende com apoio; pleno assume responsabilidades; sênior lidera projetos; arquiteto conecta decisões a soluções amplas.", points: ["Título não depende apenas de tempo.", "Autonomia cresce progressivamente.", "Revisões periódicas orientam evolução."] },
    ],
  },
  {
    id: "Aula 12", title: "Áreas de atuação em TI", topics: "Desenvolvimento, dados, segurança, cloud e gestão", parts: 1,
    summary: "Mapeamento de oportunidades, responsabilidades e ferramentas nas principais trilhas profissionais de TI.",
    goals: ["Comparar trilhas de atuação", "Relacionar ferramentas e responsabilidades", "Escolher pela afinidade, não pela moda"], sources: [source],
    sections: [
      { title: "Desenvolvimento de software", pages: "p. 98-99", body: "Frontend cria interfaces, backend cuida de APIs e regras, fullstack combina camadas; mobile desenvolve para dispositivos e sistemas atende aplicações corporativas.", points: ["Web envolve camadas diferentes.", "Mobile exige ecossistemas próprios.", "Sistemas corporativos integram dados e processos."] },
      { title: "Dados e inteligência artificial", pages: "p. 100", body: "Data science extrai insights, machine learning cria modelos e engenharia de dados constrói pipelines e plataformas confiáveis.", points: ["Cientista interpreta padrões.", "Engenheiro prepara infraestrutura de dados.", "ML leva modelos à produção."] },
      { title: "Segurança e nuvem", pages: "p. 101-102", body: "Segurança inclui análise, testes e arquitetura. Cloud envolve infraestrutura, DevOps e SRE com automação, containers, observabilidade e confiabilidade.", points: ["Pentest simula ataques autorizados.", "DevOps automatiza entrega.", "SRE equilibra velocidade e confiabilidade."] },
      { title: "Gestão de TI", pages: "p. 103-104", body: "Product Manager, Scrum Master e CTO conectam tecnologia, pessoas e estratégia em níveis diferentes.", points: ["PM organiza visão de produto.", "Scrum Master facilita o processo.", "CTO orienta estratégia tecnológica."] },
    ],
  },
  {
    id: "Aula 13", title: "Certificações estratégicas", topics: "Validação, prática e retorno", parts: 1,
    summary: "Certificações como validação específica que complementa diploma, experiência e projetos reais.",
    goals: ["Diferenciar diploma e certificação", "Avaliar uma certificação por objetivo", "Combinar validação formal e prática"], sources: [source],
    sections: [
      { title: "Diploma x certificação", pages: "p. 105-106", body: "Diploma atesta formação abrangente e base acadêmica; certificação valida expertise específica em uma tecnologia ou metodologia.", points: ["Funções diferentes, não concorrentes.", "Certificação costuma exigir renovação.", "Diploma oferece visão ampla."] },
      { title: "Valor no mercado", pages: "p. 107", body: "Certificações refletem demanda corporativa, diferenciação profissional e critérios de progressão, mas seu valor depende de contexto e experiência.", points: ["Sinalizam conhecimento validado.", "A escolha precisa combinar com a área.", "Custo e renovação entram na análise."] },
      { title: "Combinação ideal", pages: "p. 108", body: "Experiência hands-on aplica conhecimento, projetos reais resolvem problemas e certificação oferece validação formal.", points: ["Certificação não substitui prática.", "Projeto torna competência visível.", "Validação completa o conjunto."] },
      { title: "Retorno e escolha", pages: "p. 109-110", body: "A análise deve considerar emissor, pré-requisitos, formato, duração, custo, idioma, validade e conteúdos cobrados.", points: ["Pesquise antes de investir.", "Considere o estágio de carreira.", "Evite colecionar selos sem aplicação."] },
    ],
  },
  {
    id: "Aula 14", title: "IA no desenvolvimento profissional", topics: "Prompts, aprendizagem e produtividade", parts: 1,
    summary: "Uso estratégico de IA para aprender, planejar e produzir melhor, com supervisão humana e prompts específicos.",
    goals: ["Estruturar prompts úteis", "Escolher ferramentas por tarefa", "Usar IA sem terceirizar julgamento"], sources: [source],
    sections: [
      { title: "IA como amplificador", pages: "p. 111-112", body: "Ferramentas de IA aceleram tarefas, ajudam a compreender capacidades e limitações e exigem domínio do problema para supervisão crítica.", points: ["IA amplia produtividade.", "Não substitui repertório.", "Prompt engineering é habilidade prática."] },
      { title: "Prompt específico", pages: "p. 113-114", body: "Um bom prompt apresenta contexto, tarefa, formato e restrições. Iteração e refinamento melhoram a resposta.", points: ["Defina quem você é e o objetivo.", "Peça uma saída verificável.", "Declare limites e recursos."] },
      { title: "Aplicações de carreira", pages: "p. 115", body: "Planejamento personalizado, análise de vagas e revisão de código podem ser apoiados por prompts que incluem perfil, critérios e formato esperado.", points: ["Forneça dados relevantes.", "Compare saída com fontes.", "Refine após avaliar lacunas."] },
      { title: "Ferramentas e tarefas", pages: "p. 116-117", body: "ChatGPT e Claude apoiam estudo; GitHub Copilot auxilia código; ferramentas de LinkedIn, Notion, currículos, entrevistas e agenda apoiam carreira e produtividade.", points: ["Ferramenta deve servir à tarefa.", "Código sugerido precisa de revisão.", "Automação não elimina responsabilidade."] },
    ],
  },
  {
    id: "Aula 15", title: "Mercado, tendências e futuro", topics: "Vagas, competências e aprendizagem contínua", parts: 1,
    summary: "Panorama do mercado brasileiro, tendências emergentes, preparação para processos seletivos e competências para carreiras futuras.",
    goals: ["Interpretar tendências sem modismo", "Preparar-se para processos seletivos", "Construir perfil T-shaped e adaptável"], sources: [source],
    sections: [
      { title: "Mercado em transformação", pages: "p. 118-120", body: "A demanda convive com falta de profissionais qualificados. Empresas procuram pessoas que resolvam problemas e traduzam necessidades do negócio em soluções.", points: ["Não basta codificar.", "Soft skills ganharam importância.", "Transformação digital sustenta demanda."] },
      { title: "Tendências emergentes", pages: "p. 121", body: "IA e ML, quantum computing, edge/IoT e cibersegurança evoluída criam novas funções e exigem base técnica para acompanhar mudanças.", points: ["Tendência deve ser conectada a fundamentos.", "Edge processa perto da origem.", "Segurança acompanha novas superfícies."] },
      { title: "Vagas e processos seletivos", pages: "p. 122-124", body: "LinkedIn, Gupy, Glassdoor, Programathor, Revelo, GeekHunter e encontros de comunidade ajudam na busca. Entrevistas avaliam técnica, comportamento e projetos.", points: ["Pesquise empresa e vaga.", "Use STAR em exemplos comportamentais.", "Apresente problema, decisão e resultado."] },
      { title: "Competências para o futuro", pages: "p. 125-128", body: "Fundamentos técnicos, comunicação, pensamento crítico, adaptação, colaboração e liderança sustentam trabalho híbrido, contratos flexíveis, especialização T-shaped e impacto social.", points: ["Aprendizado contínuo é obrigatório.", "T-shaped combina profundidade e repertório.", "IA amplifica, não substitui."] },
    ],
  },
];
