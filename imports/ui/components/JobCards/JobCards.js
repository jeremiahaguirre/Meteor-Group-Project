import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
// import Gravatar from "react-gravatar";
import styles from "./styles";
import TextField from "@material-ui/core/TextField";
import { Users } from "../../../mock";
import { users } from "../../../mock/mockdatabase";
import { Paper } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Notification from "../Notifications";

class JobCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, users } = this.props;
    return (
      <div className={classes.alignCard}>
        <Card className={classes.card}>
          <Fragment>
            <CardContent>
              <div>
                <div className={classes.aicon}>
                  <Avatar className={classes.avatar} />
                </div>
              </div>
              {/* <Typography variant="display1">{users.name}</Typography> */}

              <Typography variant="display1">Date</Typography>

              <Typography variant="display1">Location</Typography>

              {/* <Typography variant="display1">
                {users.professions.join(", ")}
              </Typography> */}

              <Typography variant="display1">Description</Typography>

              {/* <Typography variant="display1">{users.workplaces}</Typography> */}
            </CardContent>
          </Fragment>
          <CardActions className={classes.aicon}>
            <Button
              onClick={this.handleOpen}
              className={classes.button}
              variant="outlined"
              size="small"
              color="primary"
            >
              Request
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div className={classes.paper}>
                {" "}
                <Notification />
              </div>
            </Modal>
          </CardActions>
        </Card>
      </div>
    );
  }
}

JobCards.defaultProps = { user: users };

export default withStyles(styles)(JobCards);
