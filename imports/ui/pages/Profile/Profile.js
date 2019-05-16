import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import NavBar from "../../components/NavBar";
import Input from "./Input";

const Profile = ({ classes }) => {
  const [passError, setPassError] = useState();

  const handleProfileSubmit = values => {
    values["profile-status"] &&
      Meteor.users.update(
        { _id: Meteor.userId() },
        {
          $set: {
            "profile.employer":
              values["profile-status"] === "employer" ? true : false
          }
        }
      );
    values.username &&
      Meteor.users.update(
        { _id: Meteor.userId() },
        {
          $set: {
            "profile.name": values.username
          }
        }
      );
    values.description &&
      Meteor.users.update(
        { _id: Meteor.userId() },
        {
          $set: {
            "profile.professions": values.description.split(",")
          }
        }
      );
  };

  const handleChangePassword = values => {
    if (!values["old-password"] || !values["new-password"]) return;

    Accounts.changePassword(values["old-password"], values["new-password"], e =>
      e && e.reason === "Incorrect password"
        ? setPassError(e.reason)
        : alert("Something went wrong please refresh")
    );
  };

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h3" color="inherit" noWrap>
            Update Profile
          </Typography>
          <Form
            onSubmit={handleProfileSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit}>
                <Input name="username" classes={classes}>
                  Username
                </Input>
                <Input name="description" classes={classes}>
                  Description
                </Input>
                <Field name="profile-status" type="radio">
                  {({ input }) => (
                    <FormControl
                      fullWidth
                      component="fieldset"
                      className={classes.radioFormControl}
                    >
                      <FormLabel component="legend">Profile Status</FormLabel>
                      <RadioGroup
                        name="profile-status"
                        aria-label="Profile status"
                        className={classes.radioGroup}
                        defaultValue="employee"
                        {...input}
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
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={`${classes.formButton} ${classes.textWhite}`}
                >
                  Save changes
                </Button>
              </form>
            )}
          />
          <Typography variant="h3" color="inherit" noWrap>
            Change Password
          </Typography>
          <Form
            onSubmit={handleChangePassword}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit}>
                <Input name="old-password" type="password" classes={classes}>
                  Current password
                </Input>
                <Input name="new-password" type="password" classes={classes}>
                  New password
                </Input>
                <Typography className={classes.errorMessage}>
                  {passError}
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={`${classes.formButton} ${classes.textWhite}`}
                >
                  Change password
                </Button>
              </form>
            )}
          />
        </Paper>
      </main>
    </>
  );
};

export default Profile;
