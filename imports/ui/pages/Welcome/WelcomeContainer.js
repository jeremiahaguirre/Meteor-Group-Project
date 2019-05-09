import React, { Component } from "react";
import Welcome from "./Welcome";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class WelcomeContainer extends Component {
  render() {
    return <Welcome />;
  }
}

export default withStyles(styles)(WelcomeContainer);
