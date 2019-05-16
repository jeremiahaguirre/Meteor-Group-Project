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
import moment from "moment";
import styles from "./styles";
import { getJobPosts } from "../../../api/functions";

const ItemsList = props => {
  const { classes, filter, jobs } = props;

  return (
    <div>
      <Typography className={classes.h2} component="h2">
        All Jobs
      </Typography>
      <Card className={classes.card}>
        <List>
          {jobs
            .filter(j =>
              filter ? new RegExp(filter, "i").test(j.location) : 1
            )
            .map(job => {
              console.log(job);
              return (
                <div className={classes.root} key={job._id}>
                  <Divider />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar>
                        <Gravatar email={job.owner.emails[0].address} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={job.title}
                      secondary={
                        <React.Fragment>
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
  Meteor.subscribe("openJobs");
  Meteor.subscribe("userProfiles");

  // const jobs = Jobs.find({}).map(job => {
  //   const owner = Meteor.users.findOne({ _id: job.ownerId });
  //   return { ...job, owner: owner };
  // });

  // const jobs = MOCK_JOBS.map(job => {
  //   const owner = Meteor.users.findOne({ _id: job.ownerId });
  //   return { ...job, owner: owner };
  // });
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    jobs: getJobPosts()
  };
})(withStyles(styles)(ItemsList));
