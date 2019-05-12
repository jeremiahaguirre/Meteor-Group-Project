import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor"
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import Test from "../pages/Test"
// import EmploeePage from "../pages/Employee";

export default () => (
  <div>
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route path="/" render={(props) => (
        Meteor.userId()
          ? <Test />
          : <Redirect to='/welcome' />
      )} />
    </Switch>
  </div>
);
