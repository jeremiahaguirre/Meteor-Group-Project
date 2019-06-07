import React, { Component } from "react";
import EmployerHome from "./EmployerHome";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";

class EmployerHomeContainer extends Component {
  render() {
    return (
      <div>
        <EmployerHome classes={this.props.classes} />
      </div>
    );
  }
}

EmployerHomeContainer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(EmployerHomeContainer);
