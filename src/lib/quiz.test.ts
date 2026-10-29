import { describe, expect, it } from "vitest";
import { selectQuiz, shuffledOptions, questionFamily } from "./quiz";
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
    const q = selectQuiz(
      bank,
      { answered: {}, attempts: [], studied: {} },
      10,
      1,
    );
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
      const quiz = selectQuiz(
        pool,
        { answered: {}, attempts: [], studied: {} },
        10,
        42,
      );
      expect(quiz, lesson.id).toHaveLength(10);
      expect(new Set(quiz.map(questionFamily)).size, lesson.id).toBe(10);
      expect(
        quiz.every((q) => q.lesson === lesson.id),
        lesson.id,
      ).toBe(true);
    }
  });
  it("mantém os simulados de Front-End dentro da disciplina e da aula", () => {
    for (const lesson of frontendLessonContents) {
      const pool = frontendQuestionBank.filter((q) => q.lesson === lesson.id);
      const quiz = selectQuiz(
        pool,
        { answered: {}, attempts: [], studied: {} },
        10,
        84,
      );
      expect(quiz, lesson.id).toHaveLength(10);
      expect(
        quiz.every(
          (q) => frontendQuestionBank.includes(q) && q.lesson === lesson.id,
        ),
        lesson.id,
      ).toBe(true);
    }
  });
  it("mantém o banco Front-End sem variantes contadas em dobro e com fontes", () => {
    expect(frontendQuestionBank).toHaveLength(132);
    expect(new Set(frontendQuestionBank.map(questionFamily)).size).toBe(
      frontendQuestionBank.length,
    );
    expect(
      new Set(
        frontendQuestionBank.map((q) => JSON.stringify([...q.options].sort())),
      ).size,
    ).toBe(frontendQuestionBank.length);
    expect(
      frontendQuestionBank.every(
        (q) => q.source === `${q.lesson}, p. ${q.page}`,
      ),
    ).toBe(true);
    expect(
      frontendQuestionBank.every(
        (q) => q.options.length === 4 && q.correct >= 0 && q.correct < 4,
      ),
    ).toBe(true);
    expect(
      frontendQuestionBank.every(
        (q) => q.reference?.url.startsWith("https://") && q.origin,
      ),
    ).toBe(true);
  });
  it("gera simulados distintos, equilibrados e consistentes em todas as aulas de Front-End", () => {
    for (const lesson of frontendLessonContents) {
      const pool = frontendQuestionBank.filter((q) => q.lesson === lesson.id);
      expect(pool).toHaveLength(12);
      for (let seed = 1; seed <= 100; seed++) {
        const quiz = selectQuiz(
          pool,
          { answered: {}, attempts: [], studied: {} },
          10,
          seed,
        );
        expect(new Set(quiz.map(questionFamily)).size).toBe(10);
        expect(quiz.filter((q) => q.difficulty === "fácil")).toHaveLength(3);
        expect(quiz.filter((q) => q.difficulty === "média")).toHaveLength(4);
        expect(quiz.filter((q) => q.difficulty === "difícil")).toHaveLength(3);
        for (let i = 0; i < quiz.length; i++) {
          const shown = shuffledOptions(quiz[i], seed + i * 97);
          expect(shown.options[shown.correct].text).toBe(
            quiz[i].options[quiz[i].correct],
          );
        }
      }
    }
  });
  it("não repete variantes para completar um banco insuficiente", () => {
    const variants = Array.from({ length: 12 }, (_, i) => ({
      ...bank[i],
      id: `q-001-${i}`,
      familyId: "same",
    }));
    expect(() =>
      selectQuiz(variants, { answered: {}, attempts: [], studied: {} }, 10, 1),
    ).toThrow("Banco insuficiente");
  });
  it("prioriza perguntas ainda não respondidas dentro da mesma dificuldade", () => {
    const pool = frontendQuestionBank.filter((q) => q.lesson === "Aula 01");
    const old = pool.find((q) => q.difficulty === "média")!;
    const state = {
      answered: { [old.id]: { attempts: 2, correct: 1, lastSelected: 0 } },
      attempts: [],
      studied: {},
    };
    const quiz = selectQuiz(pool, state, 10, 1);
    expect(quiz.some((q) => q.id === old.id)).toBe(false);
  });
});
