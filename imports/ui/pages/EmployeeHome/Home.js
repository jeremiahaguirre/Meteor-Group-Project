import React, { useState } from "react";
import SubmitPost from "../../components/SubmitPost";
import JobsList from "../../components/JobsList";
import ApplicationsList from "../../components/ApplicationsList";
import NavBar from "../../components/NavBar";
import { withStyles } from "@material-ui/core/styles";
import styles from './styles'

const Home = ({ classes }) => {
  const [jobsQuery, setJobsQuery] = useState("");

  return (
    <div>
      <NavBar onChange={setJobsQuery} />
      <div className={classes.top}>
        <SubmitPost />
      </div>
      <div className={classes.main}>
        <div className={classes.leftSide}>
          <JobsList filter={jobsQuery} />
        </div>
        <div className={classes.rightSide}>
          <ApplicationsList />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
