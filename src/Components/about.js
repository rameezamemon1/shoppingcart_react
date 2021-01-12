import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const About = () => {
  function FormRow() {
    return (
      <React.Fragment>
        <Grid xs={12}>
          <div className="latest-container">
            <hr className="line" /> &nbsp; &nbsp;
            <span className="latest-designs">About Us</span>&nbsp;&nbsp;
            <hr className="line" />
            <br />
            <br />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Paper className={"about-us"}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Box className={"about-us-text"}>
            <h6>
              We were established in Lahore in 2000 with the notion of
              fulfilling the footwear needs of an entire family. Delivering its
              promise of product excellence, We has thrived to a network of more
              than 50 retail outlets and 150 independent retailers in wholesale
              network. With its constant innovation in design, and up-to-date
              style trends, We is maintaining its leadership in unmatched
              products for all age groups and personal taste.
            </h6>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;
