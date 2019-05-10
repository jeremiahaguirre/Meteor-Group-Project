import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

// TODO: validate
class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      nameInput: "",
      statusInput: "",
      descriptionInput: "",
      emailInput: "",
      passwordInput: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e, stateKey) {
    this.setState({ [stateKey]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isLogin) {
      Meteor.loginWithPassword(
        this.state.emailInput,
        this.state.passwordInput,
        e => e && alert(e)
      );
    } else {
      Accounts.createUser({
        name: this.state.nameInput,
        status: this.state.statusInput,
        description: this.state.descriptionInput,
        email: this.state.emailInput,
        password: this.state.passwordInput
      });
    }
  }

  render() {
    const {
      nameInput,
      statusInput,
      descriptionInput,
      emailInput,
      passwordInput
    } = this.state;
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={classes.accountForm}>
        {!this.state.isLogin && (<>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel className={classes.text} htmlFor="fullname">
              Username
            </InputLabel>
            <Input
              id="fullname"
              type="text"
              inputProps={{ autoComplete: "off" }}
              value={nameInput}
              onChange={e => this.handleInput(e, "nameInput")}
              className={classes.text}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel className={classes.text} htmlFor="fulltitle">
              Profile Status
            </InputLabel>
            <Input
              id="title"
              type="text"
              inputProps={{ autoComplete: "off" }}
              value={statusInput}
              onChange={e => this.handleInput(e, "statusInput")}
              className={classes.text}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel className={classes.text} htmlFor="jobdescription">
              Job Description
            </InputLabel>
            <Input
              id="job"
              type="text"
              inputProps={{ autoComplete: "off" }}
              value={descriptionInput}
              onChange={e => this.handleInput(e, "descriptionInput")}
              className={classes.text}
            />
          </FormControl>
        </>)}
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel className={classes.text} htmlFor="email">
            Email
          </InputLabel>
          <Input
            id="email"
            type="text"
            inputProps={{
              autoComplete: "off"
            }}
            value={emailInput}
            onChange={e => this.handleInput(e, "emailInput")}
            className={classes.text}
          />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel className={classes.text} htmlFor="password">
            Password
          </InputLabel>
          <Input
            id="password"
            type="password"
            inputProps={{ autoComplete: "off" }}
            value={passwordInput}
            onChange={e => this.handleInput(e, "passwordInput")}
            className={classes.text}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Button
              type="submit"
              className={classes.formButton}
              variant="contained"
              size="large"
              color="secondary"
              disabled={false}
            >
              {this.state.isLogin ? "Enter" : "Create Account"}
            </Button>
            <Typography className={classes.text}>
              <button
                className={classes.formToggle}
                type="button"
                onClick={() => {
                  this.setState({
                    isLogin: !this.state.isLogin
                  });
                }}
              >
                {this.state.isLogin
                  ? "Create an account."
                  : "Login to existing account."}
              </button>
            </Typography>
          </Grid>
        </FormControl>
        <Typography className={classes.errorMessage} />
      </form>
    );
  }
}

export default withStyles(styles)(AccountForm);
