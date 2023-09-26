import { useState } from 'react';
import ReactHowler from 'react-howler';

function MusicPlayer() {
    function handleMusicToggle() {
        playMusic ? setPlayMusic(false) : setPlayMusic(true)
    }
    return (
        <>
            <div>
                <ReactHowler
                    src='/src/assets/Zedd.mp3'
                    playing={playMusic}
                    volume={0.025}
                    loop={true}
                />
                <div onClick={handleMusicToggle}>toggle music</div>
            </div>
        </>
    );
}

export default MusicPlayer;
