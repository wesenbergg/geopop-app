import { Theme } from "../types";
import { State } from "./state";

export type Action =
  | {
    type: "INIT";
    payload: string;
  } | {
    type: "SET_THEME";
    payload: Theme;
  };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INIT":
      console.log(action.payload);
      return state;
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export const example = (): Action => {
  return { type: "INIT", payload: "donkey pong" };
};

export const switchTheme = (isDarkTheme: boolean | undefined): Action => {
  const theme: Theme = isDarkTheme ? 'dark': 'light'; 
  return { type: "SET_THEME", payload: theme };
};