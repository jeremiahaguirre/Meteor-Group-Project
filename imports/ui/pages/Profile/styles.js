const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: "100%",
    color: "white"
  },
  formButton: {
    marginTop: theme.spacing.unit * 2,
    background: "rgb(233,86,86)",
    color: "black"
  },
  accountForm: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "400px"
    },
    color: "white"
  },
  errorMessage: {
    color: "red"
  },
  radioGroup: {
    "flex-direction": "row",
    "margin-bottom": 0
  },
  textWhite: {
    color: "white"
  }
});

export default styles;
