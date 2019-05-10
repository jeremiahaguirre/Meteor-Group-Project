import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Gravatar from "react-gravatar";
import styles from "./styles";
import TextField from "@material-ui/core/TextField";
import { Users } from "../../../mock";
import { users } from "../../../mock/mockdatabase";

const JobCards = ({ classes, user }) => {
  console.log(users, "user");

  return (
    <div>
      <Card className={classes.card}>
        <Fragment>
          <CardContent>
            <div>
              <div>
                <Avatar className={classes.avatar} />
              </div>
              <div>
                <Typography />
                <Typography />
              </div>
            </div>
            <Typography variant="display1">{user.name}</Typography>

            {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
            <Typography variant="display1">Date</Typography>
            {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
            <Typography variant="display1">Location</Typography>
            {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
            <Typography variant="display1">
              {user.professions.join(", ")}
            </Typography>
            {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
            <Typography variant="display1">Description</Typography>
            {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
            <Typography variant="display1">{user.workplaces}</Typography>
          </CardContent>
        </Fragment>
        <CardActions>
          <Button
            className={classes.button}
            variant="outlined"
            size="small"
            color="primary"
          >
            Request
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

JobCards.defaultProps = { user: users };

export default withStyles(styles)(JobCards);
