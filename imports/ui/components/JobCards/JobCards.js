import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Gravatar from "react-gravatar";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Jobs } from "../../../api/jobs";

import TextField from "@material-ui/core/TextField";
import { users } from "../../../mock/mockdatabase";
import Modal from "@material-ui/core/Modal";

class JobCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitleInput: "",
      jobDescriptionInput: "",
      open: false
    };
    //this.handleInput = this.handleInput.bind(this);
    this.jobInput = React.createRef();
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { jobTitleInput, jobDescriptionInput } = this.state;
    const { classes, job } = this.props;
    console.log('Job card',job);
    return (
      <div>
        <Card className={classes.card}>
          <Fragment>
            <CardContent>
              <div>
                <div>
                  <Avatar className={classes.avatar} />
                </div>
              </div>
              {/* <Typography variant="display1">{user.name}</Typography> */}

              <form onSubmit={this.handleSubmit}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel className={classes.text} htmlFor="fullname">
                    Username
                  </InputLabel>
                  <Input
                    id="title"
                    type="text"
                    inputProps={{ autoComplete: "off" }}
                    value={jobTitleInput}
                    onChange={e => this.handleInput(e, "jobTitleInput")}
                    className={classes.text}
                    ref={this.jobInput}
                  />
                </FormControl>
              </form>

              {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
              <Typography variant="display1">Date</Typography>
              {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
              {/* <Typography variant="display1">{user.email}</Typography> */}
              {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
              <Typography variant="display1">
                {/* {job.title ? job.title : ""} */}
              </Typography>
              {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
              <Typography variant="display1">{}</Typography>
              {/* <TextField inputProps ={{ inputProps: {}  }} /> */}
              <Typography variant="display1">{}</Typography>
            </CardContent>
          </Fragment>
          <CardActions>
            <Button
              className={classes.button}
              variant="outlined"
              size="small"
              color="primary"
              onClick={this.handleOpen}
            >
              Request
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

// JobCards.defaultProps = { user: users };

const JobCards123 = withStyles(styles)(JobCards);

export default withTracker(() => {
  Meteor.subscribe("jobs");
  const jobs = Jobs.find({}).map(job => {
    return { ...job };
  });

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    jobs: jobs
  };
})(JobCards123);
