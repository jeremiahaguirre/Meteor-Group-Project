import React, { Component } from "react";
import JobCards from "./JobCards";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class JobCardsContainer extends Component {
  render() {
    return <JobCards />;
  }
}

export default withStyles(styles)(JobCardsContainer);
JobCards;
