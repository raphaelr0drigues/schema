import { describe, expect, it } from "vitest";
import { selectQuiz, shuffledOptions } from "./quiz";
import { questionBank } from "@/data/question-bank";
import { lessonContents } from "@/data/lesson-content";
import { frontendQuestionBank } from "@/data/frontend-question-bank";
import { frontendLessonContents } from "@/data/frontend-lesson-content";
import type { Question } from "@/types";
const bank = Array.from({ length: 30 }, (_, i) => ({
  id: String(i),
  lesson: "Aula",
  page: 1,
  topic: "t",
  difficulty: (i < 9
    ? "fácil"
    : i < 21
      ? "média"
      : "difícil") as Question["difficulty"],
  kind: "conceitual" as const,
  prompt: "?",
  options: ["a", "b", "c", "d"],
  correct: 1,
  explanation: "x",
  source: "x",
}));
describe("quiz", () => {
  it("seleciona exatamente dez e equilibra dificuldade", () => {
    const q = selectQuiz(bank, { answered: {}, attempts: [], studied: {} }, 10, 1);
    expect(q).toHaveLength(10);
    expect(q.filter((x) => x.difficulty === "fácil")).toHaveLength(3);
    expect(q.filter((x) => x.difficulty === "média")).toHaveLength(4);
    expect(q.filter((x) => x.difficulty === "difícil")).toHaveLength(3);
  });
  it("preserva a resposta ao embaralhar alternativas", () => {
    const x = shuffledOptions(bank[0], 99);
    expect(x.options[x.correct].index).toBe(1);
  });
  it("gera dez questões somente da aula selecionada", () => {
    for (const lesson of lessonContents) {
      const pool = questionBank.filter((q) => q.lesson === lesson.id);
      const quiz = selectQuiz(pool, { answered: {}, attempts: [], studied: {} }, 10, 42);
      expect(quiz, lesson.id).toHaveLength(10);
      expect(
        quiz.every((q) => q.lesson === lesson.id),
        lesson.id,
      ).toBe(true);
    }
  });
  it("mantém os simulados de Front-End dentro da disciplina e da aula", () => {
    for (const lesson of frontendLessonContents) {
      const pool = frontendQuestionBank.filter((q) => q.lesson === lesson.id);
      const quiz = selectQuiz(pool, { answered: {}, attempts: [], studied: {} }, 10, 84);
      expect(quiz, lesson.id).toHaveLength(10);
      expect(quiz.every((q) => q.id.startsWith("fe-") && q.lesson === lesson.id), lesson.id).toBe(true);
    }
  });
  it("mantém o banco Front-End dentro da meta e com referências válidas", () => {
    expect(frontendQuestionBank).toHaveLength(176);
    expect(frontendQuestionBank.every((q) => q.source === `${q.lesson}, p. ${q.page}`)).toBe(true);
    expect(frontendQuestionBank.every((q) => q.options.length === 4 && q.correct >= 0 && q.correct < 4)).toBe(true);
  });
});
