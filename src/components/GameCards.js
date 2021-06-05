import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import decode from "../modules/decode";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 160,
    minHeight: 80,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      minWidth: 130,
      minHeight: 80,
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: 130,
      minHeight: 80,
      padding: "5%",
    },
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function GameCards(props) {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center" className={classes.root} spacing={2}>
        <Grid item>
          <Grid container justify="center" spacing={spacing}>
            {props.answers.map((value) => (
              <Grid key={value} item xs={6} sm={6} md={6}>
                <Paper
                  onClick={() => {
                    if (!props.answered) props.onClick(value);
                  }}
                  className={classes.paper}
                  elevation={3}
                  style={{
                    ...(props.answered && value === props.correctAnswer
                      ? { backgroundColor: "#2ecc71" }
                      : null),
                    ...(props.answered && value === props.incorrectAnswer
                      ? { backgroundColor: "#cc2e2e" }
                      : null),
                  }}
                >
                  <Typography variant="button" color="textPrimary">
                    {decode(value)}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
