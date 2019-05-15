import React from "react";
import SubmitPost from "../../components/SubmitPost";
import ItemsList from "../../components/List";
import NavBar from "../../components/NavBar";

const Employer = ({ classes }) => {
  return (
    <>
      <NavBar />
      <SubmitPost />
      <ItemsList />
    </>
  );
};

export default Employer;
