import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import { Jobs } from "../../../api/jobs";
import { Meteor } from "meteor/meteor";
import { Form, Field } from "react-final-form";

class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      jobInput: "",
      descriptionInput: "",
      shiftInput: ""
    };
  }

  handleInput = (e, stateKey) => {
    this.setState({ [stateKey]: e.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = values => {
    Meteor.call("jobs.insert", values.job, values.description, values.shift);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.handleClickOpen()}
          className={classes.btn}
        >
          New Post
        </Button>
        <Form
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"New Shift Post"}
              </DialogTitle>
              <form
                className={classes.container}
                noValidate
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <DialogContent>
                  {/* <Form /> */}

                  <Field
                    // id="outlined-name"
                    name="job"
                    // label="Job"
                    component="input"
                    className={classes.textField}
                    placeholder="Job"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  />
                  <Field
                    // id="outlined-name"
                    // label="Description"
                    name="description"
                    component="input"
                    className={classes.textField}
                    placeholder="Descripton"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  />
                  <Field
                    // id="outlined-name"
                    // label="Shift"
                    name="shift"
                    component="input"
                    className={classes.textField}
                    placeholder="Shift"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  />

                  <DialogActions>
                    <Button onClick={() => this.handleClose()} color="primary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary" autoFocus>
                      Submit
                    </Button>
                  </DialogActions>
                </DialogContent>
              </form>
            </Dialog>
          )}
        />
      </div>
    );
  }
}
export default withStyles(styles)(SubmitPost);
