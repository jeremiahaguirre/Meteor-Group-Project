import React, { useState } from "react";
import SubmitPost from "../../components/SubmitPost";
import JobsList from "../../components/JobsList";
import SentApplications from "../../components/SentApplications";
import { withTracker } from "meteor/react-meteor-data";
import NavBar from "../../components/NavBar";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Home = ({ currentUser, classes }) => {
  const [jobsQuery, setJobsQuery] = useState("");

  return (
    <div>
      <NavBar onChange={setJobsQuery} />
      <div className={classes.main}>
        <div className={classes.leftSide}>
          <JobsList filter={jobsQuery} />
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

// {currentUser && currentUser.profile.employer === true ? (
//   <MenuDrawer />
// ) : null}

<SubmitPost />;
