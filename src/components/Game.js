import "../css/game.css";
import { useState, useEffect } from "react";
import { getQuestions, Categories } from "../modules/triviaApi";

const questionAmount = 10;

function Game(props) {
  const [questionList, setQuestionList] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [gameMode, setGameMode] = useState(props.gamemode ?? 0); // Tanken är att ha 0 för standard och 1 för timeattack

  const startGame = () => {
    setIsLoaded(false);
    setQuestionCounter(0);
    setGameOver(false);
    setScore(0);
    getQuestions(questionAmount, props.category ?? Categories.MATHEMATICS)
      .then((data) => {
        console.log(data);
        setQuestionList(
          data.map((elem) => ({
            question: elem.question,
            correctAnswer: elem.correct_answer,
            incorrectAnswers: elem.incorrect_answers,
          }))
        );
        setIsLoaded(true);
        setStartTime(new Date());
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
    startGame();
  }, []);

  useEffect(() => {
    updateAnswers();
  }, [questionList, questionCounter]);

  const handleButton = (e) => {
    if (questionCounter < questionAmount - 1) {
      if (e.target.innerHTML === questionList[questionCounter].correctAnswer) {
        setScore(score + 1);
      }
      setQuestionCounter(questionCounter + 1);
      updateAnswers();
    } else {
      setGameOver(true);
      setTotalTime(Math.round((new Date() - startTime) / 1000));
    }
  };

  if (gameOver) {
    return (
      <div className="game-container">
        <h1>Game over!</h1>
        <h2>
          Your score: {score} points out of {questionAmount}
        </h2>
      </div>
    );
  }
  return (
    <div className="game-container">
      <div className="game-upper">
        <div className="question-container">
          <p>{questionList[questionCounter]?.question ?? "Loading..."}</p>
        </div>
      </div>
      <div className="game-lower">
        <div className="answer-container">
          {isLoaded === false ? null : (
            <>
              <div className="answer-upper">
                {answerList.map((answer) => (
                  <button onClick={handleButton}>{answer}</button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
