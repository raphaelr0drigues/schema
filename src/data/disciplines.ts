import { lessonContents } from "./lesson-content";
import { questionBank } from "./question-bank";
import { frontendLessonContents } from "./frontend-lesson-content";
import { frontendQuestionBank } from "./frontend-question-bank";
import { algorithmsLessonContents } from "./algorithms-lesson-content";
import { algorithmsQuestionBank } from "./algorithms-question-bank";
import { designLessonContents } from "./design-lesson-content";
import { designQuestionBank } from "./design-question-bank";

export type DisciplineId = "mdb" | "frontend" | "algorithms" | "design";
export const disciplines = {
  mdb: {
    id: "mdb" as const,
    name: "Modelagem de Banco de Dados",
    short: "Banco de Dados",
    code: "MDB",
    description:
      "Do modelo conceitual ao SQL, com integridade, normalização e consultas.",
    mascot: {
      name: "Nilo",
      animal: "Golfinho",
      image: "mascots/mdb-dolphin.webp",
      alt: "Nilo, o golfinho mascote de Modelagem de Banco de Dados",
    },
    lessons: lessonContents,
    questions: questionBank,
  },
  frontend: {
    id: "frontend" as const,
    name: "Desenvolvimento Front-End para Web",
    short: "Front-End Web",
    code: "FEW",
    description:
      "HTML, CSS, responsividade, Git, JavaScript, DOM e consumo de dados.",
    mascot: {
      name: "Pixel",
      animal: "Camaleão",
      image: "mascots/frontend-chameleon.webp",
      alt: "Pixel, o camaleão mascote de Desenvolvimento Front-End",
    },
    lessons: frontendLessonContents,
    questions: frontendQuestionBank,
  },
  algorithms: {
    id: "algorithms" as const,
    name: "Algoritmos e Pensamento Computacional",
    short: "Algoritmos",
    code: "APC",
    description:
      "Lógica, linguagem C, controle de fluxo, arrays, structs, arquivos e modularização.",
    mascot: {
      name: "Otto",
      animal: "Polvo",
      image: "mascots/algorithms-octopus.webp",
      alt: "Otto, o polvo mascote de Algoritmos e Pensamento Computacional",
    },
    lessons: algorithmsLessonContents,
    questions: algorithmsQuestionBank,
  },
  design: {
    id: "design" as const,
    name: "Design Profissional",
    short: "Design Profissional",
    code: "DPR",
    description:
      "Identidade profissional, portfólio, carreira, certificações, IA e mercado de TI.",
    mascot: {
      name: "Vega",
      animal: "Raposa",
      image: "mascots/design-fox.webp",
      alt: "Vega, a raposa mascote de Design Profissional",
    },
    lessons: designLessonContents,
    questions: designQuestionBank,
  },
};
export const disciplineList = Object.values(disciplines);
