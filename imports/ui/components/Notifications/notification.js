import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Notification = ({ classes }) => {
  return (
    <div className={classes.popup}>
      <Card>
        <CardContent>
          <Typography>Request has been sent!</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Notification);
