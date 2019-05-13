import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ReactDOM from "react-dom";
import styles from "./styles";
import { Jobs } from "../../../api/jobs";

class Form extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          id="outlined-name"
          label="Job"
          className={classes.textField}
          placeholder={"Job"}
          onChange={console.log("Filled")}
          margin="normal"
          variant="outlined"
          ref="textInput"
        />
        <TextField
          id="outlined-name"
          label="Description"
          className={classes.textField}
          placeholder={"Descripton"}
          onChange={console.log("Filled")}
          margin="normal"
          variant="outlined"
          ref="textInput"
        />
        <TextField
          id="outlined-name"
          label="Shift"
          className={classes.textField}
          placeholder={"Shift"}
          onChange={console.log("Filled")}
          margin="normal"
          variant="outlined"
          ref="textInput"
        />
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
