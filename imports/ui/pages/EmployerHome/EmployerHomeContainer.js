import React, { Component } from "react";
import EmployerHome from "./EmployerHome";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EmployerHomeContainer extends Component {
  render() {
    return (
      <div>
        <EmployerHome classes={this.props.classes} />
      </div>
    );
  }
}

export default withStyles(styles)(EmployerHomeContainer);
