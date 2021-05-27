import "../css/game.css"
import {useState, useEffect} from 'react'
import {getQuestions, Categories} from '../modules/triviaApi'
import {useLocation} from 'react-router-dom'
import {saveStandard} from './LocalStorage'

const questionAmount = 10;

function Game(props) {
    const {search} = useLocation()
    const searchParams = new URLSearchParams(search)
    const name = searchParams.get('name')
    let category = searchParams.get('cat')
    switch(category) {
        case "movies":
            category = Categories.FILM
            break;
        case "music":
            category = Categories.MUSIC
            break;
        case "videoGames":
            category = Categories.VIDEO_GAMES
            break;
        case "history":
            category = Categories.HISTORY
            break;
        case "geography":
            category = Categories.GEOGRAPHY
            break;
        case "animals":
            category = Categories.ANIMALS
            break;
        default:
            category = ""
    }
    const gamemode = searchParams.get('mode')

    console.log(name, category, gamemode)

    const [questionList, setQuestionList] = useState([])
    const [questionCounter, setQuestionCounter] = useState(0)
    const [answerList, setAnswerList] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [startTime, setStartTime] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [gameMode, setGameMode] = useState(props.gamemode ?? 0) // Tanken är att ha 0 för standard och 1 för timeattack

    const startGame = () => {
        setIsLoaded(false)
        setQuestionCounter(0)
        setGameOver(false)
        setScore(0)
        getQuestions(questionAmount, category)
        .then(data => {
            console.log(data)
            setQuestionList(data.map(elem => ({
                question: elem.question,
                correctAnswer: elem.correct_answer,
                incorrectAnswers: elem.incorrect_answers
            })))
            setIsLoaded(true)
            setStartTime(new Date())
        })
        .catch(err => console.log(err))
    }

    const updateAnswers = () => {
        if (questionList[0] !== undefined) {
            let answers = [...questionList[questionCounter].incorrectAnswers, questionList[questionCounter].correctAnswer]
            for (var i = answers.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = answers[i];
                answers[i] = answers[j];
                answers[j] = temp;
            }
            setAnswerList(answers)
        }
    }

    useEffect(() => {
        startGame()
    }, [])

    useEffect(() => {
        updateAnswers()
    }, [questionList, questionCounter])

    const handleButton = (e) => {
        if(questionCounter < questionAmount - 1) {
            if(e.target.innerHTML === questionList[questionCounter].correctAnswer) {
                setScore(score + 1)
            }
            setQuestionCounter(questionCounter + 1)
            updateAnswers()
        } else {
            setGameOver(true)
            setTotalTime(Math.round((new Date() - startTime) / 1000))
            saveStandard(name, category, score)
        }
    }

    if(gameOver) {
        return (
            <div className="game-container">
                <h1>Game over!</h1>
                <h2>Your score: {score} points out of {questionAmount}</h2>
            </div>
        )
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
                    {
                        isLoaded === false ? null : (
                            <>
                                <div className="answer-upper">
                                    <button onClick={handleButton}>{answerList[0]}</button>
                                    <button onClick={handleButton}>{answerList[1]}</button>
                                </div>
                                <div className="answer-lower">
                                    <button onClick={handleButton}>{answerList[2]}</button>
                                    <button onClick={handleButton}>{answerList[3]}</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Game