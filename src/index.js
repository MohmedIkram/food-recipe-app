import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, BackButton } from "./components/App";
import MyAppBar from "./components/MyAppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import SendEmail from "./components/SendEmail";
import ResetPassword from "./components/ResetPassword";
import RecipePage from "./components/RecipePage";
import AddRecipe from "./components/AddRecipe";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          <MyAppBar />
          <RecipePage />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/addrecipe">
          <AddRecipe />
        </Route>
        <Route exact path="/forgot-password">
          <SendEmail />
        </Route>
        <Route exact path="/ResetPassword/:resetToken">
          <ResetPassword />
        </Route>

        {/* <Route path="/*">
          <ErrorPage />
        </Route> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
