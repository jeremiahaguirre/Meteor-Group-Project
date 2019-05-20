import React from "react";
import Form from "../../components/AccountForm";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./animation.css";

const Welcome = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Grid
        container
        className={classes.root}
        // direction="row"
        // alignItems="center"
        // justify="center"
      >
        <Grid className={classes.siteName} item xs={12} sm={12} md={6}>
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
          {/* <Typography
            className={classes.text}
            // gutterBottom
            variant="headline"
          >
            Welcome!
          </Typography> */}
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Form />
        </Grid>
      </Grid>
      <div className={classes.image}>
        <img className="animation" src="/shaking-hands.jpg" />
      </div>
    </div>
  );
};

export default Welcome;
