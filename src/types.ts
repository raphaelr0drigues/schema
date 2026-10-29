export type Difficulty='fácil'|'média'|'difícil';export type QuestionKind='conceitual'|'prática'|'sql'|'erro';
export interface Question{ id:string; lesson:string; page:number; topic:string; difficulty:Difficulty;kind:QuestionKind;prompt:string;options:string[];correct:number;explanation:string;source:string }
export interface AttemptAnswer{questionId:string;selected:number;correct:boolean}
export interface Attempt{id:string;date:string;score:number;answers:AttemptAnswer[]}
export interface AppState{answered:Record<string,{attempts:number;correct:number;lastSelected:number}>;attempts:Attempt[]}
