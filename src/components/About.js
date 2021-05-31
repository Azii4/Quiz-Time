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
    <div className={classes.root}>
      <Container size="xs">
        <div className={classes.text}>
          <Typography variant="body1">
            Quiz Time is created by two Information Architecture students and
            one System Development student as a project in the course{" "}
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
            <Link href="https://opentdb.com">
              {" "}
              Open Trivia Database API
            </Link>{" "}
            for quiz content. For more information go to{" "}
            <Link href="https://github.com/Azii4/Quiz-Time">
              {" "}
              Quiz Time on GitHub
            </Link>
          </Typography>
          <br></br>
        </div>
        <Typography variant="h4" align="center" paragraph="true">
          The Game
        </Typography>
        <div className={classes.text}>
          <Typography variant="body1">
            Quiz Time offers the player two different versions of the game:
          </Typography>

          <Typography variant="body1" paragraph="true">
            <b>Standard</b> and <b>Time Attack</b>
          </Typography>

          <Typography variant="body1">
            The player can play all categories or choose between one of 6
            selected categories:
          </Typography>

          <Typography variant="body1" paragraph="true">
            <i>Movies, Music, Video Games, History, Geography or Animals</i>
          </Typography>

          <Typography variant="body1">
            The Standard game version is for people who want to relax and play a
            Quiz without any stress.
          </Typography>

          <Typography variant="body1" paragraph="true">
            While Time attack is not for the faint of heart! It's the
            competetive version of the Game, in Time Attack you have 10 seconds
            to answer each question while trying to keep a perfect score!
          </Typography>

          <Typography variant="h6" paragraph="true">
            See you on the leaderboards!
          </Typography>
        </div>
      </Container>
    </div>
  );
}
