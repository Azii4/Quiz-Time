import React from "react";
import NavTabs from "./NavTabs";
import { Typography, Container } from "@material-ui/core";

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
