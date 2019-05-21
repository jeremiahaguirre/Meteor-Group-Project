const styles = theme => ({
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: "100%",
    color: "white"
  },
  back: {
    background: "#e0e0e0",
    borderRadius: "10px",
    height: "80vh"
  },
  header: {
    color: "white",
    fontSize: "30px",
    padding: "20px"
  },
  Form: {
    height: "100vh",
    background:
      "-moz-linear-gradient(top,  #003550 0%, #2989d8 50%, #003550 100%, #207cca 100%, #7db9e8 100%)d",
    background:
      "-webkit-linear-gradient(top,  #003550 0%,#2989d8 50%,#003550 100%,#207cca 100%,#7db9e8 100%)",
    background:
      "linear-gradient(to bottom,  #003550 0%,#2989d8 50%,#003550 100%,#207cca 100%,#7db9e8 100%)",

    paddingLeft: "10%",
    paddingRight: "10%"
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%"
  },

  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  modalSize: {
    width: "80vw"
  }
});

export default styles;
