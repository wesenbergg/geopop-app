import { State } from "./state";

export type Action =
  | {
    type: "INIT";
    payload: string;
  };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INIT":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export const example = (): Action => {
  return { type: "INIT", payload: "donkey pong" };
};