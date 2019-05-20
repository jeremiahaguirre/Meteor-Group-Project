import React, { Component } from "react";
import Employee from "./Employee";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EmployeeContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Employee />
      </div>
    );
  }
}

export default withStyles(styles)(EmployeeContainer);
