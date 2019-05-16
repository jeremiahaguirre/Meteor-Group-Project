import React, { Component } from "react";
import JobCards from "./JobCards";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class JobCardsContainer extends Component {
   
  render() {
    const {job}=this.props;
    return <JobCards job={job}/>;
  }
}

export default withStyles(styles)(JobCardsContainer);
JobCards;
