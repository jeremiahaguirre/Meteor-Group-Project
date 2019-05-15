import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";
import Welcome from "../pages/Welcome";
import NavBar from "../components/NavBar";
import Test from "../pages/Test";
import { withTracker } from "meteor/react-meteor-data";

// const insertData=()=>{

// }
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
        <button onClick={() => {  }}>
            Click Me To Insert Data to the database!
        </button>
      </div>
      )
      }
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe('userProfiles');
  // console.log(Jobs.find({}).fetch());
  // console.log(Applications.find({}).fetch());
  // console.log(Meteor.users.find({}).fetch());
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
  };
})(Router);
