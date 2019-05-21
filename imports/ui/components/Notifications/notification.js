import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

class Notification extends Component{
  queue = [];

  state = {
    open: false,
    messageInfo: {},
  };

  handleClick = () => {
    const { notifications,userId  } = this.props;
    const applications = notifications.filter((not) => (not.jobOwnerId === userId) && (!not.status));
    const replies = notifications.filter((not) => (not.applicantId === userId) && (not.status!==null));
    if (applications.length>0) this.addToQue(applications.length,'application');
    if (replies.length>0) this.addToQue(replies.length,'reply');
    if (this.state.open) {
      this.setState({ open: false });
    } else {
      this.processQueue();
    }
  };

  addToQue = (number, messageType) => {
    const message=messageType==='reply'?`${number} new job replies recieved`:messageType==='application'?`${number} new applications recieved`:''
    this.queue.push({
      message,
      messageType,
      key: new Date().getTime(),
    });
  }

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: this.queue.shift(),
        open: true,
      });
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  handleRead=(messageType)=>{
    if (messageType === 'reply') {
      Meteor.call('users.clearRepliesRecieved');
    } else if (messageType==='application') {
      Meteor.call('users.clearAppsRecieved');
    }
    this.handleClose();
  }
  
  render() {
    const { notifications,classes  } = this.props;
    const { messageInfo } = this.state;
    return(
    <div>
      <IconButton onClick={() => this.handleClick()} color="inherit">
        <Badge badgeContent={notifications.length} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
        <Snackbar
          key={messageInfo.key}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          onExited={this.handleExited}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{messageInfo.message}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={() => this.handleRead(messageInfo.messageType)}>
              MARK AS READ
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
    </div>
  );
};}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired
};

export default (withStyles(styles)(Notification));