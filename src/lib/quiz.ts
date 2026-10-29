import type { AppState, Difficulty, Question } from "@/types";
export function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function shuffle<T>(items: T[], rnd = Math.random) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function questionFamily(question: Question) {
  return (
    question.familyId ??
    (/^(?:q|fe)-\d+-\d+$/.test(question.id)
      ? question.id.replace(/-\d+$/, "")
      : question.id)
  );
}
export function selectQuiz(
  bank: Question[],
  state: AppState,
  count = 10,
  seed = Date.now(),
) {
  const rnd = mulberry32(seed);
  const targets: Record<Difficulty, number> = {
    fácil: Math.floor(count * 0.3),
    média: count - 2 * Math.floor(count * 0.3),
    difícil: Math.floor(count * 0.3),
  };
  const ranked = bank
    .map((q) => ({ q, tie: rnd() }))
    .sort(
      (a, b) =>
        (state.answered[a.q.id]?.attempts ?? 0) -
          (state.answered[b.q.id]?.attempts ?? 0) || a.tie - b.tie,
    )
    .map((x) => x.q);
  const chosen: Question[] = [];
  const families = new Set<string>();
  const add = (q: Question) => {
    chosen.push(q);
    families.add(questionFamily(q));
  };
  for (const difficulty of Object.keys(targets) as Difficulty[]) {
    for (const q of ranked) {
      if (
        chosen.filter((x) => x.difficulty === difficulty).length >=
        targets[difficulty]
      )
        break;
      if (q.difficulty === difficulty && !families.has(questionFamily(q)))
        add(q);
    }
  }
  // Completa somente com famílias distintas; nunca repete uma redação para preencher vagas.
  for (const q of ranked) {
    if (chosen.length >= count) break;
    if (!families.has(questionFamily(q))) add(q);
  }
  if (chosen.length < count)
    throw new Error(
      `Banco insuficiente: são necessárias ${count} questões distintas; disponíveis ${chosen.length}.`,
    );
  return shuffle(chosen, rnd);
}
export function shuffledOptions(q: Question, seed: number) {
  const indexed = q.options.map((text, index) => ({ text, index }));
  const options = shuffle(indexed, mulberry32(seed));
  return { options, correct: options.findIndex((o) => o.index === q.correct) };
}
