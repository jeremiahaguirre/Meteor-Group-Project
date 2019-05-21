import React, { Component } from "react";
import Home from "./Home";
import { withStyles } from "@material-ui/core/styles";

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

export default HomeContainer;
