import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withTracker } from "meteor/react-meteor-data";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Gravatar from "react-gravatar";
import moment from "moment";
import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ApplicationsList from "../ApplicationsList";
import SubmitPost from "../SubmitPost"
import { Link } from "react-router-dom";
import {
  getApplications,
  replyToApplication
} from "../../helpers/functions";
import styles from "./styles";

class MenuDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
        
          <SubmitPost />
          <div>
      <Typography className={classes.h2} component="h2">
        Applications Recieved
      </Typography>
      <Card className={classes.card}>
        <List>
          {applications.map(application => {
            const { job, jobOwner } = application;
            return (
              <QueueAnim
                key={job._id}
                className={classes.animation}
                component="ul"
                type={["right", "left"]}
                leaveReverse
              >
                <div className={classes.root} key={job._id}>
                  <ListItem className={classes.list} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar>
                        <Gravatar
                          email={jobOwner && jobOwner.emails[0].address}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={job.title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" color="textPrimary">
                            Description: {job.description}{" "}
                          </Typography>
                          <Typography component="span" color="textPrimary">
                            Date:{" "}
                            {moment(application.job.createdAt)
                              .add(10, "days")
                              .calendar()}
                          </Typography>
                          <Typography component="span" color="textPrimary">
                            Requierments: {job.professions.join(", ")}{" "}
                          </Typography>
                          <Typography component="span" color="textPrimary">
                            Location: {job.location}{" "}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      className={classes.btn}
                      onClick={() => replyToApplication(application, true)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.btn}
                      onClick={() => replyToApplication(application, false)}
                    >
                      Decline
                    </Button>
                  </div>
                  <Divider />
                </div>
              </QueueAnim>
            );
          })}
        </List>
      </Card>
      </div>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTracker(() => {
  Meteor.subscribe("postedJobs");
  Meteor.subscribe("userProfiles");
  Meteor.subscribe("recievedApplications");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    applications: getApplications()
  };
})(withStyles(styles)(MenuDrawer));
