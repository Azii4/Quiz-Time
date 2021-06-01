import React from "react";
import NavTabs from "./NavTabs";
import { Container, makeStyles, createMuiTheme } from "@material-ui/core";

let theme = createMuiTheme();

const useStyles = makeStyles({
  container: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      height: "100%",
    },
  },
});

export default function Leaderboard() {
  const classes = useStyles();
  return (
    <Container size="sm" className={classes.container}>
      <NavTabs />
    </Container>
  );
}
