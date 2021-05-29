import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Game from "./Game";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: 100,
      width: 160,
    },
    [theme.breakpoints.down("xs")]: {
      height: 80,
      width: 140,
    },
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Spelkort() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} spacing={2}>
      <Grid item xs={6} sm={6} md={6}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item height="100">
              <Paper className={classes.paper} elevation={3}>
                <Typography variant="h6" color="textPrimary">
                  Här kommer det stå en fråga som man ska svara på
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
