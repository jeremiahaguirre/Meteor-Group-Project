import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import NavBar from "../components/NavBar";
import Employer from "../pages/Employer";
import EmployeePage from "../pages/Employee";
import { withTracker } from "meteor/react-meteor-data";
import { Jobs } from "../../api/jobs";

<<<<<<< HEAD
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
=======
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
          <NavBar />
          <Switch>
            <Route exact path="/employee" component={EmployeePage} />
            <Redirect from="/*" to="/employee" />
            <Route component={EmployeePage} />
          </Switch>
        </Fragment>
      ) : (
        <Fragment>
          <NavBar />
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
>>>>>>> b36d22a1fe25545be5ac44c87f39b272d9b60e1b

//       <Route path="/test" component={Test} />

export default withTracker(() => {
  Meteor.subscribe("jobs");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    jobs: Jobs.find({}).fetch()
  };
})(Router);
