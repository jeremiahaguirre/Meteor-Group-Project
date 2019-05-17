const styles = theme => ({
  root: {
    marginTop: "5px",
    marginbottom: "5px"
  },
  card: {
    minWidth: 275,
    width: "600px",
    height: "400px",
    overflowY: "scroll",
    background: "#003550",
    background:
      "-moz-linear-gradient(top,  #003550 0%, #2989d8 50%, #003550 100%, #207cca 100%, #7db9e8 100%)d",
    background:
      "-webkit-linear-gradient(top,  #003550 0%,#2989d8 50%,#003550 100%,#207cca 100%,#7db9e8 100%)",
    background:
      "linear-gradient(to bottom,  #003550 0%,#2989d8 50%,#003550 100%,#207cca 100%,#7db9e8 100%)",
    borderRadius: "10px"
  },
  h2: {
    color: "black",
    fontSize: "32px",
    fontWeight: "400",
    textAlign: "center",
    textShadow: "5px 5px 11px rgba(68,68,68,0.94)"
  },
  list: {
    width: "90%",
    margin: "auto",
    background: "rgba(235,247,253,0.5)",
    borderRadius: "10px"
  },
  h1: {
    fontWeight: "bold",
    fontSize: "20px"
  }
});

export default styles;
