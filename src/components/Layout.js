import React from "react";
import {
  Typography,
  makeStyles,
  Container,
  AppBar,
  Toolbar,
  Link,
  Paper,
} from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { borders } from "@material-ui/system";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  title: {
    marginTop: 40,
  },
  AppBar: {
    backgroundColor: "#83898E",
    height: 60,
    borderRadius: "0 0 1rem 1rem",
  },
  paper: {
    backgroundColor: "#ffffff90",
    marginTop: 40,
    borderRadius: "1rem",
  },
  link: {
    color: "#4C5055",
  },
  about: {
    flexGrow: 1,
    textAlign: "center",
    textDecoration: "none",
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          variant="outlined"
          className={classes.paper}
          maxWidth="600"
        >
          <Typography
            variant="h1"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            <Link href="/" underline="none" color="primary">
              Quiz Time
            </Link>
          </Typography>
          <div>{children}</div>
          <div>
            <AppBar
              position="relative"
              color="primary"
              className={classes.AppBar}
            >
              <Container maxWidth="md" borderRadius={16}>
                <Toolbar>
                  <Typography variant="h6" className={classes.about}>
                    <Link
                      underline="none"
                      href="/about"
                      className={classes.link}
                    >
                      About Quiz Time
                    </Link>
                  </Typography>
                </Toolbar>
              </Container>
            </AppBar>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
