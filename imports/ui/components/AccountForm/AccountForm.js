import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      nameInput: '',
      titleInput: '',
      descriptionInput: '',
      emailInput: '',
      passwordInput: ''
    };
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameInput(e) {
    this.setState({ nameInput: e.target.value })
  }

  handleTitleInput(e) {
    this.setState({ titleInput: e.target.value })
  }

  handleDescriptionInput(e) {
    this.setState({ descriptionInput: e.target.value })
  }

  handleEmailInput(e) {
    this.setState({ emailInput: e.target.value })
  }

  handlePasswordInput(e) {
    this.setState({ passwordInput: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    const {
      nameInput,
      titleInput,
      descriptionInput,
      emailInput,
      passwordInput
    } = this.state
    const { classes } = this.props;

    return (
      <form
        onSubmit={this.handleSubmit}
        className={classes.accountForm}
      >
        {!this.state.formToggle && (
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel className={classes.text} htmlFor="fullname">
              Username
            </InputLabel>
            <Input
              id="fullname"
              type="text"
              inputProps={{ autoComplete: "off" }}
              value={nameInput}
              onChange={this.handleNameInput}
              className={classes.text}
            />
          </FormControl>
        )}
        {!this.state.formToggle && (
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel className={classes.text} htmlFor="fulltitle">
              Profile Status
            </InputLabel>
            <Input
              id="title"
              type="text"
              inputProps={{ autoComplete: "off" }}
              value={titleInput}
              onChange={this.handleTitleInput}
              className={classes.text}
            />
          </FormControl>
        )}

        {!this.state.formToggle && (
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel className={classes.text} htmlFor="jobdescription">
              Jop Description
            </InputLabel>
            <Input
              id="job"
              type="text"
              inputProps={{ autoComplete: "off" }}
              value={descriptionInput}
              onChange={this.handleDescriptionInput}
              className={classes.text}
            />
          </FormControl>
        )}
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
            onChange={this.handleEmailInput}
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
            onChange={this.handlePasswordInput}
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
              {this.state.formToggle ? "Enter" : "Create Account"}
            </Button>
            <Typography className={classes.text}>
              <button
                className={classes.formToggle}
                type="button"
                onClick={() => {
                  this.setState({
                    formToggle: !this.state.formToggle
                  });
                }}
              >
                {this.state.formToggle
                  ? "Create an account."
                  : "Login to existing account."}
              </button>
            </Typography>
          </Grid>
        </FormControl>
        <Typography className={classes.errorMessage}>
        </Typography>
      </form>
    );
  }
}
export default withStyles(styles)(AccountForm);
