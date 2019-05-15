import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import JobCards from "../../components/JobCards";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import { Jobs } from "../../../api/jobs";
import { withTracker } from "meteor/react-meteor-data";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { GridList } from "@material-ui/core";

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
        <Grid container spacing={8}>
          <Grid item x={8}>
            
          </Grid>
          <Grid item x={8}>
            {" "}
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
            <Typography gutterBottom>
              List of Jobs:
            </Typography>
            <List dense className={classes.root}>
              {[0, 1, 2, 3, 4].map(value => (
                <ListItem key={value} button>
                  <JobCards />
                  <ListItemSecondaryAction>
                    {/* <Checkbox
                      onChange={this.handleToggle(value)}
                      checked={this.state.checked.indexOf(value) !== -1}
                    /> */}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>{" "}
          Jobs Requested
          {/* { <Button onClick={this.handleOpen}>Open Modal</Button> {" "}
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div className={classes.paper}>
                <JobCards />
              </div>
            </Modal> } */}
          {/* </div>;
        })} */}
        </Grid>
      </div>
    );
  }
}

// SimpleModal.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default withTracker(() => {
  Meteor.subscribe("jobs");
  Meteor.subscribe("userEmails");
  const jobs = Jobs.find({}).map(job => {
    const owner = Meteor.users.findOne({ _id: job.ownerId });
    return { ...job, owner: owner };
  });
  
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    jobs: Jobs.find({}).fetch()
  };
})(SimpleModalWrapped);
