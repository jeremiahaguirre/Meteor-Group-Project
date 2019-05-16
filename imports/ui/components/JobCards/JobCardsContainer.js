import React, { Component } from "react";
import JobCards from "./JobCards";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class JobCardsContainer extends Component {
  render() {
    const { job, status } = this.props;
    return <JobCards job={job} status={status} />;
  }
}

export default withStyles(styles)(JobCardsContainer);
JobCards;
