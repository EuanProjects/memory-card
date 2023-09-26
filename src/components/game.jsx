import Card from "./card"

function Game({ level, }) {
    // guesses set[]
    // bestScore num
    // currentScore = guesses.length
    
    // generateRandomGame()
        // scramble the order of the levels

    // handleMove(name)
        // didLose()

        // add to guesses
        // didWin


    // didWin()
        // if (set.length === levels.length) 
            // bestScore = Math.max(currentScore, bestScore)
            // display win
    // didLose()
        // if guesses.contains(name)
            // bestScore = Math.max(currentScore, bestScore)
            // diplay loss
    // handleRestart()

    return (
        <>
        <Card name={name} fullPortrait={fullPortrait} handleMove={handleMove}/>
        </>
    )
}

export default Game