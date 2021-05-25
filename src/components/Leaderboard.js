import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import NavTabs from "./NavTabs";

export default function Leaderboard() {
  return (
    <Container size="sm">
      <Typography variant="h1" color="textPrimary" align="center">
        Leaderboard
      </Typography>
      <NavTabs />
    </Container>
  );
}
