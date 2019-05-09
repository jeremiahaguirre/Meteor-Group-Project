import React, { Component } from "react";
import Employer from "./Employer";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EmployerContainer extends Component {
  render() {
    return <Employer />;
  }
}

export default withStyles(styles)(EmployerContainer);
