import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import NavBar from "../components/NavBar";
import Test from "../pages/Test";
import { withTracker } from "meteor/react-meteor-data";
import { Jobs } from "../../api/jobs";

const Router = ({ jobs, currentUser, currentUserId }) => {
  return (
    <div>
      {currentUserId === null ? (
        <div>
          <Switch>
            <Route exact path="/home" component={Welcome} />
            <Redirect from="/*" to="/home" />
          </Switch>
        </div>
      ) : (
        <div>
        <Switch>
          <NavBar/>
          <Route exact path="/test" component={Test} />
          <Redirect from="/*" to="/test" />
        </Switch>
      </div>
      )
      }
    </div>
  );
};

export default withTracker(() => {

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
  };
})(Router);