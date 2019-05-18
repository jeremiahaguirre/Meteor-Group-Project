import { easeInOut } from "@popmotion/easing";

const styles = theme => ({
  container: {
    display: "flex"
  },
  root: {
    flexGrow: 1,
    height: "100vh",
    background: "#0336ff",
    // background: "#003550",
    // background:
    //   "-moz-linear-gradient(top,  #003550 0%, #2989d8 50%, #003550 100%, #207cca 100%, #7db9e8 100%)d",
    // background:
    //   "-webkit-linear-gradient(top,  #003550 0%,#2989d8 50%,#003550 100%,#207cca 100%,#7db9e8 100%)",
    // background:
    //   "linear-gradient(to bottom,  #003550 0%,#2989d8 50%,#003550 100%,#207cca 100%,#7db9e8 100%)",
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
    color: "white",
    textShadow: "5px 5px 11px rgba(68,68,68,0.94)",
    fontSize: "40px"
  },
  text: {
    textShadow: "5px 5px 11px rgba(68,68,68,0.94)",
    color: "white"
  },

  image: {
    background: "#0336ff",
    // background: "#003550",
    // background:
    //   "-moz-linear-gradient(top,  #003550 0%, #2989d8 50%, #003550 100%, #207cca 100%, #7db9e8 100%)d",
    // background:
    //   "-webkit-linear-gradient(top,  #003550 0%,#2989d8 50%,#003550 100%,#207cca 100%,#7db9e8 100%)",
    // background:
    //   "linear-gradient(to bottom,  #003550 0%,#2989d8 50%,#003550 100%,#207cca 100%,#7db9e8 100%)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    paddingRight: 231
  }
});

export default styles;
