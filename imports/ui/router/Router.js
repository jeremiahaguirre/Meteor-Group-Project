import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
//import Test from "../pages/Test"
import EmploeePage from "../pages/Employee";

export default () => (
  <div>
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route path="/test" component={EmploeePage} />
      <Redirect to="/welcome" />
    </Switch>
  </div>
);
