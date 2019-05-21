import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { withTracker } from "meteor/react-meteor-data";
import Divider from "@material-ui/core/Divider";
import ApplicationBox from "../ApplicationBox";
import Button from "@material-ui/core/Button";
import { getApplications, replyToApplication } from "../../helpers/functions";
import QueueAnim from "rc-queue-anim";
import styles from "./styles";

ApplicationsList = ({ classes, applications }) => {
  return (
    <div className={classes.main}>
      <Typography className={classes.h2} component="h2">
        Requests
      </Typography>
      <Card className={classes.card}>
        <List>
          {applications.map(application => {
            const { job, jobOwner } = application;
            return (
              <QueueAnim
                key={job._id}
                className={classes.animation}
                component="ul"
                type={["right", "left"]}
                leaveReverse
              >
                <div className={classes.root} key={job._id}>
                  <ApplicationBox job={job} jobOwner={jobOwner}/>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      className={classes.btn}
                      onClick={() => replyToApplication(application, true)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.btn}
                      onClick={() => replyToApplication(application, false)}
                    >
                      Decline
                    </Button>
                  </div>
                  <Divider />
                </div>
              </QueueAnim>
            );
          })}
        </List>
      </Card>
    </div>
  );
};

ApplicationsList.propTypes = {
  classes: PropTypes.object.isRequired,
  applications: PropTypes.array
};

export default withTracker(() => {
  Meteor.subscribe("postedJobs");
  Meteor.subscribe("userProfiles");
  Meteor.subscribe("recievedApplications");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    applications: getApplications()
  };
})(withStyles(styles)(ApplicationsList));
