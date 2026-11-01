// @vitest-environment jsdom
import { afterEach, expect, it } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { App } from "./App";
import { frontendQuestionBank } from "./data/frontend-question-bank";
import { algorithmsQuestionBank } from "./data/algorithms-question-bank";
import { designQuestionBank } from "./data/design-question-bank";

afterEach(() => {
  cleanup();
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

it("mantém o modo escuro como padrão e persiste a escolha pelo modo claro", () => {
  render(<App />);
  expect(document.documentElement.dataset.theme).toBe("dark");
  fireEvent.click(
    screen.getByRole("button", { name: "Ativar modo claro" }),
  );
  expect(document.documentElement.dataset.theme).toBe("light");
  expect(localStorage.getItem("schema-theme")).toBe("light");
  expect(screen.getByRole("button", { name: "Ativar modo escuro" })).toBeTruthy();
});

it("corrige exatamente as dez questões mostradas e preserva a disciplina no histórico", async () => {
  window.scrollTo = () => {};
  localStorage.clear();
  render(<App />);
  fireEvent.click(
    screen.getAllByRole("button", { name: "Abrir disciplina" })[1],
  );
  await screen.findByRole("heading", { name: "Aulas e assuntos" });
  fireEvent.click(screen.getAllByRole("button", { name: "Estudar aula" })[0]);
  fireEvent.click(
    await screen.findByRole("button", { name: "Simulado da aula" }),
  );
  await screen.findByRole("heading", { name: "10 questões. Uma tentativa." });
  const shown: string[] = [];
  for (let i = 0; i < 10; i++) {
    const current = frontendQuestionBank.find((q) =>
      screen.queryByText(q.prompt, { exact: true }),
    );
    expect(current).toBeDefined();
    expect(current!.lesson).toBe("Aula 01");
    shown.push(current!.id);
    const options = within(
      screen.getByRole("group", { name: "Alternativas" }),
    ).getAllByRole("button");
    const correct = options.find(
      (button) =>
        button.textContent?.slice(1) === current!.options[current!.correct],
    );
    expect(correct).toBeDefined();
    fireEvent.click(correct!);
    fireEvent.click(
      screen.getByRole("button", {
        name: i < 9 ? "Próxima" : "Corrigir simulado",
      }),
    );
  }
  expect(new Set(shown).size).toBe(10);
  await waitFor(() =>
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("10/10"),
  );
  const saved = JSON.parse(localStorage.getItem("schema-progress-v1")!);
  expect(saved.attempts[0].disciplineId).toBe("frontend");
  expect(saved.attempts[0].lessonId).toBe("Aula 01");
  expect(
    saved.attempts[0].answers.map((a: { questionId: string }) => a.questionId),
  ).toEqual(shown);
  expect(
    saved.attempts[0].answers.every((a: { correct: boolean }) => a.correct),
  ).toBe(true);
  expect(screen.getAllByRole("link", { name: /Conferir:/ })).toHaveLength(10);
});

it("abre Algoritmos com conteúdo próprio e pratica somente a aula escolhida", async () => {
  window.scrollTo = () => {};
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: "Abrir disciplina" })[2]);
  await screen.findByRole("heading", { name: "Aulas e assuntos" });
  expect(screen.getAllByRole("button", { name: "Estudar aula" })).toHaveLength(15);
  fireEvent.click(screen.getAllByRole("button", { name: "Estudar aula" })[0]);
  expect(await screen.findByRole("heading", { name: "Algoritmos: o caminho até a solução" })).toBeTruthy();
  expect(
    await screen.findByRole("heading", { name: "O percurso da disciplina" }),
  ).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Simulado da aula" }));
  await screen.findByRole("heading", { name: "10 questões. Uma tentativa." });
  expect(
    algorithmsQuestionBank.some((q) =>
      screen.queryByText(q.prompt, { exact: true }),
    ),
  ).toBe(true);
  expect(
    algorithmsQuestionBank
      .filter((q) => screen.queryByText(q.prompt, { exact: true }))
      .every((q) => q.lesson === "Aula 01"),
  ).toBe(true);
});

it("abre Design Profissional com conteúdo próprio e simulado restrito à aula", async () => {
  window.scrollTo = () => {};
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: "Abrir disciplina" })[3]);
  await screen.findByRole("heading", { name: "Aulas e assuntos" });
  expect(screen.getAllByRole("button", { name: "Estudar aula" })).toHaveLength(15);
  fireEvent.click(screen.getAllByRole("button", { name: "Estudar aula" })[0]);
  expect(await screen.findByRole("heading", { name: "Carreiras em tecnologia" })).toBeTruthy();
  expect(await screen.findByRole("heading", { name: "Um mercado plural" })).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Simulado da aula" }));
  await screen.findByRole("heading", { name: "10 questões. Uma tentativa." });
  expect(
    designQuestionBank.some((q) => screen.queryAllByText(q.prompt, { exact: true }).length > 0),
  ).toBe(true);
  expect(
    designQuestionBank
      .filter((q) => screen.queryAllByText(q.prompt, { exact: true }).length > 0)
      .every((q) => q.lesson === "Aula 01"),
  ).toBe(true);
});

it("oferece prática guiada com dica, correção imediata e progresso local", async () => {
  window.scrollTo = () => {};
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: "Abrir disciplina" })[1]);
  await screen.findByRole("heading", { name: "Aulas e assuntos" });
  fireEvent.click(screen.getByRole("button", { name: "Prática" }));
  await screen.findByRole("heading", { name: "Prática guiada" });
  fireEvent.change(screen.getByLabelText("Aula ou disciplina completa"), {
    target: { value: "Aula 01" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Começar 5 exercícios" }));
  await screen.findByRole("heading", { name: "Resolva, confira e aprenda." });
  fireEvent.click(screen.getByRole("button", { name: "Ver uma dica" }));
  expect(screen.getByText(/Procure a alternativa|Separe o caso|Simule a execução|Compare o requisito/)).toBeTruthy();
  const current = frontendQuestionBank.find((question) =>
    screen.queryByText(question.prompt, { exact: true }),
  );
  expect(current?.lesson).toBe("Aula 01");
  const options = within(screen.getByRole("group", { name: "Alternativas" })).getAllByRole("button");
  const correct = options.find(
    (button) => button.textContent?.slice(1) === current!.options[current!.correct],
  );
  fireEvent.click(correct!);
  expect(await screen.findByText("Acertou.")).toBeTruthy();
  const saved = JSON.parse(localStorage.getItem("schema-progress-v1")!);
  expect(saved.practice[current!.id]).toEqual({ attempts: 1, correct: 1 });
  expect(screen.getByRole("button", { name: "Próximo exercício" })).toBeTruthy();
});
