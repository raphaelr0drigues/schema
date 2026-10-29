import type { AppState, Attempt } from "@/types";
const KEY = "schema-progress-v1";
const empty: AppState = { answered: {}, attempts: [], studied: {} };
export function loadState(): AppState {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? "null");
    return saved
      ? {
          answered: saved.answered ?? {},
          attempts: saved.attempts ?? [],
          studied: saved.studied ?? {},
        }
      : empty;
  } catch {
    return empty;
  }
}
export function saveAttempt(state: AppState, attempt: Attempt): AppState {
  const answered = { ...state.answered };
  for (const a of attempt.answers) {
    const old = answered[a.questionId] ?? {
      attempts: 0,
      correct: 0,
      lastSelected: -1,
    };
    answered[a.questionId] = {
      attempts: old.attempts + 1,
      correct: old.correct + (a.correct ? 1 : 0),
      lastSelected: a.selected,
    };
  }
  const next: AppState = {
    answered,
    attempts: [attempt, ...state.attempts].slice(0, 50),
    studied: state.studied,
  };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
export function clearState() {
  localStorage.removeItem(KEY);
}
export function markStudied(
  state: AppState,
  disciplineId: string,
  lessonId: string,
): AppState {
  const next = {
    ...state,
    studied: { ...state.studied, [`${disciplineId}:${lessonId}`]: true },
  };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
