import React, { useState } from "react";
import SubmitPost from "../../components/SubmitPost";
import ItemsList from "../../components/AllJobs";
import RequestCard from "../../components/RequestCard";
import NavBar from "../../components/NavBar";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    margin: "auto"
  }
};

const Employer = ({ classes }) => {
  const [jobsQuery, setJobsQuery] = useState("");

  return (
    <>
      <NavBar onChange={setJobsQuery} />
      <div className={classes.main}>
        <div className={classes.leftSide}>
          <SubmitPost />
          <ItemsList filter={jobsQuery} />
        </div>
        <div className={classes.rightSide}>
          <RequestCard />
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Employer);
