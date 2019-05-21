import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setError = this.setError.bind(this);
  }

  handleSubmit(values) {
    this.setError(null);
    if (this.state.isLogin) {
      Meteor.loginWithPassword(values.email, values.password, e =>
        e
          ? this.setError(
              "Unable to log in. Please check your login details and try again."
            )
          : this.props.history.push("/")
      );
    } else {
      Accounts.createUser(
        {
          profile: {
            name: this.state.nameInput,
            employer: values["profile-status"] === "employer" ? true : false,
            professions: [],
            notifications: []
          },
          email: values.email,
          password: values.password
        },
        e =>
          e
            ? e.reason === "Email already exists."
              ? this.setError("Email already in use")
              : console.log(e.reason) &&
                alert(
                  "Something went wrong. 😭 Please refresh and try again..."
                )
            : this.props.history.push("/")
      );
    }
  }

  setError(err) {
    this.setState({ error: err });
  }

  render() {
    const { error } = this.state;
    const { classes } = this.props;

    return (
      <Form
        onSubmit={this.handleSubmit}
        className={classes.accountForm}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            {!this.state.isLogin && (
              <>
                <Field name="fullname" type="text">
                  {({ input, meta }) => (
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel className={classes.text} htmlFor="fullname">
                        Username
                      </InputLabel>
                      <Input
                        className={classes.text}
                        inputProps={{
                          ...input,
                          autoComplete: "off"
                        }}
                        value={input.value}
                        id="fullname"
                        required
                      />
                    </FormControl>
                  )}
                </Field>
                <Field
                  name="profile-status"
                  type="radio"
                  // TODO: set initial value
                >
                  {({ input, meta }) => (
                    <FormControl
                      fullWidth
                      component="fieldset"
                      className={classes.radioFormControl}
                    >
                      <FormLabel component="legend">Profile Status</FormLabel>
                      <RadioGroup
                        aria-label="Profile status"
                        name="profile-status"
                        className={classes.radioGroup}
                        {...input}
                        defaultValue="employee"
                      >
                        <FormControlLabel
                          value="employee"
                          control={<Radio />}
                          label="Employee"
                        />
                        <FormControlLabel
                          value="employer"
                          control={<Radio />}
                          label="Employer"
                        />
                      </RadioGroup>
                    </FormControl>
                  )}
                </Field>
              </>
            )}
            <Field name="email">
              {({ input, meta }) => (
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel className={classes.text} htmlFor="email">
                    Email
                  </InputLabel>
                  <Input
                    id="email"
                    type="email"
                    className={classes.text}
                    inputProps={{
                      autoComplete: "off",
                      ...input
                    }}
                    value={input.value}
                    required
                  />
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel className={classes.text} htmlFor="password">
                    Password
                  </InputLabel>
                  <Input
                    id="password"
                    className={classes.text}
                    type="password"
                    inputProps={{ autoComplete: "off", ...input }}
                    value={input.value}
                    required
                  />
                </FormControl>
              )}
            </Field>
            {error && (
              <Typography className={classes.errorMessage}>{error}</Typography>
            )}
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
          </form>
        )}
      />
    );
  }
}

export default withStyles(styles)(withRouter(AccountForm));
