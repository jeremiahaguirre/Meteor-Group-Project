import React from "react";
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

const EmployeeCard = ({ classes }) => {
  return (
    <div>
      <Card className={classes.card}>
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
          <div className={classes.employeeInfo}>
            <Typography variant="display1">Name</Typography>
            <Typography className={classes.eName}>kghrkghr</Typography>
          </div>
          <div className={classes.employeeInfo}>
            <Typography variant="display1">Profession</Typography>
            <Typography className={classes.eName}>sdfgh</Typography>
          </div>
        </CardContent>

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

export default withStyles(styles)(EmployeeCard);
