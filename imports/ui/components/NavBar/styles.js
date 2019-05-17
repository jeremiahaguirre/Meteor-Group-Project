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
