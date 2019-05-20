import React, { Component } from "react";
import Home from "./Home";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class HomeContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default withStyles(styles)(HomeContainer);
