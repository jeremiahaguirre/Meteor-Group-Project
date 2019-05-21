const styles = theme => ({
  root: {
    width: "100%"
  },
  menu: {
    background: "rgba(255,255,255,0.1)",
    boxShadow: "none",
    width: "76%",
    position: "relative",
    left: "347px"
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
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  }
});

export default styles;
