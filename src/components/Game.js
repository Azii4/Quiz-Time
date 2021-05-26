import "../css/game.css"
import {useState, useEffect} from 'react'
import {getQuestions, Categories} from '../modules/triviaApi'

function Game() {
    const [questionList, setQuestionList] = useState([])
    const [questionCounter, setQuestionCounter] = useState(0)
    const [answerList, setAnswerList] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const refreshQuestions = () => {
        setIsLoaded(false)
        setQuestionCounter(0)
        getQuestions(10, Categories.GENERAL_KNOWLEDGE)
        .then(data => {
            console.log(data)
            setQuestionList(data.map(elem => ({
                question: elem.question,
                correctAnswer: elem.correct_answer,
                incorrectAnswers: elem.incorrect_answers
            })))
            setIsLoaded(true)
            updateAnswers()
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
        refreshQuestions()
    }, [])

    useEffect(() => {
        updateAnswers()
    }, [questionList, questionCounter])

    const handleButton = (e) => {
        console.log(e.target.innerHTML)
        if(questionCounter < 10)
            setQuestionCounter(questionCounter + 1)
        else {
            refreshQuestions()
        }
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