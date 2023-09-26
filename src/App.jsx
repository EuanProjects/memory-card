import { useState } from 'react'
import './App.css'
import MusicPlayer from './components/musicPlayer';
import Game from './components/game';

function App() {
  const [playMusic, setPlayMusic] = useState(true);
  const [playSound, setPlaySound] = useState(false);
  // AllCharacters [{name, fullportrait, displayIcon}]
  // characterForCards [{name, fullportrait, displayIcon}]
  // levels [[0,1,2]] etc
  // difficulty null
  // sounds = true
  // music = true

  // handleDifficultyChoice
  
  // useEffect to get characters

  // handleSoundToggle

  // handleMusicToggle

  // generateRandomLevel



  return (
    <>
    <div>hello</div>
    <MusicPlayer />
    <Game />
    {/*
      !difficulty &&
      home

      difficulty &&
      game {sound}
  */}
    </>
  )
}

export default App
