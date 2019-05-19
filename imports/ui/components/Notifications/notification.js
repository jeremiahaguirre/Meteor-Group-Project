import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

class Notification extends Component{
  handleClick = (notifications) => {
    const { userId } = this.props;
    const recievedApp =notifications.filter((not)=>(not.jobOwnerId===userId)&&(!not.status));
    const recievedAppResult =notifications.filter((not)=>(not.applicantId===userId)&&(not.status));
    
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
  notifications: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired
};

export default (withStyles(styles)(Notification));