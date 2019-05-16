import React from "react";
import "date-fns";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Form, Field } from "react-final-form";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { createJob } from "../../../api/functions";
import { TextField } from "@material-ui/core";

const professions = [
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
      date: null,
      profession: [],
      location: ""
    };
  }

  handleMultiChange = event => {
    this.setState({ profession: event.target.value });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = values => {
    createJob({
      ...values,
      location: this.state.location,
      time: this.state.date._d,
      professions: this.state.profession
    });
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
                    className={classes.textField}
                    placeholder="Job"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  >
                    {({ input, meta }) => (
                      <FormControl fullWidth className={classes.formControl}>
                        <InputLabel htmlFor={name}>Job</InputLabel>
                        <Input
                          inputProps={{ ...input }}
                          type="text"
                          value={input.value}
                          id={name}
                          className={classes.textField}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field
                    name="description"
                    component="input"
                    className={classes.textField}
                    placeholder="Descripton"
                    margin="normal"
                    variant="outlined"
                    type="text"
                  >
                    {({ input, meta }) => (
                      <FormControl fullWidth className={classes.formControl}>
                        <InputLabel htmlFor={name}>Descripton</InputLabel>
                        <Input
                          inputProps={{ ...input }}
                          type="text"
                          value={input.value}
                          id={name}
                          className={classes.textField}
                        />
                      </FormControl>
                    )}
                  </Field>

                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="location-simple">Location</InputLabel>
                    <Select
                      value={this.state.location}
                      onChange={this.handleChange}
                      inputProps={{
                        name: "location",
                        id: "location-simple"
                      }}
                    >
                      <MenuItem value="Vancouver">Vancouver</MenuItem>
                      <MenuItem value="Burnaby">Burnaby</MenuItem>
                      <MenuItem value="Richmond">Richmond</MenuItem>
                      <MenuItem value="Surrey">Surrey</MenuItem>
                    </Select>
                  </FormControl>

                  <SingleDatePicker
                    date={this.state.date} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="datePicker" // PropTypes.string.isRequired,
                    numberOfMonths={1}
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">
                      Skills
                    </InputLabel>
                    <Select
                      multiple
                      value={this.state.profession}
                      onChange={this.handleMultiChange}
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
                      {professions.map(profession => (
                        <MenuItem key={profession} value={profession}>
                          {profession}
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
