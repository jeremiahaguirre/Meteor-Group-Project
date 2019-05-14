import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { startOfDay } from "date-fns";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { Jobs } from "../../../api/jobs";
import JobCards from "../../components/JobCards";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

class SimpleModal extends React.Component {
  state = {
    open: false,
    selectedDate: new Date("2014-08-18T21")
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, jobs } = this.props;
    const { selectedDate } = this.state;

    return (
      <div>
        {moment()
          .startOf("day")
          .fromNow()}

        <Typography gutterBottom>
          Click to get the full Modal experience!
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container className={classes.grid} justify="space-around">
            <DatePicker
              margin="normal"
              label="Date picker"
              value={selectedDate}
              onChange={this.handleDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        {/* {jobs.map(job => {
          <div key={job.id}> */}
        {/* <Button onClick={this.handleOpen}>{job.title}</Button>; */}
        <Button onClick={this.handleOpen}>Open Modal</Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <JobCards />
          </div>
        </Modal>

        {/* </div>;
        })} */}
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
