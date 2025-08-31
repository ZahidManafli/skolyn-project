import type { LangObj, ILang } from "../assests/lang/lang";

export interface ILanguages {
  id: number;
  key: ILang;
  value: string;
}

export interface IState {
  languages: ILanguages[];
  locale: typeof az;
}
