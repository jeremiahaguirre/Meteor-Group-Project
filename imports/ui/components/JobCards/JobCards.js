import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Gravatar from "react-gravatar";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Jobs } from "../../../api/jobs";
import TextField from "@material-ui/core/TextField";
import { users } from "../../../mock/mockdatabase";
import Modal from "@material-ui/core/Modal";
import { applyToJob } from "../../../ui/helpers/functions";

const JobCards = ({ classes, job, status }) => {
  return (
    <div>
      <Typography className={classes.h2} component="h2">
        List of Jobs
      </Typography>
      <Card className={classes.card}>
        <CardContent>
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
        </CardContent>

        <CardActions>
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
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(JobCards);
