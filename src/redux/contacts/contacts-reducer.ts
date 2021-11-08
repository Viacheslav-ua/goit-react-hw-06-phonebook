import { combineReducers } from "redux";
import { ADD, REM, FILTER } from "./contacts-actTypes";

type contactType = {
  id: string;
  name: string;
  number: string;
};

interface actionTypes {
  type: string;
  payload: contactType | string;
}

const stateLoad: contactType[] = JSON.parse(
  window.localStorage.getItem("contacts") ??
    '[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]'
);

const itemsContactReducer = (
  state = stateLoad,
  { type, payload }: actionTypes
) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case REM:
      console.log("payload", payload);
      return state.filter((item: contactType) => item.id !== payload);

    default:
      return state;
  }
};

const filterContactReducer = (state = "", { type, payload }: any) => {
  switch (type) {
    case FILTER:
      return (state = payload);

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsContactReducer,
  filter: filterContactReducer,
});
