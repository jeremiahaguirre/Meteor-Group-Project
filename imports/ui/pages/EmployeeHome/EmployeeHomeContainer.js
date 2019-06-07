import React, { Component } from "react";
import EmployeeHome from "./EmployeeHome";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EmployeeHomeContainer extends Component {
  render() {
    return (
      <div>
        <EmployeeHome classes={this.props.classes} />
      </div>
    );
  }
}

export default withStyles(styles)(EmployeeHomeContainer);
