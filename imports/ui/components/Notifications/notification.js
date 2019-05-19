import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

class Notification extends Component{
  handleClick = (notifications) => {
    console.log(notifications);
  }
  clearNotifications = (_id) => {
    Meteor.users.update({ _id },{$set:{'profile.notifications':[]}});
  }
  
  render() {
    const { notifications  } = this.props;
    return(
    <div>
      <IconButton onClick={() => this.handleClick(notifications)} color="inherit">
        <Badge badgeContent={notifications.length} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </div>
  );
};}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired;
};

export default (withStyles(styles)(Notification));