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
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";

const names = [
  "React",
  "React Native",
  "Meteor",
  "Node.js",
  "Express",
  "Javascript",
  "CSS",
  "MongoDB"
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      // selectedDate: new Date("2014-08-18T21:11:54"),
      date: null,
      name: [],
      age: ""
    };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleChangeMultiple = event => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   this.setState({
  //     name: value
  //   });
  // };

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
      "jobs.open",
      values.job,
      values.description,
      values.location,
      moment(this.state.date._d).format("ddd, MMM D")
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
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      inputProps={{
                        name: "age",
                        id: "age-simple"
                      }}
                    >
                      <MenuItem value="Vancouver">Vancouver</MenuItem>
                      <MenuItem value="Burnaby">Burnaby</MenuItem>
                      <MenuItem value="Richmond">Richmond</MenuItem>
                      <MenuItem value="Surrey">Surrey</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <Field
                    name="location"
                    component="input"
                    className={classes.textField}
                    placeholder="Location"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  /> */}
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
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
                    <Select
                      multiple
                      value={this.state.name}
                      onChange={this.handleChange}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={selected => (
                        <div className={classes.chips}>
                          {selected.map(value => (
                            <Chip
                              key={value}
                              label={value}
                              className={classes.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map(name => (
                        <MenuItem
                          key={name}
                          value={name}
                          // style={getStyles(name, this)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
