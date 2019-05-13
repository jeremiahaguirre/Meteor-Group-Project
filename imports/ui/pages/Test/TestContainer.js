import React, { Component } from "react";
import Test from "./Test";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TestContainer extends Component {
  render() {
    return <Test />;
  }
}

export default withStyles(styles)(TestContainer);
