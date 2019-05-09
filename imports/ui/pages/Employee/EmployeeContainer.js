import React, { Component } from "react";
import Employee from "./Employee";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EmployeeContainer extends Component {
  render() {
    return <Employee />;
  }
}

export default withStyles(styles)(EmployeeContainer);
