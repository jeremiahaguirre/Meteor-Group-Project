import React, { useState } from "react";
import SubmitPost from "../../components/SubmitPost";
import ItemsList from "../../components/List";
import NavBar from "../../components/NavBar";

const Employer = ({ classes }) => {
  const [jobsQuery, setJobsQuery] = useState("");

  return (
    <div>
      <NavBar onChange={setJobsQuery} />
      <SubmitPost />
      <ItemsList filter={jobsQuery} />
    </div>
  );
};

export default Employer;
