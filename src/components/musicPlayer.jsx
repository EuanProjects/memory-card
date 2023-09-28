import ReactHowler from 'react-howler';
import { Volume2, VolumeX, Bell, BellOff } from 'react-feather';

function MusicPlayer({ playMusic, setPlayMusic, playSound, setPlaySound }) {
    function handleMusicToggle() {
        playMusic ? setPlayMusic(false) : setPlayMusic(true)
    }

    function handleSoundToggle() {
        playSound ? setPlaySound(false) : setPlaySound(true);
    }
    return (
        <>
            <div className="fixed inset-x-0 bottom-4 sm:p-10 xs:p-3">
                <div className="flex flex-col sm:flex-row items-start">
                    <button className="bg-slate-200 mx-5 w-12 h-12 rounded-full bg-valorantred border-2 border-valorantblack" onClick={handleMusicToggle}>
                        {playMusic ? <Volume2 className="m-auto" /> : <VolumeX className="m-auto" />}
                    </button>
                    <button className="bg-slate-200 mx-5 w-12 h-12 rounded-full bg-valorantred border-2 border-valorantblack" onClick={handleSoundToggle}>
                        {playSound ? <Bell className="m-auto" /> : <BellOff className="m-auto" />}
                    </button>
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
