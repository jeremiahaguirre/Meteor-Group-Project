import React, { useState } from "react";
import JobsList from "../../components/JobsList";
import ApplicationsList from "../../components/ApplicationsList";
import NavBar from "../../components/NavBar";
import PropTypes from "prop-types";

const EmployerHome = ({ classes }) => {
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

EmployerHome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default EmployerHome;
