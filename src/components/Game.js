import "../css/game.css"
import {useState, useEffect, useRef} from 'react'
import {getQuestions, getCategory} from '../modules/triviaApi'
import {useLocation} from 'react-router-dom'
import {saveStandard, saveTimeAttack} from './LocalStorage'
import Spelkort from "./Spelkort";

const questionAmount = 10;

function Game(props) {
    const {search} = useLocation()
    const searchParams = new URLSearchParams(search)

    const [questionList, setQuestionList] = useState([])
    const [questionCounter, setQuestionCounter] = useState(0)
    const [answerList, setAnswerList] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [startTime, setStartTime] = useState(0)
    const [gameMode, setGameMode] = useState(searchParams.get('mode')) // Tanken är att ha 0 för standard och 1 för timeattack
    const [name, setName] = useState(searchParams.get('name'))
    const [category, setCategory] = useState(searchParams.get('cat')) 
    const [timer, setTimer] = useState(null)

    const counterValue = useRef(questionCounter)

    const startTimer = () => {
        setTimer(setTimeout(() => {
            nextQuestion()
        }, 10000))
    }

    useEffect(() => {
        counterValue.current = questionCounter // Konstig lösning för setTimeout-state problemet
    })

    const startGame = (mode) => {
        setIsLoaded(false)
        setQuestionCounter(0)
        setGameOver(false)
        setScore(0)
        getQuestions(questionAmount, getCategory(category))
        .then(data => {
            setQuestionList(data.map(elem => ({
                question: elem.question,
                correctAnswer: elem.correct_answer,
                incorrectAnswers: elem.incorrect_answers
            })))
            setIsLoaded(true)
            setStartTime(new Date())
            if(gameMode === "1") {
                startTimer()
            }
        })
        .catch(err => console.log(err))
    }

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
    startGame(gameMode)
  }, [])

  useEffect(() => {
    updateAnswers();
  }, [questionList, questionCounter]);


  const handleButton = (e) => {
    if(e.target.innerHTML === questionList[questionCounter].correctAnswer) {
        setScore(score + 1)
        }
        nextQuestion()
    }
  const nextQuestion = () => {
     clearTimeout(timer)
        if(counterValue.current < questionAmount - 1) {
            console.log("Updating question")
            setQuestionCounter(counterValue.current + 1)
            updateAnswers()
            if(gameMode === "1") {
                startTimer()
            }
        } else {
            stopGame()
        }
    }

    const stopGame = () => {
        setGameOver(true)
        const totalTime = new Date(Date.now() - startTime).toISOString().substr(14, 5)
        switch (gameMode) {
            case "0":
                saveStandard(name, category, score)
                break;
            case "1":
                saveTimeAttack(name, category, score, totalTime)
                break;
            default:
                break;
        }
        clearInterval(timer)
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
      <Spelkort />
    </div>
  );
}

export default Game;
