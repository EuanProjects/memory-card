import ReactHowler from 'react-howler';

function MusicPlayer({ playMusic, setPlayMusic, playSound, setPlaySound }) {
    function handleMusicToggle() {
        playMusic ? setPlayMusic(false) : setPlayMusic(true)
    }

    function handleSoundToggle() {
        playSound ? setPlaySound(false) : setPlaySound(true);
    }
    return (
        <>
            <div className="flex w-full h-[15px]">
                <div>
                    <button className="bg-slate-200"  onClick={handleMusicToggle}>{`Music ${playMusic}`}</button>
                    <button className="bg-slate-200" onClick={handleSoundToggle}>{`Sound ${playSound} `}</button>
                </div>
                <ReactHowler
                    src='/src/assets/Zedd.mp3'
                    preload={true}
                    playing={playMusic}
                    volume={0.025}
                    loop={true}
                />
            </div>
        </>
    );
}

export default MusicPlayer;
