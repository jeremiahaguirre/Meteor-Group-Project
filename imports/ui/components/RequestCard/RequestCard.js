import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withTracker } from "meteor/react-meteor-data";
import Divider from "@material-ui/core/Divider";
import Gravatar from "react-gravatar";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { getApplications, replyToApplication } from "../../../api/functions";
import QueueAnim from "rc-queue-anim";
import styles from "./styles";

function RequestCard(props) {
  const { classes, applications } = props;

  return (
    <div>
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
                component="ul"
                type={["right", "left"]}
                leaveReverse
              >
                <div className={classes.root} key={job._id}>
                  <Divider />

                  <ListItem className={classes.list} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar>
                        <Gravatar
                          email={jobOwner && jobOwner.emails[0].address}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={job.title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" color="textPrimary">
                            Description: {job.description}{" "}
                          </Typography>
                          <Typography component="span" color="textPrimary">
                            Date:{" "}
                            {moment(application.job.createdAt)
                              .add(10, "days")
                              .calendar()}
                          </Typography>
                          <Typography component="span" color="textPrimary">
                            Requierments: {job.professions.join(", ")}{" "}
                          </Typography>
                          <Typography component="span" color="textPrimary">
                            Location: {job.location}{" "}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>

                  <Divider />
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
}

RequestCard.propTypes = {
  classes: PropTypes.object.isRequired
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
})(withStyles(styles)(RequestCard));
