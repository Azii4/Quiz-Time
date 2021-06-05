import React from "react";
import {
  Typography,
  makeStyles,
  Container,
  Link,
  Box,
  BottomNavigation,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme();

const useStyles = makeStyles({
  container: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      height: "100%",
    },
  },
  box: {
    backgroundColor: "#ffffff99",
    marginTop: 80,
    borderRadius: "1rem",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      borderRadius: 0,
      minHeight: 800,
    },
  },
  content: {
    minHeight: 400,
  },
  title: {
    marginTop: 20,
  },
  footer: {
    backgroundColor: "#6471BE",
    height: 40,
    borderRadius: "0 0 1rem 1rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
      bottom: 0,
      position: "fixed",
      width: "100%",
    },
  },
  link: {
    color: "#FFFFFF",
    fontFamily: "Arial",
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" className={classes.container} align="center">
        <Box
          className={classes.box}
          elevation={20}
          variant="outlined"
          maxWidth="100%"
          boxShadow={5}
          pt={1}
        >
          <Typography
            className={classes.title}
            variant="h1"
            color="textPrimary"
            align="center"
            paragraph={true}
          >
            <Link href="/" underline="none" color="primary">
              Quiz Time
            </Link>
          </Typography>

          <div className={classes.content}>{children}</div>
          <BottomNavigation className={classes.footer}>
            <Link className={classes.link} underline="none" href="/about">
              About Quiz Time
            </Link>
          </BottomNavigation>
        </Box>
      </Container>
    </>
  );
}
