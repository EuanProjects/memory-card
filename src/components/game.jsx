import { useState } from "react"
import Card from "./card"
import ReactHowler from 'react-howler';

function Game() {
    // guesses set[]
    const [guesses, setGuesses] = useState(0);
    const [playSound, setPlaySound] = useState(false);

    function handleMove() {
        if (!playSound) {
            setPlaySound(true);
            setTimeout(() => {
                setPlaySound(false);
            }, 2500);
            setGuesses((guesses + 1) % 5);
        }
    }
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
        <button onClick={handleMove}>Card</button>
        <ReactHowler
                    src={`/src/assets/valorant-kill-${guesses + 1}.mp3`}
                    playing={playSound}
                    volume={0.025}
        />
        {/* <Card name={name} fullPortrait={fullPortrait} handleMove={handleMove}/> */}
        </>
    )
}

export default Game