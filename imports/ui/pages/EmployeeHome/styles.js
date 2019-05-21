const styles = {
  main: {
    display: "flex",
    margin: "auto",
    width: "100%"
  },
  top: {
    width: "100%",
    padding: "30px",
    textAlign: "center"
  },
  sideBar: {
    background: "white",
    height: "100vh",
    width: "24%",
    position: "absolute",
    top: 0
  },
  rightSide: {
    background: `url(${"/background.jpg"})`,
    backgroundSize: "cover",
    height: "100vh",
    position: "absolute",
    right: "0px",
    top: 0,
    zIndex: "-5",
    width: "76%"
  }
};

export default styles;
