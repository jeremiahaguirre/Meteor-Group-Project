import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withTracker } from "meteor/react-meteor-data";
import Divider from "@material-ui/core/Divider";
import Gravatar from "react-gravatar";
// import { Jobs } from "../../../api/jobs";
import moment from "moment";
import styles from "./styles";
import MOCK_DB from "../../../mock";
const { Jobs: MOCK_JOBS } = MOCK_DB;

const ItemsList = props => {
  const { classes, filter } = props;

  return (
    <div>
      <Typography className={classes.h2} component="h2">
        All Jobs
      </Typography>
      <Card className={classes.card}>
        <List className={classes.root}>
          {MOCK_JOBS.filter(j =>
            filter ? new RegExp(filter, "i").test(j.location) : 1
          ).map(job => {
            return (
              <div key={job._id}>
                <Divider />
                <ListItem alignItems="flex-start">
                  {/* <ListItemAvatar>
                    <Avatar>
                      <Gravatar email={job.owner.email} />
                    </Avatar>
                  </ListItemAvatar> */}
                  <ListItemText
                    primary={job.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Description: {job.description}{" "}
                        </Typography>{" "}
                        <Typography
                          component="span"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Date:{" "}
                          {moment(job.createdAt)
                            .add(10, "days")
                            .calendar()}
                        </Typography>{" "}
                        <Typography
                          component="span"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Requierments: {job.professions.join(", ")}
                        </Typography>{" "}
                        <Typography
                          component="span"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Location: {job.location}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </Card>
    </div>
  );
};

ItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired
};

export default withTracker(() => {
  Meteor.subscribe("jobs");
  Meteor.subscribe("allUsers");

  // const jobs = Jobs.find({}).map(job => {
  //   const owner = Meteor.users.findOne({ _id: job.ownerId });
  //   return { ...job, owner: owner };
  // });

  const jobs = MOCK_JOBS.map(job => {
    const owner = Meteor.users.findOne({ _id: job.ownerId });
    return { ...job, owner: owner };
  });
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    jobs
  };
})(withStyles(styles)(ItemsList));
