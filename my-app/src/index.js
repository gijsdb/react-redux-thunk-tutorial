import React from "react";
import ReactDOM from "react-dom";
import './index.css'

import App from "./App";
import store from "./store";
import { Provider } from "react-redux";


// Wraps the entire application in the provider that grants access to the store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);