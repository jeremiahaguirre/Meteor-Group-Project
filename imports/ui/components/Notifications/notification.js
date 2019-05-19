import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

class Notification extends Component{
  handleNotificationsClick = (userId) => {
    
  }
  
  render() {
    const {currentUserId}=this.props;
    return(
    <div>
      <IconButton onClick={() => this.handleNotificationsClick(currentUserId)} color="inherit">
        <Badge badgeContent={0} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </div>
  );
};}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTracker(() => {

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(Notification));