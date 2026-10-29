import type{AppState,Attempt}from'@/types';const KEY='schema-progress-v1';const empty:AppState={answered:{},attempts:[]};
export function loadState():AppState{try{return JSON.parse(localStorage.getItem(KEY)??'null')??empty}catch{return empty}}
export function saveAttempt(state:AppState,attempt:Attempt):AppState{const answered={...state.answered};for(const a of attempt.answers){const old=answered[a.questionId]??{attempts:0,correct:0,lastSelected:-1};answered[a.questionId]={attempts:old.attempts+1,correct:old.correct+(a.correct?1:0),lastSelected:a.selected}}const next={answered,attempts:[attempt,...state.attempts].slice(0,50)};localStorage.setItem(KEY,JSON.stringify(next));return next}
export function clearState(){localStorage.removeItem(KEY)}
