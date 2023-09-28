import { useEffect, useState } from 'react'
import './App.css'
import MusicPlayer from './components/musicPlayer';
import Game from './components/game';
import Start from './components/start'
import Home from './components/home';
import easyDifficulty from "./data/easyDifficulty";
import hardDifficulty from "./data/hardDifficulty";
import mediumDifficulty from "./data/mediumDifficulty";

function App() {
  const [playMusic, setPlayMusic] = useState(false);
  const [playSound, setPlaySound] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [characterInfo, setCharacterInfo] = useState(null);
  const [gameCharacters, setGameCharacters] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents', { mode: 'cors' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const filteredCharacters = data.data.filter((character) => character.isPlayableCharacter);
        setCharacterInfo(filteredCharacters.map((character) => ({
          displayName: character.displayName,
          displayIcon: character.displayIcon,
          fullPortrait: character.fullPortrait
        })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    function generateGameCharacters(guesses) {
      const shuffledArray = [...characterInfo];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }

      return shuffledArray.slice(0, guesses);
    }
    if (difficulty && characterInfo) {
      setGameCharacters(generateGameCharacters(difficulty.guesses));
    }
  }, [difficulty, characterInfo]);

  function handleDifficulty(diffType) {
    if (diffType === "Easy") {
      setDifficulty({ guesses: 5, cards: 3, levels: easyDifficulty })
    } else if (diffType === "Medium") {
      setDifficulty({ guesses: 7, cards: 4, levels: mediumDifficulty })
    } else {
      setDifficulty({ guesses: 10, cards: 5, levels: hardDifficulty })
    }
  }

  // generateRandomLevel



  return (
    <>
      {/* <div className="h-[100vh] w-[100vw]" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundSize: 'contain' }}> */}
      {
      !difficulty &&
      <video autoPlay muted loop id="myVideo" className='w-[100vw] h-[100vh] object-cover absolute -z-10'>
        <source src="src/assets/valorant-background-loop.mp4" type="video/mp4" loading="lazy"/>
      </video>
     }

      {!startGame &&
        <Start className="z-30" setStartGame={setStartGame} />
      }


      {
        startGame &&
        !difficulty &&
        <Home handleDifficulty={handleDifficulty} />
      }

      {
        startGame &&
        difficulty &&
        <>
          <Game playSound={playSound} gameCharacters={gameCharacters} difficulty={difficulty} />
        </>
      }

      <MusicPlayer playMusic={playMusic} setPlayMusic={setPlayMusic} playSound={playSound} setPlaySound={setPlaySound} />
      {/* </div> */}
    </>
  )
}

export default App
