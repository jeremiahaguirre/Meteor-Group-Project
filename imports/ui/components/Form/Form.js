import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ReactDOM from "react-dom";
import styles from "./styles";
import { Jobs } from "../../../api/jobs";
import AccountForm from "../SubmitPost/index";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          id="outlined-name"
          label="Job"
          className={classes.textField}
          placeholder={"Job"}
          // onChange={e => this.handleInput(e, "jobInput")}
          margin="normal"
          variant="outlined"
          type="text"
          // value={jobInput}
          ref={this.textInput}
        />
        <TextField
          id="outlined-name"
          label="Description"
          className={classes.textField}
          placeholder={"Descripton"}
          onChange={console.log("Filled")}
          margin="normal"
          variant="outlined"
          type="text"
          // value={descriptionInput}
          ref={this.textInput}
        />
        <TextField
          id="outlined-name"
          label="Shift"
          className={classes.textField}
          placeholder={"Shift"}
          onChange={console.log("Filled")}
          margin="normal"
          variant="outlined"
          type="text"
          // value={shiftInput}
          ref={this.textInput}
        />
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
