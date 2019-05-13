import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EmployeeCardContainer extends Component {
  render() {
    return <EmployeeCard />;
  }
}

export default withStyles(styles)(EmployeeCardContainer);
