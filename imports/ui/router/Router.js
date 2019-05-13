import React from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import NavBar from "../components/NavBar";
import Employer from "../pages/Employer";
import Test from "../pages/Test";
import EmployeePage from "../pages/Employee";
export default () => (
  <div>
    {/* <Fragment> */}
    <NavBar />
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route path="/employer" component={Employer} />
      <Route path="/test" component={Test} />
      <Route path="/" component={EmployeePage} />
      <Redirect to="/welcome" />
      {/* TODO: remove test routes, uncomment redirect (for development only) */}

      {/* <Route path="/" render={() => (
      Meteor.userId()
        ? <Test />
        : <Redirect to='/welcome' />
    )} /> */}
    </Switch>
    {/* </Fragment> */}
  </div>
);
