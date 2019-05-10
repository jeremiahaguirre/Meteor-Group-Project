import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import Test from "../pages/Test"

export default () => (
  <div>
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route path="/test" component={Test}/>
      <Redirect to="/welcome" />
    </Switch>
  </div>
);
