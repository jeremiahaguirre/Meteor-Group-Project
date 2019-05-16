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
      <Card className={classes.card}>
        <Fragment>
          <CardContent>
            <div>
              <div>
                <Avatar className={classes.avatar}>
                  {" "}
                  {/* <Gravatar email={job.owner.emails[0].address}> </Gravatar> */}
                </Avatar>
              </div>
            </div>

            <Typography variant="display1">{job.description}</Typography>

            <Typography variant="display1">{job.title}</Typography>

            <Typography variant="display1">{job.time}</Typography>

            <Typography variant="display1">{job.location}</Typography>
            {/* <Typography variant="display1">
                {job.professions.join(", ")}
              </Typography> */}
          </CardContent>
        </Fragment>
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
