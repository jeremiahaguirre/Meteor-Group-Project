import React, { Fragment, Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Gravatar from "react-gravatar";
import ListItem from "@material-ui/core/ListItem";
import "react-dates/lib/css/_datepicker.css";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import styles from "./styles";
import { applyToJob } from "../../../ui/helpers/functions";
import { getJobPosts, getApplications } from "../../../ui/helpers/functions";

class JobCards extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  findStatus(job) {
    const { applications } = this.props;
    const myApp = applications.find(
      application => application.job._id === job._id
    );
    if (!myApp) {
      return "Request";
    } else {
      const status = myApp.status;
      if (status === true) {
        return "Accepted";
      } else if (status === false) {
        return "Declined";
      } else {
        return "Pending";
      }
    }
  }
  render() {
    const { classes, jobs } = this.props;
    return (
      <div className={classes.infoCard}>
        <Typography className={classes.h1}>List of Job Posts:</Typography>
        <Card className={classes.card}>
          <List dense className={classes.root}>
            {jobs.map(job => (
              <div className={classes.root} key={job._id}>
                <ListItem className={classes.list} key={job._id}>
                  <ListItemAvatar>
                    <Avatar>
                      <Gravatar
                        email={job.owner ? job.owner.emails[0].address : ""}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={job.title}
                    secondary={
                      <Fragment>
                        <Typography component="span" color="textPrimary">
                          Description: {job.description}{" "}
                        </Typography>{" "}
                        <Typography component="span" color="textPrimary">
                          Date:{" "}
                          {moment(job.createdAt)
                            .add(10, "days")
                            .calendar()}
                        </Typography>{" "}
                        <Typography component="span" color="textPrimary">
                          Requierments: {job.professions.join(", ")}
                        </Typography>{" "}
                        <Typography component="span" color="textPrimary">
                          Location: {job.location}
                        </Typography>
                      </Fragment>
                    }
                  />
                </ListItem>
                <div className={classes.buttons}>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    onClick={() => {
                      if (status === "Request")
                        applyToJob(job._id, job.owner._id);
                    }}
                  >
                    {status}
                  </Button>
                </div>
              </div>
            ))}
          </List>
        </Card>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("allJobs");
  Meteor.subscribe("userProfiles");
  Meteor.subscribe("sentApplications");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    jobs: getJobPosts(),
    applications: getApplications()
  };
})(withStyles(styles)(JobCards));

// <JobCards status={this.findStatus(job)} job={job} />
// <ListItemSecondaryAction />
