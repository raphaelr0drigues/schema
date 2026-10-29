import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  BookOpen,
  BrainCircuit,
  ChartNoAxesColumnIncreasing,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  FileText,
  History,
  Home,
  Menu,
  Play,
  RotateCcw,
  Search,
  X,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  disciplines,
  disciplineList,
  type DisciplineId,
} from "@/data/disciplines";
import { loadState, saveAttempt, clearState, markStudied } from "@/lib/storage";
import { selectQuiz, shuffledOptions } from "@/lib/quiz";
import { cn } from "@/lib/utils";
import type { AppState, Question } from "@/types";

type View = "dashboard" | "lessons" | "lesson" | "quiz" | "review" | "history";
type Discipline = (typeof disciplines)[DisciplineId];
const lessons = disciplines.mdb.lessons;
const nav = [
  { view: "dashboard" as const, label: "Início", icon: Home },
  { view: "lessons" as const, label: "Aulas", icon: BookOpen },
  { view: "quiz" as const, label: "Simulado", icon: BrainCircuit },
  { view: "review" as const, label: "Revisão", icon: RotateCcw },
  { view: "history" as const, label: "Histórico", icon: History },
];

export function App() {
  const [view, setView] = useState<View>("dashboard");
  const [state, setState] = useState<AppState>(() => loadState());
  const [mobile, setMobile] = useState(false);
  const [disciplineId, setDisciplineId] = useState<DisciplineId>("mdb");
  const [selectedLesson, setSelectedLesson] = useState("Aula 01");
  const [quizLesson, setQuizLesson] = useState<string | null>(null);
  const discipline = disciplines[disciplineId];
  const go = (v: View) => {
    setView(v);
    setMobile(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const chooseDiscipline = (id: DisciplineId) => {
    setDisciplineId(id);
    setSelectedLesson("Aula 01");
    setQuizLesson(null);
    go("lessons");
  };
  const openLesson = (id: string) => {
    setSelectedLesson(id);
    setState((current) => markStudied(current, disciplineId, id));
    go("lesson");
  };
  const startQuiz = (lesson: string | null = null) => {
    setQuizLesson(lesson);
    go("quiz");
  };
  const openGeneralQuiz = () => startQuiz(null);
  return (
    <div className="noise min-h-screen">
      <Sidebar
        view={view}
        go={go}
        openGeneralQuiz={openGeneralQuiz}
        open={mobile}
        close={() => setMobile(false)}
        discipline={discipline}
      />
      <main className="min-h-screen lg:pl-64">
        <Topbar
          onMenu={() => setMobile(true)}
          go={go}
          discipline={discipline}
        />
        <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-10 lg:py-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${view}-${disciplineId}-${selectedLesson}-${quizLesson ?? "geral"}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22 }}
            >
              {view === "dashboard" && (
                <Dashboard
                  state={state}
                  chooseDiscipline={chooseDiscipline}
                  go={go}
                />
              )}{" "}
              {view === "lessons" && (
                <Lessons
                  state={state}
                  discipline={discipline}
                  openLesson={openLesson}
                  chooseDiscipline={setDisciplineId}
                />
              )}{" "}
              {view === "lesson" && (
                <LessonDetail
                  lessonId={selectedLesson}
                  state={state}
                  discipline={discipline}
                  back={() => go("lessons")}
                  startQuiz={startQuiz}
                />
              )}{" "}
              {view === "quiz" && (
                <Quiz
                  state={state}
                  setState={setState}
                  go={go}
                  lessonId={quizLesson}
                  discipline={discipline}
                />
              )}{" "}
              {view === "review" && (
                <Review state={state} discipline={discipline} />
              )}{" "}
              {view === "history" && (
                <HistoryView
                  state={state}
                  reset={() => {
                    clearState();
                    setState({ answered: {}, attempts: [], studied: {} });
                  }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function Sidebar({
  view,
  go,
  openGeneralQuiz,
  open,
  close,
  discipline,
}: {
  view: View;
  go: (v: View) => void;
  openGeneralQuiz: () => void;
  open: boolean;
  close: () => void;
  discipline: Discipline;
}) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            aria-label="Fechar menu"
            className="fixed inset-0 z-40 bg-black/70 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
        )}
      </AnimatePresence>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-[#0c1016]/95 backdrop-blur-xl transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-20 items-center justify-between border-b border-border px-6">
          <button className="text-left" onClick={() => go("dashboard")}>
            <span className="text-2xl font-bold tracking-[-.04em]">
              Schema<span className="text-[#60A5FA]">.</span>
            </span>
            <span className="mt-0.5 block max-w-[180px] truncate text-[11px] text-muted-foreground">
              {discipline.name}
            </span>
          </button>
          <Button
            className="lg:hidden"
            variant="ghost"
            size="icon"
            onClick={close}
          >
            <X />
          </Button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3 py-6">
          {nav.map(({ view: v, label, icon: Icon }) => (
            <button
              key={v}
              onClick={() => (v === "quiz" ? openGeneralQuiz() : go(v))}
              className={cn(
                "group flex h-11 items-center gap-3 rounded-md border-l-2 px-4 text-sm transition-colors",
                view === v || (view === "lesson" && v === "lessons")
                  ? "border-[#60A5FA] bg-primary/20 text-[#93C5FD]"
                  : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="size-[18px]" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="border-t border-border p-5">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-md bg-primary/15 text-[#60A5FA]">
              <Database className="size-[18px]" />
            </div>
            <div>
              <p className="text-sm font-medium">{discipline.code}</p>
              <p className="text-xs text-muted-foreground">
                {discipline.questions.length} questões ·{" "}
                {discipline.lessons.length} aulas
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
function Topbar({
  onMenu,
  go,
  discipline,
}: {
  onMenu: () => void;
  go: (v: View) => void;
  discipline: Discipline;
}) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:px-6 lg:px-10">
      <Button
        className="mr-3 lg:hidden"
        variant="ghost"
        size="icon"
        onClick={onMenu}
      >
        <Menu />
      </Button>
      <button
        onClick={() => go("lessons")}
        className="flex h-9 max-w-md flex-1 items-center gap-3 rounded-md border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-[#3b485a]"
      >
        <Search className="size-4" />
        <span className="truncate">Buscar em {discipline.short}...</span>
      </button>
      <div className="ml-auto hidden text-right sm:block">
        <p className="text-xs font-medium">
          Seu progresso fica neste dispositivo
        </p>
        <p className="text-[11px] text-muted-foreground">
          Sem conta. Sem rastreamento.
        </p>
      </div>
    </header>
  );
}

function Dashboard({
  state,
  chooseDiscipline,
  go,
}: {
  state: AppState;
  chooseDiscipline: (id: DisciplineId) => void;
  go: (v: View) => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      <section className="border-b border-border pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[.2em] text-[#60A5FA]">
          Seu esquema para estudar
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-[-.045em] sm:text-5xl">
          Uma plataforma.
          <br className="hidden sm:block" /> Todas as suas disciplinas.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Conteúdo por aula, prática direcionada, simulados de prova e revisão
          inteligente — com o progresso separado em cada matéria.
        </p>
      </section>
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-semibold">Disciplinas</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Escolha uma matéria para continuar.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {disciplineList.map((d) => (
            <DisciplineCard
              key={d.id}
              discipline={d}
              state={state}
              open={() => chooseDiscipline(d.id)}
            />
          ))}
        </div>
      </section>
      <Recent state={state} go={go} />
    </div>
  );
}
function DisciplineCard({
  discipline,
  state,
  open,
}: {
  discipline: Discipline;
  state: AppState;
  open: () => void;
}) {
  const ids = new Set(discipline.questions.map((q) => q.id));
  const answered = Object.keys(state.answered).filter((id) =>
    ids.has(id),
  ).length;
  const attempts = state.attempts.filter(
    (a) => (a.disciplineId ?? "mdb") === discipline.id,
  );
  const answers = attempts.flatMap((a) => a.answers);
  const accuracy = answers.length
    ? Math.round(
        (answers.filter((a) => a.correct).length / answers.length) * 100,
      )
    : 0;
  const studied = discipline.lessons.filter(
    (l) => state.studied[`${discipline.id}:${l.id}`],
  ).length;
  return (
    <Card className="group overflow-hidden transition hover:border-[#2563EB]/70">
      <CardHeader>
        <div className="mb-5 flex items-center justify-between">
          <span className="grid size-11 place-items-center rounded-md border border-[#2563EB]/40 bg-primary/10 font-mono text-xs text-[#60A5FA]">
            {discipline.code}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            {discipline.questions.length} questões
          </span>
        </div>
        <CardTitle className="text-2xl">{discipline.name}</CardTitle>
        <CardDescription className="leading-6">
          {discipline.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
          <MiniStat
            label="Aulas"
            value={`${studied}/${discipline.lessons.length}`}
          />
          <MiniStat label="Vistas" value={String(answered)} />
          <MiniStat label="Precisão" value={`${accuracy}%`} />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={open}>
          Abrir disciplina
          <ChevronRight data-icon="inline-end" />
        </Button>
      </CardFooter>
    </Card>
  );
}
function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background/50 p-3">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="mt-1 font-mono text-sm">{value}</p>
    </div>
  );
}
function Metric({
  label,
  value,
  icon: Icon,
  progress,
}: {
  label: string;
  value: string;
  icon: typeof Home;
  progress: number;
}) {
  return (
    <div className="bg-card p-5">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <Icon className="size-4 text-[#60A5FA]" />
      </div>
      <p className="mb-4 text-3xl font-semibold tracking-tight">{value}</p>
      <Progress value={progress} />
    </div>
  );
}
function Continue({ openLesson }: { openLesson: (id: string) => void }) {
  return (
    <Card className="overflow-hidden">
      <div className="grid lg:grid-cols-[.9fr_1.1fr]">
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[.16em] text-[#60A5FA]">
            Continuar estudando · Aula 06
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Normalização sem decoreba.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Entenda dependências funcionais, 1FN, 2FN e 3FN como decisões de
            arquitetura — não como uma lista para memorizar.
          </p>
          <div className="mt-6">
            <Button onClick={() => openLesson("Aula 06")}>
              Explorar a aula
              <ChevronRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
        <div className="min-h-64 border-t border-border bg-[#0b1119] p-6 lg:border-l lg:border-t-0">
          <NormalizationVisual />
        </div>
      </div>
    </Card>
  );
}
function NormalizationVisual() {
  return (
    <div className="grid h-full content-center gap-5 font-mono text-xs sm:grid-cols-[1fr_auto_1fr]">
      <div>
        <p className="mb-3 text-[#60A5FA]">ANTES · NÃO ATÔMICO</p>
        <div className="overflow-hidden rounded border border-border">
          <div className="grid grid-cols-[40px_1fr_1.4fr] bg-muted px-3 py-2 text-muted-foreground">
            <span>id</span>
            <span>nome</span>
            <span>telefones</span>
          </div>
          <div className="grid grid-cols-[40px_1fr_1.4fr] px-3 py-3">
            <span>1</span>
            <span>Ana</span>
            <span className="text-amber-300">1199, 1188</span>
          </div>
        </div>
      </div>
      <ChevronRight className="hidden self-center text-[#60A5FA] sm:block" />
      <div>
        <p className="mb-3 text-[#60A5FA]">DEPOIS · 1FN</p>
        <div className="overflow-hidden rounded border border-border">
          <div className="grid grid-cols-3 bg-muted px-3 py-2 text-muted-foreground">
            <span>id</span>
            <span>cliente</span>
            <span>telefone</span>
          </div>
          <div className="grid grid-cols-3 px-3 py-2">
            <span>1</span>
            <span>1</span>
            <span>1199</span>
          </div>
          <div className="grid grid-cols-3 border-t border-border px-3 py-2">
            <span>2</span>
            <span>1</span>
            <span>1188</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function LessonRail({
  go,
  openLesson,
}: {
  go: (v: View) => void;
  openLesson: (id: string) => void;
}) {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Trilha da disciplina
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            A Aula 07 foi dedicada ao projeto prático.
          </p>
        </div>
        <Button variant="ghost" onClick={() => go("lessons")}>
          Ver aulas
          <ChevronRight data-icon="inline-end" />
        </Button>
      </div>
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 xl:grid-cols-9">
        {lessons.map((l, i) => (
          <button
            key={l.id}
            onClick={() => openLesson(l.id)}
            className="group bg-card p-4 text-left transition-colors hover:bg-muted"
          >
            <span className="mb-5 grid size-7 place-items-center rounded-full border border-border text-[11px] text-muted-foreground group-hover:border-[#60A5FA] group-hover:text-[#60A5FA]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-xs text-[#60A5FA]">{l.id}</p>
            <p className="mt-1 line-clamp-2 text-sm font-medium">{l.title}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
void Metric;
void Continue;
void LessonRail;
function Recent({ state, go }: { state: AppState; go: (v: View) => void }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Desempenho recente</CardTitle>
          <CardDescription>
            Seus últimos simulados neste dispositivo.
          </CardDescription>
        </div>
        <Button variant="ghost" size="sm" onClick={() => go("history")}>
          Histórico
          <ChevronRight data-icon="inline-end" />
        </Button>
      </CardHeader>
      <CardContent>
        {state.attempts.length === 0 ? (
          <Empty text="Você ainda não concluiu nenhum simulado." />
        ) : (
          <div className="flex flex-col">
            {state.attempts.slice(0, 4).map((a) => (
              <div
                key={a.id}
                className="grid grid-cols-[1fr_auto] items-center border-t border-border py-3 text-sm"
              >
                <div>
                  <p className="font-medium">Simulado de 10 questões</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(a.date).toLocaleString("pt-BR")}
                  </p>
                </div>
                <span
                  className={cn(
                    "font-mono",
                    a.score >= 7
                      ? "text-emerald-400"
                      : a.score >= 5
                        ? "text-amber-300"
                        : "text-red-400",
                  )}
                >
                  {a.score}/10
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function Lessons({
  state,
  discipline,
  openLesson,
  chooseDiscipline,
}: {
  state: AppState;
  discipline: Discipline;
  openLesson: (id: string) => void;
  chooseDiscipline: (id: DisciplineId) => void;
}) {
  const [query, setQuery] = useState("");
  const filtered = discipline.lessons.filter((l) =>
    (l.id + l.title + l.topics + l.summary)
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        {disciplineList.map((item) => (
          <Button
            key={item.id}
            size="sm"
            variant={item.id === discipline.id ? "default" : "outline"}
            onClick={() => chooseDiscipline(item.id)}
          >
            {item.code} · {item.short}
          </Button>
        ))}
      </div>
      <PageTitle
        eyebrow={discipline.name}
        title="Aulas e assuntos"
        description="Leia o conteúdo de cada aula e faça um simulado exclusivo daquele material."
      />
      <div className="relative mb-6 max-w-lg">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar aula ou assunto..."
          className="h-11 w-full rounded-md border border-border bg-card pl-10 pr-4 text-sm outline-none transition focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/20"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-border">
        {filtered.map((l, i) => {
          const ids = discipline.questions.filter((q) => q.lesson === l.id);
          const done = ids.filter((q) => state.answered[q.id]).length;
          return (
            <motion.div
              key={l.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.035 }}
              className="grid gap-4 border-b border-border bg-card p-5 last:border-b-0 md:grid-cols-[70px_1fr_auto] md:items-center"
            >
              <span className="font-mono text-xs text-[#60A5FA]">{l.id}</span>
              <div>
                <h3 className="font-medium">{l.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {l.topics} · {l.sections.length} tópicos · {ids.length}{" "}
                  questões
                </p>
                <Progress
                  className="mt-3 max-w-sm"
                  value={ids.length ? (done / ids.length) * 100 : 0}
                />
              </div>
              <Button variant="outline" onClick={() => openLesson(l.id)}>
                Estudar aula
                <ChevronRight data-icon="inline-end" />
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function LessonDetail({
  lessonId,
  state,
  discipline,
  back,
  startQuiz,
}: {
  lessonId: string;
  state: AppState;
  discipline: Discipline;
  back: () => void;
  startQuiz: (lesson: string) => void;
}) {
  const lesson =
    discipline.lessons.find((item) => item.id === lessonId) ??
    discipline.lessons[0];
  const questions = discipline.questions.filter((q) => q.lesson === lesson.id);
  const answered = questions.filter((q) => state.answered[q.id]).length;
  return (
    <div className="mx-auto max-w-6xl">
      <button
        onClick={back}
        className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Todas as aulas
      </button>
      <section className="mb-8 border-b border-border pb-8">
        <div className="grid gap-7 lg:grid-cols-[1fr_280px] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[.2em] text-[#60A5FA]">
              {lesson.id} · guia de estudo
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-[-.045em] sm:text-5xl">
              {lesson.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
              {lesson.summary}
            </p>
          </div>
          <div className="border-l border-border pl-5">
            <p className="text-xs uppercase tracking-[.14em] text-muted-foreground">
              Progresso nas questões
            </p>
            <p className="mt-2 text-2xl font-semibold">
              {answered}
              <span className="text-base font-normal text-muted-foreground">
                /{questions.length}
              </span>
            </p>
            <Progress
              className="mt-3"
              value={questions.length ? (answered / questions.length) * 100 : 0}
            />
          </div>
        </div>
      </section>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article className="min-w-0">
          <section className="mb-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {lesson.goals.map((goal, i) => (
              <div key={goal} className="bg-card p-5">
                <span className="font-mono text-xs text-[#60A5FA]">
                  0{i + 1}
                </span>
                <p className="mt-4 text-sm leading-6">{goal}</p>
              </div>
            ))}
          </section>
          <div className="flex flex-col gap-5">
            {lesson.sections.map((section, i) => (
              <section
                id={`topico-${i + 1}`}
                key={section.title}
                className="scroll-mt-24 rounded-lg border border-border bg-card p-5 sm:p-7"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border font-mono text-xs text-[#60A5FA]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {section.title}
                    </h2>
                    <p className="mt-1 font-mono text-[11px] text-[#60A5FA]">
                      {section.pages}
                    </p>
                  </div>
                </div>
                <p className="text-[15px] leading-7 text-muted-foreground">
                  {section.body}
                </p>
                <ul className="mt-5 grid gap-2 border-t border-border pt-5">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6">
                      <Check className="mt-1 size-4 shrink-0 text-[#60A5FA]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {section.code && (
                  <div className="mt-5 overflow-hidden rounded-md border border-border bg-[#090d13]">
                    <div className="flex items-center gap-2 border-b border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
                      <Code2 className="size-3.5" />
                      Código
                    </div>
                    <pre className="overflow-x-auto p-4 text-xs leading-6 text-[#bfdbfe]">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}
          </div>
          <section className="mt-8 flex flex-col items-start justify-between gap-5 rounded-lg border border-[#2563EB]/40 bg-primary/10 p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold">Terminou a leitura?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Teste somente o conteúdo da {lesson.id} em 10 questões.
              </p>
            </div>
            <Button size="lg" onClick={() => startQuiz(lesson.id)}>
              <BrainCircuit data-icon="inline-start" />
              Simulado da aula
            </Button>
          </section>
        </article>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Nesta aula</CardTitle>
              <CardDescription>
                {lesson.sections.length} tópicos para leitura
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              {lesson.sections.map((section, i) => (
                <a
                  key={section.title}
                  href={`#topico-${i + 1}`}
                  className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                >
                  <span className="font-mono text-[10px] text-[#60A5FA]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </a>
              ))}
            </CardContent>
            <CardFooter className="flex-col items-stretch gap-3">
              <Button onClick={() => startQuiz(lesson.id)}>
                <Play data-icon="inline-start" />
                Praticar esta aula
              </Button>
              <div className="flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                <FileText className="mt-0.5 size-3.5 shrink-0" />
                <span>Fontes: {lesson.sources.join(", ")}</span>
              </div>
            </CardFooter>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Quiz({
  state,
  setState,
  go,
  lessonId,
  discipline,
}: {
  state: AppState;
  setState: (s: AppState) => void;
  go: (v: View) => void;
  lessonId: string | null;
  discipline: Discipline;
}) {
  const pool = lessonId
    ? discipline.questions.filter((q) => q.lesson === lessonId)
    : discipline.questions;
  const [seed, setSeed] = useState(() => Date.now());
  const [quiz, setQuiz] = useState(() => selectQuiz(pool, state, 10, seed));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const q = quiz[index];
  const optionData = useMemo(
    () => (q ? shuffledOptions(q, seed + index * 97) : null),
    [q, seed, index],
  );
  const selected = q ? answers[q.id] : undefined;
  const submit = () => {
    const attemptAnswers = quiz.map((x, i) => {
      const o = shuffledOptions(x, seed + i * 97);
      const choice = answers[x.id] ?? -1;
      return {
        questionId: x.id,
        selected: choice,
        correct: choice === o.correct,
      };
    });
    const score = attemptAnswers.filter((x) => x.correct).length;
    setState(
      saveAttempt(state, {
        id: String(Date.now()),
        date: new Date().toISOString(),
        score,
        answers: attemptAnswers,
        disciplineId: discipline.id,
        lessonId,
      }),
    );
    setFinished(true);
  };
  const restart = () => {
    const nextSeed = Date.now();
    setSeed(nextSeed);
    setQuiz(selectQuiz(pool, state, 10, nextSeed));
    setIndex(0);
    setAnswers({});
    setFinished(false);
  };
  if (finished) {
    const details = quiz.map((x, i) => ({
      q: x,
      o: shuffledOptions(x, seed + i * 97),
      selected: answers[x.id] ?? -1,
    }));
    const score = details.filter((x) => x.selected === x.o.correct).length;
    return (
      <QuizResult
        score={score}
        details={details}
        restart={restart}
        go={go}
        lessonId={lessonId}
      />
    );
  }
  return (
    <div className="mx-auto max-w-4xl">
      <PageTitle
        eyebrow={
          lessonId
            ? `${discipline.code} · ${lessonId} · simulado exclusivo`
            : discipline.name
        }
        title="10 questões. Uma tentativa."
        description={
          lessonId
            ? `Todas as questões deste simulado pertencem à ${lessonId}.`
            : "Alternativas embaralhadas, dificuldade equilibrada e prioridade para conteúdos ainda não respondidos."
        }
      />
      <div className="mb-5 flex items-center gap-4">
        <Progress value={((index + 1) / 10) * 100} />
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {index + 1}/10
        </span>
      </div>
      <Card>
        <CardHeader className="border-b border-border">
          <div className="mb-4 flex flex-wrap gap-2">
            <Tag>{q.lesson}</Tag>
            <Tag>{q.topic}</Tag>
            <Tag>{q.difficulty}</Tag>
            <Tag>{q.kind}</Tag>
          </div>
          <CardTitle className="text-xl leading-8 sm:text-2xl">
            {q.prompt}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <fieldset className="flex flex-col gap-3">
            <legend className="sr-only">Alternativas</legend>
            {optionData?.options.map((o, i) => (
              <button
                key={o.index}
                onClick={() => setAnswers({ ...answers, [q.id]: i })}
                className={cn(
                  "flex min-h-14 items-center gap-4 rounded-md border p-4 text-left text-sm leading-6 transition",
                  selected === i
                    ? "border-[#60A5FA] bg-primary/10 text-foreground ring-2 ring-[#60A5FA]/15"
                    : "border-border bg-background/40 text-muted-foreground hover:border-[#3c4a5e] hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded border font-mono text-xs",
                    selected === i
                      ? "border-[#60A5FA] bg-primary text-white"
                      : "border-border",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {o.text}
              </button>
            ))}
          </fieldset>
        </CardContent>
        <CardFooter className="justify-between border-t border-border pt-5">
          <Button
            variant="ghost"
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
          >
            <ChevronLeft data-icon="inline-start" />
            Anterior
          </Button>
          {index < 9 ? (
            <Button
              disabled={selected === undefined}
              onClick={() => setIndex(index + 1)}
            >
              Próxima
              <ChevronRight data-icon="inline-end" />
            </Button>
          ) : (
            <Button
              disabled={Object.keys(answers).length !== 10}
              onClick={submit}
            >
              <Check data-icon="inline-start" />
              Corrigir simulado
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
function QuizResult({
  score,
  details,
  restart,
  go,
  lessonId,
}: {
  score: number;
  details: {
    q: Question;
    o: ReturnType<typeof shuffledOptions>;
    selected: number;
  }[];
  restart: () => void;
  go: (v: View) => void;
  lessonId: string | null;
}) {
  return (
    <div className="mx-auto max-w-4xl">
      <section className="mb-8 border-b border-border pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[.2em] text-[#60A5FA]">
          Correção concluída{lessonId ? ` · ${lessonId}` : ""}
        </p>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-5xl font-bold tracking-[-.05em]">
              {score}
              <span className="text-muted-foreground">/10</span>
            </h1>
            <p className="mt-3 text-muted-foreground">
              {score >= 8
                ? "Excelente. A estrutura está firme."
                : score >= 6
                  ? "Boa base. Revise os pontos abaixo."
                  : "É aqui que a revisão começa a valer."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {lessonId && (
              <Button variant="outline" onClick={() => go("lesson")}>
                Voltar à aula
              </Button>
            )}
            <Button variant="outline" onClick={() => go("review")}>
              Revisar erros
            </Button>
            <Button onClick={restart}>
              <RotateCcw data-icon="inline-start" />
              Novo simulado
            </Button>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-4">
        {details.map((d, i) => {
          const ok = d.selected === d.o.correct;
          return (
            <Card key={d.q.id}>
              <CardHeader className="flex-row gap-4">
                <div
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full",
                    ok
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-red-500/15 text-red-400",
                  )}
                >
                  {ok ? (
                    <Check className="size-4" />
                  ) : (
                    <XCircle className="size-4" />
                  )}
                </div>
                <div>
                  <CardDescription>
                    Questão {i + 1} · {d.q.source}
                  </CardDescription>
                  <CardTitle className="mt-1 text-base leading-6">
                    {d.q.prompt}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-border bg-background/50 p-4 text-sm">
                  <p>
                    <span className="text-muted-foreground">
                      Resposta correta:{" "}
                    </span>
                    {d.o.options[d.o.correct].text}
                  </p>
                  {!ok && d.selected >= 0 && (
                    <p className="mt-2">
                      <span className="text-muted-foreground">
                        Sua resposta:{" "}
                      </span>
                      {d.o.options[d.selected].text}
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {d.q.explanation}
                </p>
                <QuestionReference question={d.q} />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function Review({
  state,
  discipline,
}: {
  state: AppState;
  discipline: Discipline;
}) {
  const wrong = discipline.questions.filter((q) => {
    const a = state.answered[q.id];
    return a && a.correct < a.attempts;
  });
  return (
    <div>
      <PageTitle
        eyebrow={`${discipline.name} · aprendizado adaptativo`}
        title="Revisão de erros"
        description="Questões em que seu histórico indica dificuldade. A revisão fica salva somente neste dispositivo."
      />
      {wrong.length === 0 ? (
        <Card>
          <CardContent className="pt-5">
            <Empty text="Nenhum erro pendente. Faça um simulado para alimentar sua revisão." />
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {wrong.map((q) => (
            <Card key={q.id}>
              <CardHeader>
                <div className="mb-2 flex gap-2">
                  <Tag>{q.lesson}</Tag>
                  <Tag>{q.topic}</Tag>
                </div>
                <CardTitle className="text-base leading-6">
                  {q.prompt}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {q.explanation}
                </p>
                <p className="mt-4 font-mono text-xs text-[#60A5FA]">
                  {q.source}
                </p>
                <QuestionReference question={q} />
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
function QuestionReference({ question }: { question: Question }) {
  if (!question.origin && !question.reference) return null;
  return (
    <div className="mt-4 border-t border-border pt-3 text-xs leading-5 text-muted-foreground">
      {question.origin && (
        <p>
          {question.origin} · assunto relacionado à {question.source}.
        </p>
      )}
      {question.reference && (
        <a
          className="mt-1 inline-block text-[#60A5FA] underline underline-offset-4"
          href={question.reference.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Conferir: {question.reference.label}
        </a>
      )}
    </div>
  );
}
function HistoryView({ state, reset }: { state: AppState; reset: () => void }) {
  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <PageTitle
          eyebrow="Dados locais"
          title="Histórico"
          description="Resultados armazenados no navegador, sem conta e sem backend."
        />
        <Button variant="outline" onClick={reset}>
          Limpar histórico
        </Button>
      </div>
      {state.attempts.length === 0 ? (
        <Card>
          <CardContent className="pt-5">
            <Empty text="Seu histórico ainda está vazio." />
          </CardContent>
        </Card>
      ) : (
        <div className="overflow-hidden rounded-lg border border-border">
          {state.attempts.map((a) => (
            <div
              key={a.id}
              className="grid grid-cols-[1fr_auto] items-center border-b border-border bg-card p-5 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <div className="grid size-10 place-items-center rounded-md bg-primary/10 text-[#60A5FA]">
                  <ChartNoAxesColumnIncreasing className="size-5" />
                </div>
                <div>
                  <p className="font-medium">
                    Simulado de {disciplines[a.disciplineId ?? "mdb"].short}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock3 className="size-3" />
                    {new Date(a.date).toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">{a.score}/10</p>
                <p className="text-xs text-muted-foreground">{a.score * 10}%</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
function PageTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-[.2em] text-[#60A5FA]">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-bold tracking-[-.04em] sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
        {description}
      </p>
    </header>
  );
}
function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-border bg-muted px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  );
}
function Empty({ text }: { text: string }) {
  return (
    <div className="grid min-h-36 place-items-center text-center">
      <div>
        <Database className="mx-auto mb-3 size-6 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
