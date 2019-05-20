import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import JobCards from "../../components/JobCards";
import NavBar from "../../components/NavBar";
import styles from "./styles";

class Employee extends React.Component {
  render() {
    const { classes, jobs } = this.props;
    return (
      <div>
        <NavBar />

        <div className={classes.container}>
          <JobCards />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Employee);
