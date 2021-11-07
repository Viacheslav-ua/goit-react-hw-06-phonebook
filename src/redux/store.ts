import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

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

const contactsInitialState: any = {
    items: stateLoad,
    filter: ''
}

const itemsContactReducer = (state = stateLoad, action: actionTypes) => {
  switch (action.type) {
    case "contacts/Add":
      return [...state, action.payload]

    case "contacts/Remove":
      console.log("payload", action.payload)
      return state.filter((item: contactType) => item.id !== action.payload)

    default:
      return state
  }
}

const filterContactReducer = (state = "", action: actionTypes) => {
  switch (action.type) {
    case "":
    
    default:
      return state
  }
}

const contactsReducer = combineReducers({
    items: itemsContactReducer,
    filter: filterContactReducer,
})

const rootReducer = combineReducers({
  contacts: contactsReducer,
})

const store = createStore(rootReducer, composeWithDevTools());
export default store;