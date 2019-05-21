import React, { useState } from "react";
import JobsMap from "../../components/JobsMap";
import { withTracker } from "meteor/react-meteor-data";
import NavBar from "../../components/NavBar";
import SentApplications from '../../components/SentApplications'
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Home = ({ currentUser, classes }) => {
  const [jobsQuery, setJobsQuery] = useState("");

  return (
    <div>
      <NavBar onChange={setJobsQuery} />
      <div className={classes.main}>
        <div className={classes.sideBar}>
          <SentApplications />
        </div>
        <div className={classes.rightSide}>
          <JobsMap/>
        </div>
      </div>
    </div>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(Home));
