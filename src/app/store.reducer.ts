import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import az from "../assests/lang/az";
import en from "../assests/lang/en";
import ru from "../assests/lang/ru";
import type { IState } from "./store.d";
import type { ILang } from "../assests/lang/lang";

const initialState: IState = {
  languages: [
    { id: 1, key: "az", value: "Az" },
    { id: 2, key: "en", value: "En" },
    { id: 3, key: "ru", value: "Ru" },
  ],
  locale: az,
};

const langs: Record<ILang, IState["locale"]> = {
  az,
  en,
  ru,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<ILang>) => {
      state.locale = langs[action.payload];
      localStorage.setItem("app-locale", action.payload);
    },
  },
});

export const { setLocale } = rootSlice.actions;
export default rootSlice.reducer;
