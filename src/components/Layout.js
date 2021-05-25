import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles({
  page: {
    background: "#FFFFFF",
    opacity: 0.8,
    width: "40%",
    marginTop: 40,
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <Container>
      <Grid container align="center">
        <Grid item xs={0} s={3} m={3}></Grid>
        <Grid item xs={12} s={6} m={6}>
          <div className={classes.page}>{children}</div>
        </Grid>
        <Grid item xs={0} s={3} m={3}></Grid>
      </Grid>
    </Container>
  );
}
