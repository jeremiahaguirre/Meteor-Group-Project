import React from "react";
import EmployeeCard from "../../components/EmployeeCard";

const Test = ({ classes }) => {
  return (
    <div>
      <p>
        This is the Test page.Import whatever component you need to test inside
        this div
      </p>
      <EmployeeCard />
    </div>
  );
};

export default Test;
