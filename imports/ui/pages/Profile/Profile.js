import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { withTracker } from "meteor/react-meteor-data";
import { Form, Field } from "react-final-form";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import Link from "@material-ui/core/Link";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import Input from "./Input";

const styles = {
  menu: {
    position: "static",
    width: "unset",
    background: "rgba(255,255,255,0.1)",
    boxShadow: "none"
  }
};

const Profile = ({ currentUser, history, classes }) => {
  const [passError, setPassError] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleProfileSubmit = values => {
    // only uses non-empty field
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

    if (values["profile-status"] || values.username || values.description)
      history.push("/");
  };

  const handleChangePassword = values => {
    if (!values["old-password"] || !values["new-password"])
      return setPassError("Please fill both fields");

    Accounts.changePassword(values["old-password"], values["new-password"], e =>
      e ? setPassError(e.reason) : setModalIsOpen(false)
    );
  };

  return (
    <div className={classes.bg}>
      <Button
        onClick={() => {
          <Link to="/employe" />;
        }}
      >
        Back
      </Button>
      <main>
        <Paper className={classes.root} elevation={1}>
          <Typography
            className={classes.h2}
            variant="h2"
            color="inherit"
            noWrap
          >
            Update Profile
          </Typography>
          <Form
            onSubmit={handleProfileSubmit}
            className={classes.form}
            initialValues={{
              username: currentUser ? currentUser.profile.name : "",
              description: currentUser
                ? currentUser.profile.professions.join(", ")
                : ""
              // TODO: radio initial values
            }}
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
                  color="secondary"
                  onClick={() => setModalIsOpen(true)}
                  className={classes.btnSecondary}
                >
                  Change password
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.btnPrimary}
                >
                  Save changes
                </Button>
              </form>
            )}
          />

          <Dialog
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            aria-labelledby="password-modal-label"
          >
            <DialogContent>
              <Typography
                variant="h2"
                color="inherit"
                className={classes.h2}
                id="password-modal-label"
                noWrap
              >
                Change Password
              </Typography>
              <Form
                onSubmit={handleChangePassword}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <Input
                      name="old-password"
                      type="password"
                      classes={classes}
                      required
                    >
                      Current password
                    </Input>
                    <Input
                      name="new-password"
                      type="password"
                      classes={classes}
                      required
                    >
                      New password
                    </Input>
                    <DialogActions>
                      <Typography className={classes.errorMessage}>
                        {passError}
                      </Typography>
                      <Button
                        onClick={() => setModalIsOpen(false)}
                        color="secondary"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.btnSmall}
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </form>
                )}
              />
            </DialogContent>
          </Dialog>
        </Paper>
      </main>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("userProfiles");

  return { currentUser: Meteor.user() };
})(withRouter(Profile));
