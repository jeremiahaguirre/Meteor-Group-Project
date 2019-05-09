import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
/**
 * @TODO: Uncomment the following lines when authentication is added to the form
 *
 * import { Form, Field } from 'react-final-form'
 *
 * import {
 *    LOGIN_MUTATION,
 *    SIGNUP_MUTATION,
 *    VIEWER_QUERY
 * } from '../../apollo/queries';
 * import { graphql, compose } from 'react-apollo';
 * import validate from './helpers/validation'
 */

import styles from "./styles";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true
    };
  }

  render() {
    const { classes } = this.props;

    return (
      // @TODO: Wrap in Final Form <Form />
      <form
        onSubmit={() => {
          console.log("Submitted");
        }}
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
              inputProps={{
                autoComplete: "off"
              }}
              value={""}
              className={classes.text}
            />
            {/* @TODO: Close Final Form <Field /> */}
          </FormControl>
        )}
        {!this.state.formToggle && (
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel className={classes.text} htmlFor="fulltitle">
              Profile Status
            </InputLabel>
            {/* @TODO: Wrap in a Final Form <Field /> */}
            <Input
              id="title"
              type="text"
              inputProps={{
                autoComplete: "off"
              }}
              value={""}
              className={classes.text}
            />
            {/* @TODO: Close Final Form <Field /> */}
          </FormControl>
        )}

        {!this.state.formToggle && (
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel className={classes.text} htmlFor="jobdescription">
              Jop Description
            </InputLabel>
            {/* @TODO: Wrap in a Final Form <Field /> */}
            <Input
              id="job"
              type="text"
              inputProps={{
                autoComplete: "off"
              }}
              value={""}
              className={classes.text}
            />
            {/* @TODO: Close Final Form <Field /> */}
          </FormControl>
        )}
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel className={classes.text} htmlFor="email">
            Email
          </InputLabel>
          {/* @TODO: Wrap in a Final Form <Field /> */}
          <Input
            id="email"
            type="text"
            inputProps={{
              autoComplete: "off"
            }}
            value={""}
            className={classes.text}
          />
          {/* @TODO: Close Final Form <Field /> */}
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel className={classes.text} htmlFor="password">
            Password
          </InputLabel>
          {/* @TODO: Wrap in a Final Form <Field /> */}
          <Input
            id="password"
            type="password"
            inputProps={{
              autoComplete: "off"
            }}
            value={""}
            className={classes.text}
          />
          {/* @TODO: Close Final Form <Field /> */}
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
              disabled={
                false // @TODO: This prop should depend on pristine or valid state of form
              }
            >
              {this.state.formToggle ? "Enter" : "Create Account"}
            </Button>
            <Typography className={classes.text}>
              <button
                className={classes.formToggle}
                type="button"
                onClick={() => {
                  // @TODO: Reset the form on submit
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
          {/* @TODO: Display sign-up and login errors */}
        </Typography>
      </form>
      // @TODO: Close Final Form <Form />
    );
  }
}
export default withStyles(styles)(AccountForm);
