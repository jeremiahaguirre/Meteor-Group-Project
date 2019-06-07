import React, { Component } from "react";
import EmployeeHome from "./EmployeeHome";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";

class EmployeeHomeContainer extends Component {
  render() {
    return (
      <div>
        <EmployeeHome classes={this.props.classes} />
      </div>
    );
  }
}

EmployeeHomeContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmployeeHomeContainer);
