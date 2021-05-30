import React from "react";
import NavTabs from "./NavTabs";
import { Typography, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  leaderboard: {
    marginBottom: 20,
  },
});

export default function Leaderboard() {
  const classes = useStyles();

  return (
    <Container size="sm">
      <Typography
        variant="h4"
        color="textPrimary"
        align="center"
        className={classes.leaderboard}
      >
        Leaderboard
      </Typography>
      <NavTabs />
    </Container>
  );
}
