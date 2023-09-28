import { useState, useEffect } from "react"
import Card from "./card"
import { Howl } from "howler";
import Modal from "./modal";

function Game({ playSound, gameCharacters, difficulty, setDifficulty }) {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [moves, setMoves] = useState(new Set());
    const [isGameOver, setIsGameOver] = useState(false);
    const [playGameVideo, setPlayGameVideo] = useState(false);
    const wonOrLoss = currentScore === difficulty.guesses;
    const currentLevel = currentScore === difficulty.guesses ? currentScore - 1 : currentScore;

    useEffect(() => {
        function generateRandomLevels(levels) {
            const shuffledLevels = [...levels];
            for (let i = shuffledLevels.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledLevels[i], shuffledLevels[j]] = [shuffledLevels[j], shuffledLevels[i]];
            }

            return shuffledLevels;
        }
        if (difficulty.levels) {
            setDifficulty((prevDifficulty) => ({
                ...prevDifficulty,
                levels: generateRandomLevels(prevDifficulty.levels),
            }));
        }
    }, []);

    useEffect(() => {
        const delay = 5000;
        const timer = setTimeout(() => {
            setPlayGameVideo(true);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    });

    const kill = new Howl({
        src: [`/valorant-kill-${(currentScore) % 5 + 1}.mp3`],
        volume: 0.1
    });

    const death = new Howl({
        src: ['/brim-death.mp3'],
        volume: 0.1
    })

    function handleRestart() {
        setCurrentScore(0);
        setMoves(new Set());
        setIsGameOver(false);
    }

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
                !playGameVideo &&
                <video autoPlay muted loop id="myVideo" className='h-screen w-screen object-cover fixed -z-10'>
                    <source src="loading-valorant.mp4" type="video/mp4" loading="lazy" />
                </video>
            }
            {
                playGameVideo &&
                <video autoPlay muted loop id="myVideo" className='h-screen w-screen fixed object-cover -z-10'>
                    <source src="/game.mp4" type="video/mp4" loading="lazy" />
                </video>
            }
            {
                isGameOver &&
                <Modal wonOrLoss={wonOrLoss} handleRestart={handleRestart} />
            }
            {
                playGameVideo &&
                gameCharacters &&
                <>
                    <header className="flex align-top flex-wrap justify-between px-4 py-10 w-full h-[10%]">
                        <button className="bg-valorantblack rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a href="/"><img src="/valorant_logo.png" alt="My Image" className=" w-40 h-40" /></a></button>
                        <div className="font-valorant bg-valorantred h-[75px] px-4 rounded-lg flex flex-col justify-center border-4 border-valorantblack">
                            <p>Score: {currentScore}</p>
                            <p>Best Score: {bestScore}</p>
                        </div>
                    </header>
                    <div className="flex flex-wrap w-[80%] h-[70vh] gap-5 justify-center items-center mx-auto">
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