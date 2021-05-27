import React from "react";
import {
  Typography,
  makeStyles,
  Container,
  Paper,
  AppBar,
  Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#ffffff99",
    marginTop: 40,
    maxWidth: 800,
    minWidth: 350,
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <Container>
      <Paper elevation={3} variant="outlined" className={classes.paper}>
        <div>{children}</div>
        <AppBar position="static" color="primary" align="center">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                About
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Paper>
    </Container>
  );
}
