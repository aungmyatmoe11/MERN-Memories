import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { reducers } from "../src/reducers";
import { thunk } from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = createStore(reducers, compose(applyMiddleware(thunk)));
const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
