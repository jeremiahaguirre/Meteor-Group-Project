import React, { useState } from "react";
import JobsMap from "../../components/JobsMap";
import NavBar from "../../components/NavBar";
import SentApplications from "../../components/SentApplications";
import PropTypes from "prop-types";

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

EmployeeHome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default EmployeeHome;
