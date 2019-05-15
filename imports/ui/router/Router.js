import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import Employer from "../pages/Employer";
// import Test from "../pages/Test";
import EmployeePage from "../pages/Employee";
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
      ) : currentUser && currentUser.profile.employer === false ? (
        <Fragment>
          <Switch>
            <Route exact path="/employee" component={EmployeePage} />
            <Redirect from="/*" to="/employee" />
            <Route component={EmployeePage} />
          </Switch>
        </Fragment>
      ) : (
        <Fragment>
          <Switch>
            <Route exact path="/employer" component={Employer} />
            <Route exact path="/employee" component={EmployeePage} />
            <Redirect from="/*" to="/employer" />
          </Switch>
        </Fragment>
      )}
    </div>
  );
};

//       <Route path="/test" component={Test} />

export default withTracker(() => {
  Meteor.subscribe("jobs");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    jobs: Jobs.find({}).fetch()
  };
})(Router);
