export type Difficulty = "fácil" | "média" | "difícil";
export type QuestionKind = "conceitual" | "prática" | "sql" | "código" | "erro";
export type QuestionVisual =
  | {
      type: "code";
      language: string;
      caption: string;
      content: string;
      highlightLines?: number[];
    }
  | {
      type: "diagram";
      caption: string;
      nodes: { id: string; label: string; detail?: string }[];
      edges: { from: string; to: string; label?: string }[];
    }
  | {
      type: "table";
      caption: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "image";
      caption: string;
      src: string;
      alt: string;
    };
export interface Question {
  id: string;
  lesson: string;
  page: number;
  topic: string;
  difficulty: Difficulty;
  kind: QuestionKind;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
  source: string;
  familyId?: string;
  reference?: { label: string; url: string };
  origin?: string;
  visual?: QuestionVisual;
}
export interface AttemptAnswer {
  questionId: string;
  selected: number;
  correct: boolean;
}
export interface Attempt {
  id: string;
  date: string;
  score: number;
  answers: AttemptAnswer[];
  disciplineId?: "mdb" | "frontend";
  lessonId?: string | null;
}
export interface AppState {
  answered: Record<
    string,
    { attempts: number; correct: number; lastSelected: number }
  >;
  attempts: Attempt[];
  studied: Record<string, boolean>;
}
