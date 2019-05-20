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
  },
  top: {
    width: "100%",
    padding: "30px",
    textAlign: "center"
  }
};

const Home = ({ classes }) => {
  const [jobsQuery, setJobsQuery] = useState("");

  return (
    <div>
      <NavBar onChange={setJobsQuery}/>
      <div className={classes.top}>
        <SubmitPost />
      </div>
      <div className={classes.main}>
        <div className={classes.leftSide}>
          <ItemsList filter={jobsQuery} />
        </div>
        <div className={classes.rightSide}>
          <RequestCard />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
