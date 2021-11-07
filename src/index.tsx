import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/store";
// import store from "./redux/store"
// import {myAction} from "./redux/actions"

 console.log(store.getState())
// console.log(store.dispatch(myAction('qweqwe')))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root"));
