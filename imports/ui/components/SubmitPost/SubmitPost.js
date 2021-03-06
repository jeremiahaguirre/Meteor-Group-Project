import React from "react";
import "date-fns";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
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
import { createJob } from "../../../ui/helpers/functions";
import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

const professions = [
  "Cook",
  "Teacher",
  "Driver",
  "Babysitter",
  "Doctor",
  "Basketball Player"
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

  componentDidMount() {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser");
    } else {
      navigator.geolocation.getCurrentPosition(({ coords }) =>
        this.setState({ location: coords })
      );
    }
  }

  // generate random long/lat offsets for demo
  offSet = () => (Math.random() - 0.5) * 0.05;

  handleMultiChange = event => {
    this.setState({ profession: event.target.value });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = form => {
    this.setState({ open: false, date: null, profession: [] });
    form.reset();
  };

  handleSubmit = (values, form) => {
    createJob({
      ...values,
      location: {
        ...this.state.location,
        latitude: this.state.location.latitude + this.offSet(),
        longitude: this.state.location.longitude + this.offSet()
      },
      time: this.state.date._d,
      professions: this.state.profession
    });
    this.handleClose(form);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.handleClickOpen()}
        >
          <AddIcon />
        </Button>
        <Form
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, pristine, invalid, form }) => (
            <Dialog
              open={this.state.open}
              onClose={() => this.handleClose(form)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              className="modalSize"
              fullScreen={true}
              fullWidth={true}
            >
              <form
                className={classes.Form}
                noValidate
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <Typography className={classes.header} component="h2">
                  New Shift Post
                </Typography>
                <DialogContent className={classes.back}>
                  <Field
                    name="title"
                    component="input"
                    className={classes.textField}
                    placeholder="title"
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

                  <SingleDatePicker
                    date={this.state.date}
                    onDateChange={date => this.setState({ date })}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    id="datePicker"
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
                    <Button
                      className={classes.btn}
                      onClick={() => this.handleClose(form)}
                      color="primary"
                    >
                      Cancel
                    </Button>
                    <Button
                      className={classes.btn}
                      type="submit"
                      color="primary"
                      autoFocus
                    >
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

SubmitPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubmitPost);
