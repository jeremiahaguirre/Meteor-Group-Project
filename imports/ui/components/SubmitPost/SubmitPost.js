import React from "react";
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

class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      job: "",
      description: "",
      Shift: ""
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

    Jobs.insert({
      text
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  }

  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.container}
        onSubmit={this.handleSubmit}
        noValidate
        autoComplete="off"
      >
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
          <DialogContent>
            <Form />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              onSubmit={this.handleSubmit.bind(this)}
              color="primary"
              autoFocus
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    );
  }
}
export default withStyles(styles)(SubmitPost);
