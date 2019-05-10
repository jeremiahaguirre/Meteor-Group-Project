import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";

export default () => (
  <div>
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Redirect to="/welcome" />
    </Switch>
  </div>
);
