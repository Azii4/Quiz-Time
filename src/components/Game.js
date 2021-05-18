import "../css/game.css"

function Game() {
    return (
        <div className="game-container">
            <div className="game-upper">
            <div className="question-container">
                <p>What is the answer to this question?</p>
            </div>
            </div>
            <div className="game-lower">
                <div className="answer-container">
                    <div className="answer-upper">
                        <button>Answer 1</button>
                        <button>Answer 2</button>
                    </div>
                    <div className="answer-lower">
                        <button>Answer 3</button>
                        <button>Answer 4</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game