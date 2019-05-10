import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import NavBar from "../components/NavBar";
import Employer from "../pages/Employer";

export default () => (
  <div>
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/employer" component={Employer} />
        <Redirect to="/welcome" />
      </Switch>
    </Fragment>
  </div>
);
