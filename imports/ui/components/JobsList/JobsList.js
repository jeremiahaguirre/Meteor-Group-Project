import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { withTracker } from "meteor/react-meteor-data";
import SubmitPost from "../../components/SubmitPost";
import styles from "./styles";
import { getJobPosts, getApplications } from "../../helpers/functions";
import JobItem from "../JobItem";

const JobsList = ({ classes, filter, jobs,applications }) => {
  return (
    <div className={classes.main}>
      <Typography className={classes.h2} component="h2">
        Job Posts
      </Typography>
      <SubmitPost />
      <Card className={classes.card}>
        <List>
          {jobs
            .filter(j =>
              filter ? new RegExp(filter, "i").test(j.location) : 1
            )
            .map(job => {
              return <JobItem key={job._id} job={job} applications={applications.filter((app)=>app.jobId===job._id)} />;
            })}
        </List>
      </Card>
    </div>
  );
};

JobsList.propTypes = {
  classes: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired
};

export default withTracker(() => {
  Meteor.subscribe("openJobs");
  Meteor.subscribe("userProfiles");
  Meteor.subscribe("recievedApplications");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    jobs: getJobPosts().filter(job=>job.taken===false),
    applications: getApplications()
  };
})(withStyles(styles)(JobsList));
