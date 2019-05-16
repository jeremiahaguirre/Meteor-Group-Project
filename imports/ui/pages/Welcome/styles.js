const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
     //background: "#1589FF",
    backgroundImage: `url(${"/background.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit * 20
    }
  },
  headline: {
    fontWeight: 400,
    color: "white",
    fontSize: theme.typography.display3.fontSize,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.display4.fontSize
    }
  },
  subheading: {
    fontWeight: 400,
    color: "white",
    fontSize: "40px"
  },
  text: {
    color: "white"
  },
  welcomePage: {
    height: 400, 
  }
});

export default styles;
