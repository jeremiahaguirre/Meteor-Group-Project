import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Form from "../Form";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import { Jobs } from "../../../api/jobs";
import { Meteor } from "meteor/meteor";

class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      jobInput: "",
      descriptionInput: "",
      shiftInput: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e, stateKey) {
    this.setState({ [stateKey]: e.target.value });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit(e) {
    e.preventDefault();

    Meteor.call("jobs.insert");
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
          className={classes.btn}
        >
          New Post
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"New Shift Post"}</DialogTitle>
          <form
            className={classes.container}
            onSubmit={this.handleSubmit.bind(this)}
            noValidate
            autoComplete="off"
          >
            <DialogContent>
              <Form />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" autoFocus>
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}
export default withStyles(styles)(SubmitPost);
