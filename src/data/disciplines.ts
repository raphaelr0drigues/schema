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
    lessons: frontendLessonContents,
    questions: frontendQuestionBank,
  },
};
export const disciplineList = Object.values(disciplines);
