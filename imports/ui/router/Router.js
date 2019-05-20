import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import HomePage from "../pages/Home";
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
      {!currentUserId ? (
        <div>
          <Switch>
            <Route exact path="/map" component={JobMap} />
            <Route exact path="/welcome" component={Welcome} />
            <Redirect from="/*" to="/welcome" />
          </Switch>
        </div>
      ) : (
        <Fragment>
          <Switch>
            <Route exact path="/map" component={JobMap} />
            <Route path="/home" component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Redirect from="/*" to="/Home" />
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
