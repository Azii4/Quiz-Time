import React from "react";
import {
  Typography,
  makeStyles,
  Container,
  Link,
  Box,
} from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  title: {
    marginTop: 40,
  },
  div: {
    backgroundColor: "#83898E",
    height: 40,
    borderRadius: "0 0 1rem 1rem",
    display: "flex",
    alignItems: "center",
  },
  box: {
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
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box
          elevation={20}
          variant="outlined"
          className={classes.box}
          maxWidth="600"
          boxShadow={5}
          pt={1}
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
            <div className={classes.div}>
              <Container maxWidth="md" borderRadius={16}>
                <Typography variant="body1" className={classes.about}>
                  <Link underline="none" href="/about" className={classes.link}>
                    About Quiz Time
                  </Link>
                </Typography>
              </Container>
            </div>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
