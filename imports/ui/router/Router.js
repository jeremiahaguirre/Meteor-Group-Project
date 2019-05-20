import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import Employer from "../pages/Employer";
import EmployeePage from "../pages/Employee";
import Profile from "../pages/Profile";
import JobMap from "../pages/Map";
import { withTracker } from "meteor/react-meteor-data";
import posed, { PoseGroup } from "react-pose";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 400, beforeChildren: true },
  exit: { opacity: 0 }
});

const Router = ({ currentUser, currentUserId }) => {
  return (
    <div>
      {currentUserId === null ? (
        <div>
          <Switch>
            <Route exact path="/home" component={Welcome} />
            <Redirect from="/*" to="/home" />
          </Switch>
        </div>
      ) : currentUser && currentUser.profile.employer === false ? (
        <Fragment>
          <Switch>
            <Route exact path="/map" component={JobMap} />
            <Route exact path="/employee" component={EmployeePage} />
            <Route path="/profile" component={Profile} />
            <Redirect from="/*" to="/employee" />
            <Route component={EmployeePage} />
          </Switch>
        </Fragment>
      ) : (
        <Fragment>
          <Switch>
            <Route exact path="/map" component={JobMap} />
            <Route exact path="/employer" component={Employer} />
            <Route exact path="/employee" component={EmployeePage} />
            <Route path="/profile" component={Profile} />
            <Redirect from="/*" to="/employer" />
          </Switch>
        </Fragment>
      )}
    </div>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(Router);
