import { easeInOut } from "@popmotion/easing";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    background: `url(${"/background.jpg"})`,
    backgroundSize: "cover",
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit * 20
    }
  },
  headline: {
    fontWeight: 400,
    color: "white",
    textShadow: "5px 5px 11px rgba(68,68,68,0.94)",
    fontSize: theme.typography.display3.fontSize,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.display4.fontSize
    }
  },
  subheading: {
    fontWeight: 400,
    color: "black",
    textShadow: "5px 5px 11px rgba(68,68,68,0.94)",
    fontSize: "40px"
  }
});

export default styles;
