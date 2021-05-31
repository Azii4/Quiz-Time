import React from "react";
import { Typography, Container, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    marginBottom: 20,
  },
});

export default function Leaderboard() {
  const classes = useStyles();

  return (
    <Container size="sm">
      <div className={classes.text}>
        <Typography variant="p">
          Quiz Time is created by two Information Architecture students and one
          System Development student as a project in the course{" "}
          <Link href="https://mau-webb.github.io/resurser/da355a-vt21/">
            {" "}
            DA355A - Multi-platform applications with web engineers / DA344A -
            Web applications for mobile devices
          </Link>{" "}
          at Malmö University. Quiz Time is a game which is built with
          JavaScript library
          <Link href="https://reactjs.org"> React</Link> using the framework
          <Link href="https://material-ui.com"> Material UI </Link> for User
          Interface and
          <Link href="https://opentdb.com"> Open Trivia Database API</Link> for
          quiz content. For more information go to{" "}
          <Link href="https://github.com/Azii4/Quiz-Time">
            {" "}
            Quiz Time on GitHub
          </Link>
        </Typography>
        <br></br>
      </div>
      <Typography variant="h4" align="center">
        The Game
      </Typography>
      <div className={classes.text}>
        <Typography variant="p">
          Quiz Time is divided in two different versions, Standard and, Time
          Attack. The player gets the choice of playing a quiz with all
          categories or a specific category of their choice. Standard game
          version is for people who want's to take their time and enyoj the
          trivia. Time attack is not for the faint of heart, this is the
          competetive version. In this version you have a battle with time each
          question, while trying to keep your score up! See you on the
          leaderboards!
        </Typography>
      </div>
    </Container>
  );
}
