import type { AppState, Question, QuestionKind } from "@/types";
import { mulberry32, questionFamily, shuffle } from "./quiz";

export function practiceHint(kind: QuestionKind) {
  const hints: Record<QuestionKind, string> = {
    conceitual:
      "Procure a alternativa que preserva a definição completa, sem prometer mais do que o conceito realmente faz.",
    prática:
      "Separe o caso em dados disponíveis, regra que precisa ser aplicada e resultado esperado.",
    sql: "Leia primeiro FROM e JOIN, depois WHERE e, por último, o que o SELECT devolve.",
    código:
      "Simule a execução linha por linha e acompanhe como cada variável ou estrutura muda.",
    erro: "Compare o requisito com cada detalhe da solução e encontre o primeiro ponto em que eles deixam de coincidir.",
  };
  return hints[kind];
}

export function selectPractice(
  bank: Question[],
  state: AppState,
  count = 5,
  seed = Date.now(),
) {
  const rnd = mulberry32(seed);
  const ranked = bank
    .map((question) => ({
      question,
      attempts: state.practice[question.id]?.attempts ?? 0,
      mistakes:
        (state.practice[question.id]?.attempts ?? 0) -
        (state.practice[question.id]?.correct ?? 0),
      tie: rnd(),
    }))
    .sort(
      (a, b) =>
        a.attempts - b.attempts || b.mistakes - a.mistakes || a.tie - b.tie,
    );
  const families = new Set<string>();
  const chosen: Question[] = [];
  for (const item of ranked) {
    if (chosen.length >= Math.min(count, bank.length)) break;
    const family = questionFamily(item.question);
    if (!families.has(family)) {
      families.add(family);
      chosen.push(item.question);
    }
  }
  return shuffle(chosen, rnd);
}
