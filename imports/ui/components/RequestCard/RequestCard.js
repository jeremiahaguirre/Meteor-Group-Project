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
import { Jobs } from "../../../api/jobs";
import styles from "./styles";

function RequestCard(props) {
  const { classes, jobs } = props;

  return (
    <div>
      <Typography className={classes.h2} component="h2">
        Requests
      </Typography>
      <Card className={classes.card}>
        <List>
          {jobs.map(job => {
            return (
              <div className={classes.root} key={job._id}>
                <Divider />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <Gravatar
                        email={job.owner && job.owner.emails[0].address}
                      />
                    </Avatar>
                  </ListItemAvatar>
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
                        </Typography>
                        <Typography
                          component="span"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Date:{" "}
                          {moment(jobs.createdAt)
                            .add(10, "days")
                            .calendar()}
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
                    onClick={() => console.log("I was Accepted")}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.btn}
                    onClick={() => console.log("I was Declined")}
                  >
                    Decline
                  </Button>
                </div>
                <Divider />
              </div>
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
  Meteor.subscribe("jobs");
  Meteor.subscribe("allUsers");
  console.log(Jobs.find().fetch());
  const jobs = Jobs.find({}).map(job => {
    const owner = Meteor.users.findOne({ _id: job.owner });
    return { ...job, owner: owner };
  });

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    jobs
  };
})(withStyles(styles)(RequestCard));
