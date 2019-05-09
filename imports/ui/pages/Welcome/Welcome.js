import React from "react";
import Form from "../../components/AccountForm";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Welcome = ({ classes }) => {
  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} sm={12} md={6}>
        <Typography
          variant="button"
          gutterBottom
          className={classes.subheading}
        >
          Hived
        </Typography>
        <Typography variant="display4" className={classes.headline}>
          Stay Updated
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Typography className={classes.text} gutterBottom variant="headline">
          Welcome home.
        </Typography>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Welcome;
