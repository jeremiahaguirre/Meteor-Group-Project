import React from "react";
import { Meteor } from "meteor/meteor"
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import Test from "../pages/Test";
import EmployeePage from "../pages/Employee";

export default () => (
  <Switch>
    <Route path="/welcome" component={Welcome} />

    {/* TODO: remove test routes, uncomment redirect (for development only) */}
    <Route path="/test" component={Test} />
    <Route path="/" component={EmployeePage} />

    {/* <Route path="/" render={() => (
      Meteor.userId()
        ? <Test />
        : <Redirect to='/welcome' />
    )} /> */}
  </Switch>
);
