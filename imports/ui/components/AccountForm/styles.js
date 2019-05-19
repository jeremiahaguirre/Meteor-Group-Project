const styles = theme => ({
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: "100%",
    color: "white"
  },
  formButton: {
    marginTop: theme.spacing.unit * 2,
    background: "#f9aa33",
    color: "black"
  },
  formToggle: {
    background: "none",
    border: "none",
    color: "white",
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer"
    }
  },
  accountForm: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "400px"
    },
    color: "white"
  },
  errorMessage: {
    color: "white"
  },
  text: {
    color: "white"
  },
  radioGroup: {
    "flex-direction": "row",
    "margin-bottom": 0
  }
});

export default styles;
