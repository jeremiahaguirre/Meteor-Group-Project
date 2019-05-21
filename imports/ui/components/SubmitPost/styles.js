const styles = theme => ({
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: "100%",
    color: "white"
  },
  back: {
    background: "rgba(224, 224, 224,0.6)",
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
    background: `url(${"/background.jpg"})`,
    backgroundSize: "cover",
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
