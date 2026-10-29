import { lessonContents } from "./lesson-content";
import { questionBank } from "./question-bank";
import { frontendLessonContents } from "./frontend-lesson-content";
import { frontendQuestionBank } from "./frontend-question-bank";

export type DisciplineId = "mdb" | "frontend";
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
};
export const disciplineList = Object.values(disciplines);
