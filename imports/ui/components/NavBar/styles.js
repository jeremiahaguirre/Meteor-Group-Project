import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
  root: {
    width: "100%"
  },
  menu: {
    background: " #1e5799",
    background:
      "-moz-linear-gradient(left,  #1e5799 0%, #001e50 0%, #207cca 40%, #207cca 60%, #001e50 100%)" /* FF3.6-15 */,
    background:
      "-webkit-linear-gradient(left,  #1e5799 0%,#001e50 0%,#207cca 40%,#207cca 60%,#001e50 100%)" /* Chrome10-25,Safari5.1-6 */,
    background:
      "linear-gradient(to right,  #1e5799 0%,#001e50 0%,#207cca 40%,#207cca 60%,#001e50 100%)" /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

export default styles;
