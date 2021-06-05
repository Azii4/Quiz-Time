import { useState, useEffect, useRef } from "react";
import { getQuestions, getCategory } from "../modules/triviaApi";
import { useLocation, Link } from "react-router-dom";
import { saveStandard, saveTimeAttack } from "./LocalStorage";

import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ButtonGroup, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import decode from "../modules/decode";
import "../css/game.css";
import GameCards from "./GameCards";
import TimerBar from "./TimerBar";

const questionAmount = 10;
const timerTime = 10;

function Game() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const [questionList, setQuestionList] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [gameMode] = useState(searchParams.get("mode")); // Tanken är att ha 0 för standard och 1 för timeattack
  const [name] = useState(searchParams.get("name"));
  const [category] = useState(searchParams.get("cat"));
  const [timer, setTimer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [incorrectAnswer, setIncorectAnswer] = useState("");

  const counterValue = useRef(questionCounter);

  let theme = createMuiTheme();

  const useStyles = makeStyles({
    gameContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
      height: "100%",
      paddingLeft: "40px",
      paddingRight: "40px",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "20px",
        paddingRight: "20px",
      },
    },
    gameOver: {
      position: "absolute",
      top: "450px",
      width: "400px",
      height: "50px",
      [theme.breakpoints.down("xs")]: {
        width: "300px",
        height: "50px",
      },
    },

    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      width: 688,
      height: 150,
    },
  });

  const classes = useStyles();

  const startTimer = () => {
    setTimer(
      setTimeout(() => {
        handleButton(null);
      }, timerTime * 1000)
    );
  };

  useEffect(() => {
    counterValue.current = questionCounter; // Konstig lösning för setTimeout-state problemet
  });

  const startGame = () => {
    setIsLoaded(false);
    setQuestionCounter(0);
    setGameOver(false);
    setScore(0);
    getQuestions(questionAmount, getCategory(category))
      .then((data) => {
        setQuestionList(
          data.map((elem) => ({
            question: elem.question,
            correctAnswer: elem.correct_answer,
            incorrectAnswers: elem.incorrect_answers,
          }))
        );
        setIsLoaded(true);
        setStartTime(new Date());
        if (gameMode === "1") {
          startTimer();
        }
      })
      .catch((err) => console.log(err));
  };

  const updateAnswers = () => {
    if (questionList[0] !== undefined) {
      let answers = [
        ...questionList[questionCounter].incorrectAnswers,
        questionList[questionCounter].correctAnswer,
      ];
      for (var i = answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
      }
      setAnswerList(answers);
    }
  };

  useEffect(() => {
    startGame(gameMode);
  }, []);

  useEffect(() => {
    updateAnswers();
  }, [questionList, questionCounter]);

  const handleButton = (answer) => {
    clearTimeout(timer);
    setAnswered(true);
    if (answer !== null) {
      if (answer === questionList[questionCounter].correctAnswer) {
        setScore(score + 1);
      } else {
        setIncorectAnswer(answer);
      }
    }
    setTimeout(nextQuestion, 1500);
  };

  const nextQuestion = () => {
    setAnswered(false);
    setIncorectAnswer("");
    if (counterValue.current < questionAmount - 1) {
      setQuestionCounter(counterValue.current + 1);
      updateAnswers();
      if (gameMode === "1") {
        startTimer();
      }
    } else {
      stopGame();
    }
  };

  const stopGame = () => {
    setGameOver(true);
    const totalTime = new Date(Date.now() - startTime)
      .toISOString()
      .substr(14, 5);
    switch (gameMode) {
      case "0":
        saveStandard(name, category, score);
        break;
      case "1":
        saveTimeAttack(name, category, score, totalTime);
        break;
      default:
        break;
    }
    clearInterval(timer);
  };

  if (gameOver) {
    return (
      <div className={classes.gameContainer}>
        <Typography variant="h2">Game over!</Typography>
        <Typography variant="h5">
          Your score: {score} points out of {questionAmount}
        </Typography>
        <ButtonGroup
          className={classes.gameOver}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          fullWidth
          label="Buttons"
        >
          <Button component={Link} to={"/"}>
            <Typography>Quit</Typography>
          </Button>
          <Button
            onClick={() => {
              startGame(gameMode);
            }}
          >
            <Typography>Restart</Typography>
          </Button>
        </ButtonGroup>
      </div>
    );
  }

  if (isLoaded)
    return (
      <div className={classes.gameContainer}>
        <div className="game-upper">
          <div className="question-container">
            <Card className={classes.card}>
              <Typography className={classes.question}>
                {decode(questionList[questionCounter]?.question) ??
                  "Loading..."}
              </Typography>
            </Card>
          </div>
        </div>

        {isLoaded && gameMode === "1" ? (
          <TimerBar time={timerTime} start={!answered}></TimerBar>
        ) : null}

        <div className="game-lower">
          <div className="answer-container">
            <Typography>
              <GameCards
                answers={answerList}
                onClick={handleButton}
                correctAnswer={questionList[questionCounter]?.correctAnswer}
                incorrectAnswer={incorrectAnswer}
                answered={answered}
              />
            </Typography>
          </div>
        </div>

        <Typography paragraph="true" variant="h4">
          Score: {score}
        </Typography>
      </div>
    );

  return (
    <div className={classes.gameContainer}>
      <img src={process.env.PUBLIC_URL + "/spinner.svg"} alt="Loading..."></img>
    </div>
  );
}

export default Game;
