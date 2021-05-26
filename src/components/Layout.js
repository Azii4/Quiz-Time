import React from "react";
import { Grid, makeStyles, Container, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#ffffff99",
    marginTop: 40,
    width: 500,
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <Container>
      <Grid container align="center">
        <Grid item xs={12} s={6} m={6}>
          <Paper elevation={3} variant="outlined" className={classes.paper}>
            <div>{children}</div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
