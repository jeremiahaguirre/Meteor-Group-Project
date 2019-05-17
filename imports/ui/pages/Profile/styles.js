const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "80%",
    maxWidth: "650px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: "100%",
    color: "white"
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
  },
  h2: {
    color: "Black",
    fontSize: "32px",
    lineHeight: "37px",
    fontWeight: "400",
    textAlign: "center"
  },
  btnPrimary: {
    color: "white",
    marginTop: "15px"
  },
  btnSecondary: {
    color: "white",
    marginRight: "20px",
    marginTop: "15px"
  }
});

export default styles;
