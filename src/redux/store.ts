import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contacts-reducer";

// type contactType = {
//   id: string;
//   name: string;
//   number: string;
// };

// interface actionTypes {
//   type: string;
//   payload: contactType | string;
// }

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
