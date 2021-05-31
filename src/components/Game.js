import "../css/game.css";
import { useState, useEffect, useRef } from "react";
import { getQuestions, getCategory } from "../modules/triviaApi";
import { useLocation, Link } from "react-router-dom";
import { saveStandard, saveTimeAttack } from "./LocalStorage";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Spelkort from "./Spelkort";
import TimerBar from "./TimerBar";
import { ButtonGroup, Button } from "@material-ui/core";

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
  const [gameMode, setGameMode] = useState(searchParams.get("mode")); // Tanken är att ha 0 för standard och 1 för timeattack
  const [name, setName] = useState(searchParams.get("name"));
  const [category, setCategory] = useState(searchParams.get("cat"));
  const [timer, setTimer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [incorrectAnswer, setIncorectAnswer] = useState("");

  const counterValue = useRef(questionCounter);

  const useStyles = makeStyles({
    card: {
      minWidth: "700",
      minHeight: "100",
    },
    question: {
      padding: "10%",
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

  const startGame = (mode) => {
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
    clearTimeout(timer);
    if (counterValue.current < questionAmount - 1) {
      console.log("Updating question");
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
      <div className="game-container">
        <h1>Game over!</h1>
        <h2>
          Your score: {score} points out of {questionAmount}
        </h2>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          fullWidth
          label="Buttons"
        >
          <Button component={Link} to={"/"}>
            Quit
          </Button>
          <Button
            onClick={() => {
              startGame(gameMode);
            }}
          >
            Restart
          </Button>
        </ButtonGroup>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="game-upper">
        <div className="question-container">
          <Card className={classes.card}>
            <Typography className={classes.question}>
              {questionList[questionCounter]?.question ?? "Loading..."}
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
            <Spelkort
              answers={answerList}
              onClick={handleButton}
              correctAnswer={questionList[questionCounter]?.correctAnswer}
              incorrectAnswer={incorrectAnswer}
              answered={answered}
            />
          </Typography>
        </div>
      </div>
      <h1>Score: {score}</h1>
    </div>
  );
}

export default Game;
