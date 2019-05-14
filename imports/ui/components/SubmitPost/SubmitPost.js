import React, { Fragment } from "react";
import "date-fns";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Meteor } from "meteor/meteor";
import Grid from "@material-ui/core/Grid";
import { Form, Field } from "react-final-form";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      // selectedDate: new Date("2014-08-18T21:11:54"),
      date: null
    };
  }

  // handleDateChange = date => {
  //   this.setState({ selectedDate: date });
  // };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = values => {
    console.log(moment(this.state.date._d).format("ddd, MMM D"));
    Meteor.call(
      "jobs.insert",
      values.job,
      values.description,
      values.location,
      this.state.date._d
    );
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
              className="modalSize"
              fullScreen={true}
              fullWidth={true}
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
                  {/* <Field
                    name="shift"
                    component="input"
                    className={classes.textField}
                    placeholder="Shift"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  /> */}
                  <Field
                    name="location"
                    component="input"
                    className={classes.textField}
                    placeholder="Location"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  />
                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                  </MuiPickersUtilsProvider> */}

                  <SingleDatePicker
                    date={this.state.date} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="datePicker" // PropTypes.string.isRequired,
                    numberOfMonths={1}
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
