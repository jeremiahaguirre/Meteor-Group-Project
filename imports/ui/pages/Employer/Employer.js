import React from "react";
import SubmitPost from "../../components/SubmitPost";
import ItemsList from "../../components/AllJobs";
import RequestCard from "../../components/RequestCard";
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

const Employer = ({ classes }) => {
  return (
    <div>
      <div className={classes.top}>
        <SubmitPost />
      </div>
      <div className={classes.main}>
        <div className={classes.leftSide}>
          <ItemsList />
        </div>
        <div className={classes.rightSide}>
          <RequestCard />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Employer);
