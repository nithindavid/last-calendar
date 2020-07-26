import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

declare global {
  interface Date {
    addDays(days?: number): Date;
  }
}

// eslint-disable-next-line no-extend-native
Date.prototype.addDays = function (days = 0) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
