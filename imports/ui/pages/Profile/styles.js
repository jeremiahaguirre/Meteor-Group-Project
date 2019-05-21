const styles = theme => ({
  bg: {
    background: `url(${"/background.jpg"})`,
    backgroundSize: "cover",
    minHeight: "100vh"
  },
  root: {
    ...theme.mixins.gutters(),
    background: "rgba(255,255,255,0.6)",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "80vw",
    maxWidth: "850px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 5
  },
  form: {
    ...theme.mixins.gutters()
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
  radioFormControl: {
    marginTop: theme.spacing.unit
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: theme.spacing.unit * 2
  },
  textWhite: {
    color: "white"
  },
  h2: {
    color: "Black",
    fontSize: "32px",
    lineHeight: 1.15,
    padding: "10px 0 15px 0",
    fontWeight: "400",
    textAlign: "center"
  },
  btnPrimary: {
    background: "rgb(233,65,85)",
    marginTop: "15px",
    color: "white"
  },
  btnSecondary: {
    marginRight: "20px",
    marginTop: "15px",
    color: "white"
  },
  btnSmall: {
    background: "#f79e02"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
});

export default styles;
