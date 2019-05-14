import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import NavBar from "../components/NavBar";
import Employer from "../pages/Employer";
import EmployeePage from "../pages/Employee";
import { withTracker } from "meteor/react-meteor-data";

const Router = ({ currentUser, currentUserId }) => (
  <div>
    {currentUserId === null ? (
      <div>
        <Switch>
          <Route exact path="/home" component={Welcome} />
          <Redirect from="/*" to="/home" />
        </Switch>
      </div>
    ) : currentUserId && currentUser === false ? (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/employee" component={EmployeePage} />
          <Redirect from="/*" to="/employee" />
          <Route component={EmployeePage} />
        </Switch>
      </Fragment>
    ) : (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/employer" component={Employer} />
          <Route path="/employee" component={EmployeePage} />
          <Redirect from="/*" to="/employee" />
        </Switch>
      </Fragment>
    )}
  </div>
);

export default withTracker(({ id }) => {
  Meteor.subscribe("users");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(Router);
