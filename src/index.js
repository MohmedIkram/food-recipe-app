import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, BackButton } from "./App";
import reportWebVitals from "./reportWebVitals";
import MyAppBar from "./MyAppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <MyAppBar />
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
