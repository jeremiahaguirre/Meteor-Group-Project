import React, { Component } from "react";
import Employer from "./Employer";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EmployerContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Employer />;
      </div>
    );
  }
}

export default withStyles(styles)(EmployerContainer);
