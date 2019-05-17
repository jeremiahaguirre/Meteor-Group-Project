import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Gravatar from "react-gravatar";

import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";

import { applyToJob } from "../../../ui/helpers/functions";

const JobCards = ({ classes, job, status }) => {
  return (
    <div>
      
      <Avatar>
        <Gravatar email={job.owner ? job.owner.emails[0].address : ""} />
      </Avatar>

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

      <Button
        className={classes.button}
        variant="outlined"
        size="small"
        type="submit"
        color="primary"
        onClick={() => {
          if (status === "Request") applyToJob(job._id, job.owner._id);
        }}
      >
        {status}
      </Button>
    </div>
  );
};

export default withStyles(styles)(JobCards);
