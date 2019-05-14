import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Meteor } from "meteor/meteor";
import { Form, Field } from "react-final-form";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      jobInput: "",
      descriptionInput: "",
      shiftInput: "",
      selectedDate: new Date("2014-08-18T21")
    };
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

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
    const { selectedDate } = this.state;
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
                  <Field
                    name="job"
                    component="input"
                    className={classes.textField}
                    placeholder="Job"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  />
                  <Field
                    name="description"
                    component="input"
                    className={classes.textField}
                    placeholder="Descripton"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  />
                  <Field
                    name="shift"
                    component="input"
                    className={classes.textField}
                    placeholder="Shift"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  />
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid
                      container
                      className={classes.grid}
                      justify="space-around"
                    >
                      <DatePicker
                        margin="normal"
                        label="Date picker"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

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
