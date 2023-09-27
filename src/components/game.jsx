import { useState } from "react"
import Card from "./card"
import { Howl } from "howler";

function Game({ playSound, gameCharacters, difficulty }) {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [moves, setMoves] = useState(new Set());
    const [isGameOver, setIsGameOver] = useState(false);
    const wonOrLoss = moves.size + 1 === difficulty.guesses;
    const currentLevel = currentScore === difficulty.guesses ? currentScore - 1 : currentScore; 

    const kill = new Howl({
        src: [`/src/assets/valorant-kill-${(currentScore) % 5 + 1}.mp3`],
        volume: 0.1
    });

    const death = new Howl({
        src: ['/src/assets/brim-death.mp3'],
        volume: 0.1
    })

    function handleRestart() {
        setCurrentScore(0);
        setMoves(new Set());
        setIsGameOver(false);
    }

    // generateRandomGame()
    // scramble the order of the levels

    function handleMove(name) {
        if (moves.has(name)) {
            if (playSound) {
                death.play();
            }
            console.log("lose");
            setBestScore(Math.max(currentScore, bestScore))
            setIsGameOver(true);
        } else if (moves.size + 1 === difficulty.levels.length) {
            if (playSound) {
                kill.play();
            }
            console.log("won");
            setCurrentScore(currentScore + 1);
            setBestScore(Math.max(currentScore + 1, bestScore))
            setIsGameOver(true);
        } else {
            if (playSound) {
                kill.play();
            }
            setCurrentScore(currentScore + 1);
            const updatedMoves = new Set(moves);
            updatedMoves.add(name);
            setMoves(updatedMoves);
        }
    }

    return (
        <>

            {
                isGameOver &&
                <>
                    <div className="grid place-items-center z-10 w-[100vw] h-[100vh] absolute bg-black opacity-50 ">
                        <div className="z-20 w-[100px] h-[100px] bg-valorantred text-white opacity-100">
                            <div>{wonOrLoss ? "won" : "lost"}</div>
                            <button onClick={() => handleRestart()}>Restart</button>
                        </div>

                    </div>
                </>
            }
            <header className="flex align-top flex-wrap justify-between px-4 flex-wrap w-full h-[200px]">
                <button className="h-10"><a href="/">Home</a></button>
                <div>
                    <p>Score: {currentScore}</p>
                    <p>Best Score: {bestScore}</p>
                </div>
            </header>

            {
                gameCharacters &&
                <>
                    <div className="flex flex-wrap w-[80%] justify-evenly mx-auto">
                        {difficulty.levels[currentLevel].map((characterIndex) => (
                            <Card
                                key={gameCharacters[characterIndex].displayName}
                                name={gameCharacters[characterIndex].displayName}
                                fullPortrait={gameCharacters[characterIndex].fullPortrait}
                                handleMove={handleMove}
                                isGameOver={isGameOver}
                            />
                        ))}
                    </div>
                </>
            }

        </>
    )
}

export default Game