import React, { useState } from "react";
import JobsMap from "../../components/JobsMap";
import NavBar from "../../components/NavBar";
import SentApplications from "../../components/SentApplications";

const EmployeeHome = ({ classes }) => {
  const [jobsQuery, setJobsQuery] = useState("");

  return (
    <div>
      <NavBar onChange={setJobsQuery} />
      <div className={classes.main}>
        <div className={classes.sideBar}>
          <SentApplications />
        </div>
        <div className={classes.rightSide}>
          <JobsMap />
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
