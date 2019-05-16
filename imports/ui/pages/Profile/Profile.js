import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import NavBar from "../../components/NavBar";
import Input from "./Input";

const Profile = ({ classes }) => {
  const [passError, setPassError] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
      e ? setPassError(e.reason) : setModalIsOpen(false)
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
                  color="secondary"
                  type="submit"
                  onClick={() => setModalIsOpen(true)}
                  className={classes.textWhite}
                >
                  Change password
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.textWhite}
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
                variant="h3"
                color="inherit"
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
                    >
                      Current password
                    </Input>
                    <Input
                      name="new-password"
                      type="password"
                      classes={classes}
                    >
                      New password
                    </Input>
                    <DialogActions>
                      <Typography className={classes.errorMessage}>
                        {passError}
                      </Typography>
                      <Button
                        onClick={() => setModalIsOpen(false)}
                        color="primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.textWhite}
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
    </>
  );
};

export default Profile;
