import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 100,
    minHeight: 50,
    cursor: "pointer",
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
                  style={
                    value === props.correctAnswer && props.answered
                      ? {
                          border: "2px solid green",
                          minWidth: 96,
                          minHeight: 46,
                        }
                      : null
                  }
                >
                  <Typography variant="BUTTON TEXT" color="textPrimary">
                    {value}
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
