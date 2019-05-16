import React, { Component } from "react";
import Profile from "./Profile";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ProfileContainer = props => <Profile {...props} />;

export default withStyles(styles)(ProfileContainer);
