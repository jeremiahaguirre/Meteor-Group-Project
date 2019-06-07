import React, { Component } from "react";
import Welcome from "./Welcome";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";

class WelcomeContainer extends Component {
  render() {
    return <Welcome classes={this.props.classes} />;
  }
}

WelcomeContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WelcomeContainer);
