import React, { useState } from "react";
import JobsList from "../../components/JobsList";
import ApplicationsList from "../../components/ApplicationsList";
import NavBar from "../../components/NavBar";

const Home = ({ classes }) => {
  const [jobsQuery, setJobsQuery] = useState("");

  return (
    <div>
      <NavBar onChange={setJobsQuery} />
      <div className={classes.main}>
        <div className={classes.sideBar}>
          <ApplicationsList />
        </div>
        <div className={classes.rightSide}>
          <JobsList filter={jobsQuery} />
        </div>
      </div>
    </div>
  );
};

export default Home;
